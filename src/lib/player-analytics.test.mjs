import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { orchestrators } from "../data/orchestrators.ts";
import {
  INSTALL_METHODS,
  copyText,
  installDocsHref,
  installLinkLabel,
  promptHeading
} from "./player-analytics.mjs";

test("install links use the any-agent docs anchors", () => {
  assert.equal(
    installDocsHref("mcp"),
    "https://docs.agentanalytics.sh/installation/any-agent/#mcp"
  );
  assert.equal(
    installDocsHref("cli-and-skill"),
    "https://docs.agentanalytics.sh/installation/any-agent/#cli-and-skill"
  );
  assert.equal(
    installDocsHref("api-only"),
    "https://docs.agentanalytics.sh/installation/any-agent/#api-only"
  );
  assert.throws(() => installDocsHref("plugin"), /installMethod/);
});

test("prompt and install labels name the player", () => {
  assert.equal(
    promptHeading("kwant"),
    "Copyable product analytics prompt for kwant with Agent Analytics"
  );
  assert.equal(installLinkLabel("kwant"), "How to install Agent Analytics on kwant");
});

test("every player has one install method", () => {
  assert.ok(orchestrators.length > 0);
  for (const entry of orchestrators) {
    assert.ok(
      INSTALL_METHODS.includes(entry.installMethod),
      `${entry.slug} installMethod`
    );
  }
});

test("copy uses the clipboard, then a fallback, and does not throw", async () => {
  const writes = [];
  assert.equal(
    await copyText("measure the signup", {
      clipboard: { writeText: async (value) => writes.push(value) }
    }),
    "copied"
  );
  assert.deepEqual(writes, ["measure the signup"]);

  assert.equal(
    await copyText("prompt", {
      clipboard: {
        writeText: async () => {
          throw new Error("denied");
        }
      },
      fallbackCopy: (value) => value === "prompt"
    }),
    "copied"
  );

  assert.equal(
    await copyText("prompt", {
      clipboard: {
        writeText: async () => {
          throw new Error("denied");
        }
      },
      fallbackCopy: () => false
    }),
    "unavailable"
  );

  assert.equal(await copyText("prompt", {}), "unavailable");
});

test("the player template names the prompt, copies it, and tracks both clicks", async () => {
  const source = await readFile(new URL("../pages/players/[slug].astro", import.meta.url), "utf8");
  assert.match(source, /promptHeading\(entry\.title\)/);
  assert.match(source, /installLinkLabel\(entry\.title\)/);
  assert.match(source, /installDocsHref\(entry\.installMethod\)/);
  assert.match(source, /data-track="agent_analytics_prompt_copy"/);
  assert.match(source, /data-track="agent_analytics_install_click"/);
  assert.match(source, /data-player-slug=\{entry\.slug\}/);
  assert.match(source, /agent_analytics_install_click/);
  assert.match(source, /agent_analytics_prompt_copy/);
  assert.doesNotMatch(source, /preventDefault|return false/);
  assert.match(source, /type="button"/);
  assert.match(source, /aria-live="polite"/);
});
