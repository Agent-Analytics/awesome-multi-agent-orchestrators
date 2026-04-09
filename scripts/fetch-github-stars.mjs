#!/usr/bin/env node

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";

const ROOT_DIR = resolve(fileURLToPath(new URL(".", import.meta.url)), "..");
const ORCHESTRATORS_PATH = resolve(ROOT_DIR, "src/data/orchestrators.ts");
const GITHUB_STARS_PATH = resolve(ROOT_DIR, "src/data/github-stars.json");
const ORCHESTRATORS_MARKER = "export const orchestrators: OrchestratorEntry[] = [";
const GITHUB_GRAPHQL_URL = process.env.GITHUB_GRAPHQL_URL ?? "https://api.github.com/graphql";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;

function extractArrayContents(source, marker) {
  const markerIndex = source.indexOf(marker);

  if (markerIndex === -1) {
    throw new Error(`Could not find orchestrators array marker in ${ORCHESTRATORS_PATH}.`);
  }

  const arrayStart = source.indexOf("[", markerIndex);

  if (arrayStart === -1) {
    throw new Error(`Could not find orchestrators array start in ${ORCHESTRATORS_PATH}.`);
  }

  let depth = 0;
  let inString = false;
  let stringQuote = "";
  let escaped = false;

  for (let index = arrayStart; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }

      if (char === "\\") {
        escaped = true;
        continue;
      }

      if (char === stringQuote) {
        inString = false;
        stringQuote = "";
      }

      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = true;
      stringQuote = char;
      continue;
    }

    if (char === "[") {
      depth += 1;
      continue;
    }

    if (char === "]") {
      depth -= 1;

      if (depth === 0) {
        return source.slice(arrayStart + 1, index);
      }
    }
  }

  throw new Error(`Could not find orchestrators array end in ${ORCHESTRATORS_PATH}.`);
}

function extractTopLevelObjects(source) {
  const objects = [];
  let depth = 0;
  let objectStart = -1;
  let inString = false;
  let stringQuote = "";
  let escaped = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }

      if (char === "\\") {
        escaped = true;
        continue;
      }

      if (char === stringQuote) {
        inString = false;
        stringQuote = "";
      }

      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      inString = true;
      stringQuote = char;
      continue;
    }

    if (char === "{") {
      if (depth === 0) {
        objectStart = index;
      }

      depth += 1;
      continue;
    }

    if (char === "}") {
      depth -= 1;

      if (depth === 0 && objectStart !== -1) {
        objects.push(source.slice(objectStart, index + 1));
        objectStart = -1;
      }
    }
  }

  return objects;
}

function extractRepoMap(source) {
  const arrayContents = extractArrayContents(source, ORCHESTRATORS_MARKER);
  const repoEntries = extractTopLevelObjects(arrayContents)
    .map((entrySource) => {
      const slug = entrySource.match(/\bslug:\s*"([^"]+)"/)?.[1];
      const githubRepo = entrySource.match(/\bgithubRepo:\s*"([^"]+)"/)?.[1];

      if (!slug || !githubRepo) {
        return null;
      }

      return [slug, githubRepo];
    })
    .filter(Boolean);

  if (repoEntries.length === 0) {
    throw new Error(`No githubRepo entries found in ${ORCHESTRATORS_PATH}.`);
  }

  return Object.fromEntries(repoEntries);
}

function buildGraphQLQuery(repoMap) {
  const aliasToSlug = new Map();
  const slugToAlias = new Map();
  const lines = ["query FetchGitHubStars {"];

  for (const [slug, repo] of Object.entries(repoMap)) {
    const [owner, name] = repo.split("/");

    if (!owner || !name) {
      throw new Error(`Invalid GitHub repo identifier for ${slug}: ${repo}`);
    }

    const alias = `repo_${slug.replace(/[^A-Za-z0-9_]/g, "_")}`;
    aliasToSlug.set(alias, slug);
    slugToAlias.set(slug, alias);
    lines.push(
      `  ${alias}: repository(owner: ${JSON.stringify(owner)}, name: ${JSON.stringify(name)}) {`,
      "    stargazerCount",
      "  }"
    );
  }

  lines.push("}");

  return {
    aliasToSlug,
    slugToAlias,
    query: lines.join("\n")
  };
}

async function fetchGitHubStars(query) {
  if (!GITHUB_TOKEN) {
    throw new Error("GITHUB_TOKEN or GH_TOKEN is required to fetch GitHub stars.");
  }

  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      authorization: `Bearer ${GITHUB_TOKEN}`,
      "content-type": "application/json",
      "user-agent": "open-orchestrators-github-stars"
    },
    body: JSON.stringify({ query })
  });

  const responseText = await response.text();
  let payload;

  try {
    payload = JSON.parse(responseText);
  } catch (error) {
    throw new Error(
      `GitHub GraphQL response was not valid JSON: ${error instanceof Error ? error.message : String(error)}`
    );
  }

  if (!response.ok) {
    const message =
      payload?.message ??
      payload?.errors?.map((error) => error.message).join("; ") ??
      response.statusText;
    throw new Error(`GitHub GraphQL request failed (${response.status}): ${message}`);
  }

  return payload;
}

function buildNextStars({ existingStars, repoMap, slugToAlias, payload, fetchedAt }) {
  const errorsByAlias = new Map();

  for (const error of payload.errors ?? []) {
    const alias = Array.isArray(error.path) ? error.path[0] : null;

    if (typeof alias === "string") {
      errorsByAlias.set(alias, error.message);
    }
  }

  const nextStars = {};
  const changedSlugs = [];
  let successfulLookups = 0;

  for (const slug of Object.keys(repoMap)) {
    const alias = slugToAlias.get(slug);
    const currentEntry = existingStars[slug];
    const repositoryResult = alias ? payload.data?.[alias] : null;

    if (repositoryResult && typeof repositoryResult.stargazerCount === "number") {
      successfulLookups += 1;

      if (!currentEntry || currentEntry.stars !== repositoryResult.stargazerCount) {
        nextStars[slug] = {
          stars: repositoryResult.stargazerCount,
          fetchedAt
        };
        changedSlugs.push(slug);
      } else {
        nextStars[slug] = currentEntry;
      }

      continue;
    }

    if (currentEntry) {
      nextStars[slug] = currentEntry;
    }

    const repo = repoMap[slug];
    const errorMessage = alias ? errorsByAlias.get(alias) : null;

    if (errorMessage) {
      console.warn(`Preserving existing stars for ${slug} (${repo}): ${errorMessage}`);
    } else {
      console.warn(`Preserving existing stars for ${slug} (${repo}): no result returned.`);
    }
  }

  return { changedSlugs, nextStars, successfulLookups };
}

async function main() {
  const orchestratorsSource = await readFile(ORCHESTRATORS_PATH, "utf8");
  const repoMap = extractRepoMap(orchestratorsSource);

  const existingSource = await readFile(GITHUB_STARS_PATH, "utf8").catch(() => "{}\n");
  const existingStars = JSON.parse(existingSource);

  const { query, slugToAlias } = buildGraphQLQuery(repoMap);
  const payload = await fetchGitHubStars(query);
  const fetchedAt = new Date().toISOString();
  const { changedSlugs, nextStars, successfulLookups } = buildNextStars({
    existingStars,
    repoMap,
    slugToAlias,
    payload,
    fetchedAt
  });

  if (successfulLookups === 0) {
    throw new Error("GitHub GraphQL returned no successful repository lookups.");
  }

  const nextSource = `${JSON.stringify(nextStars, null, 2)}\n`;

  if (nextSource === existingSource) {
    console.log("GitHub star counts unchanged.");
    return;
  }

  await writeFile(GITHUB_STARS_PATH, nextSource);

  if (changedSlugs.length === 0) {
    console.log("GitHub star counts file normalized without star count changes.");
    return;
  }

  console.log(`Updated GitHub star counts for: ${changedSlugs.join(", ")}`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
