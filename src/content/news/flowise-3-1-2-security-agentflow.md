---
title: "Flowise 3.1.2 tightens permissions, credential boundaries, and Agentflow behavior"
description: "Flowise released 3.1.2 with security fixes across credentials, mass assignment, workspace disclosure, MCP config, and Agentflow state handling."
date: 2026-04-16T07:55:00Z
playerSlug: "flowise"
sourceName: "Flowise 3.1.2 GitHub release"
sourceUrl: "https://github.com/FlowiseAI/Flowise/releases/tag/flowise@3.1.2"
category: "Release"
tags:
  - orchestration
  - security
  - permissions
  - agentflow
draft: false
---

Flowise published `flowise@3.1.2` on 2026-04-14, and the npm registry shows `flowise` at `3.1.2`. The official release notes list a security-heavy batch: credential data leak fixes, cross-workspace chatflow disclosure protection, permission checks on vector store APIs, mass-assignment fixes across tools, variables, chatflows, assistants, datasets, dataset rows, and custom templates, plus additional MCP Server Config security work.

This matters for Open Orchestrators readers because Flowise is a visual platform for building agentic systems, including multi-agent Agentflow workflows. In that context, credential boundaries, workspace scoping, MCP configuration, and API permission checks are not background maintenance; they are part of whether teams can trust a shared orchestration surface.

For operators and builders, the practical implication is to evaluate the 3.1.2 update if they self-host Flowise or expose it to teams. Test authentication, workspace isolation, credential access, vector-store access, and existing Agentflow workflows after upgrading, especially flows that depend on variables, iteration state, streaming responses, or MCP-connected tools.

Source confidence: High.

Evidence:

- [Flowise 3.1.2 GitHub release](https://github.com/FlowiseAI/Flowise/releases/tag/flowise@3.1.2)
- [flowise on npm](https://www.npmjs.com/package/flowise)
- [Flowise official website](https://flowiseai.com/)

Explicit non-claims:

- This update does not claim a specific CVE mapping for every release-note item.
- This update does not claim every fix applies to every Flowise deployment mode.
- This update does not claim the upgrade replaces each operator's own security review.
- This update does not rely on unverified X/Twitter posts as source evidence.
