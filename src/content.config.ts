import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "./*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    playerSlug: z.string(),
    sourceName: z.string().optional(),
    sourceUrl: z.string().url().optional(),
    category: z.string().default("News"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    ogImage: z.string().optional()
  })
});

export const collections = { news };
