---
title: "OpenWork brings connected write tools to workflows and artifacts"
description: "Live artifacts, scheduled automations and on-demand workflows gain connected actions; desktop work reports back to Slack, with explicit self-hosting caveats."
date: "2026-10-03T01:29:39Z"
playerSlug: "openwork"
sourceName: "OpenWork official GitHub release"
sourceUrl: "https://github.com/different-ai/openwork/releases/tag/v0.18.55"
category: "Release"
tags: ["orchestration", "release", "openwork"]
draft: false
ogImage: "/images/news/openwork-0-18-55-connected-workflows.webp"
---

OpenWork 0.18.55 lets live artifacts, on-demand Workflows and scheduled Automations use connected tools and perform write actions. It also gives work sent from Slack or another connected app a return path from the desktop, including progress, follow-ups and stopping a task. Version 0.18.56 follows with a clearer way to find shared connectors that still need sign-in.

![Conceptual editorial illustration of connected workflows and a desktop task returning to a message thread, not a product screenshot.](/images/news/openwork-0-18-55-connected-workflows.webp)

## Connected actions extend beyond chat

The 0.18.55 notes say connection tools now work in artifacts, workflows and automations, including large inputs such as Notion database queries. That brings connected write actions into repeatable and scheduled work rather than limiting them to an interactive conversation.

For a desktop task started through Slack or another connected app, users can follow progress, read the conversation, send a follow-up or stop the task. Slack receives the result in the original thread, and the task appears as a normal chat using the chosen model. For teams coordinating work from messaging tools, the implication is less separation between requesting a job and managing its execution. The notes do not demonstrate delivery guarantees or certify any particular connected action as safe to automate.

## Administration and connector readiness

Admins can choose “Only models you provide,” enable Slack progress updates and review free Auto usage. Deployments can disable Auto while retaining other models. These settings matter when bringing scheduled connected work into a managed environment: review model availability and connector authorization before relying on an unattended job.

The 0.18.56 follow-up adds a Library “Needs sign-in” filter for shared connectors awaiting the user's authentication, plus a sidebar dot in Den. It also improves the first-folder opening path for self-hosted installs and fixes an engine-installation “resource busy or locked” failure. Connector discovery is useful, but it is not a substitute for completing sign-in.

## Upgrade caveats

Browser login sync and its setup controls are removed. Users now sign in directly in the built-in browser. Organization-managed Dashboards are disabled by default and must be enabled per organization; OpenWork-built items are now called artifacts.

Self-hosters get Terraform modules for AWS ECS Fargate or Kubernetes, including use of an existing ECS cluster. The release explicitly calls these modules **draft**. Treat them as deployment starting points to inspect and test, not production-certified infrastructure.

GitHub published 0.18.55 on October 3 at 01:29:39 UTC and 0.18.56 at 05:30:05 UTC. The features and fixes above are sourced from those release bodies, not independent workflow, Slack or infrastructure tests.

## Primary sources

- [v0.18.55](https://github.com/different-ai/openwork/releases/tag/v0.18.55) — published `2026-10-03T01:29:39Z`.
- [v0.18.56](https://github.com/different-ai/openwork/releases/tag/v0.18.56) — published `2026-10-03T05:30:05Z`.
