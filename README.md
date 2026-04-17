# Awesome Multi-Agent Orchestrators [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> An awesome-style, selectively curated list of open-source and publicly documented multi-agent orchestrators, coding-agent workspaces, agent runtimes, company operating systems, and adjacent governance layers.

[Website](https://openorchestrators.org/) • [Contributing](./CONTRIBUTING.md)

The public website is [Open Orchestrators](https://openorchestrators.org/). This repo is intentionally narrow: it is not a general AI tools list. Projects belong here when multi-agent coordination, parallel agent execution, agent workflows, or agent-centered operating systems are the product, not a side feature. Governance and enforcement layers are tracked separately when they control agent actions, permissions, approvals, budgets, or audit trails without acting as the orchestrator itself.

## Latest Additions

- [Microsoft Agent Governance Toolkit](https://github.com/microsoft/agent-governance-toolkit) - MIT-licensed runtime governance toolkit for AI agents with deterministic policy enforcement, zero-trust identity, execution sandboxing, SRE controls, and compliance checks.
- [Databricks Unity AI Gateway](https://www.databricks.com/blog/ai-gateway-governance-layer-agentic-ai) - Commercial Databricks platform layer for governing LLM access, MCP servers, APIs, observability, costs, guardrails, fallbacks, and rate limits in agentic AI workflows.
- [Veto](https://veto.so/) ([GitHub](https://github.com/PlawIO/veto)) - Apache-2.0 AI agent authorization layer that intercepts tool calls before execution, evaluates policy, routes approvals, and records audit evidence. Veto Cloud is commercial.
- [Code Atelier Governance SDK](https://www.codeatelier.tech/governance) - Python SDK for pre-execution agent governance gates: scope checks, budgets, approvals, loop detection, halt/presence handling, and tamper-evident Postgres audit trails.
- [Squad](https://bradygaster.github.io/squad/) ([GitHub](https://github.com/bradygaster/squad)) - Alpha GitHub Copilot-based agent team system with repo-native specialist agents, persistent memory, coordinator routing, parallel work, and CLI/SDK packages.
- [Lanes](https://lanes.sh/) - macOS workspace where Claude Code, Codex, Gemini CLI, and other agentic CLIs run parallel sessions with PTYs, boards, worktrees, diffs, and resume.
- [SIDJUA](https://www.sidjua.com/) ([GitHub](https://github.com/GoetzKohlberg/sidjua)) - Governance-first AI agent orchestration platform with pre-action controls, budgets, approvals, classifications, and audit trails.
- [Agentix Labs](https://www.agentixlabs.com/) - First implementation services entry, tracked separately from orchestrators because it helps teams deploy and harden production agent systems.

## Contents

- [News](#news)
- [Parallel Coding-Agent Runners](#parallel-coding-agent-runners)
- [Multi-Agent Platforms And Builders](#multi-agent-platforms-and-builders)
- [Coordination And Team Systems](#coordination-and-team-systems)
- [Not Open But Important](#not-open-but-important)
- [CLI Agent Session Workspaces](#cli-agent-session-workspaces)
- [Governance And Enforcement](#governance-and-enforcement)
- [Agent-Friendly Tooling](#agent-friendly-tooling)
- [Implementation Services](#implementation-services)
- [Contributing](#contributing)
- [Local Development](#local-development)

## News

Open Orchestrators is also a lightweight news site for meaningful updates from projects already in the directory.

- Add news posts as Markdown files in [`src/content/news`](./src/content/news).
- Set `playerSlug` to the matching entry in [`src/data/orchestrators.ts`](./src/data/orchestrators.ts).
- Include `sourceName` and `sourceUrl` when the post is based on an official announcement, docs page, or repository update.
- The homepage renders the latest story alongside the directory; `/news/` is the full archive.

## Parallel Coding-Agent Runners

Tools for running multiple coding agents simultaneously, usually with git worktree isolation, terminal/session management, review surfaces, or issue-to-agent routing.

- [Gas Town](https://github.com/gastownhall/gastown) ([GitHub](https://github.com/gastownhall/gastown)) - Multi-agent workspace manager for Claude Code, GitHub Copilot, Codex, Gemini, and other coding agents with persistent work tracking.
- [Multica](https://multica.ai/) ([GitHub](https://github.com/multica-ai/multica)) - Managed agents platform where coding agents act like teammates, take issues, and reuse shared skills.
- [Orca](https://www.onorca.dev/) ([GitHub](https://github.com/stablyai/orca)) - Desktop environment for running multiple coding agents safely in parallel across worktrees.
- [Superset](https://superset.sh/) ([GitHub](https://github.com/superset-sh/superset)) - Local code editor and control plane for parallel CLI coding agents across isolated git worktrees.

## Multi-Agent Platforms And Builders

Frameworks and product surfaces for creating agents, teams, workflows, chatflows, agent apps, or production agent runtimes.

- [Agno](https://agno.com/) ([GitHub](https://github.com/agno-agi/agno)) - Production runtime for agentic software with agents, teams, workflows, and AgentOS services.
- [Cabinet](https://runcabinet.com/) ([GitHub](https://github.com/hilash/cabinet)) - AI-first knowledge base where files live on disk and agents help with execution.
- [Dify](https://dify.ai/) ([GitHub](https://github.com/langgenius/dify)) - Agentic workflow builder that combines workflows, chatflows, apps, and knowledge systems.
- [Flowise](https://flowiseai.com/) ([GitHub](https://github.com/FlowiseAI/Flowise)) - Visual builder for AI agents and orchestration flows.
- [Mastra](https://mastra.ai/) ([GitHub](https://github.com/mastra-ai/mastra)) - TypeScript framework for agents, graph-based workflows, MCP servers, evals, observability, and production AI applications.
- [OpenClaw](https://openclaw.ai/) ([GitHub](https://github.com/openclaw/openclaw)) - Open-source personal AI assistant software built around chat, persistent context, skills, and execution.
- [SIDJUA](https://www.sidjua.com/) ([GitHub](https://github.com/GoetzKohlberg/sidjua)) - Governance-first AI agent orchestration platform where policy, approval, budget, classification, and audit checks run before agent actions execute.
- [Sim](https://www.sim.ai/) ([GitHub](https://github.com/simstudioai/sim)) - Open-source AI agent platform for building agents with integrations, workflows, knowledge bases, and docs.
- [SwarmClaw](https://www.swarmclaw.ai/) ([GitHub](https://github.com/swarmclawai/swarmclaw)) - Self-hosted AI agent runtime for autonomous agents, delegated work, schedules, provider management, and chat-platform connectors.

## Coordination And Team Systems

Systems where the central object is the team, company, room, protocol, role, goal, job, or handoff layer between agents.

- [CrewAI](https://www.crewai.com/) ([GitHub](https://github.com/crewAIInc/crewAI)) - Multi-agent system organized around specialized crews, roles, and delegation.
- [Squad](https://bradygaster.github.io/squad/) ([GitHub](https://github.com/bradygaster/squad)) - Alpha GitHub Copilot-based system where specialist agents live in the repo, keep memory, share decisions, route work through a coordinator, and run in parallel.
- [Culture](https://culture.dev/) ([GitHub](https://github.com/OriNachum/culture)) - Coordination-oriented system with rooms, protocol docs, agent lifecycle patterns, and multiple clients.
- [Paperclip](https://paperclip.ing/) ([GitHub](https://github.com/paperclipai/paperclip)) - Open-source orchestration for zero-human companies, centered on AI employees, goals, and jobs.

## Not Open But Important

Closed products that are not part of the open directory, but matter to the community because they influence how builders think about multi-agent orchestration.

- [Augment Code Intent](https://www.augmentcode.com/product/intent) - Not open-source; included because Intent puts coordinated agents, isolated workspaces, and living specs in one developer workspace.

## CLI Agent Session Workspaces

Tools that manage parallel CLI-agent sessions, terminals, issue boards, worktrees, diffs, and local review loops. These are useful for agentic coding work, but they are tracked separately from orchestrator/player entries when they do not manage agent teams or runtime behavior directly.

- [Lanes](https://lanes.sh/) - macOS workspace where Claude Code, Codex, Gemini CLI, and other agentic CLIs run as parallel real-PTY sessions with boards, auto-created git worktrees, session resume, diffs, and file editing.

## Governance And Enforcement

Policy, permission, approval, budget, and audit layers that sit between agent intent and execution. These are not orchestrators themselves; they govern actions routed through an orchestrator, framework, coding agent, MCP server, or application runtime.

### Open-source governance tools

- [Microsoft Agent Governance Toolkit](https://github.com/microsoft/agent-governance-toolkit) - MIT-licensed runtime governance toolkit for AI agents with deterministic policy enforcement, zero-trust identity, execution sandboxing, SRE controls, and compliance checks.
- [Code Atelier Governance SDK](https://www.codeatelier.tech/governance) - Python SDK for pre-execution governance gates around AI agents, backed by Postgres.
- [Veto](https://veto.so/) ([GitHub](https://github.com/PlawIO/veto)) - Apache-2.0 authorization layer for AI agent tool calls, with TypeScript and Python SDKs, YAML policies, approval routing, and audit logs. Veto Cloud is commercial.

### Commercial and platform governance layers

- [Databricks Unity AI Gateway](https://www.databricks.com/blog/ai-gateway-governance-layer-agentic-ai) - Commercial Databricks platform layer for governing LLM access, MCP servers, APIs, observability, costs, guardrails, fallbacks, and rate limits in agentic AI workflows.

## Agent-Friendly Tooling

Tools that are not orchestrators themselves, but make multi-agent systems easier to operate, measure, observe, or reuse.

- [Agent Analytics](https://agentanalytics.sh/) - Web analytics for builders that Claude Code, Codex, Cursor, OpenClaw, Paperclip, and similar AI agents can use.
- [ClawTrace](https://www.clawtrace.ai/?ref=producthunt) - Observability for OpenClaw agents that shows what failed, where spend leaked, and how to improve runs.
- [Companies.sh](https://companies.sh/) - Reusable companies for AI agents: pre-built organizations that can be installed with a single command.

## Implementation Services

Services companies and consultants that publish practical material on deploying, hardening, and operating multi-agent systems. These are not orchestrator/player entries.

- [Agentix Labs](https://www.agentixlabs.com/) - Implementation services and practical writing for teams moving AI agents from pilots into production operations. Public contact details list United States and Canadian offices in New York and Montreal; no explicit worldwide coverage claim is made.

## Contributing

Pull requests are welcome if the project clearly fits the directory scope.

- Add or update entries in [`src/data/orchestrators.ts`](./src/data/orchestrators.ts).
- Prefer official website, docs, and GitHub links.
- Keep summaries factual, concise, and based on public sources.
- For governance and enforcement entries, state whether the source is open source, open-core, commercial, or a platform feature.
- If you add a project, include the source you used to verify it.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full review criteria.

## Local Development

This repo contains the Awesome Multi-Agent Orchestrators list and a small Astro site for [`openorchestrators.org`](https://openorchestrators.org/).

```bash
cd open-orchestrators.org
npm install
npm run dev
```

Most editorial updates should happen in [`src/data/orchestrators.ts`](./src/data/orchestrators.ts), which is the source of truth for directory entries, rank order, notes, tags, and links.

News updates should happen in [`src/content/news`](./src/content/news). Directory entries and news posts are intentionally separate: directory metadata describes the player; news Markdown describes a dated update about that player.
