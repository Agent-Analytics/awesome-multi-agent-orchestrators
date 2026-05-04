---
title: "Superset Desktop 1.8.0 hardens remote workspace and PR review flows"
description: "Superset Desktop 1.8.0 and CLI 0.2.3 add task assignee filtering, remote-workspace PR badges, v2 workspace pane infrastructure, sticky diff headers, sidebar-hosted v2 chrome, bounded GitHub PR polling, and PTY daemon fd handoff so sessions can survive daemon binary upgrades."
date: 2026-05-03T01:03:51Z
playerSlug: "superset"
sourceName: "Superset GitHub release"
sourceUrl: "https://github.com/superset-sh/superset/releases/tag/desktop-v1.8.0"
category: "Release"
tags:
  - orchestration
  - coding-agents
  - worktrees
  - desktop
  - remote-workspaces
  - release
draft: false
---

Superset published `desktop-v1.8.0` on May 3, with `cli-v0.2.3` landing a day earlier. The release is a practical operator update for teams using Superset as a local control plane for parallel coding-agent work: task assignee filtering, remote-workspace PR badges, v2 workspace pane infrastructure, sticky diff headers, sidebar-hosted v2 chrome, safer PR polling, and PTY daemon handoff work all landed in the same release train.

The CLI-side change is small but useful: `tasks list` now supports an `--assignee` filter. For an agent workspace, that matters because the task list is not only a human backlog. It is the routing surface for work split across agents, branches, worktrees, and review loops.

The desktop changes are more telling. Superset now shows v2 sidebar PR badges for remote-host workspaces, adds sticky file headers in the v2 diff pane, and continues building the v2 workspace pane store and sidebar chrome. These are not model-quality changes. They are coordination-surface changes: the product is making it easier to see which remote workspace has PR activity, keep review context stable while scrolling large diffs, and host navigation and panes inside the agent workspace itself.

The release also includes a reliability item that is easy to miss: PTY daemon file-descriptor handoff, described as letting sessions survive daemon binary upgrades. For a desktop tool built around real terminals and long-running coding agents, preserving PTY sessions across daemon upgrades is core orchestration infrastructure. Losing terminal state is losing the agent's work context.

Superset also bounds v2 GitHub PR polling to avoid rate-limit storms and cleans up development-process teardown. Those are operational details, but they point in the same direction: Superset is hardening the control plane around remote workspaces, PR review, terminal sessions, and multi-agent task management rather than shipping only UI polish.

Source confidence: High for the release contents because the primary source is Superset's official GitHub release and linked pull requests. Medium for workflow implications because the release notes describe shipped functionality, not independent usage data or productivity benchmarks.

Evidence:

- [Superset Desktop 1.8.0 GitHub release](https://github.com/superset-sh/superset/releases/tag/desktop-v1.8.0)
- [Superset CLI 0.2.3 GitHub release](https://github.com/superset-sh/superset/releases/tag/cli-v0.2.3)
- [Pull request #3972: CLI assignee filter](https://github.com/superset-sh/superset/pull/3972)
- [Pull request #3973: v2 sidebar PR badges for remote-host workspaces](https://github.com/superset-sh/superset/pull/3973)
- [Pull request #3971: PTY daemon fd handoff](https://github.com/superset-sh/superset/pull/3971)
- [Pull request #3977: bounded v2 GitHub PR polling](https://github.com/superset-sh/superset/pull/3977)
- [Superset GitHub repository](https://github.com/superset-sh/superset)

Explicit non-claims:

- This update does not claim Superset 1.8.0 improves model reasoning or agent autonomy.
- This update does not claim benchmarked productivity gains from remote workspaces or PR badges.
- This update does not rely on the internal canary release as a public user-facing release.
