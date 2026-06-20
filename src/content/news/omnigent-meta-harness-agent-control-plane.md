---
title: "Omnigent puts Claude Code, Codex, Cursor, and custom agents behind one meta-harness"
description: "Databricks introduced Omnigent, an Apache-2.0 open-source meta-harness for composing, governing, sandboxing, and sharing AI agent sessions across multiple coding tools and custom agents."
date: 2026-06-13T15:27:23Z
playerSlug: "omnigent"
sourceName: "Databricks Omnigent announcement"
sourceUrl: "https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents"
category: "Launch"
tags:
  - orchestration
  - coding-agents
  - open-source
  - governance
  - meta-harness
draft: false
---

Databricks introduced Omnigent as an open-source meta-harness for AI agents. The project describes itself as a common orchestration layer over Claude Code, Codex, Cursor, Pi, and custom agents, with controls for policies, sandboxing, model routing, collaboration, and shared sessions.

The public repository was created on June 11, 2026 and is licensed under Apache-2.0. Its README says Omnigent can supervise multiple agents, run sessions from desktop, browser, or phone, launch agents in cloud sandboxes, and apply policy controls such as approval pauses, spend caps, and tool limits.

For Open Orchestrators readers, the category signal is clear: agent orchestration is moving from "pick one framework" toward "run many harnesses behind a shared control plane." Omnigent is interesting because it does not ask teams to abandon Claude Code, Codex, Cursor, or their own agents. It wraps them in a layer for coordination, governance, and collaboration.

This is still early. The repository marks the project as alpha. That makes the right read "watch closely," not "assume production maturity."

Source confidence: High for the launch, license, supported-harness language, and alpha status because they come from the Databricks announcement, Omnigent website, and public GitHub repository. Medium for ecosystem implications because those are category analysis, not adoption data.

Evidence:

- [Databricks announcement for Omnigent](https://www.databricks.com/blog/introducing-omnigent-meta-harness-combine-control-and-share-your-agents)
- [Omnigent website](https://omnigent.ai/)
- [Omnigent GitHub repository](https://github.com/omnigent-ai/omnigent)

Explicit non-claims:

- This post does not claim Omnigent is production-ready; the repository labels it alpha.
- This post does not benchmark Omnigent against Claude Code, Codex, Cursor, or other harnesses.
- This post does not claim Databricks has folded Omnigent into a paid Databricks product.
