import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import { orchestrators } from "../data/orchestrators";

export type NewsPost = CollectionEntry<"news">;

export const getPublishedNewsPosts = async () =>
  (await getCollection("news"))
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

export const getNewsPlayer = (post: NewsPost) =>
  orchestrators.find((entry) => entry.slug === post.data.playerSlug);

export const formatNewsDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
