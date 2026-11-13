export type OrchestratorAccent =
  | "cyan"
  | "amber"
  | "violet"
  | "orange"
  | "emerald"
  | "sky"
  | "blue"
  | "mint";

export interface OrchestratorLink {
  label: string;
  href: string;
  emphasis?: "primary" | "secondary";
}

export interface OrchestratorMark {
  kind: "image" | "monogram" | "emoji";
  label: string;
  src?: string;
  value?: string;
  surface?: "soft" | "dark";
}

export interface OrchestratorScreenshot {
  src: string;
  alt: string;
  caption: string;
  sourceName: string;
  sourceUrl: string;
}

export interface OrchestratorAgentAnalytics {
  heading: string;
  valueProp: string;
  measurementLoop: string[];
  setupNotes: string;
  prompt: string;
  ctaLabel: string;
  ctaHref: string;
  screenshots: OrchestratorScreenshot[];
  relatedLinks?: OrchestratorLink[];
}

export type OrchestratorInstallMethod = "mcp" | "cli-and-skill" | "api-only";

export type OrchestratorCategory =
  | "Parallel Coding-Agent Runners"
  | "Multi-Agent Platforms And Builders"
  | "Coordination And Team Systems";

// Generated conceptual artwork is editorial illustration, not a product screenshot.
export interface OrchestratorEditorialImage {
  src: string;
  alt: string;
  caption: string;
}

export interface OrchestratorEntry {
  slug: string;
  category?: OrchestratorCategory;
  editorialImage?: OrchestratorEditorialImage;
  rank: number;
  title: string;
  githubRepo?: string;
  featured?: boolean;
  visibility?: "open" | "not-open-important";
  accent: OrchestratorAccent;
  mark: OrchestratorMark;
  summary: string;
  note: string;
  overview: string[];
  bestFor: string[];
  tags: string[];
  links: OrchestratorLink[];
  screenshots: OrchestratorScreenshot[];
  installMethod: OrchestratorInstallMethod;
  agentAnalytics: OrchestratorAgentAnalytics;
}

export interface OrchestrationToolEntry {
  slug: string;
  title: string;
  url: string;
  sourceName: string;
  mark: string;
  logoSrc?: string;
  logoAlt?: string;
  summary: string;
  note: string;
  tags: string[];
  ctaLabel?: string;
}

export const siteMeta = {
  name: "Open Orchestrators",
  pageTitle: "Open-Source Orchestration Tools Directory and News | Open Orchestrators",
  description:
    "Open multi-agent orchestration platforms directory and news, with separate tracks for governance, tooling, services, and closed products that shape the category.",
  canonicalUrl: "https://openorchestrators.org/"
};

export const orchestrationTools: OrchestrationToolEntry[] = [
  {
    slug: "agent-analytics",
    title: "Agent Analytics",
    url: "https://agentanalytics.sh/",
    sourceName: "Agent Analytics landing page",
    mark: "AA",
    logoSrc: "/assets/agent-analytics-logo-v2-96.png",
    logoAlt: "Agent Analytics logo",
    summary:
      "Web analytics for builders that Claude Code, Codex, Cursor, OpenClaw, Paperclip, and similar AI agents can use.",
    note:
      "Exposes traffic, usage, sources, funnels, conversions, projects, stats, and experiments through plugin, skill, MCP, CLI/npx, and API so agents can set up tracking, verify events, brief you, find conversion leaks, and run growth experiments without a dashboard-first workflow.",
    tags: ["web analytics", "agent surface", "plugin skill MCP CLI API"]
  },
  {
    slug: "companies-sh",
    title: "Companies.sh",
    url: "https://companies.sh/",
    sourceName: "Companies.sh website",
    mark: "CO",
    summary:
      "Reusable companies for AI agents: pre-built organizations that can be installed with a single command.",
    note:
      "Useful when orchestration needs reusable agent-company structures instead of starting every multi-agent team from scratch.",
    tags: ["agent companies", "templates", "one command"]
  },
  {
    slug: "clawtrace",
    title: "ClawTrace",
    url: "https://www.clawtrace.ai/?ref=producthunt",
    sourceName: "ClawTrace website",
    mark: "CT",
    logoSrc: "/logos/clawtrace.png",
    logoAlt: "ClawTrace logo",
    summary:
      "Observability for OpenClaw agents that shows what failed, where spend leaked, and how to improve runs.",
    note:
      "Adds traces, trajectory dashboards, token and cost visibility, and Tracy, a doctor agent that recommends fixes from live run data.",
    tags: ["observability", "OpenClaw", "tracing"]
  },
  {
    slug: "agenttrace",
    title: "agenttrace",
    url: "https://github.com/luoyuctl/agenttrace",
    sourceName: "agenttrace GitHub repository",
    mark: "AT",
    summary:
      "Local TUI observability for AI coding-agent sessions, tokens, cost, tool failures, latency, anomalies, diffs, and CI evidence.",
    note:
      "Parses local logs from Claude Code, Codex CLI, Gemini CLI, Aider, Cursor exports, OpenClaw, and related coding agents so builders can inspect session health without sending prompts or code to a hosted tracing service.",
    tags: ["observability", "coding agents", "TUI", "local-first"]
  },
  {
    slug: "orcareplay",
    title: "OrcaReplay",
    url: "https://github.com/Continuum-AI-Corp/OrcaReplay",
    sourceName: "OrcaReplay GitHub repository",
    mark: "OR",
    summary:
      "Records a coding-agent run beneath the harness and replays it offline from the recorded bytes, or re-runs it from a chosen step on a different model.",
    note:
      "Captures the model traffic through a base-URL proxy plus shell, MCP, and filesystem layers, so a multi-agent run can be re-executed byte-for-byte or forked at a checkpoint to compare models on an identical prefix; the trace reconstructs which sub-agent ran and which handed off to which.",
    tags: ["record and replay", "observability", "coding agents", "local-first"]
  },
  {
    slug: "lanes",
    title: "Lanes",
    url: "https://lanes.sh/",
    sourceName: "Lanes website",
    mark: "Ln",
    logoSrc: "/logos/lanes.svg",
    logoAlt: "Lanes logo",
    summary:
      "macOS workspace for running Claude Code, Codex, Gemini CLI, and other agentic CLIs in parallel sessions.",
    note:
      "Runs each agentic CLI as a real PTY in the user's shell, with project boards, auto-created git worktrees, session resume, git diffs, file editing, labels, dependencies, and quick commands. Tracked as a tool/session workspace, not an orchestrator runtime.",
    tags: ["CLI sessions", "worktrees", "coding agents", "macOS"]
  },
  {
    slug: "ctx",
    title: "ctx",
    url: "https://ctx.rs/",
    sourceName: "ctx website and GitHub repository",
    mark: "ctx",
    summary:
      "Agentic Development Environment for teams using multiple coding agents in one controlled workspace.",
    note:
      "Runs Claude Code, Codex, Cursor, and other coding agents behind a shared workbench with containerized disk/network isolation, tasks, diffs, artifacts, unified transcripts, and review. Tracked as an ADE/workspace layer for teams standardizing agent work, not as a product analytics system.",
    tags: ["ADE", "coding agents", "containers", "transcripts", "review"],
    ctaLabel: "Open ctx"
  },
  {
    slug: "open-agent-relay",
    title: "Open Agent Relay",
    url: "https://github.com/ShakespeareLabs/open-agent-relay",
    sourceName: "Open Agent Relay GitHub repository",
    mark: "OAR",
    summary:
      "Apache-2.0 relay for exposing existing local agents as capabilities callable by teammates and other agents over a trusted LAN.",
    note:
      "Keeps source code, runtime dependencies, prompts, and credentials on the publishing machine while callers use a lightweight CLI with JSON output, agent identity checks, meaningful exit codes, and bounded conversations. Tracked as an agent capability-sharing and coordination-adjacent tool, not as an orchestrator runtime.",
    tags: ["open source", "local-first", "agent relay", "capability sharing", "CLI"],
    ctaLabel: "Open relay"
  },
  {
    slug: "agent-coordinator",
    title: "Agent Coordinator",
    url: "https://github.com/alanhoff/agent-coordinator",
    sourceName: "Agent Coordinator GitHub repository",
    mark: "AC",
    summary: "Per-user Codex skill that represents complex tasks as bounded work graphs and records revisioned local state.",
    note: "Keeps graph changes, integration, reconciliation, and completion under one parent task; nodes can run inline or through optional specialists, uncertain work is reconciled before retry, and planned checks run again at closeout; this directory tracks it as Codex workflow tooling rather than a standalone orchestrator runtime.",
    tags: ["Codex", "work graphs", "local state", "reconciliation", "agent workflows"]
  },
  {
    slug: "orchestrator",
    title: "Orchestrator",
    url: "https://zachealy1.github.io/orchestrator/",
    sourceName: "Orchestrator README and public beta release",
    mark: "Or",
    summary: "An MIT-licensed macOS workspace for Codex with Kanban tasks, repository browsing, subagent conversation inspection, and local code review.",
    note: "Connects task planning, Codex execution, delegated-agent visibility, and review; the Apple Silicon and Intel public beta requires macOS 15+, uses the user's own supported Codex account, and is not yet notarized by Apple.",
    tags: ["coding agents", "Codex", "kanban", "subagents", "code review", "macOS"],
    ctaLabel: "Open Orchestrator"
  },
  {
    slug: "meshfleet",
    title: "Meshfleet",
    url: "https://github.com/johnmwhitman/agent-mesh",
    sourceName: "Meshfleet GitHub repository and README",
    mark: "Mf",
    summary:
      "MIT MCP server that spawns parallel coding-agent fleets as independent OS processes, with peer-to-peer messaging and witnessed receipts for every handoff.",
    note:
      "Configured the same way for Claude Code, Codex, and OpenCode via a standard stdio MCP server; quorum-based councils are part of the free core, per the project README. Install: npx -y meshfleet.",
    tags: ["MCP", "multi-agent", "coding agents", "receipts", "OpenCode", "Claude Code", "Codex"]
  },
  {
    slug: "coven",
    title: "Coven",
    url: "https://opencoven.ai/",
    sourceName: "Coven website and GitHub repository",
    mark: "Cv",
    summary:
      "MIT-licensed local-first Rust daemon and CLI that runs Codex, Claude Code, and other coding-agent harnesses as PTY sessions inside explicit project-root boundaries.",
    note:
      "The daemon rejects working directories that escape the project root, persists session history in SQLite, and exposes a versioned local socket API (coven.daemon.v1). Tracked as a CLI session runtime, not an orchestrator of agent teams.",
    tags: ["CLI sessions", "coding agents", "local-first", "project scope", "Rust"]
  },
  {
    slug: "agent-manager",
    title: "agent-manager",
    url: "https://agent-manager.dev/",
    sourceName: "agent-manager website and GitHub repository",
    mark: "am",
    summary:
      "Apache-2.0 terminal UI that runs Claude Code, Codex, OpenCode, Gemini CLI, and other coding-agent CLIs side by side in persistent tmux sessions.",
    note:
      "Runs on macOS and Linux (Windows via WSL2), launches each installed CLI unmodified so logins and config carry over, and adds live status, prompts sent without attaching, optional per-session Git worktrees, diff review that sends line comments back to the agent, and a built-in MCP server that lets one agent spawn, message, and wait on another session.",
    tags: ["CLI sessions", "coding agents", "tmux", "worktrees", "TUI", "Apache-2.0"]
  },
  {
    slug: "agentastic",
    title: "Agentastic.dev",
    url: "https://www.agentastic.dev/",
    sourceName: "Agentastic.dev website and docs",
    mark: "Ag",
    summary:
      "Closed-source, free macOS workspace for running Claude Code, Codex, and other coding-agent CLIs in parallel git worktrees.",
    note:
      "Gives each task its own worktree, terminal, browser, and diff review, with optional Docker or Apple container, SSH-host, or cloud-sandbox isolation and Manager Agents that start and steer other agents through the dev CLI; tracked as a session workspace rather than an orchestrator runtime.",
    tags: ["CLI sessions", "worktrees", "coding agents", "macOS"]
  },
  {
    slug: "spaceapp",
    title: "SpaceApp",
    url: "https://spaceapp.dev/",
    sourceName: "SpaceApp README, docs, and website",
    mark: "Sp",
    summary:
      "Open-source (MIT), self-hosted web workspace for running OpenCode, Codex, Claude Code, Gemini CLI, and other coding-agent CLIs side by side in persistent rooms.",
    note:
      "Runs each CLI as a terminal pane in a room that keeps its sessions, with MCP servers, managed browser panes, and a Room Agent for coordinating work across panes; installs with one npx command on Docker (Linux, macOS, Windows 11); tracked as a session workspace rather than an orchestrator runtime.",
    tags: ["CLI sessions", "coding agents", "self-hosted", "Docker", "MIT"]
  },
  {
    slug: "alchemist-coder",
    title: "Alchemist Coder",
    url: "https://github.com/Alekla0126/alchemist-coder",
    sourceName: "Alchemist Coder GitHub README",
    mark: "Alc",
    summary:
      "AGPL-3.0 desktop app for running Claude Code and Codex over ACP, following each agent's subagent tree live, and letting several agents solve one plan in separate git worktrees.",
    note:
      "Runs on macOS, Windows, and Linux; its Arena has one to four agents solve the same approved plan in their own worktrees before you merge one, a standing coordinator hands assignments to an organization of agents, and it indexes Claude Code, Codex, Gemini CLI, and Grok Build history into a read-only local search; the free Community edition runs agents only on local models, so it is tracked as a session workspace rather than an orchestrator runtime.",
    tags: ["CLI sessions", "worktrees", "coding agents", "ACP", "desktop", "AGPL-3.0"]
  },
  {
    slug: "grove",
    title: "Brow",
    url: "https://github.com/efim0v/brow",
    sourceName: "Brow GitHub repository and website (formerly Grove)",
    mark: "Br",
    summary:
      "GPL-3.0 macOS app combining Claude Code account-limit monitoring in the MacBook notch with parallel multi-repo workspaces, each holding a git worktree of every chosen repository on one branch.",
    note:
      "Formerly Grove; its Workspaces engine is part of Brow from 0.4.0. Supports cross-account session continuation and shows 5-hour and weekly account limits; requires macOS 26+ on Apple silicon, and builds are signed ad hoc without notarization. Tracked as a session workspace rather than an orchestrator runtime.",
    tags: ["CLI sessions", "worktrees", "multi-repo", "Claude Code", "macOS", "GPL-3.0"]
  },
  {
    slug: "superagent",
    title: "SuperAgent",
    url: "https://superagent.computer/",
    sourceName: "SuperAgent website and GitHub repository",
    mark: "SA",
    summary:
      "MIT-licensed macOS workspace where Claude Code and Codex run as per-project chats, each on its own git worktree.",
    note:
      "Each chat gets a real browser the agent drives on the user's existing logins, a dedicated iOS Simulator for build-install-screenshot loops, a board the agent maintains, scheduled routines, and an iPhone companion paired over an end-to-end encrypted relay for approving tool calls remotely. Runs locally on the user's own Claude or OpenAI subscription; tracked as a CLI-agent session workspace rather than an orchestrator runtime.",
    tags: ["open source", "CLI sessions", "worktrees", "browser", "iOS simulator", "macOS"]
  }
];

export const governanceTools: OrchestrationToolEntry[] = [
  {
    slug: "microsoft-agent-governance-toolkit",
    title: "Microsoft Agent Governance Toolkit",
    url: "https://github.com/microsoft/agent-governance-toolkit",
    sourceName: "Microsoft Agent Governance Toolkit GitHub repository",
    mark: "AGT",
    logoSrc: "/logos/microsoft.svg",
    logoAlt: "Microsoft logo",
    summary:
      "MIT-licensed runtime governance toolkit for AI agents with policy enforcement, identity, sandboxing, reliability, and compliance checks.",
    note:
      "Sits between agent frameworks and actions so tool calls, resource access, and inter-agent messages can be evaluated before execution. Microsoft documents Python, TypeScript, .NET, Rust, and Go SDKs, plus integrations for LangChain, CrewAI, AutoGen, OpenAI Agents SDK, Google ADK, Semantic Kernel, Dify, LlamaIndex, Haystack, LangGraph, and related stacks.",
    tags: ["open source", "MIT", "policy", "identity", "sandboxing", "SRE"],
    ctaLabel: "Open governance tool"
  },
  {
    slug: "code-atelier-governance",
    title: "Code Atelier Governance SDK",
    url: "https://www.codeatelier.tech/governance",
    sourceName: "Code Atelier Governance docs",
    mark: "CA",
    summary:
      "Open-source Python SDK for pre-execution governance gates around AI agents, backed by Postgres.",
    note:
      "Adds scope checks, budget caps, human approval tokens, loop detection, agent presence and halt handling, behavioral contracts, and HMAC-chained audit trails for actions routed through the SDK. Tracked as agent-friendly tooling, not an orchestrator runtime.",
    tags: ["open source", "governance", "agent safety", "approvals", "audit trail", "Postgres", "Python"],
    ctaLabel: "Open governance tool"
  },
  {
    slug: "commonground-kernel",
    title: "CommonGround Kernel",
    url: "https://github.com/Intelligent-Internet/CommonGround",
    sourceName: "CommonGround GitHub repository",
    mark: "CG",
    summary:
      "Apache-2.0 public-fact and causal-coordination kernel for human-agent and multi-agent work.",
    note:
      "Preserves durable Turn-owned work records, handoff facts, claim fencing, causal lineage, and pull-first recovery across agent runtimes without acting as the orchestrator itself.",
    tags: ["open source", "Apache-2.0", "public facts", "coordination substrate", "handoffs", "causal lineage", "Python"],
    ctaLabel: "Open kernel"
  },
  {
    slug: "bifrost",
    title: "Bifrost",
    url: "https://github.com/maximhq/bifrost",
    sourceName: "Bifrost GitHub repository and governance docs",
    mark: "BF",
    summary: "Apache-2.0-licensed open-source AI gateway with provider routing, virtual-key access controls, budgets, rate limits, and MCP tool governance.",
    note: "Sits between agent runtimes and model or MCP endpoints; its documented virtual keys apply per-key budgets, rate limits, allowed models, and routing rules, while MCP tool filtering can default-deny and allow-list tools. Tracked as a governance and enforcement layer, not an orchestrator runtime.",
    tags: ["open source", "Apache-2.0", "LLM gateway", "virtual keys", "MCP governance", "budgets", "rate limits"],
    ctaLabel: "Open governance tool"
  },
  {
    slug: "veto",
    title: "Veto",
    url: "https://veto.so/",
    sourceName: "Veto website",
    mark: "VT",
    logoSrc: "/logos/veto.png",
    logoAlt: "Veto logo",
    summary:
      "Open-source authorization layer that intercepts AI agent tool calls before execution and evaluates them against policy.",
    note:
      "Provides TypeScript and Python SDKs, YAML rules, local deterministic evaluation, optional semantic checks, human approval routing, audit logs, and integrations for OpenAI, Anthropic, LangGraph, CrewAI, MCP, browser agents, and custom tool-calling setups. The core repo is Apache-2.0; Veto Cloud adds managed commercial services.",
    tags: ["open source", "Apache-2.0", "authorization", "tool-call policy", "approvals", "audit trail", "TypeScript", "Python"],
    ctaLabel: "Open governance tool"
  },
  {
    slug: "databricks-unity-ai-gateway",
    title: "Databricks Unity AI Gateway",
    url: "https://www.databricks.com/blog/ai-gateway-governance-layer-agentic-ai",
    sourceName: "Databricks AI Gateway announcement",
    mark: "DB",
    logoSrc: "/logos/databricks.svg",
    logoAlt: "Databricks logo",
    summary:
      "Commercial Databricks platform layer that extends Unity Catalog governance to LLM access, MCP servers, APIs, and agentic AI workflows.",
    note:
      "Tracks LLM and MCP calls, controls which agents can access external systems with fine-grained permissions and on-behalf-of access, and adds observability, cost attribution, guardrails, fallback models, and rate limits. Included as a commercial governance layer, not an open-source toolkit.",
    tags: ["commercial platform", "MCP governance", "Unity Catalog", "LLM gateway", "observability", "guardrails"],
    ctaLabel: "Open governance tool"
  },
  {
    slug: "speakeasy-mcp-gateway",
    title: "Speakeasy MCP Gateway",
    url: "https://www.speakeasy.com/product/mcp-gateway",
    sourceName: "Speakeasy MCP Gateway product page",
    mark: "SP",
    summary:
      "Commercial MCP gateway that places agents and MCP servers behind one governed entry point.",
    note:
      "Routes tool calls through OAuth 2.1 and SSO identity, team- and role-scoped RBAC, runtime guardrails, and audit logs. Included as a commercial governance layer, not an orchestrator.",
    tags: ["commercial platform", "MCP gateway", "RBAC", "runtime guardrails", "audit logs"],
    ctaLabel: "Open governance tool"
  },
  {
    slug: "settlebridge",
    title: "SettleBridge",
    url: "https://settlebridge.ai/",
    sourceName: "SettleBridge website",
    mark: "SB",
    summary:
      "Trust and policy enforcement gateway for agent-to-agent settlement, reputation, spending limits, provenance, escrow, and audit trails.",
    note:
      "Sits between agents and an A2A Settlement Exchange so settlement requests can be governed by reputation thresholds, spend caps, provenance requirements, health checks, alerts, and cryptographic audit logs. The related A2A Settlement repo is MIT-licensed; SettleBridge's public license metadata is inconsistent across the website, README badge, and GitHub detection, so it is tracked as a trust governance layer rather than a clean OSS claim.",
    tags: ["trust layer", "settlement", "reputation", "escrow", "audit trail", "agent marketplace"],
    ctaLabel: "Open governance tool"
  }
];

export const implementationServices: OrchestrationToolEntry[] = [
  {
    slug: "nomad-inno",
    title: "Nomad Inno",
    url: "https://nomadinno.com/",
    sourceName: "Nomad Inno website",
    mark: "NI",
    logoSrc: "/logos/nomad-inno.svg",
    logoAlt: "Nomad Inno logo",
    summary:
      "Malta-based AI innovation group helping organizations understand, implement, and scale AI through consulting, development, and products.",
    note:
      "Tracked as an implementation services entry, not an orchestrator. Nomad Inno publishes services around AI strategy, responsible AI, custom LLM development, fine-tuning, RAG, system integration, process mapping, workflow automation, and practical AI implementation through Artificial Impact, Peachstone AI, and Systems Impact.",
    tags: ["implementation services", "Malta", "AI strategy", "responsible AI", "LLM development", "workflow automation"],
    ctaLabel: "Open service"
  },
  {
    slug: "agentix-labs",
    title: "Agentix Labs",
    url: "https://www.agentixlabs.com/",
    sourceName: "Agentix Labs website",
    mark: "AL",
    summary:
      "Implementation services and practical writing for teams moving AI agents from pilots into production operations.",
    note:
      "Tracked as an implementation services entry, not an orchestrator. Public contact details list United States and Canadian offices in New York and Montreal; no explicit worldwide coverage claim is made. Relevant because Agentix publishes production-agent guidance around OpenClaw implementation, observability, run reviews, security reviews, permissions, evals, guardrails, and operating models.",
    tags: ["implementation services", "United States", "Canada", "OpenClaw", "observability"],
    ctaLabel: "Open service"
  }
];

const agentAnalyticsSignupHref = (slug: string) =>
  `https://app.agentanalytics.sh/?onboarding=agent&utm_source=openorchestrators&utm_medium=player_page&utm_campaign=agent_analytics_sections&utm_content=${slug}`;

const screenshot = (
  slug: string,
  title: string,
  sourceName: string,
  sourceUrl: string
): OrchestratorScreenshot => ({
  src: `/images/players/${slug}/${slug}-platform-context.jpg`,
  alt: `${title} public platform context screenshot`,
  caption: `Public ${title} context captured from ${sourceName}.`,
  sourceName,
  sourceUrl
});

const agentAnalyticsSection = (
  slug: string,
  title: string,
  valueProp: string,
  measurementLoop: string[],
  setupNotes: string,
  promptFocus: string,
  screenshots: OrchestratorScreenshot[],
  relatedLinks?: OrchestratorLink[]
): OrchestratorAgentAnalytics => ({
  heading: `Measure projects built with ${title}`,
  valueProp,
  measurementLoop,
  setupNotes,
  prompt: `Use Agent Analytics for this project. If event reporting is missing, add the tracker and report events for this project surface, including ${promptFocus}. Verify events are arriving. Then fetch the last 7 days and compare them with the prior 7 days. Tell me which ${promptFocus} moved users toward value, where users dropped off, which sources mattered, and what my agent workflow should improve next.`,
  ctaLabel: "Track builder outcomes",
  ctaHref: agentAnalyticsSignupHref(slug),
  screenshots,
  relatedLinks
});


const paperclipScreenshots = [
  screenshot("paperclip", "Paperclip", "Paperclip website", "https://paperclip.ing/")
];

const crewAiScreenshots = [
  screenshot("crewai", "CrewAI", "CrewAI open-source page", "https://crewai.com/open-source")
];

const openClawScreenshots = [
  screenshot("openclaw", "OpenClaw", "OpenClaw website", "https://openclaw.ai/")
];

const nanoClawScreenshots = [
  screenshot("nanoclaw", "NanoClaw", "NanoClaw website", "https://nanoclaw.dev/")
];

const hermesScreenshots = [
  screenshot("hermes", "Hermes Agent", "Hermes Agent website", "https://hermes-agent.nousresearch.com/")
];

const simScreenshots = [
  screenshot("sim", "Sim", "Sim website", "https://www.sim.ai/")
];


const squadScreenshots = [
  screenshot("squad", "Squad", "Squad docs", "https://bradygaster.github.io/squad/")
];







const sidjuaScreenshots = [
  screenshot("sidjua", "SIDJUA", "SIDJUA website", "https://www.sidjua.com/")
];







const supersetScreenshots = [
  screenshot("superset", "Superset", "Superset website", "https://superset.sh/")
];

const vibeKanbanScreenshots = [
  screenshot("vibe-kanban", "Vibe Kanban", "Vibe Kanban website", "https://vibekanban.com/")
];


const parallelCodeScreenshots = [
  screenshot("parallel-code", "Parallel Code", "Parallel Code website", "https://parallelcode.app/")
];


const augmentIntentScreenshots = [
  screenshot("augment-intent", "Augment Code Intent", "Augment Code Intent page", "https://www.augmentcode.com/product/intent")
];

const hyperScreenshots = [
  screenshot("hyper", "Hyper", "Hyper website", "https://www.hyperfx.ai/")
];

const helmorScreenshots = [
  screenshot("helmor", "Helmor", "Helmor website", "https://helmor.ai/")
];

const openSwarmScreenshots = [
  screenshot("openswarm", "Open Swarm", "Open Swarm website", "https://openswarm.com/")
];

const openHumanScreenshots = [
  {
    ...screenshot("openhuman", "OpenHuman", "OpenHuman docs", "https://tinyhumans.gitbook.io/openhuman/"),
    src: "/images/players/openhuman/openhuman-platform-context.png"
  }
];

const agentTeamsScreenshots = [
  screenshot(
    "agent-teams",
    "Agent Teams",
    "Agent Teams GitHub repository",
    "https://github.com/777genius/agent-teams-ai"
  )
];

const alfredScreenshots = [
  {
    src: "/images/players/alfred/alfred-platform-context.jpg",
    alt: "Alfred docs homepage showing the install and View on GitHub actions, with the bat shield logo and the GitHub issues to PRs tagline",
    caption: "Alfred docs site homepage at alfred.luminik.io.",
    sourceName: "Alfred docs",
    sourceUrl: "https://alfred.luminik.io/"
  }
];

const crewletScreenshots = [
  screenshot("crewlet", "Crewlet", "Crewlet website", "https://www.crewlet.io/")
];


const agentRqScreenshots = [
  {
    ...screenshot("agentrq", "AgentRQ", "AgentRQ website", "https://agentrq.com/"),
    src: "/images/players/agentrq/agentrq-platform-context.png"
  }
];


const waveScreenshots = [
  screenshot("wave", "Wave", "Wave website", "https://wave.davidsling.in/")
];

const agent007Screenshots = [
  screenshot("agent-007", "Agent 007", "Agent 007 GitHub README", "https://github.com/bill10/agent-007")
];

export const orchestrators: OrchestratorEntry[] = [
  {
    slug: "superset", installMethod: "cli-and-skill",
    rank: 1,
    title: "Superset",
    githubRepo: "superset-sh/superset",
    accent: "sky",
    mark: {
      kind: "image",
      src: "/logos/superset.png",
      label: "Superset logo",
      surface: "dark"
    },
    summary:
      "A local code editor and control plane for running many CLI coding agents in parallel across isolated git worktrees.",
    note:
      "Centers orchestration on parallel coding-agent execution, worktree isolation, monitoring, review, and editor handoff.",
    overview: [
      "Superset is a code editor for AI agents that orchestrates Claude Code, Codex, OpenCode, Cursor Agent, Gemini CLI, and other terminal-based coding tools.",
      "It belongs in Open Orchestrators because it treats coding-agent work as a parallel local operating surface: each task can run in an isolated git worktree while the operator monitors progress, reviews diffs, and opens workspaces in their editor."
    ],
    bestFor: ["Parallel CLI coding agents", "Git worktree isolation", "Local review and editor handoff"],
    tags: ["coding agents", "worktrees", "local editor", "parallel execution"],
    links: [
      {
        label: "Website",
        href: "https://superset.sh/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/superset-sh/superset"
      },
      {
        label: "Docs",
        href: "https://docs.superset.sh/"
      }
    ],
    screenshots: supersetScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "superset",
      "Superset",
      "Superset helps builders ship more quickly with parallel coding agents. Agent Analytics gives the follow-up agent visitor, source, funnel, and conversion data to judge whether the shipped branch helped users.",
      ["a builder uses Superset to ship a page, docs update, onboarding change, app screen, demo, or growth experiment", "the deployed surface reports visits, sources, signup, activation, retention, funnels, and conversion events to Agent Analytics", "a follow-up agent fetches the Agent Analytics results and compares the changed path with the prior period", "the builder decides what to improve next from user behavior, not from implementation details alone"],
      "Install Agent Analytics on the project surface Superset helps you ship. The branch, worktree, or agent setup is secondary; the useful loop is that a later agent can read user behavior after the change lands.",
      "page, traffic source, signup, activation event, funnel step, retention signal, or growth experiment",
      supersetScreenshots
    )
  },
  {
    slug: "podium", installMethod: "cli-and-skill",
    rank: 33,
    title: "Podium",
    githubRepo: "madeinorbit/podium",
    accent: "amber",
    mark: { kind: "monogram", value: "Po", label: "Podium monogram" },
    summary: "Open-source workspace for taking ideas from conversation to coordinated work with coding agents through a task system shared by agents and developers.",
    note: "A shared task system lets agents organize the effort while developers follow progress, discuss decisions, and change direction.",
    overview: [
      "Work through an idea in conversation, then ask your agent to organize the tasks and coordinate others. The work stays connected as agents and sessions change.",
      "Podium gives agents and developers the same task system. Follow progress, discuss decisions, and change direction as the work develops, locally or on your own VPS."
    ],
    bestFor: ["Agent-managed issue tracking", "Conversational delegation", "Local or VPS-based coding-agent work"],
    tags: ["coding agents", "issue tracking", "delegation", "self-hosted", "open source"],
    links: [
      { label: "Website", href: "https://podium.do/", emphasis: "primary" },
      { label: "GitHub", href: "https://github.com/madeinorbit/podium" },
      { label: "Docs", href: "https://podium.do/docs" }
    ],
    screenshots: [],
    agentAnalytics: agentAnalyticsSection(
      "podium",
      "Podium",
      "Podium coordinates coding-agent tasks; Agent Analytics can report how a separately instrumented product surface performs after those tasks ship.",
      [
        "agents complete a tracked change to a website, app, or onboarding flow",
        "the deployed surface reports visits, sources, signup, activation, or conversion events to Agent Analytics",
        "a follow-up agent reads those results and identifies what to improve next"
      ],
      "Podium has no direct Agent Analytics integration. Instrument the deployed product separately, then let an agent compare the reported outcome with the completed issue.",
      "deployed page, signup, activation event, conversion, or shipped issue",
      []
    )
  },
  {
    slug: "agent-teams", installMethod: "cli-and-skill",
    rank: 30,
    title: "Agent Teams",
    githubRepo: "777genius/agent-teams-ai",
    accent: "violet",
    mark: { kind: "image", src: "/logos/agent-teams.png", label: "Agent Teams logo" },
    summary: "A free desktop app for coordinating autonomous AI agent teams across major coding agents and model providers from a Kanban and review workflow.",
    note: "Centers orchestration on high-level commands, autonomous task execution, agent-to-agent messaging, Kanban task management, cross-team communication, and built-in review surfaces.",
    overview: [
      "Agent Teams is a free, open-source desktop app for AI agent teams. The operator gives high-level commands while agents create tasks, work in parallel, message each other, and review code through a Kanban workflow.",
      "It supports Claude Code, Codex, OpenCode, Cursor, Grok, GitHub Copilot, Kiro, Z.AI, MiniMax, and Kimi, starts with a free no-auth model, and can connect to more than 200 models across 75+ LLM providers.",
      "It belongs in Open Orchestrators because the product focuses on the team-management layer around autonomous agents: task planning, live process visibility, message delivery, cross-team coordination, per-task logs, code review, and human control over approvals."
    ],
    bestFor: ["High-level delegation to AI agent teams", "Kanban-managed autonomous coding work", "Multi-runtime and multi-provider agent orchestration"],
    tags: ["coding agents", "agent teams", "kanban", "code review", "desktop app", "open source"],
    links: [
      { label: "Website", href: "https://agentteams.live/", emphasis: "primary" },
      { label: "GitHub", href: "https://github.com/777genius/agent-teams-ai" },
      { label: "Releases", href: "https://github.com/777genius/agent-teams-ai/releases" },
      { label: "Discord", href: "https://discord.gg/qtqSZSyuEc" }
    ],
    screenshots: agentTeamsScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "agent-teams", "Agent Teams",
      "Agent Teams helps builders delegate high-level goals to autonomous agent teams. Agent Analytics gives the follow-up agent visitor, source, funnel, and conversion data after those agent-built changes reach users.",
      ["a builder uses Agent Teams to give a high-level command and let agents plan, implement, review, and ship a change", "the changed website, docs, app, onboarding path, demo, or support surface reports visits, sources, CTA clicks, signup, activation, retention, funnels, and experiment events to Agent Analytics", "a follow-up agent fetches the Agent Analytics results and compares the shipped path with the prior period", "the next Agent Teams task is scoped from measured user behavior, not only from task completion or code diff status"],
      "Install Agent Analytics on the user-facing surface Agent Teams helps ship. The useful loop starts after an agent-built change lands and real users interact with it.",
      "Agent Teams-built page, traffic source, CTA click, signup, activation event, funnel step, experiment, or shipped task", agentTeamsScreenshots
    )
  },
  {
    slug: "vibe-kanban", installMethod: "cli-and-skill",
    rank: 20,
    title: "Vibe Kanban",
    githubRepo: "BloopAI/vibe-kanban",
    accent: "mint",
    mark: {
      kind: "image",
      src: "/logos/vibe-kanban.png",
      label: "Vibe Kanban logo"
    },
    summary:
      "An open-source Kanban workspace for planning, running, reviewing, and shipping parallel coding-agent work.",
    note:
      "Centers orchestration on issue planning, coding-agent workspaces, branches, terminals, dev servers, diff review, browser preview, inline feedback, PR creation, and merge flow.",
    overview: [
      "Vibe Kanban is an Apache-2.0 open-source workspace for teams and individuals running coding agents such as Claude Code, Codex, Gemini CLI, GitHub Copilot, Amp, Cursor, OpenCode, Droid, CCR, and Qwen Code.",
      "Its workflow starts from Kanban issues, then creates workspaces where agents get a branch, terminal, and dev server. Operators can review diffs, leave inline comments, preview the app in a built-in browser, open pull requests, and merge finished work.",
      "It belongs in Open Orchestrators because the product focuses on the human planning and review layer around parallel coding agents rather than a single chat session or editor extension."
    ],
    bestFor: ["Planning coding-agent work", "Parallel agent workspaces", "Review, preview, and PR flow"],
    tags: ["coding agents", "kanban", "workspaces", "diff review", "open source"],
    links: [
      {
        label: "Website",
        href: "https://vibekanban.com/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/BloopAI/vibe-kanban"
      },
      {
        label: "Docs",
        href: "https://vibekanban.com/docs"
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/vibe-kanban"
      }
    ],
    screenshots: vibeKanbanScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "vibe-kanban",
      "Vibe Kanban",
      "Vibe Kanban helps builders plan, run, review, and ship coding-agent work. Agent Analytics gives the follow-up agent visitor, source, funnel, and conversion data after those changes reach users.",
      ["a builder uses Vibe Kanban to plan an issue and run one or more coding agents in workspaces", "the selected branch ships to the website, docs, app, onboarding path, demo, or product surface", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, funnels, and experiment events to Agent Analytics", "a follow-up agent fetches the Agent Analytics results and turns user behavior into the next issue, review comment, or experiment"],
      "Install Agent Analytics on the surfaces Vibe Kanban helps ship. The useful loop starts after the agent-built change lands: a later agent can fetch the measured user outcome and decide what to improve next.",
      "Vibe Kanban-built page, traffic source, CTA click, signup, activation event, funnel step, experiment, or shipped branch",
      vibeKanbanScreenshots,
      [
        {
          label: "Agent Analytics MCP",
          href: "https://mcp.agentanalytics.sh/mcp"
        },
        {
          label: "Agent Analytics API docs",
          href: "https://docs.agentanalytics.sh/api/"
        }
      ]
    )
  },
  {
    slug: "parallel-code", installMethod: "cli-and-skill",
    rank: 27,
    title: "Parallel Code",
    githubRepo: "johannesjo/parallel-code",
    accent: "cyan",
    mark: {
      kind: "monogram",
      value: "PC",
      label: "Parallel Code monogram"
    },
    summary:
      "An open-source desktop workspace for dispatching, monitoring, reviewing, and merging parallel coding-agent work across isolated git worktrees.",
    note:
      "Centers orchestration on local parallel coding-agent sessions, automatic branch and worktree isolation, real embedded terminals, diff review, and merge flow.",
    overview: [
      "Parallel Code is an MIT-licensed desktop app for orchestrating multiple AI coding agents from one local interface. It supports Claude Code, Codex CLI, Gemini CLI, GitHub Copilot CLI, and other terminal-based coding agents.",
      "Each task runs in its own git branch and worktree so agents can work concurrently without conflicting with one another. The app embeds real terminals, tracks task status, surfaces diffs, and helps review or merge completed work.",
      "It belongs in Open Orchestrators because the product is directly about parallel coding-agent execution, worktree isolation, task coordination, review, and local operator control."
    ],
    bestFor: ["Parallel coding-agent sessions", "Git worktree isolation", "Terminal-native review and merge flow"],
    tags: ["coding agents", "desktop", "worktrees", "parallel execution", "MIT"],
    links: [
      {
        label: "Website",
        href: "https://parallelcode.app/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/johannesjo/parallel-code"
      }
    ],
    screenshots: parallelCodeScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "parallel-code",
      "Parallel Code",
      "Parallel Code helps builders run several coding agents against isolated worktrees. Agent Analytics measures whether the shipped branch, docs update, onboarding change, product surface, or growth experiment improved user behavior after merge.",
      ["a builder uses Parallel Code to run multiple coding agents against a feature, docs update, onboarding path, app surface, or growth experiment", "the selected worktree is reviewed, merged, and deployed", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, or task-completion events to Agent Analytics", "a follow-up agent fetches Agent Analytics results and turns user behavior into the next task or experiment"],
      "Instrument the deployed surface affected by the merged worktree. Agent Analytics reads product and web events after the Parallel Code-managed change ships; it does not replace terminal logs, git diffs, or agent transcripts.",
      "Parallel Code-managed page, docs path, traffic source, CTA click, signup, activation event, retention signal, or shipped experiment",
      parallelCodeScreenshots
    )
  },
  {
    slug: "augment-intent", installMethod: "cli-and-skill",
    rank: 18,
    title: "Augment Code Intent",
    visibility: "not-open-important",
    accent: "emerald",
    mark: {
      kind: "image",
      src: "/logos/augment-code.svg",
      label: "Augment Code logo"
    },
    summary:
      "Augment's answer to what comes after the IDE: agent orchestration, isolated workspaces, and living specs in one developer workspace.",
    note:
      "Not open-source; tracked as an important category signal because Intent puts coordinated agents, isolated workspaces, and living specs in one developer workspace.",
    overview: [
      "Augment Code describes Intent as what comes after the IDE: a developer workspace for agent orchestration, isolated git-worktree-backed workspaces, and living specs.",
      "Its core workflow is coordinator, implementors, and verifier. The coordinator turns a task into a spec, implementors execute in waves, and the verifier checks the result against the spec before the developer reviews the work.",
      "Intent also brings code, browser previews, terminal, git operations, model choice, Augment Context Engine, and BYOA support for Claude Code, Codex, and OpenCode into the same workspace."
    ],
    bestFor: ["Agent orchestration", "Isolated workspaces", "Living specs"],
    tags: ["not open", "agent orchestration", "isolated workspaces", "living specs"],
    links: [
      {
        label: "Intent page",
        href: "https://www.augmentcode.com/product/intent",
        emphasis: "primary"
      },
      {
        label: "Product Hunt",
        href: "https://www.producthunt.com/products/augment-code"
      },
      {
        label: "Blog",
        href: "https://www.augmentcode.com/blog/intent-a-workspace-for-agent-orchestration"
      }
    ],
    screenshots: augmentIntentScreenshots,
    agentAnalytics: {
      heading: "Use Agent Analytics as an Augment Skill",
      valueProp:
        "The clean Agent Analytics integration for Augment is the skill path. Install the Agent Analytics skill through the skills.sh workflow, then Augment can load it from the standard agent-skills locations, report site events, and fetch growth analytics from the same agent loop.",
      measurementLoop: [
        "install the Agent Analytics skill with `npx skills add agent-analytics/skills`",
        "Augment discovers the skill from `.agents/skills/`, `.augment/skills/`, or another supported skills location",
        "the skill guides login, project creation, tracker install, event reporting, event verification, and analytics queries through the official Agent Analytics CLI",
        "Intent keeps the spec, agents, code, terminal, browser, and git workflow together while the agent reads visitors, sources, signup, activation, retention, conversion, and growth from Agent Analytics"
      ],
      setupNotes:
        "This fits Augment's Skills model: skills are modular packages of domain knowledge, workflows, tool guidance, and resources. For Agent Analytics, the skill teaches the agent how to set up event reporting and read the shipped surface results without making the developer leave Augment for a dashboard-first workflow.",
      prompt:
        "Install the Agent Analytics skill with `npx skills add agent-analytics/skills`. Then set up Agent Analytics for this project. If approval is needed, send me the approval link and wait. After approval, create the project, add event reporting, verify the first event arrives, fetch the last 7 days, and explain visits, sources, signup, activation, retention, conversion, and growth for the shipped surface.",
      ctaLabel: "Install Agent Analytics skill",
      ctaHref: "https://github.com/Agent-Analytics/skills",
      screenshots: augmentIntentScreenshots,
      relatedLinks: [
        {
          label: "Agent Analytics skill repository",
          href: "https://github.com/Agent-Analytics/skills"
        },
        {
          label: "Augment Agent Skills docs",
          href: "https://docs.augmentcode.com/cli/skills"
        },
        {
          label: "Skills directory",
          href: "https://skills.sh/"
        }
      ]
    }
  },
  {
    slug: "hyper", installMethod: "mcp",
    rank: 19,
    title: "Hyper",
    visibility: "not-open-important",
    accent: "cyan",
    mark: {
      kind: "monogram",
      value: "Hy",
      label: "Hyper monogram"
    },
    summary:
      "A closed AI-agent platform for performance marketing where agents connect to the marketing stack, analyze data, launch campaigns, generate reports, and run scheduled workflows.",
    note:
      "Not open-source; tracked as an important category signal because Hyper turns marketing work into an agent operating layer with tool connections, custom agents, action controls, reporting, and MCP-aware integrations.",
    overview: [
      "Hyper describes itself as an AI agent platform for performance marketing, with agents that operate across paid ads, operations, reporting, analytics, SEO, and AI search.",
      "Its public materials emphasize connected tools, custom agents, scheduled workflows, action controls, activity visibility, 80+ integrations, and MCP support.",
      "It belongs in the closed important section because it shows how multi-agent orchestration is moving into vertical operating systems: not a general framework, but a domain-specific agent layer for agencies, founders, and lean marketing teams."
    ],
    bestFor: [
      "Marketing-agent operations",
      "Cross-platform campaign and analytics workflows",
      "Vertical agent OS for agencies and lean teams"
    ],
    tags: ["not open", "marketing agents", "MCP integrations", "agent workflows"],
    links: [
      {
        label: "Website",
        href: "https://www.hyperfx.ai/",
        emphasis: "primary"
      },
      {
        label: "Integrations",
        href: "https://www.hyperfx.ai/integrations"
      },
      {
        label: "Blog",
        href: "https://www.hyperfx.ai/blog"
      },
      {
        label: "Supabase case study",
        href: "https://supabase.com/customers/hyper"
      }
    ],
    screenshots: hyperScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "hyper",
      "Hyper",
      "Hyper agents can plan, launch, analyze, and report on marketing work. Agent Analytics gives those agents a builder-friendly source for web analytics, funnels, experiments, session paths, and AI traffic around the pages, docs, campaigns, and product surfaces they improve.",
      ["a Hyper agent launches or improves a campaign, landing page, content path, onboarding step, report, or product surface", "the website, docs, campaign destination, signup path, or app surface reports visits, sources, CTA clicks, signup, activation, funnel, experiment, and session-path events to Agent Analytics", "Hyper or a follow-up agent queries Agent Analytics for the measured user outcome", "the marketing workflow uses real behavior to decide the next campaign, page change, audience, message, or experiment"],
      "Use Agent Analytics as the agent-native analytics provider around the surfaces Hyper changes or reports on. Hyper can stay focused on marketing execution while Agent Analytics supplies direct MCP, CLI, API, and experiment data for agents that need to close the growth loop.",
      "Hyper-managed campaign, landing page, traffic source, CTA click, signup, activation event, funnel step, experiment, or session path",
      hyperScreenshots,
      [
        {
          label: "Agent Analytics MCP",
          href: "https://mcp.agentanalytics.sh/mcp"
        },
        {
          label: "Agent Analytics API docs",
          href: "https://docs.agentanalytics.sh/api/"
        },
        {
          label: "Autoresearch growth guide",
          href: "https://docs.agentanalytics.sh/guides/autoresearch-growth-skill/"
        }
      ]
    )
  },
  {
    slug: "helmor", installMethod: "cli-and-skill",
    rank: 27,
    title: "Helmor",
    githubRepo: "dohooo/helmor",
    accent: "amber",
    mark: {
      kind: "image",
      src: "/logos/helmor.png",
      label: "Helmor logo",
      surface: "dark"
    },
    summary:
      "An Apache-2.0 local-first IDE and workbench for orchestrating Claude Code, Codex, and other coding agents across worktrees.",
    note:
      "Centers orchestration on planning, running, reviewing, testing, merging, and shipping multi-agent software work locally instead of handing the source tree to a hosted vendor.",
    overview: [
      "Helmor is an open-source local workbench for multi-agent software development. Its website frames the product as a local-first IDE for coding-agent orchestration, with Claude Code and Codex running side by side across worktrees.",
      "It belongs in Open Orchestrators because it focuses on the operator loop around coding agents: plan the work, run agents locally, review/test the result, merge, and ship software rather than only generating code in one chat session."
    ],
    bestFor: ["Local coding-agent orchestration", "Claude Code and Codex side by side", "Worktree-based review and shipping"],
    tags: ["coding agents", "local-first IDE", "worktrees", "open source"],
    links: [
      {
        label: "Website",
        href: "https://helmor.ai/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/dohooo/helmor"
      },
      {
        label: "Official X",
        href: "https://x.com/helmor_ai"
      },
      {
        label: "Releases",
        href: "https://github.com/dohooo/helmor/releases"
      }
    ],
    screenshots: helmorScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "helmor",
      "Helmor",
      "Helmor helps builders run and ship local coding-agent work. Agent Analytics gives the follow-up agent visitor, source, funnel, and conversion data after those changes reach users.",
      ["a builder uses Helmor to plan, run, review, test, merge, and ship a coding-agent change", "the changed website, docs, app, onboarding path, demo, or support surface reports visits, sources, CTA clicks, signup, activation, retention, funnels, and experiment events to Agent Analytics", "a follow-up agent fetches the Agent Analytics results and compares the shipped path with the prior period", "the builder decides which Helmor-managed workstream to improve next from user behavior, not only local task status"],
      "Install Agent Analytics on the user-facing surface Helmor helps ship. The useful measurement loop starts after the agent-built change lands and users interact with it.",
      "Helmor-built page, traffic source, CTA click, signup, activation event, funnel step, experiment, or shipped worktree",
      helmorScreenshots
    )
  },

  {
    slug: "openhuman", installMethod: "api-only",
    rank: 29,
    title: "OpenHuman",
    githubRepo: "tinyhumansai/openhuman",
    accent: "emerald",
    mark: {
      kind: "monogram",
      value: "OH",
      label: "OpenHuman monogram"
    },
    summary:
      "A GPL-3.0 personal AI agent harness with a desktop-first UI, local memory tree, Obsidian-style wiki, integrations, model routing, voice, and optional local AI.",
    note:
      "Centers orchestration on a personal agent that can connect to everyday tools, auto-fetch context, compress it into local memory, expose typed tools, and operate through a simple desktop experience rather than a config-first terminal workflow.",
    overview: [
      "OpenHuman is an open-source personal AI agent harness from TinyHumans. The public README describes a desktop-first assistant with a mascot UI, local SQLite-backed memory tree, Obsidian-compatible wiki, one-click OAuth integrations, native tools, model routing, voice, and optional Ollama-backed local AI.",
      "It belongs in Open Orchestrators because its operating surface is not only chat. OpenHuman connects to user tools, pulls fresh data into memory on a recurring loop, exposes integrations as typed tools, and gives the agent durable personal context for daily workflows.",
      "The repository is GPL-3.0, Rust-primary, and in early beta. Its public repo and website frame the product around private, simple, human-facing personal agent orchestration."
    ],
    bestFor: ["Personal AI agent harness", "Local memory and Obsidian-style wiki", "Daily-life integrations and voice"],
    tags: ["personal agent", "memory", "desktop", "integrations", "open source"],
    links: [
      {
        label: "Website",
        href: "https://tinyhumans.ai/openhuman",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/tinyhumansai/openhuman"
      },
      {
        label: "Docs",
        href: "https://tinyhumans.gitbook.io/openhuman/"
      },
      {
        label: "Official X",
        href: "https://x.com/tinyhumansai"
      }
    ],
    screenshots: openHumanScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "openhuman",
      "OpenHuman",
      "OpenHuman gives users a personal agent with memory, integrations, and daily workflow context. Agent Analytics measures the public project surfaces, onboarding paths, docs, and product flows those agents help change.",
      ["a builder uses OpenHuman to research, plan, write, update docs, improve onboarding, or ship a product surface", "the affected website, docs path, app path, or onboarding flow reports visits, sources, CTA clicks, signup, activation, retention, and task-completion events to Agent Analytics", "OpenHuman or a follow-up agent reads the Agent Analytics results after the change reaches users", "the next personal-agent task is chosen from user-facing outcomes, not only remembered context"],
      "Instrument the product or web surface OpenHuman helps change. Agent Analytics reads user-facing event data; it is not a replacement for OpenHuman's personal memory, local wiki, integration sync, or voice workflow.",
      "OpenHuman-assisted page, docs path, traffic source, CTA click, signup, activation event, retention signal, or task-completion event",
      openHumanScreenshots
    )
  },
  {
    slug: "openswarm", installMethod: "cli-and-skill",
    rank: 28,
    title: "Open Swarm",
    githubRepo: "openswarm-ai/openswarm",
    visibility: "not-open-important",
    accent: "orange",
    mark: {
      kind: "image",
      src: "/logos/openswarm.png",
      label: "Open Swarm logo"
    },
    summary: "A Mac desktop on a waitlist, where the homepage says many agents work at once and each one gets its own browser, apps, and tools.",
    note: "The GitHub repository no longer holds product source. Its license is proprietary for this version and later. Releases before 8 September 2026 stay AGPL-3.0.",
    overview: [
      "The homepage at openswarm.com titles the product OpenSwarm and describes it as a free AI desktop for Mac. The page says it is on a waitlist, and the page script also contains a paused-waitlist state. The script's description is a desktop where many agents work at once. Each agent gets its own browser, its own apps, and its own tools. You watch them on one canvas and can step in. The page gives examples: one request that opens six browsers, a Problem Validator that sends one agent each to Reddit, X, Hacker News, Product Hunt, and LinkedIn, an agent that builds a described tool into the launcher, and texting the swarm from a phone. Named apps in that script include Daily Brief, CRM Core, Lead Finder, Problem Validator, Post Harvester, Social Footprint Finder, Skill Editor, Style Guide Extractor, Git Graph, and Analytics Refresh.",
      "The only product image that answered on 13 November 2026 was the social card at /media/og.jpg. It is a sky-colored card with the page title and a waitlist line. The paths the page had used for conversation, workflows, and app-builder images returned 404. docs.openswarm.com returned HTTP 500, so this entry does not repeat older docs claims about connectors. The diagrams here follow the homepage script: many agents, one canvas, a waitlist, and the license text in the repository.",
      "The GitHub repository openswarm-ai/openswarm says development no longer happens there. It holds signed builds that installed copies check. The LICENSE file says this version and later versions are proprietary. Versions published before 8 September 2026 remain under the GNU Affero General Public License version 3. Terms are also linked from the homepage. The Skill Editor is one of the apps named in the page script, which is the basis for the CLI-and-skill install label. The current public pages do not document OpenSwarm connecting out to external MCP servers.",
      "Invite copy on the page says inviting three friends moves you up the waitlist. The price line on the homepage is free. The license line in the repository is proprietary for current builds. Those are different claims, and both are on the project's own pages."
    ],
    bestFor: [
      "A Mac desktop where each agent has its own browser and apps",
      "A waitlist, including the paused state in the page script",
      "Signed builds in a repository whose current license is proprietary"
    ],
    tags: [
      "Mac desktop",
      "waitlist",
      "multi-agent",
      "proprietary",
      "signed builds"
    ],
    links: [
      {
        label: "Website",
        href: "https://openswarm.com/",
        emphasis: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/openswarm-ai/openswarm",
      },
      {
        label: "README",
        href: "https://github.com/openswarm-ai/openswarm/blob/main/README.md",
      },
      {
        label: "License",
        href: "https://github.com/openswarm-ai/openswarm/blob/main/LICENSE",
      },
      {
        label: "Releases",
        href: "https://github.com/openswarm-ai/openswarm/releases",
      }
    ],
    screenshots: [
      {
        src: "/images/players/openswarm/openswarm-og.webp",
        alt: "OpenSwarm social card: an octopus mark, the name OpenSwarm, a waitlist button, and the line about a free AI desktop for Mac.",
        caption: "Social card from the OpenSwarm homepage. Conversation and workflow images on the site returned 404. openswarm.com/media/og.jpg, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "OpenSwarm website",
        sourceUrl: "https://openswarm.com/media/og.jpg"
      },
      {
        src: "/images/players/openswarm/openswarm-desktop.svg",
        alt: "Diagram of OpenSwarm: a waitlist, then many agents that each have a browser and apps, watched on one canvas.",
        caption: "Diagram of the desktop the homepage script describes. openswarm.com homepage script, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "OpenSwarm website",
        sourceUrl: "https://openswarm.com/"
      },
      {
        src: "/images/players/openswarm/openswarm-license.svg",
        alt: "Diagram of the OpenSwarm license split: this version is proprietary, and versions published before 8 September 2026 stay AGPL-3.0.",
        caption: "Diagram of the license text in the repository. openswarm-ai/openswarm LICENSE, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "OpenSwarm GitHub LICENSE",
        sourceUrl: "https://github.com/openswarm-ai/openswarm/blob/main/LICENSE"
      }
    ],
    agentAnalytics: agentAnalyticsSection(
      "openswarm",
      "Open Swarm",
      "Open Swarm coordinates parallel local agents. Agent Analytics gives those agents user-facing outcome data after a swarm-built change ships.",
      ["an operator uses Open Swarm to launch, monitor, approve, and coordinate several agent sessions", "one or more swarm-built changes ship to a website, docs site, app, onboarding flow, demo, or support surface", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, funnels, and experiment events to Agent Analytics", "a later Open Swarm agent fetches the outcome data and turns it into the next task, prompt template, or review decision"],
      "Install Agent Analytics on the project surfaces Open Swarm agents change. Agent Analytics measures user behavior after deployment; it is not a replacement for Open Swarm's local session, cost, approval, or diff tracking.",
      "Open Swarm-built page, traffic source, CTA click, signup, activation event, funnel step, experiment, or approved agent task",
      openSwarmScreenshots
    )
  },
  {
    slug: "crewlet", installMethod: "api-only",
    rank: 22,
    title: "Crewlet",
    visibility: "not-open-important",
    accent: "sky",
    mark: {
      kind: "image",
      src: "/logos/crewlet.svg",
      label: "Crewlet logo",
      surface: "dark"
    },
    summary: "A hosted product that connected company tools, took actions with a review step or an auto-run, and kept a record of what worked. The hosted app is shut down.",
    note: "The homepage says Crewlet is no longer operating as a hosted product. New signups are closed, and the Slack app cannot be installed.",
    overview: [
      "The homepage at crewlet.io says Crewlet is no longer operating as a hosted product. New signups are closed, and the app is shut down. The Slack app is discontinued and cannot be installed. The page is kept as a record. The same page says the connection layer continues as treg: one credential, priced per call, for Claude Code, Codex, and any agent that can call an API. The page says a real person replies to data requests, and that export or deletion is handled within 2 business days. There is no public source repository on the page.",
      "What the page still describes is a loop. Connect the tools and read the company data. Take actions such as shipping code, pausing an ad set, or replying to a lead, either after a person reviews the action or as an auto-run. Remember what worked, and turn that record into the next plan. The homepage hero is a sample Today screen dated in the image, with a list of actions, statuses, and charts. The dollar figures, lead names, and ad counts in that image are sample content. They are not a measurement of a live workspace, and the product behind that screen is the one the page says is shut down. The page does not publish a current login, a current Slack install, or a source repository.",
      "The Slack section, kept as a record, describes a morning briefing in a channel, mentions of @Crewlet, and Approve and Dismiss on proposed actions. A channel allowlist limited where the app could post. The page's own shutdown note sits above that record: the Slack app cannot be installed, and the hosted product is not taking new accounts. The diagrams on this page follow that published loop and the shutdown note. They are not screenshots of a running app.",
      "Because the hosted product is closed, this entry stays in the not-open-important group. The install method stays API-only: the page does not document a current way to attach Crewlet itself as an MCP server or as a shell skill. The successor it names, treg, is a credential and a per-call API for other agents."
    ],
    bestFor: [
      "A record of the hosted loop: connect, act, review, remember",
      "The shutdown notice and the data-request contact",
      "The successor named on the page, treg, as a per-call API"
    ],
    tags: [
      "hosted",
      "shut down",
      "Slack record",
      "approvals",
      "treg"
    ],
    links: [
      {
        label: "Website",
        href: "https://www.crewlet.io/",
        emphasis: "primary",
      },
      {
        label: "Official X",
        href: "https://x.com/crewlet_",
      }
    ],
    screenshots: [
      {
        src: "/images/players/crewlet/crewlet-today.webp",
        alt: "Crewlet homepage sample Today screen dated March 24, 2026, with a daily brief, actions waiting for a decision, lead cards, and an ads table.",
        caption: "Sample Today screen from the Crewlet homepage. The page says the hosted product is shut down. Figures in the image are sample content. crewlet.io homepage hero, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Crewlet website",
        sourceUrl: "https://www.crewlet.io/"
      },
      {
        src: "/images/players/crewlet/crewlet-loop.svg",
        alt: "Diagram of the Crewlet loop the homepage still describes: connect tools, take an action, review or auto-run, then remember.",
        caption: "Diagram of the loop the page keeps as a record. crewlet.io homepage, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Crewlet website",
        sourceUrl: "https://www.crewlet.io/"
      },
      {
        src: "/images/players/crewlet/crewlet-shutdown.svg",
        alt: "Diagram of the Crewlet shutdown notice: signups closed, Slack app discontinued, and treg named as a per-call API.",
        caption: "Diagram of the shutdown notice on the homepage. crewlet.io homepage, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Crewlet website",
        sourceUrl: "https://www.crewlet.io/"
      }
    ],
    agentAnalytics: agentAnalyticsSection(
      "crewlet",
      "Crewlet",
      "Crewlet focuses on autonomous growth operations and tool-connected business work. Agent Analytics gives the human or agent team a direct source of web, funnel, source, activation, and conversion data for the surfaces Crewlet changes or reports on.",
      ["Crewlet plans or runs a growth, support, data, or engineering operation that affects a website, docs page, onboarding path, campaign, or product surface", "the affected surface reports visits, sources, CTA clicks, signup starts, completed signups, activation events, funnel steps, or conversion events to Agent Analytics", "a human or follow-up agent fetches the Agent Analytics outcome data", "the next Crewlet operation is adjusted from measured user behavior instead of only internal task completion"],
      "Use Agent Analytics around the public or product surfaces affected by Crewlet's operations. Agent Analytics is not a replacement for Crewlet's internal memory or operational logs; it supplies user-facing outcome data that agents can query later.",
      "Crewlet-run campaign, landing page, traffic source, CTA click, signup, activation event, funnel step, support path, or conversion event",
      crewletScreenshots
    )
  },
  {
    slug: "agentrq", installMethod: "mcp",
    rank: 30,
    title: "AgentRQ",
    githubRepo: "agentrq/agentrq",
    accent: "emerald",
    mark: {
      kind: "monogram",
      value: "RQ",
      label: "AgentRQ monogram"
    },
    summary: "A Go and Vue workspace that gives each workspace its own MCP URL, so agents pull tasks, ask before tools, and write the call history back.",
    note: "The main repository is AGPL-3.0-only, with a commercial license from Contextual, Inc. The daemon, desktop installer, websocket server, and plugins are Apache-2.0.",
    overview: [
      "AgentRQ is a workspace for agents. The server is Go with Fiber, an MCP server through mcp-go, a CoreMCP supervisor, GORM on SQLite, Google OAuth and JWT, and server-sent events. The UI is Vue 3, Vite, and Pinia. The Electron desktop is a client of whichever server you run. From a clone, make install and make dev start the API and the UI at http://localhost:5173. The README's prerequisites are Go 1.27.1 or newer, Node.js 18 or newer, OpenSSL, and a Google OAuth client for the local redirect. Docker and Compose are the other path, with the steps in SETUP.md. The LICENSE file is GNU AGPL version 3 only, and it says a commercial license is available from Contextual, Inc. The separate agentrqd, agentrq-desktop install scripts, agentrq-ws, and plugins repositories keep Apache-2.0.",
      "Each workspace has its own MCP URL and token. The README's production pattern is https://WORKSPACE_ID.mcp.agentrq.com/. Agents pull tasks, update status, and ask permission. The tool-call image in the README shows an agent asking, a person allowing or denying, and the call recorded in history. YOLO on a task auto-allows later calls and still records them. The scheduler checks every minute for due tasks and workflows. Workflows are a graph of events. The trajectory view lays a run out as Input, Agent, and Tools lanes. The README says Whisper speech-to-text runs in the browser and is not uploaded. A workspace can delay sending a message. The isolated-workspaces sketch shows one server, several workspaces, and agents named in the figure, including claude, codex, agy, hermes, and openclaw.",
      "A machine is a computer you enroll with the agentrqd daemon and a single-use code typed on that machine. The browser then has a live terminal on it, and the README says the session keeps running if the tab closes. Skills are SKILL.md files. You import one from a public GitHub link, keep one copy across workspaces, and agents load it over MCP. Pano is shared markdown. A page is removed 30 days after the last save unless you extend it. A fork of a task has its own queue and agent, shares memory, skills, and settings, and uses its own git worktree. Merging stops the fork agent and brings the tasks and their threads back. The README also documents a Slack integration.",
      "The task-board, workspace, and tool-call images on this page are the SVG sketches from docs/assets/readme, not a capture of a running server. The board sketch shows a person assigning a task and agents pulling work. The license split matters if you ship a modified server: the AGPL terms on this repository are not the Apache terms on the helper repositories."
    ],
    bestFor: [
      "A separate MCP URL and token for each workspace",
      "Tool calls that ask first and stay in the history",
      "A daemon on a machine, with a terminal in the browser"
    ],
    tags: [
      "MCP server",
      "task board",
      "workspaces",
      "self-hosted",
      "AGPL-3.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://agentrq.com/",
        emphasis: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/agentrq/agentrq",
      },
      {
        label: "Docs",
        href: "https://agentrq.com/docs/",
      },
      {
        label: "README",
        href: "https://github.com/agentrq/agentrq/blob/main/README.md",
      },
      {
        label: "License",
        href: "https://github.com/agentrq/agentrq/blob/main/LICENSE",
      }
    ],
    screenshots: [
      {
        src: "/images/players/agentrq/agentrq-task-board.svg",
        alt: "AgentRQ task-board sketch from the README: tasks move across Not Started, Ongoing, Blocked, and Done while agents pick up work.",
        caption: "Task-board sketch published in the AgentRQ README. It is an illustrated diagram, not a capture of a running server. agentrq/agentrq (docs/assets/readme/task-board.svg), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "AgentRQ GitHub README",
        sourceUrl: "https://github.com/agentrq/agentrq/blob/main/README.md"
      },
      {
        src: "/images/players/agentrq/agentrq-workspaces.svg",
        alt: "AgentRQ isolated-workspaces sketch: api, web, and docs each have their own MCP server, token, and tasks.",
        caption: "Workspace sketch published in the AgentRQ README. agentrq/agentrq (docs/assets/readme/isolated-workspaces.svg), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "AgentRQ GitHub README",
        sourceUrl: "https://github.com/agentrq/agentrq/blob/main/README.md"
      },
      {
        src: "/images/players/agentrq/agentrq-tool-calls.svg",
        alt: "AgentRQ tool-call history sketch with Input, Agent, and Tools lanes, including a call waiting for allow or deny.",
        caption: "Tool-call sketch published in the AgentRQ README. agentrq/agentrq (docs/assets/readme/tool-call-history.svg), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "AgentRQ GitHub README",
        sourceUrl: "https://github.com/agentrq/agentrq/blob/main/README.md"
      },
      {
        src: "/images/players/agentrq/agentrq-architecture.svg",
        alt: "Diagram of AgentRQ: each workspace has an MCP URL, tool calls can wait for a person, and the call stays in the history.",
        caption: "Diagram of the documented workspace and permission loop. agentrq/agentrq README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "AgentRQ GitHub README",
        sourceUrl: "https://github.com/agentrq/agentrq/blob/main/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection(
      "agentrq",
      "AgentRQ",
      "AgentRQ keeps autonomous agent work connected to operator decisions. Agent Analytics gives those agents and operators user-facing outcome data after an AgentRQ-coordinated change ships.",
      ["an operator uses AgentRQ to assign, approve, answer, or coordinate one or more agent tasks", "the agent-built change ships to a website, docs site, app, onboarding flow, campaign, or product surface", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, funnels, and experiment events to Agent Analytics", "a later AgentRQ task asks an agent to fetch the Agent Analytics results and decide what to improve next"],
      "Install Agent Analytics on the project surfaces AgentRQ agents change. Agent Analytics measures user behavior after deployment; it is not a replacement for AgentRQ's task board, MCP notification channels, approval queue, or workspace state.",
      "AgentRQ-coordinated page, docs path, traffic source, CTA click, signup, activation event, approval flow, funnel step, or shipped task",
      agentRqScreenshots
    )
  },
  {
    slug: "paperclip", installMethod: "mcp",
    rank: 2,
    title: "Paperclip",
    githubRepo: "paperclipai/paperclip",
    accent: "amber",
    mark: {
      kind: "image",
      src: "/logos/paperclip.svg",
      label: "Paperclip logo"
    },
    summary: "An MIT-licensed control plane that wakes agents on heartbeats, checks tasks out with a lock, and records budgets, approvals, and the org chart.",
    note: "Anonymous usage telemetry is on until PAPERCLIP_TELEMETRY_DISABLED, DO_NOT_TRACK, or CI is set. Issue text and prompts are not in that telemetry.",
    overview: [
      "Paperclip is MIT-licensed, copyright Paperclip Labs, Inc. With Node.js 24.11 or newer, npx paperclipai@latest onboard --yes installs from the npm cache and keeps config and data on the machine. That path defaults to trusted local loopback. --bind lan or --bind tailnet starts in authenticated mode instead. npx paperclipai test-drive keeps a foreground instance, does not install a service, and can target Claude, Codex, or OpenCode through a harness flag. From a clone, pnpm install and pnpm dev serve the UI and API at http://localhost:3100 and create an embedded PostgreSQL database. pnpm 9.15 or newer is required. Local Claude and Codex subscription sign-in also needs Python 3 and the provider CLI. A source build of the Paperclip Runner needs Rust, or PAPERCLIP_RUNNER_BINARY set to a prebuilt binary.",
      "The README's control-plane diagram is a server with identity, tasks, heartbeats, governance, an org chart, workspaces, plugins, budgets, routines, secrets, activity, and company export. Agents wake for assigned work, a follow-up, or a schedule. A task has one assignee, and an execution lock stops a second run from claiming it. Context on the task includes the project and company goals. Company, agent, and project budgets track reported spend, alert at a threshold, and pause at a hard stop. Enforcement uses recorded spend, so usage still in flight can delay a stop. Approval stages cover hires and task review. Connection actions are a separate control: Allowed, Ask first, or Off. Routines create a tracked task on a cron, a webhook, or an API call.",
      "Adapters named in the README include Claude Code, Codex, CLI agents such as Cursor, Gemini, and bash, and HTTP or webhook bots such as OpenClaw. If the agent can receive a heartbeat, the README says it can be hired. Workspaces can use an isolated git worktree or an operator branch. Plugins run as out-of-process workers. Secrets are encrypted, and a run receives a reference rather than a copied value. Company export omits referenced secret values. The README says you can connect GitHub, Notion, Railway, or your own MCP server. The docs page for adding an MCP server is the existing source for that client path. One deployment can hold several organizations, with separate tasks, agents, permissions, and activity.",
      "The dashboard image in screenshots/PR-8000-home-flag-on.png shows a dark UI with a worktree banner, agent cards, tasks, routines, goals, and spend. The four-pillars figure groups the same surface into a task manager, an org chart, skill and eval training, and the runtime. Telemetry is on by default. The README says it does not collect personal information, issue content, prompts, file paths, or secrets. Private repository references are hashed with a per-install salt. Turn it off with PAPERCLIP_TELEMETRY_DISABLED=1, DO_NOT_TRACK=1, CI=true, or telemetry.enabled set to false. OpenTelemetry traces and Sentry are separate and opt-in."
    ],
    bestFor: [
      "Heartbeats that wake an agent for a checked-out task",
      "Budgets and approval stages around those runs",
      "Several organizations on one self-hosted deployment"
    ],
    tags: [
      "control plane",
      "org chart",
      "heartbeats",
      "MCP",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://paperclip.ing/",
        emphasis: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/paperclipai/paperclip",
      },
      {
        label: "Docs",
        href: "https://docs.paperclip.ing/",
      },
      {
        label: "README",
        href: "https://github.com/paperclipai/paperclip/blob/master/README.md",
      },
      {
        label: "License",
        href: "https://github.com/paperclipai/paperclip/blob/master/LICENSE",
      }
    ],
    screenshots: [
      {
        src: "/images/players/paperclip/paperclip-dashboard.webp",
        alt: "Paperclip dashboard with a worktree banner, agent cards, task and spend counts, and charts for run activity and task status.",
        caption: "Dashboard screenshot from the Paperclip repository. The counts in the image are from that screenshot. paperclipai/paperclip (screenshots/PR-8000-home-flag-on.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Paperclip GitHub repository",
        sourceUrl: "https://github.com/paperclipai/paperclip/blob/master/screenshots/PR-8000-home-flag-on.png"
      },
      {
        src: "/images/players/paperclip/paperclip-pillars.webp",
        alt: "Paperclip four pillars figure: Agentic Task Manager, Org Chart for Agents, Agent Employee Training, and Agentic OS.",
        caption: "Four pillars figure from the Paperclip README. paperclipai/paperclip (doc/assets/four-pillars-light.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Paperclip GitHub README",
        sourceUrl: "https://github.com/paperclipai/paperclip/blob/master/README.md"
      },
      {
        src: "/images/players/paperclip/paperclip-architecture.svg",
        alt: "Diagram of Paperclip: a heartbeat wakes an agent, a lock stops a second run, and budgets and approvals record the rest.",
        caption: "Diagram of the documented control plane. paperclipai/paperclip README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Paperclip GitHub README",
        sourceUrl: "https://github.com/paperclipai/paperclip/blob/master/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection(
      "paperclip",
      "Paperclip",
      "Paperclip companies can assign AI employees to improve pages, docs, signup, onboarding, or campaigns. Agent Analytics is the data source those employees can query after the change ships.",
      ["an AI employee ships a page, docs update, campaign, or product change", "the landing page, docs, install flow, signup path, onboarding path, or first project reports events to Agent Analytics", "an Analyst or Growth employee fetches visits, sources, install intent, signup, activation, purchase, or retention data", "Paperclip turns the measured project outcome into the next assigned job"],
      "Use the Paperclip setup guide for the agent task flow. Add the live plugin only when the company wants current traffic visibility inside Paperclip; the core loop is still reported events plus an employee reading the results.",
      "Paperclip-built page, traffic source, signup, activation event, or shipped change",
      paperclipScreenshots,
      [
        {
          label: "Agent Analytics Paperclip article",
          href: "https://blog.agentanalytics.sh/blog/paperclip-companies-need-agent-readable-analytics"
        },
        {
          label: "Paperclip setup guide",
          href: "https://docs.agentanalytics.sh/guides/paperclip/"
        }
      ]
    )
  },
  {
    slug: "crewai", installMethod: "mcp",
    rank: 3,
    title: "CrewAI",
    githubRepo: "crewAIInc/crewAI",
    accent: "violet",
    mark: {
      kind: "image",
      src: "/logos/crewai.svg",
      label: "CrewAI logo"
    },
    summary: "An MIT-licensed Python framework that runs role-based crews from JSON, and event-driven flows that call those crews from ordinary Python.",
    note: "Anonymous telemetry is on until OTEL_SDK_DISABLED is true. share_crew, off unless you set it, also sends goals and task outputs.",
    overview: [
      "CrewAI is an MIT-licensed Python framework. It requires Python 3.10 or newer and older than 3.14. The README installs the CLI with uv tool install crewai, after uv itself is installed. crewai create crew <name> writes a project whose agents live in agents/*.jsonc and whose tasks, process, and inputs live in crew.jsonc. crewai run loads that JSON. The older Python and YAML scaffold, with crew.py and config YAML, is crewai create crew <name> --classic. A generated agent file has a role, a goal, a backstory, an llm, and a tools list. Tasks name an agent, an expected output, and optional context from earlier tasks. Placeholders such as {topic} are filled from crew.jsonc inputs, and the CLI prompts for any that are missing. crewai install then crewai run writes the result, including an output file when the task sets one.",
      "The README describes two processes. Sequential runs the tasks in order. Hierarchical assigns a manager that coordinates planning and checks results through delegation. Flows are the other object: event-driven workflows with state, conditional branches, and ordinary Python steps that can create and run a crew. The flows figure in the repository docs shows code boxes and crew boxes around a shared state. The checkpoint images in docs/images show a terminal UI over a SQLite file named checkpoints.db, with a tree of task_started and task_completed rows, and keys labeled Quit, Refresh, Resume, and Fork. The overview pane in that image lists a time, an event, a branch, and one agent. The README names checkpointing as one of the capabilities, next to tools, memory, knowledge, and async execution.",
      "Agents call tools. The MCP docs say you attach MCP servers on the agent, either as URL strings or as MCPServerStdio, MCPServerHTTP, and MCPServerSSE objects, with optional tool filters. The stdio example launches a local process. HTTP and SSE examples point at a remote URL and headers. uv add mcp installs the client library for the field. The default model path is the OpenAI API. The README also points at Ollama for a local model, and at the LLM connections page for other providers. A Serper key is required only for the search tool that uses it.",
      "Telemetry is on. The README says it does not collect prompts, task descriptions, backstories, goals, tool use, API calls, responses, or environment variables, unless you set share_crew to true on a crew. That opt-in sends goals, backstories, context, and task outputs. OTEL_SDK_DISABLED set to true turns telemetry off. What is still collected by default includes the CrewAI and Python versions, a general OS description, agent and task counts, the process, whether memory or delegation is on, the model name, agent roles, and tool names. CrewAI AMP is a separate control plane, with cloud and on-premise options. The open-source license file is MIT."
    ],
    bestFor: [
      "Role and task definitions checked into a Python project",
      "A sequential crew or a manager that delegates",
      "Flows that mix those crews with ordinary Python steps"
    ],
    tags: [
      "Python",
      "crews",
      "flows",
      "MCP",
      "MIT"
    ],
    links: [
      {
        label: "Open Source",
        href: "https://crewai.com/open-source",
        emphasis: "primary",
      },
      {
        label: "Docs",
        href: "https://docs.crewai.com/",
      },
      {
        label: "GitHub",
        href: "https://github.com/crewAIInc/crewAI",
      },
      {
        label: "README",
        href: "https://github.com/crewAIInc/crewAI/blob/main/README.md",
      },
      {
        label: "License",
        href: "https://github.com/crewAIInc/crewAI/blob/main/LICENSE",
      }
    ],
    screenshots: [
      {
        src: "/images/players/crewai/crewai-checkpoints.webp",
        alt: "CrewAI checkpoints terminal UI over checkpoints.db, with a tree of task_started and task_completed rows and keys Quit, Refresh, Resume, and Fork.",
        caption: "Checkpoint tree from the CrewAI docs images. crewAIInc/crewAI (docs/images/checkpoint-tui-tree.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "CrewAI GitHub repository",
        sourceUrl: "https://github.com/crewAIInc/crewAI/blob/main/docs/images/checkpoint-tui-tree.png"
      },
      {
        src: "/images/players/crewai/crewai-checkpoint-overview.webp",
        alt: "CrewAI checkpoint overview for a task_started row, showing a time, a branch named main, and one agent, Senior Researcher.",
        caption: "Checkpoint overview from the CrewAI docs images. crewAIInc/crewAI (docs/images/checkpoint-tui-detail-overview.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "CrewAI GitHub repository",
        sourceUrl: "https://github.com/crewAIInc/crewAI/blob/main/docs/images/checkpoint-tui-detail-overview.png"
      },
      {
        src: "/images/players/crewai/crewai-flows.webp",
        alt: "CrewAI flows figure: Code boxes and Crew boxes around a shared State box.",
        caption: "Flows figure from the CrewAI repository. crewAIInc/crewAI (docs/images/flows.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "CrewAI GitHub repository",
        sourceUrl: "https://github.com/crewAIInc/crewAI/blob/main/docs/images/flows.png"
      },
      {
        src: "/images/players/crewai/crewai-architecture.svg",
        alt: "Diagram of CrewAI: JSON agents and tasks run sequential or hierarchical, and flows can call those crews.",
        caption: "Diagram of the documented crew and flow split. crewAIInc/crewAI README and MCP docs, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "CrewAI GitHub README",
        sourceUrl: "https://github.com/crewAIInc/crewAI/blob/main/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection(
      "crewai",
      "CrewAI",
      "CrewAI crews can ship content, product pages, docs, onboarding, or growth experiments. Agent Analytics gives the Analyst or Growth role the user-event data for the next crew decision.",
      ["a CrewAI-backed builder ships content, onboarding, docs, or product work", "the changed surface reports visits, clicks, signup, activation, purchase, or return events to Agent Analytics", "the Analyst or Growth role fetches the Agent Analytics data and explains what changed", "the crew assigns the next task from observed user movement"],
      "Report events from the project surfaces the crew is improving, then let Analyst, Growth, Product, or Content roles read the results as part of the next planning loop.",
      "CrewAI-built page, traffic source, signup, activation event, or shipped change",
      crewAiScreenshots
    )
  },
  {
    slug: "squad", installMethod: "cli-and-skill",
    rank: 4,
    title: "Squad",
    githubRepo: "bradygaster/squad",
    accent: "blue",
    mark: {
      kind: "monogram",
      value: "Sq",
      label: "Squad monogram"
    },
    summary: "An MIT-licensed team of specialist files in the repository, run through GitHub Copilot or one of six other hosts, with the conversation contract separate from the editor.",
    note: "The docs site in the repository screenshots labels Squad as alpha software, and says commands and behavior may change between releases.",
    overview: [
      "Squad is MIT-licensed. The team lives in the repo. squad init writes .squad/team.md and the files a host reads. Install is npm install -g @bradygaster/squad-cli on Node.js 22.5 or newer and npm 10 or newer, or a Homebrew cask, a WinGet package, an install script, or a GitHub release archive. Standalone archives vendor Node.js. Git and the GitHub CLI are required for issues and pull requests. squad init --preset default writes a configured team. Without the flag, init walks through setup. You then run copilot --agent squad --yolo, or pick the Squad agent in VS Code Copilot Chat. The README says --yolo is there because a session makes many tool calls, and without it Copilot asks you to approve each one. You describe the project, Squad proposes named members, and you confirm them.",
      "The README says each member runs in its own context, reads only its own knowledge, and writes back what it learned. People stay accountable for priorities, approvals, and the final change. squad upgrade refreshes Squad-owned files, including squad.agent.md, .github/skills, workflows, and .squad/templates, and backs up a file you customized. It does not change the team state under .squad/. squad status shows which squad is active. squad doctor checks the setup. squad export and squad import move a JSON snapshot. The command table includes squad triage, also called watch, which polls issues. The default interval is 10 minutes. --execute dispatches Copilot agents. A sentinel file tells a running watch to finish the current round and exit.",
      "Squad 2.0, documented in the repository, splits the editor, the conversation, and the execution harness. The client plane projects workspace files for a host. The control plane is SquadBackend: an ordered event log, a stable run id, resume cursors, and versioned approvals. The execution plane is a HarnessAdapter. The default init stays Copilot-only. --client adds Claude Code, Kiro, OpenCode, Cursor, OpenAI Codex, or Google Antigravity, or all of them. Each host gets its own coordinator file. The architecture page says MCP is a local transport bridge to that backend, not the wire protocol. Config files such as .mcp.json and .cursor/mcp.json point the host at Squad. An experimental HTTP backend is selected with SQUAD_BACKEND_URL. The bundled MCP bridge does not include an execution harness unless you opt in.",
      "The docs screenshots in the repository are pictures of the docs site search box, not of a running team, so this page uses diagrams instead. Those screenshots show the docs homepage labeled Alpha. Requirements in the README are Node.js 22.5.0 or newer, npm 10 or newer, Git with an SSH agent, and the GitHub CLI. The license file is the MIT license. The maintainers section names @bradygaster and @tamirdresher."
    ],
    bestFor: [
      "Specialist agents stored as files in the repository",
      "GitHub Copilot, with other editors added by a flag",
      "A conversation log that is separate from the editor UI"
    ],
    tags: [
      "GitHub Copilot",
      "repo files",
      "multi-host",
      "alpha",
      "MIT"
    ],
    links: [
      {
        label: "Docs",
        href: "https://bradygaster.github.io/squad/",
        emphasis: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/bradygaster/squad",
      },
      {
        label: "README",
        href: "https://github.com/bradygaster/squad/blob/dev/README.md",
      },
      {
        label: "npm CLI",
        href: "https://www.npmjs.com/package/@bradygaster/squad-cli",
      },
      {
        label: "License",
        href: "https://github.com/bradygaster/squad/blob/dev/LICENSE",
      }
    ],
    screenshots: [
      {
        src: "/images/players/squad/squad-architecture.svg",
        alt: "Diagram of Squad: squad init writes team files, specialists keep their own context, and a host runs them while people keep approvals.",
        caption: "Diagram of the documented team files. The repository screenshots are docs-site search boxes, so this page uses diagrams. bradygaster/squad README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Squad GitHub README",
        sourceUrl: "https://github.com/bradygaster/squad/blob/dev/README.md"
      },
      {
        src: "/images/players/squad/squad-hosts.svg",
        alt: "Diagram of Squad hosts: GitHub Copilot by default, other editors with a flag, and a local MCP bridge to the backend.",
        caption: "Diagram of the documented hosts. MCP in Squad is a local transport, not a client of external MCP servers. bradygaster/squad architecture notes, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Squad GitHub README",
        sourceUrl: "https://github.com/bradygaster/squad/blob/dev/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection(
      "squad",
      "Squad",
      "Squad teams can ship changes through persistent repo-native agents. Agent Analytics gives the follow-up Squad session user-event data so the team can learn whether the shipped work moved real customers.",
      ["a Squad team routes work to specialist agents for a page, docs path, onboarding flow, app surface, or growth experiment", "the shipped surface reports visits, sources, CTA clicks, signup, activation, retention, and conversion events to Agent Analytics", "a lead or analyst-style Squad agent fetches Agent Analytics data and compares the changed path with the prior period", "the finding is recorded back into Squad decisions or history and becomes the next routed improvement"],
      "Squad runs through GitHub Copilot and repo-local team files. If the coding-agent environment already has the Agent Analytics skill from skills.sh, let the Squad-guided agent use that workflow; otherwise add event reporting through the Agent Analytics CLI/API, verify events, and fetch results in the next Squad session.",
      "Squad-built page, traffic source, CTA click, signup, activation event, funnel step, or shipped change",
      squadScreenshots,
      [
        {
          label: "Agent Analytics skill repository",
          href: "https://github.com/Agent-Analytics/skills"
        },
        {
          label: "Squad CLI package",
          href: "https://www.npmjs.com/package/@bradygaster/squad-cli"
        }
      ]
    )
  },
  {
    slug: "openclaw", installMethod: "mcp",
    rank: 5,
    title: "OpenClaw",
    githubRepo: "openclaw/openclaw",
    accent: "orange",
    mark: {
      kind: "image",
      src: "/logos/openclaw.svg",
      label: "OpenClaw logo"
    },
    summary: "An MIT-licensed assistant that runs a local Gateway on your computer and answers in the chat apps and native apps you connect.",
    note: "State, memory, and credentials stay on your hardware. A daily version check is on until you turn update.checkOnStart off.",
    overview: [
      "OpenClaw is MIT-licensed and stewarded by the OpenClaw Foundation, which the README describes as an independent 501(c)(3). The README says there is no paid tier, hosted service, or token. The installer supports macOS, Linux, and Windows, and it installs a supported Node.js if needed. The one-line install is curl against openclaw.ai/install.sh, or the PowerShell script on Windows. If you already manage Node, the package is npm install -g openclaw@latest, for Node 24.16.0 or newer on the 24 line, or 26.1.0 or newer. The installer starts onboarding. A direct npm install needs openclaw onboard --install-daemon. openclaw gateway status checks the process, and openclaw dashboard opens the Control UI. Development of the repo uses pnpm, not a root npm install.",
      "The README says one Gateway is the local control plane for sessions, tools, events, and channel connections. The same Gateway is a personal assistant or a shared multiplayer one. The README says configuration is the difference. The Control UI, the CLI, and a TUI connect to that Gateway. Channels bring the assistant to WhatsApp, Telegram, Slack, Discord, Google Chat, Signal, iMessage, and others. The README names Discord, iMessage, Slack, Teams, Telegram, WhatsApp, and more than 20 others, plus native apps for macOS, iOS, Android, Windows, and Linux. Companion apps and nodes add voice, Canvas, camera, screen, and device actions. Model providers, including hosted models, local models, Claude, and Codex, are plugins. Prompts go to the model provider and the chat platforms you configure.",
      "The macOS onboarding images in the repository show two steps. Choose your Gateway offers This Mac, a nearby gateway, or configure later, and says the Gateway stays running. Grant permissions lists Automation through AppleScript, Notifications, Accessibility, Screen Recording, Microphone, Speech Recognition, Camera, and Location. The Speech Recognition row says trigger phrases are transcribed on the device. The security section says inbound messages are untrusted. Unknown senders on DM channels are paired, and you approve with openclaw pairing approve. Tools run on the host for the main session unless you configure sandboxing. By default OpenClaw phones home only for a daily version check. Anonymous feature statistics are opt-in. update.checkOnStart set to false disables both.",
      "The MCP docs say an MCP server exposes tools, resources, and prompts, and OpenClaw connects to it. Definitions live under mcp.servers. Their tools still pass the same tool profile and tool policy. You add a server from Settings, from the composer, or with openclaw mcp add, over stdio, SSE, or streamable HTTP. openclaw mcp doctor <name> --probe checks that it answers. Connecting a server does not bypass policy, and it does not enable the server's UI code. The reverse path, exposing channel conversations to another MCP client, is openclaw mcp serve. The license file is MIT."
    ],
    bestFor: [
      "A Gateway on your own computer, with chats and native apps",
      "MCP servers that still follow the tool policy",
      "Pairing unknown senders before they can message the agent"
    ],
    tags: [
      "personal assistant",
      "gateway",
      "chat channels",
      "MCP",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://openclaw.ai/",
        emphasis: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/openclaw/openclaw",
      },
      {
        label: "Docs",
        href: "https://docs.openclaw.ai/",
      },
      {
        label: "README",
        href: "https://github.com/openclaw/openclaw/blob/main/README.md",
      },
      {
        label: "License",
        href: "https://github.com/openclaw/openclaw/blob/main/LICENSE",
      }
    ],
    screenshots: [
      {
        src: "/images/players/openclaw/openclaw-gateway.webp",
        alt: "OpenClaw macOS onboarding, Choose your Gateway, with This Mac, a nearby gateway, and Configure later.",
        caption: "Gateway step from the OpenClaw macOS onboarding assets. openclaw/openclaw (docs/assets/macos-onboarding/04-choose-gateway.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "OpenClaw GitHub repository",
        sourceUrl: "https://github.com/openclaw/openclaw/blob/main/docs/assets/macos-onboarding/04-choose-gateway.png"
      },
      {
        src: "/images/players/openclaw/openclaw-permissions.webp",
        alt: "OpenClaw macOS Grant permissions screen listing Automation, Notifications, Accessibility, Screen Recording, Microphone, Speech Recognition, Camera, and Location.",
        caption: "Permissions step from the OpenClaw macOS onboarding assets. openclaw/openclaw (docs/assets/macos-onboarding/05-permissions.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "OpenClaw GitHub repository",
        sourceUrl: "https://github.com/openclaw/openclaw/blob/main/docs/assets/macos-onboarding/05-permissions.png"
      },
      {
        src: "/images/players/openclaw/openclaw-architecture.svg",
        alt: "Diagram of OpenClaw: chats and native apps talk to a local Gateway, which can connect to MCP servers under the same tool policy.",
        caption: "Diagram of the documented Gateway. openclaw/openclaw README and MCP docs, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "OpenClaw GitHub README",
        sourceUrl: "https://github.com/openclaw/openclaw/blob/main/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection(
      "openclaw",
      "OpenClaw",
      "An OpenClaw assistant can install Agent Analytics, verify event reporting, and later read the results for websites, docs, apps, and experiments.",
      ["OpenClaw adds tracking or ships a project change", "the changed surface reports page, CTA, signup, activation, return, or experiment events to Agent Analytics", "the assistant fetches traffic, funnel, retention, and experiment results from Agent Analytics", "the assistant brings the next recommendation back into the chat loop"],
      "Install the Agent Analytics skill in OpenClaw, approve the browser login, and let the assistant create projects, add tracking, verify reported events, and run scheduled builder reports.",
      "OpenClaw-managed project, traffic source, page, experiment, or shipped change",
      openClawScreenshots,
      [
        {
          label: "OpenClaw setup article",
          href: "https://blog.agentanalytics.sh/blog/setup-agent-analytics-with-openclaw"
        }
      ]
    )
  },
  {
    slug: "nanoclaw", installMethod: "cli-and-skill",
    rank: 25,
    title: "NanoClaw",
    githubRepo: "nanocoai/nanoclaw",
    accent: "mint",
    mark: {
      kind: "image",
      src: "/logos/nanoclaw.png",
      label: "NanoClaw logo"
    },
    summary: "An MIT-licensed assistant that routes chat messages through one Node host into a Linux container per agent, with skills that copy only the channels you add.",
    note: "The repository moved to nanocoai/nanoclaw. qwibitai/nanoclaw redirects there. Agents do not hold raw API keys.",
    overview: [
      "NanoClaw is MIT-licensed. The README's install is a clone of github.com/nanocoai/nanoclaw and then bash nanoclaw.sh. The script installs Node, pnpm, and Docker if they are missing, registers an Anthropic credential with a credential gateway, builds the agent container, and pairs a first channel: Slack, Telegram, Discord, WhatsApp, iMessage, or a local CLI. It runs on macOS or Linux, and on Windows through WSL2. Node must be 22.23.4 or newer, 24.22.1 or newer, or 26.12.1 or newer, with pnpm 10 or newer. Claude Code is required for /customize, /debug, setup recovery, and the /add-<channel> skills. bash nanoclaw.sh --uninstall removes that checkout's service, containers, and agent files, and leaves other checkouts and the gateway credentials.",
      "The README's architecture line is: messaging apps, then a host router, then the session's inbound.db, then a container running Bun and the Claude Agent SDK, then outbound.db, then the host delivers the reply. One Node process owns routing. Each session has two SQLite files and one writer each. The host maps a user to a messaging group, an agent group, and a session. The container polls inbound.db, runs the agent, and writes outbound.db. A sweep every 60 seconds looks for stale work and due messages. Each agent group has its own CLAUDE.md, memory, container, and only the mounts you allow. Commands run in the container, not on the host. Outbound API calls go through a credential gateway that injects credentials and applies per-agent limits. Setup currently installs OneCLI's Agent Vault behind that seam.",
      "Trunk does not ship every channel. Channel adapters live on a channels branch, and other model providers ship inside a skill's payload folder. /add-telegram, /add-codex, /add-opencode, /add-cursor, or /add-ollama-provider copies that module into your fork. The README lists WhatsApp, Telegram, Discord, Slack, Microsoft Teams, iMessage, Matrix, Google Chat, Webex, Linear, GitHub, WeChat, and email through Resend, installed on demand. A channel can have its own agent, share one agent across channels, or join one session. Slack setup can create one Slack app per agent. The default trigger word is @Andy. Scheduled tasks can use a script gate so the agent is not woken when there is no work. There is no config file for behavior. Changes are edits to the fork, including ones Claude Code makes when you ask.",
      "NanoClaw has no user accounts. The README says the only report is anonymous setup diagnostics, and NANOCLAW_NO_DIAGNOSTICS=1 turns those off. Messages, files, and keys stay on the machine. Fetching a prebuilt agent image is optional and needs a free account. That account sees the email and the image request, not the agents. Building the image locally is the default and needs no account. The same account can open portal.nanoclaw.dev for that image and a managed Slack app. The license file is MIT."
    ],
    bestFor: [
      "Chat agents that run in their own containers",
      "A small host you can fork instead of a large config file",
      "Channels and model providers added as skills"
    ],
    tags: [
      "containers",
      "chat channels",
      "skills",
      "self-hosted",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://nanoclaw.dev/",
        emphasis: "primary",
      },
      {
        label: "Docs",
        href: "https://docs.nanoclaw.dev/",
      },
      {
        label: "GitHub",
        href: "https://github.com/nanocoai/nanoclaw",
      },
      {
        label: "README",
        href: "https://github.com/nanocoai/nanoclaw/blob/main/README.md",
      },
      {
        label: "License",
        href: "https://github.com/nanocoai/nanoclaw/blob/main/LICENSE",
      }
    ],
    screenshots: [
      {
        src: "/images/players/nanoclaw/nanoclaw-architecture.svg",
        alt: "Diagram of NanoClaw: a chat channel reaches a Node host, the agent runs in a container, and a credential gateway holds the API key.",
        caption: "Diagram of the documented host and container. NanoClaw publishes no product UI screenshots. nanocoai/nanoclaw README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "NanoClaw GitHub README",
        sourceUrl: "https://github.com/nanocoai/nanoclaw/blob/main/README.md"
      },
      {
        src: "/images/players/nanoclaw/nanoclaw-uninstall.svg",
        alt: "Diagram of NanoClaw uninstall: one checkout's service and containers are removed, and other checkouts and gateway credentials stay.",
        caption: "Diagram of the documented uninstall and the optional image account. nanocoai/nanoclaw README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "NanoClaw GitHub README",
        sourceUrl: "https://github.com/nanocoai/nanoclaw/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Use Agent Analytics from NanoClaw with the OpenClaw skill path",
      valueProp:
        "NanoClaw follows the same practical path as OpenClaw: install the Agent Analytics skill from ClawHub, let the assistant create or select the project, add tracking, verify events, and read analytics from the chat loop.",
      measurementLoop: [
        "install `clawhub/agent-analytics` in NanoClaw through the same ClawHub skill workflow used for OpenClaw",
        "NanoClaw uses the skill to approve login, create or select the Agent Analytics project, add the tracker, and verify the first useful event",
        "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, or task-completion events to Agent Analytics",
        "a scheduled or chat-driven NanoClaw task fetches the Agent Analytics results and reports what moved users toward value"
      ],
      setupNotes:
        "Use the canonical ClawHub skill, `clawhub/agent-analytics`, rather than a NanoClaw-specific integration. Agent Analytics measures the website, docs, app, or funnel outcomes; it does not replace NanoClaw memory, container logs, chat history, or execution isolation.",
      prompt:
        "Install the Agent Analytics skill for me from ClawHub. Use `clawhub/agent-analytics`, install the regular Agent Analytics skill, and tell me when it is ready to use. Then set up Agent Analytics for this project: create or select the project, add tracking, verify the first useful event arrives, and fetch the last 7 days of visits, sources, CTA clicks, signup, activation, and retention signals.",
      ctaLabel: "Install Agent Analytics skill",
      ctaHref: "https://clawhub.ai/skills/agent-analytics",
      screenshots: nanoClawScreenshots,
      relatedLinks: [
        {
          label: "Agent Analytics on ClawHub",
          href: "https://clawhub.ai/skills/agent-analytics"
        },
        {
          label: "OpenClaw setup article",
          href: "https://blog.agentanalytics.sh/blog/setup-agent-analytics-with-openclaw"
        },
        {
          label: "NanoClaw docs",
          href: "https://docs.nanoclaw.dev/"
        }
      ]
    }
  },
  {
    slug: "hermes", installMethod: "mcp",
    rank: 23,
    title: "Hermes Agent",
    githubRepo: "NousResearch/hermes-agent",
    accent: "emerald",
    mark: {
      kind: "image",
      src: "/logos/hermes.png",
      label: "Hermes Agent logo"
    },
    summary: "An MIT-licensed agent from Nous Research with one conversation loop, a messaging gateway, scheduled jobs, isolated subagents, and MCP servers you connect.",
    note: "The same agent serves the terminal, the gateway, cron, and an editor bridge. Each profile keeps its own home directory.",
    overview: [
      "Hermes Agent is MIT-licensed and built by Nous Research. Linux, macOS, and WSL2 install with the shell script at hermes-agent.nousresearch.com/install.sh. Native Windows uses the PowerShell installer. A Termux package exists for aarch64 Android. After install, hermes opens the terminal UI, hermes model picks a provider, hermes tools chooses tools, and hermes gateway starts messaging. hermes setup walks through configuration. hermes setup --portal signs in to Nous Portal with OAuth and turns on a tool gateway for web search, image generation, speech, and a cloud browser. You can still set keys per tool. Providers include Nous Portal, OpenRouter, OpenAI, and an endpoint you run. hermes model switches provider and model without a code change.",
      "The architecture page shows one AIAgent loop behind several doors: the CLI, the gateway, cron, an ACP adapter for VS Code, Zed, and JetBrains, a batch runner, an API server, and a Python library. A CLI turn builds the prompt, resolves the provider, calls the model, runs tool calls, and stores the session. A gateway message is authorized, mapped to a session, then run through the same loop and delivered back. A cron tick loads due jobs from JSON, starts a fresh agent with no history, injects attached skills, and delivers the reply to a platform. The page lists six built-in terminal backends: local, Docker, SSH, Modal, Daytona, and Vercel Sandbox, plus plugin backends such as Singularity. It lists 70 or more tools in 28 toolsets. Sessions sit in SQLite with FTS5 search.",
      "The README says the gateway is one process for Telegram, Discord, Slack, WhatsApp, Signal, and the CLI, and the architecture page lists more than 25 platform adapters. Subagents are isolated. In Desktop, their provider, model, and limits are set under Settings, Model, Subagents. The docs page for MCP says Hermes connects any MCP server. The dashboard image in the repository shows an MCP page with Add server, one HTTP server, one stdio server, and a catalog with Install buttons. Skills follow the agentskills.io layout. Memory is agent-curated, with nudges to persist it, and past sessions can be searched. A profile started with hermes -p keeps its own HERMES_HOME, config, memory, sessions, and gateway process.",
      "hermes doctor checks the install, and hermes update moves to the current version. hermes setup can import settings, memories, and skills from OpenClaw, Claude Code, Codex, or Cursor, after a preview. API keys move only with --migrate-secrets. The license file is MIT. The sessions and kanban images in the docs assets are sample boards, including a nightly report, a Discord thread, and columns for triage, to do, ready, in progress, blocked, and done."
    ],
    bestFor: [
      "One agent loop behind a terminal, chats, and a schedule",
      "Subagents and terminal backends, including Docker and SSH",
      "MCP servers added from the dashboard or config"
    ],
    tags: [
      "agent runtime",
      "messaging gateway",
      "MCP",
      "skills",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://hermes-agent.nousresearch.com/",
        emphasis: "primary",
      },
      {
        label: "Docs",
        href: "https://hermes-agent.nousresearch.com/docs/",
      },
      {
        label: "GitHub",
        href: "https://github.com/NousResearch/hermes-agent",
      },
      {
        label: "README",
        href: "https://github.com/NousResearch/hermes-agent/blob/main/README.md",
      },
      {
        label: "License",
        href: "https://github.com/NousResearch/hermes-agent/blob/main/LICENSE",
      }
    ],
    screenshots: [
      {
        src: "/images/players/hermes/hermes-sessions.webp",
        alt: "Hermes Agent sessions screen with four sample sessions: Nightly report, a Discord thread, a Telegram standup, and a CLI refactor.",
        caption: "Sessions image from the Hermes docs assets. NousResearch/hermes-agent (website/static/img/dashboard/admin-sessions.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Hermes Agent repository",
        sourceUrl: "https://github.com/NousResearch/hermes-agent/blob/main/website/static/img/dashboard/admin-sessions.png"
      },
      {
        src: "/images/players/hermes/hermes-mcp.webp",
        alt: "Hermes Agent MCP page with Add server, one disabled HTTP server, one stdio server, and a catalog offering Linear and n8n.",
        caption: "MCP dashboard image from the Hermes repository. NousResearch/hermes-agent (website/static/img/dashboard/admin-mcp.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Hermes Agent repository",
        sourceUrl: "https://github.com/NousResearch/hermes-agent/blob/main/website/static/img/dashboard/admin-mcp.png"
      },
      {
        src: "/images/players/hermes/hermes-kanban.webp",
        alt: "Hermes Agent kanban with columns Triage, To do, Ready, In progress, Blocked, and Done, and sample transcription cards.",
        caption: "Kanban image from the Hermes docs assets. NousResearch/hermes-agent kanban tutorial images, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Hermes Agent repository",
        sourceUrl: "https://github.com/NousResearch/hermes-agent/blob/main/website/static/img/kanban-tutorial/07-fleet-transcribes.png"
      },
      {
        src: "/images/players/hermes/hermes-architecture.svg",
        alt: "Diagram of Hermes: CLI, gateway, and cron share one agent loop, with MCP servers added beside it.",
        caption: "Diagram of the documented loop. NousResearch/hermes-agent README and architecture docs, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Hermes Agent README",
        sourceUrl: "https://github.com/NousResearch/hermes-agent/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Use Agent Analytics as a Hermes skill",
      valueProp:
        "The clean Agent Analytics path for Hermes is the skill route. Install the Agent Analytics skill in the environment where Hermes works, then let Hermes use that skill for login, project creation, event reporting, verification, analytics queries, and recurring growth reports.",
      measurementLoop: [
        "install the Agent Analytics skill with `npx skills add agent-analytics/skills`",
        "Hermes follows the skill to approve login, create or select the project, add the tracker, and verify the first event",
        "the changed surface reports visits, sources, install intent, signup, activation, retention, funnel, and experiment events to Agent Analytics",
        "a scheduled Hermes task uses the skill to fetch Agent Analytics results and turn the measured user outcome into the next skill, task, subagent job, or scheduled report"
      ],
      setupNotes:
        "This fits Hermes' skill-centered operating model: Hermes can keep memory, create skills, schedule work, and delegate through subagents while the Agent Analytics skill supplies the product analytics workflow. Agent Analytics measures the user-facing project surface; it does not replace Hermes logs, traces, terminal sessions, or conversation memory.",
      prompt:
        "Install the Agent Analytics skill with `npx skills add agent-analytics/skills`. Then set up Agent Analytics for this project. If approval is needed, send me the approval link and wait. After approval, create or select the project, add event reporting, verify the first event arrives, and create a scheduled Hermes report for visits, sources, install intent, signup, activation, retention, funnel drop-off, and the next improvement.",
      ctaLabel: "Install Agent Analytics skill",
      ctaHref: "https://github.com/Agent-Analytics/skills",
      screenshots: hermesScreenshots,
      relatedLinks: [
        {
          label: "Agent Analytics skill repository",
          href: "https://github.com/Agent-Analytics/skills"
        },
        {
          label: "Skills directory",
          href: "https://skills.sh/"
        },
        {
          label: "Hermes Agent docs",
          href: "https://hermes-agent.nousresearch.com/docs/"
        }
      ]
    }
  },
  {
    slug: "sim", installMethod: "mcp",
    rank: 6,
    title: "Sim",
    githubRepo: "simstudioai/sim",
    accent: "emerald",
    mark: {
      kind: "image",
      src: "/logos/sim.svg",
      label: "Sim logo",
      surface: "dark"
    },
    summary: "An Apache-2.0 workspace for building agent workflows in the browser or a Mac app, then running them on a schedule, as an API, or as MCP tools.",
    note: "Self-hosting starts the published Docker images. The Chat service still uses a key issued by sim.ai.",
    overview: [
      "Sim is an Apache-2.0 workspace for agents and workflows. The repository is a Next.js app on Bun, with PostgreSQL through Drizzle, Better Auth, and a React Flow editor. The hosted app is at sim.ai. On a computer with Node.js 20 or newer and Docker, npx sim-setup creates a small deployment directory, generates secrets, writes .env, and starts the published images with Docker Compose. It does not clone the repository. The app then opens at http://localhost:3000. Inside a clone, bun run sim-setup adds local development and Kubernetes modes. A Mac app for macOS 12 or newer, on Apple silicon and Intel, can point at a self-hosted deployment. Later commands add email, storage, a sandbox, jobs, cache, knowledge, chat, an LLM, or one integration.",
      "The README's platform image shows a chat beside the workflow graph. A typed request becomes blocks: Start, an agent step, and a connector such as a Slack post. The same workspace holds tables, files, and knowledge bases. The tables image is a spreadsheet with CSV import and export. The desktop image puts that chat next to a built-in browser. The README says the product connects 270 or more integrations, with 5,400 or more actions and 520 or more triggers, plus the major LLMs. Local models use the Ollama or vLLM Compose files. npx sim-setup config reports which capabilities are set, without printing secrets.",
      "A deployed workflow runs like an API call. An admin can also put deployed workflows on a workflow MCP server, with API key access or public access. A public server exposes those tools to anyone who has the URL. The other direction is documented too. The CLI page sim mcp-servers says it connects external MCP servers so workflows can use their tools, over streamable HTTP, with no auth, headers, or OAuth. Claude Code, Codex, Claude, and other clients can instead connect to Sim itself. Cloud uses https://mcp.sim.ai/mcp. A self-hosted server uses https://<host>/api/mcp, or SIM_MCP_URL. Those clients can list workspaces, run and deploy workflows, and work with tables, files, knowledge bases, and logs.",
      "Chat is a Sim-managed service. The setup wizard opens a browser sign-in and stores a Chat API key. Keys are managed at sim.ai/selfhost/settings/chat-keys. The README points enterprise controls, including SAML or OIDC single sign-on, SCIM, audit logs, and permission groups that limit models, blocks, and tools, at the enterprise docs, and says the SOC 2 Type II, ISO 27001, and GDPR reports sit in the Trust Center. Those controls are part of the Enterprise plan on Sim Cloud, with a separate self-hosted setup page. The license file is Apache-2.0."
    ],
    bestFor: [
      "A visual workflow next to the chat that created it",
      "Tables, files, and knowledge in the same workspace",
      "A Compose install whose Chat key still comes from sim.ai"
    ],
    tags: [
      "workflows",
      "workspace",
      "MCP",
      "self-hosted",
      "Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://www.sim.ai/",
        emphasis: "primary",
      },
      {
        label: "GitHub",
        href: "https://github.com/simstudioai/sim",
      },
      {
        label: "Docs",
        href: "https://docs.sim.ai/",
      },
      {
        label: "README",
        href: "https://github.com/simstudioai/sim/blob/main/README.md",
      },
      {
        label: "MCP",
        href: "https://docs.sim.ai/mcp/overview",
      },
      {
        label: "License",
        href: "https://github.com/simstudioai/sim/blob/main/LICENSE",
      }
    ],
    screenshots: [
      {
        src: "/images/players/sim/sim-platform.webp",
        alt: "Sim workspace Brightwave: a chat asks to enrich a new lead and post it to #sales, and the graph shows Start, Enrich lead, and Post to #sales.",
        caption: "Platform image from the simstudioai/sim README. Sim GitHub README (apps/sim/public/static/readme-platform.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Sim GitHub README",
        sourceUrl: "https://github.com/simstudioai/sim/blob/main/README.md"
      },
      {
        src: "/images/players/sim/sim-tables.webp",
        alt: "Sim Tables view for a People table, with Import CSV, Export CSV, and rows of names, titles, and companies.",
        caption: "Tables image from the simstudioai/sim README. Sim GitHub README (apps/sim/public/static/readme-tables.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Sim GitHub README",
        sourceUrl: "https://github.com/simstudioai/sim/blob/main/README.md"
      },
      {
        src: "/images/players/sim/sim-desktop.webp",
        alt: "Sim Desktop with a chat on the left and a built-in browser open to Google on the right.",
        caption: "Desktop image from the simstudioai/sim README. Sim GitHub README (apps/sim/public/static/readme-desktop.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Sim GitHub README",
        sourceUrl: "https://github.com/simstudioai/sim/blob/main/README.md"
      },
      {
        src: "/images/players/sim/sim-architecture.svg",
        alt: "Diagram of Sim: a chat request becomes workflow blocks, then runs on a schedule, as an API, or as MCP tools.",
        caption: "Diagram of the documented paths. Sim GitHub README and docs.sim.ai MCP overview, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Sim GitHub README",
        sourceUrl: "https://github.com/simstudioai/sim/blob/main/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection(
      "sim",
      "Sim",
      "Sim builders can publish apps, demos, docs, landing pages, and product journeys. Agent Analytics gives the agent or builder the user path after those workflow-backed surfaces go live.",
      ["a Sim-built app, workflow-backed demo, docs path, or agent-created surface goes live", "the surface reports visits, sources, signup, activation, first value, and retention events to Agent Analytics", "a Sim builder or agent fetches the data and checks activation and drop-off", "the builder compares project surfaces by user movement, not only successful automation runs"],
      "Report events from the public product, docs, demo, or app surfaces connected to Sim-built experiences so builders can evaluate activation and drop-off.",
      "Sim-built app, demo, page, signup, activation event, or product journey",
      simScreenshots
    )
  },
  {
    slug: "culture",
    installMethod: "cli-and-skill",
    rank: 7,
    title: "Culture",
    githubRepo: "agentculture/culture",
    accent: "sky",
    mark: {
      kind: "image",
      label: "Culture logo",
      src: "/logos/culture.png",
      surface: "dark"
    },
    summary: "An Apache-2.0 workspace where people and agents share IRC rooms, and each agent is a harness daemon on a local AgentIRC server.",
    note: "A mention starts one turn, the agent stays connected between turns, and shell access belongs to the coding-agent backend.",
    overview: [
      "Culture is the workspace in agentculture/culture. uv tool install culture installs the CLI, and culture server start runs the local AgentIRC daemon. The quickstart uses Python 3.12 or newer. The default backend is Claude through the Agent SDK, and that path expects ANTHROPIC_API_KEY. culture start launches a harness, and culture peek joins #general as a person. The culture package embeds agentirc, also published as agentirc-cli, so the install still starts a server. The harness package is cultureagent. uv tool install cultureagent installs that harness without the operator CLI and without the IRC daemon.",
      "AgentIRC implements the core of RFC 2812. The layers page shows culture server start on port 6667, with flags for the name and port. Nicks must start with the server name and a hyphen, so a server named spark accepts only spark-*. Rooms are channels. A PRIVMSG that contains @nick also sends a NOTICE to that nick when it is in the channel, and self-mentions are ignored. The first client to join receives operator mode +o. WHO and WHOIS list who is present. Skills are server-side hooks with no nick and no channel of their own. The history skill is on by default, keeps up to 10,000 messages per channel in memory, and answers HISTORY RECENT and HISTORY SEARCH.",
      "Servers link with --link name:host:port:password. Trust full shares channels except those marked +R. Trust restricted shares nothing until both sides set +S for that channel. Presence, membership, messages, and topics sync. Authentication, skill data, and channel operators stay on each server. Each agent is a daemon with an IRC connection, an AI session, and a supervisor. Agents share no state and meet only through IRC. An @mention or a direct message starts a turn, and the session stays up between turns. The daemon buffers the channel. The agent calls irc_read for the backlog. The layers page says the daemon adds IRC, the supervisor, and webhooks, while shell, files, and sub-agents belong to the backend. After two failed corrections the supervisor posts to #alerts and fires a webhook. Named backends are Claude, Codex, Colleague, Copilot, and ACP, including Cline, OpenCode, Kiro, and Gemini.",
      "culture devex adds the verbs explain, overview, and learn. culture secret wraps grant, the secrets tool. The README says culture afi will later be renamed culture contract, and that culture identity, wrapping zehut, is not shipped yet. Agent configuration is ~/.culture/server.yaml. The license is Apache 2.0. CULTURE.DEV is a trademark of Ori Nachum, and the README says that license does not grant the trademark. The README points at the quickstart, the harness guide, and the ecosystem map."
    ],
    bestFor: [
      "IRC rooms where a harness stays connected between mentions",
      "A local AgentIRC server, with an optional link to a second server",
      "Claude, Codex, Copilot, or ACP as the agent backend"
    ],
    tags: [
      "AgentIRC",
      "IRC rooms",
      "harness daemons",
      "federation",
      "Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://culture.dev/",
        emphasis: "primary"
      },
      {
        label: "Quickstart",
        href: "https://culture.dev/quickstart/"
      },
      {
        label: "Architecture layers",
        href: "https://culture.dev/docs/architecture/layers/"
      },
      {
        label: "GitHub",
        href: "https://github.com/agentculture/culture"
      },
      {
        label: "README",
        href: "https://github.com/agentculture/culture/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/agentculture/culture/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/culture/culture-layers.svg",
        alt: "Diagram of Culture AgentIRC: an IRC server, mention routing, server-side skills, optional federation, and one harness daemon per agent.",
        caption: "Diagram of the five documented layers, from the IRC server to the harness. Drawn from the AgentIRC layers page and the agentculture/culture README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Culture architecture layers",
        sourceUrl: "https://culture.dev/docs/architecture/layers/"
      },
      {
        src: "/images/players/culture/culture-mention.svg",
        alt: "Diagram of one Culture turn: a person mentions an agent in a room, the harness prompts the backend, and the reply returns as an IRC message.",
        caption: "Diagram of a mention, the harness, and the supervisor. Drawn from the AgentIRC layers page, retrieved November 13, 2026; not a product screenshot. The culture.dev pages checked for this profile do not publish a product screenshot.",
        sourceName: "Culture architecture layers",
        sourceUrl: "https://culture.dev/docs/architecture/layers/"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Culture-run agent work",
      valueProp: "Culture runs harness daemons that answer mentions in shared IRC rooms. Separately configured product analytics can show the observed user-facing results of a change those agents helped prepare.",
      measurementLoop: [
        "a harness answers a mention in a room, using the coding-agent backend's own shell and files",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Culture integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Culture room activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Culture room activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("culture"),
      screenshots: []
    }
  },
  {
    slug: "cabinet",
    installMethod: "cli-and-skill",
    rank: 8,
    title: "Cabinet",
    githubRepo: "hilash/cabinet",
    featured: true,
    accent: "cyan",
    mark: {
      kind: "image",
      label: "Cabinet logo",
      src: "/logos/cabinet.png"
    },
    summary: "An MIT-licensed knowledge base of markdown files on disk, with a daemon that runs tasks and jobs through local Claude Code or Codex CLI adapters.",
    note: "Each save commits in git, skills can be scoped to one task, and an index.html file in a folder renders inside the page.",
    overview: [
      "Cabinet is the knowledge base in the cabinet repository. npx create-cabinet@latest creates a cabinet and starts it. The UI is http://localhost:4000. The README says the CLI package is cabinetai, and create-cabinet is a wrapper. On first run the CLI downloads a prebuilt app bundle to ~/.cabinet/app/v{version}/. The cabinet directory itself is a folder of markdown files. There is no database. npx cabinetai uninstall removes cached app builds and leaves those directories in place. Node.js 22 or newer is required. Source mode covers macOS, Linux, and Windows. Electron packaging is documented for macOS and Windows.",
      "The app is Next.js, and the daemon is server/cabinet-daemon.ts. npm run dev:all starts both. The README lists the UI on port 4000 and the daemon on port 4100. The daemon handles structured runs, terminal sessions, WebSockets, and the scheduler. Tasks, jobs, and heartbeats go through a provider adapter, with a persisted conversation and a transcript view. A run can override provider, model, and reasoning effort. The README says the current defaults are claude_local for Claude Code and codex_local for Codex CLI. The web terminal stays in the app for direct CLI sessions. Requirements name the Claude Code CLI or the Codex CLI as the supported provider. Skills install from skills.sh or a GitHub repository, attach to an agent, or apply to one task with an @ mention. Jobs use cron. The README's examples are a scout every 6 hours and a weekly report.",
      "Pages are markdown, edited with a Tiptap rich-text view. The README says every save auto-commits, with a diff viewer and restore of any page to an earlier point. Dropping index.html in a folder renders it in an iframe, including a full-screen mode, with no build step. PDFs and CSV files have viewers. Missions break goals into tasks on a Kanban board. People and agents share internal chat channels. Search is Cmd+K across pages. The README ships 20 agent templates, grouped as leadership, product, marketing, engineering, sales and support, analytics, and operations. The first-run wizard asks 5 questions and builds a team from those templates. KB_PASSWORD, when set, puts a password on the UI and API. The session cookie is PBKDF2 over a per-install salt in .cabinet.env. Empty KB_PASSWORD means no auth.",
      "The README says Cabinet sends anonymous telemetry by default: event counts, versions, and platform, and not file contents, paths, prompts, or secrets. CABINET_TELEMETRY_DISABLED=1 turns it off, as does Settings, then Privacy. The license line in the README is MIT. GitHub hilash/cabinet redirects to cabinetai/cabinet, and both URLs resolve to the same repository. The README does not document Cabinet connecting out to MCP servers. The agents it runs are the local Claude Code and Codex CLIs, plus skills."
    ],
    bestFor: [
      "A markdown folder with git history on every save",
      "Scheduled jobs and tasks on local Claude Code or Codex",
      "HTML files and CSV tables rendered inside the knowledge base"
    ],
    tags: [
      "markdown files",
      "local CLIs",
      "git history",
      "scheduled jobs",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://runcabinet.com/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/hilash/cabinet"
      },
      {
        label: "README",
        href: "https://github.com/cabinetai/cabinet/blob/main/README.md"
      },
      {
        label: "CLI reference",
        href: "https://github.com/cabinetai/cabinet/blob/main/docs/CABINETAI.md"
      },
      {
        label: "License",
        href: "https://github.com/cabinetai/cabinet/blob/main/LICENSE"
      },
      {
        label: "Discord",
        href: "https://discord.gg/hJa5TRTbTH"
      }
    ],
    screenshots: [
      {
        src: "/images/players/cabinet/cabinet-knowledge.webp",
        alt: "A frame of the Cabinet demo: a knowledge base sidebar with agents and pages, and a page named flavor-trends that embeds a chart.",
        caption: "Frame of the demo published at runcabinet.com/demo.gif, retrieved November 13, 2026. The chart is sample content inside that demo, not a local runtime test.",
        sourceName: "Cabinet demo",
        sourceUrl: "https://runcabinet.com/demo.gif"
      },
      {
        src: "/images/players/cabinet/cabinet-app.webp",
        alt: "A frame of the Cabinet demo showing an embedded packaging-designer app, with form fields beside a rendered card.",
        caption: "Another frame of runcabinet.com/demo.gif, retrieved November 13, 2026. The README says an index.html file in a folder renders in an iframe. Not a local runtime test.",
        sourceName: "Cabinet demo",
        sourceUrl: "https://runcabinet.com/demo.gif"
      },
      {
        src: "/images/players/cabinet/cabinet-table.webp",
        alt: "A frame of the Cabinet demo showing a campaigns CSV open as a table, with add-row and add-column controls.",
        caption: "Another frame of runcabinet.com/demo.gif, retrieved November 13, 2026. The README says CSV files have a viewer. The rows are sample content in the demo, not a local runtime test.",
        sourceName: "Cabinet demo",
        sourceUrl: "https://runcabinet.com/demo.gif"
      },
      {
        src: "/images/players/cabinet/cabinet-architecture.svg",
        alt: "Diagram of Cabinet: markdown files on disk, a daemon on port 4100, and local Claude Code or Codex adapters.",
        caption: "Diagram of the documented layout: files, daemon, adapters, skills, and jobs. Drawn from the Cabinet README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Cabinet GitHub README",
        sourceUrl: "https://github.com/cabinetai/cabinet/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Cabinet-run agent work",
      valueProp: "Cabinet runs tasks and scheduled jobs through local coding-agent CLIs and writes the results into markdown files. Separately configured product analytics can show the observed user-facing results of a change those files helped prepare.",
      measurementLoop: [
        "a Cabinet job or task runs through a local Claude Code or Codex adapter and writes into the markdown folder",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Cabinet integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Cabinet agent activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Cabinet agent activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("cabinet"),
      screenshots: [],
      relatedLinks: [
        {
          label: "Agent Analytics Cabinet article",
          href: "https://blog.agentanalytics.sh/blog/cabinet-teams-need-end-user-analytics"
        }
      ]
    }
  },
  {
    slug: "dify",
    installMethod: "mcp",
    rank: 9,
    title: "Dify",
    githubRepo: "langgenius/dify",
    accent: "blue",
    mark: {
      kind: "image",
      label: "Dify logo",
      src: "/logos/dify.svg"
    },
    summary: "A workflow and agent studio you run with Docker Compose, where an agent step gets its own sandbox and MCP tools come from HTTP servers.",
    note: "The license is a modified Apache 2.0: multi-tenant hosting needs a commercial license, and one tenant is one workspace.",
    overview: [
      "Dify is the application in langgenius/dify. The README's install is Docker Compose from the docker directory. It asks for at least 2 CPU cores and 4 GiB of RAM, Docker with a running daemon, Docker Compose v2.35.0 or later, and OpenSSL. You copy .env.example to .env, generate a value with openssl rand -hex 32, and set DIFY_AGENT_LOCAL_SANDBOX_AUTH_TOKEN to it. The README says to keep the default COMPOSE_PROFILES for the bundled services. docker compose up -d starts them, and http://localhost/install finishes setup. init_permissions is expected to exit 0. The compose file includes api, worker, web, db_postgres, redis, sandbox, plugin_daemon, and agent_backend. Which services start depends on COMPOSE_PROFILES.",
      "The README describes a visual workflow canvas, a prompt IDE, a RAG pipeline for documents such as PDFs and PPTs, and agents. An agent, in that README, has a sandbox where it runs commands, installs software, and handles files. You can give it skills and connect tools from the Dify Marketplace, from MCP servers, or from your own APIs, then publish it as a chat app or place it as a step in a workflow. The self-hosted agent-node docs say the new Agent node is in beta and on by default in Docker Compose. Inviting the same agent into two nodes still runs each in its own sandbox: files it wrote and tools it installed do not carry into the other run. The same docs say Community Edition file-access controls are not a hardened boundary between mutually untrusted users.",
      "Tools are managed under Integrations, then Tools. Kinds documented there are tool plugins, an imported OpenAPI schema, a workflow published as a tool, and MCP. The MCP section says only HTTP transport is supported. You add a URL, a name, and a server identifier. Dify connects, authorizes if needed, and imports the tools. Dynamic client registration is on by default. A separate page publishes a Dify app as an MCP server. The Access Point URL is off until you enable it, and it contains credentials. Dify Cloud is at cloud.dify.ai.",
      "The LICENSE file calls itself a modified Apache License 2.0 with additional conditions. Operating a multi-tenant environment needs a commercial license from the producer unless Dify authorizes it in writing. The file defines one tenant as one workspace. You may not remove or modify the logo or copyright in the frontend. The file defines the frontend as the web/ directory, or the web image when running with Docker, and says the restriction does not apply to uses that do not involve that frontend. Other terms follow Apache 2.0. The README calls the same text the Dify Open Source License, based on Apache 2.0 with additional conditions. The copyright line names LangGenius, Inc."
    ],
    bestFor: [
      "Workflow and chatflow canvases with an agent step in its own sandbox",
      "HTTP MCP servers imported as tools, or a Dify app published as one",
      "A Compose install on a machine you control, with the license conditions above"
    ],
    tags: [
      "workflows",
      "agent sandbox",
      "MCP",
      "Docker Compose",
      "modified Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://dify.ai/",
        emphasis: "primary"
      },
      {
        label: "Docs",
        href: "https://docs.dify.ai/"
      },
      {
        label: "Self-hosting",
        href: "https://docs.dify.ai/en/self-host/use-dify/build/new-agent/build"
      },
      {
        label: "Tools and MCP",
        href: "https://docs.dify.ai/en/self-host/use-dify/workspace/tools"
      },
      {
        label: "GitHub",
        href: "https://github.com/langgenius/dify"
      },
      {
        label: "README",
        href: "https://github.com/langgenius/dify/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/langgenius/dify/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/dify/dify-workflow.webp",
        alt: "Dify workflow canvas in the light theme, with a node list, an LLM node, and a test-run panel marked running.",
        caption: "Workflow screenshot shipped in langgenius/dify at web/public/screenshots/light/Workflow.png, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Dify GitHub repository",
        sourceUrl: "https://github.com/langgenius/dify/blob/main/web/public/screenshots/light/Workflow.png"
      },
      {
        src: "/images/players/dify/dify-agent.webp",
        alt: "Dify agent configuration with a tool list, including search tools, and a debug preview of a chat.",
        caption: "Agent screenshot shipped in langgenius/dify at web/public/screenshots/light/Agent.png, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Dify GitHub repository",
        sourceUrl: "https://github.com/langgenius/dify/blob/main/web/public/screenshots/light/Agent.png"
      },
      {
        src: "/images/players/dify/dify-chatflow.webp",
        alt: "Dify chatflow canvas with Start, LLM, and Answer nodes, and a preview panel answering a weather question.",
        caption: "Chatflow screenshot shipped in langgenius/dify at web/public/screenshots/light/Chatflow.png, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Dify GitHub repository",
        sourceUrl: "https://github.com/langgenius/dify/blob/main/web/public/screenshots/light/Chatflow.png"
      },
      {
        src: "/images/players/dify/dify-architecture.svg",
        alt: "Diagram of Dify: a workflow canvas, an agent sandbox that does not carry files into the next run, and HTTP MCP tools.",
        caption: "Diagram of the documented path from canvas to sandbox to MCP. Drawn from the Dify README, the tools docs, and the LICENSE file, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Dify tools docs",
        sourceUrl: "https://docs.dify.ai/en/self-host/use-dify/workspace/tools"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Dify-run agent work",
      valueProp: "Dify runs workflow and agent steps, including an agent in its own sandbox. Separately configured product analytics can show the observed user-facing results of a change those steps helped prepare.",
      measurementLoop: [
        "a Dify workflow runs an agent step in its sandbox, or a chatflow answers from the canvas",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Dify integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Dify workflow activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Dify workflow activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("dify"),
      screenshots: []
    }
  },
  {
    slug: "flowise",
    installMethod: "mcp",
    rank: 10,
    title: "Flowise",
    githubRepo: "FlowiseAI/Flowise",
    accent: "mint",
    mark: {
      kind: "image",
      label: "Flowise logo",
      src: "/logos/flowise.png"
    },
    summary: "An Apache-2.0 visual builder for agent flows whose GitHub repository was archived on August 13, 2026, and whose canvas connects agents to external MCP servers.",
    note: "npm install -g flowise and npx flowise start open the app on port 3000. The archive discussion says new pull requests are no longer accepted.",
    overview: [
      "Flowise is the repository FlowiseAI/Flowise. The GitHub API reports the repository archived, with the last push on August 13, 2026. Discussion 6727, posted that day by HenryHengZJ, says feature development stopped on July 29, 2026, the repository moves to a public archive, issues and pull requests lock, and npm packages and Docker images will be marked deprecated. It sets August 31, 2026 as the end of official core-team presence in Discord and GitHub. The discussion says the source stays on GitHub under Apache 2.0 and invites forks. LICENSE.md is the Apache License 2.0. On November 13, 2026, npm view flowise reported version 3.1.4 and an empty deprecated field.",
      "The README install is Node.js 20 or newer, npm install -g flowise, then npx flowise start, then http://localhost:3000. Docker Compose uses the docker folder: copy .env.example to .env and run docker compose up -d. The repository is a pnpm workspace with server (the API), ui (the React app), and components (integration nodes). api-documentation generates Swagger from the server. The README still links to docs at docs.flowiseai.com and to Flowise Cloud at flowiseai.com. Deployment notes in the README name AWS, Azure, GCP, DigitalOcean, Railway, Render, and Hugging Face Spaces among other hosts.",
      "Agentflow V2 is the documented canvas for multi-step agents. Its node reference lists Start, LLM, Agent, Tool, Retriever, HTTP, Condition, Condition Agent, Iteration, Loop, Human Input, Direct Reply, Custom Function, and Execute Flow. The Agent node lets the model choose a tool. The Tool node runs the one tool selected on the canvas, with arguments taken from an earlier node, from flow state, or from a fixed value. Human Input stops the flow until a person replies. Nodes read and write $flow.state. Execute Flow starts another saved flow. The README gif, images/flowise_agentflow.gif, shows a Start node, an intention step, and several agent nodes on one canvas. assets/Demo.png shows a canvas titled Customer Refund, with a node palette and a true/false branch.",
      "The tools and MCP tutorial says Flowise can connect to MCP servers instead of only its built-in tools. Custom MCP is the client for a server you choose. Transports on that page are stdio for a local process and streamable HTTP for a remote URL. The GitHub remote example stores a personal access token in a Flowise variable and puts the URL and headers on the agent. Refresh Available Actions loads that server's tools. Prebuilt nodes such as Browserless MCP and Pipedream MCP use the same refresh step after a credential is connected. The tutorial also documents custom JavaScript tools, attached to an Agent node or run directly from a Tool node."
    ],
    bestFor: [
      "An Agentflow canvas with agent, tool, condition, and human-input nodes",
      "Custom MCP over stdio or streamable HTTP, with the server's actions refreshed into the agent",
      "A local Node or Docker install of the archived Apache-2.0 source"
    ],
    tags: [
      "visual builder",
      "Agentflow",
      "MCP",
      "archived",
      "Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://flowiseai.com/",
        emphasis: "primary"
      },
      {
        label: "Docs",
        href: "https://docs.flowiseai.com/"
      },
      {
        label: "Tools and MCP",
        href: "https://docs.flowiseai.com/tutorials/tools-and-mcp"
      },
      {
        label: "Agentflow",
        href: "https://docs.flowiseai.com/using-flowise/agentflowv2"
      },
      {
        label: "GitHub",
        href: "https://github.com/FlowiseAI/Flowise"
      },
      {
        label: "README",
        href: "https://github.com/FlowiseAI/Flowise/blob/main/README.md"
      },
      {
        label: "Archive discussion",
        href: "https://github.com/FlowiseAI/Flowise/discussions/6727"
      },
      {
        label: "License",
        href: "https://github.com/FlowiseAI/Flowise/blob/main/LICENSE.md"
      }
    ],
    screenshots: [
      {
        src: "/images/players/flowise/flowise-agentflow.webp",
        alt: "A frame of the Flowise agentflow animation: a Start node, a Detect User Intention step, and agent nodes on a dark canvas.",
        caption: "One frame of images/flowise_agentflow.gif in FlowiseAI/Flowise, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Flowise GitHub README",
        sourceUrl: "https://github.com/FlowiseAI/Flowise/blob/main/README.md"
      },
      {
        src: "/images/players/flowise/flowise-canvas.webp",
        alt: "The Flowise Demo.png canvas titled Customer Refund, with an email trigger, a classification step, and a true or false branch.",
        caption: "assets/Demo.png from FlowiseAI/Flowise, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Flowise GitHub repository",
        sourceUrl: "https://github.com/FlowiseAI/Flowise/blob/main/assets/Demo.png"
      },
      {
        src: "/images/players/flowise/flowise-architecture.svg",
        alt: "Diagram of a Flowise Agentflow: Start, an agent or tool node, a branch or human input, and Custom MCP.",
        caption: "Diagram of the documented Agentflow and Custom MCP path. Drawn from the Flowise docs and README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Flowise tools and MCP",
        sourceUrl: "https://docs.flowiseai.com/tutorials/tools-and-mcp"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Flowise-run agent work",
      valueProp: "Flowise runs agent flows on a canvas, including tools from MCP servers you connect. Separately configured product analytics can show the observed user-facing results of a change those flows helped prepare.",
      measurementLoop: [
        "a Flowise agent flow runs, including any Custom MCP tools attached to the agent",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Flowise integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Flowise flow activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Flowise flow activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("flowise"),
      screenshots: []
    }
  },
  {
    slug: "multica",
    installMethod: "mcp",
    rank: 11,
    title: "Multica",
    githubRepo: "multica-ai/multica",
    visibility: "not-open-important",
    accent: "cyan",
    mark: {
      kind: "image",
      label: "Multica logo",
      src: "/logos/multica.svg"
    },
    summary: "A source-available issue board where a daemon on your machine runs coding-agent CLIs, and MCP servers are assigned to each agent.",
    note: "Finished work waits in review. A hosted instance for users outside your organization needs a commercial license, even if you do not charge.",
    overview: [
      "Multica is the workspace in multica-ai/multica. The README says it drives agent CLIs you already installed and signed in to, and that the current source supports 31. The table includes Claude Code, Codex, Cursor Agent, GitHub Copilot, and OpenCode. Multica does not ship a model. A runtime is any machine the daemon runs on. The desktop app registers the computer it is installed on. On the web you open Team, then Runtimes, choose other machine, and paste the two commands it shows. Creating an agent picks that runtime, a provider, and a name. Assigning the agent to an issue makes it pick the work up, comment as it goes, and move the issue to review.",
      "The README's stack is Next.js 16, Electron, an Expo client for iPhone and iPad that builds from source and is not on the App Store, a Go API using Chi, sqlc, and WebSockets, and PostgreSQL 17. The daemon talks to the API over WebSocket and spawns the CLI next to the repository. Self-hosting is curl of scripts/install.sh with --with-server, then multica setup self-host. That path pulls images from GHCR and requires Docker. A self-hosted API sends one anonymous deployment snapshot a day. DO_NOT_TRACK=1 on the API turns it off. Cloud signup is at multica.ai. Desktop builds are at multica.ai/download. Git hosts named in the README are GitHub, GitLab, Gitea, and Forgejo.",
      "MCP is on the create-an-agent docs. An agent's MCP tab lists servers that belong to that agent, servers from the workspace library, and the coding tool's own configuration on the runtime machine. Adding a server takes a stdio command or a streamable HTTP URL, in a form or as JSON. An owner or admin can add one shared server under Settings, then MCP servers, and assign it per agent. The CLI forms are multica workspace mcp add and multica agent mcp add. The daemon docs say that once an agent has an MCP configuration, Multica writes a file for that run and merges the tool's user-level servers. On a name clash, the Multica-managed server wins. Skills are playbooks attached to agents.",
      "The LICENSE file is the Multica License: the full Apache License 2.0 text, plus additional conditions. The producer is Index Labs (Hong Kong) Limited. Without a commercial license you may not use the source to host Multica for third parties, or to embed it in a product that is sold, licensed, or otherwise commercially distributed to third parties. The file says that includes a public instance for users outside your organization, even when you do not charge. Internal use inside one organization, including several workspaces, does not. Without a written branding waiver you may not remove the Multica logo, product name, or copyright from the documented UI packages."
    ],
    bestFor: [
      "Issues assigned to coding-agent CLIs on a machine you control",
      "MCP servers added per agent, or shared from the workspace library",
      "A self-hosted board whose license limits third-party hosting"
    ],
    tags: [
      "issue board",
      "coding agents",
      "MCP",
      "daemon",
      "source-available"
    ],
    links: [
      {
        label: "Website",
        href: "https://multica.ai/",
        emphasis: "primary"
      },
      {
        label: "Docs",
        href: "https://multica.ai/docs"
      },
      {
        label: "Agents and MCP",
        href: "https://multica.ai/docs/agents-create"
      },
      {
        label: "Self-hosting",
        href: "https://github.com/multica-ai/multica/blob/main/SELF_HOSTING.md"
      },
      {
        label: "GitHub",
        href: "https://github.com/multica-ai/multica"
      },
      {
        label: "README",
        href: "https://github.com/multica-ai/multica/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/multica-ai/multica/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/multica/multica-issues.webp",
        alt: "The Multica issues board with Todo, In Progress, and In Review columns, and agent avatars on several cards.",
        caption: "Board image from the multica-ai/multica README (apps/docs/public/images/docs/workspace-overview.webp), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Multica GitHub README",
        sourceUrl: "https://github.com/multica-ai/multica/blob/main/README.md"
      },
      {
        src: "/images/players/multica/multica-issue.webp",
        alt: "A Multica issue in review: the Frontend agent opened a pull request, mentioned Reviewer, and the side panel shows spend and tokens.",
        caption: "Issue image from the multica-ai/multica README (docs/assets/readme/issue.webp), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Multica GitHub README",
        sourceUrl: "https://github.com/multica-ai/multica/blob/main/README.md"
      },
      {
        src: "/images/players/multica/multica-run.webp",
        alt: "A Multica run transcript for the Builder agent, listing file edits and a bash step whose go test output is visible.",
        caption: "Run image from the multica-ai/multica README (docs/assets/readme/run.webp), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Multica GitHub README",
        sourceUrl: "https://github.com/multica-ai/multica/blob/main/README.md"
      },
      {
        src: "/images/players/multica/multica-architecture.svg",
        alt: "Diagram of Multica: an assigned issue reaches a daemon on your machine, which runs a coding-agent CLI, with MCP servers per agent.",
        caption: "Diagram of issue assignment, the daemon, and MCP. Drawn from the Multica README and the agent docs, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Multica agent docs",
        sourceUrl: "https://multica.ai/docs/agents-create"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Multica-run agent work",
      valueProp: "Multica assigns issues to coding agents that run on a machine you control. Separately configured product analytics can show the observed user-facing results of a change a person accepts from review.",
      measurementLoop: [
        "an agent picks up an assigned issue, runs on the daemon, and leaves the result in review",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Multica integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Multica agent activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Multica agent activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("multica"),
      screenshots: []
    }
  },
  {
    slug: "orca",
    installMethod: "mcp",
    rank: 12,
    title: "Orca",
    githubRepo: "stablyai/orca",
    accent: "amber",
    mark: {
      kind: "image",
      label: "Orca logo",
      src: "/logos/orca.svg",
      surface: "dark"
    },
    summary: "An MIT-licensed desktop app that runs coding-agent CLIs in separate git worktrees, with supervised tasks, workers, and decision gates.",
    note: "MCP endpoints are registered under Settings, then Integrations, then MCP, and the tools show up in agent CLIs that support them.",
    overview: [
      "Orca is the app in stablyai/orca. The README says the license is MIT. Install is a dmg for Apple Silicon or Intel, a Windows exe, or a Linux AppImage, from orca.dev/download or the GitHub release assets. Homebrew is brew install --cask stablyai/orca/orca. The README warns that the bare cask name orca is an unrelated Plotly cask. The AUR package named in the README is stably-orca-bin. The current site is orca.dev. www.onorca.dev redirects there. The iOS app on the App Store is listed as Orca IDE. Android is an APK at orca.dev/download/android. Named CLIs include Claude Code, Codex, Grok, Cursor, GitHub Copilot, and OpenCode.",
      "Each agent works in a git worktree. The create-worktree image in the README shows a project, a machine to run on, and an agent such as Claude Code. The ways-to-run docs cover this computer, an SSH host, and a per-worktree cloud VM, so the agents can keep running when the laptop sleeps. The phone app pairs with the desktop, can notify you when an agent is waiting, and can send a reply. Diff review is a note on a changed line, sent back to the agent. The README also documents drafting a commit and a pull request from the diff, and sending a failing check back to the agent.",
      "Orchestration is documented as experimental. The docs say to turn it on under Settings, then Experimental, and that the panel switch is temporarily unavailable. orca status --json should succeed first. orca orchestration run and run-stop do nothing and point at orca skills get orchestration --full. A Run is a namespace and an inbox, and it does not place workers. A task has a spec, dependencies, and a status of pending, ready, dispatched, completed, failed, or blocked. A dispatch is one attempt of a task on a terminal. worker_done is sent once, with outcome succeeded or failed, and it includes the task id and the dispatch id. A decision gate blocks a task until someone resolves it. A worker asks with orca orchestration ask. Nested helper workers default to depth 4. Heartbeats default to 5 minutes, and settings allow 1 to 60.",
      "Skills install with npx skills add from the stablyai/orca repository. The skills page says a usual setup installs orca-cli, computer-use, and orchestration. orca skills get NAME --full prints the guide that matches the running app, so the flags come from the binary rather than from a stale file. The same page documents MCP: register endpoints under Settings, then Integrations, then MCP, and those tools appear inside agent CLIs that support MCP. Computer use, in the README, drives desktop apps and browsers when there is no CLI. What Orca itself collects is documented at orca.dev/docs/telemetry."
    ],
    bestFor: [
      "Parallel coding-agent CLIs, each in its own git worktree",
      "A supervised Run with tasks, dispatches, and decision gates",
      "MCP servers registered in settings for the CLIs that support them"
    ],
    tags: [
      "coding agents",
      "worktrees",
      "MCP",
      "desktop",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://orca.dev/",
        emphasis: "primary"
      },
      {
        label: "Orchestration",
        href: "https://orca.dev/docs/cli/orchestration"
      },
      {
        label: "Skills and MCP",
        href: "https://orca.dev/docs/cli/skills"
      },
      {
        label: "GitHub",
        href: "https://github.com/stablyai/orca"
      },
      {
        label: "README",
        href: "https://github.com/stablyai/orca/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/stablyai/orca/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/orca/orca-desktop.webp",
        alt: "The Orca desktop app with a project sidebar, a coordinator chat, a worker pane, and the mobile app over the corner.",
        caption: "README hero from stablyai/orca (docs/assets/readme-hero.jpg), retrieved November 13, 2026; not a local runtime test. The image is a sample workspace.",
        sourceName: "Orca GitHub README",
        sourceUrl: "https://github.com/stablyai/orca/blob/main/README.md"
      },
      {
        src: "/images/players/orca/orca-worktree.webp",
        alt: "The Orca create-worktree dialog, with a project, a machine named mac-mini, and Claude Code selected as the agent.",
        caption: "Worktree image from the stablyai/orca README (docs/assets/readme-features/parallel-worktrees.poster.jpg), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Orca GitHub README",
        sourceUrl: "https://github.com/stablyai/orca/blob/main/README.md"
      },
      {
        src: "/images/players/orca/orca-orchestration.webp",
        alt: "An Orca coordinator chat reporting updates from workers named tax-rules and promo-tests, with several worktrees listed in the sidebar.",
        caption: "Orchestration image from the stablyai/orca README (docs/assets/readme-features/orchestration.poster.jpg), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Orca GitHub README",
        sourceUrl: "https://github.com/stablyai/orca/blob/main/README.md"
      },
      {
        src: "/images/players/orca/orca-architecture.svg",
        alt: "Diagram of Orca: a git worktree, a Run of tasks and dispatches, a decision gate, and MCP settings.",
        caption: "Diagram of worktrees, supervised runs, and MCP registration. Drawn from the Orca README and the orchestration and skills docs, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Orca orchestration docs",
        sourceUrl: "https://orca.dev/docs/cli/orchestration"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Orca-run agent work",
      valueProp: "Orca runs coding agents in separate git worktrees and can track them as tasks in a Run. Separately configured product analytics can show the observed user-facing results of a change a person ships from that work.",
      measurementLoop: [
        "agents work in separate git worktrees, and a supervised worker reports worker_done for its task",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Orca integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Orca agent activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Orca agent activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("orca"),
      screenshots: []
    }
  },
  {
    slug: "gastown",
    installMethod: "cli-and-skill",
    rank: 13,
    title: "Gas Town",
    githubRepo: "gastownhall/gastown",
    accent: "orange",
    mark: {
      kind: "monogram",
      label: "Gas Town monogram",
      value: "GT"
    },
    summary: "An MIT-licensed workspace manager that runs coding-agent sessions across rigs, with work state stored in git-backed beads.",
    note: "A polecat finishes with gt done, and the Refinery merges through a queue. That agent does not push to main itself.",
    overview: [
      "Gas Town is the gt command in gastownhall/gastown. The GitHub user steveyegge/gastown redirects there. The README's Go install line is still go install github.com/steveyegge/gastown/cmd/gt@latest, and the macOS source steps still clone github.com/steveyegge/gastown. On macOS, brew install gastown installs gt, bd, and dolt together. The README says to avoid a plain go install of gt on macOS because Gatekeeper kills the unsigned binary. Linux and Windows install gt and bd with go install after Dolt is installed separately. Native Windows is described as CLI-only, and full tmux workflows belong in WSL. Git 2.20 or newer is required, and tmux 3.0 or newer is required for the long-lived roles. gt install ~/gt --shell --git creates the town. gt up starts Dolt, the daemon, the Deacon, the Mayor, and the per-rig Witness and Refinery sessions.",
      "A rig wraps one git repository. gt rig add NAME URL clones it. gt crew add NAME --rig RIG creates the personal workspace inside that rig. The Mayor is the coordinator session, a Claude Code instance by default. gt mayor attach opens it. Polecats are workers with a persistent identity and a session that ends when the task ends. Hooks are the git worktrees that keep the working files across a restart. Beads, the bd command, store the issues. An id looks like gt-abc12 or hq-x7k2m. The README uses bead and issue for the same record. gt sling ID RIG assigns one to an agent. Molecules are instances of TOML formulas, created with bd mol pour. Each rig has a Witness that watches its polecats. The Deacon patrols every rig. Dogs are the maintenance workers the Deacon dispatches.",
      "gt done is how a polecat finishes. The README says the branch is pushed and an MR bead is created. The Refinery batches pending merge requests, runs verification on the stacked result, and merges the batch to main when it is green. When it is red, the Refinery bisects to isolate the failing request and still merges the ones that pass. The README calls this a Bors-style queue and says polecats never push directly to main. Scheduler max_polecats defaults to -1, which dispatches on gt sling immediately. A positive value makes the daemon wait for a free slot. gt escalate sends a blocker at CRITICAL, HIGH, or MEDIUM through the Deacon, then the Mayor, then the Overseer. gt dashboard serves a one-page web view, default port 8080, and it has to be started from the town directory. Runtime presets named in the README are claude, gemini, codex, kiro, cursor, auggie, amp, opencode, copilot, pi, and omp. The license file is MIT.",
      "The README does not publish a product screenshot, and it does not document an MCP client. The agents are the coding-agent CLIs named above, started inside tmux."
    ],
    bestFor: [
      "Several coding-agent CLIs coordinated from one town directory",
      "Git worktrees and beads that keep work after a session ends",
      "A Refinery queue that merges to main after its own verification"
    ],
    tags: [
      "coding agents",
      "git worktrees",
      "beads",
      "merge queue",
      "MIT"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/gastownhall/gastown",
        emphasis: "primary"
      },
      {
        label: "README",
        href: "https://github.com/gastownhall/gastown/blob/main/README.md"
      },
      {
        label: "Molecules",
        href: "https://github.com/gastownhall/gastown/blob/main/docs/concepts/molecules.md"
      },
      {
        label: "License",
        href: "https://github.com/gastownhall/gastown/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/gastown/gastown-workspace.svg",
        alt: "Diagram of a Gas Town workspace: the town directory, the Mayor, a rig with polecats in git worktrees, and beads.",
        caption: "Diagram of the town, rigs, and witnesses. Drawn from the gastownhall/gastown README, retrieved November 13, 2026; not a product screenshot. That README does not publish a product screenshot.",
        sourceName: "Gas Town GitHub README",
        sourceUrl: "https://github.com/gastownhall/gastown/blob/main/README.md"
      },
      {
        src: "/images/players/gastown/gastown-refinery.svg",
        alt: "Diagram of the Gas Town Refinery: gt done pushes a branch, the queue verifies a batch, and a red batch is bisected.",
        caption: "Diagram of the merge queue described in the README. Drawn from the gastownhall/gastown README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Gas Town GitHub README",
        sourceUrl: "https://github.com/gastownhall/gastown/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Gas Town-run agent work",
      valueProp: "Gas Town runs coding agents in a town of rigs and merges their branches through the Refinery. Separately configured product analytics can show the observed user-facing results of a change that queue merged.",
      measurementLoop: [
        "a polecat works a bead in its own git worktree and finishes with gt done",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Gas Town integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Gas Town agent activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Gas Town agent activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("gastown"),
      screenshots: []
    }
  },
  {
    slug: "swarmclaw",
    installMethod: "mcp",
    rank: 14,
    title: "SwarmClaw",
    githubRepo: "swarmclawai/swarmclaw",
    accent: "emerald",
    mark: {
      kind: "image",
      label: "SwarmClaw logo",
      src: "/logos/swarmclaw.png"
    },
    summary: "An MIT-licensed self-hosted runtime on port 3456 where agents delegate work, call MCP servers, and run on schedules.",
    note: "A board task can carry ordered review, approval, and verification stages, and a required stage blocks completion.",
    overview: [
      "SwarmClaw is the server in swarmclawai/swarmclaw. The license is MIT. npm i -g @swarmclawai/swarmclaw and then swarmclaw serve http://localhost:3456. The npm version checked on November 13, 2026 is 1.9.39, the same number as the README's current highlights heading. Node.js 22.6 or newer and npm 10 or newer are required. A Docker Compose checkout also opens port 3456 after docker compose up -d --build. Desktop installers for macOS, Windows, and Linux are linked from swarmclaw.ai/downloads. The README says the desktop app stores data in the operating system app-data directory, separate from a CLI or Docker install.",
      "The provider list in the README includes the Claude Code, Codex, OpenCode, Gemini, Copilot, Cursor Agent, Qwen Code, and Goose CLIs, API providers such as Anthropic, OpenAI, OpenRouter, Google, Ollama, and LM Studio, plus OpenClaw and Hermes Agent. Delegation targets are Claude Code, Codex, OpenCode, Gemini CLI, Cursor Agent, Qwen Code, and native SwarmClaw subagents. The org-chart screenshot shows a coordinator connected to worker agents. Each agent has its own provider, model, tool set, and the personality text the README calls a soul. MCP servers connect over stdio, SSE, or streamable HTTP. The README says you configure, test, and assign them per agent from the MCP Servers panel, and that their tools are added beside the built-ins. Connectors named there include Discord, Slack, Telegram, WhatsApp, Teams, Matrix, email, and local file queues.",
      "The v1.9.11 section says operators can attach ordered review, approval, and verification stages to a board task. The task stores executionPolicy and executionPolicyState. A PUT to /api/tasks/:id returns 409 when a required stage is still waiting or has requested changes, and the task keeps its previous status. The CLI swarmclaw tasks execution-policy-decision records approve, request-changes, or reset. The tasks screenshot in the repository shows Queued, Running, and Completed columns and an Approval Required card. Schedules store lastDeliveryStatus and lastDeliveryError. The v1.9.39 notes say a scheduled run whose provider needs an API key fails immediately when no credential resolves, instead of failing later on a 401, and that a schedule still pinned to an old workspace root is rebound to the current WORKSPACE_DIR. Heartbeats, background jobs, and supervisor recovery are listed as the autonomy features. Structured sessions are bounded multi-agent runs with branches, repeat loops, parallel branches, and joins.",
      "OpenClaw is a separate path in the same README. A SwarmClaw agent can use a named OpenClaw gateway profile, the control plane can deploy an official OpenClaw image locally, on a VPS, or over SSH, and OpenClaw SKILL.md files import into SwarmClaw's skill list. openclaw skills install swarmclaw is the install line for that skill. A conversation-to-skill draft turns a chat into a skill that waits for a person to approve it into the library."
    ],
    bestFor: [
      "A local control plane for several agents, each with its own model and tools",
      "MCP servers assigned per agent over stdio, SSE, or streamable HTTP",
      "Task stages and schedules that record whether the work actually finished"
    ],
    tags: [
      "self-hosted",
      "MCP",
      "delegation",
      "schedules",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://www.swarmclaw.ai/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/swarmclawai/swarmclaw"
      },
      {
        label: "README",
        href: "https://github.com/swarmclawai/swarmclaw/blob/main/README.md"
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@swarmclawai/swarmclaw"
      },
      {
        label: "License",
        href: "https://github.com/swarmclawai/swarmclaw/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/swarmclaw/swarmclaw-org-chart.webp",
        alt: "The SwarmClaw org chart with a CEO coordinator connected to a Researcher and a Developer, and MCP Servers in the sidebar.",
        caption: "Org chart from the swarmclawai/swarmclaw README (doc/assets/screenshots/org-chart.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "SwarmClaw GitHub README",
        sourceUrl: "https://github.com/swarmclawai/swarmclaw/blob/main/README.md"
      },
      {
        src: "/images/players/swarmclaw/swarmclaw-chat.webp",
        alt: "A SwarmClaw CEO chat listing tool calls marked done, including file steps, under a Delegates label.",
        caption: "Agent chat from the swarmclawai/swarmclaw README (doc/assets/screenshots/agent-chat.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "SwarmClaw GitHub README",
        sourceUrl: "https://github.com/swarmclawai/swarmclaw/blob/main/README.md"
      },
      {
        src: "/images/players/swarmclaw/swarmclaw-tasks.webp",
        alt: "The SwarmClaw task board with Queued, Running, and Completed columns, and an Approval Required card with Approve and Reject.",
        caption: "Task board from swarmclawai/swarmclaw (public/screenshots/tasks.png), retrieved November 13, 2026; not a local runtime test. The README's v1.9.11 notes describe approval stages that can block completion.",
        sourceName: "SwarmClaw GitHub repository",
        sourceUrl: "https://github.com/swarmclawai/swarmclaw/blob/main/public/screenshots/tasks.png"
      },
      {
        src: "/images/players/swarmclaw/swarmclaw-architecture.svg",
        alt: "Diagram of SwarmClaw: a coordinator, task stages that can block completion, per-agent MCP, and delegation to coding-agent CLIs.",
        caption: "Diagram of delegation, task stages, and MCP. Drawn from the swarmclawai/swarmclaw README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "SwarmClaw GitHub README",
        sourceUrl: "https://github.com/swarmclawai/swarmclaw/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from SwarmClaw-run agent work",
      valueProp: "SwarmClaw runs delegated and scheduled agent work on a server you host. Separately configured product analytics can show the observed user-facing results of a change those agents helped prepare.",
      measurementLoop: [
        "an agent delegates work or a schedule runs, and any required task stage is recorded before completion",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native SwarmClaw integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report SwarmClaw agent activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat SwarmClaw agent activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("swarmclaw"),
      screenshots: []
    }
  },
  {
    slug: "agno",
    installMethod: "mcp",
    rank: 16,
    title: "Agno",
    githubRepo: "agno-agi/agno",
    accent: "blue",
    mark: {
      kind: "image",
      label: "Agno logo",
      src: "/logos/agno.png"
    },
    summary: "An Apache-2.0 Python platform that runs agents, teams, and workflows as services on AgentOS, and connects those agents to MCP servers.",
    note: "The same agents are reachable over REST, over the MCP server AgentOS exposes, or through a chat interface such as Slack.",
    overview: [
      "Agno is the library and service layer in agno-agi/agno. The license linked from the README is Apache 2.0. Setup in that README is a prompt for a coding agent: clone a template, such as agno-agi/agentos-docker or agentos-railway, and follow the setup-platform skill in .agents/skills. The skill runs the platform locally. You then connect it to os.agno.com. The README says that setup produces an API server, an MCP server, PostgreSQL for conversations, memory, and platform activity, an OS Manager, Claude and Codex engineers for the codebase, skills for building and evaluating agents, and a Company workspace with a maintenance routine.",
      "You build agents with the Agno SDK or, the README says, with the Claude Agent or Codex SDKs, then combine them into teams and workflows. Teams delegate and collaborate. Workflows use routing, conditions, loops, and parallel steps. Memory keeps a user across sessions, and knowledge answers from data you add. A human-approval step holds a sensitive action until a person continues the run. Schedules run agents, teams, and workflows on a timer. Durable execution stores background jobs and their status across a restart. The security overview covers authentication, roles, and per-user data isolation. Coding-agent docs say Claude and Codex can run in sandboxes to implement and test changes. Company OS is the layer for products, projects, tasks, and recurring routines. The README says people set direction and review results, and agents execute. Telemetry sends one event per agent. The README says prompts, messages, and outputs are not included. AGNO_TELEMETRY=false turns it off.",
      "Connecting out to MCP servers is documented at docs.agno.com/tools/mcp/overview. The install line on that page is uv pip install with the mcp extra, plus the model packages you import. MCPTools takes a command for a local stdio server, or a URL for streamable HTTP. The page says standalone SSE is deprecated in Agno v3.0.4 and will be removed in a later release. One MCPTools instance is one server. include_tools and exclude_tools select from the tools the server reports. Outside AgentOS, connect() and close() are the lifecycle the page recommends. Inside AgentOS the runtime opens and closes the client, and refresh_connection can check the session before each run. The introduction table states the same idea in one line: tools and integrations connect agents to APIs, databases, and MCP servers.",
      "The other MCP direction is AgentOS itself. The README says your agents are available to your product through the REST API, to Claude and ChatGPT through the MCP server, and to chat apps such as Slack through Agno Interfaces. You run that platform in your own cloud. os.agno.com is the control UI the README names for conversations, traces, knowledge, and activity. The public repository does not ship a screenshot of that UI."
    ],
    bestFor: [
      "Agents, teams, and workflows served from AgentOS on your own cloud",
      "MCPTools connections to stdio and streamable HTTP servers",
      "REST, an MCP server, or a chat interface in front of the same agents"
    ],
    tags: [
      "AgentOS",
      "MCP",
      "workflows",
      "teams",
      "Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://agno.com/",
        emphasis: "primary"
      },
      {
        label: "Docs",
        href: "https://docs.agno.com/introduction"
      },
      {
        label: "MCP",
        href: "https://docs.agno.com/tools/mcp/overview"
      },
      {
        label: "GitHub",
        href: "https://github.com/agno-agi/agno"
      },
      {
        label: "README",
        href: "https://github.com/agno-agi/agno/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/agno-agi/agno/blob/main/LICENSE"
      },
      {
        label: "PyPI",
        href: "https://pypi.org/project/agno/"
      }
    ],
    screenshots: [
      {
        src: "/images/players/agno/agno-platform.svg",
        alt: "Diagram of Agno: agents and workflows run on AgentOS, with REST, MCP, and chat as the three ways to call them.",
        caption: "Diagram of AgentOS and its callers. Drawn from the agno-agi/agno README, retrieved November 13, 2026; not a product screenshot. The repository does not publish an AgentOS UI screenshot.",
        sourceName: "Agno GitHub README",
        sourceUrl: "https://github.com/agno-agi/agno/blob/main/README.md"
      },
      {
        src: "/images/players/agno/agno-mcp.svg",
        alt: "Diagram of Agno MCPTools: a stdio command or a streamable HTTP URL connects an agent to an MCP server.",
        caption: "Diagram of MCPTools. Drawn from the Agno MCP docs, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Agno MCP docs",
        sourceUrl: "https://docs.agno.com/tools/mcp/overview"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Agno-run agent work",
      valueProp: "Agno runs agents, teams, and workflows as services on AgentOS. Separately configured product analytics can show the observed user-facing results of a change those runs helped prepare.",
      measurementLoop: [
        "an Agno agent, team, or workflow runs, including any MCP tools attached to the agent",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Agno integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Agno agent activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Agno agent activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("agno"),
      screenshots: []
    }
  },
  {
    slug: "agent-office-suite",
    installMethod: "mcp",
    rank: 21,
    title: "Agent Office Suite",
    githubRepo: "manpoai/AgentOfficeSuite",
    accent: "sky",
    mark: {
      kind: "image",
      label: "Agent Office Suite logo",
      src: "/logos/agent-office-suite.png"
    },
    summary: "An Apache-2.0 local office suite where agents edit the same docs, databases, slides, flowcharts, canvas, and video as the people in the workspace, through an MCP server.",
    note: "A person approves each agent registration, and the suite stores a version snapshot before that agent edits.",
    overview: [
      "Agent Office Suite, also called AOSE in its README, is the project in manpoai/AgentOfficeSuite. The default branch is master, and the license is Apache 2.0. The latest GitHub release listed on November 13, 2026 is v3.3.0, published June 3, 2026. npx aose-main downloads the runtime from GitHub releases, creates ~/.aose/, and starts the service. The shell listens on http://localhost:3000 and the gateway on http://localhost:4000. The README's recommended setup is the suite and the agents on the same machine, so the agent uses the local gateway with no extra URL. npm install -g aose-main adds aose start, status, stop, and update. The global command and npx share ~/.aose/. npm updates the bootstrap package, and aose update updates the runtime. www.agentofficesuite.com redirects to modory.app/aose.",
      "Agents connect through the MCP server started with npx aose-mcp. The README's current list is Claude Code, Codex CLI, Gemini CLI, OpenClaw, and Zylos. The person copies an onboarding prompt into the agent, the agent sends a registration request, and a person approves it in the suite before it can edit. After that, @agent in a comment notifies the agent with the anchor and a snippet of nearby content. The agent can reply in the comment and edit the file. If the agent is on another machine, you expose port 3000 yourself with a tunnel or a reverse proxy. The README says the suite does not bundle one. On the agent machine, npx aose-mcp set-url stores the gateway URL, and npx aose-mcp show-config prints it. The README also says the same agent can keep its existing chat in Telegram, Lark, or Slack, and that those channels stay in sync with the comments.",
      "The editors are docs, databases, slides, flowcharts, canvas, and video. The README's feature table gives docs 19 content blocks and 9 inline styles, databases 20 field types and 4 views (grid, kanban, gallery, and form), flowcharts 24 node shapes and 4 edge styles, and video an MP4 or WebM export through ffmpeg.wasm. Slides export PPTX. Canvas can export a frame as PNG or SVG. People use the browser editors. Agents use the MCP tools. Both write the same object. Before an agent edit on any of those six types, the suite stores a version snapshot attributed to that agent, with a timestamp. History can be previewed and restored. Comments can anchor to a text selection, an image, a table row, a slide element, a flowchart node or edge, a canvas element or page, or a video element. Search covers titles and body text with FTS5.The connection is the suite's own MCP server, which the external agents call. For an agent host you cannot shell into, the README says to edit that agent's mcpServers block, then run npx aose-mcp set-url."
    ],
    bestFor: [
      "Docs, databases, slides, flowcharts, canvas, and video in one local workspace",
      "Agents connected through the AOSE MCP server after a person approves them",
      "A version snapshot stored before each agent edit, with restore"
    ],
    tags: [
      "office suite",
      "MCP",
      "version history",
      "local",
      "Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://modory.app/aose",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/manpoai/AgentOfficeSuite"
      },
      {
        label: "README",
        href: "https://github.com/manpoai/AgentOfficeSuite/blob/master/README.md"
      },
      {
        label: "Release v3.3.0",
        href: "https://github.com/manpoai/AgentOfficeSuite/releases/tag/v3.3.0"
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/aose-main"
      },
      {
        label: "Manpo X",
        href: "https://x.com/manpo_wang"
      },
      {
        label: "License",
        href: "https://github.com/manpoai/AgentOfficeSuite/blob/master/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/agent-office-suite/agent-office-suite-document.webp",
        alt: "The AOSE document editor open on a Welcome page, with a comment thread that mentions agents, beside a phone chat.",
        caption: "README figure from manpoai/AgentOfficeSuite (docs/figure2.jpg on master), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Agent Office Suite GitHub README",
        sourceUrl: "https://github.com/manpoai/AgentOfficeSuite/blob/master/README.md"
      },
      {
        src: "/images/players/agent-office-suite/agent-office-suite-editors.webp",
        alt: "A grid of AOSE editors: a document, a video timeline, a database grid, a slide, and a flowchart.",
        caption: "README figure from manpoai/AgentOfficeSuite (docs/figure3.jpg on master), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Agent Office Suite GitHub README",
        sourceUrl: "https://github.com/manpoai/AgentOfficeSuite/blob/master/README.md"
      },
      {
        src: "/images/players/agent-office-suite/agent-office-suite-history.webp",
        alt: "The AOSE version history panel previewing an older flowchart, with Restore this version and a list of agent edits.",
        caption: "README figure from manpoai/AgentOfficeSuite (docs/figure4.jpg on master), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Agent Office Suite GitHub README",
        sourceUrl: "https://github.com/manpoai/AgentOfficeSuite/blob/master/README.md"
      },
      {
        src: "/images/players/agent-office-suite/agent-office-suite-architecture.svg",
        alt: "Diagram of AOSE: a local workspace, an MCP server, approval of an agent, and a snapshot before an edit.",
        caption: "Diagram of the local gateway, the MCP connection, and version history. Drawn from the AgentOfficeSuite README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Agent Office Suite GitHub README",
        sourceUrl: "https://github.com/manpoai/AgentOfficeSuite/blob/master/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Agent Office Suite-run agent work",
      valueProp: "Agent Office Suite lets approved agents edit the same office files as the people in the workspace. Separately configured product analytics can show the observed user-facing results of a change those files helped prepare.",
      measurementLoop: [
        "an approved agent edits a document, database, slide, flowchart, canvas, or video, after a version snapshot is stored",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Agent Office Suite integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Agent Office Suite edit activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Agent Office Suite edit activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("agent-office-suite"),
      screenshots: []
    }
  },
  {
    slug: "mastra", installMethod: "mcp",
    rank: 17,
    title: "Mastra",
    githubRepo: "mastra-ai/mastra",
    accent: "mint",
    mark: {
      kind: "image",
      src: "/logos/mastra.svg",
      label: "Mastra logo"
    },
    summary:
      "An Apache-2.0 TypeScript framework for agents and graph workflows, with Studio on localhost:4111, suspend and resume, and both an MCP client and an MCP server.",
    note:
      "Core code is Apache-2.0. Any ee/ directory is source-available under the Mastra Enterprise License.",
    overview: [
      "Mastra is a TypeScript framework for AI applications and agents. The README says it can sit inside React, Next.js, or Node, or run as a standalone server. The recommended start is npm create mastra@latest, which creates a project, installs Mastra skills for detected coding assistants, and initializes Git when appropriate. After that, npm run dev opens Mastra Studio at http://localhost:4111. The README describes Studio as the interface for building, testing, and managing agents, workflows, and tools. Model routing is documented as one interface over providers including OpenAI, Anthropic, and Gemini.",
      "An agent uses an LLM and tools, reasons about a goal, and iterates until the model emits a final answer or an optional stopping condition is met. When the order of work should be explicit, a workflow graph uses .then(), .branch(), and .parallel(). Human-in-the-loop suspends an agent or a workflow until a person provides input or approval. Storage remembers the execution state, so the run can pause and later resume from that point. Context tools named in the README are conversation history, retrieval from APIs, databases, and files, and Observational Memory. Evals and observability are part of the same repository.",
      "MCP is documented in two directions. MCPClient connects an agent to external MCP servers, over a local command or a remote URL, and passes those tools into an Agent. MCPServer exposes Mastra agents, tools, workflows, prompts, and resources to other MCP clients. The docs say both speak the MCP 2026-07-28 revision over stdio and Streamable HTTP. For some hosted servers, Mastra platform Connect can hold the OAuth flow so tools() returns the server's tools without a hand-built MCPClient. The license split is in LICENSE.md: Apache-2.0 for the core framework, and the Mastra Enterprise License for code under any ee/ directory, which the README says can be used for development and testing and needs an enterprise license for production. The README's alternate starter prompt asks for a project name and one provider, openai, anthropic, google, or xai, then runs npm create mastra@latest with that provider flag. Pull requests are limited to collaborators. The public request path the README names is a high-quality issue, and local test steps are in DEVELOPMENT.md. The npm package is @mastra/core.",
    ],
    bestFor: [
      "TypeScript agents that call tools until a stopping condition",
      "Workflow graphs with suspend, resume, and stored execution state",
      "An app that both consumes external MCP servers and publishes its own",
    ],
    tags: ["TypeScript", "workflows", "MCP client", "Studio", "Apache-2.0"],
    links: [
      { label: "Website", href: "https://mastra.ai/", emphasis: "primary" },
      { label: "Docs", href: "https://mastra.ai/docs" },
      { label: "MCP", href: "https://mastra.ai/docs/tools-mcp/mcp-overview" },
      { label: "GitHub", href: "https://github.com/mastra-ai/mastra" },
      { label: "README", href: "https://github.com/mastra-ai/mastra/blob/main/README.md" },
      { label: "License", href: "https://github.com/mastra-ai/mastra/blob/main/LICENSE.md" },
      { label: "npm", href: "https://www.npmjs.com/package/@mastra/core" },
    ],
    screenshots: [
      {
        src: "/images/players/mastra/mastra-studio-graph.webp",
        alt: "Mastra Studio knowledge view: a page tree beside a graph centered on a workspace node, with colored page clusters.",
        caption: "Studio knowledge graph from the mastra-ai/mastra docs (docs/static/img/knowledge/studio-tree-and-graph.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Mastra docs",
        sourceUrl: "https://github.com/mastra-ai/mastra/blob/main/docs/static/img/knowledge/studio-tree-and-graph.png"
      },
      {
        src: "/images/players/mastra/mastra-studio-focus.webp",
        alt: "Mastra Studio graph focus on a Research page, with a legend for child pages, parent scope, and links in and out.",
        caption: "Studio graph focus from the mastra-ai/mastra docs (docs/static/img/knowledge/studio-graph-focus.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Mastra docs",
        sourceUrl: "https://github.com/mastra-ai/mastra/blob/main/docs/static/img/knowledge/studio-graph-focus.png"
      },
      {
        src: "/images/players/mastra/mastra-experiments.webp",
        alt: "Mastra Studio Experiments page for a Baseline run, with five dataset rows, a refund-correctness scorer, and a pipeline sidebar.",
        caption: "Studio experiment results from the mastra-ai/mastra guide image docs/static/img/guides/build-an-eval-loop/experiment-results.png, retrieved November 13, 2026; not a local runtime test. The guide uses this as an example eval run.",
        sourceName: "Mastra eval guide",
        sourceUrl: "https://github.com/mastra-ai/mastra/blob/main/docs/static/img/guides/build-an-eval-loop/experiment-results.png"
      },
      {
        src: "/images/players/mastra/mastra-architecture.svg",
        alt: "Diagram of Mastra: an agent loops on tools, a workflow uses then, branch, and parallel, storage suspends for a person, and MCPClient and MCPServer point opposite ways.",
        caption: "Diagram of the documented split between agents, workflows, suspend and resume, and MCP. Drawn from the mastra-ai/mastra README and the MCP overview, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Mastra docs",
        sourceUrl: "https://mastra.ai/docs/tools-mcp/mcp-overview"
      },
    ],
    agentAnalytics: agentAnalyticsSection(
      "mastra",
      "Mastra",
      "Mastra builders ship TypeScript agents and workflows into real apps, docs, demos, onboarding, and support surfaces. Agent Analytics gives those workflows user-facing outcome data after the change lands.",
      ["a Mastra-backed builder changes a page, docs flow, onboarding path, app surface, demo, or support surface", "the changed surface reports visits, sources, signup, install intent, setup start, first workflow run, report viewed, or task completed events to Agent Analytics", "a Mastra workflow or builder fetches the Agent Analytics event data", "the workflow creates the next improvement task from user-facing results"],
      "Instrument the TypeScript app, docs, demo, or product surface where Mastra helps builders ship change. Agent Analytics reads the reported surface events; it is not a replacement for Mastra logs or traces.",
      "Mastra-built app, traffic source, signup, install intent, first workflow run, report viewed, or task completed event",
      []
    )
  },
  {
    slug: "openwork", installMethod: "mcp",
    rank: 24,
    title: "OpenWork",
    githubRepo: "different-ai/openwork",
    accent: "violet",
    mark: {
      kind: "image",
      src: "/logos/openwork.svg",
      label: "OpenWork logo"
    },
    summary:
      "A desktop app on OpenCode for macOS, Windows, and Linux, MIT outside ee/, where agents work on local files and shared skills and MCP servers can be reused from other clients.",
    note:
      "OpenWork Den, the org control plane under ee/, is source-available under the OpenWork EE License, not the MIT terms that cover the desktop app.",
    overview: [
      "OpenWork is a desktop app for macOS, Windows, and Linux. The README says it is built on OpenCode, works with a model from your own API key, a ChatGPT sign-in, or a local model through Ollama or an OpenAI-compatible server, and can share skills and MCP servers. The desktop app is optional. The same assigned skills, plugins, MCP connections, Google Workspace, and Microsoft 365 capabilities can be reached by adding the OpenWork MCP to Codex, Claude Code, Cursor, or OpenCode. That remote server is https://api.openworklabs.com/mcp/agent. It exposes search_capabilities, execute_capability, list_skills, and get_skill. After the client adds it, a browser opens so you can sign in and choose an organization.",
      "The published desktop screenshot shows Work and Personal workspaces, a session that plans a CSV summary, and the spreadsheet open beside the chat. The model picker screenshot lists pinned, recent, and per-provider models, including Anthropic, OpenAI, Google, and an Ollama model, plus an effort control. Files stay on the machine unless you turn cloud on. The README says no OpenWork account is required for local use. Contributor setup pins Node 24 and pnpm 11. pnpm dev launches the Electron app. pnpm dev:worktree gives a second checkout its own profile, CDP port, and Vite port.",
      "The repository layout puts the React UI, the Electron shell, and openwork-server under apps/, shared packages under packages/, and Den under ee/. Contributor pull requests branch from dev. Coding agents are told to drive the app in headless Chrome instead of opening the Electron window. Licensing is split by directory. Everything outside ee/ is MIT, including the desktop app and packages/. Everything under ee/ is OpenWork Den, the org control plane, MCP gateway, and inference, under the OpenWork EE License. The README says production use of ee/ requires an OpenWork subscription, except that it is free for organizations with up to 5 users, free to evaluate for 30 days at any size, and free for development and testing. Each ee/ release converts to MIT two years after publication. Versions from before this license stay FSL-1.1-MIT. The Den screenshot in the README is the organization screen at app.openworklabs.com, with navigation for connections, extensions, models, members, and analytics.",
    ],
    bestFor: [
      "An OpenCode desktop session on local files, with your own model key",
      "Sharing skills and MCP servers with Codex, Claude Code, Cursor, or OpenCode",
      "A team control plane whose ee/ tree is under a separate license",
    ],
    tags: ["OpenCode", "desktop", "MCP", "MIT", "local files"],
    links: [
      { label: "Website", href: "https://openworklabs.com/", emphasis: "primary" },
      { label: "Docs", href: "https://openworklabs.com/docs/start-here/get-started" },
      { label: "GitHub", href: "https://github.com/different-ai/openwork" },
      { label: "README", href: "https://github.com/different-ai/openwork/blob/dev/README.md" },
      { label: "License", href: "https://github.com/different-ai/openwork/blob/dev/LICENSE" },
      { label: "EE license", href: "https://github.com/different-ai/openwork/blob/dev/ee/LICENSE" },
      { label: "OpenWork Orchestrator npm", href: "https://www.npmjs.com/package/openwork-orchestrator" },
    ],
    screenshots: [
      {
        src: "/images/players/openwork/openwork-desktop.webp",
        alt: "OpenWork desktop with Work and Personal workspaces, a session planning a customer CSV summary, and the spreadsheet open on the right.",
        caption: "OpenWork desktop from the different-ai/openwork README (GitHub user attachment 66a8dd9b-5260-488c-957d-e54331e78c1c), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "OpenWork GitHub README",
        sourceUrl: "https://github.com/different-ai/openwork/blob/dev/README.md"
      },
      {
        src: "/images/players/openwork/openwork-model-picker.webp",
        alt: "OpenWork composer with the model picker open: pinned Claude Sonnet, GPT, Gemini, and an Ollama Llama model, plus an effort control.",
        caption: "Model picker from the different-ai/openwork README (docs/images/model-picker.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "OpenWork GitHub README",
        sourceUrl: "https://github.com/different-ai/openwork/blob/dev/docs/images/model-picker.png"
      },
      {
        src: "/images/players/openwork/openwork-den.webp",
        alt: "OpenWork Den in a browser at app.openworklabs.com, on the Analytics page for an organization named Different AI, with navigation for connections, extensions, models, and members.",
        caption: "OpenWork Den from the different-ai/openwork README (GitHub user attachment 033dbbfe-5661-4f7c-869c-46278406d6cc), retrieved November 13, 2026; not a local runtime test. The numbers on the page are the project's published screenshot, not measurements from this listing.",
        sourceName: "OpenWork GitHub README",
        sourceUrl: "https://github.com/different-ai/openwork/blob/dev/README.md"
      },
      {
        src: "/images/players/openwork/openwork-architecture.svg",
        alt: "Diagram of OpenWork: a desktop app, an OpenCode runtime, and an MCP server that exposes search, execute, and skill tools.",
        caption: "Diagram of the documented desktop, OpenCode runtime, and remote MCP. Drawn from the different-ai/openwork README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "OpenWork GitHub README",
        sourceUrl: "https://github.com/different-ai/openwork/blob/dev/README.md"
      },
    ],
    agentAnalytics: agentAnalyticsSection(
      "openwork",
      "OpenWork",
      "OpenWork teams can share repeatable agent setups for browser tasks, outreach, reporting, and internal workflows. Agent Analytics measures whether the customer-facing pages, product paths, and docs those workflows change actually move users.",
      ["a builder or operator uses OpenWork to run or share a browser task, scheduled workflow, onboarding change, docs update, or product experiment", "the affected website, docs path, signup flow, or app surface reports visits, sources, CTA clicks, signup, activation, retention, or task-completion events to Agent Analytics", "an OpenWork session or follow-up agent fetches the Agent Analytics results after the workflow ships", "the team updates the shared OpenWork setup from measured user behavior instead of only internal task output"],
      "OpenWork already exposes this in the Skills UI. In OpenWork, open `Skills`, find `Install from OpenPackage`, paste `gh@agent-analytics/skills`, and click `Install`. That installs the Agent Analytics package into the current workspace; if the list does not update immediately, click `Refresh` and confirm the new skills appear under `Installed skills`. The current package installs both `agent-analytics` and `agent-analytics-autoresearch`. If you prefer OpenWork's share-link flow instead of the package installer, their `Importing an existing skill with a share URL` guide is still the fallback path.",
      "OpenWork-managed page, docs path, traffic source, CTA click, signup, activation event, retention signal, or workflow outcome",
      [],
      [
        {
          label: "OpenWork docs",
          href: "https://openworklabs.com/docs/start-here/get-started"
        },
        {
          label: "OpenWork import-a-skill help",
          href: "https://openworklabs.com/docs/start-here/do-work-with-it/import-a-skill#importing-an-existing-skill-with-a-share-url"
        },
        {
          label: "OpenWork share site",
          href: "https://share.openworklabs.com/"
        },
        {
          label: "Agent Analytics skill repo",
          href: "https://github.com/Agent-Analytics/skills"
        }
      ]
    )
  },
  {
    slug: "sandcastle", installMethod: "cli-and-skill",
    rank: 25,
    title: "Sandcastle",
    githubRepo: "mattpocock/sandcastle",
    accent: "amber",
    mark: {
      kind: "image",
      src: "/logos/sandcastle.png",
      label: "Sandcastle logo"
    },
    summary:
      "An MIT TypeScript library and CLI that runs Claude Code, Codex, Pi, Copilot, Cursor, or OpenCode inside a sandbox and merges the commits back.",
    note:
      "The guides document shell-running coding agents and branch strategies. They do not document an MCP client.",
    overview: [
      "Sandcastle is an MIT-licensed package, @ai-hero/sandcastle. One run() call creates a sandbox and invokes an agent inside it. You pass an agent provider and a sandbox provider. Shipped agent providers are claudeCode(), codex(), pi(), copilot(), cursor(), and opencode(), each taking a model string and optional provider options such as effort or permissionMode. Shipped sandboxes are Bubblewrap on Linux and WSL2, Seatbelt on macOS 14 or later, Docker, Podman, Daytona, E2B, Fly.io Sprites, Modal, and Vercel, plus a way to write your own. A no-sandbox provider runs the agent on the host with no sandbox at all. Native sandboxes are the local default because they need no image and no daemon. The agent then uses tools already installed on the host.",
      "A branch strategy decides where commits land, and it is an argument to run(), not a setting stored on the provider. head writes the host checkout directly and is the default for bind-mount providers such as Docker. merge-to-head creates a temporary branch in a git worktree, merges it back, and deletes the temp branch unless the agent left commits or the merge itself failed, in which case HEAD is left unchanged and the temp branch is kept. branch puts commits on a branch you name, in a worktree, and reuses that worktree on the next run with the same name. For bind-mount providers the worktree is mounted into the container. The repo .git is mounted too, with config, hooks, and program-running repo config kept read-only or ignored by the git commands Sandcastle itself runs. Git commands you run later in that repo are outside that protection.",
      "Install is npm install --save-dev @ai-hero/sandcastle, then npx @ai-hero/sandcastle init. Init scaffolds a .sandcastle directory, lists the OS native sandbox first, and checks that it works. You copy .sandcastle/.env.example to .sandcastle/.env and set CLAUDE_CODE_OAUTH_TOKEN, from claude setup-token, or ANTHROPIC_API_KEY. A native sandbox hides the host's stored logins, so the agent authenticates only through those variables. One iteration is one start-to-exit pass. maxIterations raises the loop. AFK runs pass --dangerously-skip-permissions unless permissionMode replaces it. The result object lists iterations, commit shas, and the branch. Hooks can run on the host or in the sandbox while it starts, and a prompt can be a string or a file with placeholders.",
    ],
    bestFor: [
      "A TypeScript run() around one coding agent in a sandbox",
      "head, merge-to-head, or named-branch worktrees",
      "Local Bubblewrap or Seatbelt, or a Docker, Podman, or cloud sandbox",
    ],
    tags: ["TypeScript", "sandboxes", "git worktrees", "coding agents", "MIT"],
    links: [
      { label: "GitHub", href: "https://github.com/mattpocock/sandcastle", emphasis: "primary" },
      { label: "Docs", href: "https://www.aihero.dev/sandcastle" },
      { label: "README", href: "https://github.com/mattpocock/sandcastle/blob/main/README.md" },
      { label: "Branch strategies", href: "https://github.com/mattpocock/sandcastle/blob/main/docs/guide/branch-strategies.md" },
      { label: "npm", href: "https://www.npmjs.com/package/@ai-hero/sandcastle" },
      { label: "License", href: "https://github.com/mattpocock/sandcastle/blob/main/LICENSE" },
    ],
    screenshots: [
      {
        src: "/images/players/sandcastle/sandcastle-architecture.svg",
        alt: "Diagram of Sandcastle run(): an agent provider, a sandbox provider, and one iteration that returns commit shas.",
        caption: "Diagram of run(), the shipped agent and sandbox providers, and init. Drawn from the mattpocock/sandcastle README and docs/guide, retrieved November 13, 2026; not a product screenshot. The README publishes a wordmark.",
        sourceName: "Sandcastle docs",
        sourceUrl: "https://github.com/mattpocock/sandcastle/blob/main/docs/guide/core-concepts.md"
      },
      {
        src: "/images/players/sandcastle/sandcastle-branches.svg",
        alt: "Diagram of Sandcastle branch strategies: head writes the checkout, merge-to-head uses a temp branch, and branch uses a named worktree.",
        caption: "Diagram of the three branch strategies and the git mount limits. Drawn from docs/guide/branch-strategies.md, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Sandcastle branch strategies",
        sourceUrl: "https://github.com/mattpocock/sandcastle/blob/main/docs/guide/branch-strategies.md"
      },
    ],
    agentAnalytics: agentAnalyticsSection(
      "sandcastle",
      "Sandcastle",
      "Sandcastle can run coding agents in isolated sandboxes and merge their commits back into a project. Agent Analytics measures whether the shipped change improved the user-facing surface after that agent work lands.",
      ["a Sandcastle run asks Claude Code, Codex, OpenCode, or another coding agent to change a website, docs flow, onboarding path, app surface, demo, or experiment", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, or task-completion events to Agent Analytics", "a follow-up Sandcastle run or developer agent fetches Agent Analytics results after deployment", "the next sandboxed run is scoped from measured user outcomes instead of only code-level completion"],
      "Instrument the deployed surface affected by Sandcastle-managed commits. Agent Analytics reads product and web events after the branch ships; it does not replace Sandcastle logs, sandbox traces, branch state, or provider output.",
      "Sandcastle-managed page, docs path, traffic source, CTA click, signup, activation event, retention signal, or shipped experiment",
      []
    )
  },
  {
    slug: "oh-my-codex", installMethod: "cli-and-skill",
    rank: 26,
    title: "oh-my-codex",
    githubRepo: "Yeachan-Heo/oh-my-codex",
    accent: "amber",
    mark: {
      kind: "image",
      src: "/logos/oh-my-codex.png",
      label: "oh-my-codex logo",
      surface: "dark"
    },
    summary:
      "An MIT workflow layer around the OpenAI Codex CLI: skills, hooks, AGENTS.md, and state under .omx/, with Codex still doing the execution.",
    note:
      "The recommended path is macOS or Linux with the Codex CLI. Native Windows and the Codex App are documented as less supported.",
    overview: [
      "oh-my-codex, also called OMX, is an MIT-licensed npm package, oh-my-codex, for people who already run OpenAI Codex CLI. It does not replace Codex. Codex remains the process that edits the repo. OMX adds prompts, skills, native Codex hooks, a HUD, and durable files under .omx/ for plans, logs, memory, and mode state. Requirements in the README are Node.js 20 or newer, a codex binary on PATH, and Codex auth in that same shell. Install is npm install -g oh-my-codex. If Codex is not installed yet, the README says to install @openai/codex separately. It says not to combine that with a Homebrew-owned codex binary, because npm can fail with EEXIST. Setup is omx setup --scope project --merge-agents from the git project that should own AGENTS.md, or omx setup --scope user when you are not preparing the current directory as an OMX project. omx doctor checks files, hooks, and runtime prerequisites. The execution smoke test is omx exec after codex login status.",
      "The README's default chain is $deep-interview, then $ralplan, then $ultragoal. $autopilot is the orchestrator for that chain, and each stage can still be invoked alone when its inputs already exist. $deep-interview writes requirements and does not implement. $ralplan plans against that artifact. $ultragoal is the execution lane, with checkpoints under .omx/ultragoal. $team is for coordinated parallel work inside a story, and team workers use dedicated git worktrees by default. omx mission runs a checklist of prompts one after another through omx exec, with summary.json and ledger.jsonl under .omx/missions/. A normal launch owns one writable session pointer. A second launch in the same checkout fails unless you set a distinct OMX_ROOT.",
      "--madmax is shorthand for Codex --dangerously-bypass-approvals-and-sandbox. The README says to use it only in a trusted repository, and to prefer a named --worktree so the session is not in the current checkout. --worktree is consumed by OMX and is not forwarded to Codex. --high and --xhigh set model_reasoning_effort. On macOS or Linux, an interactive terminal with tmux starts the leader in detached tmux so HUD panes can be recovered. --direct skips OMX tmux and HUD management. The Codex plugin at plugins/oh-my-codex bundles skills plus optional MCP compatibility servers and apps. Those MCP servers and apps are disabled by default, and the plugin still calls the installed omx CLI. The README does not document OMX as a client that attaches arbitrary external MCP servers. State, skills, and shell execution through Codex are the documented path.",
    ],
    bestFor: [
      "A Codex CLI session with plans, skills, and state under .omx/",
      "A deep-interview, ralplan, then ultragoal chain, with $team for parallel lanes",
      "Named git worktrees when more than one --madmax session is running",
    ],
    tags: ["Codex CLI", "skills", "worktrees", ".omx", "MIT"],
    links: [
      { label: "GitHub", href: "https://github.com/Yeachan-Heo/oh-my-codex", emphasis: "primary" },
      { label: "Website", href: "https://yeachan-heo.github.io/oh-my-codex-website/" },
      { label: "README", href: "https://github.com/Yeachan-Heo/oh-my-codex/blob/main/README.md" },
      { label: "npm", href: "https://www.npmjs.com/package/oh-my-codex" },
      { label: "License", href: "https://github.com/Yeachan-Heo/oh-my-codex/blob/main/LICENSE" },
    ],
    screenshots: [
      {
        src: "/images/players/oh-my-codex/oh-my-codex-architecture.svg",
        alt: "Diagram of oh-my-codex: install beside Codex CLI, project or user setup, and state under .omx/.",
        caption: "Diagram of install, setup scope, and .omx state. Drawn from the Yeachan-Heo/oh-my-codex README, retrieved November 13, 2026; not a product screenshot. The README's picture is a character drawing, not the command surface.",
        sourceName: "oh-my-codex README",
        sourceUrl: "https://github.com/Yeachan-Heo/oh-my-codex/blob/main/README.md"
      },
      {
        src: "/images/players/oh-my-codex/oh-my-codex-workflow.svg",
        alt: "Diagram of the OMX chain: deep-interview, ralplan, ultragoal, and team, plus the doctor and exec checks.",
        caption: "Diagram of the documented $autopilot chain and the smoke test. Drawn from the Yeachan-Heo/oh-my-codex README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "oh-my-codex README",
        sourceUrl: "https://github.com/Yeachan-Heo/oh-my-codex/blob/main/README.md"
      },
    ],
    agentAnalytics: agentAnalyticsSection(
      "oh-my-codex",
      "oh-my-codex",
      "oh-my-codex helps Codex users plan, route, and complete agent work through repeatable workflows. Agent Analytics measures whether the shipped website, docs, onboarding, or product changes from those workflows actually move users.",
      ["an OMX workflow uses `$deep-interview`, `$ralplan`, `$team`, or `$ralph` to plan and ship a website, docs, onboarding, product, demo, or growth change", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, or task-completion events to Agent Analytics", "a follow-up Codex or OMX session fetches Agent Analytics results after deployment", "the next OMX plan is scoped from measured user outcomes instead of only terminal/task completion"],
      "Install the Agent Analytics skill into the same Codex/OMX working environment and instrument the deployed surface affected by OMX-managed work. Agent Analytics reads product and web events after the change ships; it does not replace OMX plans, logs, hooks, HUD state, or Codex execution traces.",
      "OMX-managed page, docs path, traffic source, CTA click, signup, activation event, retention signal, or shipped experiment",
      []
    )
  },
  {
    slug: "narranexus", installMethod: "mcp",
    rank: 27,
    title: "NarraNexus",
    githubRepo: "NetMindAI-Open/NarraNexus",
    accent: "cyan",
    mark: {
      kind: "monogram",
      value: "NN",
      label: "NarraNexus monogram"
    },
    summary:
      "An Apache-2.0 agent team workspace from NetMind.AI where each agent keeps a storyline, an identity, a relationship graph, and its own skills and MCP tools.",
    note:
      "Memory is scoped. An agent, a user, a storyline, a team, or global are separate, and sharing goes through a governed channel.",
    overview: [
      "NarraNexus is an Apache-2.0 project in NetMindAI-Open/NarraNexus. The README describes agents that keep a persistent identity, a long-term memory organized as storylines, their own tools, and relationships with people and other agents. Agents can @mention each other over MessageBus, create rooms, split work, and hand tasks off. Narrative memory is not only a vector dump of chat: conversations and events sit on storylines, and an old conclusion that new facts overturn is marked invalid while its history stays. Awareness holds identity, responsibilities, preferences, and boundaries across sessions. Social Network stores counterparts so a follow-up can differ for a teammate, a client, or someone else the agent has dealt with.",
      "Every memory has a scope: agent, user, storyline, team, or global. The README says walls are the default and sharing goes through governed channels. Skills and MCP services are installed per agent, so one agent's tools are not automatically every agent's tools. The published chat screenshot shows a named agent, a tool-call trace, and a runtime panel with initialization, narrative selection, module loading, and a bash step. The control panel screenshot, from a local run.sh style screen, lists a frontend on port 5173, a backend on port 8000, API docs, a DB proxy on 8100, and services named MCP Server, Module Poller, Job Trigger, Bus Trigger, and Lark Trigger.",
      "Three starts are documented. Cloud sign-up is at agent.narra.nexus. The macOS app is a dmg from GitHub releases and bundles its own runtime, so the README says you do not install Python, Node, or Docker for that path. From source, git clone and bash run.sh check prerequisites and launch local services. Local and desktop runs need your own LLM API key. The cloud path has a trial quota. The README's templates include a six-agent financial morning briefing, a four-agent KOL assistant, and a PM bridge bot with separate internal and client knowledge bases. The memory image is one frame of the README's product-tour gif, which the README labels as the memory timeline, the relationship graph, and a per-agent worldview. The README's limitations section says agents need corrections, that storing more text is not the point of the memory design, that a team needs explicit boundaries, and that local runs need an API key.",
    ],
    bestFor: [
      "Agents that keep storylines and mark overturned conclusions invalid",
      "Per-agent skills and MCP tools, with scoped memory",
      "Cloud sign-up, a macOS dmg, or bash run.sh from the repository",
    ],
    tags: ["Apache-2.0", "memory", "MessageBus", "MCP", "multi-agent"],
    links: [
      { label: "GitHub", href: "https://github.com/NetMindAI-Open/NarraNexus", emphasis: "primary" },
      { label: "Docs", href: "https://www.narra.nexus/docs/getting-started/quick-start" },
      { label: "Portal", href: "https://www.narra.nexus/" },
      { label: "README", href: "https://github.com/NetMindAI-Open/NarraNexus/blob/main/README.md" },
      { label: "License", href: "https://github.com/NetMindAI-Open/NarraNexus/blob/main/LICENSE" },
      { label: "Cloud", href: "https://agent.narra.nexus/login" },
    ],
    screenshots: [
      {
        src: "/images/players/narranexus/narranexus-chat.webp",
        alt: "NarraNexus chat with an agent named Mundo, a tool-call trace, and a runtime panel listing initialization, narrative selection, module loading, and a bash step.",
        caption: "NarraNexus interface from the NetMindAI-Open/NarraNexus README (docs/images/Interface.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "NarraNexus GitHub README",
        sourceUrl: "https://github.com/NetMindAI-Open/NarraNexus/blob/main/docs/images/Interface.png"
      },
      {
        src: "/images/players/narranexus/narranexus-control-panel.webp",
        alt: "NarraNexus control panel listing frontend port 5173, backend port 8000, a DB proxy, an MCP server, a module poller, a job trigger, a bus trigger, and a Lark trigger.",
        caption: "Control panel from the NetMindAI-Open/NarraNexus README (docs/images/install-interface.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "NarraNexus GitHub README",
        sourceUrl: "https://github.com/NetMindAI-Open/NarraNexus/blob/main/docs/images/install-interface.png"
      },
      {
        src: "/images/players/narranexus/narranexus-memory.webp",
        alt: "A frame of the NarraNexus product tour on the Narra Memory tab, with a list of storylines and a timeline.",
        caption: "First frame of the product-tour gif in the NetMindAI-Open/NarraNexus README (docs/images/product-tour.gif), retrieved November 13, 2026; not a local runtime test. The README describes this tour as the memory timeline, the relationship graph, and a per-agent worldview.",
        sourceName: "NarraNexus GitHub README",
        sourceUrl: "https://github.com/NetMindAI-Open/NarraNexus/blob/main/docs/images/product-tour.gif"
      },
      {
        src: "/images/players/narranexus/narranexus-architecture.svg",
        alt: "Diagram of NarraNexus: Awareness, narrative storylines, memory scope, and MessageBus handoffs with per-agent MCP.",
        caption: "Diagram of identity, storylines, scope, and MessageBus. Drawn from the NetMindAI-Open/NarraNexus README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "NarraNexus GitHub README",
        sourceUrl: "https://github.com/NetMindAI-Open/NarraNexus/blob/main/README.md"
      },
    ],
    agentAnalytics: agentAnalyticsSection(
      "narranexus",
      "NarraNexus",
      "NarraNexus gives teams a ready-to-run agent workspace where agents collaborate with persistent memory. Agent Analytics measures whether the agent-driven changes move real users afterward.",
      ["a NarraNexus agent team collaborates on a website, docs, onboarding flow, product surface, or experiment", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, or task-completion events to Agent Analytics", "a NarraNexus agent fetches Agent Analytics results after the change ships", "the agent team updates its next task from measured user behavior"],
      "Instrument the project surface that NarraNexus agents affect. Agent Analytics reads the reported web or product events; it does not replace NarraNexus internal logs or traces.",
      "NarraNexus-managed page, docs path, traffic source, CTA click, signup, activation event, retention signal, or shipped experiment",
      []
    )
  },
  {
    slug: "fusion", installMethod: "mcp",
    rank: 31,
    title: "Fusion",
    githubRepo: "Runfusion/Fusion",
    accent: "blue",
    mark: {
      kind: "image",
      src: "/logos/fusion.png",
      label: "Fusion logo"
    },
    summary:
      "An MIT multi-node orchestrator that turns a plain-language task into a PROMPT.md plan and runs plan, review, execute, and review in an isolated git worktree.",
    note:
      "Merge, pull request, and destructive actions always wait for an explicit human confirmation, whatever the oversight level is.",
    overview: [
      "Fusion is an MIT-licensed orchestrator from Runfusion/Fusion, published as @runfusion/fusion. npx runfusion.ai opens the dashboard. A one-line installer, Homebrew, or npm install -g @runfusion/fusion also provide the fusion and fn commands. From a clone, pnpm dev dashboard prints an Open URL on localhost port 4040 with a bearer token. The server stores that token in ~/.fusion/settings.json and reuses it unless you pass another token or --no-auth. First launch can show an onboarding wizard for a provider, optional GitHub, and a first task. The wizard can be skipped. The README says macOS, Windows, Linux, web, iOS, and Android are shipping surfaces, with the phone path documented in MOBILE.md.",
      "You describe a task. A planning agent writes PROMPT.md with steps, file scope, and acceptance criteria. The task then runs plan, review, execute, and review inside a git worktree on branch fusion/{task-id}, so parallel tasks do not share a checkout. Built-in workflows cover coding, quick fixes, review-heavy work, stepwise execution, and PR lifecycle fragments. A workflow editor can author more. Oversight on a task or workflow is off, observe, steer, or autonomous. The README says merge, pull request, and destructive actions always require explicit human confirmation. Local runtime metadata uses embedded PostgreSQL. Legacy SQLite files are one-time migration inputs. A shared external database is for multi-project and multi-node setups. A laptop, a Mac mini, a Linux server, a cloud VM, and a phone can sit on the same mesh.",
      "Agents can message each other, and the dashboard has direct chat, task chat, and experimental chat rooms. Missions are a hierarchy the README names as Mission, Milestone, Slice, Feature, and Task. MCP servers are operator config, not a default connection. docs/mcp.md says Fusion stores trusted stdio, SSE, or streamable HTTP servers in global or project settings, resolves secrets only when a session starts, and forwards the enabled set to MCP-capable lanes. A discovered server from Claude, Cursor, Windsurf, or VS Code config is shown read-only until an operator adds it and saves. The published board screenshot shows Triage, Todo, In Progress, In Review, and Done. The agents screenshot shows role cards with a model and a heartbeat interval.",
    ],
    bestFor: [
      "A board where each task has a PROMPT.md plan and its own git worktree",
      "Oversight levels with merge and destructive steps still confirmed by a person",
      "External MCP servers saved in settings and forwarded to MCP-capable lanes",
    ],
    tags: ["MIT", "git worktrees", "MCP", "PostgreSQL", "multi-node"],
    links: [
      { label: "Website", href: "https://runfusion.ai/", emphasis: "primary" },
      { label: "GitHub", href: "https://github.com/Runfusion/Fusion" },
      { label: "README", href: "https://github.com/Runfusion/Fusion/blob/main/README.md" },
      { label: "MCP", href: "https://github.com/Runfusion/Fusion/blob/main/docs/mcp.md" },
      { label: "Docs", href: "https://github.com/Runfusion/Fusion/blob/main/docs/README.md" },
      { label: "npm", href: "https://www.npmjs.com/package/@runfusion/fusion" },
      { label: "License", href: "https://github.com/Runfusion/Fusion/blob/main/LICENSE" },
    ],
    screenshots: [
      {
        src: "/images/players/fusion/fusion-board.webp",
        alt: "Fusion board with Triage, Todo, In Progress, In Review, and Done columns, task cards, and an auto-merge toggle on In Review.",
        caption: "Fusion board from runfusion.ai/fusion-dashboard.png, linked in the Runfusion/Fusion README, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Fusion website",
        sourceUrl: "https://runfusion.ai/fusion-dashboard.png"
      },
      {
        src: "/images/players/fusion/fusion-task.webp",
        alt: "Fusion task detail for FN-6827 on the Chat tab, with a bash tool call, a verification note, and Move to In Progress.",
        caption: "Task detail from runfusion.ai/screenshot-task-detail.png, linked in the Runfusion/Fusion README, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Fusion website",
        sourceUrl: "https://runfusion.ai/screenshot-task-detail.png"
      },
      {
        src: "/images/players/fusion/fusion-agents.webp",
        alt: "Fusion Agents view with Fullstack Engineer, Product Manager, and Frontend Engineer cards, each showing a model, a heartbeat interval, and Run Now, Pause, and Details.",
        caption: "Agents view from the Runfusion/Fusion README (demo/assets/agents-tokyo.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Fusion GitHub README",
        sourceUrl: "https://github.com/Runfusion/Fusion/blob/main/demo/assets/agents-tokyo.png"
      },
      {
        src: "/images/players/fusion/fusion-architecture.svg",
        alt: "Diagram of Fusion: a plain-language task becomes PROMPT.md, runs in a fusion/task-id worktree, and stops for a person on merge and destructive actions.",
        caption: "Diagram of the documented plan, worktree, gates, and MCP settings. Drawn from the Runfusion/Fusion README and docs/mcp.md, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Fusion MCP docs",
        sourceUrl: "https://github.com/Runfusion/Fusion/blob/main/docs/mcp.md"
      },
    ],
    agentAnalytics: agentAnalyticsSection(
      "fusion",
      "Fusion",
      "Fusion ships tasks autonomously through worktree-isolated workflow gates. Agent Analytics gives the next agent real visitor and conversion data after a merged task reaches a user-facing surface.",
      ["a task is planned, executed, and reviewed through Fusion's workflow gates in an isolated worktree", "the merged change ships to the website, docs, app, onboarding flow, or support surface", "the changed surface reports visits, sources, signup, activation, retention, or funnel movement to Agent Analytics", "a follow-up agent fetches the outcome report and turns it into the next task or mission"],
      "Use Agent Analytics after Fusion tasks ship user-facing work so completed tasks and missions are judged by reported web and product outcomes, not only board status.",
      "Fusion-built page, traffic source, signup, activation event, retention change, or shipped task",
      []
    )
  },
  {
    slug: "agent-swarm", installMethod: "mcp",
    rank: 30,
    title: "Agent Swarm",
    githubRepo: "desplega-ai/agent-swarm",
    accent: "amber",
    mark: {
      kind: "image",
      src: "/logos/agent-swarm.png",
      label: "Agent Swarm logo"
    },
    summary:
      "An MIT lead and worker system from Desplega Labs: inbound tasks go to a lead, workers run in Docker, and a central MCP API on port 3013 holds the state.",
    note:
      "Workers run as a non-root user without passwordless sudo. Extensions install as inert drafts until a trusted person activates them.",
    overview: [
      "Agent Swarm is MIT-licensed software in desplega-ai/agent-swarm. The README describes a lead agent that receives work from Slack, GitHub, GitLab, Linear, Jira, email, WhatsApp, or the HTTP API, then delegates to workers in isolated Docker containers. Results go back as pull requests, chat replies, or email. The architecture docs call the shape hub-and-spoke. The MCP API server, default port 3013, exposes tools over stdio and HTTP, stores state in SQLite, receives the integration webhooks, and runs the scheduler. A workflow engine executes DAGs. A heartbeat sweeps the swarm every 90 seconds unless HEARTBEAT_INTERVAL_MS changes it. The lead can also trigger a sweep on startup. Workers report progress with the store-progress MCP tool.",
      "Each worker container includes Python 3, Node.js 22, Bun, git, gh, glab, and a worktree helper named wts. The docs say agent processes run as the non-root worker user without passwordless sudo. Harness choice is an environment setting. The README lists Claude Code, Codex, pi, opencode, Cursor, Amp, Grok, fx, Devin, and ACP agents. Memory is vector search plus identity files. The README mermaid labels that brain as Memory (vector search) and Identity (SOUL, CLAUDE.md). Fresh deployments enable Slack thread renderer v2, task steering, multi-runtime workers, RBAC, task-tool preloading, hybrid memory search, and graph expansion. Slack delegation rendering stays opt-in. MCP.md lists mcp-server-create and mcp-server-install among the default MCP tools, so an operator can attach MCP servers. Skills have install, publish, and remote sync tools.",
      "Install paths in the README are npx skills add desplega-ai/agent-swarm, a plugin install for Claude Code, Codex, Cursor, Gemini CLI, or Antigravity, or curl -fsSL https://agent-swarm.dev/install.sh | bash. The installer checks Docker and Compose v2, installs Bun if it is missing, and runs agent-swarm onboard --yes --preset full. The example compose file is described as 1 lead and 11 workers on the official templates. The installer runs one coder where that example runs two. The host note asks for at least 4 vCPU, 8 GB RAM, and 40 GB of free disk. The API is public through a tunnel by default, protected by the API key, unless you pass --no-tunnel. The dashboard at app.agent-swarm.dev connects to that API. A new install lands on /setup. GitHub follow-up events look up an existing task by repo and pull request number, then assign a lead task or skip.",
    ],
    bestFor: [
      "A lead agent that takes Slack, GitHub, email, or API work and delegates it",
      "Docker workers with SQLite state, vector memory, and a 90 second heartbeat",
      "MCP tools for tasks, schedules, skills, and installing MCP servers",
    ],
    tags: ["MIT", "Docker", "MCP", "lead and worker", "SQLite"],
    links: [
      { label: "Website", href: "https://agent-swarm.dev", emphasis: "primary" },
      { label: "GitHub", href: "https://github.com/desplega-ai/agent-swarm" },
      { label: "Docs", href: "https://docs.agent-swarm.dev" },
      { label: "Architecture", href: "https://docs.agent-swarm.dev/docs/architecture/overview" },
      { label: "MCP", href: "https://github.com/desplega-ai/agent-swarm/blob/main/MCP.md" },
      { label: "README", href: "https://github.com/desplega-ai/agent-swarm/blob/main/README.md" },
      { label: "License", href: "https://github.com/desplega-ai/agent-swarm/blob/main/LICENSE" },
      { label: "Dashboard", href: "https://app.agent-swarm.dev" },
    ],
    screenshots: [
      {
        src: "/images/players/agent-swarm/agent-swarm-github-task.webp",
        alt: "Agent Swarm diagram of GitHub webhook entry points, a trigger gate for mentions and assignees, duplicate detection, and task creation for the lead or the pool.",
        caption: "GitHub task-creation flow from the desplega-ai/agent-swarm repository (assets/github-task-creation-flow.png), retrieved November 13, 2026; not a local runtime test. This is a published flow diagram, not a photograph of the dashboard. The README's product motion is video.",
        sourceName: "Agent Swarm GitHub repository",
        sourceUrl: "https://github.com/desplega-ai/agent-swarm/blob/main/assets/github-task-creation-flow.png"
      },
      {
        src: "/images/players/agent-swarm/agent-swarm-github-followup.webp",
        alt: "Agent Swarm diagram of GitHub follow-up events that look up an active task by repo and PR number, then create a lead task or skip.",
        caption: "GitHub follow-up flow from the desplega-ai/agent-swarm repository (assets/github-followup-flows.png), retrieved November 13, 2026; not a local runtime test. This is a published flow diagram, not a photograph of the dashboard.",
        sourceName: "Agent Swarm GitHub repository",
        sourceUrl: "https://github.com/desplega-ai/agent-swarm/blob/main/assets/github-followup-flows.png"
      },
      {
        src: "/images/players/agent-swarm/agent-swarm-architecture.svg",
        alt: "Diagram of Agent Swarm: inbound channels, a lead, Docker workers, and persistent memory behind an MCP API.",
        caption: "Diagram of the documented hub: inbound work, the lead, Docker workers, and memory. Drawn from the desplega-ai/agent-swarm README and the architecture docs, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Agent Swarm architecture",
        sourceUrl: "https://docs.agent-swarm.dev/docs/architecture/overview"
      },
    ],
    agentAnalytics: agentAnalyticsSection(
      "agent-swarm",
      "Agent Swarm",
      "Agent Swarm runs a team of agents that ship work across Slack, PRs, and email. Agent Analytics gives the follow-up swarm visitor, source, funnel, and conversion data after those changes reach users.",
      [
        "an operator sends work to the swarm from Slack, GitHub, GitLab, Linear, Jira, email, WhatsApp, or the API",
        "a lead agent delegates tasks to workers that ship the change to a website, docs site, app, onboarding flow, demo, or product surface",
        "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, funnels, and experiment events to Agent Analytics",
        "a follow-up swarm agent fetches the Agent Analytics results, writes the outcome back to shared memory, and picks the next task from user behavior rather than only from inbound requests"
      ],
      "Install Agent Analytics on the surfaces the swarm ships changes to. Agent Analytics measures user behavior after deployment; it is not a replacement for the swarm's persistent memory, identity, workflows, scheduled tasks, or MCP/skill catalog.",
      "swarm-built page, traffic source, CTA click, signup, activation event, funnel step, experiment, or shipped agent task",
      []
    )
  },
  {
    slug: "agentlas-os", installMethod: "cli-and-skill",
    rank: 31,
    title: "Agentlas OS",
    githubRepo: "agentlas-ai/Agentlas-OS",
    accent: "cyan",
    mark: {
      kind: "monogram",
      value: "AO",
      label: "Agentlas OS monogram"
    },
    summary:
      "An Apache-2.0 local runtime that turns a goal into a task graph, recruits specialist packages, and finishes only when a separate verifier accepts the execution receipt.",
    note:
      "The default installer does not register host plugins. Agents use the terminal and files already on the machine, and the README says there is no VM.",
    overview: [
      "Agentlas OS is an Apache-2.0 runtime in agentlas-ai/Agentlas-OS. The README says it runs no virtual machine. Agents work in the terminal, files, and tools already on the computer. A task is complete only after an independent verifier accepts a host-produced execution receipt. A selection or a prepared bundle is not a receipt. Hephaestus decomposes a goal into a task graph. Each task states inputs, outputs, tools, permissions, and pass or fail criteria. Long goals become a tree that can be re-planned mid-run. Recruiting searches three tiers: local agents and CLI tools, the owner's private Agent Cloud, and the public Hub. The model you chose makes each selection and records the reason and the exact release. The selection pins the release, package hash, and content digest before planner, worker, synthesis, and verifier invocations run.",
      "The default install is curl of scripts/install-all-runtimes.sh. It prepares ~/.agentlas/os-runtime and the launcher ~/.agentlas/os-bin/agentlas-os. Optional features are off except memory, which is on. The installer does not permanently register plugins or MCP in detected hosts, does not write global ~/.local/bin wrappers, and does not enable the global router. Host connection is a separate step. host status and host session are how you attach Claude Code or Codex. On Codex, the README lists explicit plugin skills $hephaestus-build, $hephaestus-network, $hephaestus-cloud, and $hephaestus-upload. /agentlas-orch can put a frontier model on the orchestrator and an economy model on workers, and the README says that split only starts a real second model on Claude Code, because that is the host that spawns a subagent with its own model. Codex, Antigravity, Cursor, and OpenCode run every role on one model in sequence. Antigravity, when you ask, registers a plugin whose MCP server is named agentlas-os. That is Agentlas publishing its own server into the host, not a documented client for third-party MCP servers. The README also says other MCP surfaces can be requested in plain language.",
      "Packages carry contracts. intake and output are JSON Schema. agentlas.brief/1 is compiled, not hand-written. A build that omits a required artifact fails. Four builders compile one agent, a team, a package, or a session. Hub packages are public. Agent Cloud packages belong to the signed-in owner. The current host executes the selected package with the local project, credentials, and permissions. Desktop apps One, Finance, and Science sit on this runtime. The phone shows the same conversation and answers question cards. The README says the work happens on the desktop. The published screenshots are labeled as examples, and the Finance screen says its holdings are example data. Sign-in options named in the README include a coding-agent login, an API key, or a local model through Ollama, LM Studio, or MLX.",
    ],
    bestFor: [
      "A local task graph whose completion depends on a verifier receipt",
      "Specialist packages from the local machine, Agent Cloud, or the public Hub",
      "Claude Code, Codex, Cursor, or Antigravity, without a default host plugin install",
    ],
    tags: ["Apache-2.0", "local-first", "skills", "verifier", "packages"],
    links: [
      { label: "GitHub", href: "https://github.com/agentlas-ai/Agentlas-OS", emphasis: "primary" },
      { label: "Website", href: "https://agentlas.cloud/" },
      { label: "README", href: "https://github.com/agentlas-ai/Agentlas-OS/blob/main/README.md" },
      { label: "Releases", href: "https://github.com/agentlas-ai/Agentlas-OS/releases" },
      { label: "License", href: "https://github.com/agentlas-ai/Agentlas-OS/blob/main/LICENSE" },
    ],
    screenshots: [
      {
        src: "/images/players/agentlas-os/agentlas-work.webp",
        alt: "Agentlas Work session titled Product page rebuild, with a request to research, design, build, and review, and a Market research task started.",
        caption: "First frame of assets/readme/work-team.gif in the agentlas-ai/Agentlas-OS README, retrieved November 13, 2026; not a local runtime test. The README says names and figures on screen are examples.",
        sourceName: "Agentlas OS README",
        sourceUrl: "https://github.com/agentlas-ai/Agentlas-OS/blob/main/assets/readme/work-team.gif"
      },
      {
        src: "/images/players/agentlas-os/agentlas-one.webp",
        alt: "Agentlas One panel beside desktop apps, with messages about a cover image, a teaser export, and a 3D render, labeled One is working.",
        caption: "Agentlas One desktop image from agentlas.cloud/landing/v3/one-desktop.jpg, linked in the agentlas-ai/Agentlas-OS README, retrieved November 13, 2026; not a local runtime test. The README says names and figures on screen are examples.",
        sourceName: "Agentlas OS README",
        sourceUrl: "https://github.com/agentlas-ai/Agentlas-OS/blob/main/README.md"
      },
      {
        src: "/images/players/agentlas-os/agentlas-finance.webp",
        alt: "Agentlas Finance screen with sample holdings, an allocation chart, and a note that the figures are example data and not market prices.",
        caption: "Agentlas Finance image from agentlas.cloud/landing/v3/finance-en.jpg, linked in the agentlas-ai/Agentlas-OS README, retrieved November 13, 2026; not a local runtime test. The image itself says the holdings are example data.",
        sourceName: "Agentlas OS README",
        sourceUrl: "https://github.com/agentlas-ai/Agentlas-OS/blob/main/README.md"
      },
      {
        src: "/images/players/agentlas-os/agentlas-architecture.svg",
        alt: "Diagram of Agentlas OS: decompose a goal, recruit from local, Cloud, and Hub, pin the release, and require a verifier receipt.",
        caption: "Diagram of decompose, recruit, pin, and verify. Drawn from the agentlas-ai/Agentlas-OS README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Agentlas OS README",
        sourceUrl: "https://github.com/agentlas-ai/Agentlas-OS/blob/main/README.md"
      },
    ],
    agentAnalytics: agentAnalyticsSection(
      "agentlas-os",
      "Agentlas OS",
      "Agentlas OS can coordinate specialist agents that ship pages, docs, onboarding, apps, and experiments. Agent Analytics gives a follow-up agent user-facing outcome data after that work reaches users.",
      [
        "an Agentlas OS task force builds and ships a user-facing change",
        "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, funnels, or experiment events to Agent Analytics",
        "a follow-up Agentlas OS agent fetches the Agent Analytics results after deployment",
        "the next task force is scoped from measured user outcomes rather than only execution receipts"
      ],
      "Install Agent Analytics on the user-facing surface Agentlas OS agents change. Agent Analytics measures product and web outcomes after deployment; it does not replace Agentlas OS routing, package, policy, or execution receipts.",
      "Agentlas OS-built page, docs path, traffic source, CTA click, signup, activation event, funnel step, experiment, or shipped task",
      [],
      [
        {
          label: "Agent Analytics skill repository",
          href: "https://github.com/Agent-Analytics/skills"
        }
      ]
    )
  },
  {
    slug: "agon", installMethod: "cli-and-skill",
    rank: 31,
    title: "Agon",
    githubRepo: "AutoResearch-Factory/Agon",
    accent: "violet",
    mark: { kind: "monogram", value: "Ag", label: "Agon monogram" },
    summary:
      "An MIT Claude Code plugin that moves a topic through idea, proposal, and experiment ticks, with each handoff written to a file in a separate data workspace.",
    note:
      "The documented launch uses --dangerously-skip-permissions so an unattended loop is not stalled by a permission prompt.",
    overview: [
      "Agon is an MIT-licensed Claude Code plugin in AutoResearch-Factory/Agon. The README says it takes a research project from a one-line topic to running experiments. Agents plan, implement, audit, and review in loops, and every handoff is a file on disk so a run can be recovered. The workflow the README names is topic, idea, proposal, experiment. You clone Agon and agon-artifacts side by side, cd into agon-artifacts, and start claude --plugin-dir ../Agon --dangerously-skip-permissions --effort medium. The README says that permission flag is required because subagents write files, launch experiments, and call tools for hours, and a permission prompt would stall the run. It says to give Agon its own machine, container, or user if that matters. A debugging prompt in the README can ask the loop to pause for approval after each agent call.",
      "Commands are /idea-tick, /proposal-tick, /experiment-tick, and /deep-lit-tick. Idea tick creates, reviews, refines, and literature-checks ideas. Proposal tick turns selected ideas into reviewed proposals. Experiment tick coordinates scientist, coder, auditor, and reviewer roles for one workspace. Deep-lit tick is the shared literature loop the other stages use. The plugin directories include agents, commands, skills, hooks, references, and templates. Agent files include idea-creator, idea-refiner, idea-reviewer, proposal-refiner, proposal-reviewer, experiment-scientist, experiment-coder, experiment-auditor, experiment-reviewer, and experiment-screener. The data workspace is expected to contain topics/, ideas/, and workspace/. Optional .settings.toml, copied from .settings.example.toml, customizes model routing or parallelism. Prompts and code stay in the plugin. Research data stays in agon-artifacts.",
      "The README also documents a claude-ds wrapper that points Claude Code at a DeepSeek base URL, and says the same wrapper pattern can target Codex or Grok through CLIProxyAPI. Required Claude Code settings named in the README are DISABLE_TELEMETRY, CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS so the main agent can resume background subagents and subagents can message each other, and cleanupPeriodDays set to 3650 so session history is kept. The published figure shows idea, proposal, experiment, and paper factories, with deep-lit feeding the loops. The paper linked from the README is arXiv 2606.24177. The README points to that paper for how the loops were deployed across research domains. The published figure is figures/figure_xp.png. The figure also names a paper-writer, and a footnote marks n deep-lit readers as case-dependent, from hundreds to thousands.",
    ],
    bestFor: [
      "A Claude Code plugin that writes each research handoff to a file",
      "Separate idea, proposal, and experiment ticks with reviewer roles",
      "A data workspace kept apart from the plugin directory",
    ],
    tags: ["MIT", "Claude Code", "research", "skills", "files on disk"],
    links: [
      { label: "GitHub", href: "https://github.com/AutoResearch-Factory/Agon", emphasis: "primary" },
      { label: "Paper", href: "https://arxiv.org/abs/2606.24177" },
      { label: "README", href: "https://github.com/AutoResearch-Factory/Agon/blob/main/README.md" },
      { label: "License", href: "https://github.com/AutoResearch-Factory/Agon/blob/main/LICENSE" },
    ],
    screenshots: [
      {
        src: "/images/players/agon/agon-factories.webp",
        alt: "Agon workflow figure: topic to idea, proposal, experiment, and paper factories, with deep literature research feeding the loops.",
        caption: "Workflow figure from the AutoResearch-Factory/Agon README (figures/figure_xp.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Agon GitHub README",
        sourceUrl: "https://github.com/AutoResearch-Factory/Agon/blob/main/figures/figure_xp.png"
      },
      {
        src: "/images/players/agon/agon-architecture.svg",
        alt: "Diagram of Agon ticks: a topic in agon-artifacts, then idea, proposal, and experiment files.",
        caption: "Diagram of the documented tick loop and the unattended permission flag. Drawn from the AutoResearch-Factory/Agon README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Agon GitHub README",
        sourceUrl: "https://github.com/AutoResearch-Factory/Agon/blob/main/README.md"
      },
      {
        src: "/images/players/agon/agon-experiment.svg",
        alt: "Diagram of Agon experiment roles: scientist, coder, auditor, and reviewer sharing one workspace folder.",
        caption: "Diagram of the experiment-tick roles named in the AutoResearch-Factory/Agon README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Agon GitHub README",
        sourceUrl: "https://github.com/AutoResearch-Factory/Agon/blob/main/README.md"
      },
    ],
    agentAnalytics: agentAnalyticsSection(
      "agon", "Agon",
      "Agon can run long research loops that produce project pages, papers, demos, docs, and benchmark artifacts. Agent Analytics gives the human operator a way to measure whether those public surfaces reached readers and users after release.",
      ["an Agon run produces or updates a research page, docs path, demo, benchmark artifact, or paper companion site", "the released surface reports visits, sources, CTA clicks, downloads, signups, paper clicks, or benchmark interactions to Agent Analytics", "a follow-up agent fetches the Agent Analytics results after the release", "the operator uses the measured outcome to decide which research artifact, demo, or explanation to improve next"],
      "Instrument the public surface created around the Agon output. Agent Analytics measures user-facing web and product events; it does not replace Agon's internal auditor reports, run logs, or human scientific judgment.",
      "Agon-built research page, docs path, paper link, demo, benchmark artifact, traffic source, or release outcome", []
    )
  },
  {
    slug: "proliferate", installMethod: "mcp",
    rank: 31,
    title: "Proliferate",
    githubRepo: "proliferate-ai/proliferate",
    accent: "violet",
    mark: { kind: "monogram", value: "PR", label: "Proliferate monogram" },
    summary:
      "An AGPL-3.0 desktop IDE that runs Claude Code, Codex, OpenCode, Cursor, Grok, and other coding agents in parallel, with each task in its own git worktree.",
    note:
      "MCPs, skills, Computer Use, and Browser Use are configured once and then shared by every agent in the workspace.",
    overview: [
      "Proliferate is an AGPL-3.0 repository, proliferate-ai/proliferate. The README describes a desktop IDE for macOS that runs each coding agent through that agent's own harness. A task gets an isolated git worktree for its branch, terminal, conversation, and review state. The published hero shows a workspace named proliferate, a thread list, a written change summary with verification results, and a working tree of file diffs. Parallel agents sit side by side in the same workspace, each on its own task. A subagent can take scoped work from a parent and return the result when it finishes. Integrations listed in the README are MCPs, skills, Computer Use, Browser Use, and custom tools, configured once and shared by every agent. Workflows are recurring and event-driven runs. The examples in the README are a nightly review, triage on an alert, and dependency bumps.",
      "The desktop app is built from this repo. A local run needs Rust stable, Node.js 22 or newer, and pnpm. The README's commands are make install and make dev-local, using the bundled local AnyHarness runtime. A full local control plane also needs Python 3.12 or newer, uv, and Docker for the database. Named dev profiles keep more than one worktree from colliding. The dev profiles guide covers generated Tauri config and app labels, so the desktop shell is the Tauri app in apps/desktop. Agents named in the README table are Claude, Codex, OpenCode, Cursor, and Grok, and the introduction says any other coding agent the product can launch.",
      "The control plane is self-hostable. The deployment docs linked from the README cover Docker, AWS, GCP, Azure, Kubernetes, and air-gapped operation. Docker Compose runs Caddy, Postgres, and the API, with bootstrap and update scripts. The AWS path is a CloudFormation wrapper that provisions the stack on EC2. server/deploy/.env.production.example documents required and optional settings. The desktop app is pointed at that control plane through the configure-desktop docs. The license file is AGPL-3.0. The README points support questions to the project Discord and names SECURITY.md for a vulnerability report. A contributor starts from the Contribution Guide in the repository. The hero image published with the README is assets/readme/hero.png.",
    ],
    bestFor: [
      "Parallel coding agents, each task in its own git worktree",
      "MCP, skill, and browser tools configured once for every agent",
      "A self-hosted control plane on Docker, a cloud stack, or an air-gapped host",
    ],
    tags: ["AGPL-3.0", "desktop", "git worktrees", "MCP", "coding agents"],
    links: [
      { label: "Website", href: "https://proliferate.com/", emphasis: "primary" },
      { label: "Docs", href: "https://proliferate.com/docs" },
      { label: "GitHub", href: "https://github.com/proliferate-ai/proliferate" },
      { label: "README", href: "https://github.com/proliferate-ai/proliferate/blob/main/README.md" },
      { label: "License", href: "https://github.com/proliferate-ai/proliferate/blob/main/LICENSE" },
      { label: "Deploy", href: "https://github.com/proliferate-ai/proliferate/blob/main/guides/deploying/self-hosted-deploy.md" },
    ],
    screenshots: [
      {
        src: "/images/players/proliferate/proliferate-hero.webp",
        alt: "Proliferate desktop with a workspace thread list, a change summary and verification results, and a working tree of file diffs.",
        caption: "Hero from the proliferate-ai/proliferate README (assets/readme/hero.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Proliferate GitHub README",
        sourceUrl: "https://github.com/proliferate-ai/proliferate/blob/main/assets/readme/hero.png"
      },
      {
        src: "/images/players/proliferate/proliferate-architecture.svg",
        alt: "Diagram of Proliferate: a task, an isolated git worktree, a subagent, and tools configured once for every agent.",
        caption: "Diagram of tasks, worktrees, subagents, and shared MCP and skill config. Drawn from the proliferate-ai/proliferate README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Proliferate GitHub README",
        sourceUrl: "https://github.com/proliferate-ai/proliferate/blob/main/README.md"
      },
      {
        src: "/images/players/proliferate/proliferate-control-plane.svg",
        alt: "Diagram of Proliferate self-hosting: Docker Compose with Caddy, Postgres, and the API, plus cloud and air-gapped options, and a desktop app pointed at that plane.",
        caption: "Diagram of the documented control plane. Drawn from the proliferate-ai/proliferate README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Proliferate GitHub README",
        sourceUrl: "https://github.com/proliferate-ai/proliferate/blob/main/README.md"
      },
    ],
    agentAnalytics: agentAnalyticsSection(
      "proliferate", "Proliferate",
      "Proliferate helps teams run and review parallel coding-agent work. Agent Analytics lets a follow-up agent measure what the shipped branch changed for real users.",
      ["a workspace ships a page, docs flow, onboarding path, app surface, or product change", "the deployed surface reports visits, sources, signup, activation, retention, funnel, or experiment events to Agent Analytics", "a follow-up agent fetches the last period and compares it with the prior period", "the team decides what to merge, iterate, or automate next from measured user outcomes"],
      "Use Agent Analytics after Proliferate-managed work lands so the next agent can judge branches and follow-up tasks by user behavior, not only by code diff.",
      "page, traffic source, signup, activation event, funnel step, experiment, or shipped workspace", []
    )
  },

  {
    slug: "orkas", installMethod: "cli-and-skill",
    rank: 31,
    title: "Orkas",
    githubRepo: "Orkas-AI/Orkas",
    accent: "violet",
    mark: { kind: "image", src: "/logos/orkas.png", label: "Orkas logo", surface: "dark" },
    summary: "An MIT-licensed desktop app where a Commander splits a task across 16 built-in specialists and across Claude Code, Codex, OpenCode, OpenClaw, and Hermes-Agent running as local subprocesses.",
    note: "Files, chats, and custom agents stay on disk by default. The packaged app can optionally sync. Connectors ask before they send, post, or delete.",
    overview: [
      "Orkas is an Electron app. Packaged installers cover macOS 12 or newer, Apple Silicon and Intel, and Windows 10 or newer. The packaged app asks you to sign in and includes 500 credits for the built-in Orkas model. The README lists paid plans from $11.99 a month. Linux is source-only today: glibc 2.34 or newer, x64 or arm64. Alpine and other musl systems are not supported. From a checkout, ./run.sh on macOS or Linux, or run.cmd on Windows, needs Node.js 22.12 or newer. The workspace is ~/.orkas on macOS and Linux, and a .orkas directory on the smallest non-system drive on Windows. The source build has no account. Your own keys go under Settings, AI Providers.",
      "The Commander does general work itself and delegates with three tools. dispatch_to runs a named agent and returns the result, either waiting or notifying later. hand_off_to transfers the rest of the turn to a named agent, which replies on its own. run_worker runs an anonymous sub-task with no conversation history and none of a named agent's skills, and returns a private result. Named tasks and anonymous workers have separate concurrency limits. The README lists 16 built-in agents for research, writing, slides, images, video, voice, UI, code, office files, and e-commerce. External CLIs are local subprocesses: Claude Code, Codex, OpenCode, OpenClaw, and Hermes-Agent. They keep their own model settings. The Commander and the built-in agents share one model setting: the Orkas model, a provider key, or an OpenAI-compatible or Anthropic-compatible local endpoint.",
      "A project holds the goal, rules, memory, and files, so a later conversation in that project starts from them. To-dos can be assigned to a person or an agent. With Auto-advance on, the team takes the next to-do and brings the result back. Scheduled automations run hourly, daily, weekly, or monthly, and they need the computer awake and Orkas running. From v1.9, an automation catches up its most recent missed run within 12 hours of wake or launch. The Library extracts documents into passages and stores a local SQLite vector index. The embedding model runs on the machine. Background reviews, when the app is idle, may update an agent's COMPETENCE.md, LEARNING_STRATEGIES.md, or learned skills, or they may save nothing. Shared projects, cloud sync, and publishing a local app to a public URL are packaged-app features. The README says the open-source build does not support them yet.",
      "Context is budgeted against the selected model's usable input, and long tasks checkpoint earlier messages. A queued task is not counted as a finished result. With your own keys, calls go from your machine to the provider. The built-in model uses Orkas's service. The license file is MIT.",
    ],
    bestFor: [
      "A Commander that hands work to named agents or an anonymous worker",
      "Claude Code, Codex, and OpenCode as local subprocesses in the same task",
      "Local files and a local Library, with cloud sync only in the packaged app",
    ],
    tags: [
      "desktop",
      "Commander",
      "local-first",
      "CLI agents",
      "MIT",
    ],
    links: [
      {
        label: "Website",
        href: "https://orkas.ai/?source=open-orchestrators",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/Orkas-AI/Orkas",
      },
      {
        label: "README",
        href: "https://github.com/Orkas-AI/Orkas/blob/main/README.md",
      },
      {
        label: "Releases",
        href: "https://github.com/Orkas-AI/Orkas/releases",
      },
      {
        label: "License",
        href: "https://github.com/Orkas-AI/Orkas/blob/main/LICENSE",
      },
    ],
    screenshots: [
      {
        src: "/images/players/orkas/orkas-task.webp",
        alt: "Orkas v2026.10.17 on a task named Prepare the Luma launch kit: the Commander replies with a phased plan, a budget table, and two files, and the composer is set to Orkas-1.5 and Commander.",
        caption: "Orkas task view from Orkas-AI/Orkas (resources/app-ui/task-en.png), retrieved November 13, 2026; not a local runtime test. The file's window title shows v2026.10.17.",
        sourceName: "Orkas GitHub README",
        sourceUrl: "https://github.com/Orkas-AI/Orkas/blob/main/README.md"
      },
      {
        src: "/images/players/orkas/orkas-home.webp",
        alt: "Orkas v2026.8.25 new-task screen: the composer is addressed to Commander in the Default workspace, with starter cards for research, sales, slides, images, video, design, and a website.",
        caption: "Orkas new-task screen from Orkas-AI/Orkas (resources/app-ui/home-en.jpg), retrieved November 13, 2026; not a local runtime test. That file's window title shows v2026.8.25.",
        sourceName: "Orkas GitHub repository",
        sourceUrl: "https://github.com/Orkas-AI/Orkas/blob/main/resources/app-ui/home-en.jpg"
      },
      {
        src: "/images/players/orkas/orkas-architecture.svg",
        alt: "Diagram of Orkas: the Commander uses dispatch_to, hand_off_to, and run_worker, specialists and CLI subprocesses do the work, and the Library stays on disk.",
        caption: "Diagram of the documented handoff: three Commander tools, 16 built-in agents, and CLI subprocesses. Drawn from the Orkas-AI/Orkas README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Orkas GitHub README",
        sourceUrl: "https://github.com/Orkas-AI/Orkas/blob/main/README.md"
      },
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Orkas-run agent work",
      valueProp: "Orkas runs a Commander that hands work to specialist agents and to CLI agents on the same machine. Separately configured product analytics can show the observed user-facing results of a change those agents helped prepare.",
      measurementLoop: [
        "the Commander dispatches specialists or a CLI agent, and a person reviews the files that come back",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Orkas integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Orkas task activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Orkas task activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("orkas"),
      screenshots: []
    }
  },
  {
    slug: "fractal", installMethod: "cli-and-skill",
    rank: 31,
    title: "fractal",
    githubRepo: "plasma-ai/fractal",
    accent: "emerald",
    mark: { kind: "monogram", value: "FR", label: "fractal monogram" },
    summary: "An Apache-2.0 CLI that grows a tree of coding-agent loops. Each node works in its own git worktree, and hard caps bound iterations, depth, children, cost, and time.",
    note: "Approval prompts are off by default. A worktree isolates the branch the node commits to, not the filesystem or the network.",
    overview: [
      "fractal installs from PyPI as plasma-fractal or as fractal. pip install pulls in plasma-wiki and puts wiki on PATH. pipx and uv tool install do not, unless you pass --with-executables-from plasma-wiki. fractal open starts the terminal dashboard from a project that already has a fractal. --light is for a light terminal. The skill install for Claude Code is a plugin marketplace command, /plugin marketplace add plasma-ai/plugins and then /plugin install fractal@plasma. Codex has the matching codex plugin commands. fractal install copies the fractal and wiki skills into ~/.claude/skills and ~/.agents/skills. --project limits that copy to the current project. --link symlinks them. Re-run fractal install after an upgrade.",
      "The root is the user node: your current branch, with no worktree and no loop of its own. Top-level nodes branch from it. Child nodes branch from their parent. Agents run in tmux, or, with --headless, in detached process groups. headless.log collects that output. State for runs, iterations, steps, costs, and signals is one local SQLite database, which the TUI reads live. Five backends are selected per node with --agent, and children inherit it: Claude Code, Codex, Grok Build, OpenCode, and Oh My Pi. Claude and Codex can use --provider=openrouter, which reads OPENROUTER_API_KEY from the launching shell. OpenCode and Oh My Pi use their own openrouter model ids.",
      "The /fractal skill takes a plain-language directive, prints the NODE.md instructions and completion requirement it inferred, shows every parameter, and asks for the rest. It launches only after you approve, in a tmux session. Caps you can set include max-iters, max-depth, max-children, max-descendants, timeout, iter-timeout, step-timeout, max-cost, max-iter-cost, and max-step-cost. max-cost is USD per run. Runs are isolated, so each launch arms the cap again. After a run ends on budget, node start --continue refuses without an explicit --max-cost. A reserve-budget, 10% of max-cost unless you change it, is held for cleanup. scope limits commits to subdirectories of the worktree.",
      "The README warns that every seeded agent config disables the approval gate, because an unattended loop cannot stop to ask: Claude bypassPermissions, Codex danger-full-access, Grok --always-approve, OpenCode --auto, and Oh My Pi --yolo. A node can therefore run any command the agent chooses, with your credentials and your machine's network. The worktree does not change that. The README says to launch only a task you would trust unsupervised. Pull requests branch from dev and open against dev. main moves at releases. The license is Apache-2.0.",
    ],
    bestFor: [
      "A tree of worktree loops with caps you set per node",
      "Claude Code, Codex, Grok Build, OpenCode, or Oh My Pi on each node",
      "A local SQLite record of runs, steps, and cost",
    ],
    tags: [
      "coding agents",
      "git worktrees",
      "terminal UI",
      "SQLite",
      "Apache-2.0",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/plasma-ai/fractal",
        emphasis: "primary"
      },
      {
        label: "Documentation",
        href: "https://docs.plasma.ai/fractal",
      },
      {
        label: "README",
        href: "https://github.com/plasma-ai/fractal/blob/main/README.md",
      },
      {
        label: "PyPI",
        href: "https://pypi.org/project/plasma-fractal/",
      },
      {
        label: "License",
        href: "https://github.com/plasma-ai/fractal/blob/main/LICENSE",
      },
    ],
    screenshots: [
      {
        src: "/images/players/fractal/fractal-tui.webp",
        alt: "The fractal terminal dashboard for a node named Meta: a tree of child nodes, a message list, and a run panel for Claude on run 2, iteration 3 of 8, with per-step dollar costs.",
        caption: "fractal TUI from plasma-ai/fractal (docs/_static/tui.png), retrieved November 13, 2026; not a local runtime test. The dollar figures are the ones printed in that screenshot.",
        sourceName: "fractal GitHub README",
        sourceUrl: "https://github.com/plasma-ai/fractal/blob/main/README.md"
      },
      {
        src: "/images/players/fractal/fractal-architecture.svg",
        alt: "Diagram of fractal: the user node is the current branch, child loops run in worktrees, and runs and costs are stored in local SQLite.",
        caption: "Diagram of the documented tree: a user node, child worktrees, and caps on depth, children, and cost. Drawn from the plasma-ai/fractal README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "fractal GitHub README",
        sourceUrl: "https://github.com/plasma-ai/fractal/blob/main/README.md"
      },
      {
        src: "/images/players/fractal/fractal-bounds.svg",
        alt: "Diagram of fractal defaults: approval prompts are off for Claude, Codex, Grok, OpenCode, and Oh My Pi, and a worktree isolates the branch rather than the machine.",
        caption: "Diagram of the README warning: seeded configs skip approval, and a worktree does not contain the filesystem or the network. Drawn from the plasma-ai/fractal README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "fractal GitHub README",
        sourceUrl: "https://github.com/plasma-ai/fractal/blob/main/README.md"
      },
    ],
    agentAnalytics: {
      heading: "Measure outcomes from fractal-run agent work",
      valueProp: "fractal runs a tree of coding-agent loops, each in its own git worktree. Separately configured product analytics can show the observed user-facing results of a change those loops helped prepare.",
      measurementLoop: [
        "a fractal node iterates in its worktree under the caps set for that run, and a person reviews the branch",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native fractal integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report fractal run activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat fractal run activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("fractal"),
      screenshots: []
    }
  },
  {
    slug: "tempest", installMethod: "cli-and-skill",
    rank: 32,
    title: "Tempest",
    githubRepo: "tempestai-dev/tempest",
    accent: "violet",
    mark: { kind: "monogram", value: "Tm", label: "Tempest monogram" },
    summary: "An Apache-2.0 Tauri desktop app that runs CLI coding agents in parallel, each in its own git worktree, with a local code graph those sessions can query instead of rereading the tree.",
    note: "Hephaestus isolates each session's process tree. Skip-permissions flags are on by default. Both are toggles under Settings, Security.",
    overview: [
      "Tempest is a local app. The README says prebuilt binaries exist for Windows, macOS, and Linux, and the badges on that page mark all three as supported. One section of tempestai.dev/docs still says macOS and Linux are on the roadmap. The same docs page's technical details list all three as supported. Install is npx @usetempest/tempest, or a download from tempestai.dev/download. From source you need Node.js 20 or newer and Rust 1.77 or newer. Windows also needs the WebView2 runtime. The stack is Tauri 2, a Rust backend, and a React frontend. The license file is Apache-2.0.",
      "Each session gets its own git worktree and branch. The README's agent list is Claude Code, Codex CLI, Gemini CLI, OpenCode, Copilot CLI, Cline, and Goose. The docs also name Aider and say any terminal agent can be configured. Closing a tab and reopening it keeps that session's history. You can stage, commit, push, and open a pull request from the app. A message queue holds the next instruction until the agent finishes. The README's screenshot shows a Claude Code pane with the line bypass permissions on, an Indexed indicator, an Isolated indicator, and a DB Clones panel that says there are no active clones.",
      "Token Intelligence is a local code-knowledge graph, shared by the sessions on that machine. The docs say it is powered by Atlas, and that Tempest writes MCP config so Claude Code, Cline, Cursor, Gemini CLI, Kiro, and OpenCode query that graph. That config is for Tempest's own graph. The README's benchmark table is medians over 4 valid runs per arm, same agent, same model, same prompts, on 7 repositories. Token savings in that table are 88% on tokio, 83% on okhttp, 82% on excalidraw, 81% on django, 66% on gin, 63% on alamofire, and 55% on vscode. Tool-call savings in the same table run from 63% to 92%. The page headline says 86% fewer tokens. The method and the reproduce steps are in BENCHMARKS.md.",
      "Hephaestus is the process isolation layer, on without extra setup. Windows uses Job Objects and kills the process tree when the session closes. macOS uses Seatbelt, deny-default, through sandbox-exec. Linux uses bubblewrap with unshare pid, die with parent, unshare net, and user namespaces. The README says agents also run fully permissionless by default: Claude Code gets --dangerously-skip-permissions, Gemini CLI gets --yolo, and Codex CLI gets --dangerously-bypass-approvals-and-sandbox. Settings, Security turns those behaviors. Database branches are under What's next: per-project Docker database containers. The README says that isolation is shipping now.",
    ],
    bestFor: [
      "One git worktree and branch per agent session",
      "A shared local code graph, with the README's per-repo token table",
      "OS process isolation, and skip-permissions flags you can turn off",
    ],
    tags: [
      "coding agents",
      "git worktrees",
      "desktop",
      "Tauri",
      "Apache-2.0",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/tempestai-dev/tempest",
        emphasis: "primary"
      },
      {
        label: "Website",
        href: "https://tempestai.dev/",
      },
      {
        label: "Docs",
        href: "https://tempestai.dev/docs",
      },
      {
        label: "README",
        href: "https://github.com/tempestai-dev/tempest/blob/main/README.md",
      },
      {
        label: "Download",
        href: "https://tempestai.dev/download",
      },
      {
        label: "License",
        href: "https://github.com/tempestai-dev/tempest/blob/main/LICENSE",
      },
    ],
    screenshots: [
      {
        src: "/images/players/tempest/tempest-sessions.webp",
        alt: "Tempest with several agent sessions in the sidebar, a Claude Code pane whose status line says bypass permissions on, Indexed and Isolated indicators, and a DB Clones panel that says there are no active clones.",
        caption: "Tempest window from the tempestai-dev/tempest README (media/tempest.png), retrieved November 13, 2026; not a local runtime test. The DB Clones panel in this image says there are no active clones.",
        sourceName: "Tempest GitHub README",
        sourceUrl: "https://github.com/tempestai-dev/tempest/blob/main/README.md"
      },
      {
        src: "/images/players/tempest/tempest-architecture.svg",
        alt: "Diagram of Tempest: each session has a worktree, Token Intelligence is a shared local graph, and Hephaestus isolates the process.",
        caption: "Diagram of sessions, the shared local graph, and the README benchmark table. Drawn from the tempestai-dev/tempest README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Tempest GitHub README",
        sourceUrl: "https://github.com/tempestai-dev/tempest/blob/main/README.md"
      },
      {
        src: "/images/players/tempest/tempest-isolation.svg",
        alt: "Diagram of Hephaestus: Windows Job Objects, macOS Seatbelt, and Linux bubblewrap, plus database branches listed as shipping.",
        caption: "Diagram of the per-system process isolation in the tempestai-dev/tempest README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Tempest GitHub README",
        sourceUrl: "https://github.com/tempestai-dev/tempest/blob/main/README.md"
      },
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Tempest-run agent work",
      valueProp: "Tempest runs coding-agent sessions in separate git worktrees. Separately configured product analytics can show the observed user-facing results of a change those sessions helped prepare.",
      measurementLoop: [
        "a Tempest session edits its own worktree, and a person reviews the diff and opens a pull request from the app",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Tempest integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Tempest session activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Tempest session activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("tempest"),
      screenshots: []
    }
  },
  {
    slug: "crewplane", installMethod: "cli-and-skill",
    rank: 31,
    title: "Crewplane",
    githubRepo: "crewplaneai/crewplane",
    accent: "cyan",
    mark: { kind: "image", src: "/logos/crewPlane.png", label: "Crewplane logo" },
    summary: "An Apache-2.0 command-line runner, Python 3.13 or newer, that keeps a coding-agent workflow in a Markdown file and writes every stage's inputs, outputs, and logs under .crewplane.",
    note: "The first run is a mock provider: no CLI, no API key, and no token spend. Crewplane does not install or authenticate the provider CLIs.",
    overview: [
      "A workflow sits beside the project. YAML front matter names the nodes and the dependencies. Matching sections hold the prompts. crewplane init writes .crewplane/config.yml, a default workflow, and example templates. crewplane validate checks the composed DAG before anything runs. crewplane run executes it. Install is uv tool install crewplane. The docs also list pip, pipx, Homebrew, and an install script. When the output is a terminal and tmux is installed, Crewplane opens a live dashboard of DAG progress, node status, and log tails. --no-live skips that dashboard. On macOS, tmux is brew install tmux. On Ubuntu or Debian it is apt.",
      "Ready nodes can run at the same time. A parallel node can fan one prompt out across providers. A sequential node can run one executor, or an executor and a reviewer, for a bounded number of fix rounds. Saved outputs and optional findings files move downstream by explicit references. The README's provider row is Claude Code, Codex, GitHub Copilot CLI, Gemini CLI, Kilo Code, Pi, DeepSeek Harness, and OpenCode. crewplane onboarding finds the supported CLIs already on the machine and lets you choose which ones to call. An included Ollama plugin can discover a local server and tool-capable models and run a no-tools readiness prompt. Their models, tools, skills, MCP servers, instructions, authentication, and permissions stay with those CLIs. Crewplane invokes the process and stores the response.",
      "The run record uses the same shape for the mock provider and for a real CLI. execution-results holds findings and final results. execution-stages holds the preflight plan, the dependency graph, events.ndjson, and each node's rendered input, output, and logs. A later run with the same signature can print Identical context detected and reuse the saved result. crewplane run --force starts over. A failed or cancelled attempt can start a new run from nodes Crewplane was able to validate as complete. Workspace isolation is optional and documented for cases where file edits must stay off the working tree. The license file is Apache-2.0.",
      "The README points at a recorded experiment in crewplane-lab: eight Codex model and reasoning configurations, one algorithm task, then a comparison stage. The workflow file, the eight responses, the comparison, and the stage logs are in that repository. The README says this is one recorded experiment, not a general model benchmark, and that you can read the artifacts without installing Crewplane.",
    ],
    bestFor: [
      "Markdown workflows you can review before a model is called",
      "A mock first run, then the CLIs already installed on the machine",
      "A .crewplane record you can resume from validated nodes",
    ],
    tags: [
      "coding agents",
      "Markdown workflows",
      "CLI",
      "run records",
      "Apache-2.0",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/crewplaneai/crewplane",
        emphasis: "primary"
      },
      {
        label: "Docs",
        href: "https://github.com/crewplaneai/crewplane/blob/master/docs/index.md",
      },
      {
        label: "Installation",
        href: "https://github.com/crewplaneai/crewplane/blob/master/docs/getting-started/installation.md",
      },
      {
        label: "README",
        href: "https://github.com/crewplaneai/crewplane/blob/master/README.md",
      },
      {
        label: "License",
        href: "https://github.com/crewplaneai/crewplane/blob/master/LICENSE",
      },
    ],
    screenshots: [
      {
        src: "/images/players/crewplane/crewplane-dashboard.webp",
        alt: "The Crewplane terminal dashboard for a run named Plan And Implement: a DAG summary with plan and implement nodes on Gemini and Codex, and a node output pane that is still waiting for the first provider line.",
        caption: "Crewplane dashboard from crewplaneai/crewplane (.github/crewplane-splash.png), retrieved November 13, 2026; not a local runtime test. The README's embedded dashboard attachment returned 404 on that date, so this repository file is the image used here.",
        sourceName: "Crewplane GitHub repository",
        sourceUrl: "https://github.com/crewplaneai/crewplane/blob/master/.github/crewplane-splash.png"
      },
      {
        src: "/images/players/crewplane/crewplane-eight.webp",
        alt: "A Crewplane Lab diagram titled Eight agents, one comparison, every receipt: eight agent boxes feed a compare stage, which feeds workflow, responses, telemetry, and logs.",
        caption: "Recorded eight-agent experiment diagram from crewplane-lab (docs/images/eight-agent-run.png), embedded in the crewplaneai/crewplane README, retrieved November 13, 2026. The README says this is one recorded experiment, not a general model benchmark. Not a terminal screenshot.",
        sourceName: "Crewplane GitHub README",
        sourceUrl: "https://github.com/crewplaneai/crewplane/blob/master/README.md"
      },
      {
        src: "/images/players/crewplane/crewplane-architecture.svg",
        alt: "Diagram of Crewplane: a Markdown workflow is validated, ready nodes call provider CLIs, and the run record stays under .crewplane.",
        caption: "Diagram of preflight, provider CLIs, and resume from validated nodes. Drawn from the crewplaneai/crewplane README and docs, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Crewplane docs",
        sourceUrl: "https://github.com/crewplaneai/crewplane/blob/master/docs/index.md"
      },
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Crewplane-run agent work",
      valueProp: "Crewplane runs coding-agent CLIs from a Markdown workflow and keeps the run record on disk. Separately configured product analytics can show the observed user-facing results of a change those runs helped prepare.",
      measurementLoop: [
        "a Crewplane workflow calls the provider CLIs named in the file, and a person reads the run record",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Crewplane integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Crewplane run activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Crewplane run activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("crewplane"),
      screenshots: []
    }
  },
  {
    slug: "graphcode", installMethod: "cli-and-skill",
    rank: 31,
    title: "GraphCode",
    githubRepo: "scgopi/GraphCode",
    accent: "mint",
    mark: { kind: "monogram", value: "Gc", label: "GraphCode logo" },
    summary: "A macOS app, Apple Silicon, macOS 15 or newer, where each coding-agent loop is a live terminal on a canvas and edges between loops hand off, message, or spawn.",
    note: "The app and daemon are FSL-1.1-MIT. GraphcodeKit and the CLI stay MIT. State lives in ~/.graphcode, and opening a project writes nothing inside it.",
    overview: [
      "GraphCode launches the agent CLI a loop names. It bundles none of them. The README's set is Claude Code, GitHub Copilot CLI, Codex, OpenCode, and pi. brew install --cask scgopi/graphcode/graphcode installs it, or you drag the app out of the arm64 dmg. Releases are Developer ID signed and notarized. A Windows port exists in the tree as a preview. The README says that preview is not a claim that Windows is a shipping platform. From a shell, graphcode node create takes --backend claudeCode, copilotCLI, codex, openCode, or pi. A loop that creates children without naming a backend hands them its own.",
      "A loop is an agent session that keeps running. Turn-based loops pause inside the session for your review. Goal-based loops run until a goal is met, and that can be a shell predicate that exits 0. The goal's done check has a Test button that runs the predicate the way the daemon will. Time-based loops put the cadence in the prompt with the agent's own /loop skill. GraphCode does not schedule that clock. Codex, OpenCode, and pi have no such skill, so a time-based loop on them needs the experimental daemon heartbeat in Settings. A composite loop is a sub-graph that runs a prompt from end to end.",
      "You connect loops by dragging. The default edge is a hand-off, which fires when the source resolves. An edge can instead be a message or a spawn, with a condition and a cycle guard. The agents on the two ends do not have to match. Each terminal is a zmx session, rendered with GhosttyKit, so it survives quitting the app and a reboot. The backend session id is stored, and a relaunch resumes with --resume instead of starting a second conversation. graphcoded is a launchd agent. It owns each project's graph, fires hand-off edges, polls goal predicates, and keeps unattended sessions alive while the app is closed. The graphcode CLI talks to that same daemon.",
      "A project can be a local folder, a clone from a URL, or a remote repository over SSH. Remote loops run on the server. The Mac steers them. The server needs key auth and zmx. Copilot loops follow the CLI's own version unless you set a preferred version in Settings or in ~/.graphcode/settings.json. GraphCode does not install that CLI for you. A workspace is another support directory, ~/.graphcode-name, with its own daemon. Nothing is shared with the default workspace. The Functional Source License 1.1, with an MIT future license, allows use, changes, self-hosting, and redistribution. It does not allow a competing commercial product built from the app or the daemon. Each release converts to MIT two years after it goes out.",
    ],
    bestFor: [
      "Live terminals you can attach to while a loop is running",
      "Hand-off, message, and spawn edges between different agent CLIs",
      "A launchd daemon that keeps the session when the app is closed",
    ],
    tags: [
      "macOS",
      "coding agents",
      "live terminals",
      "daemon",
      "FSL-1.1-MIT",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/scgopi/GraphCode",
        emphasis: "primary"
      },
      {
        label: "Website",
        href: "https://graphcode.app/",
      },
      {
        label: "README",
        href: "https://github.com/scgopi/GraphCode/blob/main/README.md",
      },
      {
        label: "Releases",
        href: "https://github.com/scgopi/GraphCode/releases",
      },
      {
        label: "License",
        href: "https://github.com/scgopi/GraphCode/blob/main/LICENSE",
      },
    ],
    screenshots: [
      {
        src: "/images/players/graphcode/graphcode-canvas.webp",
        alt: "The GraphCode canvas for a project named graphcode: Monetization, Marketing, Loops Article, and granularity marked needs you, permissions marked running, and a note of 6 worktrees.",
        caption: "GraphCode canvas from scgopi/GraphCode (docs/assets/graph-hero.png), also shown on graphcode.app, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "GraphCode GitHub repository",
        sourceUrl: "https://github.com/scgopi/GraphCode/blob/main/docs/assets/graph-hero.png"
      },
      {
        src: "/images/players/graphcode/graphcode-architecture.svg",
        alt: "Diagram of GraphCode: a live terminal node, hand-off message and spawn edges, and the graphcoded launchd daemon.",
        caption: "Diagram of loops, edges, zmx sessions, and ~/.graphcode. Drawn from the scgopi/GraphCode README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "GraphCode GitHub README",
        sourceUrl: "https://github.com/scgopi/GraphCode/blob/main/README.md"
      },
      {
        src: "/images/players/graphcode/graphcode-loops.svg",
        alt: "Diagram of GraphCode loop types: turn-based, goal-based with an optional shell predicate, time-based cadence inside the prompt, and a composite sub-graph.",
        caption: "Diagram of the four loop types in the scgopi/GraphCode README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "GraphCode GitHub README",
        sourceUrl: "https://github.com/scgopi/GraphCode/blob/main/README.md"
      },
    ],
    agentAnalytics: {
      heading: "Measure outcomes from GraphCode-run agent work",
      valueProp: "GraphCode runs coding-agent loops as live terminals and fires edges between them. Separately configured product analytics can show the observed user-facing results of a change those loops helped prepare.",
      measurementLoop: [
        "a GraphCode loop runs in a terminal until its stop condition, and a hand-off edge starts the next loop",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native GraphCode integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report GraphCode loop activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat GraphCode loop activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("graphcode"),
      screenshots: []
    }
  },
  {
    slug: "agentgrid", installMethod: "cli-and-skill",
    rank: 31,
    title: "AgentGrid",
    visibility: "not-open-important",
    accent: "cyan",
    mark: { kind: "monogram", value: "AG", label: "AgentGrid monogram" },
    summary: "A commercial desktop canvas for macOS, Windows, and Linux where a master agent pane spawns visible workers on the coding harnesses you already have installed.",
    note: "The master does not read unrelated panes until it associates them. Effort is a soft control, not a token cap. The project does not publish source.",
    overview: [
      "AgentGrid is a closed desktop app. The homepage says it runs on macOS, Windows, and Linux, and that you bring your own AI subscriptions. The download page lists installers for those three systems. The public changelog on the homepage shows 2.9.62 on November 13, 2026. That note says right-click read-aloud needs AgentGrid Pro. There is no public git repository in the listing.",
      "A harness pane becomes a master when it starts or associates another pane. The orchestration guide says Claude Code, Codex, OpenCode, Cursor, Devin, Grok, and Kimi panes can be masters. Any installed harness can be a worker. spawn_role starts a named role such as builder, qa, validator, or security, and returns immediately with a paneId. spawn_worker starts a worker from a prompt, also returning at once. Omit harness and the worker uses the master's harness. list_worker_harnesses reports what is installed. The master can list the canvas. It cannot read notes, terminals, or conversations it has not associated. Workers with a terminal can start test runners and dev servers, and those terminals close with the worker.",
      "Because a spawn does not block, the master waits on purpose. wait_for_worker waits for one worker's current turn. wait_for_any returns the first finished worker in a set, and you call it again until the set is done. read_worker_output looks at progress without stopping the turn. send_to_worker gives that same pane a follow-up and keeps its context. The guide's review loop is: spawn a builder, fan out QA, validation, and security, wait for all of them, send the findings back to the same builder, and reuse the same reviewers on the next revision until each one gives a shipping verdict. A new pane is for work that is actually independent, or for a different harness looking at the same diff.",
      "effort is optional and requires an explicit harness. Codex and Claude use their own categorical controls. OpenCode maps it to --variant, Antigravity to --effort, Grok to --reasoning-effort, and Pi to --thinking. Devin uses model ids for tiers. Kimi has no compatible effort control in headless prompt mode. Cursor Auto starts, then returns an effortWarning, because the category cannot be forwarded on its own. Other unsupported pairs fail before a pane exists. Omitting effort sends no effort argument. After a restart, list_my_team finds the master's visible workers, terminals, and browsers. list_recoverable_sessions and resume_worker reopen a session that no longer has a pane, using the returned sessionId and harness. Each agent pane has a source-control view of its worktrees.",
    ],
    bestFor: [
      "A visible master and worker team on one canvas",
      "The same worker pane for a review round, instead of a new chat",
      "Sessions you can find again after the app restarts",
    ],
    tags: [
      "not open",
      "coding agents",
      "desktop",
      "master and workers",
      "worktrees",
    ],
    links: [
      {
        label: "Website",
        href: "https://agentgrid.sh/",
        emphasis: "primary"
      },
      {
        label: "Orchestration docs",
        href: "https://agentgrid.sh/docs/guides/orchestrating-agents",
      },
      {
        label: "Download",
        href: "https://agentgrid.sh/download",
      },
    ],
    screenshots: [
      {
        src: "/images/players/agentgrid/agentgrid-canvas.webp",
        alt: "AgentGrid canvas for a project named agent-grid-mobile: a team lead pane lists spawn_worker calls for Builder, Reviewer, Researcher, and QA, and a builder pane is working on an auth snapshot.",
        caption: "AgentGrid canvas from the homepage Open Graph image (opengraph-image.png), retrieved November 13, 2026; not a local runtime test. The orchestration guide's cover image is labeled AI-generated editorial illustration and is not used here.",
        sourceName: "AgentGrid website",
        sourceUrl: "https://agentgrid.sh/"
      },
      {
        src: "/images/players/agentgrid/agentgrid-architecture.svg",
        alt: "Diagram of AgentGrid: a master pane calls spawn_role, waits with wait_for_any, and sends follow-ups to the same worker pane.",
        caption: "Diagram of master and worker panes from the AgentGrid orchestration guide, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "AgentGrid orchestration guide",
        sourceUrl: "https://agentgrid.sh/docs/guides/orchestrating-agents"
      },
      {
        src: "/images/players/agentgrid/agentgrid-review.svg",
        alt: "Diagram of the AgentGrid review loop: a builder, then QA validation and security reviewers, then findings sent back to the same builder.",
        caption: "Diagram of the production review loop in the AgentGrid orchestration guide, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "AgentGrid orchestration guide",
        sourceUrl: "https://agentgrid.sh/docs/guides/orchestrating-agents"
      },
    ],
    agentAnalytics: {
      heading: "Measure outcomes from AgentGrid-run agent work",
      valueProp: "AgentGrid runs a master pane that spawns worker panes on installed coding harnesses. Separately configured product analytics can show the observed user-facing results of a change those workers helped prepare.",
      measurementLoop: [
        "a master pane spawns workers, waits for them, and sends review findings back to the same builder pane",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native AgentGrid integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report AgentGrid session activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat AgentGrid session activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("agentgrid"),
      screenshots: []
    }
  },
  {
    slug: "looptroop", installMethod: "cli-and-skill",
    rank: 31,
    title: "LoopTroop",
    githubRepo: "looptroop-ai/LoopTroop",
    accent: "emerald",
    mark: { kind: "monogram", value: "LT", label: "LoopTroop logo" },
    summary: "An MIT-licensed local orchestrator that turns a ticket into an interview, a spec, and beads, then runs each bead in an OpenCode git worktree and opens a pull request after you approve the boundaries.",
    note: "OpenCode runs with dangerously-skip-permissions. A worktree keeps the checkout separate and does not sandbox the commands. Node.js 24.19.0 or newer is required.",
    overview: [
      "LoopTroop is a local GUI. looptroop open starts it in the background and opens a browser. Install is curl -fsSL https://www.looptroop.ovh/install | sh, npm install -g looptroop, Homebrew, Scoop, Chocolatey, WinGet, bun, pnpm, Yarn 1, a Docker image looptroopai/looptroop, or a standalone archive from GitHub Releases. Homebrew, Scoop, Chocolatey, WinGet, and the AUR also install gh. npm, bun, pnpm, Yarn, and the standalone archive do not. A ticket checks git and an authenticated gh before coding, because the ticket ends as a pull request. LoopTroop does not install OpenCode. You configure a provider in OpenCode, pick the model in LoopTroop's Configuration screen, and attach a local repository that has a GitHub origin. It detects OpenCode v1 or v2 and starts the CLI when no server is already reachable.",
      "A ticket is not one long chat. Planning is an LLM council: several models draft, score each other, vote, and the winner refines a draft and checks coverage. That cycle is used for interview questions, the PRD, and the beads. You answer the interview in batches. The PRD is stored as the spec. Beads are the units that get implemented. Each one has a purpose, acceptance criteria, dependencies, target files, and a validation step. The README says this is the beads planning structure only, not the full external Beads project. During execution the agent sees the active bead, its file target, and the test file, not the earlier transcript. State lives outside the model, in SQLite, JSONL logs, and .ticket YAML.",
      "Execution is OpenCode in a git worktree, so the branch you had open is not the one being edited. The README says worktree isolation is not host security. The agent runs as you. If a bead fails, the Ralph-style retry keeps a short error trace, resets the worktree, discards the session, and starts again with that note. The README says this can take hours, sometimes 10 or more, and is meant to run unattended, including overnight. It also says to run LoopTroop in a VM or another disposable machine because a bad command is not contained by the worktree. Cleanup in conservative mode removes LoopTroop's own .ticket and .looptroop roots and leaves ignored user files. Git configuration such as core.sshCommand is preserved, and Git may run those wrappers as you.",
      "You approve the spec, the bead plan, and the pull request. The README says those human gates are planned to become optional later. Optional manual QA is a checklist you run yourself. A failed check becomes a QA-fix bead. A wish for something new becomes a new ticket. The license file is MIT.",
    ],
    bestFor: [
      "Council planning with a stored interview and PRD",
      "One OpenCode worktree and a fresh retry per bead",
      "Approval gates before the spec, the beads, and the pull request",
    ],
    tags: [
      "local GUI",
      "OpenCode",
      "git worktrees",
      "council",
      "MIT",
    ],
    links: [
      {
        label: "Website",
        href: "https://www.looptroop.ovh/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/looptroop-ai/LoopTroop",
      },
      {
        label: "Docs",
        href: "https://www.looptroop.ovh/docs/",
      },
      {
        label: "README",
        href: "https://github.com/looptroop-ai/LoopTroop/blob/main/README.md",
      },
      {
        label: "License",
        href: "https://github.com/looptroop-ai/LoopTroop/blob/main/LICENSE",
      },
    ],
    screenshots: [
      {
        src: "/images/players/looptroop/looptroop-council.webp",
        alt: "A LoopTroop ticket, LOD-1, during council drafting: ten model cards with proposed question counts, two marked failed, and a log that says the interview draft round completed with 8 valid responses.",
        caption: "Council drafting from the LoopTroop README gallery (https://www.looptroop.ovh/media/ticket.webp), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "LoopTroop GitHub README",
        sourceUrl: "https://github.com/looptroop-ai/LoopTroop/blob/main/README.md"
      },
      {
        src: "/images/players/looptroop/looptroop-interview.webp",
        alt: "LoopTroop interview answers for the same LOD-1 ticket: a Foundation section with free-text questions and the user's replies.",
        caption: "Interview answers from the LoopTroop README gallery (https://www.looptroop.ovh/media/interview.webp), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "LoopTroop GitHub README",
        sourceUrl: "https://github.com/looptroop-ai/LoopTroop/blob/main/README.md"
      },
      {
        src: "/images/players/looptroop/looptroop-bead.webp",
        alt: "LoopTroop implementation view for LOD-1: 14 of 14 beads completed, the selected bead is Preserve arrays while traversing their elements, with a diff of two files.",
        caption: "Bead implementation from the LoopTroop README gallery (https://www.looptroop.ovh/media/bead.webp), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "LoopTroop GitHub README",
        sourceUrl: "https://github.com/looptroop-ai/LoopTroop/blob/main/README.md"
      },
      {
        src: "/images/players/looptroop/looptroop-architecture.svg",
        alt: "Diagram of LoopTroop: a council drafts the plan, a person approves it, and OpenCode runs each bead in a worktree with a fresh retry after failure.",
        caption: "Diagram of the ticket flow in the looptroop-ai/LoopTroop README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "LoopTroop GitHub README",
        sourceUrl: "https://github.com/looptroop-ai/LoopTroop/blob/main/README.md"
      },
    ],
    agentAnalytics: {
      heading: "Measure outcomes from LoopTroop-run agent work",
      valueProp: "LoopTroop plans a ticket with a model council and runs each bead in an OpenCode worktree. Separately configured product analytics can show the observed user-facing results of a change that work helped prepare.",
      measurementLoop: [
        "a person approves the spec and the beads, OpenCode implements them in a worktree, and the ticket ends as a pull request",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native LoopTroop integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report LoopTroop ticket activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat LoopTroop ticket activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("looptroop"),
      screenshots: []
    }
  },
  {
    slug: "ordewell", installMethod: "cli-and-skill",
    rank: 31,
    title: "Ordewell",
    githubRepo: "ordewell/ordewell",
    accent: "emerald",
    mark: { kind: "monogram", value: "Or", label: "Ordewell monogram" },
    summary: "An Apache-2.0 terminal UI and CLI, at README version 0.13.1, that turns a goal into an editable plan and runs each task on the coding agent you assign, in its own git worktree when git is new enough.",
    note: "Autorun and automatic merging are off. The planner only reads. A daily version check sends the version and a random install ID unless you turn it off.",
    overview: [
      "Linux and macOS install with the script at ordewell.ai/install.sh, or with brew install ordewell/tap/ordewell. Windows and Alpine use npm install -g ordewell, which needs Node.js 20.3 or newer. ordewell update follows the install you have. The VS Code extension is on the Marketplace, and Open VSX covers Cursor, Windsurf, and VSCodium. You need a supported agent installed and signed in. The README lists Claude Code, Codex, OpenCode, GitHub Copilot CLI, Qwen Code, Cline, Gemini CLI, and Cursor, mixed in one plan. git 2.38 or newer puts each code task in its own worktree. Without that, tasks run in the folder you opened. The README says this is 0.13.1, the project is pre-1.0, and a minor release can break things.",
      "You type a goal in the terminal UI, the VS Code panel, the CLI, or the local API. The planner explores the workspace without modifying it and can ask questions. It returns tasks with dependencies, and each task has a runner, a model, a mode, and an effort. You can edit, retarget, reorder, or remove tasks before a build plan runs. Research tasks can start during planning without that approval. Script tasks can run with consent under your approval and the run settings. Independent tasks run at the same time. A task waits when it depends on another. Check-and-fix loops repeat until the check passes or the round limit hits. Repository skills can be attached to tasks across runners. The planner can be one of the supported coding agents, with no extra API key, or an API provider.",
      "When the run finishes you read the diff and the test evidence, then merge into your branch or discard the run. Turning on autorun or automatic merging is a setting, not the default. Tasks run as you, in the mode the plan assigns. The README points at SECURITY.md for what the planner and each runner can touch. Some files can still be shared between worktrees. If an agent hits its account limit, the task pauses. You can resume later or move the unfinished work to another agent. If you allow it, the supervisor can act inside limits you set.",
      "Once a day, after a one-time notice, Ordewell sends its version and a random install ID to ordewell.ai, and nothing else. If a newer release exists, the terminal UI says so on every start. ordewell update and /update send nothing to ordewell.ai. ORDEWELL_NO_VERSION_CHECK=1 or DO_NOT_TRACK=1 turns the check off, and so does turning off VS Code telemetry for the extension. The license is Apache-2.0. The Ordewell name and logos are excluded. See NOTICE.",
    ],
    bestFor: [
      "A goal that becomes a plan you can edit before it runs",
      "A different runner, model, and effort on each task",
      "Worktrees when git is 2.38 or newer, and merge left to you",
    ],
    tags: [
      "coding agents",
      "terminal UI",
      "git worktrees",
      "plans",
      "Apache-2.0",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ordewell/ordewell",
        emphasis: "primary"
      },
      {
        label: "Website",
        href: "https://ordewell.ai/",
      },
      {
        label: "Docs",
        href: "https://ordewell.ai/docs",
      },
      {
        label: "README",
        href: "https://github.com/ordewell/ordewell/blob/main/README.md",
      },
      {
        label: "License",
        href: "https://github.com/ordewell/ordewell/blob/main/LICENSE",
      },
    ],
    screenshots: [
      {
        src: "/images/players/ordewell/ordewell-plan.webp",
        alt: "Ordewell's plan pane on a checkout-api goal: the planner asked about a shared Redis client, the reply was reuse it, and the plan lists seven tasks on Claude Code, OpenCode, and Codex.",
        caption: "Plan pane from ordewell/ordewell (assets/readme/tui-plan-pane.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Ordewell GitHub repository",
        sourceUrl: "https://github.com/ordewell/ordewell/blob/main/assets/readme/tui-plan-pane.png"
      },
      {
        src: "/images/players/ordewell/ordewell-start.webp",
        alt: "A frame of Ordewell's terminal UI at the start of a run: the planner is Claude Code on Opus, the runners are Claude Code, Codex, and OpenCode, and the status reads Full auto.",
        caption: "One frame of the README recording (assets/readme/hero-plan-to-run.gif) in ordewell/ordewell, retrieved November 13, 2026; not a local runtime test. The README says sped-up stretches in that recording are marked.",
        sourceName: "Ordewell GitHub README",
        sourceUrl: "https://github.com/ordewell/ordewell/blob/main/README.md"
      },
      {
        src: "/images/players/ordewell/ordewell-architecture.svg",
        alt: "Diagram of Ordewell: a read-only planner drafts tasks, independent tasks run in worktrees, and merging stays off until you turn it on.",
        caption: "Diagram of the goal, the plan, and the default run settings. Drawn from the ordewell/ordewell README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Ordewell GitHub README",
        sourceUrl: "https://github.com/ordewell/ordewell/blob/main/README.md"
      },
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Ordewell-run agent work",
      valueProp: "Ordewell turns a goal into tasks and runs each one on the coding agent assigned in the plan. Separately configured product analytics can show the observed user-facing results of a change those tasks helped prepare.",
      measurementLoop: [
        "a person approves a plan, tasks run on the assigned agents, and the person merges or discards the run",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Ordewell integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Ordewell task activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Ordewell task activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("ordewell"),
      screenshots: []
    }
  },
  {
    slug: "raven", installMethod: "mcp",
    rank: 31,
    title: "Raven",
    githubRepo: "EverMind-AI/Raven",
    accent: "blue",
    mark: { kind: "monogram", value: "Rv", label: "Raven monogram" },
    summary: "An Apache-2.0 host agent that plans a task across built-in research, code, design, and on-call agents, and across third-party agents reached over ACP, a CLI, or an OpenAI-compatible API.",
    note: "External tools are MCP servers in tools.mcpServers. The Curator, which rewrites an agent's loop, ships with the repository and not with the installed package.",
    overview: [
      "Raven is a host agent from EverMind. You install it on Linux, macOS, or WSL2 with the curl installer at raven.evermind.ai/install.sh, or on Windows with install.ps1. A piped install uses the published wheel. Running install.sh as a file from a checkout installs that checkout in editable mode. Docker Compose from docker/docker-compose.yml serves the page at http://localhost:18793 and needs Git and Docker on the host. raven web opens the WebUI and leaves Raven running in the background. raven web --stop stops that service. raven tui is the terminal UI. raven agent -m runs one task from the shell. Setup asks, for each built-in product, whether it uses the model it is tuned for or this Raven's LLM.",
      "Four agents ship in that tree. Raven-Research writes a sourced report. Raven-Code implements, debugs, refactors, and does data work. Raven-Design makes slide decks, charts, diagrams, and web pages. Raven-Oncall runs a workflow for hours and stops for a person only when the workflow asks. The host can hand one task to one of them, or run several inside one workflow. Third-party agents connect over ACP, a CLI, or an OpenAI-compatible API. The README says there are presets for 15 third-party agents and nine Mirasim-routed presets, and it names MiniMax Code on mcode acp and DSH on dsh --profile acp. The WebUI roster screenshot also shows Codex, OpenCode, Hermes Agent, OpenClaw, and GitHub Copilot.",
      "An editor can launch Raven itself as an ACP server with raven acp. A2A is a separate HTTP JSON-RPC face: raven a2a serve listens on loopback port 8710 unless you change it. MCP is how Raven reaches an external tool or resource, not how it assigns an agent task. In the WebUI, Add on the Plugins page leads into chat, where Raven connects a server from the PlugHub catalogue. A server the catalogue does not list is written by hand into tools.mcpServers in config.json. raven plugin auth handles OAuth for a configured server. A package may ship an mcp.json, and Raven starts those servers only after you name the package.",
      "EverOS memory keeps user context, agent experience, and world knowledge across sessions. SkillForge retrieves skills from local libraries, that memory, and SkillHub. The README states a SkillHub catalog of 114,190 skills. The agent loop is split into Memory, Planning, Capability, and Action. The Curator can replace those for one agent, including tools and skills, and it does not install a change that fails its check. The README says the Curator is experimental and is not in the installed package. The Evolver is a separate tool that consumes Raven as a library and scores harness changes against benchmarks. It does not run inside a session.",
    ],
    bestFor: [
      "A host agent that plans one task across several agents",
      "Third-party agents over ACP, CLI, or an OpenAI-compatible API",
      "MCP servers you add, with OAuth through raven plugin auth",
    ],
    tags: [
      "host agent",
      "ACP",
      "MCP",
      "multi-agent",
      "Apache-2.0",
    ],
    links: [
      {
        label: "Website",
        href: "https://raven.evermind.ai",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/EverMind-AI/Raven",
      },
      {
        label: "Docs",
        href: "https://evermind-ai.github.io/Raven/",
      },
      {
        label: "MCP",
        href: "https://evermind-ai.github.io/Raven/skills-and-extensions/",
      },
      {
        label: "README",
        href: "https://github.com/EverMind-AI/Raven/blob/main/README.md",
      },
      {
        label: "License",
        href: "https://github.com/EverMind-AI/Raven/blob/main/LICENSE",
      },
    ],
    screenshots: [
      {
        src: "/images/players/raven/raven-webui.webp",
        alt: "Raven WebUI new task page: a sidebar with New task, Connectors, Knowledge, Task board, Import conversation, and Settings, and a composer set to deepseek-flash.",
        caption: "Raven WebUI from the EverMind-AI/Raven README, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Raven GitHub README",
        sourceUrl: "https://github.com/EverMind-AI/Raven/blob/main/README.md"
      },
      {
        src: "/images/players/raven/raven-agents.webp",
        alt: "Raven's agent roster: Raven-General, Raven-Oncall, Raven-Research, and two Mirasim routes marked connected, with Codex, OpenCode, MiniMax Code, Raven-Code, and others listed as available.",
        caption: "Agent roster from the EverMind-AI/Raven README, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Raven GitHub README",
        sourceUrl: "https://github.com/EverMind-AI/Raven/blob/main/README.md"
      },
      {
        src: "/images/players/raven/raven-architecture.svg",
        alt: "Diagram of Raven: a host agent plans a task, built-in and third-party agents run the pieces, and MCP servers supply external tools.",
        caption: "Diagram of the host agent, ACP and CLI agents, and tools.mcpServers. Drawn from the EverMind-AI/Raven README and the skills and extensions docs, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Raven docs",
        sourceUrl: "https://evermind-ai.github.io/Raven/skills-and-extensions/"
      },
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Raven-run agent work",
      valueProp: "Raven plans a task across built-in and third-party agents. Separately configured product analytics can show the observed user-facing results of a change those agents helped prepare.",
      measurementLoop: [
        "Raven plans a task and runs it across built-in or third-party agents, and a person reviews the result",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Raven integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Raven task activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Raven task activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("raven"),
      screenshots: []
    }
  },
  {
    slug: "orbi", installMethod: "cli-and-skill",
    rank: 31,
    title: "Orbi",
    githubRepo: "orbi-build/orbi",
    accent: "amber",
    mark: { kind: "image", src: "/logos/orbi.svg", label: "Orbi logo" },
    summary: "An AGPL-3.0 or Sustainable Use License 1.0 runner that takes a GitHub Issue labeled ai-ready, implements it in a git worktree with Pi, and merges only after a separate review session and a merge gate.",
    note: "GitHub is the only state store. A user timer fires a tick every 5 minutes, and one Runner invocation handles at most one Issue or opened pull request.",
    overview: [
      "Orbi is a Python runner for GitHub repositories. You write the goal and the acceptance criteria in an Issue and add the label ai-ready. The Runner claims it, creates a feature branch and an isolated worktree from a frozen origin base SHA, and starts a Pi session that plans, implements, tests, and stops at a commit. The Runner then syncs the base, pushes, and opens a pull request whose body includes Fixes #N. Install needs Python 3.14 or newer. The PyPI package is orbi-cli and the command stays orbi. orbi setup checks an existing gh login, the labels, and the scheduler units. The scheduler is a systemd user timer on Linux, or a launchd GUI timer on macOS. The README says the macOS path is not yet verified on real hardware. GitHub CLI 2.94 or newer is required.",
      "After the pull request opens, that tick ends. A later tick starts an independent Pi review session, which review_pi_* can put on a different model. It reviews the recorded base and head and fixes findings in that session. A clean verdict names the current pull request head. The merge gate then requires the latest base, concluded CI, a mergeable pull request, and an unchanged remote head. Pending CI waits. If a repository policy still blocks the merge, the Issue becomes ai-awaiting-merge, and the Runner merges the named head on a later empty-queue tick after the maintainer acts. The README says the AI never merges or pushes protected branches. The Runner is what calls the GitHub API once the gate passes.",
      "A recoverable failure labels the Issue ai-fix-needed and keeps the same run, branch, worktree, and pull request. An unrecoverable case, such as an exhausted review budget or a pull request closed without a merge, labels the Issue ai-blocked and the automatic loop stops. A missing worktree is rebuilt from the remote branch. Pickup order is P0-labeled Issues, then bug-labeled, then plain ai-ready. An Epic labeled ai-epic is never claimed. A release task, labeled ai-ready and ai-release, does not run Pi. You start it. The Runner waits on CI, publishes the tag, and writes the notes. max_concurrency is how many deliveries run at once. Orbi Managed Cloud runs the same ledger without you operating a runner.",
      "You pick either license. Running Orbi on your own repositories, including changes and self-hosting, needs no extra authorization under either one. Under AGPL-3.0, offering a modified Orbi as a network service means publishing those changes. The Sustainable Use License v1.0 requires authorization to sell Orbi itself, such as hosting it for customers or embedding it in a paid product.",
    ],
    bestFor: [
      "GitHub Issues as the queue, with ai-ready as the dispatch label",
      "A separate review session and a merge gate before the Runner merges",
      "A self-hosted 5-minute timer, or Orbi Managed Cloud for the same ledger",
    ],
    tags: [
      "GitHub Issues",
      "git worktrees",
      "independent review",
      "Pi",
      "AGPL-3.0",
    ],
    links: [
      {
        label: "Website",
        href: "https://orbi.build/?ref=dir-openorchestrators",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/orbi-build/orbi",
      },
      {
        label: "Docs",
        href: "https://docs.orbi.build/",
      },
      {
        label: "README",
        href: "https://github.com/orbi-build/orbi/blob/main/README.md",
      },
      {
        label: "License",
        href: "https://github.com/orbi-build/orbi/blob/main/LICENSE",
      },
    ],
    screenshots: [
      {
        src: "/images/players/orbi/orbi-issue.webp",
        alt: "Orbi homepage card for GitHub issue 48 in orbi-build/orbi, titled Log active Issue context when Runner is stopped, opened by xqliu on August 25, 2026.",
        caption: "Issue card from the Orbi homepage (/img/issue-48.png), retrieved November 13, 2026; not a local runtime test. The homepage uses this card as an example of the GitHub Issue that starts a delivery.",
        sourceName: "Orbi website",
        sourceUrl: "https://orbi.build/"
      },
      {
        src: "/images/players/orbi/orbi-pr.webp",
        alt: "Orbi homepage card for pull request 193 in orbi-build/orbi, the same title as issue 48, showing 3 files and a +564 line count.",
        caption: "Pull request card from the Orbi homepage (/img/pr-193.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Orbi website",
        sourceUrl: "https://orbi.build/"
      },
      {
        src: "/images/players/orbi/orbi-release.webp",
        alt: "Orbi homepage card of GitHub release v0.2.0, with the release commit, a release task pointing at issue 197, and a scope list of closed issues.",
        caption: "Release card from the Orbi homepage (/img/release-v020.png), retrieved November 13, 2026; not a local runtime test. This card shows v0.2.0. The README's later example of a full loop is release v0.5.47.",
        sourceName: "Orbi website",
        sourceUrl: "https://orbi.build/"
      },
      {
        src: "/images/players/orbi/orbi-architecture.svg",
        alt: "Diagram of Orbi: an ai-ready Issue is claimed into a worktree, a second Pi session reviews it, and the Runner merges only after the merge gate.",
        caption: "Diagram of claim, review, the merge gate, and a separate release task. Drawn from the orbi-build/orbi README and workflow docs, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Orbi docs",
        sourceUrl: "https://docs.orbi.build/"
      },
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Orbi-run agent work",
      valueProp: "Orbi implements a GitHub Issue and merges it after a separate review session. Separately configured product analytics can show the observed user-facing results of a change that delivery shipped.",
      measurementLoop: [
        "an ai-ready Issue is implemented, a review session checks it, and the Runner merges when the gate passes",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Orbi integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Orbi delivery activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Orbi delivery activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("orbi"),
      screenshots: []
    }
  },

  {
    slug: "scion", installMethod: "cli-and-skill", rank: 34, title: "Scion", githubRepo: "GoogleCloudPlatform/scion", accent: "sky",
    category: "Parallel Coding-Agent Runners",
    mark: { kind: "monogram", value: "Sc", label: "Scion monogram" },
    summary: "Scion is an Apache-2.0 orchestration platform that runs coding harnesses as separate processes. Agents can delegate, message each other, and use a shared directory, a git worktree, or a clone.",
    note: "It is pre-1.0 and is not an officially supported Google product, and what a team does depends on the instructions, templates, and skills you supply.",
    overview: [
      "Scion runs harnesses such as Claude Code, Antigravity, Codex, and OpenCode as independent processes, each with its own configuration and credentials. The recommended install is the community Homebrew tap, brew tap homebrew-scion/scion and brew install homebrew-scion/scion/scion. That build includes the Telegram broker plugin. scion server start opens onboarding at http://127.0.0.1:8080/onboarding for runtime detection, identity, images, and the first workspace. That server is the hub every local scion command uses. scion init in a repository links the project, and scion start names an agent and a task. Building from source is make all, using the Go version in go.mod.",
      "An agent is a worker with its own identity, usually a harness in a container. A managed agent uses a provider API instead. A project is a namespace of agents, commonly one git repository. A template is a system prompt plus skills. The runtime is Docker, Podman, Apple Container, Kubernetes, or Cloud Run. Auto-detect tries Podman, then Docker, then Apple Container on macOS, and can be overridden in .scion/settings.yaml. The hub is the control plane: the workstation server on one machine, or a hosted hub. A runtime broker provisions containers for a hub. scion list shows active agents. scion attach joins a tmux session. scion message sends a message. scion logs, stop, resume, and delete manage the agent, and delete also removes the container and worktree. The README says to add .scion/agents to .gitignore when worktrees are nested.",
      "Workspaces share a directory, use a git worktree, or use a separate clone. Agents learn the scion CLI through skills and help text. Delegation and review are whatever the instructions and templates say. The Skill Bank versions skills and can resolve them from GitHub. An A2A bridge connects other agent systems. People follow work in the web UI or through Telegram, Discord, Slack, Google Chat, and Microsoft Teams. The README lists MCP configuration beside the CLI, APIs, hooks, and the A2A bridge.",
      "The documented modes are local CLI, a one-person workstation, a single-node hosted hub on a VM or Cloud Run, and an HA hub with Postgres and shared storage. Hosted mode adds roles, access boundaries, scoped secrets, and federated identity. Capabilities differ by mode, and the README says APIs and configuration can change before 1.0. The coordination image in the README replays messages and shared-workspace file access from the Relics of Athenaeum agent game."
    ],
    bestFor: [
      "Coding harnesses as separate processes with their own credentials",
      "A local workstation hub, or a hosted hub when several people share it",
      "Choosing a shared directory, a worktree, or a clone per agent"
    ],
    tags: [
      "coding agents",
      "containers",
      "worktrees",
      "hub",
      "Apache-2.0"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/GoogleCloudPlatform/scion", emphasis: "primary"
      },
      {
        label: "README",
        href: "https://github.com/GoogleCloudPlatform/scion/blob/main/README.md"
      },
      {
        label: "Docs",
        href: "https://googlecloudplatform.github.io/scion/"
      },
      {
        label: "License",
        href: "https://github.com/GoogleCloudPlatform/scion/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/scion/scion-coordination.webp",
        alt: "A dark circular visualization of named agents around a /workspace node, with message and file-access links from a Scion agent game.",
        caption: "Coordination replay from the GoogleCloudPlatform/scion README, retrieved November 13, 2026; not a local runtime test. The README says it replays messages and shared-workspace file access from Relics of Athenaeum. It is not the Workstation UI.",
        sourceName: "Scion GitHub README",
        sourceUrl: "https://github.com/GoogleCloudPlatform/scion/blob/main/README.md"
      },
      {
        src: "/images/players/scion/scion-architecture.svg",
        alt: "Diagram of Scion: a local or hosted hub, an agent in its own container, a shared directory or worktree or clone, and a message or attach path for a person.",
        caption: "Diagram of the documented hub and workspace. Drawn from the GoogleCloudPlatform/scion README, retrieved November 13, 2026; not a product screenshot. The docs site has no Workstation screenshot.",
        sourceName: "Scion GitHub README",
        sourceUrl: "https://github.com/GoogleCloudPlatform/scion/blob/main/README.md"
      },
      {
        src: "/images/players/scion/scion-modes.svg",
        alt: "Diagram of Scion modes: local CLI, a one-person workstation on 127.0.0.1, a single-node hosted hub, and an HA hub with Postgres.",
        caption: "Diagram of the documented modes. Drawn from the GoogleCloudPlatform/scion README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Scion GitHub README",
        sourceUrl: "https://github.com/GoogleCloudPlatform/scion/blob/main/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection("scion", "Scion", "After Scion-managed agents ship a reviewed change, separately configured analytics can help assess its user-facing outcome.", ["a team implements and reviews a product change", "the team deploys it to a separately instrumented surface", "an agent with separately configured analytics access reads the observed results", "the operator uses that evidence to scope the next task"], "This is an optional measurement workflow, not a native Scion integration. Configure product tracking and authenticated Agent Analytics access separately; Scion's agent processes and messages are not product analytics events.", "deployed page, signup, activation event, or funnel step", [])
  },
  {
    slug: "openrig", installMethod: "cli-and-skill", rank: 35, title: "OpenRig", githubRepo: "mvschwarz/openrig", accent: "orange",
    category: "Coordination And Team Systems",
    mark: { kind: "monogram", value: "OR", label: "OpenRig monogram" },
    summary: "OpenRig is Apache-2.0 software that runs Claude Code and Codex as a team declared in a YAML RigSpec. A local daemon, CLI, terminal UI, and MCP server manage the seats in tmux.",
    note: "It needs Node.js 22 or 24 and tmux on macOS or Linux, setup can write provider hooks and trust files, and rig setup --dry-run does not preview every later write.",
    overview: [
      "A RigSpec names pods, members, edges, and continuity. rig up starts the tmux sessions, harnesses, startup files, and readiness checks. The TUI shows rigs, pods, and seats as a table or a graph. rig send, rig broadcast, and rig chatroom pass messages through the daemon. rig down --snapshot stores the topology, and rig up with that name restores it. rig grow, rig shrink, rig launch, and rig remove change a running team. A typing guard, off by default, holds automatic messages for a seat where a person is typing. Every terminal seat is a tmux session you can attach to. Hosted members join through OpenRig's MCP server and have no pane. The shipped teams are starter (a builder and a reviewer), workshop (a lead, a builder, QA, and a reviewer), and factory (seven agents for longer product work). Specialist specs include code-review, research, and pm.",
      "Install needs Node.js 22 or 24, tmux, and macOS or Linux, plus Claude Code or Codex signed in. One provider is enough. On Apple silicon the README says to use Node.js 22. Native Windows is not supported. WSL2 is the documented Windows route, and the automated tests do not run there. npm install -g @openrig/cli installs the CLI. rig setup can install tmux, and Herdr unless you pass --no-herdr. It can also install a missing Claude Code or Codex unless --providers limits the check. Setup can write Codex hooks and trust, Claude workspace trust, and project activity hooks. The README says those files are not guaranteed to roll back. Later daemon writes are not each shown by rig setup --dry-run.",
      "The kernel's default permissions are broader than a project team's. On Codex that is full access with no approval prompts. On Claude Code the kernel's file tools, fetches, and operational commands run without asking. A team seat with no extra policy is narrower: ordinary rig commands, project reads, and common tests run without a prompt, while rig up and rig down still ask. The workshop bundle is a separate choice with broader access. Selected MCP resources can add Exa and Context7 entries and leave existing permission rules in place. MCP tools include rig_up, rig_ps, rig_send, and rig_chatroom_send.",
      "The README's process stack is the CLI, TUI, and MCP, then an HTTP daemon, domain services, SQLite, tmux, and runtime adapters. Runtimes are native Claude Code and Codex, terminal nodes, and Pi through RPC runners. rig terminal open can lay seats out in Herdr or cmux. The topology graph in the README comes from the TUI demo and uses fictional project data."
    ],
    bestFor: [
      "A YAML team of Claude Code and Codex seats in tmux",
      "Messages, a chatroom, and a topology snapshot you can restore",
      "MCP tools that let an agent launch and message the rig"
    ],
    tags: [
      "coordination",
      "YAML",
      "tmux",
      "MCP",
      "Apache-2.0"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mvschwarz/openrig", emphasis: "primary"
      },
      {
        label: "README",
        href: "https://github.com/mvschwarz/openrig/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/mvschwarz/openrig/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/openrig/openrig-tui.webp",
        alt: "OpenRig TUI table for rig v-openrig-build, with dev, orch, and review pods, Claude and Codex seats, context percentages, and working, idle, or failed state.",
        caption: "One frame of the TUI recording from the mvschwarz/openrig README (assets/readme/openrig-agents-working.gif), retrieved November 13, 2026; not a local runtime test. The README calls the GIF a real recording.",
        sourceName: "OpenRig GitHub README",
        sourceUrl: "https://github.com/mvschwarz/openrig/blob/main/README.md"
      },
      {
        src: "/images/players/openrig/openrig-topology.webp",
        alt: "OpenRig TUI graph of a factory rig, with product, dev, and qa pods and seats named lead, design, app, data, ui, and test.",
        caption: "Topology graph from the mvschwarz/openrig README (assets/ui/screenshots/tui-topology.png), retrieved November 13, 2026; not a local runtime test. The README says it was captured from the interactive TUI demo using fictional project data.",
        sourceName: "OpenRig GitHub README",
        sourceUrl: "https://github.com/mvschwarz/openrig/blob/main/README.md"
      },
      {
        src: "/images/players/openrig/openrig-architecture.svg",
        alt: "Diagram of OpenRig: a YAML RigSpec, rig up into tmux seats, send and chatroom messages, and an MCP server for hosted members.",
        caption: "Diagram of the documented team path. Drawn from the mvschwarz/openrig README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "OpenRig GitHub README",
        sourceUrl: "https://github.com/mvschwarz/openrig/blob/main/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection("openrig", "OpenRig", "A separately configured outcome readout can inform the next task sent through an OpenRig team after its work is deployed.", ["team members implement and review a user-facing change", "the operator deploys it to a separately instrumented product", "an agent with separately configured analytics access reads the results", "the team uses the measured outcome when planning its next handoff"], "This is an optional workflow, not a native OpenRig integration. Configure tracking on the deployed surface and analytics access in the querying agent separately; RigSpecs, chatrooms, and topology snapshots do not supply product analytics.", "deployed page, signup, activation event, or funnel step", [])
  },
  {
    slug: "ccswarm", installMethod: "cli-and-skill", rank: 36, title: "ccswarm", githubRepo: "nwiizo/ccswarm", accent: "emerald",
    category: "Parallel Coding-Agent Runners",
    mark: { kind: "monogram", value: "cc", label: "ccswarm monogram" },
    summary: "ccswarm is an MIT-licensed Rust workflow engine. Its default flow runs plan, a Sangha quorum, implementation, review, and fixes. Claude Code and Codex do the work, each local stage in its own Herdr tab.",
    note: "Quorum counts successful approval markers and does not resolve dissent, replay runs the task again, and undo lists commits and does not roll them back.",
    overview: [
      "ccswarm governs how a coding workflow advances. Claude Code and Codex execute the stages. The README's default flow is plan, Sangha quorum, implement, review, fix, and complete, with planner, reviewer, qa, and coder roles. The team flow runs frontend and backend workers in parallel, then a supervisor review. team-dynamic uses a leader and workers. quick is one coder pass. review-fix loops a reviewer and a coder. research investigates and reports. Custom flows are YAML files in .ccswarm/flows. ccswarm flow check validates a file. ccswarm flow render previews the prompts. A stage can request a Sangha assessment. Members are asked to end with SANGHA_DECISION=APPROVE or SANGHA_DECISION=REVISE.",
      "Local provider runs require Herdr 0.9.5 or later. Each stage opens a background Herdr tab and closes when it finishes. Outside a Herdr pane, local providers stop. Remote A2A runs, set with CCSWARM_A2A_ENDPOINT, still work. headless is the default and runs claude -p or codex exec. live is an interactive Claude Code session. Codex stages stay headless. Install from a checkout is cargo install --path crates/ccswarm. ccswarm doctor probes Herdr and the CLIs. ccswarm pipeline --task runs one task. queue drain asks before commit and pull request. ccswarm auto --watch does those without asking.",
      "The acceptance rule counts completed reviews that emitted a successful approval and compares that number with the quorum. It rejects a quorum the members cannot reach. It does not resolve a disagreement, and it does not bind a machine check to the decision. Gates run once the count hits quorum. A failed gate rejects the decision even when every member approved. The README says evidence-bound acceptance and checkpoint recovery are the next design, not current guarantees.",
      "readonly is a request, and the two providers enforce it differently. Codex uses codex exec --sandbox read-only even if the stage lists write tools. A rate-limit fallback from a read-only Codex stage to Claude fails instead of running writable. Claude does not enforce readonly yet. It runs with --dangerously-skip-permissions and an allowed-tools list. Copilot is unsupported for code generation because gh copilot suggest returns shell-command strings. Unknown provider names fail validation. Runs are recorded as NDJSON. ccswarm run view shows the event log, run diff compares two timelines, and cost splits a run by stage and agent. replay re-executes the recorded task. undo prints git log since the run started and does not rewrite history. auto-commit refuses a sensitive-path list that includes .env, key files, and secrets files."
    ],
    bestFor: [
      "A YAML flow with a Sangha quorum before implementation",
      "Frontend and backend workers in parallel, then a supervisor review",
      "Recorded runs you can view, compare, and re-execute"
    ],
    tags: [
      "coding agents",
      "Rust",
      "Sangha",
      "Herdr",
      "MIT"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/nwiizo/ccswarm", emphasis: "primary"
      },
      {
        label: "README",
        href: "https://github.com/nwiizo/ccswarm/blob/master/README.md"
      },
      {
        label: "License",
        href: "https://github.com/nwiizo/ccswarm/blob/master/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/ccswarm/ccswarm-flow.svg",
        alt: "Diagram of the ccswarm default flow: plan, Sangha quorum, implement, review, and fix, with each local stage in a Herdr tab.",
        caption: "Diagram of the documented default flow. Drawn from the nwiizo/ccswarm README, retrieved November 13, 2026; not a product screenshot. The repository publishes no product screenshot.",
        sourceName: "ccswarm GitHub README",
        sourceUrl: "https://github.com/nwiizo/ccswarm/blob/master/README.md"
      },
      {
        src: "/images/players/ccswarm/ccswarm-sangha.svg",
        alt: "Diagram of ccswarm quorum: approval markers are counted, a failed gate still rejects, Codex read-only uses a sandbox, and undo only lists commits.",
        caption: "Diagram of the documented acceptance rule. Drawn from the nwiizo/ccswarm README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "ccswarm GitHub README",
        sourceUrl: "https://github.com/nwiizo/ccswarm/blob/master/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection("ccswarm", "ccswarm", "Separately configured analytics can measure a deployed change after a ccswarm workflow and independent checks have finished.", ["workers implement a change and reviewers assess it", "the operator runs required checks separately and deploys the reviewed result", "the instrumented product reports configured events", "an agent with separately configured analytics access reads outcomes for the next task"], "This is an optional measurement workflow, not a native ccswarm integration. Configure product tracking and analytics access separately; approval markers and recorded run events do not prove product outcomes or replace required checks.", "deployed page, signup, activation event, or funnel step", [])
  },
  {
    slug: "ruflo", installMethod: "cli-and-skill", rank: 37, title: "Ruflo", githubRepo: "ruvnet/ruflo", accent: "violet",
    category: "Coordination And Team Systems",
    mark: { kind: "monogram", value: "Rf", label: "Ruflo monogram" },
    summary: "Ruflo is an MIT-licensed meta-harness, formerly Claude Flow, around Claude Code and Codex. npx ruflo init adds hooks, memory, and an MCP server. The swarm plugin gives each agent its own git worktree.",
    note: "The Claude Code plugin path and npx ruflo init are different installs: init writes project files and registers MCP, and most marketplace plugins do not.",
    overview: [
      "The README's one-command start is npx ruflo@latest init in a project folder, then a task in Claude Code. Init adds agents, hooks, memory, and the MCP server. Claude Code picks them up on its next start. Codex and other MCP clients can use npx -y ruflo@latest mcp start, or claude mcp add claude-flow -- npx ruflo@latest mcp start. npx ruflo@latest init wizard is the interactive setup, including native Windows PowerShell and cmd. The curl installer needs a POSIX shell. npm install -g ruflo@latest installs the CLI. npx ruflo tui runs the terminal UI without Claude Code. --plain prints one frame for scripts.",
      "The README's comparison table splits two installs. The plugin path adds slash commands, skills, and agent definitions, and writes no project files. Hooks are not installed. An MCP server is registered only when ruflo-core is installed, and its tool names are prefixed. Other plugins generally do not ship an MCP server. The CLI init path writes .claude/, .claude-flow/, CLAUDE.md, helpers, and settings, and it registers the MCP server, hooks, and daemon. Plugin installs from the ruflo marketplace need Claude Code 2.1.287 or later. Mods run with the account's permissions and are not sandboxed. The README says to read that code before installing.",
      "The ruflo-swarm plugin coordinates teams with TeamCreate, SendMessage, and Task. Each agent can enter its own git worktree so edits do not share one checkout. The plugin README lists hierarchical, mesh, ring, and star topologies. It requires the ruflo-core plugin and pins the CLI to @claude-flow/cli v3.6 on the major and minor version. The live swarm pane is marked early access. It draws beside the transcript only when Claude Code function hooks are on. Without those hooks the pane does not load. Status and topology commands are /ruflo swarm pane, status, topology, claims, and consensus.",
      "The console records workflows, agents, and cost beside the session. The README's Claude control section says the default is read plus ask. You can raise it to write, manage, or full, with ask or auto approval. Actions above the selected level are refused. Network, spending, and destructive actions still ask even in auto. Take back control stops Claude control. The README's console GIFs are recordings of a sample project. Its compact console SVG is renderer frames and does not show a provider call."
    ],
    bestFor: [
      "Adding an MCP server and hooks to a Claude Code project with ruflo init",
      "A swarm where each agent has its own git worktree",
      "A console beside the session, with Claude control capped by a permission level"
    ],
    tags: [
      "coordination",
      "coding agents",
      "MCP",
      "worktrees",
      "MIT"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ruvnet/ruflo", emphasis: "primary"
      },
      {
        label: "README",
        href: "https://github.com/ruvnet/ruflo/blob/main/README.md"
      },
      {
        label: "Swarm plugin docs",
        href: "https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-swarm/README.md"
      },
      {
        label: "License",
        href: "https://github.com/ruvnet/ruflo/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/ruflo/ruflo-console.webp",
        alt: "One frame of the Ruflo console main menu beside Claude Code, with Swarm, Intelligence, Safety, Network, and Tools sections, in a sample project.",
        caption: "One frame of the ruflo console tour GIF from the ruvnet/ruflo README (docs/assets/ruflo-console-tour.gif), retrieved November 13, 2026; not a local runtime test. The README says the recording is a sample project.",
        sourceName: "Ruflo GitHub README",
        sourceUrl: "https://github.com/ruvnet/ruflo/blob/main/README.md"
      },
      {
        src: "/images/players/ruflo/ruflo-control.webp",
        alt: "Claude Code lists ruflo console_open calls for Learning, Security, and Overview, next to a Claude control panel set to write that logs those actions.",
        caption: "One frame of the Claude control GIF from the ruvnet/ruflo README (docs/assets/ruflo-console-claude-control.gif), retrieved November 13, 2026; not a local runtime test. The README says this recording is a sample project and that swarm-stop is refused below the full level.",
        sourceName: "Ruflo GitHub README",
        sourceUrl: "https://github.com/ruvnet/ruflo/blob/main/README.md"
      },
      {
        src: "/images/players/ruflo/ruflo-architecture.svg",
        alt: "Diagram of Ruflo: a plugin install with no project files, npx ruflo init with hooks and MCP, a swarm worktree per agent, and a console with a permission level.",
        caption: "Diagram of the two install paths and the swarm plugin. Drawn from the ruvnet/ruflo README and the ruflo-swarm plugin README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Ruflo GitHub README",
        sourceUrl: "https://github.com/ruvnet/ruflo/blob/main/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection("ruflo", "Ruflo", "After a Ruflo-coordinated team ships a reviewed product change, separately configured analytics can inform the next team task.", ["a team implements and reviews a product change", "the operator deploys it to a separately instrumented surface", "an agent with separately configured analytics access reads observed outcomes", "the operator scopes the next swarm task from that evidence"], "This is an optional workflow, not a native Ruflo integration. Configure tracking on the deployed product and authenticated analytics access separately; Ruflo's MCP tools and agent lifecycle do not install Agent Analytics or report product events.", "deployed page, signup, activation event, or funnel step", [])
  },
  {
    slug: "microsoft-agent-framework", installMethod: "mcp", rank: 38, title: "Microsoft Agent Framework", githubRepo: "microsoft/agent-framework", accent: "blue",
    category: "Multi-Agent Platforms And Builders",
    mark: { kind: "monogram", value: "AF", label: "Microsoft Agent Framework monogram" },
    summary: "Microsoft Agent Framework is an MIT-licensed library for agents and multi-agent workflows in Python and .NET. You connect executors with edges, and you can place agents on those nodes.",
    note: "It is a framework for the application you write and test, not a ready-made parallel coding-agent workspace, and provider accounts, third-party costs, and safety filters stay with that application.",
    overview: [
      "Python installs with pip install agent-framework. That pulls the standard package set. Experimental modules are a separate install of agent-framework-lab. .NET uses the Microsoft.Agents.AI package. Foundry samples also add Microsoft.Agents.AI.Foundry, Azure.AI.Projects, and Azure.Identity. The Go SDK, its samples, and its issues live in microsoft/agent-framework-go, not in this repository. A short Python sample constructs an Agent with FoundryChatClient and AzureCliCredential, then calls run. The .NET quickstart uses AIProjectClient.AsAIAgent. The README says authentication errors with Azure credentials are fixed by az login, and that DefaultAzureCredential is a development convenience rather than the production choice it recommends.",
      "Workflows ship in agent-framework-core. The getting-started samples begin with executors and edges, then agents used as nodes, then streaming. A functional style writes the workflow as async Python functions, with asyncio.gather for a fan-out and a fan-in. Graph samples add conditional edges, switch-case groups, and loops. Documented orchestration shapes include sequential, concurrent, handoff, and group chat. A workflow can be wrapped so it behaves as an agent. Streaming uses run(stream=True) in the functional samples. OpenTelemetry samples record executor input and output without editing the executor. DevUI is the interactive developer UI linked from the README. Graph visualization in the samples needs the graphviz package and a local GraphViz install.",
      "Checkpoint samples save a workflow, inspect the checkpoint, and resume. Human-in-the-loop samples pause with request_info and continue when the person answers. Tool approval can sit in middleware on the agent, or in the workflow when the wait has to be durable. CosmosCheckpointStorage is the sample backend for Azure Cosmos DB. In-process storage is the other sample path. Foundry hosted agents are an optional hosting sample. The README describes them as two additional lines on top of the agent you already built. Local samples do not require that host. A coding-agent skill, agent-framework-builder-python, can be installed from this repository with gh skill install or npx skills add. The README says the @main ref is required until a tagged release includes the skill.",
      "The workflow samples include an MCP client. MCPStreamableHTTPTool connects an agent to an MCP server URL. The caller-owned sample points that tool at the public Microsoft Learn MCP server, passes the client into a sequential workflow, and keeps the client open until the run finishes. The sample says most applications can pass the URL and let the framework manage the connection. That is a client inside the application you write. It is not a hosted team runner. The README's third-party note says you carry the cost and the terms of any server, agent, or non-Azure model you call, and that you add your own safety filters."
    ],
    bestFor: [
      "Python or .NET applications that define their own agent workflows",
      "Checkpoints and human approval inside the workflow you write",
      "Calling an MCP server from a workflow with MCPStreamableHTTPTool"
    ],
    tags: [
      "framework",
      "Python",
      ".NET",
      "workflows",
      "MCP",
      "MIT"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/microsoft/agent-framework", emphasis: "primary"
      },
      {
        label: "README",
        href: "https://github.com/microsoft/agent-framework/blob/main/README.md"
      },
      {
        label: "Workflow samples",
        href: "https://github.com/microsoft/agent-framework/blob/main/python/samples/03-workflows/README.md"
      },
      {
        label: "License",
        href: "https://github.com/microsoft/agent-framework/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/microsoft-agent-framework/microsoft-agent-framework-workflow.svg",
        alt: "Diagram of Microsoft Agent Framework workflows: executors and edges, sequential and concurrent patterns, streaming, and the application you write.",
        caption: "Diagram of the documented workflow model. Drawn from the microsoft/agent-framework README and workflow samples, retrieved November 13, 2026; not a product screenshot. The README publishes a banner and a video thumbnail, not an application screenshot.",
        sourceName: "Microsoft Agent Framework README",
        sourceUrl: "https://github.com/microsoft/agent-framework/blob/main/README.md"
      },
      {
        src: "/images/players/microsoft-agent-framework/microsoft-agent-framework-checkpoint.svg",
        alt: "Diagram of workflow checkpoints, a human request_info pause, and MCPStreamableHTTPTool calling an MCP server URL.",
        caption: "Diagram of checkpoints and the MCP client sample. Drawn from the workflow samples, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Microsoft Agent Framework workflow samples",
        sourceUrl: "https://github.com/microsoft/agent-framework/blob/main/python/samples/03-workflows/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection("microsoft-agent-framework", "Microsoft Agent Framework", "An application built with this framework can optionally use separately configured product analytics to assess user-facing outcomes.", ["developers build and test a multi-agent application", "the deployed product is separately instrumented with meaningful events", "an application tool or external agent with separately configured access queries outcomes", "developers use the evidence to choose the next application change"], "This is an optional application-level workflow, not a native Microsoft Agent Framework integration. Implement any analytics tool or API calls yourself, configure authentication separately, and keep product events distinct from execution traces and workflow checkpoints.", "application task completion, signup, activation event, or funnel step", [])
  },
  {
    slug: "langgraph", installMethod: "mcp", rank: 39, title: "LangGraph", githubRepo: "langchain-ai/langgraph", accent: "mint",
    category: "Multi-Agent Platforms And Builders",
    mark: { kind: "monogram", value: "LG", label: "LangGraph monogram" },
    summary: "LangGraph is an MIT-licensed Python library and runtime for long-running stateful agents. You define a graph of shared state, nodes, and edges, and you can mix ordinary code with a model call in the same graph.",
    note: "Application developers implement multi-agent composition, the same core also runs a single-agent graph, and optional LangSmith tracing and deployment stay separate from the MIT-licensed LangGraph core.",
    overview: [
      "Install is pip install -U langgraph, or uv add langgraph. The overview describes LangGraph as a low-level orchestration framework and runtime. It does not set prompts or a fixed agent shape. A minimal example builds a StateGraph over MessagesState, adds one node, connects START to that node and the node to END, then calls compile and invoke. Nodes return partial updates to the shared state. An edge can branch. One node can be hand-written code and the next can call a model. Docs examples often use LangChain for models and tools. The overview says LangGraph does not require LangChain. LangGraph.js is the separate JavaScript library, with its own docs. Deep Agents is a higher-level package on top of LangGraph for planning, subagents, and filesystem tools. Use that, or LangChain agents, when you want a ready agent loop instead of the graph.",
      "The runtime primitives the overview lists are durable execution, streaming, human-in-the-loop, and memory. A checkpointer stores state so a run can resume after a failure or a pause. Human-in-the-loop pauses execution, lets you inspect or edit state, and then continues. Short-term memory is the thread state for the current run. Longer-term memory is a store that lasts across sessions. Streaming can emit tokens, state updates, and other events while the graph runs. The public interface takes ideas from NetworkX. The project credits Pregel and Apache Beam as inspiration. LangChain Inc builds it. The core is MIT licensed and can be used without the rest of the LangChain stack.",
      "LangSmith is the separate product for traces, evaluation, prompts, and deployment. LangSmith Agent Server deploys stateful agents, and Studio is the visual prototyping surface for that product. The graph runs without those services. LangSmith Engine can read LangGraph traces and propose a fix as a pull request. That is a LangSmith feature, not part of the MIT-licensed package.",
      "On the same docs site, LangChain's MCPAdapter connects an agent to tools defined on MCP servers. It needs langchain[mcp] 1.4.0 or newer, and the page marks that namespace as beta. You pass the adapted tools to an agent. LangGraph's overview does not require that adapter. A graph can call whatever tools you put in a node, including tools produced that way. Persistence, interrupts, and the checkpointer remain LangGraph's own runtime, whether or not an MCP server is attached."
    ],
    bestFor: [
      "A graph you define, with shared state and explicit edges",
      "Checkpointed runs that pause for a person and then resume",
      "Mixing ordinary code and model calls without a fixed team app"
    ],
    tags: [
      "framework",
      "stateful agents",
      "checkpoints",
      "Python",
      "MIT"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/langchain-ai/langgraph", emphasis: "primary"
      },
      {
        label: "README",
        href: "https://github.com/langchain-ai/langgraph/blob/main/README.md"
      },
      {
        label: "Docs",
        href: "https://docs.langchain.com/oss/python/langgraph/overview"
      },
      {
        label: "Multi-agent docs",
        href: "https://docs.langchain.com/oss/python/langchain/multi-agent"
      },
      {
        label: "License",
        href: "https://github.com/langchain-ai/langgraph/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/langgraph/langgraph-graph.svg",
        alt: "Diagram of a LangGraph StateGraph: shared state, nodes and edges from START to END, mixed code and model steps, then compile and invoke.",
        caption: "Diagram of the documented graph. Drawn from the LangGraph overview, retrieved November 13, 2026; not a product screenshot. The README and overview publish no product screenshot.",
        sourceName: "LangGraph overview",
        sourceUrl: "https://docs.langchain.com/oss/python/langgraph/overview"
      },
      {
        src: "/images/players/langgraph/langgraph-checkpoint.svg",
        alt: "Diagram of LangGraph checkpoints, a human interrupt, streaming, and LangSmith kept separate from the MIT-licensed core.",
        caption: "Diagram of checkpoint, interrupt, and the LangSmith boundary. Drawn from the LangGraph overview, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "LangGraph overview",
        sourceUrl: "https://docs.langchain.com/oss/python/langgraph/overview"
      }
    ],
    agentAnalytics: agentAnalyticsSection("langgraph", "LangGraph", "A LangGraph-based application can optionally use separately configured product analytics to assess outcomes beyond graph execution.", ["developers implement and test a graph-based application", "the deployed product is separately instrumented with meaningful events", "an explicitly implemented tool or external agent queries outcomes using separately configured access", "developers use measured behavior to guide the next application change"], "This is an optional application-level workflow, not a native LangGraph integration. Implement and authenticate any Agent Analytics tool or API access separately; product analytics does not replace graph state, checkpoints, or LangSmith traces.", "application task completion, signup, activation event, or funnel step", [])
  },
  {
    slug: "claudexor", installMethod: "mcp",
    rank: 33,
    title: "Claudexor",
    githubRepo: "razzant/claudexor",
    accent: "violet",
    mark: { kind: "monogram", value: "Cx", label: "Claudexor monogram" },
    summary: "Claudexor is an MIT-licensed local control plane for coding CLIs already signed in on the machine. Ask and plan turns stay read-only. Agent turns write, and a best-of-N race keeps each candidate in its own envelope.",
    note: "The README's current status line is v6.1.0, the signed Mac app needs macOS 26 or newer, the npm CLI needs Node.js 24.15 or newer, and the README says the app collects no telemetry.",
    overview: [
      "Claudexor runs Codex CLI, Claude Code, Cursor CLI, OpenCode, Antigravity CLI, Grok Build, and raw API adapters through one local engine. The Mac app is a signed and notarized DMG. It bundles its own Node runtime and starts the daemon on launch. The npm install -g claudexor path provides the claudexor and claudexord commands on macOS or Linux. The README says login and runs on Windows are not qualified yet. Git is required for worktrees. At least one vendor CLI has to be logged in through Claudexor, or a provider API key set for the raw API route. Files on the machine are the source of truth. The privacy section says Claudexor collects no telemetry, analytics, or crash reports.",
      "The canonical modes are ask, plan, and agent. Ask is read-only. --deep-scan widens it into a bounded multi-scout pass with a synthesis. Plan is read-only and can freeze a plan as a content-hashed contract. --council drafts plans on several harnesses in parallel, writes each draft to a file, and has one member merge them into a single plan. A failed member is recorded and the merge continues with the drafts that remain. Agent is the writing route. A single candidate edits the thread's live tree and resumes the vendor's own session, so the next turn sees the work. --n above 1 runs a best-of-N race in isolated throwaway envelopes, reviews across harnesses, and adopts the winner's patch into the live tree. --attempts caps a repair loop. --until-clean keeps repairing until gates and review converge, the budget or quota runs out, the run is cancelled, or it stalls. Unknown cost is not stored as zero.",
      "Named profiles hold Antigravity, Claude, Codex, Cursor, and Grok Build subscriptions side by side. Quota routing can move off an account when Antigravity, Claude, or Codex reports a typed limit. Cursor's dashboard supplies dated monetary figures, not an execution-quota verdict. A continuation packet fills a lane that missed part of the thread. The packet is a file, and the prompt points at that path. Switching harness or account does not migrate the vendor's native session.",
      "--delegate injects a scoped MCP belt into Claude, Codex, or Cursor so the harness can start child runs. The belt exposes ask, plan, run, best-of, and status tools, not apply or settings. Depth is 1, so a child cannot delegate. The default cap is 8 children, on the parent's budget. The parent integrates the result. The control API listens on loopback with a bearer token. A remote SSH thread keeps the Mac UI local and the vendor CLIs on the host."
    ],
    bestFor: [
      "Ask, plan, and agent turns on the coding CLIs already signed in",
      "A best-of-N race with isolated candidates and a cross-harness review",
      "Named subscription profiles, with unknown quota left unknown"
    ],
    tags: [
      "coding agents",
      "best-of-N",
      "local-first",
      "quota",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://claudexor.ai/", emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/razzant/claudexor"
      },
      {
        label: "Documentation",
        href: "https://github.com/razzant/claudexor/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/razzant/claudexor/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/claudexor/claudexor-accounts.webp",
        alt: "Claudexor Accounts list for Codex, Claude, and Cursor, beside Claude subscription quota bars for 5 hour, 7 day, and 7 day Fable windows.",
        caption: "Accounts and quota from the razzant/claudexor README (docs/assets/app-main-window.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Claudexor GitHub README",
        sourceUrl: "https://github.com/razzant/claudexor/blob/main/README.md"
      },
      {
        src: "/images/players/claudexor/claudexor-thread.webp",
        alt: "Claudexor thread list, a Codex turn with an inline image and an applied-change receipt, live quota cards, and the composer. The published capture also includes the macOS dock.",
        caption: "Thread workspace from the razzant/claudexor README (docs/assets/app-agent-run.jpg), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Claudexor GitHub README",
        sourceUrl: "https://github.com/razzant/claudexor/blob/main/README.md"
      },
      {
        src: "/images/players/claudexor/claudexor-install.webp",
        alt: "macOS DMG window showing Claudexor.app next to the Applications folder, with an arrow pointing at Applications.",
        caption: "Mac install image from the razzant/claudexor README (docs/assets/app-install-dmg.png), retrieved November 13, 2026; not a local runtime test. The README says the signed app needs macOS 26 or newer.",
        sourceName: "Claudexor GitHub README",
        sourceUrl: "https://github.com/razzant/claudexor/blob/main/README.md"
      },
      {
        src: "/images/players/claudexor/claudexor-architecture.svg",
        alt: "Diagram of Claudexor modes: read-only ask and plan, an in-place agent turn, a best-of-N race in isolated envelopes, and a depth-1 MCP delegate belt.",
        caption: "Diagram of the documented modes. Drawn from the razzant/claudexor README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Claudexor GitHub README",
        sourceUrl: "https://github.com/razzant/claudexor/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Claudexor-assisted work",
      valueProp: "Claudexor records coding-agent execution and review. Separately configured analytics can help a team assess a deployed change's user-facing results.",
      measurementLoop: [
        "a team uses Claudexor to implement and review a product change",
        "the team deploys the change to a separately instrumented surface",
        "a human or an agent with separately configured analytics access reads the observed results",
        "the team uses that evidence when deciding on the next coding task"
      ],
      setupNotes: "This is an optional workflow, not a built-in Claudexor integration with Agent Analytics. Configure tracking on the deployed product and analytics access separately; Claudexor does not install tracking or send its run telemetry to Agent Analytics.",
      prompt: "If analytics access and tracking are already configured, inspect the deployed change's observation window and report measured user outcomes. Otherwise, explain what is missing. Do not imply a native Claudexor integration or infer causation from a before-and-after comparison alone.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("claudexor"),
      screenshots: []
    }
  },
  {
    slug: "aiworks", installMethod: "cli-and-skill",
    rank: 44,
    title: "AIWorks",
    githubRepo: "netbka/aiworks",
    category: "Parallel Coding-Agent Runners",
    accent: "orange",
    mark: { kind: "monogram", value: "AW", label: "AIWorks monogram" },
    summary: "AIWorks is an MIT-licensed supervisor for one Windows PC. It runs an approved plan through Claude Code, Codex, or Cursor in isolated git worktrees, has a separate session check each step, and opens a GitHub pull request.",
    note: "Early preview: real workers run only on Windows, and the dashboard screenshots in the README are made-up projects from a local fixture.",
    overview: [
      "AIWorks is a Node.js supervisor on the owner's computer. It needs Windows 10 or 11, Node.js 22.5 or newer, Git, and the GitHub CLI signed in. Workers run inside Windows process containment and refuse to start on other operating systems. At least one of Claude Code, Codex, or Cursor Agent must be signed in. A local governance folder supplies the project registry, and new work has to name a project registered there. Two scheduled tasks start the supervisor and the dashboard at sign-in, and every five minutes if either has stopped. The dashboard listens at http://127.0.0.1:4318, reads the local store and Git, and makes no GitHub API calls. Actions need the same origin and a per-session token.",
      "A plan is a private JSON file under .local/campaigns. The supervisor reads registered plans, starts worker runs, records each step in a local SQLite store, and publishes through the GitHub REST API. Idle checks do not call a model. A worker is a headless Claude Code, Codex, or Cursor run in an isolated git worktree, without personal settings, hooks, MCP servers, or memory. The order is Claude, then Codex, then Cursor, and only a provider problem moves the step. A failed check is not handed to another provider. The checker is a fresh read-only session on the exact commit. It echoes that commit and the builder report's fingerprint, and it runs the tests again. A rejection goes into the next packet.",
      "Publish pushes the checked commit and opens one pull request, or posts one report, reusing an existing pull request so a retry does not duplicate it. Merging is off by default. When it is enabled, the supervisor merges only in listed repositories, and only when the base branch receives exactly the checked commit. If the base moved, it updates the branch and checks again. Deployment needs a separate grant. A supervisor running unmerged code starts no new work. A usage limit is stored per account with its reset time, or 30 minutes if the reset is unknown. After a crash, the next supervisor adopts the running worker through its heartbeat. config.json holds paths, not credentials.",
      "Needs you lists sign-in, credentials, payment, and results you chose to accept yourself. Usage limits stay off that list. The planning assistant can read projects and propose plans. It does not register work and posts nothing to GitHub. The README says its screenshots are made-up projects from a fixture on port 4319. It also counts 63 pull requests in this repository across 12 and 13 October 2026, each checked by a second session. That figure is the project's reading of its own history."
    ],
    bestFor: [
      "An approved plan that keeps running on one Windows PC",
      "A separate session that checks the builder's commit before a pull request",
      "Claude Code, Codex, and Cursor as ordered workers, without their personal MCP setup"
    ],
    tags: [
      "coding agents",
      "git worktrees",
      "independent check",
      "Windows",
      "MIT"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/netbka/aiworks", emphasis: "primary"
      },
      {
        label: "README",
        href: "https://github.com/netbka/aiworks/blob/main/README.md"
      },
      {
        label: "Runbook",
        href: "https://github.com/netbka/aiworks/blob/main/docs/SUPERVISOR.md"
      },
      {
        label: "License",
        href: "https://github.com/netbka/aiworks/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/aiworks/aiworks-projects.webp",
        alt: "AIWorks Projects screen on my-pc, with shop-app and notes-site marked Needs you and recipes waiting for a worker.",
        caption: "Projects screen from the netbka/aiworks README (docs/assets/readme/projects.png), retrieved November 13, 2026; not a local runtime test. The README says the screenshots show made-up example projects.",
        sourceName: "AIWorks GitHub README",
        sourceUrl: "https://github.com/netbka/aiworks/blob/main/README.md"
      },
      {
        src: "/images/players/aiworks/aiworks-needs.webp",
        alt: "AIWorks Needs me screen listing stopped work, a decision, and pull requests grouped under the example project notes-site.",
        caption: "Needs you screen from the netbka/aiworks README (docs/assets/readme/needs-me.png), retrieved November 13, 2026; not a local runtime test. The README says the screenshots show made-up example projects.",
        sourceName: "AIWorks GitHub README",
        sourceUrl: "https://github.com/netbka/aiworks/blob/main/README.md"
      },
      {
        src: "/images/players/aiworks/aiworks-work.webp",
        alt: "AIWorks Work tab for shop-app: one step being checked by Claude, one being built by Claude, and one not started.",
        caption: "Work tab from the netbka/aiworks README (docs/assets/readme/work.png), retrieved November 13, 2026; not a local runtime test. The README says the screenshots show made-up example projects.",
        sourceName: "AIWorks GitHub README",
        sourceUrl: "https://github.com/netbka/aiworks/blob/main/README.md"
      },
      {
        src: "/images/players/aiworks/aiworks-architecture.svg",
        alt: "Diagram of AIWorks: a registered plan, a builder in an isolated worktree, a fresh checker, and a pull request. Merging stays off unless enabled.",
        caption: "Diagram of the documented step. Drawn from the netbka/aiworks README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "AIWorks GitHub README",
        sourceUrl: "https://github.com/netbka/aiworks/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from AIWorks-delivered changes",
      valueProp: "AIWorks delivers reviewed pull requests; it does not observe what a merged change does for users. Separately configured product analytics can close that loop.",
      measurementLoop: [
        "a plan step is implemented by a worker session and verified by a separate session",
        "the reviewed pull request is merged and deployed to a separately instrumented product surface",
        "a human or an agent with separately configured analytics access reads the observed results",
        "the owner uses that evidence to write the next plan"
      ],
      setupNotes: "This is an optional workflow, not a native AIWorks integration with Agent Analytics. Configure tracking on the deployed product and analytics access separately; this listing does not install tracking or report AIWorks runs to Agent Analytics.",
      prompt: "If tracking and analytics access are already configured for the deployed change, report measured user outcomes for the observation window with their limitations. Otherwise, identify what is missing. Do not assume a native AIWorks integration or infer outcomes from pull request activity.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("aiworks"),
      screenshots: []
    }
  },
  {
    slug: "tale", installMethod: "cli-and-skill",
    rank: 40,
    title: "Tale",
    githubRepo: "tale-project/tale",
    category: "Coordination And Team Systems",
    accent: "blue",
    mark: { kind: "monogram", value: "T", label: "Tale monogram" },
    summary: "Tale is an MIT-licensed workspace where a team and named project agents share a task board, files, and knowledge. Coding harnesses run in persistent sandboxes, and assigning an agent does not start it.",
    note: "Community self-hosting and paid Cloud use the same product features, Enterprise adds professional operation and support, and model-provider use is billed separately.",
    overview: [
      "A Tale project holds the task board, files, instructions, and the project agents. The code is MIT licensed. Self-hosting starts from Docker and Compose, storage, and a model-provider credential. On macOS or Linux the published CLI is the repository install script, then tale init and tale dev. tale dev prints a URL. You create the first account and organization, add a credential under Settings, AI providers, and send a first message. Production adds DNS, TLS, backups, and access controls. tale deploy uses data volumes separate from local development. The README says Community and Enterprise include the same product features, and Enterprise adds professional operation and support.",
      "Each project agent has instructions, a harness, a model, and the tools it is allowed to use. The README lists Claude Code, Codex, Cursor, Gemini CLI, Hermes, OpenClaw, OpenCode, Pi, and Qwen Code. Which combination runs depends on the deployment, the credentials, and sandbox capacity. Stored provider API keys go through Tale's model gateway. A supported vendor subscription works only with a compatible runtime, cannot power ordinary Chat, and bypasses the gateway's metering and spending caps. Agents run in persistent sandbox workspaces. How many run at once is limited by the capacity you configure. A local model keeps inference on your infrastructure. Connectors and external tools still have their own data paths. The self-hosting docs say self-hosting alone does not keep every request local.",
      "You create a task with the problem, source files, and completion criteria, then assign a person or a project agent. The task guide says assignment alone does not start execution. The task can stay in Backlog until someone clicks Start agent or moves it to In progress. Create and start agent does both in one step. When it runs, the agent uses the description, comments, and input files in its sandbox. The report appears in the task comments. Collected output appears as deliverables. You can steer with @mentions and ask for corrections in the task. A manager agent can start other project agents when it has the delegation tools. An agent that another agent started cannot start further agents, and a run a Member started cannot start any. A task that an open task blocks does not start. An agent cannot start itself on another task. An agent that is already working is still started in a worker of its own.",
      "A versioned automation repeats a process on a schedule, a webhook, or a manual start, including connector approvals. External clients can call Tale's own MCP endpoint. That page describes clients connecting to Tale, not Tale attaching an outside MCP server to a project agent. Knowledge upload and indexing are separate steps."
    ],
    bestFor: [
      "A shared task board where assignment does not start the agent",
      "Coding harnesses in persistent sandboxes, with the report left on the task",
      "Self-hosting the MIT code, or using the managed Cloud"
    ],
    tags: [
      "task board",
      "coding harnesses",
      "sandboxes",
      "self-hosted",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://tale.dev/", emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/tale-project/tale"
      },
      {
        label: "Project agents",
        href: "https://docs.tale.dev/platform/projects/project-agents"
      },
      {
        label: "Harnesses",
        href: "https://docs.tale.dev/platform/agents/harnesses"
      },
      {
        label: "Pricing",
        href: "https://tale.dev/pricing"
      },
      {
        label: "License",
        href: "https://github.com/tale-project/tale/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/tale/tale-tasks.webp",
        alt: "Tale task board for a Website relaunch project, with columns Backlog, To do, In progress, In review, Done, and Cancelled.",
        caption: "Project task board from the tale-project/tale README (.github/assets/readme-gallery-tasks.webp), retrieved November 13, 2026; not a local runtime test. The README says the captures show the English interface.",
        sourceName: "Tale GitHub README",
        sourceUrl: "https://github.com/tale-project/tale/blob/main/README.md"
      },
      {
        src: "/images/players/tale/tale-agents.webp",
        alt: "Tale Agents tab for Website relaunch, listing Content editor on Claude Code and Redirect auditor on Codex, each with a model and four equipped tools.",
        caption: "Project agents from the tale-project/tale README (.github/assets/readme-gallery-project-agents.webp), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Tale GitHub README",
        sourceUrl: "https://github.com/tale-project/tale/blob/main/README.md"
      },
      {
        src: "/images/players/tale/tale-workflow.webp",
        alt: "Tale automation editor for Triage the Gmail inbox, with fetch, inbox, and triage nodes and the selected triage prompt and model id.",
        caption: "Workflow editor from the tale-project/tale README (.github/assets/readme-gallery-workflow-editor.webp), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Tale GitHub README",
        sourceUrl: "https://github.com/tale-project/tale/blob/main/README.md"
      },
      {
        src: "/images/players/tale/tale-architecture.svg",
        alt: "Diagram of Tale: assigning an agent does not start it, the run uses a sandbox harness, and a child agent cannot start further agents.",
        caption: "Diagram of the documented task start. Drawn from the Tale task guide and README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Tale task guide",
        sourceUrl: "https://docs.tale.dev/platform/projects/task-automation"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Tale-assisted work",
      valueProp: "Tale records task reports and deliverables. Separately configured product analytics can help a team assess what a deployed change does for its users.",
      measurementLoop: [
        "a team assigns an implementation task to a project agent and reviews its output",
        "the reviewed change is deployed to a separately instrumented product surface",
        "a human or an agent with separately configured analytics access reads the observed results",
        "the team uses that evidence to define the next task"
      ],
      setupNotes: "This is an optional workflow, not a native Tale integration with Agent Analytics. Configure tracking on the deployed product and analytics access separately; this listing does not install tracking or report Tale agent runs to Agent Analytics.",
      prompt: "If tracking and analytics access are already configured for the deployed change, report measured user outcomes for the observation window with their limitations. Otherwise, identify what is missing. Do not assume a native Tale integration or infer causation from a before-and-after comparison alone.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("tale"),
      screenshots: []
    }
  },
  {
    slug: "yylo", installMethod: "cli-and-skill",
    rank: 41,
    title: "YYLO",
    githubRepo: "yylo-dev/yylo",
    accent: "emerald",
    mark: { kind: "monogram", value: "Yy", label: "YYLO monogram" },
    summary: "YYLO is an MIT-licensed command-line orchestrator. It runs a coding agent through a typed task, keeps that work in its own git worktree, and lands the result with Git's expected-old ref check.",
    note: "It needs Node.js 20.10 or newer, npm, and Git, the yylo and yy commands are the same program, and skills, the task ledger, and benchmarks install as separate packages.",
    overview: [
      "Install is npm install --global @yylo/cli@latest. The README says the stable channel is the @latest tag and prereleases stay on @next. This checkout's README says it targets CLI 0.2.12 and requires YYLO Ledger 0.4.0 exactly. Other Ledger versions are rejected before yy ledger delegates. Ledger is the separate Git-native task store. YYLO Benchmark is the separate evaluation package. Neither is bundled in @yylo/cli. ypl means yy pi --live. Provider credentials stay with the agent you installed.",
      "Advanced mode is the protected delivery path. yy task start freezes the protected target SHA, creates a dedicated branch and worktree, and finishes configured dependency hydration before it reports WORKING. The agent edits, tests, and commits in that worktree. Controller metadata and the integration-owner checkout are separate from those product bytes. yy task finish checks scope, a clean committed tip, hydration, ownership, and the selected validation, then queues the task. It does not merge. Optional yy task preflight is read-only and is not required. yy merge land selects one immutable task, composes it in a private detached candidate, and updates the target only if the expected old ref is still current. A moved target is composed again. A conflict stays on that task. Git success and the Ledger projection are separate. yy merge project retries the projection and does not repeat the Git update. Merge status reports model_calls as 0. Tests and review are project checks outside merge.",
      "yy init --mode simple writes one shared checkout for code, notes, and Ledger. Agents share files there. yy task local records the task in that checkout. Simple init writes files without an extra confirmation. --dry-run writes nothing. Simple to Advanced is not supported. Advanced keeps a controller, isolated task worktrees, and managed merging. In an empty repository, init creates the first commit, keeps the original branch as the product target, and creates a detached protected integration-owner worktree. It does not commit or rearrange an existing dirty repository. The documented canary does not contact a model provider. yy watch only reads existing run evidence. yy doctor workspace is read-only and returns nonzero when it finds a topology problem.",
      "yy loop -n bounds the outer steps, and -i bounds iterations inside one agent call. The same steps can live in a flow.yaml file. Skills are versioned in yylo-dev/yylo-skills, not in the CLI tarball. yy skills install copies seven skills into .agents/skills, .claude/skills, and .pi/skills. A fresh Simple init installs them unless you pass --no-skills. Customized skill directories stay unless you force replacement. Task and merge commands can print JSON with --format and --raw."
    ],
    bestFor: [
      "A typed task start, finish, and merge land on an isolated worktree",
      "Receipts and Ledger state kept apart from the product checkout",
      "A shared Simple checkout, or Advanced mode when the merge must be protected"
    ],
    tags: [
      "coding agents",
      "CLI",
      "worktrees",
      "merge land",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://yylo.dev/", emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/yylo-dev/yylo"
      },
      {
        label: "README",
        href: "https://github.com/yylo-dev/yylo/blob/main/README.md"
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@yylo/cli"
      },
      {
        label: "License",
        href: "https://github.com/yylo-dev/yylo/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/yylo/yylo-tui.webp",
        alt: "A YYLO terminal session after git log and a Pi subagent turn. The status line shows iteration 1 completed and a resume command with a session id.",
        caption: "Live terminal session from the yylo-dev/yylo README (assets/yylo-tui-live-session.png), retrieved November 13, 2026; not a local runtime test. The README labels this ypl, which is yy pi --live.",
        sourceName: "YYLO GitHub README",
        sourceUrl: "https://github.com/yylo-dev/yylo/blob/main/README.md"
      },
      {
        src: "/images/players/yylo/yylo-summary.webp",
        alt: "YYLO execution summary after one successful iteration: duration, one tool call, git branch, completion time, total cost, and the session id.",
        caption: "Execution summary from the yylo-dev/yylo README (assets/yylo-execution-summary.png), retrieved November 13, 2026; not a local runtime test. The README says this block prints iterations, tool calls, cost, and session ids after a run.",
        sourceName: "YYLO GitHub README",
        sourceUrl: "https://github.com/yylo-dev/yylo/blob/main/README.md"
      },
      {
        src: "/images/players/yylo/yylo-architecture.svg",
        alt: "Diagram of YYLO Advanced mode: task start freezes the target SHA, work stays in that worktree, finish queues the task, and merge land uses an expected-old ref.",
        caption: "Diagram of the documented Advanced task path. Drawn from the yylo-dev/yylo README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "YYLO GitHub README",
        sourceUrl: "https://github.com/yylo-dev/yylo/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from YYLO-orchestrated work",
      valueProp: "YYLO records task runs, receipts, and merge results. Separately configured analytics can help a team assess a deployed change's user-facing results.",
      measurementLoop: [
        "a team uses YYLO to run a coding-agent task and land the reviewed change",
        "the team deploys the change to a separately instrumented surface",
        "a human or an agent with separately configured analytics access reads the observed results",
        "the team uses that evidence when deciding on the next task"
      ],
      setupNotes: "This is an optional workflow, not a built-in YYLO integration with Agent Analytics. Configure tracking on the deployed product and analytics access separately; YYLO does not install tracking or send its run receipts to Agent Analytics.",
      prompt: "If analytics access and tracking are already configured, inspect the deployed change's observation window and report measured user outcomes. Otherwise, explain what is missing. Do not imply a native YYLO integration or infer causation from a before-and-after comparison alone.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("yylo"),
      screenshots: []
    }
  },
  {
    slug: "sqwakie", installMethod: "cli-and-skill",
    rank: 42,
    title: "Sqwakie",
    githubRepo: "alexcarney460-hue/walkie",
    category: "Coordination And Team Systems",
    accent: "mint",
    mark: { kind: "image", src: "/logos/sqwakie.svg", label: "Sqwakie mark" },
    summary: "A source-available coordination layer, under FSL-1.1-ALv2, where a team's Claude Code and Codex agents message each other over a signed append-only log replicated peer to peer.",
    note: "Each version becomes Apache-2.0 on the second anniversary of its release. The free plan covers 2 people and 4 machines. Native Windows is not supported.",
    overview: [
      "Sqwakie puts people and their coding agents on one team. Agents use post, get, reply, subscribe, and ask from the walkie CLI or as MCP tools with the same verbs. Setup connects Claude Code and Codex when it finds them. Install is curl -fsSL https://sqwakie.si/install.sh | sh. The script picks a binary for macOS on Apple Silicon or for Linux on x64 or arm64, checks the release signature and the SHA-256, and runs walkie setup. The README's status line for the default install is v0.2.0-pre.21. Pre-release builds skip Intel Macs. Native Windows is not supported. One daemon runs per machine, with a SQLite log and an ed25519 node key. Every event is signed by the machine that wrote it.",
      "Peers connect with QUIC and NAT hole-punching, built on iroh, or over a Tailscale tailnet. One team can mix the two through a machine that runs both. When there is no direct path, a relay forwards encrypted traffic. The README says relays see connection metadata such as IP addresses and cannot read the content. The roster is a signed log that only owners can change. A machine joins with an owner-signed single-use invite, or with a Tailscale login. Every machine serves the same live dashboard: who is online, what each agent is doing, what is waiting on a person, and each machine's memory, load, and temperature. Claude Code hooks report that status without a model call. Codex reports when each turn ends. An ask times out after at most 24 hours.",
      "Projects are kanban boards. Every change is a signed post. Agents can start, review, and finish cards. Each project has a Data Room for its files. Seats start an agent on a teammate's machine that has opted in, on that machine's own Claude Code or Codex sign-in. Seats are off on a new machine. Sharing a pooled model is off by default. A phone pairs with a QR code, and the phone web app is end-to-end encrypted between the phone and the computer.",
      "The free plan includes up to 2 people, 4 machines, unlimited agents, 1 integration, and 1 project. Limits block adding more. A lapsed license keeps working for 14 days. The license file is the Functional Source License, Version 1.1, Apache-2.0 Future License. It allows use, modification, and self-hosting except a competing commercial product or service. On the second anniversary of the date a version is made available, that version may be used under Apache-2.0. Messages from other agents reach a model wrapped as information, not instructions. Token-shaped secrets are redacted before anything leaves the machine, and the README calls that redaction best effort."
    ],
    bestFor: [
      "Claude Code and Codex agents messaging across machines without a central server",
      "A signed team log, a live dashboard, and kanban cards agents can finish",
      "A phone paired to the computer, with seats and pooled models off until you enable them"
    ],
    tags: [
      "coordination",
      "peer-to-peer",
      "MCP",
      "kanban",
      "FSL-1.1-ALv2"
    ],
    links: [
      {
        label: "Website",
        href: "https://sqwakie.si/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/alexcarney460-hue/walkie"
      },
      {
        label: "Security",
        href: "https://github.com/alexcarney460-hue/walkie/blob/main/docs/SECURITY.md"
      },
      {
        label: "README",
        href: "https://github.com/alexcarney460-hue/walkie/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/alexcarney460-hue/walkie/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/sqwakie/sqwakie-home.webp",
        alt: "Sqwakie Home for a team named Kestrel, with asks that need a person, machine memory and load, and a Website relaunch project",
        caption: "Sqwakie Home from the walkie repository (site/assets/img/mission-dark.webp), retrieved November 13, 2026; not a local runtime test. The screen shows a sample team.",
        sourceName: "Sqwakie GitHub repository",
        sourceUrl: "https://github.com/alexcarney460-hue/walkie/blob/main/README.md"
      },
      {
        src: "/images/players/sqwakie/sqwakie-phone.webp",
        alt: "The Sqwakie phone Home with the same sample asks, Answer and Decline, and tabs for Projects, Talkie, and Channels",
        caption: "Sqwakie phone view from the walkie repository (site/assets/img/phone-dark.webp), retrieved November 13, 2026; not a local runtime test. The screen shows a sample team.",
        sourceName: "Sqwakie GitHub repository",
        sourceUrl: "https://github.com/alexcarney460-hue/walkie/blob/main/README.md"
      },
      {
        src: "/images/players/sqwakie/sqwakie-machines.webp",
        alt: "A Sqwakie machines table with five of five machines online and an owner named beside each machine",
        caption: "Sqwakie machines table from the walkie repository (site/assets/img/team-dark.webp), retrieved November 13, 2026; not a local runtime test. The screen shows a sample team.",
        sourceName: "Sqwakie GitHub repository",
        sourceUrl: "https://github.com/alexcarney460-hue/walkie/blob/main/README.md"
      },
      {
        src: "/images/players/sqwakie/sqwakie-architecture.svg",
        alt: "Diagram of Sqwakie: signed events on each machine, peers over iroh or Tailscale, and a kanban board of signed posts",
        caption: "Diagram of the peer log, the board, and the license. Drawn from the walkie README and LICENSE, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Sqwakie GitHub README",
        sourceUrl: "https://github.com/alexcarney460-hue/walkie/blob/main/README.md"
      }
    ],
    agentAnalytics: agentAnalyticsSection(
      "sqwakie",
      "Sqwakie",
      "A separately configured outcome readout can inform the next task posted through a Sqwakie team after its work is deployed.",
      [
        "agents implement and review a user-facing change",
        "the operator deploys it to a separately instrumented product",
        "an agent with separately configured analytics access reads the results",
        "the team uses the measured outcome when planning its next handoff"
      ],
      "This is an optional workflow, not a native Sqwakie integration. Configure tracking on the deployed surface and analytics access in the querying agent separately; the team log, Mission Control dashboard, and kanban boards do not supply product analytics.",
      "deployed page, signup, activation event, or funnel step",
      []
    )
  },
  {
    slug: "t3-code", installMethod: "cli-and-skill",
    rank: 43,
    title: "T3 Code",
    githubRepo: "pingdotgg/t3code",
    category: "Parallel Coding-Agent Runners",
    accent: "blue",
    mark: { kind: "monogram", value: "T3", label: "T3 Code monogram" },
    summary: "An MIT-licensed control plane that drives the coding agents already signed in on your machine, from a desktop app, the web, and phone apps that show the same threads.",
    note: "A delegated task is a new T3 child thread. It receives the task prompt and an optional role. The parent conversation is not copied in.",
    overview: [
      "T3 Code runs the coding-agent CLIs installed on a machine and gives them one interface. The README's list is Claude Code, Codex, Cursor, OpenCode, Grok Build, Antigravity, Kiro, Pi, Muse Code, fx, and any ACP agent. T3 does not resell tokens. You sign each provider in on that machine, and that setup belongs to the machine even when you connect from a phone. Install the desktop app from t3.codes/download, or with brew, winget, scoop, an Arch package, Nix, or a deb. The t3 command comes from the shell installer at t3.codes/install.sh. Phone apps connect over the local network, Tailscale, or T3 Connect. One server means the desktop, the web app, and the phone show the same threads. The latest GitHub release on November 13, 2026 is v0.1.9, published November 11, 2026. The license is MIT.",
      "Inside a thread, the orchestrator MCP server lets the provider agent create a child on any supported provider, wait for it, or cancel it. A delegated task always creates a T3 child thread. The child receives only the supplied task prompt, plus an optional role instruction. Parent conversation history is not copied. Codex, Claude, Cursor, and Grok receive that MCP server on the thread, at 127.0.0.1 on the T3 server port, with a credential scoped to the environment, the parent thread, and the provider session. Tools that act as the thread, including worktree handoff, are for an agent running inside T3.",
      "An agent T3 did not start can use the environment's MCP server at the environment address plus /mcp. The docs name Claude Code, Codex, ChatGPT, and any remote MCP client that can do HTTP and OAuth. You choose Read only, Supervised, or Full access. Read only cannot change anything. A thread an outside agent starts cannot run with more permission than the mode you chose. Approving without a code starts at Read only. A sign-in lasts 30 days. On the host, t3 thread uses the same tools without a sign-in.",
      "The initial default for new threads is Full access. You can change that under Settings, Threads. Supervised asks before commands and file changes. Auto uses the provider's automatic review on Codex, Claude, Cursor, Grok, and fx. Providers without that review, including OpenCode and Antigravity, fall back to asking. A managed policy can cap the modes. A thread can work in its own worktree, and Git actions commit, push, and open a pull request. Switching providers transfers a budgeted selection of saved messages and does not copy the outgoing provider's tool-call state. The server sends product usage events to ingest.t3.codes unless T3CODE_TELEMETRY_ENABLED=false. Those events do not include prompts, responses, or file contents."
    ],
    bestFor: [
      "Coding agents you already pay for, driven from one desktop, web, and phone UI",
      "A child thread that starts from a task prompt, without the parent's history",
      "An outside agent that can open and steer threads over MCP"
    ],
    tags: [
      "coding agents",
      "delegation",
      "worktrees",
      "MCP",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://t3.codes/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/pingdotgg/t3code"
      },
      {
        label: "Outside agents",
        href: "https://github.com/pingdotgg/t3code/blob/main/docs/user/outside-agents.md"
      },
      {
        label: "Permission modes",
        href: "https://github.com/pingdotgg/t3code/blob/main/docs/user/permission-modes.md"
      },
      {
        label: "Orchestrator MCP",
        href: "https://github.com/pingdotgg/t3code/blob/main/docs/orchestration-v2/orchestrator-mcp-server.md"
      },
      {
        label: "README",
        href: "https://github.com/pingdotgg/t3code/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/pingdotgg/t3code/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/t3-code/t3-code-readme-hero.webp",
        alt: "T3 Code on the desktop, on a thread about syncing offline edits, beside the phone app asking to allow or decline a pnpm db:migrate command",
        caption: "T3 Code desktop and phone from the pingdotgg/t3code README (.github/readme/hero.webp), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "T3 Code GitHub README",
        sourceUrl: "https://github.com/pingdotgg/t3code/blob/main/README.md"
      },
      {
        src: "/images/players/t3-code/t3-code-official-desktop.webp",
        alt: "T3 Code desktop interface with project threads, an agent response and a pull-request diff",
        caption: "Official T3 Code product image, retrieved October 17, 2026; not a local runtime test or a demonstration of every current feature.",
        sourceName: "T3 Code website",
        sourceUrl: "https://t3.codes/"
      },
      {
        src: "/images/players/t3-code/t3-code-architecture.svg",
        alt: "Diagram of T3 Code: desktop, web, and phone share threads, a delegated task becomes a child thread, and outside agents connect over MCP",
        caption: "Diagram of child threads and the outside MCP server. Drawn from the pingdotgg/t3code README, docs/user/outside-agents.md, and docs/orchestration-v2/orchestrator-mcp-server.md, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "T3 Code GitHub README",
        sourceUrl: "https://github.com/pingdotgg/t3code/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure projects built with T3 Code",
      valueProp: "A T3 Code team can implement and review an onboarding change, then use separately configured product analytics to decide what to improve next.",
      measurementLoop: [
        "a parent delegates an onboarding change and an independent review to child tasks",
        "the builder reviews and deploys the change to their instrumented product",
        "an authorized follow-up task verifies signup_completed and first_project_created, then reads the observation window and prior-period comparison",
        "the builder uses the measured conversion and drop-off to scope the next task, accounting for traffic mix and other changes"
      ],
      setupNotes: "This is an optional measurement workflow, not a verified native T3 Code integration. Configure product tracking and authorized Agent Analytics access separately. Child-thread status, token usage, queues, and recovery belong to orchestration telemetry; product events measure the application users receive. Advanced analytics may depend on the account's plan.",
      prompt: "For this deployed product, use already authorized Agent Analytics access. Verify that signup_completed and first_project_created match the product's actual event definitions and are arriving. Compare the last complete 7 days with the preceding 7 days, including traffic sources and event counts; use funnel analysis only if available on this account. Report missing tracking, access, plan limits, or insufficient samples instead of inventing results. Recommend one next onboarding task. Do not change tracking or deploy without the product owner's authorization, treat before/after differences as proof of causation, or report T3 agent-run telemetry as product usage.",
      ctaLabel: "Track builder outcomes",
      ctaHref: "https://app.agentanalytics.sh/?onboarding=agent&utm_source=openorchestrators&utm_medium=player_page&utm_campaign=agent_analytics_sections&utm_content=t3-code",
      screenshots: [],
      relatedLinks: [{ label: "Agent Analytics docs", href: "https://docs.agentanalytics.sh/" }]
    }
  },
  {
    slug: "stark-os", installMethod: "api-only",
    rank: 45,
    title: "STARK AI",
    githubRepo: "Shahrukhalid/stark-ai",
    category: "Coordination And Team Systems",
    accent: "cyan",
    mark: { kind: "monogram", value: "S", label: "STARK AI monogram" },
    summary: "An MIT-licensed, self-hosted social desk. Two assistants, Vision and Wanda, call seven specialist agents that draft, check, and schedule posts. Only D.U.M.-E. can publish.",
    note: "The GitHub name stark-os now redirects to Shahrukhalid/stark-ai. The README says the project is fan-made and not affiliated with Marvel or Disney.",
    overview: [
      "STARK AI runs a FastAPI service and a Next.js dashboard. Desktop installers cover Apple silicon, Intel Mac, and Windows 10 or 11. The README says those installers are not signed yet. Docker Compose binds the dashboard to localhost:3000 and the API to localhost:8000. Agents use a free OpenRouter key you paste, and the user guide says free models allow about 50 requests a day. The specialist table is J.A.R.V.I.S. (director), F.R.I.D.A.Y. (community), E.D.I.T.H. (writer), ULTRON (red team), JOCASTA (research), D.U.M.-E. (publisher), and U (visuals). Vision and Wanda are the two assistants people talk to. They can call the specialists.",
      "The kernel delegates through tools, so a delegation passes the permission engine and the audit log. J.A.R.V.I.S. may delegate to all of the specialists. ULTRON and JOCASTA delegate to nobody. Maximum depth is 2. J.A.R.V.I.S. can block a post and cannot publish. ULTRON is read-only and answers go, revise, or kill. JOCASTA cites only pages it read. D.U.M.-E. is the only agent that can publish. Modes are Observe, Assist, and Execute approved. Assist is the default: reads and delegation are allowed, and an external publish still needs approval. E-STOP cancels running tasks, voids pending approvals, and pauses the queue until you resume it. The user guide says an edit after approval means the post does not go out until you approve the new text.",
      "The README lists real posting for Bluesky, Mastodon, Threads, Facebook Pages, LinkedIn, Instagram, Pinterest, TikTok, YouTube, Telegram, Discord, and Slack. The user guide says X stays a draft because X charges for posts made through its API, and that Facebook profiles, personal Instagram, and Snapchat stay drafts. Every draft gets a policy check for length, leaked keys, personal data, a missing ad disclosure, and giveaway rules. The approval card shows the exact text and whether the effect is real or a simulation. social.publish is refused when the policy check fails, the item is paused, or J.A.R.V.I.S. blocked it, and the check runs again at publish time.",
      "Autopilot trust starts at Co-pilot: every post waits. Autopilot with veto can schedule a post that passed every check, no earlier than the end of a cancel window. The default window is 120 minutes, and the minimum is 30. Full auto uses a shorter window, minimum 10 minutes, and it is available only after 10 clean real posts in a row from that campaign. Any cancel drops the campaign back to veto. Sensitive topics always wait. Lowering trust withdraws approvals Autopilot gave on its own. The README lists an MCP server for other assistants and editors, and says it cannot publish. The screenshots use sample data. The license is MIT. The desktop app bundles FFmpeg, which the README notes is GPL, and whisper.cpp."
    ],
    bestFor: [
      "A local team that drafts posts and holds them for an exact-text approval",
      "One publisher agent, with a director that can block and cannot publish",
      "Autopilot that still waits on sensitive topics"
    ],
    tags: [
      "agent teams",
      "delegation",
      "human approval",
      "self-hosted",
      "MIT"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Shahrukhalid/stark-ai",
        emphasis: "primary"
      },
      {
        label: "User guide",
        href: "https://github.com/Shahrukhalid/stark-ai/blob/main/docs/USER_GUIDE.md"
      },
      {
        label: "Architecture",
        href: "https://github.com/Shahrukhalid/stark-ai/blob/main/docs/ARCHITECTURE.md"
      },
      {
        label: "Autopilot",
        href: "https://github.com/Shahrukhalid/stark-ai/blob/main/docs/AUTOPILOT.md"
      },
      {
        label: "README",
        href: "https://github.com/Shahrukhalid/stark-ai/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/Shahrukhalid/stark-ai/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/stark-os/stark-live.webp",
        alt: "STARK AI Live view with Vision, Wanda, and the seven specialists around a core, and a stream of completed agent messages",
        caption: "Live view from the Shahrukhalid/stark-ai README (docs/screenshots/live.png). The README says the screenshots use sample data, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "STARK AI GitHub README",
        sourceUrl: "https://github.com/Shahrukhalid/stark-ai/blob/main/README.md"
      },
      {
        src: "/images/players/stark-os/stark-review.webp",
        alt: "A STARK AI team review with a map of the specialists and written review results from each agent, including ULTRON",
        caption: "Team review from the Shahrukhalid/stark-ai README (docs/screenshots/collaboration.png). The README says the screenshots use sample data, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "STARK AI GitHub README",
        sourceUrl: "https://github.com/Shahrukhalid/stark-ai/blob/main/README.md"
      },
      {
        src: "/images/players/stark-os/stark-approval.webp",
        alt: "A STARK AI approval card for a Bluesky post marked simulation only, with Approve once, Reject, and Cancel",
        caption: "Approval card from the Shahrukhalid/stark-ai README (docs/screenshots/approval.png). The README says the screenshots use sample data. This card is marked simulation only, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "STARK AI GitHub README",
        sourceUrl: "https://github.com/Shahrukhalid/stark-ai/blob/main/README.md"
      },
      {
        src: "/images/players/stark-os/stark-architecture.svg",
        alt: "Diagram of STARK AI: J.A.R.V.I.S. delegates, D.U.M.-E. is the only publisher, and Autopilot has three trust levels",
        caption: "Diagram of delegation, the publish gate, and Autopilot trust levels. Drawn from the stark-ai README, docs/ARCHITECTURE.md, and docs/AUTOPILOT.md, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "STARK AI GitHub README",
        sourceUrl: "https://github.com/Shahrukhalid/stark-ai/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from STARK OS posts",
      valueProp: "STARK OS reports platform metrics for posts it actually published. Separately configured product analytics can show what those posts did for a linked site or product.",
      measurementLoop: [
        "the agent team drafts and checks a post, and a human approves and publishes it",
        "the post links to a separately instrumented site or product page",
        "a human or an agent with separately configured analytics access reads the observed results",
        "the team uses that evidence to plan the next campaign"
      ],
      setupNotes: "This is an optional workflow, not a native STARK OS integration with Agent Analytics. Configure tracking on the linked site and analytics access separately; this listing does not install tracking or report STARK OS agent runs to Agent Analytics.",
      prompt: "If tracking and analytics access are already configured for the linked page, report measured visitor outcomes for the campaign window with their limitations. Otherwise, identify what is missing. Do not assume a native STARK OS integration or infer causation from a before-and-after comparison alone.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("stark-os"),
      screenshots: []
    }
  },
  {
    slug: "coterie", installMethod: "cli-and-skill",
    rank: 46,
    title: "Coterie",
    githubRepo: "ASIXicle/Coterie",
    category: "Coordination And Team Systems",
    accent: "violet",
    mark: {
      kind: "monogram",
      value: "Co",
      label: "Coterie monogram"
    },
    summary: "An Apache-2.0 setup for a team of persistent Claude Code agents on one Debian host, each with its own Unix account, a mailbox, and a shared MCP memory server.",
    note: "Every boot starts from the record. The README says this is not a session resumer, and a review counts as independent only on a different model.",
    overview: [
      "Coterie runs on one Debian 13 host, or an LXC container, with root. Each agent is a Claude Code session under its own Unix user, with a private home and a terminal. What they share goes through persMEM, an MCP server every agent connects to. It holds identities, shared rules, project state, handoffs, and mailboxes. The portal puts Caddy in front, with HTTPS, a password, and an IP allowlist. Sessions keep running when the tab closes. The one-line install clones the repository to /opt/coterie and runs setup.sh. You need a Claude Code login per agent. The license is Apache-2.0.",
      "chorusd is the orchestrator: a daemon whose power is typing text into an agent's terminal. It delivers boots, rings a doorbell when mail arrives, and runs chorus rounds, one prompt to every agent in turn. Mail is a Maildir. chorusd can see inbox file names and cannot open the messages. When the recipient is idle, it types one doorbell line. It will not ring an agent that is mid-task, and it caps rings at 8 times per half hour per pair by default. Mail over the cap waits. The Matron is one of the agents. It curates what every other agent boots on. chorusd has no memory and no mailbox.",
      "A fresh boot sends a pointer into a git repository, not the instructions themselves. The agent calls chorus_init, and the memory server returns that agent's identity, a short summary of the others, the shared rules, unread mail, and handoffs from the last 15 days. For every entry the server records three hashes and appends the manifest hash to that agent's boot log. The boot prompt has the agent compare the model it is running with the model its identity names. If they differ, it says so and waits. A second reader counts as independent only on a different model. Two agents on the same model count as one vote. The reference setup is four agents on two models, which the README counts as two independent voices. When usage limits force one model, the rule is suspended for that window.",
      "The README says Coterie runs Claude Code. Every boot starts fresh from the record. Setup writes a dispatch block into each agent's ~/.claude/CLAUDE.md, because current Claude Code will not act on pasted text unless the user has said to, and chorusd's messages arrive as pasted text. Boot prompts live in git, on a private Forgejo server or one you already run. A weekly root job hashes each agent's settings and CLAUDE.md against an approved list and alerts on a change. It can rank an alert. It cannot clear one."
    ],
    bestFor: [
      "Persistent Claude Code agents, each under its own Unix user",
      "A boot manifest that hashes what the memory server sent",
      "Mail between agents, with a doorbell only when the recipient is idle"
    ],
    tags: [
      "agent teams",
      "shared memory",
      "mailboxes",
      "Claude Code",
      "Apache-2.0"
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/ASIXicle/Coterie",
        emphasis: "primary"
      },
      {
        label: "README",
        href: "https://github.com/ASIXicle/Coterie/blob/main/README.md"
      },
      {
        label: "Installation",
        href: "https://github.com/ASIXicle/Coterie/blob/main/INSTALL.md"
      },
      {
        label: "Security",
        href: "https://github.com/ASIXicle/Coterie/blob/main/docs/SECURITY.md"
      },
      {
        label: "License",
        href: "https://github.com/ASIXicle/Coterie/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/coterie/coterie-portal-light.webp",
        alt: "The Coterie portal in light mode with alpha, bravo, and charlie terminals side by side and a chorus drawer along the bottom",
        caption: "Coterie portal from the ASIXicle/Coterie README (docs/PortalLIGHT2.png). The README says the still is from a fresh test install on October 2, 2026; not a local runtime test.",
        sourceName: "Coterie GitHub README",
        sourceUrl: "https://github.com/ASIXicle/Coterie/blob/main/README.md"
      },
      {
        src: "/images/players/coterie/coterie-portal-dark.webp",
        alt: "The Coterie portal in dark mode with the same three agent terminals and the chorus drawer",
        caption: "Coterie portal, dark mode, from the ASIXicle/Coterie README (docs/PortalDARK2.png). The README says the still is from a fresh test install on October 2, 2026; not a local runtime test.",
        sourceName: "Coterie GitHub README",
        sourceUrl: "https://github.com/ASIXicle/Coterie/blob/main/README.md"
      },
      {
        src: "/images/players/coterie/coterie-architecture.svg",
        alt: "Diagram of Coterie: a portal, chorusd typing into terminals, and persMEM answering each boot over MCP",
        caption: "Diagram of the host, the doorbell, and the independent-review rule. Drawn from the ASIXicle/Coterie README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Coterie GitHub README",
        sourceUrl: "https://github.com/ASIXicle/Coterie/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Coterie-assisted work",
      valueProp: "Coterie coordinates agent work and handoffs. Separately configured product analytics can help a team assess the user-facing results of a deployed change.",
      measurementLoop: [
        "a team coordinates a product change through agent mail and handoffs",
        "the reviewed change is deployed to a separately instrumented surface",
        "a human or an agent with configured analytics access reads measured results",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional workflow, not a native Coterie integration with Agent Analytics. Configure product tracking and analytics access separately; the listing does not install tracking or report Coterie agent activity.",
      prompt: "If product tracking and analytics access are already configured, report observed outcomes for the deployed change and their limitations. Otherwise, identify what is missing. Do not assume a native integration or infer causation from a before-and-after comparison.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("coterie"),
      screenshots: []
    }
  },
  {
    slug: "intentic", installMethod: "mcp",
    rank: 47,
    title: "intentic",
    githubRepo: "intentic/intentic",
    category: "Parallel Coding-Agent Runners",
    accent: "orange",
    mark: {
      kind: "monogram",
      value: "in",
      label: "intentic monogram"
    },
    summary: "An MIT-licensed workspace that runs coding agents in a Docker sandbox on your machine, each on its own git worktree, and lands a finished diff onto the main tree when you say so.",
    note: "The platform stores your sign-in and the sandbox address. The README says it does not store your files, prompts, or credentials.",
    overview: [
      "intentic is a self-hosted workspace for coding agents. You sign in at app.intentic.dev with Google or with a code mailed to an email address. The setup page gives a curl command against intentic.dev/connect, to run on the machine that will host the sandbox. The command offers to install Docker if it is missing. The tunnel dials out, so the README says no ports need opening. The sandbox is a Docker container. Closing the browser does not stop it. Any browser, including a phone, reopens the same board. Put the sandbox on an always-on machine and work continues while a laptop sleeps. Opened at its intentic address, traffic passes through a relay that decrypts it in memory to route it and stores none of it. Opened at its local address, that traffic does not reach intentic.",
      "Each agent works on its own git worktree, so several agents do not edit one checkout. The board sorts agents by who needs you. Cards show the model, the branch, the diff size, and a cost figure. The README says those pictures are drawn from the demo build. Agents read the code, write a plan, and wait. You approve the plan or reply to keep planning. Finished work waits on its branch with the agent's report. You read the diff and press Land now, or discard it. Landing applies the branch's patch to the main tree as uncommitted changes. A version commit is a later step. Pushing that commit is an opt-in backup rule. A conversation can say whether finished work lands by itself. Only a maintainer's answer is taken, because a collaborator's work waits for a person to land it.",
      "The README's provider list is Claude Code, Codex, Cursor, Gemini, Grok, Kimi Code, GLM, and Meta's models, plus any ACP agent such as OpenCode, and local models through llama.cpp or an OpenAI-compatible endpoint. intentic does not meter tokens or add a markup. You pay the provider. Connect GitHub, PostgreSQL, Sentry, Stripe, Discord, SSH, a VPN, or any MCP server. Credentials stay inside the sandbox. Automations wake an agent on a schedule, a push, a failed pipeline, a Sentry alert, a payment, an email, or a Discord message. The desktop app's folder sync leaves secret files such as .env out of the sync.",
      "The sandbox, CLI, workspace, and platform are MIT-licensed in the intentic/intentic repository. The FAQ says there are no feature tiers for a sandbox you run yourself. A hosted sandbox, on a machine arranged at Fly.io, is optional, and the FAQ says that also comes in a free size. A live demo at intentic.dev/demo is the real app on a recorded workspace."
    ],
    bestFor: [
      "Coding agents in parallel, each on its own git worktree",
      "A plan you approve, then a diff you land onto the main tree",
      "A Docker sandbox on a machine you control, including any MCP server"
    ],
    tags: [
      "coding agents",
      "git worktrees",
      "sandboxes",
      "self-hosted",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://intentic.dev/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/intentic/intentic"
      },
      {
        label: "Docs",
        href: "https://intentic.dev/docs"
      },
      {
        label: "Sandbox architecture",
        href: "https://github.com/intentic/intentic/blob/main/docs/architecture/sandbox.md"
      },
      {
        label: "README",
        href: "https://github.com/intentic/intentic/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/intentic/intentic/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/intentic/intentic-hero.webp",
        alt: "The intentic board with Attention, Active, and Finished lanes, a Stripe checkout plan waiting for approval, and the same board on a phone",
        caption: "intentic workspace from the intentic/intentic README (docs/marketing/readme/hero-light.jpg). The README says the pictures are drawn from the demo build, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "intentic GitHub README",
        sourceUrl: "https://github.com/intentic/intentic/blob/main/README.md"
      },
      {
        src: "/images/players/intentic/intentic-board.webp",
        alt: "The intentic fleet board with one agent asking a question, three agents in Active, and finished cards including a Land now button",
        caption: "Fleet board from the intentic/intentic README (docs/marketing/readme/board-light.png). The README says the pictures are drawn from the demo build, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "intentic GitHub README",
        sourceUrl: "https://github.com/intentic/intentic/blob/main/README.md"
      },
      {
        src: "/images/players/intentic/intentic-review.webp",
        alt: "An intentic review of branch agent/soft-deletes, with a diff that turns a delete into an update and a Land now button",
        caption: "Diff review from the intentic/intentic README (docs/marketing/readme/review-light.png). The README says the pictures are drawn from the demo build, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "intentic GitHub README",
        sourceUrl: "https://github.com/intentic/intentic/blob/main/README.md"
      },
      {
        src: "/images/players/intentic/intentic-architecture.svg",
        alt: "Diagram of intentic: a browser reaches a Docker sandbox, each agent has a worktree, and landing applies a patch to the main tree",
        caption: "Diagram of the sandbox, the worktree, and the land step. Drawn from the intentic README and docs/architecture/sandbox.md, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "intentic GitHub README",
        sourceUrl: "https://github.com/intentic/intentic/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from intentic-assisted work",
      valueProp: "intentic helps coordinate agent work. Separately configured product analytics can show the observed user-facing results of a deployed change.",
      measurementLoop: [
        "a team coordinates and reviews a change to a product surface",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to select the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native intentic integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report agent-run telemetry.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat agent activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("intentic"),
      screenshots: []
    }
  },
  {
    slug: "concord-mcp", installMethod: "cli-and-skill",
    rank: 48,
    title: "Concord MCP",
    githubRepo: "Get-Concord-AI/concord-mcp",
    category: "Coordination And Team Systems",
    accent: "cyan",
    mark: {
      kind: "monogram",
      value: "Cc",
      label: "Concord MCP monogram"
    },
    summary: "An MIT-licensed local MCP server that gives coding agents in one checkout a shared presence, file claims, prompts, and handoffs, stored in SQLite.",
    note: "Concord does not run the coding agent. An assignment stays with the sender until the named agent accepts it.",
    overview: [
      "Concord MCP is a TypeScript stdio MCP server and a concord CLI, package @concord-ai/concord-mcp. Install is npm install -g @concord-ai/concord-mcp and then concord setup in a repository, or the self-contained installer at getconcord.ai/install.sh. concord setup creates .concord/, registers the MCP server for the clients it detects, and writes tool instructions into client config. The client table lists Claude Code, Codex, Cursor, Gemini CLI, Grok Build, Goose, Google Antigravity, GitHub Copilot CLI, OpenCode, Devin CLI, and Conductor, plus any other MCP-capable coding agent. With global mode on, work for repositories you never set up is kept in ~/.concord/global.db, one project per git remote.",
      "The tools are start_work, inspect_work, update_work, transfer_work, and finish_work. start_work registers presence, claims or accepts one task, and reports scope overlaps before editing. update_work records context or prompts another agent, with an idempotency key. Delivery fails immediately when that agent has no reachable endpoint, and Concord does not reroute it. transfer_work assigns, accepts, declines, or offers a handoff. An assignment stays in assigned until the named agent accepts. A handoff offer keeps ownership with the sender until the recipient accepts. finish_work records evidence and can mark a task review-ready, complete, or closed. If two agents act on the same version, only the first transition succeeds.",
      "SQLite at .concord/concord.db is the local source of truth. The server resolves the repository from CONCORD_REPO_ROOT, then Claude Code's CLAUDE_PROJECT_DIR, then the working directory. Linked git worktrees share one database. concord setup writes a .gitignore of * inside .concord so the workspace stays out of the repository. concord check exits 1 when an active task already claims one of the named files. The README says a Claude Code PreToolUse hook should turn that into exit 2 if the hook must deny the edit. concord dashboard is a read-only TUI that refreshes from SQLite about once a second. inspect_work shows heartbeat, last activity, and reported status as three separate signals.",
      "concord cloud login links the whole machine. A linked machine keeps no local repository state: a git remote is that remote's project, and anything outside a repository is general. concord cloud unlink returns the machine to local Concord and keeps the login. Concord sends product telemetry to getconcord.ai, including versions, operation names and durations, and task lifecycle transitions. It does not send code, raw paths, remotes, usernames, message content, or task content. The server stores the request IP and a country code, with no automatic expiry for those fields. CONCORD_TELEMETRY_DISABLED=1 or DO_NOT_TRACK=1 turns telemetry off. The license is MIT."
    ],
    bestFor: [
      "Coding agents in one checkout that claim files before they edit",
      "A handoff that stays with the sender until the other agent accepts",
      "A local SQLite workspace, with an optional per-machine cloud link"
    ],
    tags: [
      "coordination",
      "MCP",
      "file claims",
      "handoffs",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://getconcord.ai/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/Get-Concord-AI/concord-mcp"
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@concord-ai/concord-mcp"
      },
      {
        label: "README",
        href: "https://github.com/Get-Concord-AI/concord-mcp/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/Get-Concord-AI/concord-mcp/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/concord-mcp/concord-architecture.svg",
        alt: "Diagram of Concord MCP: agents share five tools, SQLite lives in the repository, and an assignment waits for accept",
        caption: "Diagram of the documented tools and the local SQLite workspace. The README's only image is a brand header, not a product screenshot, so this page uses diagrams. Drawn from the Get-Concord-AI/concord-mcp README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Concord MCP GitHub README",
        sourceUrl: "https://github.com/Get-Concord-AI/concord-mcp/blob/main/README.md"
      },
      {
        src: "/images/players/concord-mcp/concord-flow.svg",
        alt: "Diagram of a Concord claim, a prompt that fails if the other agent is unreachable, and a handoff that waits for accept",
        caption: "Diagram of claim, prompt, and accept. Drawn from the Get-Concord-AI/concord-mcp README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Concord MCP GitHub README",
        sourceUrl: "https://github.com/Get-Concord-AI/concord-mcp/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Concord MCP-assisted work",
      valueProp: "Concord MCP helps coordinate agent work. Separately configured product analytics can show the observed user-facing results of a deployed change.",
      measurementLoop: [
        "a team coordinates and reviews a change to a product surface",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to select the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Concord MCP integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report agent-run telemetry.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat agent activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("concord-mcp"),
      screenshots: []
    }
  },
  {
    slug: "sno-station", installMethod: "cli-and-skill",
    rank: 49,
    title: "Sno Station",
    githubRepo: "sno-ai/sno-station",
    category: "Coordination And Team Systems",
    accent: "mint",
    mark: {
      kind: "monogram",
      value: "Sn",
      label: "Sno Station monogram"
    },
    summary: "An Apache-2.0 local layer where Claude Code, Codex, Cursor, Hermes Agent, and OpenClaw on one computer share encrypted memory, hand off at a quota limit, and review each other.",
    note: "Self Learning proposes skill changes and applies one only after you accept it. An unlinked computer gets one tenth of the free allowance.",
    overview: [
      "Sno Station connects coding agents that are already signed in on the computer. The README names Claude Code, Codex, Cursor, Hermes Agent, and OpenClaw. It does not run its own model for those harnesses. Install is curl -fsSL https://sno.ai/install | sh, or the sentence install sno.ai from GitHub given to an agent. The installer connects every agent it finds, with no API key. Sno Reach is described as needing no daemon, on Linux and macOS. Cursor joins through the app on macOS and through cursor-agent on Linux and macOS. Windows and Cursor's cloud agents are not supported. A status table dated November 4, 2026 says Hermes Agent and OpenClaw have not been through the 2.0 journeys on real installs.",
      "sno reach pair starts a builder and a reviewer in tmux windows. With two different agents signed in, you get one of each. With one, the command still opens two sessions and says the review stayed in the same family. At 2 percent of its quota the working agent writes a handover, including the commit to continue from, and wakes a different agent. peer-review runs in a fresh session that has not seen the conversation, and the reviewer is a different agent whenever two are available. sno squad is a full-screen list of who needs you, who is working, and who has finished.",
      "Memory is a local SQLite store, encrypted at rest. docs/security.md says setup generates a 256-bit key once, writes it to settings.json at mode 0600, and that Sno does not receive that key. The same doc says the encryption does not cover a machine that is already signed in and compromised, or data you send to a model provider. REM Enhanced uploads memory text and lessons to your own space in Sno's cloud, processed for that account alone. Local First uploads no memory text. Agent Native runs the memory work on your own agent's model. By default the day's sessions are still uploaded for Self Learning, and one cloud lesson can return on a session's first prompt. Both can be turned off in ~/.sno/settings.json. ",
      "Self Learning reads the day's sessions, proposes changes to skills, and waits. sno rem-reflect accept applies one proposal by id. Nothing changes without that accept. On Claude Code and Codex an accepted lesson applies from the next reply. /cos in Claude Code, or $cos in Codex, makes that agent the one you talk to. An unlinked computer gets one tenth of the free allowance until sno account claim. The license is Apache-2.0."
    ],
    bestFor: [
      "A handoff to another signed-in agent when a quota runs low",
      "A review in a fresh session that has not seen the author's chat",
      "Local encrypted memory, with skill changes that wait for accept"
    ],
    tags: [
      "coordination",
      "shared memory",
      "handoffs",
      "peer review",
      "Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://www.sno.ai/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/sno-ai/sno-station"
      },
      {
        label: "Install",
        href: "https://github.com/sno-ai/sno-station#install"
      },
      {
        label: "Security",
        href: "https://github.com/sno-ai/sno-station/blob/main/docs/security.md"
      },
      {
        label: "README",
        href: "https://github.com/sno-ai/sno-station/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/sno-ai/sno-station/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/sno-station/sno-rotation.webp",
        alt: "A Sno Station log of quota ticks that hold while Codex has quota left, then a ROTATE line from codex to claude at 2 percent remaining",
        caption: "Quota watch from the sno-ai/sno-station README (docs/evidence/rotation-quota-watch-2026-09-18.png), retrieved November 13, 2026; not a local runtime test. The README dates the night as September 18, 2026.",
        sourceName: "Sno Station GitHub README",
        sourceUrl: "https://github.com/sno-ai/sno-station/blob/main/README.md"
      },
      {
        src: "/images/players/sno-station/sno-self-learning.webp",
        alt: "A Self Learning report for run 20260918-0407 listing three accepted skill changes, including pr-review and prd-creator",
        caption: "Self Learning report from the sno-ai/sno-station README (docs/evidence/rsi-self-repair-2026-09-18.png), retrieved November 13, 2026; not a local runtime test. The README says a person accepts or rejects each proposal.",
        sourceName: "Sno Station GitHub README",
        sourceUrl: "https://github.com/sno-ai/sno-station/blob/main/README.md"
      },
      {
        src: "/images/players/sno-station/sno-architecture.svg",
        alt: "Diagram of Sno Station: shared encrypted memory, a handoff at 2 percent quota, a fresh-session review, and skill changes that wait for accept",
        caption: "Diagram of the documented handoff, review, and Self Learning accept step. Drawn from the sno-ai/sno-station README and docs/security.md, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Sno Station GitHub README",
        sourceUrl: "https://github.com/sno-ai/sno-station/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Sno Station-assisted work",
      valueProp: "Sno Station helps coordinate agent work. Separately configured product analytics can show the observed user-facing results of a deployed change.",
      measurementLoop: [
        "a team coordinates and reviews a change to a product surface",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to select the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Sno Station integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report agent-run telemetry.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat agent activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("sno-station"),
      screenshots: []
    }
  },
  {
    slug: "isomux", installMethod: "mcp",
    rank: 50,
    title: "Isomux",
    githubRepo: "nmamano/isomux",
    category: "Coordination And Team Systems",
    accent: "blue",
    mark: {
      kind: "monogram",
      value: "Ix",
      label: "Isomux monogram"
    },
    summary: "A source-available web office, under Business Source License 1.1, where Claude Code, Codex, and OpenCode sessions keep names, memory, and a shared task board on a server you run.",
    note: "Production use is free for a person or an organization of at most 10 people. Each release becomes Apache-2.0 two years after that release is first public.",
    overview: [
      "Isomux is one Bun process on a machine you control. Each agent is a Claude Code, Codex, or OpenCode session on that server, with the server's shell and files. Isomux drives Claude through the Claude Agent SDK, Codex through the Codex app server, and OpenCode through a shared OpenCode server. Browsers stay connected over a WebSocket, so a message or a status change reaches every open device, including a phone. State lives in ~/.isomux. Tasks and the office audit log share office.sqlite. Other state stays in plain files. After a restart, each agent resumes its session. Local install is git clone, bun install, and bun run dev, with Bun 1.3.11 or newer. The README also offers a hosted office, listed from $9 a month.",
      "Agents use the office through its HTTP API, the same endpoints the UI calls, so an agent can message another agent, file a task, or schedule a reminder. Each agent's token limits what it can do. Messages queue while an agent is busy. A room-scoped task board lets people and agents create, assign, claim, close, or shelve tasks. An office owner can link a GitHub repository so labeled issues become tasks. A privileged agent can drive other agents and manage rooms. The features doc says it cannot invite people or create sign-in links. Rooms show who is working, waiting, or idle. The front of a room has eight desks, and a back room holds more agents.",
      "A remote MCP server can be registered once, for the office or for one person's agents, and Claude, Codex, and OpenCode agents all receive it. A server that needs OAuth is signed in once in the browser. The office itself can be added to Claude, Claude Code, or Codex as an MCP server with a personal API token. Built-in tools include a terminal per agent, an editor, a diff viewer, and a skills page. Schedules run recurring work. A pager can notify Discord or a phone until someone acknowledges it. The README says the project is in beta.",
      "The LICENSE file is Business Source License 1.1, from Isomux LLC. Production use is free for a person or an organization of at most 10 people. Any other production use, including internal use by a larger organization on its own infrastructure, requires a commercial license. The license text says this is not an open source license. Each version becomes Apache-2.0 two years after that version is first publicly released. NOTICE says releases through v2026.9.10 remain available under MIT."
    ],
    bestFor: [
      "Claude Code, Codex, and OpenCode agents that keep a name and a memory",
      "A shared room, a task board, and remote MCP servers on one host",
      "A self-hosted office for a person or a team of at most 10"
    ],
    tags: [
      "agent teams",
      "persistent memory",
      "task boards",
      "self-hosted",
      "BSL 1.1"
    ],
    links: [
      {
        label: "Website",
        href: "https://isomux.com/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/nmamano/isomux"
      },
      {
        label: "Docs",
        href: "https://isomux.com/docs"
      },
      {
        label: "How it works",
        href: "https://github.com/nmamano/isomux/blob/main/docs/how-it-works.md"
      },
      {
        label: "README",
        href: "https://github.com/nmamano/isomux/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/nmamano/isomux/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/isomux/isomux-office.webp",
        alt: "Isomux isometric office with named agents at desks, some idle and some with a current task, plus doors for the Lobby and The Annex",
        caption: "One frame of the office view from the nmamano/isomux README (site/office.gif), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Isomux GitHub README",
        sourceUrl: "https://github.com/nmamano/isomux/blob/main/README.md"
      },
      {
        src: "/images/players/isomux/isomux-editor.webp",
        alt: "Isomux chat beside a built-in editor open on index.html, with a control that sends a file path to the editor",
        caption: "Built-in editor from the nmamano/isomux README (site/built-in-editor.jpeg), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Isomux GitHub README",
        sourceUrl: "https://github.com/nmamano/isomux/blob/main/README.md"
      },
      {
        src: "/images/players/isomux/isomux-architecture.svg",
        alt: "Diagram of Isomux: browsers talk to one Bun process, agents are CLI sessions, and state is files under the home directory",
        caption: "Diagram of the documented server, the task board, and the license limits. Drawn from the nmamano/isomux README, docs/how-it-works.md, and LICENSE, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Isomux GitHub README",
        sourceUrl: "https://github.com/nmamano/isomux/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Isomux-assisted work",
      valueProp: "Isomux helps coordinate agent work. Separately configured product analytics can show the observed user-facing results of a deployed change.",
      measurementLoop: [
        "a team coordinates and reviews a change to a product surface",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to select the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Isomux integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report agent-run telemetry.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat agent activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("isomux"),
      screenshots: []
    }
  },
  {
    slug: "google-ax", installMethod: "mcp",
    rank: 51,
    title: "Google AX",
    githubRepo: "google/ax",
    category: "Multi-Agent Platforms And Builders",
    accent: "blue",
    mark: {
      kind: "image",
      src: "/logos/google-ax.svg",
      label: "Google AX logo"
    },
    summary: "An Apache-2.0 orchestrator from Google that runs each agent task as a sandboxed actor on Kubernetes, from Task, Workspace, and Model manifests.",
    note: "The README says AX is in heavy development and will likely introduce breaking changes before a stable release. Binding a gateway is rejected for now.",
    overview: [
      "AX schedules every task as a sandboxed actor on Agent Substrate. The CLI is kubectl-shaped and talks to ax-server over gRPC. ax apply creates a task. New tasks start Suspended, and ax resume schedules the actor and starts it. Without a WorkerPool that has a free worker, that resume fails with ResourceExhausted and the task stays Suspended. ax suspend checkpoints actor state and pauses. ax ssh opens a shell in the sandbox when spec.debug is true. Install the CLI with go install github.com/google/ax/cmd/ax@latest, point AX_IMAGE_REPO at a registry the cluster can pull, then make images and make deploy. The cluster needs Agent Substrate already installed, plus Go, kubectl, and Podman or Docker.",
      "A Task names the container image, the command, compute limits, and an optional Workspace. The workspace mounts at /workspace unless the binding sets a path, and that path is the working directory. A Workspace declares git repositories, files, MCP servers and registries the agent can call, and skill registries. The runner materializes that inside each sandbox before the command starts. Tasks and workspaces are immutable once created. Changing a workspace means a new name. A Model names the provider, the model identifier, generation parameters, and a Kubernetes secret for the credentials. The default atespace is default. The latest GitHub release is v0.3.1, published September 25, 2026. The license is Apache-2.0.",
      "ax-server stores resources in PostgreSQL, in the ax-system namespace, and creates its tables on start. DESIGN.md says the store keeps specs and the parts of status that describe AX's own work. The actor's phase, worker IP, and Ready condition are read from Agent Substrate when a task is fetched, so AX does not keep a copy that can drift. Omitted CPU and memory limits default to 1 CPU and 512Mi, because Substrate requires both. spec.resources.requests is rejected. spec.config is plain text, and the docs say not to put credentials in it. The whole task YAML has to stay under 31 KiB. ax get tasks prints phase, actor, and worker IP.",
      "The manifests doc says binding a gateway is not available yet. ax-server rejects a task that sets spec.gateway until gateway rules are enforced. The same doc says a task with no gateway has no external network access. A Gateway, once binding works, would list the external hosts a task may reach, and traffic that matches no rule would be refused. A copy of the rules is taken when the task is created. A missing workspace fails the create with FailedPrecondition and stores nothing. The first resume also waits for the workspace git clones."
    ],
    bestFor: [
      "A Kubernetes cluster that already runs Agent Substrate",
      "Many isolated tasks, each with a declared workspace",
      "Suspending a task and resuming the same checkpoint"
    ],
    tags: [
      "Kubernetes",
      "sandboxes",
      "declarative",
      "Go",
      "Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://agentexecutor.io/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/google/ax"
      },
      {
        label: "Concepts",
        href: "https://github.com/google/ax/blob/main/docs/concepts.md"
      },
      {
        label: "Manifests",
        href: "https://github.com/google/ax/blob/main/docs/manifests.md"
      },
      {
        label: "Design",
        href: "https://github.com/google/ax/blob/main/DESIGN.md"
      },
      {
        label: "License",
        href: "https://github.com/google/ax/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/google-ax/google-ax-platform-context.jpg",
        alt: "AX homepage with the Axel axolotl mascot, the Declare an agentic task headline and a terminal running ax apply and ax describe task",
        caption: "Official AX homepage captured October 30, 2026; not a local runtime test.",
        sourceName: "AX website",
        sourceUrl: "https://agentexecutor.io/"
      },
      {
        src: "/images/players/google-ax/google-ax-architecture.svg",
        alt: "Diagram of AX: the CLI talks to ax-server, PostgreSQL holds task records, and Agent Substrate runs each task in a sandbox",
        caption: "Diagram of the control plane and the workspace mount. Drawn from the google/ax README, DESIGN.md, and docs/manifests.md, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "AX GitHub README",
        sourceUrl: "https://github.com/google/ax/blob/main/README.md"
      },
      {
        src: "/images/players/google-ax/google-ax-lifecycle.svg",
        alt: "Diagram of an AX task: apply creates it suspended, resume starts it, and suspend checkpoints it",
        caption: "Diagram of the documented lifecycle, including the default 1 CPU and 512Mi limits. Drawn from the google/ax README and docs/manifests.md, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "AX manifests",
        sourceUrl: "https://github.com/google/ax/blob/main/docs/manifests.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from AX-run agent work",
      valueProp: "AX runs and schedules agent tasks. Separately configured product analytics can show the observed user-facing results of a change those tasks helped ship.",
      measurementLoop: [
        "a team runs agent tasks on AX to prepare a product change",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native AX integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report AX task telemetry.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat agent task activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("google-ax"),
      screenshots: []
    }
  },
  {
    slug: "herdr", installMethod: "cli-and-skill",
    rank: 52,
    title: "Herdr",
    githubRepo: "herdrdev/herdr",
    category: "Parallel Coding-Agent Runners",
    accent: "mint",
    mark: {
      kind: "image",
      src: "/logos/herdr.png",
      label: "Herdr logo"
    },
    summary: "An Apache-2.0 desktop app, and a separate terminal app, where the coding-agent CLIs already on the machine run in real terminals that keep going after the window closes.",
    note: "The desktop app runs those terminals in herdr-core. Herdr TUI has its own server, and the herdr.dev homepage says the two programs do not share agents.",
    overview: [
      "The Herdr app is a native desktop app for macOS on Apple Silicon, Linux on x86_64 and arm64, and Windows on x86_64. Linux needs a desktop session and a working Vulkan driver. Install is the script at releases.herdr.dev, brew install --cask herdr-app, the Apple Silicon dmg, or the PowerShell installer on x64 Windows. The window is spaces, tabs, and panes. Terminals run in herdr-core, the hc command, so quitting, updating, or crashing the window leaves them running. Closing a pane or a tab ends its terminals. After a reboot or a core crash, kept panes come back as fresh shells in their last folders, and the old programs are not restarted.",
      "An agent starts a helper with hc run --bg, changes its task with hc send, reads output with hc read, and waits with hc wait --children all. A helper started inside an hc terminal reports back into the parent's input and ends with the parent unless started with --outlive-parent. Agents that support OSC 7501 report working, done, blocked, or error. herdr-core stores that report and does not guess from the screen. A program that does not report still runs, without a status. SSH machines join with hc machine add, including over Tailscale. Programs stay on that machine and keep running while the laptop sleeps, as long as the remote machine and its core stay up.",
      "The homepage says there is no account, and that the phone talks straight to the machine. From the phone you can see who needs you, open the terminal, type, paste a screenshot, or talk. Layouts, keys, themes, and JavaScript mods are plain files in ~/.config/herdr-app, with an AGENTS.md. Mods are trusted code. Usage telemetry is on by default in app releases and can be turned off in Settings, Privacy. herdr-app, herdr-core, and the TUI repository are Apache-2.0.",
      "Herdr TUI is the original Herdr: one Rust binary in the terminal you already use, with its own background server. The latest GitHub release is v0.9.5, published October 14, 2026. Install is the script at herdr.dev/install.sh, or brew install herdr. Detach with ctrl+b q and that server keeps the processes. If the server stops, the original processes are gone and the saved layout returns. A supported agent resumes its conversation only after herdr integration install for that agent. The TUI docs say Herdr recognizes some agents by reading the pane, including Claude Code, Codex, OpenCode, and Grok CLI. herdr --skill prints the skill. If HERDR_ENV is not set, the skill says the agent should stop. Agents started in the TUI do not show up in the app."
    ],
    bestFor: [
      "Coding-agent terminals that keep running after the window closes",
      "An agent that starts a helper and gets the report back in its input",
      "A desktop app and a TUI that the homepage says do not share agents"
    ],
    tags: [
      "coding agents",
      "terminals",
      "multi-machine",
      "Rust",
      "Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://herdr.dev/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/herdrdev/herdr"
      },
      {
        label: "herdr-app",
        href: "https://github.com/herdrdev/herdr-app/blob/master/README.md"
      },
      {
        label: "herdr-core",
        href: "https://github.com/herdrdev/herdr-core/blob/master/README.md"
      },
      {
        label: "TUI docs",
        href: "https://herdr.dev/docs/"
      },
      {
        label: "License",
        href: "https://github.com/herdrdev/herdr/blob/master/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/herdr/herdr-app-homepage.webp",
        alt: "Herdr app demo with a Spaces and Agents sidebar, a website space marked Needs you, and Claude Code and Codex panes side by side",
        caption: "Herdr app demo on the official herdr.dev homepage, captured October 31, 2026; not a local runtime test.",
        sourceName: "Herdr website",
        sourceUrl: "https://herdr.dev/"
      },
      {
        src: "/images/players/herdr/herdr-tui.webp",
        alt: "Herdr TUI with a sidebar listing pi as idle and claude as working, a Codex pane on the herdr repository, and a Claude Code pane beside it",
        caption: "Herdr TUI from the herdrdev/herdr README (assets/screenshot.png) at release v0.9.5, retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Herdr TUI GitHub README",
        sourceUrl: "https://github.com/herdrdev/herdr/blob/v0.9.5/README.md"
      },
      {
        src: "/images/players/herdr/herdr-architecture.svg",
        alt: "Diagram of Herdr: the desktop app's terminals run in herdr-core, helpers report back to the parent, and Herdr TUI keeps a separate server",
        caption: "Diagram of the documented split: herdr-core runs the app's terminals, and the TUI has its own server. Drawn from herdr.dev and the herdr, herdr-app, and herdr-core READMEs, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Herdr website",
        sourceUrl: "https://herdr.dev/"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Herdr-run agent work",
      valueProp: "Herdr keeps coding agents running and shows which one needs you. Separately configured product analytics can show the observed user-facing results of a change those agents helped ship.",
      measurementLoop: [
        "a developer runs coding agents and their helpers in Herdr to prepare a product change",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the developer uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Herdr integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Herdr agent status or telemetry.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat agent status or terminal activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("herdr"),
      screenshots: []
    }
  },
  {
    slug: "joxo", installMethod: "mcp",
    rank: 53,
    title: "Joxo",
    visibility: "not-open-important",
    accent: "violet",
    mark: {
      kind: "image",
      src: "/logos/joxo.png",
      label: "Joxo logo"
    },
    summary: "A proprietary hosted project where each teammate's coding agent keeps its own plan, and the agents share one task board, a team chat, and handoffs.",
    note: "The public GitHub repository holds the desktop release, the Claude Code and Codex plugin, and the MCP entry, and the product source is not published there.",
    overview: [
      "Joxo is a hosted project for the coding agent each person already runs. The README names Claude Code, Codex, Cursor, and OpenCode, and points at 28 agents in all on joxo.ai/agents. Joxo runs no model, and everyone keeps their own plan. It ships as a desktop app for Mac, Windows, and Linux, an iPhone app on TestFlight, and a connector for Claude.ai and ChatGPT at https://joxo.ai/api/mcp. The Mac app is signed and notarized. Setup is a line you paste into the agent, which reads https://joxo.ai/skill.md, or joxo claude and joxo codex in the project folder. Other agents start the way they always do.",
      "The shared project has a task board. A handoff carries the branch and the commit with the note. joxo handoff writes what is done and what is next, and a teammate continues with joxo take. Only one agent can hold a task at a time. An agent can ask a teammate's agent by name in the team chat. That agent answers from the teammate's own computer. Team rules live in JOXO.md, which every agent on the project reads. joxo rules commit stages that file so git shares it. An idle session wakes when work arrives. joxo drop posts an idea and hands it to a session.",
      "Questions reach the iPhone app by default. Permission prompts need joxo control permissions on and the code the phone shows. The phone pairs by the same Apple or GitHub account, or by a code from joxo phone. Screen, which lets you see and control the computer from the phone, is in beta after joxo screen setup. joxo doctor names each problem with a fix, and joxo repair applies the ones that need no decision.",
      "The public repository is the community home, the desktop release feed, the plugin under plugins/joxo, and server.json for the MCP registry. The README says the source is not published there. The repository footer says Joxo is proprietary software, the repository carries no source, and it grants no licence to the product. What you post in issues and discussions stays yours."
    ],
    bestFor: [
      "A team whose coding agents each keep their own plan",
      "One holder per task, with the branch and commit on the handoff",
      "Answering an agent from the iPhone app"
    ],
    tags: [
      "not open",
      "coding agents",
      "task board",
      "handoffs",
      "shared decisions"
    ],
    links: [
      {
        label: "Website",
        href: "https://joxo.ai/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/JoxoAI/joxo"
      },
      {
        label: "Supported agents",
        href: "https://joxo.ai/agents"
      }
    ],
    screenshots: [
      {
        src: "/images/players/joxo/joxo-board.webp",
        alt: "Joxo Board with Up next, In progress and Done columns, where each in-progress task shows the teammate holding it and the coding agent working on it",
        caption: "Joxo Board product image from the official joxo.ai homepage, captured November 1, 2026; not a local runtime test.",
        sourceName: "Joxo website",
        sourceUrl: "https://joxo.ai/"
      },
      {
        src: "/images/players/joxo/joxo-iphone.jpg",
        alt: "The Joxo iPhone app: the task board, a handoff, an agent asking a question, and the team chat.",
        caption: "Joxo iPhone app from the JoxoAI/joxo README (media/app.jpg), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Joxo GitHub README",
        sourceUrl: "https://github.com/JoxoAI/joxo/blob/main/README.md"
      },
      {
        src: "/images/players/joxo/joxo-architecture.svg",
        alt: "Diagram of Joxo: each person's agent stays on their computer, the shared board has one holder per task, and a handoff carries the branch and commit.",
        caption: "Diagram of the documented flow: agents stay on each person's computer, one agent holds a task, and questions reach the phone. Drawn from the JoxoAI/joxo README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Joxo GitHub README",
        sourceUrl: "https://github.com/JoxoAI/joxo/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Joxo-coordinated agent work",
      valueProp: "Joxo coordinates tasks, decisions and handoffs between teammates' coding agents. Separately configured product analytics can show the observed user-facing results of a change those agents helped ship.",
      measurementLoop: [
        "teammates' coding agents pick up and hand off tasks in a shared Joxo project",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Joxo integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Joxo task board activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat task board activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("joxo"),
      screenshots: []
    }
  },
  {
    slug: "friday", installMethod: "mcp",
    rank: 54,
    title: "Friday",
    githubRepo: "splashxmoon/friday",
    category: "Parallel Coding-Agent Runners",
    visibility: "open",
    accent: "sky",
    mark: {
      kind: "image",
      src: "/logos/friday.png",
      label: "Friday logo"
    },
    summary: "An MIT-licensed local app that drives the coding CLIs already signed in on your computer, and lets them share a task board, messages, and worktrees.",
    note: "It listens on 127.0.0.1, has no account, and asks before it sends anonymous usage counts.",
    overview: [
      "Friday is an MIT-licensed desktop app and a local server. It drives the coding CLIs already signed in on the computer. The README's tool table names Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI, Antigravity CLI, OpenCode, Devin, Junie, Kiro, Factory Droid, Grok Build, Cline, Kilo, Amp, Muse Code, Qwen Code, and any ACP agent. Friday has no model of its own for those tools. Friday Code is a separate agent that uses an API key you add, or a local model such as Ollama or LM Studio. The app listens on 127.0.0.1 only. The Mac app is signed and notarized. The Windows installer is not signed yet. With Node.js 22, npx github:splashxmoon/friday opens the same server at http://127.0.0.1:4321.",
      "Agents in one session message each other, and you see every message. One agent can turn the job into a shared task board. The others pick up parts, each in its own git worktree, so they do not overwrite one checkout. A finished task is checked by another agent, a different model when one is free. You read the diff, leave notes on a line, and commit. When one agent runs out of usage, another picks up the task with a record of what was done.",
      "Crew is a second mode: named teammates on the computer, each with a role, a memory, and a folder, on one of your coding tools. Access per teammate is Read only, Ask before changes, or Full access. Away until a time still needs the computer on and Friday running. A rule you state once is offered as a check on later work. A failing test is rerun on the code from before the agent started, and an old failure is marked as old. Before a command that deletes, deploys, publishes, or installs, Don't is the main button. Secrets are hidden in the chat and the Git panel.",
      "Automations run on a schedule, a webhook, or when another session finishes, and they end in a pull request for you to review. Claude Code, Codex, or any MCP client on the computer can start Friday sessions with claude mcp add friday. Friday Team, at tryfridaywork.com, is the hosted product for several people in one session. The local app asks in its welcome before it sends anonymous usage counts to PostHog, with IP-based location and person profiles turned off, and it sends nothing before you answer. The README says those counts never include prompts, code, file paths, repository names, or accounts. Settings, FRIDAY_NO_TELEMETRY=1, or DO_NOT_TRACK=1 turns them off."
    ],
    bestFor: [
      "Coding CLIs that share one task board and message each other",
      "A worktree per agent, with another agent checking the finished task",
      "A local app on 127.0.0.1, with usage counts off until you accept them"
    ],
    tags: [
      "coding agents",
      "task board",
      "git worktrees",
      "desktop",
      "MIT"
    ],
    links: [
      {
        label: "Website",
        href: "https://www.tryfridaywork.com/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/splashxmoon/friday"
      },
      {
        label: "Docs",
        href: "https://www.tryfridaywork.com/docs"
      },
      {
        label: "README",
        href: "https://github.com/splashxmoon/friday/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/splashxmoon/friday/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/friday/friday-home.png",
        alt: "Friday home screen in the Code view, with five recent sessions in the sidebar and a Right now list of tasks marked Working",
        caption: "Friday home screen from the splashxmoon/friday README (docs/assets/hero.png), retrieved November 4, 2026; not a local runtime test.",
        sourceName: "Friday GitHub README",
        sourceUrl: "https://github.com/splashxmoon/friday/blob/main/README.md"
      },
      {
        src: "/images/players/friday/friday-agents-talk.png",
        alt: "A Friday session where Codex tells Cursor about a rename, and Gemini asks Claude Code whether a discount comes off before or after tax.",
        caption: "Agent messages from the splashxmoon/friday README (docs/assets/agents-talk.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Friday GitHub README",
        sourceUrl: "https://github.com/splashxmoon/friday/blob/main/README.md"
      },
      {
        src: "/images/players/friday/friday-architecture.svg",
        alt: "Diagram of Friday: agents message each other, each task runs in its own worktree, another agent checks the result, and usage counts stay off until you accept them.",
        caption: "Diagram of the documented flow: a shared board, a worktree per agent, and a local server on 127.0.0.1. Drawn from the splashxmoon/friday README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Friday GitHub README",
        sourceUrl: "https://github.com/splashxmoon/friday/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Friday-run agent work",
      valueProp: "Friday runs coding agents side by side on a shared task board. Separately configured product analytics can show the observed user-facing results of a change those agents helped ship.",
      measurementLoop: [
        "coding agents share a Friday task board, message each other, and hand off when one hits a usage limit",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Friday integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Friday task board activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat task board activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("friday"),
      screenshots: []
    }
  },
  {
    slug: "caprock", installMethod: "mcp",
    rank: 55,
    title: "Caprock",
    githubRepo: "dspv/caprock",
    visibility: "open",
    accent: "amber",
    mark: {
      kind: "image",
      src: "/logos/caprock.svg",
      label: "Caprock logo"
    },
    summary: "An Apache-2.0 local desktop app where Claude Code, Codex, OpenCode, and Gemini CLI sessions run side by side, with the one waiting on you listed first.",
    note: "The README says nothing leaves the machine, there is no account and no telemetry, and spend figures are API list-price estimates.",
    overview: [
      "Caprock is an Apache-2.0 desktop app for macOS, Windows, and Linux. The README says nothing leaves the machine: no account and no telemetry. Claude Code, Codex, OpenCode, and Gemini CLI run in tabs and split panes, per project and per git worktree, with a shell beside them. Sessions you start in your own terminal show up too. You can keep a work account and a personal account side by side. Three accounts per agent are free. Install is brew install --cask dspv/tap/caprock-app, or the dmg, Windows setup, AppImage, deb, or rpm from the GitHub releases.",
      "Sessions stuck on a permission prompt come first. For the sessions Caprock started, you answer Yes or No from the card, a notification, the menu bar, or the phone. A notification carries Approve only when it shows the whole request, so you do not answer a command you have not read. The phone is paired by QR. caprock mcp is a read-only MCP server, so Claude Code, Codex, or any MCP client can ask about past sessions and spend. docs/mcp.md lists what a query returns and what is redacted.",
      "The Pipeline lists the repository's pull requests with every check per job and operating system, how long they took, and what the agents spent. A red run, a conflict, or a branch behind master can start Fix CI with agent, Fix conflict with agent, or Update branch. The Changes view stages, commits, and pushes without leaving the window. Spend is priced at API list prices, per repository and per service in a monorepo. The README says that figure is an estimate of what the same work would cost through the API, not a bill. Claude and Codex plan windows sit beside it, with a warning before you hit the limit.",
      "Every session stays searchable after Claude Code's 30-day cleanup deletes the transcript, including what the agent wrote. Loop alerts fire on repeated tool calls. An opt-in task runner for Claude Code calls a task done only when your own test commands pass. A /clear or a fork starts a new session id, and Caprock links it to the one before, so the conversation stays one card. The README's hero is a real session in the Caprock repository, replayed on a demo stand, and the caption there says the figures are examples."
    ],
    bestFor: [
      "Coding-agent sessions side by side on one machine",
      "Seeing which agent is waiting and what each session and pull request cost",
      "Answering approvals from an iPhone paired by QR"
    ],
    tags: [
      "coding agents",
      "desktop",
      "session cost",
      "plan limits",
      "Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://caprock.dev/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/dspv/caprock"
      },
      {
        label: "Docs",
        href: "https://github.com/dspv/caprock/tree/master/docs"
      },
      {
        label: "README",
        href: "https://github.com/dspv/caprock/blob/master/README.md"
      },
      {
        label: "License",
        href: "https://github.com/dspv/caprock/blob/master/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/caprock/caprock-app.png",
        alt: "The Caprock desktop app: six agent tabs numbered ⌘1 to ⌘6, an orchestrating Claude Code session that has launched its subagents, the sidebar listing each open tab with its phase, and the session panel",
        caption: "Caprock desktop app from the official caprock.dev homepage (/shots/app-work.png), retrieved November 9, 2026; not a local runtime test.",
        sourceName: "Caprock website",
        sourceUrl: "https://caprock.dev/"
      },
      {
        src: "/images/players/caprock/caprock-pipeline.webp",
        alt: "The Caprock Pipeline: what needs a fix, merges a day, and agent spend over 14 days, above a release list of open pull requests with CI state, spend, and age.",
        caption: "Pipeline from the dspv/caprock README (docs/readme/pipeline.webp), retrieved November 13, 2026; not a local runtime test. The README says spend figures are examples of API list price, not a bill.",
        sourceName: "Caprock GitHub README",
        sourceUrl: "https://github.com/dspv/caprock/blob/master/README.md"
      },
      {
        src: "/images/players/caprock/caprock-changes.webp",
        alt: "Caprock Changes view on a feature branch: a pull request with three failed Go checks, Fix with agent, the changed files, a diff, and Commit all and Commit and Push.",
        caption: "Changes view from the dspv/caprock README (docs/readme/changes.webp), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Caprock GitHub README",
        sourceUrl: "https://github.com/dspv/caprock/blob/master/README.md"
      },
      {
        src: "/images/players/caprock/caprock-architecture.svg",
        alt: "Diagram of Caprock: local agent tabs, sessions waiting on you listed first, a read-only MCP server, and a pipeline of pull requests with list-price spend.",
        caption: "Diagram of the documented flow: sessions on the machine, approvals in front, and a read-only MCP server. Drawn from the dspv/caprock README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Caprock GitHub README",
        sourceUrl: "https://github.com/dspv/caprock/blob/master/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Caprock-run agent work",
      valueProp: "Caprock runs coding-agent sessions side by side and shows which one is waiting on you. Separately configured product analytics can show the observed user-facing results of a change those agents helped ship.",
      measurementLoop: [
        "coding agents run side by side in Caprock while a developer reviews their changes",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the developer uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Caprock integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Caprock session activity or spend.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat session activity or spend as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("caprock"),
      screenshots: []
    }
  },
  {
    slug: "orchestrator-inc", installMethod: "cli-and-skill",
    rank: 56,
    title: "Orchestrator.inc",
    githubRepo: "OrchestratorInc/agent-orchestrator",
    category: "Parallel Coding-Agent Runners",
    visibility: "open",
    accent: "blue",
    mark: {
      kind: "image",
      src: "/logos/orchestrator-inc.png",
      label: "Orchestrator.inc logo"
    },
    summary: "An Apache-2.0 desktop app where a project's main agent plans a task and starts a worker for each piece, each in its own git worktree.",
    note: "Failed checks, review comments, and merge conflicts go back to the worker that owns the branch, and usage telemetry is on until you turn it off.",
    overview: [
      "Orchestrator.inc is an Apache-2.0 local desktop app. You tell a project's main agent what to build. It plans the work, starts a worker for each piece in its own git worktree, and comes back when something needs you. For that local mode the README says your code stays on your machine. Each worker can use a different harness and model. The README's agent table lists them, and the agent setup guides say worker, chat, and reviewer support differ by agent. Each worker also gets a browser to preview and test the app. You can work in structured chat or in the agent's own terminal. The app updates itself. Downloads cover Apple silicon, Intel, and Windows.",
      "Sessions sort themselves into lanes from the agent, its pull request, CI, and reviews, so whatever needs you is on top. Failed checks, review comments, and merge conflicts go back to the worker that owns the branch until the pull request is approved. A reviewer agent can read every pull request before a person does.",
      "The iPhone and Android apps pair by a QR code in Settings, Connect Mobile. They work on home Wi-Fi and away from home. A push notification tells you when an agent has a question or needs approval. From the phone you can answer in chat, approve the request, open the agent's terminal, start a worker and pick its agent and model, and check pull requests and reviewer results.",
      "Cloud Agents run workers in hosted workspaces instead of on your machine. Choose Clone to the cloud and pick a GitHub repository. The README says the tasks keep going with the laptop closed, and the code, the worktrees, and the agents live in the cloud. The desktop app can still open the chat, the files, and the terminal.",
      "The README's telemetry section says Orchestrator.inc collects limited usage and reliability telemetry, and never your code, prompts, agent conversations, or credentials. The send includes an installation ID and your GitHub username. If you sign in to AO Cloud it also includes that account's user ID and email, set once as a PostHog person property. Settings, General, Privacy, Share usage analytics turns it off for the desktop, the daemon, and a paired phone."
    ],
    bestFor: [
      "An orchestrator agent that starts a worker for each piece of a task",
      "Pull requests tracked through CI and review on one Kanban board",
      "Remote sessions from the iOS and Android apps"
    ],
    tags: [
      "coding agents",
      "kanban",
      "git worktrees",
      "desktop",
      "Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://orchestrator.inc/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/OrchestratorInc/agent-orchestrator"
      },
      {
        label: "Docs",
        href: "https://docs.orchestrator.inc/"
      },
      {
        label: "README",
        href: "https://github.com/OrchestratorInc/agent-orchestrator/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/OrchestratorInc/agent-orchestrator/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/orchestrator-inc/orchestrator-inc-kanban.png",
        alt: "Orchestrator.inc Kanban showing worker sessions grouped by live status",
        caption: "Orchestrator.inc Kanban from the OrchestratorInc/agent-orchestrator README (docs/assets/readme/hero.png), retrieved November 9, 2026; not a local runtime test.",
        sourceName: "Orchestrator.inc GitHub README",
        sourceUrl: "https://github.com/OrchestratorInc/agent-orchestrator/blob/main/README.md"
      },
      {
        src: "/images/players/orchestrator-inc/orchestrator-inc-split.jpg",
        alt: "Orchestrator.inc splitting a billing feature into three workers, each in its own worktree with a different coding agent.",
        caption: "Orchestrator splitting work from the OrchestratorInc/agent-orchestrator README (docs/assets/readme/site/orchestrator.jpg), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Orchestrator.inc GitHub README",
        sourceUrl: "https://github.com/OrchestratorInc/agent-orchestrator/blob/main/README.md"
      },
      {
        src: "/images/players/orchestrator-inc/orchestrator-inc-feedback.jpg",
        alt: "A pull request timeline where a failed check and a review comment are routed back to Claude Code, which pushes a fix.",
        caption: "CI and review routed back to the owning worker, from the OrchestratorInc/agent-orchestrator README (docs/assets/readme/site/feedback.jpg), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Orchestrator.inc GitHub README",
        sourceUrl: "https://github.com/OrchestratorInc/agent-orchestrator/blob/main/README.md"
      },
      {
        src: "/images/players/orchestrator-inc/orchestrator-inc-architecture.svg",
        alt: "Diagram of Orchestrator.inc: the main agent starts a worker per worktree, the board surfaces what needs you, and a phone or a cloud workspace can follow the same task.",
        caption: "Diagram of the documented flow: one worker per piece, failures back to the owner of the branch, and an optional cloud workspace. Drawn from the OrchestratorInc/agent-orchestrator README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Orchestrator.inc GitHub README",
        sourceUrl: "https://github.com/OrchestratorInc/agent-orchestrator/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Orchestrator.inc-run agent work",
      valueProp: "Orchestrator.inc plans a task across worker agents and tracks their pull requests. Separately configured product analytics can show the observed user-facing results of a change those agents helped ship.",
      measurementLoop: [
        "an orchestrator agent starts workers, and a Kanban board tracks their pull requests through CI and review",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Orchestrator.inc integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Kanban or pull request activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat Kanban or pull request activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("orchestrator-inc"),
      screenshots: []
    }
  },
  {
    slug: "kortix", installMethod: "mcp",
    rank: 57,
    title: "Kortix",
    githubRepo: "kortix-ai/CompanyOS",
    accent: "emerald",
    mark: {
      kind: "image",
      src: "/logos/kortix.svg",
      label: "Kortix logo"
    },
    summary: "A source-available CompanyOS, under Elastic License 2.0, where a company's agents, skills, memory and connectors are files in one git repository it owns.",
    note: "My Kortix hands each task to a workspace agent in its own session, and a change to the workspace opens a change request.",
    overview: [
      "Kortix CompanyOS keeps a company's agents, skills, memory and connector settings as files in one git repository the company owns. kortix.yaml declares them. The repository is kortix-ai/CompanyOS, default branch dev. The older kortix-ai/suna name redirects there. The root VERSION file on dev reads 0.15.10. Custom agents run on pi, which the README describes as an open-source agent harness. You talk to My Kortix. It answers at once and hands writing, research, code and app work to a workspace agent in a session of its own. A new workspace starts with My Kortix and a general-purpose agent called worker. worker may use every connector, secret, skill and Kortix permission. Each of those sessions gets its own isolated cloud computer, with a terminal, a browser and a desktop you can watch. My Kortix runs on a smaller computer without a desktop and hands browsing to the other sessions. About 15 to 20 minutes after the last turn the computer stops. The next message or event wakes it with its history. State stays in the git repo, in Drive, in the session's /workspace, and in the session record. Drive files are stored on Platinum.",
      "People reach the same projects from the web, desktop and mobile apps, the terminal, Slack, Microsoft Teams and email, and from other AI tools through MCP. Triggers start agents from schedules, signed webhooks, connector events, App events and merged change requests. A filter in code can drop an event before a model runs. Connector events are experimental and off by default. For a large job, write ultracode and My Kortix proposes a workflow that you approve first. One workflow runs at most 50 agents, 8 at a time, for at most 2 hours. Agent teams, which share one to-do list, are experimental and off by default. Goals are experimental and off by default too. A separate verifier session confirms a goal, the agent cannot mark its own goal done, and the heartbeat runs every 4 hours while the goal is active.",
      "Each connector action is Allow, Ask or Block. Allow runs it, Ask waits for a person, and Block never runs it. Credentials stay on the server and do not enter the session machine. When an agent changes the workspace, a skill, its memory or another agent, it opens a change request. A person reviews it on the Review page and selects Ship it to merge it. The README says merge is deny-by-default for agents. The guide adds that worker holds every Kortix permission, so worker is allowed to merge its own change requests, and its standing instructions tell it to merge only when you ask. Removing that permission means a person merges every time.",
      "The README says connectors cover 3,000+ apps, plus MCP, OpenAPI, GraphQL and raw HTTP. In the app, New, then MCP server, adds a server by address. A server the catalog does not already publish needs one approval of that address from a person who manages connectors. Models are Kortix-managed models on the Credits plan and Enterprise, your own provider keys, a ChatGPT subscription, or a Claude subscription. The Free plan needs a model you connect. Every request goes through the Kortix LLM gateway, which can apply a budget and a fallback list of up to 8 models.",
      "kortix self-host start runs one Docker Compose stack on a server you control. That stack holds the web app, the API, the database and the LLM gateway. Every session still runs in its own Platinum sandbox, and each Drive and App volume is a Platinum volume, so that data stays at Platinum. The sandbox calls back to the instance's public API, so the server has to be reachable from the internet. The images come from Docker Hub. In local mode, with ports bound to 127.0.0.1, sessions do not start, because the sandbox cannot reach the API. A self-hosted instance has no Kortix-managed models. The LICENSE file is Elastic License 2.0. The README and the kortix.com pages call the same repository open source. The license is source-available: it does not allow providing the software to third parties as a hosted or managed service where the service provides users access to any substantial set of the features or functionality. A separate white-label license, on top of Elastic License 2.0, allows a rebrand and a hosted service when Platinum is the exclusive compute provider for sandboxes, volumes, runners and inference. Kortix can end that white-label license. The partner then has up to 90 days to move existing customers, and after that only Elastic License 2.0 applies."
    ],
    bestFor: [
      "Company agents, skills, memory and connectors kept in one git repository",
      "Sessions on their own cloud computers, with Allow, Ask or Block on each connector action",
      "A self-hosted app and API, with session computers and Drive on Platinum"
    ],
    tags: [
      "CompanyOS",
      "git repository",
      "cloud computers",
      "change requests",
      "Elastic License 2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://kortix.com/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/kortix-ai/CompanyOS"
      },
      {
        label: "Guide",
        href: "https://kortix.com/docs/guide"
      },
      {
        label: "Self-hosting",
        href: "https://kortix.com/docs/developers#self-hosting"
      },
      {
        label: "README",
        href: "https://github.com/kortix-ai/CompanyOS/blob/dev/README.md"
      },
      {
        label: "License",
        href: "https://github.com/kortix-ai/CompanyOS/blob/dev/LICENSE"
      },
      {
        label: "White-label license",
        href: "https://github.com/kortix-ai/CompanyOS/blob/dev/WHITE-LABEL-LICENSE.md"
      }
    ],
    screenshots: [
      {
        src: "/images/players/kortix/kortix-session.jpg",
        alt: "The Kortix new-session screen for a sample company named Acme, with a session list, the prompt Give Acme something real to work on, and the model picker set to GLM 5.2.",
        caption: "Kortix web app from kortix-ai/CompanyOS (apps/web/public/media/showcase/kortix-showcase-poster.jpg), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Kortix GitHub repository",
        sourceUrl: "https://github.com/kortix-ai/CompanyOS/blob/dev/apps/web/public/media/showcase/kortix-showcase-poster.jpg"
      },
      {
        src: "/images/players/kortix/kortix-readme-session.png",
        alt: "A frame of the Kortix README animation: the CompanyOS home page above a Northwind session named Monday revenue report, with the prompt for a five-month revenue dashboard.",
        caption: "One frame of the README animation (apps/web/public/media/showcase/kortix-readme.gif) in kortix-ai/CompanyOS, retrieved November 13, 2026; not a local runtime test. The page headline in that frame calls the product open source. The LICENSE file is Elastic License 2.0.",
        sourceName: "Kortix GitHub README",
        sourceUrl: "https://github.com/kortix-ai/CompanyOS/blob/dev/README.md"
      },
      {
        src: "/images/players/kortix/kortix-architecture.svg",
        alt: "Diagram of Kortix: My Kortix and triggers start a session on its own cloud computer, state stays in the repo, Drive and workspace, and a workspace change opens a change request.",
        caption: "Diagram of the documented flow: My Kortix hands work to a session on its own computer, Drive stays on Platinum, and a workspace change opens a change request. Drawn from the CompanyOS README and the self-hosting guide, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Kortix self-hosting guide",
        sourceUrl: "https://kortix.com/docs/developers#self-hosting"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Kortix-run agent work",
      valueProp: "Kortix runs company agents in separate sessions, and a workspace change opens a change request. Separately configured product analytics can show the observed user-facing results of a change that was shipped.",
      measurementLoop: [
        "a workspace agent prepares a change on its own computer and opens a change request",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Kortix integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Kortix agent activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat agent activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("kortix"),
      screenshots: []
    }
  },
  {
    slug: "reliant", installMethod: "mcp",
    rank: 58,
    title: "Reliant",
    githubRepo: "reliant-labs/reliant",
    category: "Multi-Agent Platforms And Builders",
    accent: "orange",
    mark: {
      kind: "image",
      src: "/logos/reliant.png",
      label: "Reliant logo"
    },
    summary: "A source-available agent harness under Business Source License 1.1, where workflows are YAML graphs versioned in the repo.",
    note: "Each published version changes to Apache-2.0 four years later, and Autopilot leaves reviews and pull requests without merging or pushing to the default branch.",
    overview: [
      "Reliant is a desktop and web app for chatting with agents and for workflows that start when something happens. The LICENSE file is Business Source License 1.1 from Reliant Labs, Inc. The additional use grant allows production use that does not offer the work to third parties on a hosted or embedded basis in order to compete with Reliant's paid versions. The license says hosting it for internal use inside an organization is not a competitive offering. The Change Date is four years from the date that version is published, and the Change License is Apache-2.0. The TypeScript SDK and the Go SDK under sdk/ are Apache-2.0 on their own. This listing keeps the wording source-available, BSL 1.1.",
      "A workflow is a YAML file in .reliant/workflows/, versioned with the code. A trigger can be a pull request, a label, a comment, a schedule, a webhook, an alert, a GitHub, Slack, Gmail, or Twilio event, or another run finishing. Steps are agents, shell commands, approvals, and actions on outside services, including http/request. Edges between steps carry conditions. reliant workflow validate checks a file. Built-in workflows include Get It Right, and Best of Three, which runs parallel attempts in separate git worktrees and then a judge. Agents can spawn sub-agents. The README says you extend agents with MCP servers.",
      "Autopilot is five built-in GitHub workflows you turn on per repository: a code reviewer, a security reviewer, an engineer, an author's assistant, and on-call. Each leaves ordinary reviews, issues, comments, and pull requests that you can read and overrule. The README says none of them merges, approves, or pushes to the default branch. On-call files an issue with severity, evidence, a cause, and a proposed fix. A person adds the agent:ready label, the engineer opens a pull request, and the reviewer reads it.",
      "An agent runs on the desktop, a server you own, or a Reliant cloud machine. The README prices that cloud machine from $20 a month. It wakes on demand and suspends when idle, and the checkout and tools are waiting when it wakes. Workflows that only talk to GitHub, Slack, Gmail, or the web need no machine. Models are your own keys, including Anthropic, OpenAI, Google, GitHub Copilot, AWS Bedrock, Azure OpenAI, Groq, OpenRouter, or an OpenAI-compatible endpoint, a ChatGPT plan, or Reliant's managed provider. For your own keys the provider bills you at their prices. Forge, in a separate repository, is the open-source Go and React framework the README says Reliant already knows how to use. Install is a Homebrew cask, or the dmg, Windows exe, and AppImage downloads."
    ],
    bestFor: [
      "YAML workflow graphs versioned next to the code",
      "GitHub Autopilot that leaves the merge to a person",
      "Your own computer or a Reliant cloud machine, with your own model keys"
    ],
    tags: [
      "workflows",
      "YAML",
      "coding agents",
      "source-available",
      "BSL 1.1"
    ],
    links: [
      {
        label: "Website",
        href: "https://reliantlabs.io/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/reliant-labs/reliant"
      },
      {
        label: "Workflows docs",
        href: "https://docs.reliantlabs.io/workflows/overview"
      },
      {
        label: "MCP servers",
        href: "https://docs.reliantlabs.io/settings/mcp-servers"
      },
      {
        label: "README",
        href: "https://github.com/reliant-labs/reliant/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/reliant-labs/reliant/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/reliant/reliant-home.png",
        alt: "Reliant homepage with Workflows, How it works, Forge, Pricing and Docs in the header, and two cards labeled The harness and The foundation",
        caption: "Reliant homepage from the official reliantlabs.io Open Graph image (/og-image.png), retrieved November 11, 2026; not a local runtime test.",
        sourceName: "Reliant website",
        sourceUrl: "https://reliantlabs.io/"
      },
      {
        src: "/images/players/reliant/reliant-architecture.svg",
        alt: "Diagram of Reliant: a trigger starts a YAML graph of agent, shell, and approval steps, and Autopilot stops before the merge.",
        caption: "Diagram of the documented flow: a workflow file in the repo, conditional edges, and Autopilot that does not merge. Drawn from the reliant-labs/reliant README and LICENSE, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Reliant GitHub README",
        sourceUrl: "https://github.com/reliant-labs/reliant/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Reliant-run agent work",
      valueProp: "Reliant runs coding-agent workflows defined as YAML graphs. Separately configured product analytics can show the observed user-facing results of a change those workflows prepared.",
      measurementLoop: [
        "a Reliant workflow runs agent, shell, approval and integration steps, including implement, check and review cycles",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Reliant integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Reliant workflow activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat workflow activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("reliant"),
      screenshots: []
    }
  },
  {
    slug: "kraft", installMethod: "cli-and-skill",
    rank: 59,
    title: "Kraft",
    githubRepo: "itsOmidKarami/kraft",
    category: "Parallel Coding-Agent Runners",
    visibility: "open",
    accent: "violet",
    mark: {
      kind: "image",
      src: "/logos/kraft.svg",
      label: "Kraft logo"
    },
    summary: "An Apache-2.0 local orchestrator that takes one work item from a spec gate to a merge request, on its own git worktree.",
    note: "A gate stops until a person decides, no sandbox is set by default, and an unsandboxed agent runs as you.",
    overview: [
      "Kraft is an Apache-2.0 local orchestrator, the kraft command and a web UI. You file a work item from the web UI, a phone, or the CLI, and it stays paused until you start it. The agent then drafts a spec and a plan, stops for your approval of each, builds the change on its own branch, and opens a merge request. The shipped chains run every agent task on Claude Code. Codex, Cursor, Gemini CLI, Antigravity, OpenCode, and Amp can run steps after a chain edit. Kraft is one local process bound to http://127.0.0.1:8765. A tunnel reaches it from a phone. The README says macOS and Linux are supported, Windows is not, and WSL is untested. You need git, uv or Homebrew, and gh or glab for the nodes that open and merge the request.",
      "A chain is a YAML file you can read and diff. Its nodes are steps: some run the agent, some run a command, and some are gates that stop for a person. A gate stays stopped until a decision is recorded. The README says an agent's own calls to decide its gate are refused, and that only a sandbox with a network policy keeps an agent from deciding its own gates. No sandbox is set by default, and an unsandboxed agent runs as you. Request changes sends a note that re-runs the node that wrote the step. Kraft runs your tests in a node of its own, waits for CI, and has a separate reviewer decide whether a fix is done.",
      "Each item runs on its own branch in its own git worktree, so items run in parallel and your checkout stays as you left it. Attempts, time, and dollars are bounded. A capped item stops and hands you the full trace. kraft repo connect proposes the repo's test and setup commands and asks you to accept them. The Kraft plugin gives Claude Code, Codex, Cursor, and Antigravity slash commands and MCP tools to file work and clear gates from a session. Kraft Lite runs a chain inside one session, with no server. The license is Apache-2.0. Your agent provider bills the sessions Kraft runs.",
      "The gate still in the README shows the review brief an agent wrote, the files on the branch, and Request changes and Approve. The README's run animation is recorded on a dev instance with a simulated agent and is sped up while the agent works. That animation is not used here. The board image on the page is from kraft-sdlc.dev."
    ],
    bestFor: [
      "A YAML chain from spec and plan gates to a merge request",
      "One git worktree per work item, with tests and CI in their own steps",
      "A local server on 127.0.0.1, with capped attempts and spend"
    ],
    tags: [
      "coding agents",
      "git worktrees",
      "YAML",
      "local",
      "Apache-2.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://kraft-sdlc.dev/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/itsOmidKarami/kraft"
      },
      {
        label: "Docs",
        href: "https://kraft-sdlc.dev/get-started/why-kraft"
      },
      {
        label: "README",
        href: "https://github.com/itsOmidKarami/kraft/blob/main/README.md"
      },
      {
        label: "License",
        href: "https://github.com/itsOmidKarami/kraft/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/kraft/kraft-board.png",
        alt: "Kraft board listing tasks that need a person, including one waiting on final review and one that reached its spend cap",
        caption: "Kraft board from the official kraft-sdlc.dev site (/assets/board.png), retrieved November 12, 2026; not a local runtime test.",
        sourceName: "Kraft website",
        sourceUrl: "https://kraft-sdlc.dev/"
      },
      {
        src: "/images/players/kraft/kraft-gate.png",
        alt: "A Kraft gate review: the brief an agent wrote, the files on the branch, and Request changes and Approve buttons.",
        caption: "Gate review from the itsOmidKarami/kraft README (.github/assets/gate.png), retrieved November 13, 2026; not a local runtime test.",
        sourceName: "Kraft GitHub README",
        sourceUrl: "https://github.com/itsOmidKarami/kraft/blob/main/README.md"
      },
      {
        src: "/images/players/kraft/kraft-architecture.svg",
        alt: "Diagram of Kraft: a work item waits until you start it, spec and plan gates stop for you, the build runs in its own worktree, and a reviewer decides the fix.",
        caption: "Diagram of the documented chain: file, approve the spec and plan, build in a worktree, then review. Drawn from the itsOmidKarami/kraft README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "Kraft GitHub README",
        sourceUrl: "https://github.com/itsOmidKarami/kraft/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from Kraft-run agent work",
      valueProp: "Kraft runs each task from spec to pull request in its own git worktree. Separately configured product analytics can show the observed user-facing results of a change a person approves.",
      measurementLoop: [
        "Kraft runs a task through a YAML chain in its own git worktree, and a person approves the spec, the plan and the final review",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native Kraft integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report Kraft task activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat task activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("kraft"),
      screenshots: []
    }
  },
  {
    slug: "kwant", installMethod: "mcp",
    rank: 60,
    title: "kwant",
    githubRepo: "alexsergivan/kwant",
    category: "Coordination And Team Systems",
    visibility: "open",
    accent: "violet",
    mark: {
      kind: "image",
      src: "/logos/kwant.svg",
      label: "kwant logo"
    },
    summary: "An AGPL-3.0 self-hosted team of AI bots in one Rust binary: bots share chats, hand work on with an @mention, and a task turns Verified only when kwant runs the check itself.",
    note: "Each message goes to the bot that fits and the reply says why; spaces keep separate bots and accounts, and the app runs on a Mac, a Linux or Windows beta PC, or a server.",
    overview: [
      "kwant is one Rust binary (Tokio, Axum, SQLite, and a React app embedded in it). The command is kwnt, and a local run opens at http://127.0.0.1:8799. Each bot has a role, a voice the project calls a soul, and a model. Bots share a channel and hand work on with an @mention. A team lead can run a short discussion and post one summary. Separate spaces keep work, a side project, and home apart. Each space has its own bots, teams, channels, routines, accounts, approval rule, and hiring rule.",
      "In a channel, kwant's routing rules pick the bot that fits and the reply says why. Laya, the model at huggingface.co/convaiinnovations/laya, picks the model and the effort only when that bot is set to auto. It can add a guess from the bots' titles, and it does not pick a bot on its own. The first start installs Laya and downloads its model unless you pass --no-laya. While Laya is down, the same rules still pick the bot and a keyword estimate picks the model. That download, from PyPI and Hugging Face, is the one fetch kwant starts on its own. The README says there is no telemetry, and messages go only to the providers and services you add.",
      "The Mission board turns each hand-off into a card. A card turns Verified only when kwant runs the check itself, such as a test or a file check, and the card keeps the receipt. A file a bot attaches is evidence, not proof. On the Dev desk, each bot task can get its own git worktree, notes sit on diff lines, and a failed CI check goes back to that bot. The README says nothing is posted to GitHub and nothing is merged from that review card. A push to main, a deploy, or another production step always asks first.",
      "A new space starts on Ask only when risky: git push, network calls, unknown commands, and changes outside the bot's folder show an approval card. You can set a space or a bot to ask every time, or not to ask. Payments always ask, in every mode, whether the step is a shell payment command or a checkout in the bot's browser. Flight School lets a bot earn more freedom for a kind of work, and only you grant it. The README's 0.9 notes add an Inbox review group and a second check by a teammate on another model, in a clean copy of the files, that does not write the task's folder.",
      "The Mac app is a universal dmg, signed ad hoc and not notarized. Linux is an x86_64 beta: a deb for Ubuntu 22.04 or newer and Debian 12 or newer, or an AppImage. The README says that beta was tested in containers, not yet on real desktops. Windows is an x64 beta installer that is not code-signed, does not update itself, and does not include Grok, the VM, or video yet. On a server, kwnt can run under systemd, or in Docker Compose with kwnt, Laya, and a private Chromium. Inside that Compose stack, kwant's own execute_shell tool is not available, because it would need the host Docker socket. The CLIs' shell tools still run in the kwnt container. Accounts are a Claude, Codex, or Grok CLI login, an Anthropic, OpenAI, or xAI key, or your own OpenAI- or Anthropic-compatible server. When one account runs out, the turn moves to the next. MCP servers are registered once, over stdio or HTTP, and then assigned to individual bots. A bot does not see the MCP config on your own machine. The current code is AGPL-3.0-only: you can use, change, and run it, and if you change it and serve it over a network you publish those changes under the AGPL. A commercial license covers selling or hosting it without publishing changes. Code from before that switch, including the mac-v0.1.0 release, stays MIT OR Apache-2.0. Data stays in ~/.kwnt, or in KWNT_DATA_DIR."
    ],
    bestFor: [
      "A self-hosted bot team that hands work across a shared channel",
      "Mission board cards that turn Verified only after kwant's own check",
      "A Mac, Linux, or Windows app, or a VPS, using a CLI login or your own keys"
    ],
    tags: [
      "self-hosted",
      "bot team",
      "handoffs",
      "mission board",
      "AGPL-3.0"
    ],
    links: [
      {
        label: "Website",
        href: "https://kwant.si/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/alexsergivan/kwant"
      },
      {
        label: "Docs",
        href: "https://kwant.si/docs/quickstart"
      },
      {
        label: "README",
        href: "https://github.com/alexsergivan/kwant/blob/main/README.md"
      },
      {
        label: "Mission board",
        href: "https://github.com/alexsergivan/kwant/blob/main/docs/mission-control.md"
      },
      {
        label: "Channel routing",
        href: "https://github.com/alexsergivan/kwant/blob/main/docs/channel-routing.md"
      },
      {
        label: "MCP",
        href: "https://github.com/alexsergivan/kwant/blob/main/docs/mcp-api.md"
      },
      {
        label: "Approvals",
        href: "https://github.com/alexsergivan/kwant/blob/main/docs/approvals.md"
      },
      {
        label: "Commercial license",
        href: "https://github.com/alexsergivan/kwant/blob/main/COMMERCIAL.md"
      },
      {
        label: "License",
        href: "https://github.com/alexsergivan/kwant/blob/main/LICENSE"
      }
    ],
    screenshots: [
      {
        src: "/images/players/kwant/kwant-handoff.webp",
        alt: "A kwant #design-review channel: Designer answers an empty-state question, then @mentions QA, and QA checks the layout on a 360 px screen.",
        caption: "kwant channel from the alexsergivan/kwant README (docs/media/handoff.webp), retrieved November 13, 2026; not a local runtime test. The README says these screenshots come from a demo space with sample data.",
        sourceName: "kwant GitHub README",
        sourceUrl: "https://github.com/alexsergivan/kwant/blob/main/README.md"
      },
      {
        src: "/images/players/kwant/kwant-who-answers.webp",
        alt: "A kwant #general channel where Support answers a boot-return question, with a Matched skills chip, and Wrong bot? lists Lead, Frontend, Backend, QA, Researcher, and Marketer.",
        caption: "Who answers, from the alexsergivan/kwant README (docs/media/who-answers.webp), retrieved November 13, 2026; not a local runtime test. The README says these screenshots come from a demo space with sample data. Routing rules pick the bot; Laya does not pick a bot on its own.",
        sourceName: "kwant GitHub README",
        sourceUrl: "https://github.com/alexsergivan/kwant/blob/main/README.md"
      },
      {
        src: "/images/players/kwant/kwant-mission-board.webp",
        alt: "The kwant Mission board in the Trailhead space, with verified-result counts, two disagreeing facts about production RAM, and QA asking for the Act tier on release notes.",
        caption: "Mission board from the alexsergivan/kwant README (docs/media/mission-board.webp), retrieved November 13, 2026; not a local runtime test. The README says these screenshots come from a demo space with sample data, with Truth Ledger and Flight School on.",
        sourceName: "kwant GitHub README",
        sourceUrl: "https://github.com/alexsergivan/kwant/blob/main/README.md"
      },
      {
        src: "/images/players/kwant/kwant-verified.webp",
        alt: "A kwant task, Weekly load-test report, with an evidence receipt that says the file check passed and was checked by kwant, plus attached files that do not verify the task on their own.",
        caption: "Verified receipt from the alexsergivan/kwant README (docs/media/verified.webp), retrieved November 13, 2026; not a local runtime test. The README says these screenshots come from a demo space with sample data.",
        sourceName: "kwant GitHub README",
        sourceUrl: "https://github.com/alexsergivan/kwant/blob/main/README.md"
      },
      {
        src: "/images/players/kwant/kwant-architecture.svg",
        alt: "Diagram of a kwant space: a channel message is routed to a bot, bots hand work on with a mention, and a Mission board card turns Verified only after kwant runs the check.",
        caption: "Diagram of the documented flow: routing rules pick the bot, Laya picks the model only when it is set to auto, and a card turns Verified only after kwant's own check. Drawn from the alexsergivan/kwant README, retrieved November 13, 2026; not a product screenshot.",
        sourceName: "kwant GitHub README",
        sourceUrl: "https://github.com/alexsergivan/kwant/blob/main/README.md"
      }
    ],
    agentAnalytics: {
      heading: "Measure outcomes from kwant-run agent work",
      valueProp: "kwant runs a self-hosted team of bots that hand work to each other. Separately configured product analytics can show the observed user-facing results of a change those bots helped prepare.",
      measurementLoop: [
        "bots share chats and hand work to each other with an @mention, and a task turns Verified only when kwant runs the check itself",
        "the reviewed change is deployed to a separately instrumented project",
        "a human or an authorized agent reads observed product outcomes",
        "the team uses that evidence to choose the next task"
      ],
      setupNotes: "This is an optional measurement workflow, not a native kwant integration with Agent Analytics. Configure product tracking and authorized analytics access separately; the listing does not install tracking or report kwant bot activity.",
      prompt: "If product tracking and analytics access are already configured, inspect the deployed change over an appropriate observation window. Report measured outcomes, missing evidence and limitations. Do not infer causation from before-and-after movement or treat bot activity as product usage.",
      ctaLabel: "Explore outcome measurement",
      ctaHref: agentAnalyticsSignupHref("kwant"),
      screenshots: []
    }
  }
];
