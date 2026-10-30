---
title: "Multica 0.7 opens workflows to every member and adds a managed cloud runtime"
description: "Multica 0.7.0 to 0.7.2 let any member build agent workflows, run Issues on Qoder Cloud Agents, wake agents on PR conflicts and pass corrections into another agent's live run; the license limits hosted use."
date: 2026-10-30T11:44:37Z
playerSlug: "multica"
sourceName: "Multica v0.7.0 GitHub release"
sourceUrl: "https://github.com/multica-ai/multica/releases/tag/v0.7.0"
category: "Release"
tags:
  - orchestration
  - coding-agents
  - workflows
  - agent-ops
  - source-available
draft: false
---

Multica shipped three releases in eight days: [v0.7.0](https://github.com/multica-ai/multica/releases/tag/v0.7.0) on October 23, 2026 at 09:58 UTC, [v0.7.1](https://github.com/multica-ai/multica/releases/tag/v0.7.1) on October 27 and [v0.7.2](https://github.com/multica-ai/multica/releases/tag/v0.7.2) on October 30. Together they move workflows from an admin feature to something any workspace member can build, and add a first managed cloud runtime next to local machines.

The [official changelog](https://multica.ai/changelog) lists the coordination changes. In 0.7.0, any member can create and duplicate workflows; creators and admins can edit, delete and set up handoffs, while the Default workflow stays with admins. Agents can wake when a linked GitHub PR hits a merge conflict, set from the sidebar or with `--until-pr conflicts`. Runtimes can be shared with specific members, and tightening access shows the affected agents first. In 0.7.1, workflows are on in every deployment, including self-hosted, and agents follow one set of rules: they work through to the next handoff, and saving an Issue keeps the assignee the workflow picked. In 0.7.2, an agent can send a correction or a missing fact into another agent's current run from the command line, within the original requester's permissions and a per-run limit.

The runtime list also grew. 0.7.0 adds Qoder Cloud Agents as a managed cloud runtime with repo credentials, concurrency and timeout limits, pause and resume. 0.7.1 adds the local Devin CLI with session resume, project skills and MCP. 0.7.2 adds a `rerun-task` retry for a specific past run, with `--fresh` for a new session and working folder.

Traction is visible but cumulative. GitHub reported **54,357 stars and 7,153 forks on October 30**, for a repository created January 13, 2026. The release history shows six tagged releases from October 16 to October 30. On X, an [October 28 post](https://x.com/rexmzk/status/2115364360453501076) describing Multica as the coordinator for Claude Code and Codex sessions across three projects had 7 likes, 17 replies and 170 impressions when checked. That is a small discussion sample, not an adoption count.

There are limits to state plainly. Multica is not under a plain open-source license. The [Multica License](https://github.com/multica-ai/multica/blob/v0.7.2/LICENSE) is Apache 2.0 plus additional conditions: offering Multica as a hosted service to third parties, even free, or embedding it in a commercial product requires a commercial license from Index Labs (Hong Kong) Limited, and the logo, product name and attribution in its UI may not be removed without a waiver. Internal use within one organization does not need a commercial license. Qoder Cloud Agents handle Issues only for now, not chat or local folders. The 0.7.0 notes say the Hermes dependency reinstall wait at startup is logged but not yet removed. Provider setup and charges stay with each agent provider.

For Agent Analytics users, an optional workflow: when a Multica workflow hands a landing or onboarding change from a builder agent to a reviewer and it ships, a separately configured analytics task can compare `page_view` to signup CTA clicks, or `signup` to first project created, against the prior period. Multica's run costs, tokens and handoffs remain orchestration telemetry; the product events measure what users receive. No native Multica and Agent Analytics integration was verified, and a before and after change alone does not prove causation.

Source confidence: High for documented release contents, dates and license terms; moderate for traction, which is cumulative repository counts plus one small public discussion. No runtime testing was done for this update.

Evidence:

- [Multica v0.7.0 release](https://github.com/multica-ai/multica/releases/tag/v0.7.0), [v0.7.1 release](https://github.com/multica-ai/multica/releases/tag/v0.7.1) and [v0.7.2 release](https://github.com/multica-ai/multica/releases/tag/v0.7.2)
- [Official Multica changelog](https://multica.ai/changelog)
- [Repository metadata](https://api.github.com/repos/multica-ai/multica) and [Multica License](https://github.com/multica-ai/multica/blob/v0.7.2/LICENSE)
- [October 28 X discussion](https://x.com/rexmzk/status/2115364360453501076)
- [Agent Analytics documentation](https://docs.agentanalytics.sh/)

Explicit non-claims:

- This update does not claim Multica is OSI open source.
- This update does not claim every 0.7 change behaves the same on Multica Cloud, desktop and self-hosted installs.
- This update does not claim agents can safely run workflows without operator review.
