/** Shared copy and install-link helpers for every player page. */

export const INSTALL_METHODS = ["mcp", "cli-and-skill", "api-only"];

export const INSTALL_DOCS_BASE = "https://docs.agentanalytics.sh/installation/any-agent/";

export function installDocsHref(method) {
  if (!INSTALL_METHODS.includes(method)) {
    throw new Error(`installMethod must be one of ${INSTALL_METHODS.join(", ")}`);
  }
  return `${INSTALL_DOCS_BASE}#${method}`;
}

export function installLinkLabel(title) {
  return `How to install Agent Analytics on ${title}`;
}

export function promptHeading(title) {
  return `Copyable product analytics prompt for ${title} with Agent Analytics`;
}

/**
 * Copy text without blocking the click.
 * Returns "copied" or "unavailable". A clipboard failure falls through to fallbackCopy.
 */
export async function copyText(text, { clipboard, fallbackCopy } = {}) {
  if (clipboard && typeof clipboard.writeText === "function") {
    try {
      await clipboard.writeText(text);
      return "copied";
    } catch {
      // The clipboard can reject the write. Try the selection fallback.
    }
  }

  try {
    if (typeof fallbackCopy === "function" && fallbackCopy(text)) return "copied";
  } catch {
    // Leave the prompt visible so a person can copy it by hand.
  }

  return "unavailable";
}
