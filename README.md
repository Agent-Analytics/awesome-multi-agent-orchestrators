# Awesome Agent Orchestrators [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> An awesome-style, selectively curated list of open-source and orchestration-first AI agent products, frameworks, workspaces, and company operating systems.

[Website](https://openorchestrators.org/) • [Contributing](./CONTRIBUTING.md)

The public website is [Open Orchestrators](https://openorchestrators.org/). This repo is intentionally narrow: it is not a general AI tools list. Projects belong here when orchestration is the product, not a side feature.

## Latest Addition

- [SwarmClaw](https://www.swarmclaw.ai/) ([GitHub](https://github.com/swarmclawai/swarmclaw)) - Self-hosted AI agent runtime for autonomous agents, delegated work, schedules, provider management, and chat-platform connectors.

## Contents

- [News](#news)
- [Coding-Agent Workspaces](#coding-agent-workspaces)
- [Agent Platforms And Builders](#agent-platforms-and-builders)
- [Coordination And Team Systems](#coordination-and-team-systems)
- [Contributing](#contributing)
- [Local Development](#local-development)

## News

Open Orchestrators is also a lightweight news site for meaningful updates from projects already in the directory.

- Add news posts as Markdown files in [`src/content/news`](./src/content/news).
- Set `playerSlug` to the matching entry in [`src/data/orchestrators.ts`](./src/data/orchestrators.ts).
- Include `sourceName` and `sourceUrl` when the post is based on an official announcement, docs page, or repository update.
- The homepage renders the latest story alongside the directory; `/news/` is the full archive.

## Coding-Agent Workspaces

- [Cabinet](https://runcabinet.com/) ([GitHub](https://github.com/hilash/cabinet)) - AI-first knowledge base where files live on disk and agents help with execution.
- [Gas Town](https://github.com/gastownhall/gastown) ([GitHub](https://github.com/gastownhall/gastown)) - Multi-agent workspace manager for Claude Code, GitHub Copilot, Codex, Gemini, and other coding agents with persistent work tracking.
- [Multica](https://multica.ai/) ([GitHub](https://github.com/multica-ai/multica)) - Managed agents platform where coding agents act like teammates, take issues, and reuse shared skills.
- [Orca](https://www.onorca.dev/) ([GitHub](https://github.com/stablyai/orca)) - Desktop environment for running multiple coding agents safely in parallel across worktrees.

## Agent Platforms And Builders

- [Dify](https://dify.ai/) ([GitHub](https://github.com/langgenius/dify)) - Agentic workflow builder that combines workflows, chatflows, apps, and knowledge systems.
- [Flowise](https://flowiseai.com/) ([GitHub](https://github.com/FlowiseAI/Flowise)) - Visual builder for AI agents and orchestration flows.
- [OpenClaw](https://openclaw.ai/) ([GitHub](https://github.com/openclaw/openclaw)) - Open-source personal AI assistant software built around chat, persistent context, skills, and execution.
- [Sim](https://www.sim.ai/) ([GitHub](https://github.com/simstudioai/sim)) - Open-source AI agent platform for building agents with integrations, workflows, knowledge bases, and docs.
- [SwarmClaw](https://www.swarmclaw.ai/) ([GitHub](https://github.com/swarmclawai/swarmclaw)) - Self-hosted AI agent runtime for autonomous agents, delegated work, schedules, provider management, and chat-platform connectors.

## Coordination And Team Systems

- [CrewAI](https://www.crewai.com/) ([GitHub](https://github.com/crewAIInc/crewAI)) - Multi-agent system organized around specialized crews, roles, and delegation.
- [Culture](https://culture.dev/) ([GitHub](https://github.com/OriNachum/culture)) - Coordination-oriented system with rooms, protocol docs, agent lifecycle patterns, and multiple clients.
- [Paperclip](https://paperclip.ing/) ([GitHub](https://github.com/paperclipai/paperclip)) - Open-source orchestration for zero-human companies, centered on AI employees, goals, and jobs.

## Contributing

Pull requests are welcome if the project clearly fits the directory scope.

- Add or update entries in [`src/data/orchestrators.ts`](./src/data/orchestrators.ts).
- Prefer official website, docs, and GitHub links.
- Keep summaries factual, concise, and based on public sources.
- If you add a project, include the source you used to verify it.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full review criteria.

## Local Development

This repo contains the Awesome Agent Orchestrators list and a small Astro site for [`openorchestrators.org`](https://openorchestrators.org/).

```bash
cd open-orchestrators.org
npm install
npm run dev
```

Most editorial updates should happen in [`src/data/orchestrators.ts`](./src/data/orchestrators.ts), which is the source of truth for directory entries, rank order, notes, tags, and links.

News updates should happen in [`src/content/news`](./src/content/news). Directory entries and news posts are intentionally separate: directory metadata describes the player; news Markdown describes a dated update about that player.
