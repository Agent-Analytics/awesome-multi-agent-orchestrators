---
title: "Herdr app 0.1.16 and herdr-core 0.1.21: agents that outlive the app, safer remote machines, and drafts that stay yours"
description: "A catch-up on Herdr releases from Nov 2 to Nov 14, 2026: macOS agents that keep running after the app quits, warnings before a remote Linux machine stops your agents at logout, SSH retries that back off, agent messages that wait for your unfinished draft, and new agents in the + menu."
date: 2026-11-20T08:30:00Z
playerSlug: "herdr"
sourceName: "herdr-core and Herdr app changelogs"
sourceUrl: "https://github.com/herdrdev/herdr-core/blob/v0.1.21/CHANGELOG.md"
category: "Release"
tags:
  - coding-agents
  - terminals
  - remote-machines
  - open-source
draft: false
ogImage: "/images/players/herdr/herdr-app-homepage.webp"
---

Herdr, the Apache-2.0 desktop app where the coding-agent CLIs on a machine run in terminals held by a separate core, shipped five app releases (`0.1.12` to `0.1.16`) and five core releases (`0.1.17` to `0.1.21`) between Nov 2 and Nov 14, 2026. This note covers the headline changes from the `herdrdev/herdr-app` and `herdrdev/herdr-core` changelogs. Most fixes are omitted. The Herdr TUI in `herdrdev/herdr` has had no release since `v0.9.5` on Oct 14.

What a human gets: less time lost to agents that died for no good reason. Quitting the app, logging out of a remote server or a failing SSH key no longer ends or blocks running work, so there is less to restart by hand.

![Herdr app demo with a Spaces and Agents sidebar, a website space marked Needs you, and Claude Code and Codex panes side by side.](/images/players/herdr/herdr-app-homepage.webp)

*Image from the [herdr.dev homepage](https://herdr.dev/), not a test of the features below.*

## Agents keep running when the app goes away

**macOS agents run apart from the app.** Since app `0.1.12` and core `0.1.17` (Nov 2), closing, quitting or updating Herdr on macOS no longer stops your agents, even when Herdr is not allowed to run in the background. Agents already running pick this up the next time they start.

**The core starts on its own.** Core `0.1.20` (Nov 10) starts the core separately from the app on macOS, also right after login or a reboot. Before, it often ran inside the app then, so force quitting Herdr ended those terminals.

**Detached programs survive a closed pane.** Core `0.1.19` (Nov 7) keeps programs started with `nohup`, `setsid` or as a daemon running after their pane closes on Linux and macOS, like tmux. Windows still ends everything a terminal started.

**See where you were after a reboot.** Core `0.1.21` (Nov 12) can show a kept terminal's last screen above the new shell after a reboot, with `restore_screen = true` in config.toml. It is off by default.

## Remote machines that do not lock you out

**Logout warning.** Where a remote Linux machine's login settings end your programs once the last SSH login closes, `hc machine add`, `hc server status` and the app's machine list now say so, with the one command that fixes it (core `0.1.21`, app `0.1.16`).

**SSH retries back off.** A machine whose SSH login fails, such as a passphrase key not loaded in an agent, now retries after 2 and 5 minutes, then every 10 minutes, instead of every few seconds, so servers running fail2ban or CrowdSec do not ban you (core `0.1.21`).

**WSL as a machine.** On Windows, `hc machine add --via` works, so a WSL distribution can be added as a machine (core `0.1.20`).

## Agents that wait for you

**Your draft is not sent for you.** Agent messages and parent notes now wait until you send or clear an unfinished draft in that terminal, instead of submitting it along with their message. By default a draft holds messages for at most a minute, set with `draft_wait` in config.toml (core `0.1.20`).

**Helpers finish before the parent moves on.** `hc wait --children` now waits for a helper that was given a task at start until that task is done (core `0.1.18`).

**More agents in the + menu.** Goose, oh-my-pi (omp) and Cursor's agent show with their own icon and name and start from the new agent menu (app `0.1.16`). The same release adds `worktrees.directory` to choose where new worktree checkouts go, and a full macOS menu bar. App `0.1.13` added find in a terminal and its history.

The summary above comes from Herdr's changelogs and was not independently tested.

Evidence:

- [herdr-core 0.1.21 changelog](https://github.com/herdrdev/herdr-core/blob/v0.1.21/CHANGELOG.md) (covers 0.1.17 to 0.1.21, Nov 2 to Nov 12)
- [Herdr app 0.1.16 changelog](https://github.com/herdrdev/herdr-app/blob/v0.1.16/CHANGELOG.md) (covers 0.1.12 to 0.1.16, Nov 2 to Nov 14)
- [Herdr TUI releases](https://github.com/herdrdev/herdr/releases)
- [Herdr on Open Orchestrators](https://openorchestrators.org/players/herdr/)
