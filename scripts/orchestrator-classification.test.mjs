import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { orchestrators } from "../src/data/orchestrators.ts";

const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
const candidates = [
  ["scion", "GoogleCloudPlatform/scion", "Parallel Coding-Agent Runners"],
  ["openrig", "mvschwarz/openrig", "Coordination And Team Systems"],
  ["ccswarm", "nwiizo/ccswarm", "Parallel Coding-Agent Runners"],
  ["ruflo", "ruvnet/ruflo", "Coordination And Team Systems"],
  ["microsoft-agent-framework", "microsoft/agent-framework", "Multi-Agent Platforms And Builders"],
  ["langgraph", "langchain-ai/langgraph", "Multi-Agent Platforms And Builders"]
];

for (const [slug, repo, category] of candidates) {
  test(`${slug} has one source-backed entry in the correct category`, () => {
    const matches = orchestrators.filter((entry) => entry.slug === slug);
    assert.equal(matches.length, 1);
    const entry = matches[0];
    assert.equal(entry.githubRepo, repo);
    assert.equal(entry.category, category);
    assert.notEqual(entry.visibility, "not-open-important");
    assert.ok(entry.links.some((link) => link.href === `https://github.com/${repo}`));
    assert.ok(entry.links.some((link) => /\/blob\/(main|master)\/README\.md$/.test(link.href)));
    assert.ok(entry.links.some((link) => /\/LICENSE$/.test(link.href)));
    assert.ok(entry.note.length > 0);

    const latest = readme.split("## Latest Additions\n")[1].split("\n## Contents")[0];
    const section = readme.split(`## ${category}\n`)[1].split("\n## ")[0];
    assert.ok(latest.includes(`[${entry.title}](https://github.com/${repo})`));
    assert.ok(section.includes(`[${entry.title}](https://github.com/${repo})`));
    for (const otherCategory of new Set(candidates.map((candidate) => candidate[2]))) {
      if (otherCategory !== category) {
        const otherSection = readme.split(`## ${otherCategory}\n`)[1].split("\n## ")[0];
        assert.ok(!otherSection.includes(`[${entry.title}](https://github.com/${repo})`));
      }
    }
  });

  test(`${slug} keeps generated editorial art separate from screenshots and native integrations`, () => {
    const entry = orchestrators.find((entry) => entry.slug === slug);
    assert.equal(entry.mark.kind, "monogram");
    assert.deepEqual(entry.screenshots, []);
    assert.equal(entry.editorialImage.src, `/images/players/${slug}/${slug}-editorial.webp`);
    assert.match(entry.editorialImage.alt, /Generated conceptual illustration/);
    assert.match(entry.editorialImage.caption, /Generated editorial artwork.*not a product screenshot/);
    assert.deepEqual(entry.agentAnalytics.screenshots, []);
    assert.match(entry.agentAnalytics.setupNotes, /optional.*not a native/);
    assert.match(entry.agentAnalytics.setupNotes, /separately/);
  });
}

test("frameworks state application implementation and service boundaries", () => {
  const microsoft = orchestrators.find((entry) => entry.slug === "microsoft-agent-framework");
  const langgraph = orchestrators.find((entry) => entry.slug === "langgraph");
  assert.match(microsoft.note, /not a ready-made parallel coding-agent workspace/);
  assert.match(langgraph.note, /developers implement multi-agent composition/);
  assert.match(langgraph.note, /LangSmith.*separate.*MIT-licensed LangGraph core/);
});

const removedSlugs = ["openbot", "sidjua", "oh-my-graph", "alfred", "wave", "agent-007", "the-perfect-orchestrator"];
const starData = JSON.parse(await readFile(new URL("../src/data/github-stars.json", import.meta.url), "utf8"));
for (const slug of removedSlugs) {
  test(`${slug} is removed from the directory and star cache`, () => {
    assert.ok(!orchestrators.some((entry) => entry.slug === slug));
    assert.ok(!(slug in starData));
  });
}
test("removed projects are no longer listed in README", () => {
  for (const title of ["OpenBot", "SIDJUA", "oh-my-graph", "Alfred", "Wave", "Agent 007", "the-perfect-orchestrator"]) {
    assert.ok(!readme.includes(`[${title}](`), title);
  }
});
