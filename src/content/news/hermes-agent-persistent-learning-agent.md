---
title: "Hermes Agent joins Open Orchestrators as a persistent learning agent"
description: "Hermes Agent is an MIT-licensed autonomous agent from Nous Research with persistent memory, self-created skills, scheduled automations, subagents, sandboxing, and messaging gateways."
date: 2026-04-19T06:15:00Z
playerSlug: "hermes"
sourceName: "Hermes Agent official documentation"
sourceUrl: "https://hermes-agent.nousresearch.com/docs/"
category: "Directory"
tags:
  - orchestration
  - agents
  - memory
  - skills
  - open-source
  - agent-analytics
draft: false
---

Hermes Agent has been added to the Open Orchestrators directory after verification from the official Hermes Agent site, official documentation, and the public `NousResearch/hermes-agent` GitHub repository. The project presents Hermes as an open-source autonomous agent from Nous Research that lives on user-controlled infrastructure, remembers what it learns, creates reusable skills, and gets more capable over time.

This matters for Open Orchestrators readers because Hermes sits in the persistent-agent branch of the category. Its public docs describe a closed learning loop, persistent memory, scheduled automations, subagent delegation, MCP support, full web control, multiple terminal backends, and 15+ messaging platforms through one gateway.

The directory entry also tracks the Nous Research X account and Teknium's X account as useful monitoring surfaces for future Hermes and Nous Research updates.

## Where Hermes Fits

Hermes belongs near OpenClaw, SwarmClaw, Agno, and Mastra in the Open Orchestrators frame, but its emphasis is different. It is not only a framework for defining agent workflows and not only a coding-agent workspace. It is a persistent personal agent runtime: memory, skills, scheduled work, messaging gateways, terminal environments, and delegated subagents are all part of the public product surface.

The important category signal is the learning loop. Hermes documents memory, skills, session search, and skill self-improvement as core behavior, then pairs that with cron scheduling and chat-platform delivery. That makes the system relevant to teams asking how agent work persists after one terminal session or one chat thread ends.

## Where Builder Web Analytics Fits

For Hermes, the clean Agent Analytics route is the skill method. Install the Agent Analytics skill in the environment where Hermes works, then let Hermes follow that skill for login, project creation, tracking setup, event verification, analytics queries, and recurring growth reports.

A useful Hermes task can stay short:

```text
Install the Agent Analytics skill with `npx skills add agent-analytics/skills`. Then set up Agent Analytics for this project. If approval is needed, send me the approval link and wait. After approval, create or select the project, add event reporting, verify the first event arrives, and create a scheduled Hermes report for visits, sources, install intent, signup, activation, retention, funnel drop-off, and the next improvement.
```

This fits Hermes' skill-centered operating model. Hermes can keep memory, create skills, schedule work, and delegate through subagents while the Agent Analytics skill supplies the product analytics workflow. The useful loop is not measuring Hermes internals. Hermes can keep its own memory and task history; Agent Analytics measures the user-facing project surface after the agent changes something.

## The First Loop To Measure

For most Hermes operators, the first Agent Analytics loop should connect persistent agent work to user behavior:

1. Install the Agent Analytics skill with `npx skills add agent-analytics/skills`.
2. Hermes follows the skill to approve login, create or select the project, add the tracker, and verify the first event.
3. The changed surface reports visits, sources, install intent, signup, activation, retention, funnel, and experiment events to Agent Analytics.
4. A scheduled Hermes task uses the skill to fetch Agent Analytics results and turn the measured user outcome into the next skill, task, subagent job, or scheduled report.

That is the operating loop worth tracking: persistent agent work, measured project outcome, and the next action fed back into the agent's memory and schedule.

## What To Watch Next

Hermes should stay on the Open Orchestrators watchlist for runtime, memory, skills, scheduling, and gateway movement. The most useful future signals are:

- GitHub releases and tags for agent runtime, subagent, memory, gateway, MCP, sandboxing, and skill changes.
- Documentation updates around memory, skills, cron scheduling, messaging gateways, and terminal backends.
- Official Nous Research announcements.
- Teknium updates that point to Hermes product or release movement.
- Official examples where Hermes reads Agent Analytics or other project outcome data directly.

## Source Confidence

High for the directory addition and source surfaces. The official site and docs describe Hermes as open source and MIT-licensed, and the public GitHub repository is available under `NousResearch/hermes-agent`. The Agent Analytics framing is builder-facing web analytics: it applies when the measured object is a project surface with deliberate web or product events.

## Evidence

- [Hermes Agent official site](https://hermes-agent.nousresearch.com/)
- [Hermes Agent official documentation](https://hermes-agent.nousresearch.com/docs/)
- [Hermes Agent GitHub repository](https://github.com/NousResearch/hermes-agent)
- [Nous Research X](https://x.com/NousResearch)
- [Teknium X](https://x.com/Teknium)
- [Agent Analytics skill repository](https://github.com/Agent-Analytics/skills)
- [Skills directory](https://skills.sh/)
- [Agent Analytics CLI package](https://www.npmjs.com/package/@agent-analytics/cli)
- [Agent Analytics installation guides](https://docs.agentanalytics.sh/installation/)

## Explicit Non-Claims

- This update does not claim Agent Analytics measures Hermes logs, traces, terminal sessions, or conversation memory.
- This update does not compare Hermes' quality, adoption, or maturity against other Open Orchestrators players.
- This update does not claim every Hermes feature is available in every runtime or deployment mode.
