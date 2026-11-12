/** Click-through tracking for a listed player's own website, GitHub repo, docs, or other destination. */

export const PLAYER_OUTBOUND_EVENT = "player_outbound_click";

export const PLAYER_OUTBOUND_LINK_TYPES = ["website", "github", "docs", "other"];

export const PLAYER_OUTBOUND_PLACEMENTS = ["player_page", "directory_card", "home", "news"];

const TYPE_PREFERENCE = ["website", "github", "docs", "other"];

export function canonicalDestination(href) {
  let url;
  try {
    url = new URL(href);
  } catch {
    return null;
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") return null;

  const host = url.hostname.replace(/^www\./i, "").toLowerCase();
  const path = url.pathname.replace(/\/+$/, "");
  return `${host}${path}`;
}

export function sameDestination(left, right) {
  const a = canonicalDestination(left);
  const b = canonicalDestination(right);
  return a !== null && a === b;
}

function parsedUrl(href) {
  try {
    const url = new URL(href);
    return {
      host: url.hostname.replace(/^www\./i, "").toLowerCase(),
      path: url.pathname.replace(/\/+$/, "").toLowerCase()
    };
  } catch {
    return { host: "", path: "" };
  }
}

function isDocsLabel(label) {
  return /\bdocs?\b/.test(label) || label.includes("documentation");
}

function isGithubLabel(label) {
  return label === "github" || label === "github repo" || label === "repository";
}

function isWebsiteLabel(label) {
  return label === "website" || label === "official website" || label === "homepage" || label === "site";
}

function isDocsUrl(host, path) {
  if (!host) return false;
  if (host.startsWith("docs.") || host.endsWith(".gitbook.io") || host.endsWith(".readthedocs.io")) return true;
  return /(^|\/)docs(\/|$)/.test(path) || path.includes("/documentation");
}

function isGithubRepoUrl(host, path) {
  if (host !== "github.com") return false;
  return path.split("/").filter(Boolean).length === 2;
}

export function classifyPlayerLinkType({ label = "", href = "" } = {}) {
  const normalizedLabel = String(label).trim().toLowerCase();
  const { host, path } = parsedUrl(href);

  if (isWebsiteLabel(normalizedLabel)) return "website";
  if (isGithubLabel(normalizedLabel)) return "github";
  if (isDocsLabel(normalizedLabel) || isDocsUrl(host, path)) return "docs";
  if (isGithubRepoUrl(host, path)) return "github";
  return "other";
}

export function playerDestinationLinks(entry) {
  const links = [...(entry.links ?? [])];

  if (entry.githubRepo) {
    const href = `https://github.com/${entry.githubRepo}`;
    if (!links.some((link) => sameDestination(link.href, href))) {
      links.push({ label: "GitHub", href });
    }
  }

  const screenshots = [...(entry.screenshots ?? []), ...(entry.agentAnalytics?.screenshots ?? [])];
  for (const shot of screenshots) {
    if (!shot?.sourceUrl) continue;
    if (links.some((link) => sameDestination(link.href, shot.sourceUrl))) continue;
    links.push({ label: shot.sourceName ?? "", href: shot.sourceUrl });
  }

  return links;
}

export function isPlayerDestinationHref(entry, href) {
  return playerDestinationLinks(entry).some((link) => sameDestination(link.href, href));
}

export function linkTypeForHref(entry, href) {
  const fromUrl = classifyPlayerLinkType({ href });
  if (fromUrl === "github" || fromUrl === "docs") return fromUrl;

  const matches = playerDestinationLinks(entry).filter((link) => sameDestination(link.href, href));
  if (matches.length === 0) return fromUrl;

  const types = matches.map((link) => classifyPlayerLinkType(link));
  return TYPE_PREFERENCE.find((type) => types.includes(type)) ?? fromUrl;
}

export function playerOutboundOnclick({ playerSlug, linkType, placement }) {
  if (!playerSlug) throw new Error("player_outbound_click requires player_slug");
  if (!PLAYER_OUTBOUND_LINK_TYPES.includes(linkType)) {
    throw new Error(`player_outbound_click link_type must be one of ${PLAYER_OUTBOUND_LINK_TYPES.join(", ")}`);
  }
  if (!PLAYER_OUTBOUND_PLACEMENTS.includes(placement)) {
    throw new Error(`player_outbound_click placement must be one of ${PLAYER_OUTBOUND_PLACEMENTS.join(", ")}`);
  }

  const payload = JSON.stringify({
    player_slug: playerSlug,
    link_type: linkType,
    placement
  });

  return `window.aa?.track('${PLAYER_OUTBOUND_EVENT}', ${payload})`;
}

export function decodeHtmlAttribute(value) {
  if (value == null) return null;
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function readAttribute(attrs, name) {
  const match = new RegExp(`\\b${name}\\s*=\\s*"([^"]*)"`, "i").exec(attrs);
  return match ? decodeHtmlAttribute(match[1]) : null;
}

export function parseAnchors(html) {
  const anchors = [];
  const re = /<a\b([^>]*)>/gi;
  let match;
  while ((match = re.exec(html))) {
    const attrs = match[1];
    anchors.push({
      index: match.index,
      href: readAttribute(attrs, "href"),
      onclick: readAttribute(attrs, "onclick"),
      attrs
    });
  }
  return anchors;
}

const VOID_TAGS = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);

function elementRanges(html, { className, tagName } = {}) {
  const ranges = [];
  const re = /<([a-zA-Z][\w:-]*)\b([^>]*)>/g;
  let match;
  while ((match = re.exec(html))) {
    const tag = match[1].toLowerCase();
    if (tagName && tag !== tagName) continue;
    const classAttr = /\bclass\s*=\s*"([^"]*)"/i.exec(match[2])?.[1] ?? "";
    if (className && !classAttr.split(/\s+/).includes(className)) continue;
    const start = match.index;
    const openEnd = match.index + match[0].length;
    const end = elementEnd(html, tag, openEnd);
    ranges.push({ start, end, html: html.slice(start, end) });
    re.lastIndex = openEnd;
  }
  return ranges;
}

function elementEnd(html, tag, from) {
  if (VOID_TAGS.has(tag)) return from;
  const re = new RegExp(`<(/?)${tag}\\b[^>]*>`, "gi");
  re.lastIndex = from;
  let depth = 1;
  let match;
  while ((match = re.exec(html))) {
    const closing = match[1] === "/";
    const selfClosing = !closing && /\/\s*$/.test(match[0].slice(0, -1));
    if (closing) {
      depth -= 1;
      if (depth === 0) return match.index + match[0].length;
    } else if (!selfClosing) {
      depth += 1;
    }
  }
  return html.length;
}

export function stripElementsByClass(html, className) {
  let next = html;
  let ranges = elementRanges(next, { className });
  while (ranges.length > 0) {
    const { start, end } = ranges[ranges.length - 1];
    next = next.slice(0, start) + next.slice(end);
    ranges = elementRanges(next, { className });
  }
  return next;
}

export function stripScripts(html) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
}

export function readPlayerOutboundCalls(onclick) {
  if (!onclick) return { blocked: false, calls: [] };
  onclick = decodeHtmlAttribute(onclick);
  const blocked = /preventDefault|\breturn\s+false\b/.test(onclick);
  const calls = [];
  const re = /window\.aa\?\.track\(\s*'player_outbound_click'\s*,\s*(\{[^}]*\})\s*\)/g;
  let match;
  while ((match = re.exec(onclick))) {
    try {
      calls.push(JSON.parse(match[1]));
    } catch {
      calls.push({ invalid: true, raw: match[1] });
    }
  }
  return { blocked, calls };
}

function regionForAnchor(html, index) {
  const containers = [
    ["directory-card", "directory_card"],
    ["player-hero__copy", "player_page"],
    ["news-card", "news"]
  ];

  for (const [className, placement] of containers) {
    for (const range of elementRanges(html, { className })) {
      if (index >= range.start && index < range.end) return { className, placement };
    }
  }

  return null;
}

function preferredEntry(entries, href, preferredSlug) {
  const matches = entries.filter((entry) => isPlayerDestinationHref(entry, href));
  if (preferredSlug) {
    const preferred = matches.find((entry) => entry.slug === preferredSlug);
    if (preferred) return preferred;
  }
  return matches[0] ?? null;
}

function slugFromHtml(html) {
  return html.match(/href="\/players\/([^"/]+)\/"/)?.[1] ?? null;
}

function slugForAnchor(html, index, rel, directoryCards) {
  const card = directoryCards.find((range) => index >= range.start && index < range.end);
  if (card) return slugFromHtml(card.html);
  if (pageSlug(rel)) return pageSlug(rel);
  if (rel.startsWith("news/")) return slugFromHtml(html);
  return null;
}

function pageSlug(rel) {
  return rel.match(/^players\/([^/]+)\/index\.html$/)?.[1] ?? null;
}

function expectedPlacement(rel, region) {
  if (region?.className === "directory-card") {
    return rel === "index.html" ? "home" : "directory_card";
  }
  if (pageSlug(rel)) return "player_page";
  if (/^news\/[^/]+\/index\.html$/.test(rel)) return "news";
  if (region?.className === "news-card") return "news";
  if (rel === "index.html") return "home";
  return region?.placement ?? null;
}

function validateAnchor(anchor, entry, placement, where) {
  const errors = [];
  const parsed = readPlayerOutboundCalls(anchor.onclick);
  const expectedType = linkTypeForHref(entry, anchor.href);
  const call = parsed.calls.find(
    (item) => item.player_slug === entry.slug && item.placement === placement && item.link_type === expectedType
  );

  if (parsed.blocked) {
    errors.push(`${where} blocks navigation for ${entry.slug} (${anchor.href})`);
  }
  if (!call) {
    errors.push(
      `${where} renders ${anchor.href} without player_outbound_click ` +
        `{player_slug:${entry.slug}, link_type:${expectedType}, placement:${placement}}`
    );
    return errors;
  }
  if (!PLAYER_OUTBOUND_LINK_TYPES.includes(call.link_type)) {
    errors.push(`${where} has invalid link_type for ${entry.slug}`);
  }
  return errors;
}

/**
 * Fail when a rendered player destination link is missing the tracking handler.
 * Article prose (`.article-content`) is editorial citation text, not a destination control.
 */
export function auditHtmlFile(rel, html, entries) {
  const errors = [];
  const visible = stripElementsByClass(stripScripts(html), "article-content");
  const slug = pageSlug(rel);
  const directoryCards = elementRanges(visible, { className: "directory-card" });

  if (rel === "index.html" && directoryCards.length !== entries.length) {
    errors.push(`index.html rendered ${directoryCards.length} directory cards for ${entries.length} players`);
  }

  for (const anchor of parseAnchors(visible)) {
    if (!anchor.href || !canonicalDestination(anchor.href)) continue;
    const entry = preferredEntry(entries, anchor.href, slugForAnchor(visible, anchor.index, rel, directoryCards));
    if (!entry) continue;

    const region = regionForAnchor(visible, anchor.index);
    const placement = expectedPlacement(rel, region);
    if (!placement) {
      errors.push(`${rel} renders ${anchor.href} for ${entry.slug} outside a known placement`);
      continue;
    }
    errors.push(...validateAnchor(anchor, entry, placement, rel));
  }

  if (slug) {
    const entry = entries.find((item) => item.slug === slug);
    if (!entry) {
      errors.push(`${rel} has no orchestrator entry`);
      return errors;
    }

    const hero = elementRanges(visible, { className: "player-hero__copy" })[0]?.html ?? "";
    const heroAnchors = parseAnchors(hero);
    for (const link of entry.links) {
      const tagged = heroAnchors.some((anchor) => {
        if (!sameDestination(anchor.href, link.href)) return false;
        const parsed = readPlayerOutboundCalls(anchor.onclick);
        return parsed.calls.some(
          (call) =>
            call.player_slug === entry.slug &&
            call.placement === "player_page" &&
            call.link_type === linkTypeForHref(entry, link.href)
        );
      });
      if (!tagged) {
        errors.push(`${rel} hero is missing a tagged destination link ${link.href} (${link.label})`);
      }
    }
  }

  return errors;
}

export async function auditDist(distDir) {
  const { readdir, readFile } = await import("node:fs/promises");
  const path = await import("node:path");
  const { orchestrators } = await import("../data/orchestrators.ts");

  async function walk(dir) {
    const files = [];
    const listing = await readdir(dir, { withFileTypes: true });
    for (const item of listing) {
      const full = path.join(dir, item.name);
      if (item.isDirectory()) files.push(...(await walk(full)));
      else if (item.name.endsWith(".html")) files.push(full);
    }
    return files;
  }

  const errors = [];
  for (const file of await walk(distDir)) {
    const rel = path.relative(distDir, file).split(path.sep).join("/");
    const html = await readFile(file, "utf8");
    errors.push(...auditHtmlFile(rel, html, orchestrators));
  }
  return errors;
}
