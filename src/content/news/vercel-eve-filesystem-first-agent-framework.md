---
title: "Vercel launches Eve, a filesystem-first framework for durable AI agents"
description: "Vercel's Eve framework treats an agent as a directory with Markdown instructions and skills, TypeScript tools, channels, schedules, sandbox configuration, and durable sessions."
date: 2026-06-17T17:02:28Z
playerSlug: "eve"
sourceName: "Vercel Eve website"
sourceUrl: "https://vercel.com/eve"
category: "Launch"
tags:
  - orchestration
  - agent-framework
  - open-source
  - filesystem
  - vercel
draft: false
---

Vercel launched Eve as a filesystem-first framework for durable AI agents. The public site describes it as "Next.js for web apps, but for agents": Markdown for instructions and skills, TypeScript for tools, and durable sessions by default.

The GitHub README shows the core shape. An Eve agent is a directory with conventional files and folders: `agent/instructions.md`, optional `agent.ts` runtime configuration, `tools/` for typed functions, `skills/` for reusable playbooks, `channels/` for message surfaces, and `schedules/` for recurring jobs.

For Open Orchestrators readers, the signal is packaging. Eve turns agent behavior into inspectable project structure. That matters because teams need to review, version, ship, and operate agent capabilities the same way they review application code.

The early ecosystem is already forming around examples and forks, but the durable source is Vercel's own site and repository. The repository was created on June 16, 2026 and is Apache-2.0 licensed.

Source confidence: High for the filesystem-first structure, package layout, license, and Vercel authorship because they come from the official Vercel site and GitHub repository. Medium for category implications because the source documents the framework, not adoption outcomes.

Evidence:

- [Vercel Eve website](https://vercel.com/eve)
- [Vercel Eve GitHub repository](https://github.com/vercel/eve)
- [Eve documentation](https://beta.eve.dev/docs)

Explicit non-claims:

- This post does not claim Eve replaces existing agent frameworks or coding-agent harnesses.
- This post does not claim Eve has broad production adoption yet.
- This post does not independently test Eve's durability, sandboxing, or deployment behavior.
