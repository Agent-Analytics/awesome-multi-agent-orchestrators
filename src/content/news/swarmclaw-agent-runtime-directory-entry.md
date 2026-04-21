---
title: "SwarmClaw joins Open Orchestrators as a self-hosted multi-agent runtime"
description: "SwarmClaw is a self-hosted multi-agent AI runtime and control plane for autonomous agents, delegated work, schedules, provider management, MCP support, and chat-platform connectors."
date: 2026-04-13T18:42:03Z
playerSlug: "swarmclaw"
sourceName: "SwarmClaw official website"
sourceUrl: "https://www.swarmclaw.ai/"
category: "Directory update"
tags:
  - orchestration
  - agents
  - open-source
  - runtime
  - self-hosting
draft: false
---

SwarmClaw has been added to the Open Orchestrators directory after verification from its official website, public GitHub repository, and official X profile. The project describes itself as a self-hosted multi-agent AI runtime and control plane for running autonomous agents, delegating work, managing providers, scheduling tasks, connecting agents to chat platforms, and supporting MCP-based integrations.

This matters for Open Orchestrators readers because SwarmClaw sits directly in the orchestration layer: its public surfaces describe delegation, memory, schedules, connectors, OpenClaw integration, provider management, and structured multi-agent work as core capabilities rather than side features.

For operators and builders, the practical signal is that SwarmClaw now has multiple primary surfaces to watch: the official site, GitHub releases, the npm package `@swarmclawai/swarmclaw`, GHCR/Docker install paths referenced from release notes and docs, and the official X handle [@SwarmClaw](https://x.com/SwarmClaw).

## Where SwarmClaw Fits

SwarmClaw belongs in the same Open Orchestrators frame as projects such as Paperclip, OpenClaw, Cabinet, Multica, and Orca: it is not only a prompt surface. It is trying to be a runtime for assigning work to agents, giving them providers and connectors, and letting scheduled or delegated work continue inside a managed environment.

That runtime framing is the important part. Once agents are doing delegated work, the next operational question is not only "did the task finish?" It is "did the task change anything for a real user?"

That is the same analytics gap described in the Paperclip write-up. Paperclip gives a company a way to assign and manage work; Agent Analytics gives builders web analytics for the projects those agents ship. SwarmClaw gives self-hosted agents a runtime; Agent Analytics measures the websites, docs, onboarding flows, demos, and app surfaces those builders improve.

## Where Builder Web Analytics Fits

Agent Analytics does not need a player-specific plugin to be useful here. The practical path is simple: ask the agent working in the relevant repo to install Agent Analytics, connect it to the project surface, and verify that real usage is being recorded.

That fits the way many Agent Analytics customers already work. They are not hand-copying instrumentation into a site while reading a long setup guide; they are delegating the installation to an AI agent that has access to the website, app shell, docs repo, onboarding flow, or demo page.

A useful SwarmClaw task can stay short:

```text
Set up Agent Analytics for this project. If approval is needed, send me the login or approval URL. Track the public surface users touch first, define a small set of activation events, deploy the change, and verify that the first event arrives.
```

The important editorial point is not the exact command or snippet. It is that builders using SwarmClaw can close the loop on project work. If an agent changes a landing page, improves a setup guide, rewrites onboarding, or ships a demo, Agent Analytics gives that builder workflow a way to check whether users actually moved closer to activation.

Start with a small event set around the first value path: install intent, setup start, signup, provider connection, first project, or whatever equivalent milestone matters for the product. The names should match the product, and the taxonomy should stay small until the first loop is working.

## The First Loop To Measure

For most SwarmClaw operators, the first Agent Analytics loop should connect builder output to user behavior:

1. A SwarmClaw agent ships a page, docs update, onboarding change, connector guide, or install-flow improvement.
2. Users arrive from search, GitHub, a launch post, Discord, docs, or a community link.
3. They read the page and decide whether setup looks real.
4. They click install, copy a command, start setup, sign up, connect a provider, or create a first project.
5. A scheduled SwarmClaw task asks Agent Analytics what changed in project usage and assigns the next improvement.

That is the useful operating loop: delegate work, measure the project outcome, and feed the result back into the next delegated task.

Example recurring task:

```text
Every weekday morning, query Agent Analytics for the last 24 hours. Report visits, top sources, install intent, signup, first project creation, and the biggest drop-off in the setup path. Create one follow-up task for the page or flow most likely to improve activation.
```

The practical value is not a dashboard inside SwarmClaw. It is giving builders using SwarmClaw agent-friendly web analytics they can act on without waiting for a human to manually inspect a dashboard.

## What To Watch Next

SwarmClaw should stay on the Open Orchestrators watchlist for release, packaging, and integration movement. The most useful future signals are:

- GitHub releases for runtime, delegation, memory, scheduling, connector, provider, OpenClaw, or install-path changes.
- npm releases for `@swarmclawai/swarmclaw`.
- GHCR/Docker install notes in release text or docs.
- Any verified official social handle, changelog, or announcement channel.
- Official examples or setup paths that show SwarmClaw agents querying Agent Analytics project data directly.

Source confidence: High for the directory addition and source surfaces. The Agent Analytics framing is builder-facing web analytics: it applies when the measured object is a project surface with deliberate web or product events.

Evidence:

- [SwarmClaw official website](https://www.swarmclaw.ai/)
- [SwarmClaw GitHub repository](https://github.com/swarmclawai/swarmclaw)
- [SwarmClaw GitHub releases](https://github.com/swarmclawai/swarmclaw/releases)
- [SwarmClaw X profile](https://x.com/SwarmClaw)
- [npm package `@swarmclawai/swarmclaw`](https://www.npmjs.com/package/@swarmclawai/swarmclaw)
- [Paperclip and Agent Analytics write-up](https://blog.agentanalytics.sh/blog/paperclip-companies-need-end-user-analytics/)
- [Agent Analytics CLI package](https://www.npmjs.com/package/@agent-analytics/cli)
- [Agent Analytics installation guides](https://docs.agentanalytics.sh/installation/)

Explicit non-claims:

- This update does not claim Agent Analytics measures SwarmClaw logs, traces, or task-runner execution.
- This update does not compare SwarmClaw's quality, adoption, or maturity against other players.
