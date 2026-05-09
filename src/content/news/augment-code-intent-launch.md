---
title: "Augment Code launches Intent, a post-IDE workspace for agent orchestration"
description: "Intent starts from three product superpowers: agent orchestration, isolated workspaces, and living specs for developers coordinating multiple coding agents."
date: 2026-04-15T12:40:44Z
playerSlug: "augment-intent"
sourceName: "Augment Code Intent product page"
sourceUrl: "https://www.augmentcode.com/product/intent"
category: "Launch"
tags:
  - orchestration
  - coding-agents
  - living-specs
  - developer-tools
draft: false
---

Augment Code's Intent should be understood through the three product superpowers its launch demo leads with:

1. **Agent orchestration.** Intent has a coordinator agent that turns a task into a spec, delegates work to implementor agents that can run in waves, and uses a verifier agent to check the result against the spec before the developer reviews it.
2. **Isolated workspaces.** Each Intent workspace is backed by its own git worktree, with agents, terminals, diffs, browser previews, git operations, and review state kept together so multiple tasks can move without stepping on each other.
3. **Living specs.** Work starts from a spec that stays current as agents make progress. Requirements, implementation state, and decisions stay aligned instead of drifting across prompts, terminals, branches, and PR notes.

That is why Augment calls Intent "what comes after the IDE." The product is not just another chat panel for writing code faster. It is a developer workspace for coordinating multiple agents on a real codebase while keeping the plan, files, terminal, browser, git workflow, and review loop in one place.

The launch blog describes the operating model clearly: the developer defines the task, reviews the coordinator's plan, approves the spec, then lets agents execute in parallel. Intent also supports specialist agents, model choice by task, Augment's Context Engine, and BYOA workflows with Claude Code, Codex, and OpenCode.

For Open Orchestrators, the important category signal is that Intent treats multi-agent development as a coordinated system instead of a swarm of independent prompts. The developer is not only asking agents to write code; they are managing intent, delegation, workspace isolation, verification, and merge readiness.

Intent is available as a public beta for macOS. During beta, Augment says it uses regular Augment credits with no separate Intent pricing, and developers can also bring Claude Code, Codex, or OpenCode if they want to try the workspace without an Augment subscription.

For teams that want Agent Analytics inside this workflow, the best fit is Augment Skills. Install the Agent Analytics skill with `npx skills add agent-analytics/skills`, then Augment can discover the skill from supported skills locations and let the agent handle login, project creation, tracking setup, event verification, and growth reports through the official Agent Analytics CLI.

## Source Confidence

High for the product-positioning details. Augment's official Intent product page and launch blog describe the public beta, post-IDE positioning, coordinated-agent workflow, isolated workspaces, living specs, built-in browser/terminal/git workflow, model choice, Context Engine, and BYOA support. Augment's Skills docs describe the supported `SKILL.md` locations and discovery model.

## Evidence

- [Augment Code Intent product page](https://www.augmentcode.com/product/intent)
- [Augment Code blog: Intent, a workspace for agent orchestration](https://www.augmentcode.com/blog/intent-a-workspace-for-agent-orchestration)
- [Augment Agent Skills docs](https://docs.augmentcode.com/cli/skills)
- [Agent Analytics skill repository](https://github.com/Agent-Analytics/skills)
- [Support Intent on Product Hunt](https://www.producthunt.com/products/augment-code)

## Explicit Non-Claims

- This update does not claim benchmarked productivity gains from Intent.
- This update does not rely on a private or unauthenticated X view as the source of record.
