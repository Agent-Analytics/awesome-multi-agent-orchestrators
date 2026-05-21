---
title: "Hermes skill bundles turn recurring agent workflows into one slash command"
description: "Hermes Agent now documents skill bundles: small YAML groups of skills and instructions that load together behind one slash command for repeatable agent workflows."
date: 2026-05-21T14:05:49Z
playerSlug: "hermes"
sourceName: "Hermes Agent skills documentation"
sourceUrl: "https://hermes-agent.nousresearch.com/docs/user-guide/features/skills#skill-bundles"
category: "Feature"
tags:
  - skills
  - orchestration
  - agent-runtime
  - workflows
  - open-source
ogImage: "/images/news/hermes-skill-bundles-one-slash-command.png"
draft: false
---

Hermes Agent now documents skill bundles: tiny YAML files that group several skills under one slash command. When an operator runs a bundle command, Hermes loads every listed skill plus optional bundle instructions into the same user message.

![Abstract Hermes skill bundle workflow artwork showing modular task cards flowing into one orchestration target](/images/news/hermes-skill-bundles-one-slash-command.png)

The practical shift is small in interface and large in workflow. A recurring job no longer has to depend on the user remembering which skills to load, which constraints to restate, or which operating pattern applies this time. The operator can name the workflow once, then call it from the CLI or any Hermes gateway with a command such as `/backend-dev refactor the auth middleware`.

For Open Orchestrators readers, this is a useful orchestration primitive because it packages expert procedure into a reusable command surface. Skills already give Hermes task-specific behavior. Bundles make the common multi-skill combinations explicit: review plus TDD plus PR workflow, research plus synthesis plus publishing, or product analytics plus reporting plus next-action planning.

The buyer value is repeatability. Daily agent work often fails at the handoff between intention and setup: the agent has to be reminded which playbook applies before it can do the work. Bundles reduce that setup tax. They turn a team's preferred operating pattern into a named entry point that can be reused by humans, scheduled jobs, and messaging-platform workflows.

Agent Analytics is a good example of the pattern. A founder can use a Hermes bundle for a recurring product loop: fetch analytics, read funnel changes, inspect the current project context, and recommend the next product move. The important point is not that the bundle measures Hermes itself. It is that Hermes can load the right product-decision workflow before touching the data, so analytics becomes agent-readable input for the next decision.

The docs describe bundle files under `~/.hermes/skill-bundles/<slug>.yaml`, with `skills` as the required list and optional fields for `name`, `description`, and `instruction`. Hermes also exposes bundle management commands for listing, showing, creating, deleting, and reloading bundles.

Source confidence: High for the documented bundle behavior, schema, CLI commands, and slash-command use. Medium for category implications because the docs describe the capability; they do not provide adoption data or reliability benchmarks.

Evidence:

- [Hermes Agent skills documentation: skill bundles](https://hermes-agent.nousresearch.com/docs/user-guide/features/skills#skill-bundles)
- [Hermes Agent documentation](https://hermes-agent.nousresearch.com/docs/)
- [Hermes Agent GitHub repository](https://github.com/NousResearch/hermes-agent)
- [Agent Analytics write-up on Hermes skill bundles](https://blog.agentanalytics.sh/blog/hermes-skill-bundles-agent-analytics/)

Explicit non-claims:

- This update does not claim skill bundles are a new agent architecture by themselves; they are a workflow packaging layer on top of Hermes skills.
- This update does not claim every Hermes user has migrated daily work into bundles.
- This update does not benchmark bundle-based workflows against manual skill loading.
- This update does not claim Agent Analytics measures Hermes internals, tool traces, memory, or terminal sessions.
