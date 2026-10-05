/** Keep conceptual artwork separate from source-attributed product screenshots. */
export function getPlayerHeroMedia(entry) {
  const screenshot = entry.screenshots?.[0];
  if (screenshot) return { ...screenshot, kind: "screenshot" };
  if (entry.editorialImage) return { ...entry.editorialImage, kind: "editorial" };
  return undefined;
}
