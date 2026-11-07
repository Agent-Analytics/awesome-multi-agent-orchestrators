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

Dify's external traces are workflow and LLM execution records for the provider configured on the app. Agent Analytics records page views and named product events on an app you instrument. Dify 1.19.0 does not add an Agent Analytics provider, a Dify node, or a script slot in the hosted web app. The steps below instrument your own app, which calls the Service API. The hosted web app and embed iframe do not document a place to inject the tracker, and a script on the parent page does not see events inside the iframe.

Use an Agent Analytics project you already have. In the samples, `my-site` is that project's name and `aat_...` is its public tracker token. Keep the `aak_*` read key off the page and out of these commands.

## Call the published User Input workflow

`POST /v1/workflows/run` runs a published Workflow app that starts from a User Input node. A workflow that starts from a trigger returns 403 `trigger_workflow_service_mode_unavailable` and runs only from its trigger events. Keep the app API key on the server. Dify Cloud uses `https://api.dify.ai/v1`. A self-hosted instance uses its own API base URL. `inputs` keys come from that app's `user_input_form`. `city` below is the name in the docs example.

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

A completed blocking response includes `data.status`. On Dify Cloud, the edge proxy can end a blocking call that exceeds its timeout. A timeout or other transport error is not a workflow status. Do not record it as `failed` or as finished.

## Record the terminal status in the browser

Add the tracker on pages your app renders, before `</head>`:

```html
<script defer
  src="https://api.agentanalytics.sh/tracker.js"
  data-project="my-site"
  data-token="aat_..."></script>
```

When the blocking response arrives, send one event for that response, and only when `data.status` is terminal. `running` and `paused` are not finished. `user_123` is the same stable id sent as Dify's `user`, not an email. Leave inputs, outputs, and files out of the event.

```javascript
const status = result.data && result.data.status;
const terminal = [
  "succeeded",
  "failed",
  "stopped",
  "partial-succeeded"
];
if (terminal.includes(status)) {
  window.aa?.identify("user_123");
  window.aa?.track("workflow_run_finished", { status });
}
```

## Check recorded events

These commands read stored product events. They are not Dify's run log. `--count-mode raw` counts ingested `workflow_run_finished` rows. That volume matches finished runs only if the page sends the event once per terminal response and leaves timeouts unrecorded. `unique_users` is a separate user count. It is not a run count or a success rate. Replace `succeeded` to count another terminal status. Read them with the CLI already signed in to `my-site`.

```bash
npx --yes @agent-analytics/cli@0.5.37 events my-site \
  --event workflow_run_finished --days 7 --limit 20
```

```bash
npx --yes @agent-analytics/cli@0.5.37 query my-site \
  --metrics event_count,unique_users \
  --days 7 --count-mode raw \
  --filter '[
    {"field":"event","op":"eq","value":"workflow_run_finished"},
    {"field":"properties.status","op":"eq","value":"succeeded"}
  ]'
```

Evidence:

- [Dify 1.19.0 release notes](https://github.com/langgenius/dify/releases/tag/1.19.0) (2026-11-04)
- [Dify releases index](https://github.com/langgenius/dify/releases)
- [Dify GitHub repository](https://github.com/langgenius/dify)
- [Run Workflow](https://docs.dify.ai/en/api-reference/workflow-runs/run-workflow)
- [Agent Analytics tracker.js](https://docs.agentanalytics.sh/reference/tracker-js/)
- [Agent Analytics authentication](https://docs.agentanalytics.sh/reference/authentication/)
- [Agent Analytics CLI](https://docs.agentanalytics.sh/reference/cli/)
