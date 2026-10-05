---
title: "Agno 3.1 adds AgentOS RBAC, followed by observable knowledge sync"
description: "AgentOS gains authorization and user-partitioned files; 3.1.1 adds sync progress and cancellation, with a manual filesystem migration for existing users."
date: "2026-10-01T09:29:15Z"
playerSlug: "agno"
sourceName: "Agno official GitHub release"
sourceUrl: "https://github.com/agno-agi/agno/releases/tag/v3.1.0"
category: "Release"
tags: ["orchestration", "release", "agno"]
draft: false
ogImage: "/images/news/agno-3-1-rbac-knowledge-sync.webp"
---

Agno's 3.1 releases address two production concerns: who can access an AgentOS service, and what an operator can see while its knowledge is being updated. Version 3.1.0 adds RBAC and a user-partitioned database filesystem; 3.1.1 follows with live page-sync progress, cancellation and clearer failure reports.

![Conceptual editorial illustration of role-based access boundaries and knowledge synchronization, not a product screenshot.](/images/news/agno-3-1-rbac-knowledge-sync.webp)

## Access control moves into AgentOS

The new `agno.os.authz` package includes a role store, scope policy, audit log, user directory and admin router. Authorization engines are pluggable, with native and fine-grained `fga` options, and scopes and authentication middleware are extended to enforce the policies.

The `agno.fs` filesystem exposes `DbFileSystem` through dedicated `/filesystem` routes for listing, reading and managing files. Its table is keyed by `(namespace, user_id, path)`, using an empty `user_id` for the shared/no-user partition. For teams building a multi-user service, the practical implication is that authorization and file partitioning can be treated as deployment design decisions rather than left to an undifferentiated shared workspace. The release notes do not establish that any particular deployment's policies are correctly configured.

## Knowledge sync exposes progress and failure

In 3.1.1, `Knowledge.stream_sync_pages()` and `astream_sync_pages()` yield typed `PageSyncProgress` snapshots and a terminal `SyncReport`. The non-streaming sync methods can receive an `on_progress` observer. Workflow function steps can yield `StepProgress` before their output, emitted as `StepProgressEvent` through the existing AgentOS REST/SSE route.

Cancellation now reaches the sync work rather than draining it to the end. Reports expose `failed_paths`, capped at the first 20 paths while the failure count remains complete, and transient page-fetch failures receive bounded timeouts and backoff. These changes give an operator a more useful basis for deciding whether to wait, stop or investigate a knowledge refresh.

## Upgrade caveats

Existing `DbFileSystem` tables require a **manual migration with the application stopped**. An old table is refused with `SchemaOutdatedError`; the re-key never runs automatically and is deliberately outside `MigrationManager`. The release supplies `libs/agno/migrations/migrate_filesystem_postgres.py` and `libs/agno/migrations/migrate_filesystem_sqlite.py`. This requirement applies to `DbFileSystem` users, not every Agno database.

Also review explicit MCP tool lists: `MCPConfig(tools=[...])` now publishes exactly those tools, with default and lifecycle tools opt-in. Clients relying on implicitly available `continue_run` or `cancel_run` need an explicit configuration review.

GitHub published 3.1.0 on October 1 and 3.1.1 on October 2. These are release-note findings, not independent access-control or sync tests.

## Primary sources

- [v3.1.0](https://github.com/agno-agi/agno/releases/tag/v3.1.0) — published `2026-10-01T09:29:15Z`.
- [v3.1.1](https://github.com/agno-agi/agno/releases/tag/v3.1.1) — published `2026-10-02T12:38:20Z`.
