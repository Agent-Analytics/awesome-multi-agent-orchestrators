---
title: "Hermes v0.13.0 is the Tenacity Release"
description: "Nous Research announced Hermes Agent v0.13.0, the Tenacity Release, with a durability-focused release covering Kanban completion controls, /goal, checkpoint persistence, gateway resume, no-agent cron watchdogs, security hardening, Google Chat, provider plugins, and seven i18n locales."
date: 2026-05-07T21:00:13Z
playerSlug: "hermes"
sourceName: "Nous Research X announcement"
sourceUrl: "https://x.com/NousResearch/status/2052493732205744303"
category: "Release"
tags:
  - agent-runtime
  - orchestration
  - reliability
  - security
  - open-source
draft: false
---

Nous Research announced Hermes Agent `v0.13.0` on May 7 as "The Tenacity Release." The public X post gives the short version: `Hermes Agent v0.13.0 - “The Tenacity Release”`. The official GitHub release expands that into a broad durability release for the Hermes agent runtime.

The release notes frame the theme directly: Hermes Agent now "finishes what it starts." In practice, the highlighted changes make long-running agent work harder to lose. Kanban is described as a durable multi-agent board with heartbeats, reclaim, zombie detection, auto-block on incomplete exit, per-task retries, and hallucination recovery. `/goal` is introduced as a way to keep the agent locked on a target across turns. Checkpoints v2 rewrites state persistence with pruning, and the gateway can auto-resume interrupted sessions after restart.

The update also widens Hermes' operating surface. Cron adds a `no_agent` watchdog mode for script-only jobs. Google Chat becomes the 20th messaging platform. Providers become a pluggable surface. Hermes also ships static gateway and CLI messages in seven locales: Chinese, Japanese, German, Spanish, French, Ukrainian, and Turkish.

Security is a major part of the release framing. The notes say the release closes eight P0 issues and call out redaction being on by default, guild-scoped Discord role allowlists, WhatsApp rejecting strangers by default, TOCTOU fixes around `auth.json` and MCP OAuth, browser cloud-metadata SSRF protection, cron prompt-injection scanning over assembled skill content, and redaction for `hermes debug share` uploads.

For Open Orchestrators readers, the category signal is not one single feature. It is the shape of the release: Hermes is turning agent operations into a more recoverable system. The release connects persistent board work, explicit goal tracking, restart recovery, checkpoint pruning, watchdog jobs, platform controls, provider plugins, and security defaults into the same reliability story.

For the Agent Analytics angle, that matters because these controls sit upstream of product work. Hermes can coordinate and recover the agents that ship pages, docs, onboarding edits, and experiments. Agent Analytics should measure the downstream outcome of that work: visits, sources, signup, activation, retention, and funnel movement.

Source confidence: High for the release name, version, and highlighted changes. The Nous Research announcement names Hermes Agent v0.13.0 and "The Tenacity Release," and the official GitHub release provides the detailed release notes for `v2026.5.7` / `v0.13.0`.

Evidence:

- [Nous Research X announcement: Hermes Agent v0.13.0 - “The Tenacity Release”](https://x.com/NousResearch/status/2052493732205744303)
- [Hermes Agent v0.13.0 GitHub release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.5.7)
- [Hermes Agent GitHub repository](https://github.com/NousResearch/hermes-agent)

Explicit non-claims:

- This update does not benchmark Hermes v0.13.0 against other agent runtimes or orchestration systems.
- This update does not claim every highlighted feature is enabled or configured by default in every Hermes install.
- This update does not claim Agent Analytics measures Hermes internals, Kanban rows, checkpoints, memory, or worker logs.
