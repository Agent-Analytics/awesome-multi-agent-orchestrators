---
title: "Mastra adds repair-first recovery and durable workflow fencing"
description: "Core 1.73 enables recovery processors and guards long-running steps against redelivery; 1.74 adds conversation access for tools and memory-history filters."
date: "2026-10-05T09:30:51Z"
playerSlug: "mastra"
sourceName: "Mastra official GitHub release"
sourceUrl: "https://github.com/mastra-ai/mastra/releases/tag/%40mastra/core%401.73.0"
category: "Release"
tags: ["orchestration", "release", "mastra"]
draft: false
ogImage: "/images/news/mastra-1-73-durable-recovery.webp"
---

Mastra's `@mastra/core` 1.73.0 release makes repair-first error recovery the default and hardens durable agent and evented workflow execution. The adjacent 1.74.0 release adds access to conversation context from tools and more precise observational-memory history queries. Together, the changes target recovery and inspection, not a guarantee of exactly-once execution.

![Conceptual editorial illustration of workflow recovery, heartbeat fencing and retained context, not a product screenshot.](/images/news/mastra-1-73-durable-recovery.webp)

## Repair before retry

Core 1.73 enables `ProviderHistoryCompat`, `PrefillErrorHandler` and `StreamErrorRetryProcessor` by default, ordered so history repair happens before retrying. The default retry processor targets transient failures; deterministic failures that repair cannot resolve still surface rather than being replayed unchanged.

An empty agent-level `errorProcessors` array does not disable these defaults. `errorProcessorDefaults: false` is the explicit opt-out, and a caller-supplied processor with a default's ID can replace that processor. This is worth reviewing in applications that already manage their own retry policy, because recovery behavior can change without adding configuration.

## Durable execution gets clearer boundaries

A new `tool-call-resumed` stream chunk marks when a suspended or approval-gated tool call resumes, before its `tool-result`. Resumed parallel-safe tool calls can also run in parallel again under the documented `toolCallConcurrency: { strategy: 'called' }` configuration. Custom clients can use the resumed event to clear a pending answer or approval without waiting for a potentially slow result.

For long-running evented workflow steps, workers send heartbeats and fence each step run with a lease. This prevents a redelivered copy from running alongside the still-active original; Redis Streams and Valkey Streams support the heartbeat. **Steps must remain idempotent:** a worker crash can still cause execution to repeat. Fencing is not an exactly-once side-effect guarantee.

## More context in 1.74, and migrations to check

Core 1.74 exposes `context.agent.getMessages()` in standard and durable tool execution. It includes remembered messages and in-run responses without changing the existing input-only `messages` field. Returned messages should be treated as read-only and do not include transient provider-prompt transforms. Observational-memory history gains group filtering, generation ordering and record-ID lookup; Convex users need to redeploy Mastra server functions for the filters to apply.

Durable stream consumers must replace the separate `tripwire` chunk with `finishReason === 'tripwire'` and `output.tripwire`. Consumers of the accompanying playground UI also need to review removed trace-pagination APIs: `anchorTraceId` and `ThreadTrace.LoadMoreSentinel` give way to `pageSize` and `onLoadOlder` on `ThreadTrace`.

GitHub published the two core tags on October 5 at 09:30:51 and 09:31:12 UTC. That publication timing does not mean the changes were developed in one day. The account here is based on the full release bodies, not runtime testing.

## Primary sources

- [@mastra/core@1.73.0](https://github.com/mastra-ai/mastra/releases/tag/%40mastra/core%401.73.0) — published `2026-10-05T09:30:51Z`.
- [@mastra/core@1.74.0](https://github.com/mastra-ai/mastra/releases/tag/%40mastra/core%401.74.0) — published `2026-10-05T09:31:12Z`.
