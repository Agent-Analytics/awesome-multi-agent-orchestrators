import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

import {
  extractArrayContents,
  extractRepoMap,
  extractTopLevelObjects
} from "./fetch-github-stars.mjs";

const orchestratorsSource = await readFile(new URL("../src/data/orchestrators.ts", import.meta.url), "utf8");
const marker = "export const orchestrators: OrchestratorEntry[] = [";

test("extractArrayContents returns the orchestrators array contents", () => {
  const arrayContents = extractArrayContents(orchestratorsSource, marker);

  assert.match(arrayContents, /slug:\s*"cabinet"/);
  assert.match(arrayContents, /githubRepo:\s*"hilash\/cabinet"/);
});

test("extractTopLevelObjects returns orchestrator entries from the array", () => {
  const arrayContents = extractArrayContents(orchestratorsSource, marker);
  const objects = extractTopLevelObjects(arrayContents);

  assert.ok(objects.length > 0);
  assert.match(objects[0], /slug:\s*"cabinet"/);
});

test("extractRepoMap finds github repos for orchestrator entries", () => {
  const repoMap = extractRepoMap(orchestratorsSource);

  assert.equal(repoMap.cabinet, "hilash/cabinet");
  assert.equal(repoMap.gastown, "gastownhall/gastown");
});
