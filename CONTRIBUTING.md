# Contributing to Open Orchestrators

Open Orchestrators is intentionally narrow. The goal is not to list every AI tool. The goal is to document products that are clearly about orchestrating agents, workflows, knowledge, or agent-centered operating systems.

## Good contributions

- Add a new directory entry that fits the current scope.
- Fix broken or outdated links.
- Tighten summaries or directory notes to be more factual.
- Update metadata, assets, or SEO details when the site content changes.

## Scope

Projects are usually a good fit when they have a clear orchestration angle, such as:

- multi-agent coordination
- workflow or job orchestration
- agent workspaces with memory, tools, and execution
- company or team operating systems built around agents
- open-source or publicly documented systems adjacent to the orchestration layer

Projects are usually not a good fit when they are primarily:

- generic chat apps
- thin wrappers around a single model
- unrelated AI tooling without a meaningful orchestration layer
- impossible to verify from public sources

## How to add or update an entry

1. Edit [`index.html`](./index.html).
2. Copy an existing `<article>` block from the `#cards` section if you are adding a new project.
3. Update the rank, name, icon, summary, tags, directory note, and official links.
4. Keep the copy factual and concise. Avoid marketing language.
5. If the number of entries changes, update the visible count, the JSON-LD `numberOfItems`, and the `itemListElement` list in the structured-data block when needed.
6. Preview the site locally before opening a pull request.

## Local preview

```bash
cd open-orchestrators.org
python3 -m http.server 8080
```

Then open `http://localhost:8080/`.

## Copy and sourcing rules

- Prefer official website, docs, and GitHub links.
- Keep summaries to one short paragraph.
- Keep the directory note to one sentence.
- Use an official icon URL when practical. If a remote icon is unreliable, add a local asset under `assets/`.
- Do not add unverifiable claims, funding claims, or feature claims that are not obvious from public materials.

## Pull requests

Include a short note on what changed and why it belongs in the directory. If you are adding a new project, include the public source you used to verify the entry.
