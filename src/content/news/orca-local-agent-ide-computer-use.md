---
title: "Orca computer use now works on macOS, Windows and Linux in v1.4.0"
description: "Orca says computer use now works across macOS, Windows, and Linux in v1.4.0, extending its local agent IDE from coding worktrees into real desktop apps, browsers, terminals, notes, video players, and emulators."
date: 2026-05-15T17:08:02Z
playerSlug: "orca"
sourceName: "Orca official X post"
sourceUrl: "https://x.com/orca_build/status/2055331206611538158"
category: "Release"
tags:
  - orchestration
  - coding-agents
  - local-first
  - computer-use
  - desktop-agents
ogImage: "/images/news/orca-v1-4-computer-use-diagram.png"
draft: false
---

Orca's latest product signal is bigger than another editor toggle: computer use is now live in Orca `v1.4.0` across macOS, Windows, and Linux. Orca says the feature lets agents control real desktop apps from the local IDE environment, including Chrome, Slack, Apple Notes, video players, terminals, mobile emulators, and logged-in browser sessions.

![Generated diagram showing a local agent IDE coordinating desktop apps through computer use](/images/news/orca-v1-4-computer-use-diagram.png)

This matters for Open Orchestrators readers because it pushes the local agent IDE toward an operator station, not just a place to launch coding agents. Orca already sits around worktrees, terminals, activity threads, PR flows, and local developer state. Computer use extends that surface into the applications where verification and follow-through actually happen.

The release context supports that direction. The `v1.4.0` GitHub release includes Windows computer-use hardening, floating terminal defaults, live activity threads, PR-worktree improvements, mobile discoverability, and more local session polish. The official Orca post sharpens the message: this is no longer a Codex-only path inside Orca. The intended operator loop is broader: use a logged-in browser, test real apps, and automate repetitive desktop work.

For builders, the practical signal is that agent orchestration is moving down into the workstation. A local agent IDE that can coordinate worktrees, terminals, browser sessions, app windows, and mobile/emulator surfaces starts to look like a control plane for everyday development operations. That is different from a chat wrapper because the agent gets closer to the same messy desktop context the human operator uses.

The open question is reliability. Orca's post and release notes establish the capability and cross-platform availability, but they do not benchmark task success or show how robust the desktop-control loop is across arbitrary apps. Still, the direction is worth tracking: local-first agent tools are adding more hands, not just more panes.

Source confidence: High for Orca's own cross-platform computer-use announcement and `v1.4.0` release timing. Medium for downstream orchestration implications because the announcement is capability-level, not a measured reliability report.

Evidence:

- [Orca official X post on computer use in v1.4.0](https://x.com/orca_build/status/2055331206611538158)
- [Orca v1.4.0 GitHub release](https://github.com/stablyai/orca/releases/tag/v1.4.0)
- [Orca GitHub repository](https://github.com/stablyai/orca)

Explicit non-claims:

- This update does not claim Orca's computer-use feature works equally well across every desktop app.
- This update does not benchmark success rates, autonomy, or security boundaries for desktop control.
- This update does not claim the feature is unique across all agent products; the notable point is that Orca is bringing it into a local cross-platform agent IDE workflow.
