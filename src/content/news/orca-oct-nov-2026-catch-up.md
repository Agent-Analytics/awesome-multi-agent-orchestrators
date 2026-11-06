---
title: "Orca Oct-Nov 2026: Orchestrator V3, nested workers, plugins, and managed remote hosts"
description: "A catch-up on Orca stablyai/orca from Oct 7 to Nov 6, 2026: Orchestrator V3, nested workers by default, plugins with background Mac computer use, managed SSH servers, Chat UI leaving experimental, and broader agent workflow support."
date: 2026-11-06T06:31:44Z
playerSlug: "orca"
sourceName: "Orca GitHub releases"
sourceUrl: "https://github.com/stablyai/orca/releases/tag/v1.4.251"
category: "Release"
tags:
  - orchestration
  - coding-agents
  - nested-workers
  - plugins
  - computer-use
  - remote-hosts
  - agent-ide
  - local-first
draft: false
---

Open Orchestrators last covered Orca on May 20, 2026. This note catches up on official `stablyai/orca` desktop releases from Oct 7 through Nov 6, 2026 (`v1.4.222` through `v1.4.251`). Patch-level fixes are omitted.

On Nov 2, `v1.4.246` shipped Orchestrator V3. Orca says it is more token-efficient and reliable, works with both CLI agents and Chat UI, and shows visual worker indicators in Chat UI. The same release took Chat UI out of experimental: operators can choose Chat or CLI per agent, queue follow-ups while an agent works, and continue with another account or harness after a usage limit. Community plugins also appear in the catalog there.

On Nov 6, `v1.4.251` made nested workers the default. Workers can start their own workers. Finished workers can keep messaging their coordinator. Stopping a worker stops its helpers. Default nested-worker depth is 4; profiles previously set to 1 move to 4 on upgrade, and Settings keeps a manual choice. The same release lets you send a file, Markdown preview, or terminal selection into any agent chat, or start a new agent with that selection.

On Oct 30, `v1.4.245` added plugins from Settings → Plugins (icon themes, syntax highlighting, custom editors) and Mac background computer use so agents can drive apps such as Chrome or Blender while you keep the mouse and keyboard. Some actions still need the app brought forward. Plugins that run code ask for consent, then have full access to the computer. `v1.4.247` on Nov 3 extended plugins toward custom editors, status items, panels, and hooks into agent prompts, launches, and workspace actions.

Remote and scheduled work moved earlier in the window. On Oct 10, `v1.4.224` put a managed Orca server on SSH hosts so connections no longer depend on the host's Node or build tools, and let automations pass per-run model and effort arguments for supported agents. On Oct 17, `v1.4.229` widened shared-skill install to 20 more agents (including Kiro, Qoder, and CodeBuddy paths) and expanded Jira planning so agents can read and update tickets through the Orca CLI. On Oct 27, `v1.4.242` made Claude subagents openable from the sidebar. On Oct 28-Nov 5, browser work added experimental Chrome Web Store extensions in local profiles (`v1.4.243`) and an optional Chrome-compatible password manager in Settings → Browser that uses OS secure storage (`v1.4.250`).

Orca Mobile companion builds continued in parallel (Android prereleases in this window). Desktop releases also kept expanding phone review and chat controls; those are companion surfaces around the same local agent IDE, not a separate orchestrator.

Orca remains MIT-licensed open source. The app is free to run. Agent spend still depends on the Claude, Codex, OpenCode, Grok, or other subscriptions you bring. The product claims above come from Orca's release notes and were not independently tested.

Evidence:

- [Orca v1.4.251](https://github.com/stablyai/orca/releases/tag/v1.4.251) (2026-11-06)
- [Orca v1.4.246](https://github.com/stablyai/orca/releases/tag/v1.4.246) (2026-11-02)
- [Orca v1.4.245](https://github.com/stablyai/orca/releases/tag/v1.4.245) (2026-10-30)
- [Orca v1.4.247](https://github.com/stablyai/orca/releases/tag/v1.4.247) (2026-11-03)
- [Orca v1.4.250](https://github.com/stablyai/orca/releases/tag/v1.4.250) (2026-11-05)
- [Orca v1.4.243](https://github.com/stablyai/orca/releases/tag/v1.4.243) (2026-10-28)
- [Orca v1.4.242](https://github.com/stablyai/orca/releases/tag/v1.4.242) (2026-10-27)
- [Orca v1.4.229](https://github.com/stablyai/orca/releases/tag/v1.4.229) (2026-10-17)
- [Orca v1.4.224](https://github.com/stablyai/orca/releases/tag/v1.4.224) (2026-10-10)
- [Orca releases index](https://github.com/stablyai/orca/releases)
- [Orca GitHub repository](https://github.com/stablyai/orca)
- [Orca website](https://www.onorca.dev/)
- [Orca website changelog](https://www.onorca.dev/changelog)
