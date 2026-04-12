---
title: "Orca 1.1.16 improves Codex tracking and terminal workflows"
description: "Orca's April 12 release window adds Codex CLI tracking fixes, terminal link handling, active-agent visibility, and follow-on worktree and diff-view improvements in a release candidate."
date: 2026-04-12T06:55:33Z
playerSlug: "orca"
sourceName: "Orca GitHub release"
sourceUrl: "https://github.com/stablyai/orca/releases/tag/v1.1.16"
category: "Release"
tags:
  - orchestration
  - coding-agents
  - worktrees
  - terminal
draft: false
---

Orca published `v1.1.16` on 2026-04-11T23:11:38Z, which is inside the 2026-04-12 Asia/Jerusalem daily scan window. The release fixes Codex CLI detection for Electron tracking, improves terminal link behavior, and cleans up a development Electron process shutdown issue. It followed `v1.1.15`, which added an active agent count in the top bar, refreshed worktree quick-jump UI, improved terminal keyboard behavior, and updated README material around Codex account switching.

This matters for Open Orchestrators readers because Orca is positioning itself as a worktree IDE for running Claude Code, Codex, OpenCode, and other coding agents side by side. Small terminal and worktree-control changes are more meaningful in that context than ordinary editor polish because they affect how operators see active agents, switch between worktrees, and route terminal interactions while multiple agents are running.

For operators and builders, the practical signal is that Orca is tightening the control plane around parallel coding-agent sessions. A same-day `v1.1.17-rc.0` prerelease also adds a "Create new worktree" entry in the Cmd+J dialog, contextual copy in diff view, an update card, terminal-pane scroll preservation, and a macOS double-IPC-registration fix. Treat those prerelease items as near-term signals, not stable-release claims.

Source confidence: High for `v1.1.16` and `v1.1.15`; medium for `v1.1.17-rc.0` because it is explicitly marked as a prerelease.

Evidence:

- [Orca v1.1.16 GitHub release](https://github.com/stablyai/orca/releases/tag/v1.1.16)
- [Orca v1.1.15 GitHub release](https://github.com/stablyai/orca/releases/tag/v1.1.15)
- [Orca v1.1.17-rc.0 GitHub prerelease](https://github.com/stablyai/orca/releases/tag/v1.1.17-rc.0)
- [Orca official homepage](https://www.onorca.dev/)
- [Orca GitHub repository](https://github.com/stablyai/orca)

Explicit non-claims:

- This update does not claim `v1.1.17-rc.0` is a stable release.
- This update does not claim benchmarked productivity, reliability, or performance gains from the terminal and worktree changes.
- This update does not rely on unverified X/Twitter posts as source evidence.
