---
title: "SIDJUA joins Open Orchestrators as a governance-first agent platform"
description: "SIDJUA is listed as a self-hosted AI agent orchestration platform built around pre-action governance, local installation, and measured follow-up loops."
date: 2026-04-16T11:10:17Z
playerSlug: "sidjua"
sourceName: "SIDJUA GitHub repository"
sourceUrl: "https://github.com/GoetzKohlberg/sidjua"
category: "Directory update"
tags:
  - orchestration
  - governance
  - self-hosted
  - audit-trail
draft: false
---

SIDJUA has been added to the Open Orchestrators directory as a governance-first AI agent orchestration platform. Its public repository describes the project as an agent platform where governance is enforced by architecture, and the official site positions SIDJUA Free as a self-hosted governance layer for controlling, budgeting, and auditing agents before they act.

This matters for Open Orchestrators readers because SIDJUA focuses on a part of orchestration that many agent tools leave outside the runtime: policy enforcement. The documented model includes a pre-action pipeline for forbidden actions, approvals, budgets, classification, and policy checks, plus divisions, tiers, audit trails, governed daemons, scheduling, and multi-channel messaging.

For operators and builders, the practical signal is that SIDJUA belongs on the watchlist for enterprise-shaped agent operations that still need to run on local or self-hosted machines. The README documents Docker, npm global install, and source-build paths; its platform matrix lists full CLI, REST API, Docker, and web management console support across Linux, macOS, Windows WSL2, and Windows native, with Linux-only sandboxing falling back to `none` on macOS and native Windows.

The Open Orchestrators player note now frames SIDJUA around a first measurement loop: a SIDJUA-governed orchestrator agent decides a signup CTA should change, a coding agent applies the change under SIDJUA policy, approval, budget, and audit controls, the site reports page views and signup events to Agent Analytics, and a SIDJUA-governed agent later fetches the data for the business owner. The useful question is not only whether the agent was allowed to act; it is what happened to visits, sources, CTA clicks, signup starts, completed signups, conversion rate, and drop-off after the governed change shipped.

The current public release is `v1.0.1`. The public roadmap says `v1.1.0` is planned for April 18, 2026, with a security-hardening pass, native LLM tool calling, webhook inbound, blue/green update infrastructure, Prometheus/Grafana observability, a versioned migration system, and an i18n rebuild. Treat the roadmap items as planned scope until the release lands.

Source confidence: High for the current repository, website, installation docs, and `v1.0.1` release. Medium for roadmap items because they describe planned work.

Evidence:

- [SIDJUA GitHub repository](https://github.com/GoetzKohlberg/sidjua)
- [SIDJUA website](https://www.sidjua.com/)
- [SIDJUA installation guide](https://github.com/GoetzKohlberg/sidjua/blob/main/docs/INSTALLATION.md)
- [SIDJUA roadmap](https://www.sidjua.com/roadmap)
- [SIDJUA v1.0.1 release](https://github.com/GoetzKohlberg/sidjua/releases/tag/v1.0.1)

Explicit non-claims:

- This update does not claim SIDJUA `v1.1.0` has shipped.
- This update does not use npm package metadata as a verified directory source.
- This update does not claim a native SIDJUA-Agent Analytics integration.
- This update does not independently verify audit or patent claims from the project website.
- This update does not claim benchmarked reliability, security, or compliance outcomes.
