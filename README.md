# Open Orchestrators

Open Orchestrators is a small static site for [`open-orchestrators.org`](https://open-orchestrators.org/). It curates a narrow list of open-source and orchestration-first AI agent products, frameworks, and company operating systems.

## What lives here

- `index.html`: the full site, including metadata, structured data, directory entries, contribution footer copy, and analytics script.
- `assets/`: social sharing images and other site assets.
- `favicon.ico` and `favicon.png`: site icons.
- `robots.txt` and `sitemap.xml`: crawler metadata.
- `.firecrawl/`: local research artifacts used while evaluating products. This folder is ignored and does not need to be committed.

## Local preview

This site has no build step. Serve the directory as static files:

```bash
cd open-orchestrators.org
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Updating the directory

Most changes happen directly in `index.html`.

- Copy an existing `<article>` inside the `#cards` block when adding a new entry.
- Keep summaries factual, short, and based on public sources.
- Prefer official website, docs, and GitHub links.
- If the number of entries changes, update both the visible count and the JSON-LD `numberOfItems`.
- If social preview imagery changes, keep the `og:*` and `twitter:*` metadata in sync with the assets in `assets/`.

## Contributing

Contribution guidelines live in [`CONTRIBUTING.md`](./CONTRIBUTING.md).
