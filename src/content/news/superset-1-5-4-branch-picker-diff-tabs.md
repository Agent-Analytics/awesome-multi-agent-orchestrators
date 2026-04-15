---
title: "Superset 1.5.4 adds branch-picker checkout and dedicated diff tabs"
description: "Superset Desktop 1.5.4 adds a paginated branch picker with checkout and open actions, a dedicated v2 diff-view tab, hotkey fixes, and workspace-control refinements."
date: 2026-04-15T04:46:05Z
playerSlug: "superset"
sourceName: "Superset GitHub release"
sourceUrl: "https://github.com/superset-sh/superset/releases/tag/desktop-v1.5.4"
category: "Release"
tags:
  - orchestration
  - coding-agents
  - worktrees
  - desktop
  - release
draft: false
---

Superset published `desktop-v1.5.4` on 2026-04-15T04:46:05Z. The release is small in marketing shape but meaningful for operators running many coding agents at once: it adds a paginated branch picker with checkout and open actions, moves the v2 diff viewer into its own tab, restores terminal file-link behavior, refines hotkeys, accepts MCP resource URLs as OAuth audiences, and unifies v2 workspace deletion through the host service.

This matters for Open Orchestrators readers because Superset is not only an editor shell. Its public positioning is a local control plane for Claude Code, Codex, OpenCode, Cursor Agent, Gemini CLI, and other CLI-based coding agents running across isolated git worktrees. In that frame, branch discovery, checkout, diff review, terminal links, pane focus, and workspace lifecycle controls are the operator surface.

The clearest addition is the branch picker work from pull request #3397. Superset says the new picker uses cursor pagination, server-side branch and worktree filtering, recency ordering, and row-level actions. In practice, that gives operators a cleaner path to either check out a branch into a Superset-managed worktree or open an existing workspace without making every agent task start from a prompt-generated branch.

The diff-view change from pull request #3420 also fits the same pattern. Clicking a changed file from the changes sidebar can now open or focus a dedicated diff tab instead of taking over the active editor. For a product built around parallel agent work, that is a control-plane improvement: review can become a stable workspace of its own while agents continue producing changes elsewhere.

For builders using Agent Analytics, the measurement loop stays project-facing. Superset can help run several coding-agent branches in parallel; Agent Analytics measures what happens after the selected branch ships to a website, docs path, onboarding flow, app screen, or demo. The useful question is not only whether the diff was clean, but whether the shipped change improved visits, signup, activation, retention, or another project outcome.

Example task:

```text
After the Superset-managed branch ships, compare the last 7 days against the prior 7 days. Report whether the changed page, docs path, signup flow, or activation event improved, where users still dropped off, and which Superset task should run next.
```

## Source Confidence

High for the release details. The primary source is the official `superset-sh/superset` GitHub release for `desktop-v1.5.4`, with supporting detail from the linked pull requests. X surfaced Superset's official account during discovery, but this article does not rely on an unverified X post.

## Evidence

- [Superset Desktop 1.5.4 GitHub release](https://github.com/superset-sh/superset/releases/tag/desktop-v1.5.4)
- [Pull request #3397: paginated branch picker with checkout and open actions](https://github.com/superset-sh/superset/pull/3397)
- [Pull request #3420: v2 diff viewer opens in its own tab](https://github.com/superset-sh/superset/pull/3420)
- [Superset official website](https://superset.sh/)
- [Superset GitHub repository](https://github.com/superset-sh/superset)

## Explicit Non-Claims

- This update does not claim Superset 1.5.4 changes model quality or agent reasoning behavior.
- This update does not claim benchmarked speed, productivity, or reliability gains.
- This update does not treat the GitHub release as an X/Twitter announcement.
