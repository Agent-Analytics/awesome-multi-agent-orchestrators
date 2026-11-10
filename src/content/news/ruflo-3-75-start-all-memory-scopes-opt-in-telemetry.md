---
title: "Ruflo 3.73 to 3.75: one-command start, memory scopes, and opt-in activation telemetry"
description: "A catch-up on Ruflo releases from Nov 6 to Nov 10, 2026: ruflo start all, scoped memory, a joint Claude Code and Codex plugin manager, a project snapshot at the end of init, opt-in activation events, and MCP 2026-07-28 support."
date: 2026-11-10T08:30:00Z
playerSlug: "ruflo"
sourceName: "Ruflo GitHub releases"
sourceUrl: "https://github.com/ruvnet/ruflo/releases/tag/v3.75.0"
category: "Release"
tags:
  - coding-agents
  - claude-code
  - codex
  - mcp
  - memory
  - open-source
draft: false
---

Ruflo, the coding-agent meta-harness formerly called Claude Flow, shipped five releases between Nov 6 and Nov 10, 2026. This note covers `v3.72.0`, `v3.73.0`, `v3.74.1` and `v3.75.0` from `ruvnet/ruflo`. Most bug fixes and dependency bumps are omitted.

## v3.75.0: one command to start, and scoped memory

`v3.75.0` shipped on Nov 10. `ruflo start all` runs project init if needed, then memory init, starts the daemon if one is not running, and starts the session. A new `ruflo plugins host` command installs, updates, enables, disables and syncs Claude Code and Codex plugins together. It never runs through a shell, and `--dry-run` prints the exact arguments.

Memory store, retrieve and search take an optional `scope` of `project`, `local` or `user`, and a `memory_list_scopes` tool lists them. New inventory tools page through the persisted AgentDB store, including past the 5,000-entry cache. Durable state now resolves to the project root when you run commands from a subdirectory, and `agent_spawn` accepts exact provider model IDs instead of only the five built-in aliases.

`init` now treats AGENTS.md as the single source for shared sections, with CLAUDE.md importing it, and skips what installed Ruflo plugins already provide unless you pass `--full`. The release also fixes atomic writes that could rename a truncated file into place and still report success.

## v3.74.1: darwin runs in process

`v3.74.1` shipped on Nov 9. The release notes say to use it instead of `3.74.0`, whose tarball shipped stale helper files. `@metaharness/darwin` becomes a regular dependency, so `metaharness_bench --op verify` and the four `metaharness_gepa` operations run inside the MCP server instead of spawning scripts. The project's own measurement on Node 22 puts `gepa validate` at 21.4 ms as a subprocess and 0.03 ms on later in-process calls. The release notes credit the gain to not spawning a process, not to faster darwin code.

## v3.73.0: a faster first five minutes and opt-in telemetry

`v3.73.0` also shipped on Nov 9. `init` now ends with a local project snapshot built from git only: tracked files, top languages, the most-changed file in the last 90 days, and the test command, followed by one prompt to paste into Claude Code about that file. The README now leads with one install path, `npx ruflo@latest init`, and links a [comparison page](https://ruvnet.github.io/ruflo/compare.html) with CrewAI, LangGraph, AutoGen and Claude Code subagents.

Telemetry changed in two ways. Every opt-out, including `ruflo funnel disable`, now stops the background messages fetch, not only the promo row. Three activation events, `init_completed`, `first_agent_run` and `session_active`, are sent only after explicit `ruflo funnel telemetry on` consent. `init` asks once and defaults to No. The release also prepares an `io.github.ruvnet/ruflo` MCP registry listing.

## v3.72.0: MCP 2026-07-28

`v3.72.0` shipped on Nov 6. The stdio MCP server supports 2026-07-28 clients alongside older protocol versions, answers `server/discover`, and returns a sorted tool list with cache hints. The HTTP server migration and the Tasks extension are not in this release. The pre-bash hook now blocks commands when its input is late, malformed or unparseable, and corrupt workflow, hive-mind and swarm stores are backed up and reported instead of reset.

The summary above comes from Ruflo's release notes and was not independently tested.

## Measuring the activation path

Ruflo's opt-in events describe an activation funnel: install, first agent run, active session. Ruflo sends them to its own telemetry endpoint, not to Agent Analytics, and nothing in these releases adds an Agent Analytics integration. A team building a CLI or agent product with the same shape can record equivalent events in its own Agent Analytics project and read the funnel from an agent through the [hosted MCP server](https://docs.agentanalytics.sh/reference/cli-mcp-api/) or the CLI.

In the samples, `my-cli` is the project name, and each event is assumed to carry a `version` property set by your own code. Send events only with the user's consent, and leave prompts, file paths and repository names out of them.

```bash
npx --yes @agent-analytics/cli@0.5.37 funnel my-cli \
  --steps init_completed,first_agent_run,session_active \
  --since 30d --breakdown version --json
```

The breakdown shows which release lost users between init and the first agent run. A funnel read is a correlation over the chosen window. It does not prove a release caused a change.

Evidence:

- [Ruflo v3.75.0 release notes](https://github.com/ruvnet/ruflo/releases/tag/v3.75.0) (2026-11-10)
- [Ruflo v3.74.1 release notes](https://github.com/ruvnet/ruflo/releases/tag/v3.74.1) (2026-11-09)
- [Ruflo v3.73.0 release notes](https://github.com/ruvnet/ruflo/releases/tag/v3.73.0) (2026-11-09)
- [Ruflo v3.72.0 release notes](https://github.com/ruvnet/ruflo/releases/tag/v3.72.0) (2026-11-06)
- [Ruflo GitHub repository](https://github.com/ruvnet/ruflo)
- [Agent Analytics CLI](https://docs.agentanalytics.sh/reference/cli/)
- [Agent Analytics CLI, MCP and API](https://docs.agentanalytics.sh/reference/cli-mcp-api/)
