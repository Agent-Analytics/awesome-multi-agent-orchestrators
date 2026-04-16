# Contributing to Awesome Multi-Agent Orchestrators

Awesome Multi-Agent Orchestrators is intentionally narrow. The goal is not to list every AI tool. The goal is to document products that are clearly about orchestrating multiple agents, parallel coding-agent work, agent workflows, shared knowledge, or agent-centered operating systems.

## Good contributions

- Add a new directory entry that fits the current scope.
- Fix broken or outdated links.
- Tighten summaries or directory notes to be more factual.
- Update metadata, assets, or SEO details when the site content changes.
- Improve the editorial framing without turning the site into a generic marketing page.

## Scope

Projects are usually a good fit when they have a clear orchestration angle, such as:

- multi-agent coordination
- parallel coding-agent execution
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

1. Edit [`src/data/orchestrators.ts`](./src/data/orchestrators.ts).
2. Add or update an entry in the `orchestrators` array.
3. Update the rank, name, local mark metadata, summary, tags, directory note, and official links.
4. Keep the copy factual and concise. Avoid marketing language.
5. If the number of entries changes, confirm the homepage still renders the right order and count from the shared data source.
6. Preview the site locally before opening a pull request.

## Local preview

```bash
cd open-orchestrators.org
npm install
npm run dev
```

Then open the local Astro URL printed in the terminal.

## Copy and sourcing rules

- Prefer official website, docs, and GitHub links.
- Keep summaries to one short paragraph.
- Keep the directory note to one sentence.
- Prefer local fallback marks or local assets over hotlinking third-party icons into the page shell.
- Do not add unverifiable claims, funding claims, or feature claims that are not obvious from public materials.

## Pull requests

Include a short note on what changed and why it belongs in the directory. If you are adding a new project, include the public source you used to verify the entry.
