---
title: "Orca leans further into the local agent IDE with computer use"
description: "Orca's April 21 release candidate adds computer use via an agent-browser CDP bridge, extending its local-install, worktree-first coding-agent workflow beyond terminals and diffs."
date: 2026-04-21T09:10:00Z
playerSlug: "orca"
sourceName: "Orca GitHub prerelease"
sourceUrl: "https://github.com/stablyai/orca/releases/tag/v1.3.8-rc.1"
category: "Release"
tags:
  - orchestration
  - coding-agents
  - local-first
  - computer-use
  - worktrees
draft: false
---

Orca's fresh `v1.3.8-rc.1` prerelease adds `computer use via agent-browser CDP bridge`, and that is the part of the release window worth paying attention to. Orca already presents itself as a local, worktree-first IDE for running Claude Code, Codex, OpenCode, and similar coding agents side by side. Computer use matters because it gives that locally installed agent setup more hands inside the same workspace, not just another terminal pane.

This matters for Open Orchestrators readers because the interesting shift is not only that Orca runs multiple coding agents. It is that Orca is trying to make the local operator station more action-capable: local install, isolated worktrees, built-in browser, terminals, diffs, previews, and now a clearer path for the agent to inspect and act through the browser surface too.

For operators and builders, the practical signal is that Orca is moving closer to a local command center for coding agents. If the agent can already work in isolated branches and report status from inside the IDE, browser-linked computer use extends the loop from code changes toward UI interaction and verification. That is a more interesting orchestration direction than ordinary editor polish because it increases what the local agent environment can actually do.

The homepage framing supports the same reading. Orca is pushing local download paths for macOS, Windows, and Linux, and describes itself as the place to run agents, inspect output, review changes, and move work forward. The current product surface now combines local install, worktree isolation, built-in browser direction, and computer use in one operator-facing environment.

Source confidence: High for the release-candidate claim and Orca's local-install positioning. Medium for downstream workflow implications because the release note names the capability but does not, by itself, benchmark how far the browser bridge already goes in practice.

Evidence:

- [Orca v1.3.8-rc.1 GitHub prerelease](https://github.com/stablyai/orca/releases/tag/v1.3.8-rc.1)
- [Orca official homepage](https://www.onorca.dev/)
- [Orca GitHub repository](https://github.com/stablyai/orca)

Explicit non-claims:

- This update does not claim `v1.3.8-rc.1` is a stable release.
- This update does not claim a fully general computer-use agent comparable to browser-only operator products.
- This update does not benchmark task success, reliability, or autonomy gains from the browser bridge.
