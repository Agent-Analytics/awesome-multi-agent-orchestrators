---
title: "Paperclip adds PR review bots and queued approvals, with full-auto execution defaults"
description: "Scheduled GitHub reviews and queued responses expand agent workflows, while new execution defaults and the Composio retirement require an upgrade review."
date: "2026-10-02T01:54:00Z"
playerSlug: "paperclip"
sourceName: "Paperclip official GitHub release"
sourceUrl: "https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0"
category: "Release"
tags: ["orchestration", "release", "paperclip"]
draft: false
ogImage: "/images/news/paperclip-2026-1001-review-bots-approvals.webp"
---

Paperclip's v2026.1001.0 release brings scheduled GitHub pull-request reviews and a way to answer approvals without losing the response during an active run. The operational caveat is substantial: execution harnesses now default to full auto, although explicitly restrictive settings and Paperclip's own controller approvals remain in force.

![Conceptual editorial illustration of scheduled pull-request review and an approval queue, not a product screenshot.](/images/news/paperclip-2026-1001-review-bots-approvals.webp)

## Reviews and responses become part of the workflow

A guided setup turns a Paperclip agent into a GitHub review bot. Its copyable Claude/Codex prompt covers App installation, review scheduling and optional required checks. The GitHub MCP connection also gains workflow discovery and dispatch through the Actions toolset, for both existing and new connections.

Questions and approvals can now be answered while an agent is running. Resolved cards enter the run queue as immutable responses; an explicit click can steer a response into a compatible native turn, or interrupt for a fresh session. That distinction matters: queuing an answer is not a claim that every active provider turn immediately consumes it.

Railway joins the connector catalog with governed tools for service and deployment status, bounded logs, and redeploy, restart and rollback. For operators, the combined change means more review and deployment work can pass through the orchestration layer. It also makes an explicit review of tool access and approval policy more important before enabling unattended work.

## Upgrade caveats: defaults and retired connections

The release changes native Claude/ACPX defaults to `approve-all`, OpenCode to `allow`, and Codex to approval-and-sandbox bypass. Legacy adapters follow the same policy, including provider and connected tools. **Explicit restrictive modes survive; Paperclip controller approval decisions still enforce authority.** If an agent relied on an unconfigured provider gate, set a restrictive mode explicitly rather than assuming the old default remains.

The legacy Composio broker is removed, and existing connections stop working. There is no automated migration. The replacement MCP aggregators are experimental and behind the default-off `enableMcpAggregators` flag; enabling it does not transfer credentials, grants or access rules. Composio users must create and authorize a new Composio Connect MCP connection, reselect its access rules and remove retired records. The release also lists migrations `0280`–`0283` as running on upgrade.

The release body labels this an October 1 release; GitHub's publication timestamp is October 2 at 01:54:00 UTC. This article uses the GitHub timestamp. These are documented changes, not independently tested runtime results.

## Primary sources

- [v2026.1001.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.1001.0) — published `2026-10-02T01:54:00Z`.
