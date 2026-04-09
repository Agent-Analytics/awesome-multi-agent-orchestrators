# Open Orchestrators

> A selectively curated list of open-source and orchestration-first AI agent products, frameworks, and company operating systems.

[Website](https://open-orchestrators.org/) • [Contributing](./CONTRIBUTING.md)

Open Orchestrators is intentionally narrow. It is not a general AI tools list. Projects belong here when orchestration is the product, not a side feature.

## Latest Addition

- [Orca](https://www.onorca.dev/) ([GitHub](https://github.com/stablyai/orca)) - A worktree-based IDE for AI coding agents that runs Claude Code, Codex, OpenCode, and other agents across isolated git branches.

## Contents

- [Coding-Agent Workspaces](#coding-agent-workspaces)
- [Agent Platforms And Builders](#agent-platforms-and-builders)
- [Coordination And Team Systems](#coordination-and-team-systems)
- [Contributing](#contributing)
- [Local Development](#local-development)

## Coding-Agent Workspaces

- [Cabinet](https://runcabinet.com/) ([GitHub](https://github.com/hilash/cabinet)) - AI-first knowledge base where files live on disk and agents help with execution.
- [Multica](https://multica.ai/) ([GitHub](https://github.com/multica-ai/multica)) - Managed agents platform where coding agents act like teammates, take issues, and reuse shared skills.
- [Orca](https://www.onorca.dev/) ([GitHub](https://github.com/stablyai/orca)) - Desktop environment for running multiple coding agents safely in parallel across worktrees.

## Agent Platforms And Builders

- [Dify](https://dify.ai/) ([GitHub](https://github.com/langgenius/dify)) - Agentic workflow builder that combines workflows, chatflows, apps, and knowledge systems.
- [Flowise](https://flowiseai.com/) ([GitHub](https://github.com/FlowiseAI/Flowise)) - Visual builder for AI agents and orchestration flows.
- [OpenClaw](https://openclaw.ai/) ([GitHub](https://github.com/openclaw/openclaw)) - Open-source personal AI assistant software built around chat, persistent context, skills, and execution.
- [Sim](https://www.sim.ai/) ([GitHub](https://github.com/simstudioai/sim)) - Open-source AI agent platform for building agents with integrations, workflows, knowledge bases, and docs.

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

This repo contains a small Astro site for [`open-orchestrators.org`](https://open-orchestrators.org/).

```bash
cd open-orchestrators.org
npm install
npm run dev
```

Most editorial updates should happen in [`src/data/orchestrators.ts`](./src/data/orchestrators.ts), which is the source of truth for directory entries, rank order, notes, tags, and links.
