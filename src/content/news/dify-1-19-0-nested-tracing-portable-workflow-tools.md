---
title: "Dify 1.19.0: nested workflow tracing, portable Workflow Tools, and batch Agent file uploads"
description: "A catch-up on Dify 1.19.0, released Nov 4, 2026: nested Workflow Tool steps in external traces, App packages that carry their Workflow Tools, batch Agent file uploads with inline previews, and Skill management through OpenAPI and difyctl."
date: 2026-11-07T13:30:00Z
playerSlug: "dify"
sourceName: "Dify GitHub releases"
sourceUrl: "https://github.com/langgenius/dify/releases/tag/1.19.0"
category: "Release"
tags:
  - workflows
  - tracing
  - observability
  - agents
  - skills
  - open-source
draft: false
---

Dify `1.19.0` shipped on Nov 4, 2026. This note covers the main changes in that release from `langgenius/dify`. Bug fixes, security hardening, and most operational changes are omitted.

Nested workflow tracing is the headline. External traces now include the execution steps inside the Workflow Tools a workflow calls. Child steps appear under the Tool span that invoked them, and the hierarchy holds across nested and repeated calls. Formatted prompts and responses, token usage, and trace links stay attached to each LLM call. The release lists Langfuse, LangSmith, Opik, Weave, Arize, Phoenix, Aliyun, MLflow, Databricks, and Tencent among the providers on the shared tracing interface. The richer hierarchy applies to new executions only. Historical traces are not backfilled.

Workflow Tools now travel with their apps. Exported `.ifpkg` packages include the workflows behind called Workflow Tools at their bound versions, including transitive dependencies, up to a default of 20 bundled tool workflows. On import, Dify reuses tools that already exist in the destination workspace and recreates, publishes, and registers missing ones. All app exports now use package format v2. Version 1 imports and explicit YAML export remain supported, though YAML export does not carry bundled Workflow Tools. Older installations may reject v2 packages, so the release recommends upgrading the destination first.

Agent files are easier to manage. You can select or drop several Agent configuration files and upload them in parallel. Successful uploads bind in one atomic batch, and concurrent Composer saves keep the latest files. Previews now render PDFs inline, show source files with syntax highlighting, and mark truncated text, with a download action when a PDF cannot load.

For developers, workspace Skills can be listed, inspected, exported, imported, and published through OpenAPI and `difyctl`. These operations need an account caller, the matching workspace permissions, and Skills enabled. Import does not publish, and importing over an existing Skill is classed as destructive.

Self-hosted operators should read the upgrade guide before deploying. Docker Compose now requires v2.35.0 or later, the bundled plugin daemon moves to `0.6.14-local`, and rolling deployments need the new `ops_trace_v2` tracing queue running alongside the old one until queued work drains.

The product claims above come from Dify's release notes and were not independently tested.

Evidence:

- [Dify 1.19.0 release notes](https://github.com/langgenius/dify/releases/tag/1.19.0) (2026-11-04)
- [Dify releases index](https://github.com/langgenius/dify/releases)
- [Dify GitHub repository](https://github.com/langgenius/dify)
