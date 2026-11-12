import test from "node:test";
import assert from "node:assert/strict";
import { orchestrators } from "../data/orchestrators.ts";
import {
  PLAYER_OUTBOUND_LINK_TYPES,
  auditHtmlFile,
  canonicalDestination,
  classifyPlayerLinkType,
  isPlayerDestinationHref,
  linkTypeForHref,
  playerOutboundOnclick,
  readPlayerOutboundCalls,
  sameDestination
} from "./player-outbound.mjs";

const superset = orchestrators.find((entry) => entry.slug === "superset");

const track = (entry, href, placement) =>
  playerOutboundOnclick({
    playerSlug: entry.slug,
    linkType: linkTypeForHref(entry, href),
    placement
  });

const anchor = (href, onclick) => {
  const handler = onclick ? ` onclick="${onclick.replaceAll('"', "&#34;")}"` : "";
  return `<a href="${href}"${handler}>${href}</a>`;
};

test("classifies website, GitHub repo, docs, and other destinations", () => {
  assert.equal(classifyPlayerLinkType({ label: "Website", href: "https://superset.sh/" }), "website");
  assert.equal(classifyPlayerLinkType({ label: "GitHub", href: "https://github.com/superset-sh/superset" }), "github");
  assert.equal(classifyPlayerLinkType({ label: "Docs", href: "https://docs.superset.sh/" }), "docs");
  assert.equal(classifyPlayerLinkType({ label: "Documentation", href: "https://docs.plasma.ai/fractal" }), "docs");
  assert.equal(
    classifyPlayerLinkType({ label: "Orchestration docs", href: "https://agentgrid.sh/docs/guides/orchestrating-agents" }),
    "docs"
  );
  assert.equal(
    classifyPlayerLinkType({
      label: "Installation",
      href: "https://github.com/crewplaneai/crewplane/blob/master/docs/getting-started/installation.md"
    }),
    "docs"
  );
  assert.equal(
    classifyPlayerLinkType({ label: "README", href: "https://github.com/GoogleCloudPlatform/scion/blob/main/README.md" }),
    "other"
  );
  assert.equal(
    classifyPlayerLinkType({ label: "License", href: "https://github.com/GoogleCloudPlatform/scion/blob/main/LICENSE" }),
    "other"
  );
  assert.equal(classifyPlayerLinkType({ label: "Intent page", href: "https://www.augmentcode.com/product/intent" }), "other");
  assert.equal(classifyPlayerLinkType({ label: "npm", href: "https://www.npmjs.com/package/example" }), "other");
  assert.equal(
    classifyPlayerLinkType({ label: "Installation", href: "https://github.com/sno-ai/sno-station#install" }),
    "github"
  );

  const orbi = orchestrators.find((entry) => entry.slug === "orbi");
  assert.equal(linkTypeForHref(orbi, "https://orbi.build/"), "website");
  assert.equal(linkTypeForHref(orbi, "https://www.orbi.build/?ref=dir-openorchestrators"), "website");
});

test("destination identity ignores www, trailing slash, hash, and query", () => {
  assert.equal(canonicalDestination("https://www.Orbi.build/?ref=dir-openorchestrators#top"), "orbi.build");
  assert.equal(sameDestination("https://orbi.build/", "https://www.orbi.build/?ref=dir-openorchestrators"), true);
  assert.equal(sameDestination("https://github.com/org/repo", "https://github.com/org/repo/releases"), false);
  assert.equal(isPlayerDestinationHref(superset, "https://superset.sh"), true);
  assert.equal(isPlayerDestinationHref(superset, "https://example.com/"), false);
});

test("every listed player link resolves to one tracking link_type", () => {
  for (const entry of orchestrators) {
    for (const link of entry.links) {
      const type = linkTypeForHref(entry, link.href);
      assert.ok(PLAYER_OUTBOUND_LINK_TYPES.includes(type), `${entry.slug} ${link.label}`);
      const label = link.label.trim().toLowerCase();
      if (label === "website") {
        const fromUrl = classifyPlayerLinkType({ href: link.href });
        if (fromUrl !== "github" && fromUrl !== "docs") assert.equal(type, "website", `${entry.slug} ${link.href}`);
      }
      if (label === "github") assert.equal(type, "github", `${entry.slug} ${link.href}`);
      if (label === "docs" || label === "documentation" || /\bdocs?\b/.test(label)) {
        assert.equal(type, "docs", `${entry.slug} ${link.label}`);
      }
    }
    for (const shot of [...(entry.screenshots ?? []), ...(entry.agentAnalytics?.screenshots ?? [])]) {
      assert.equal(isPlayerDestinationHref(entry, shot.sourceUrl), true, `${entry.slug} ${shot.sourceUrl}`);
    }
  }
});

test("the handler is optional-chained and does not block navigation", () => {
  const onclick = track(superset, "https://superset.sh/", "player_page");
  assert.match(onclick, /^window\.aa\?\.track\('player_outbound_click', /);
  const encoded = onclick.replaceAll('"', "&#34;");
  assert.equal(readPlayerOutboundCalls(onclick).blocked, false);
  assert.deepEqual(readPlayerOutboundCalls(encoded).calls[0], {
    player_slug: "superset",
    link_type: "website",
    placement: "player_page"
  });
  assert.throws(() => playerOutboundOnclick({ playerSlug: "superset", linkType: "blog", placement: "player_page" }));
  assert.throws(() => playerOutboundOnclick({ playerSlug: "superset", linkType: "website", placement: "footer" }));
});

test("a rendered player hero link without the handler fails the audit", () => {
  const html = `
    <div class="player-hero__copy">
      ${anchor("https://superset.sh/")}
      ${anchor("https://github.com/superset-sh/superset", track(superset, "https://github.com/superset-sh/superset", "player_page"))}
      ${anchor("https://docs.superset.sh/", track(superset, "https://docs.superset.sh/", "player_page"))}
    </div>
  `;
  const errors = auditHtmlFile("players/superset/index.html", html, orchestrators);
  assert.ok(errors.some((error) => error.includes("https://superset.sh/") && error.includes("player_page")));
});

test("tagged player destinations, including a repeated screenshot source, pass the audit", () => {
  const website = "https://superset.sh/";
  const github = "https://github.com/superset-sh/superset";
  const docs = "https://docs.superset.sh/";
  const html = `
    <div class="player-hero__copy">
      ${anchor(website, track(superset, website, "player_page"))}
      ${anchor(github, track(superset, github, "player_page"))}
      ${anchor(docs, track(superset, docs, "player_page"))}
    </div>
    <figure><figcaption>${anchor(website, track(superset, website, "player_page"))}</figcaption></figure>
    <a href="https://app.agentanalytics.sh/?onboarding=agent">Track builder outcomes</a>
  `;
  assert.deepEqual(auditHtmlFile("players/superset/index.html", html, orchestrators), []);
});

test("home directory cards must tag primary and GitHub links with placement home", () => {
  const card = (entry, { tag = true } = {}) => {
    const primary = entry.links.find((link) => link.emphasis === "primary") ?? entry.links[0];
    const github = entry.githubRepo ? `https://github.com/${entry.githubRepo}` : null;
    const tracked = (href) => (tag ? track(entry, href, "home") : null);
    return `<article class="directory-card accent-sky reveal">
      <a href="/players/${entry.slug}/">${entry.title}</a>
      ${anchor(primary.href, tracked(primary.href))}
      ${github ? anchor(github, tracked(github)) : ""}
    </article>`;
  };
  const html = orchestrators.map((entry) => card(entry)).join("");
  assert.deepEqual(auditHtmlFile("index.html", html, orchestrators), []);

  const broken = card(superset, { tag: false }) + orchestrators.filter((entry) => entry.slug !== "superset").map((entry) => card(entry)).join("");
  const errors = auditHtmlFile("index.html", broken, orchestrators);
  assert.ok(errors.some((error) => error.includes("superset") && error.includes("placement:home")));
});

test("a directory card outside the home page uses placement directory_card", () => {
  const href = "https://superset.sh/";
  const html = `<article class="directory-card">
    <a href="/players/superset/">Superset</a>
    ${anchor(href, track(superset, href, "directory_card"))}
    ${anchor("https://github.com/superset-sh/superset", track(superset, "https://github.com/superset-sh/superset", "directory_card"))}
  </article>`;
  assert.deepEqual(auditHtmlFile("directory/index.html", html, [superset]), []);

  const untagged = html.replace(anchor(href, track(superset, href, "directory_card")), anchor(href));
  assert.ok(auditHtmlFile("directory/index.html", untagged, [superset]).some((error) => error.includes("directory_card")));
});

test("news source clicks keep their event and add player_outbound_click only for player destinations", () => {
  const source = "https://github.com/superset-sh/superset";
  const newsClick = `window.aa?.track('news_source_click', {"article_slug":"superset-release","player_slug":"superset"})`;
  const tagged = `${newsClick};${track(superset, source, "news")}`;
  const html = `
    <a href="/players/superset/">View directory note</a>
    ${anchor(source, tagged)}
    <div class="article-content">
      ${anchor("https://superset.sh/")}
      ${anchor("https://docs.superset.sh/")}
    </div>
  `;
  assert.deepEqual(auditHtmlFile("news/superset-release/index.html", html, orchestrators), []);
  assert.equal(readPlayerOutboundCalls(tagged).calls.length, 1);

  const missing = html.replace(anchor(source, tagged), anchor(source, newsClick));
  const errors = auditHtmlFile("news/superset-release/index.html", missing, orchestrators);
  assert.ok(errors.some((error) => error.includes("placement:news")));
});

test("a handler that cancels navigation fails the audit", () => {
  const href = "https://superset.sh/";
  const html = `<div class="player-hero__copy">
    ${anchor(href, `${track(superset, href, "player_page")};return false`)}
    ${anchor("https://github.com/superset-sh/superset", track(superset, "https://github.com/superset-sh/superset", "player_page"))}
    ${anchor("https://docs.superset.sh/", track(superset, "https://docs.superset.sh/", "player_page"))}
  </div>`;
  assert.ok(auditHtmlFile("players/superset/index.html", html, orchestrators).some((error) => error.includes("blocks navigation")));
});
