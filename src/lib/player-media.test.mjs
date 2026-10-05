import test from "node:test";
import assert from "node:assert/strict";
import { getPlayerHeroMedia } from "./player-media.mjs";

test("editorial artwork remains labeled as editorial rather than a product screenshot", () => {
  const art = { src: "/art.webp", alt: "Conceptual teamwork", caption: "Generated editorial artwork, not a product screenshot." };
  assert.deepEqual(getPlayerHeroMedia({ screenshots: [], editorialImage: art }), { ...art, kind: "editorial" });
});

test("real source screenshots retain their attribution and take precedence", () => {
  const shot = { src: "/real.jpg", alt: "Real interface", caption: "Public interface", sourceName: "Official docs", sourceUrl: "https://example.com/docs" };
  assert.deepEqual(getPlayerHeroMedia({ screenshots: [shot], editorialImage: { src: "/art.webp" } }), { ...shot, kind: "screenshot" });
});

test("profiles with no media keep their current no-image behavior", () => {
  assert.equal(getPlayerHeroMedia({ screenshots: [] }), undefined);
});
