import { getPublishedNewsPosts } from "../lib/news";

const SITE = "https://openorchestrators.org";

const urlNode = (path: string, changefreq: string, priority: string) => `  <url>
    <loc>${new URL(path, SITE).toString()}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;

export async function GET() {
  const posts = await getPublishedNewsPosts();
  const urls = [
    urlNode("/", "weekly", "1.0"),
    urlNode("/news/", "weekly", "0.8"),
    ...posts.map((post) => urlNode(`/news/${post.id}/`, "monthly", "0.7"))
  ];

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8"
      }
    }
  );
}
