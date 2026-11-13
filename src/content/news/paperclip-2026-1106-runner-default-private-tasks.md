---
title: "Paperclip v2026.1023 and v2026.1106: Runner by default, private tasks, and your own model gateway"
description: "A catch-up on Paperclip releases from Oct 23 to Nov 6, 2026: the native Runner as the default for new agents, GitHub Copilot as a harness, repositories as skill sources, private tasks and projects, bring-your-own model gateways, and a model-backed prompt injection check."
date: 2026-11-13T08:30:00Z
playerSlug: "paperclip"
sourceName: "Paperclip GitHub releases"
sourceUrl: "https://github.com/paperclipai/paperclip/releases/tag/v2026.1106.0"
category: "Release"
tags:
  - orchestration
  - coding-agents
  - security
  - skills
  - open-source
draft: false
ogImage: "/images/news/paperclip-2026-1106-runner-default-private-tasks.webp"
---

Paperclip, the open-source control plane for running AI agents as a company, shipped two large releases in the past month: `v2026.1023.0` on Oct 23 (200 commits) and `v2026.1106.0` on Nov 6 (515 commits). This note covers the main changes from `paperclipai/paperclip`. Most fixes and performance work are omitted.

![Conceptual editorial illustration of a default runner inspecting task cards, a private vault, and a bring-your-own model gateway, not a product screenshot.](/images/news/paperclip-2026-1106-runner-default-private-tasks.webp)

## v2026.1106.0: the Runner becomes the default

New Claude, Codex, OpenCode and Pi agents now start on the native Paperclip Runner instead of the legacy adapter on qualified macOS and Linux hosts. Linux needs GNU libc 2.39 or later, and a "Legacy runner" override sits under Advanced. Existing agents keep their runner, and qualified Claude and Codex agents get an **Upgrade runner** action that converts them in one click while keeping model, account and instructions. The release notes say Claude Runner agents start with core task tools preloaded, measured about 20% faster on simple tasks.

GitHub Copilot joins as a native harness. You connect it with a saved GitHub token, the model list comes from the authenticated account, and Copilot CLI 1.0.88 runs through the Runner with the same instruction, permission and completion boundaries as the other providers.

GitHub repositories attached to a new project are imported as skill sources automatically. Paperclip re-checks the configured branch every five minutes, installs new skills unless excluded, and pins the skill versions each run started with. Existing projects get an "adopt repositories" action.

Two opt-in safety and visibility settings arrive. A connection manager can pick an OpenRouter model (default `openai/gpt-oss-safeguard-20b`) to classify tool results before they reach an agent, replacing the earlier regex check. Agent observability can send native Codex and Claude Code logs and traces to Braintrust or any OTLP HTTP endpoint. Both are off until configured.

Finished workspaces now clean up after themselves. One hour after a task tree finishes, regenerable directories that the repository's `.gitignore` ignores, such as `node_modules` and `dist`, are removed while the branch and source changes stay. Opt-in encrypted restore points save worktrees with unpushed or uncommitted work before they expire and restore them when the task reopens.

Upgrade caveats: the Pipelines experiment is removed (Cases and Routines remain, and existing pipeline records are kept untouched), run failures no longer reach Sentry by default unless `PAPERCLIP_SENTRY_RUN_FAILURES` is set, and the run history API returns 200 rows by default and at most 1,000. Migrations `0334` to `0374` run on upgrade.

## v2026.1023.0: private work and your own model gateway

A task or project can now be marked private and shared with named people and agents. Everyone else cannot open it, find it in lists or search, read its run transcripts, or reach it through a plugin. Owners and admins need an audited `?breakGlass=true` read, and the company run list still shows a locked row with cost and token fields so budget oversight keeps working.

Agents can run through your own model gateway. Connectors adds OpenRouter, Amazon Bedrock, Google Gemini, and generic Responses, Messages and Chat Completions endpoints, and each agent picks a compatible connection from a dropdown.

Costs becomes an exact ledger: receipts are replayed after failures, retries settle one charge, and every event is marked reported, estimated or unpriced. Budgets now hold on unpriced usage by default, and the Operator role grows from one grant to fourteen, so the release asks operators to review member roles.

The summary above comes from Paperclip's release notes and was not independently tested.

Evidence:

- [Paperclip v2026.1106.0 release notes](https://github.com/paperclipai/paperclip/releases/tag/v2026.1106.0) (2026-11-06)
- [Paperclip v2026.1023.0 release notes](https://github.com/paperclipai/paperclip/releases/tag/v2026.1023.0) (2026-10-23)
- [Paperclip GitHub repository](https://github.com/paperclipai/paperclip)
- [Paperclip on Open Orchestrators](https://openorchestrators.org/players/paperclip/)
