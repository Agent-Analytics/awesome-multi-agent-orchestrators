---
title: "T3 Code v0.1.9 and v0.1.10: native resume, keep-awake agents, and T3 Connect approvals"
description: "A catch-up on T3 Code releases from Nov 11 to Nov 17, 2026: resume stopped Claude, Codex, OpenCode and Cursor threads without a new message, keep the computer awake while agents work, run the server as a Windows service, and approve new T3 Connect devices and agent sign-ins."
date: 2026-11-17T08:30:00Z
playerSlug: "t3-code"
sourceName: "T3 Code GitHub releases"
sourceUrl: "https://github.com/pingdotgg/t3code/releases/tag/v0.1.10"
category: "Release"
tags:
  - coding-agents
  - multi-harness
  - remote-access
  - security
  - open-source
draft: false
ogImage: "/images/players/t3-code/t3-code-readme-hero.webp"
---

T3 Code, the open-source app that runs the coding-agent CLIs on a machine behind one interface, shipped two stable releases in the past week: `v0.1.9` on Nov 11 (198 changes from 31 contributors) and `v0.1.10` on Nov 17 (1,924 changes from 360 contributors). This note covers the headline changes from `pingdotgg/t3code` since our [V2 release article](/news/t3-code-v2-cross-harness-delegation/). Most fixes and performance work are omitted.

What a human gets: less time spent babysitting agents. Stopped threads pick up without a nudge, long runs no longer stall because a laptop went to sleep, and Windows hosts update without someone at the keyboard.

![T3 Code desktop beside the phone app asking to allow or decline a pnpm db:migrate command.](/images/players/t3-code/t3-code-readme-hero.webp)

*Image from the [pingdotgg/t3code README](https://github.com/pingdotgg/t3code), not a test of the features below.*

## v0.1.10: agents that keep going

**Native resume.** Stopped Claude, Codex, OpenCode and Cursor threads can be resumed without adding a new user message.

**Keep the computer awake.** T3 Code keeps the machine awake while agents are working and releases it afterward ([PR 34128](https://github.com/pingdotgg/t3code/pull/34128)).

**Windows server updates.** The `t3 service` command now runs on Windows, so a Windows host can run T3 Code as a service and be updated remotely instead of restarted by hand ([PR 34524](https://github.com/pingdotgg/t3code/pull/34524)).

**T3 Connect device approval.** A host can require approval before a new T3 Connect device gets access to it.

The release also adds replies that point at a specific assistant response ([PR 33124](https://github.com/pingdotgg/t3code/pull/33124)), custom theme colors, CSS and background images, and Settings text in nine languages.

## v0.1.9: fewer manual steps

**T3 Connect agent sign-in.** Agent sign-ins are approved through T3 Connect instead of copying a pairing code.

**Claude session approvals.** An MCP app can be allowed for a whole Claude session instead of approving each action.

**OpenCode goals.** OpenCode's native goals are supported, with their state synced across clients.

**GitLab revert.** A merged GitLab merge request can be reverted from inside T3 Code.

Other additions include sending messages while attachments are still uploading, screen reader announcements for agent messages and steps during a turn, and pull request links that open on the referenced comment, diff line, checks or commit.

The summary above comes from T3 Code's release notes and was not independently tested.

Evidence:

- [T3 Code v0.1.10 release notes](https://github.com/pingdotgg/t3code/releases/tag/v0.1.10) (2026-11-17)
- [T3 Code v0.1.9 release notes](https://github.com/pingdotgg/t3code/releases/tag/v0.1.9) (2026-11-11)
- [T3 Code GitHub repository](https://github.com/pingdotgg/t3code)
- [T3 Code on Open Orchestrators](https://openorchestrators.org/players/t3-code/)
