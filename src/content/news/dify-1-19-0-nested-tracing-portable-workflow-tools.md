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

The release summary above comes from Dify's release notes and was not independently tested.

## Two different records

The nested traces in 1.19.0 are workflow and LLM execution records. New external traces include the steps inside called Workflow Tools, under the Tool span that invoked them, with formatted prompts, responses, token usage, and trace links on each LLM call. Those traces go to the observability provider already configured on the app. The release names Langfuse, LangSmith, Opik, Weave, Arize, Phoenix, Aliyun, MLflow, Databricks, and Tencent.

Agent Analytics records page views and named product events on a site or app you instrument. Dify 1.19.0 does not add an Agent Analytics tracing provider, a built-in Dify node, or a script slot in the hosted web app. The steps below are manual instrumentation in an app you write around the Dify Service API.

## Call Dify from your backend

Publish the app, then create its API key inside that app. Keep `$DIFY_API_KEY` on the server. Dify's own docs say a key in frontend code can be extracted. Dify Cloud uses `https://api.dify.ai/v1`. A self-hosted instance uses its own API base URL.

Confirm which app the key belongs to:

```bash
curl https://api.dify.ai/v1/info \
  -H "Authorization: Bearer $DIFY_API_KEY"
```

A Workflow app returns `"mode": "workflow"`. Read input names from `GET /v1/parameters`. In the published example, `user_input_form` has a `text-input` whose `variable` is `city`, so that string is the `inputs` key. Use the names your app returns.

```bash
curl https://api.dify.ai/v1/workflows/run \
  -H "Authorization: Bearer $DIFY_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "inputs": { "city": "Lisbon" },
    "response_mode": "blocking",
    "user": "user_123"
  }'
```

`inputs` and `user` are required. `response_mode` is `blocking` or `streaming`, and it defaults to blocking when omitted. Blocking returns `workflow_run_id`, `task_id`, and `data.status`. The schema lists `running`, `succeeded`, `failed`, `stopped`, `partial-succeeded`, and `paused`. The run uses the published workflow.

Chatflow, Agent, Chatbot, and Legacy Agent apps use `POST /v1/chat-messages` instead. That call sends `query` and `user`, plus `conversation_id` when the thread should continue.

Hand the browser `data.status` only. Leave prompts, outputs, files, and the API key on the server.

## Record product events in your app

Put the tracker on pages your app renders, before `</head>`. `data-token` is the public project token, `aat_*`. The read key, `aak_*`, stays off the page.

```html
<script defer
  src="https://api.agentanalytics.sh/tracker.js"
  data-project="my-site"
  data-token="aat_..."></script>
```

The script sends one `page_view`. On hostnames `localhost` and `127.0.0.1` it logs `[aa-dev]` to the console and does not send. `lvh.me` is outside that check, so a page served there can write live events.

Name the button in your markup:

```html
<button type="button"
  data-aa-event="workflow_run_requested">
  Run workflow
</button>
```

After your backend returns the status, record it in the browser. Use the same stable id for `identify` and for Dify's `user`. Do not use an email as that id.

```javascript
window.aa?.identify("user_123");
window.aa?.track("workflow_run_finished", {
  status: "succeeded"
});
```

`status` is the `data.status` string. Do not copy inputs, outputs, or file contents into the event.

Dify's hosted web app, embed iframe, and chat bubble do not document a place to inject this script. `systemVariables.user_id` on the bubble config is a Dify field. A tracker on the parent page does not see clicks inside the iframe. If the interface people use is Dify's hosted UI, this tracker measures only the page around the embed.

When the browser never sees the result, the server can post the same outcome. Hosted `POST /track` requires `token` and `event`:

```bash
curl https://api.agentanalytics.sh/track \
  -H "Content-Type: application/json" \
  -H "User-Agent: Mozilla/5.0 Smoke Test" \
  -d '{
    "token": "aat_...",
    "event": "workflow_run_finished",
    "user_id": "user_123",
    "properties": { "status": "succeeded" }
  }'
```

`User-Agent: Mozilla/5.0 Smoke Test` is the header in the open-source server's smoke test. The classifier in `agent-analytics-core` `src/bot.js` treats an empty User-Agent, and clients such as curl, wget, python-requests, node, undici, and axios, as automation. Those requests stay out of normal analytics and show up in bot traffic. A browser `aa.track` call uses the browser User-Agent and does not need this header. The curl above writes a live event on a real project. This article did not send one.

## Check what arrived

Sign in with the CLI. The docs say not to paste a long-lived API key into an agent thread.

```bash
npx --yes @agent-analytics/cli@0.5.37 login
npx --yes @agent-analytics/cli@0.5.37 events my-site \
  --event workflow_run_finished --days 7 --limit 20
```

A row prints the event name and its properties, including `status`. Console output that starts with `[aa-dev]` is a local log, not a stored event. An empty 7-day result means there is no matching live event in that window. Repeat with `--days 30` before changing the event name.

Count finished runs, then succeeded runs. Pass `--count-mode`. CLI `0.5.37` leaves it unset when omitted, and its usage text says the unset mode is raw rows. The OpenAPI default for `event_count` is `session_then_user`.

```bash
npx --yes @agent-analytics/cli@0.5.37 query my-site \
  --metrics event_count,unique_users \
  --days 7 \
  --count-mode session_then_user \
  --filter '[
    {"field":"event","op":"eq","value":"workflow_run_finished"}
  ]'
```

```bash
npx --yes @agent-analytics/cli@0.5.37 query my-site \
  --metrics event_count,unique_users \
  --days 7 \
  --count-mode session_then_user \
  --filter '[
    {"field":"event","op":"eq","value":"workflow_run_finished"},
    {"field":"properties.status","op":"eq","value":"succeeded"}
  ]'
```

`--group-by` accepts `event`, `date`, `user_id`, `session_id`, and `country`. Filter on `properties.status`. It is not a group field. `--count-mode raw` counts ingested rows. If a server write is missing from `events`, check bot traffic:

```bash
npx --yes @agent-analytics/cli@0.5.37 bot-traffic my-site \
  --period 7d --limit 5
```

Ordered drop-off uses 2 to 8 steps. The funnel API defaults to a 30-day lookback and a 168-hour conversion window. Set `--since 7d` when you want the same window as the event log.

```bash
npx --yes @agent-analytics/cli@0.5.37 funnel my-site \
  --steps "page_view,workflow_run_requested,workflow_run_finished" \
  --since 7d
```

The CLI documents funnels, retention, sessions, pages, heatmaps, insights, live reads, and experiments as Pro features. `PRO_REQUIRED` means that read needs Pro. `upgrade-link --detached` prints a payment link for a person to open. On the public demo, the funnel joins on resolved user id and warns that browser-only activity may not connect to server events without that identity. `identify` with the same id as Dify's `user` is the documented way to tie the button click to the finished run.

The read commands were executed with `--demo` against the public `agentanalytics-demo` project. That checked the published CLI flags. It did not call Dify, create a project, or submit a product event.

Evidence:

- [Dify 1.19.0 release notes](https://github.com/langgenius/dify/releases/tag/1.19.0) (2026-11-04)
- [Dify releases index](https://github.com/langgenius/dify/releases)
- [Dify GitHub repository](https://github.com/langgenius/dify)
- [Dify Service API getting started](https://docs.dify.ai/en/api-reference/guides/get-started)
- [Run Workflow](https://docs.dify.ai/en/api-reference/workflow-runs/run-workflow)
- [Send Chat Message](https://docs.dify.ai/en/api-reference/chat-messages/send-chat-message)
- [Embed your web app](https://docs.dify.ai/en/cloud/use-dify/publish/webapp/embedding-in-websites)
- [Agent Analytics tracker.js](https://docs.agentanalytics.sh/reference/tracker-js/)
- [Agent Analytics authentication](https://docs.agentanalytics.sh/reference/authentication/)
- [Agent Analytics CLI](https://docs.agentanalytics.sh/reference/cli/)
- [Agent Analytics OpenAPI](https://docs.agentanalytics.sh/openapi.yaml)
- [Agent Analytics CLI package 0.5.37](https://www.npmjs.com/package/@agent-analytics/cli)
- [agent-analytics-core bot classifier](https://github.com/Agent-Analytics/agent-analytics-core/blob/main/src/bot.js)
