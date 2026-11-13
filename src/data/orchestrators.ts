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

const agentGridScreenshots: OrchestratorScreenshot[] = [
  {
    src: "/images/players/agentgrid/agentgrid-platform-context.png",
    alt: "AgentGrid website explaining visible master and worker delegation",
    caption: "Delegation example on AgentGrid's public website, captured September 12, 2026.",
    sourceName: "AgentGrid website",
    sourceUrl: "https://agentgrid.sh/#orchestration"
  }
];

const cabinetScreenshots = [
  screenshot("cabinet", "Cabinet", "Cabinet website", "https://runcabinet.com/")
];

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

const cultureScreenshots = [
  screenshot(
    "culture",
    "Culture",
    "Culture docs",
    "https://culture.dev/docs/what-is-culture.html"
  )
];

const squadScreenshots = [
  screenshot("squad", "Squad", "Squad docs", "https://bradygaster.github.io/squad/")
];

const difyScreenshots = [
  screenshot("dify", "Dify", "Dify website", "https://dify.ai/")
];

const flowiseScreenshots = [
  screenshot("flowise", "Flowise", "Flowise website", "https://flowiseai.com/")
];

const multicaScreenshots = [
  screenshot("multica", "Multica", "Multica website", "https://multica.ai/")
];

const orcaScreenshots = [
  screenshot("orca", "Orca", "Orca website", "https://www.onorca.dev/")
];

const gasTownScreenshots = [
  screenshot("gastown", "Gas Town", "Gas Town GitHub repository", "https://github.com/gastownhall/gastown")
];

const swarmClawScreenshots = [
  screenshot("swarmclaw", "SwarmClaw", "SwarmClaw website", "https://www.swarmclaw.ai/")
];

const sidjuaScreenshots = [
  screenshot("sidjua", "SIDJUA", "SIDJUA website", "https://www.sidjua.com/")
];

const agnoScreenshots = [
  screenshot("agno", "Agno", "Agno website", "https://agno.com/")
];

const agentOfficeSuiteScreenshots = [
  screenshot("agent-office-suite", "Agent Office Suite", "Agent Office Suite website", "https://www.agentofficesuite.com/")
];

const mastraScreenshots = [
  screenshot("mastra", "Mastra", "Mastra website", "https://mastra.ai/")
];

const openWorkScreenshots = [
  screenshot("openwork", "OpenWork", "OpenWork website", "https://openworklabs.com/")
];

const sandcastleScreenshots = [
  screenshot("sandcastle", "Sandcastle", "Sandcastle GitHub repository", "https://github.com/mattpocock/sandcastle")
];

const ohMyCodexScreenshots = [
  screenshot("oh-my-codex", "oh-my-codex", "oh-my-codex GitHub repository", "https://github.com/Yeachan-Heo/oh-my-codex")
];

const supersetScreenshots = [
  screenshot("superset", "Superset", "Superset website", "https://superset.sh/")
];

const vibeKanbanScreenshots = [
  screenshot("vibe-kanban", "Vibe Kanban", "Vibe Kanban website", "https://vibekanban.com/")
];

const narranexusScreenshots = [
  screenshot("narranexus", "NarraNexus", "NarraNexus GitHub repository", "https://github.com/NetMindAI-Open/NarraNexus")
];

const orkasScreenshots = [
  screenshot("orkas", "Orkas", "Orkas website", "https://orkas.ai/?source=open-orchestrators")
];

const parallelCodeScreenshots = [
  screenshot("parallel-code", "Parallel Code", "Parallel Code website", "https://parallelcode.app/")
];

const proliferateScreenshots = [
  {
    ...screenshot(
      "proliferate",
      "Proliferate",
      "Proliferate app screenshot",
      "https://proliferate.com/"
    ),
    src: "/images/players/proliferate/proliferate-platform-context.png"
  }
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

const agentSwarmScreenshots = [
  screenshot("agent-swarm", "Agent Swarm", "Agent Swarm GitHub repository", "https://github.com/desplega-ai/agent-swarm")
];

const agentRqScreenshots = [
  {
    ...screenshot("agentrq", "AgentRQ", "AgentRQ website", "https://agentrq.com/"),
    src: "/images/players/agentrq/agentrq-platform-context.png"
  }
];

const fusionScreenshots = [
  {
    ...screenshot("fusion", "Fusion", "Fusion website", "https://runfusion.ai/"),
    src: "/images/players/fusion/fusion-platform-context.png"
  }
];
const agentlasOsScreenshots: OrchestratorScreenshot[] = [];

const fractalScreenshots = [
  {
    ...screenshot("fractal", "fractal", "fractal GitHub repository", "https://github.com/plasma-ai/fractal"),
    src: "/images/players/fractal/fractal-platform-context.png"
  }
];

const tempestScreenshots = [
  screenshot("tempest", "Tempest", "Tempest GitHub repository", "https://github.com/tempestai-dev/tempest")
];

const crewplaneScreenshots = [
  {
    ...screenshot("crewplane", "Crewplane", "Crewplane README", "https://github.com/crewplaneai/crewplane"),
    src: "/images/players/crewplane/crewplane-platform-context.png",
    alt: "Crewplane tmux dashboard with a multi-stage DAG summary and selected node status",
    caption: "Crewplane's optional tmux dashboard shows DAG progress, node status, provider routing, and the selected node's live log pane."
  }
];

const graphcodeScreenshots = [
  screenshot("graphcode", "GraphCode", "GraphCode website", "https://graphcode.app/")
];

const looptroopScreenshots = [
  screenshot("looptroop", "LoopTroop", "LoopTroop website", "https://www.looptroop.ovh/")
];

const waveScreenshots = [
  screenshot("wave", "Wave", "Wave website", "https://wave.davidsling.in/")
];

const orbiScreenshots = [
  screenshot("orbi", "Orbi", "Orbi website", "https://orbi.build/")
];

const agent007Screenshots = [
  screenshot("agent-007", "Agent 007", "Agent 007 GitHub README", "https://github.com/bill10/agent-007")
];

const ordewellScreenshots = [
  screenshot("ordewell", "Ordewell", "Ordewell website", "https://ordewell.ai/")
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
    slug: "openswarm", installMethod: "mcp",
    rank: 28,
    title: "Open Swarm",
    githubRepo: "openswarm-ai/openswarm",
    accent: "orange",
    mark: {
      kind: "image",
      src: "/logos/openswarm.png",
      label: "Open Swarm logo"
    },
    summary:
      "An MIT-licensed local mission-control center for launching, monitoring, and coordinating multiple AI agents in parallel.",
    note:
      "Centers orchestration on a visual canvas dashboard, parallel agent sessions, unified human-in-the-loop approvals, reusable prompt/templates, tools, skills, views, git worktree isolation, diff review, and local control.",
    overview: [
      "Open Swarm is a locally running orchestrator for managing multiple agents in parallel. Its public README describes a mission-control interface for launching, monitoring, and coordinating swarms of coding agents from one screen.",
      "It belongs in Open Orchestrators because it makes the swarm itself the operating surface: visual dashboards, agent cards, approval queues, prompt templates, skills, MCP tools, views, git worktree isolation, diffs, and local session history."
    ],
    bestFor: ["Local agent swarms", "Human-in-the-loop approvals", "Visual multi-agent dashboards"],
    tags: ["agent swarm", "local orchestrator", "approvals", "worktrees"],
    links: [
      {
        label: "Website",
        href: "https://openswarm.com/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/openswarm-ai/openswarm"
      },
      {
        label: "Docs",
        href: "https://docs.openswarm.com"
      },
      {
        label: "Official X",
        href: "https://x.com/OpenSwarm_"
      },
      {
        label: "Releases",
        href: "https://github.com/openswarm-ai/openswarm/releases"
      }
    ],
    screenshots: openSwarmScreenshots,
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
    summary:
      "A closed autonomous company OS for running daily operations with a self-improving multi-agent growth team.",
    note:
      "Not open-source; tracked as an important category signal because Crewlet frames multi-agent orchestration as an operating layer for growth, engineering, support, and data work across existing company tools.",
    overview: [
      "Crewlet describes itself as an autonomous company OS and multi-agent platform for daily business operations.",
      "Its public site frames the product around a self-improving AI growth team with persistent memory, tool access, company learning, autonomous actions, and continuous learning loops.",
      "It belongs in the not-open-important section because it shows the same category movement as other closed agent operating systems: agent teams connected to real business systems, with human review or auto-run paths."
    ],
    bestFor: ["Autonomous growth operations", "Tool-connected business workflows", "Closed company OS signals"],
    tags: ["not open", "company OS", "growth agents", "tool automation"],
    links: [
      {
        label: "Website",
        href: "https://www.crewlet.io/",
        emphasis: "primary"
      },
      {
        label: "Official X",
        href: "https://x.com/crewlet_"
      },
      {
        label: "Founder X",
        href: "https://x.com/jasonzhou1993"
      }
    ],
    screenshots: crewletScreenshots,
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
    summary:
      "An Apache-2.0 real-time human-in-the-loop task manager where AI agents and operators share tasks, replies, approvals, and workspace state through MCP.",
    note:
      "Centers orchestration on the live agent-human control loop: agents create or claim tasks, request decisions, receive operator replies, and keep multiple agent workspaces moving without losing context.",
    overview: [
      "AgentRQ is an open-source agent-human collaboration platform for Claude Code, ACP-compatible agents, Gemini CLI, and related autonomous agent sessions.",
      "It belongs in Open Orchestrators because it turns human oversight into a first-class orchestration surface: one workspace per agent, task boards, real-time notifications, MCP tools, supervisor/workspace MCP endpoints, ACP gateway support, Claude channels, and Codex gateway integration.",
      "The repository is Apache-2.0, Go/Vue-based, and documents a self-hosted stack with a Fiber API server, integrated MCP server, CoreMCP supervisor, SQLite persistence, Google OAuth, SSE notifications, and a Vue control panel."
    ],
    bestFor: ["Human-in-the-loop agent oversight", "MCP task and approval flows", "Parallel agent workspaces"],
    tags: ["human in the loop", "MCP", "task manager", "ACP", "approvals", "open source"],
    links: [
      {
        label: "Website",
        href: "https://agentrq.com/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/agentrq/agentrq"
      },
      {
        label: "Docs",
        href: "https://agentrq.com/docs/"
      },
      {
        label: "Self-hosting setup",
        href: "https://github.com/agentrq/agentrq/blob/main/SETUP.md"
      }
    ],
    screenshots: agentRqScreenshots,
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
    summary:
      "Open-source orchestration for zero-human companies, framed around AI employees, goals, and jobs across business functions.",
    note: "Frames orchestration at the company and business-function level instead of only task flow.",
    overview: [
      "Paperclip frames orchestration around companies, goals, budgets, jobs, and AI employees.",
      "It belongs in Open Orchestrators because it treats agents as business-function owners inside a company operating layer rather than only workflow nodes or coding assistants."
    ],
    bestFor: ["Company-level AI employees", "Goal and job ownership", "Business workflows with agent operators"],
    tags: ["company OS", "orchestration", "self-hosted", "business workflows"],
    links: [
      {
        label: "Website",
        href: "https://paperclip.ing/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/paperclipai/paperclip"
      },
      {
        label: "Docs",
        href: "https://docs.paperclip.ing/"
      },
      {
        label: "X",
        href: "https://x.com/papercliping"
      }
    ],
    screenshots: paperclipScreenshots,
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
    summary:
      "Organizes work as crews of specialized agents with a role-based model for delegation, collaboration, and task structure.",
    note: "Makes the team metaphor central to the orchestration model.",
    overview: [
      "CrewAI organizes agent work as crews of specialized roles that collaborate around delegated tasks.",
      "It belongs in Open Orchestrators because its core model makes the team metaphor explicit: agents have roles, work together, and produce structured outputs."
    ],
    bestFor: ["Role-based multi-agent workflows", "Delegation between specialist agents", "Teams that want explicit agent responsibilities"],
    tags: ["multi-agent", "roles", "delegation"],
    links: [
      {
        label: "Open Source",
        href: "https://crewai.com/open-source",
        emphasis: "primary"
      },
      {
        label: "Docs",
        href: "https://docs.crewai.com/"
      },
      {
        label: "GitHub",
        href: "https://github.com/crewAIInc/crewAI"
      },
      {
        label: "Website",
        href: "https://www.crewai.com/"
      }
    ],
    screenshots: crewAiScreenshots,
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
    summary:
      "An open-source GitHub Copilot-based agent team system where specialists live in the repo, keep memory, route work, and run in parallel.",
    note:
      "Alpha software; centers orchestration on repo-native team files, coordinator routing, persistent memory, parallel execution, watch mode, and CLI/SDK workflows.",
    overview: [
      "Squad gives GitHub Copilot a repo-native AI development team: specialist agents live in `.squad/`, keep their own history, share decisions, and work from project context that can be committed with the codebase.",
      "It belongs in Open Orchestrators because the central object is the team layer itself: coordinator routing, specialist roles, persistent memory, parallel execution, issue triage, and recovery breadcrumbs rather than one-off chat sessions.",
      "The public docs mark Squad as alpha, so it should be treated as an early but high-signal open-source project."
    ],
    bestFor: ["Repo-native AI development teams", "GitHub Copilot agent routing", "Persistent team memory"],
    tags: ["GitHub Copilot", "agent teams", "persistent memory", "parallel execution", "alpha"],
    links: [
      {
        label: "Docs",
        href: "https://bradygaster.github.io/squad/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/bradygaster/squad"
      },
      {
        label: "npm CLI",
        href: "https://www.npmjs.com/package/@bradygaster/squad-cli"
      },
      {
        label: "npm SDK",
        href: "https://www.npmjs.com/package/@bradygaster/squad-sdk"
      }
    ],
    screenshots: squadScreenshots,
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
    summary:
      "Open-source personal AI assistant software built around chat interfaces, persistent context, skills, and execution.",
    note: "Represents the assistant-shaped end of the orchestration space.",
    overview: [
      "OpenClaw is open-source personal AI assistant software built around chat, persistent context, skills, and execution.",
      "It belongs in Open Orchestrators because it represents the assistant-shaped branch of the category: a persistent operator that can keep context and run recurring work."
    ],
    bestFor: ["Persistent personal AI assistants", "Skill-based workflows", "Recurring operator tasks"],
    tags: ["workspace", "persistent memory", "chat-native"],
    links: [
      {
        label: "Website",
        href: "https://openclaw.ai/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/openclaw/openclaw"
      }
    ],
    screenshots: openClawScreenshots,
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
    githubRepo: "qwibitai/nanoclaw",
    accent: "mint",
    mark: {
      kind: "image",
      src: "/logos/nanoclaw.png",
      label: "NanoClaw logo"
    },
    summary:
      "An MIT-licensed personal AI assistant that runs Claude agents in isolated containers, connects to chat channels, keeps memory, schedules work, and uses skills as git branches.",
    note:
      "Centers orchestration on a small, understandable OpenClaw alternative with OS-level container isolation and multi-channel personal-agent operation.",
    overview: [
      "NanoClaw is a lightweight personal Claude assistant that runs agents in their own Linux containers, connects to Telegram, Discord, WhatsApp, Slack, Gmail, and local CLI channels, keeps persistent conversation memory, and supports scheduled tasks.",
      "It belongs in Open Orchestrators because it takes the OpenClaw-style personal assistant shape and makes the control surface smaller, more inspectable, and more isolation-first: one process, explicit mounts, containerized agent execution, and skills distributed as git branches."
    ],
    bestFor: ["Container-isolated personal agents", "Multi-channel assistant operation", "Small inspectable OpenClaw alternatives"],
    tags: ["personal agent", "containers", "chat channels", "skills", "MIT"],
    links: [
      {
        label: "Website",
        href: "https://nanoclaw.dev/",
        emphasis: "primary"
      },
      {
        label: "Docs",
        href: "https://docs.nanoclaw.dev/"
      },
      {
        label: "GitHub",
        href: "https://github.com/qwibitai/nanoclaw"
      }
    ],
    screenshots: nanoClawScreenshots,
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
    summary:
      "An MIT-licensed autonomous agent from Nous Research with persistent memory, self-created skills, scheduled automations, subagents, and messaging gateways.",
    note:
      "Centers orchestration on a persistent personal agent that learns across sessions, delegates parallel work, runs scheduled tasks, and reaches operators through CLI and chat platforms.",
    overview: [
      "Hermes Agent is an open-source autonomous agent from Nous Research that runs on user-controlled infrastructure, remembers what it learns, creates reusable skills, and gets more capable over time.",
      "The public docs describe a closed learning loop, persistent memory, scheduled automations, subagent delegation, MCP support, full web control, multiple terminal backends, and 15+ messaging platforms through one gateway.",
      "It belongs in Open Orchestrators because it combines persistent agent memory, skill creation, scheduled operation, multi-platform messaging, and isolated parallel subagents in one agent runtime rather than a one-off chat or IDE copilot."
    ],
    bestFor: ["Persistent personal agents", "Scheduled agent operations", "Subagent delegation and messaging gateways"],
    tags: ["agent runtime", "persistent memory", "skills", "subagents", "MIT"],
    links: [
      {
        label: "Website",
        href: "https://hermes-agent.nousresearch.com/",
        emphasis: "primary"
      },
      {
        label: "Docs",
        href: "https://hermes-agent.nousresearch.com/docs/"
      },
      {
        label: "GitHub",
        href: "https://github.com/NousResearch/hermes-agent"
      },
      {
        label: "Nous Research X",
        href: "https://x.com/NousResearch"
      },
      {
        label: "Teknium X",
        href: "https://x.com/Teknium"
      }
    ],
    screenshots: hermesScreenshots,
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
    slug: "sim", installMethod: "api-only",
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
    summary:
      "An open-source AI agent platform for building agents with integrations, workflows, knowledge bases, tables, and docs.",
    note: "Leans toward a workspace-style product rather than a narrow framework.",
    overview: [
      "Sim is an open-source AI agent platform for building agents with integrations, workflows, knowledge bases, tables, and docs.",
      "It belongs in Open Orchestrators because it brings agent building, workspace context, and integration-heavy workflows into one product surface."
    ],
    bestFor: ["Workspace-style agent building", "Integration-heavy workflows", "Knowledge-driven agent apps"],
    tags: ["workspace", "integrations", "knowledge bases"],
    links: [
      {
        label: "Website",
        href: "https://www.sim.ai/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/simstudioai/sim"
      },
      {
        label: "Docs",
        href: "https://docs.sim.ai/"
      }
    ],
    screenshots: simScreenshots,
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
    slug: "culture", installMethod: "api-only",
    rank: 7,
    title: "Culture",
    githubRepo: "agentculture/culture",
    accent: "sky",
    mark: {
      kind: "image",
      src: "/logos/culture.png",
      label: "Culture logo",
      surface: "dark"
    },
    summary:
      "A coordination-oriented system with a protocol, rooms, agent lifecycle docs, a CLI, and multiple agent clients.",
    note: "Structured around agent coordination, communication, and lifecycle management.",
    overview: [
      "Culture is a coordination-oriented system with a protocol, rooms, lifecycle documentation, a CLI, and multiple agent clients.",
      "It belongs in Open Orchestrators because it focuses on the communication and lifecycle layer that lets agents coordinate with each other and with operators."
    ],
    bestFor: ["Agent coordination rooms", "Protocol-oriented agent systems", "Lifecycle and handoff management"],
    tags: ["coordination", "protocol", "rooms"],
    links: [
      {
        label: "Website",
        href: "https://culture.dev/",
        emphasis: "primary"
      },
      {
        label: "Docs",
        href: "https://culture.dev/docs/what-is-culture.html"
      },
      {
        label: "GitHub",
        href: "https://github.com/agentculture/culture"
      },
      {
        label: "Protocol",
        href: "https://culture.dev/culture/protocol/protocol-index.html"
      }
    ],
    screenshots: cultureScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "culture",
      "Culture",
      "Culture coordinates agents through rooms and protocol flows. Agent Analytics gives that coordination loop user-event data after the agents ship a web or product change.",
      ["agents coordinate project work in rooms or through protocol flows", "the shipped page, docs update, app change, or support surface reports visits, sources, signup, activation, retention, and funnel movement to Agent Analytics", "a coordinator agent fetches the Agent Analytics data and summarizes the outcome for the room", "the report becomes the next coordinated task"],
      "Report events from the project surface Culture agents are helping build, then use the measured user events as input for the next coordinated task.",
      "Culture-managed page, traffic source, signup, activation event, or shipped change",
      cultureScreenshots
    )
  },
  {
    slug: "cabinet", installMethod: "api-only",
    rank: 8,
    title: "Cabinet",
    githubRepo: "hilash/cabinet",
    featured: true,
    accent: "cyan",
    mark: {
      kind: "image",
      src: "/logos/cabinet.png",
      label: "Cabinet logo"
    },
    summary:
      "An AI-first knowledge base where files live on disk and a team of AI agents help with execution.",
    note: "Combines files, knowledge, and agent execution in one operating surface.",
    overview: [
      "Cabinet is an AI-first knowledge base where files live on disk and agents can work from the same durable project memory as the team.",
      "It belongs in Open Orchestrators because the product combines workspace context, markdown knowledge, roles, and agent execution rather than treating agents as one-off chat sessions."
    ],
    bestFor: ["AI-first team knowledge bases", "Markdown-native operating memory", "Agent roles that write back into shared files"],
    tags: ["workspace", "orchestration", "self-hosted", "open source"],
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
        label: "Discord",
        href: "https://discord.gg/rxd8BYnN"
      }
    ],
    screenshots: cabinetScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "cabinet",
      "Cabinet",
      "Cabinet gives agents durable project memory. Agent Analytics supplies the visitor and conversion data that a Cabinet analyst can write back into that memory after shipping.",
      ["a Cabinet-backed builder or agent ships a page, docs change, campaign, or onboarding update", "the website, docs, landing page, signup flow, or app surface reports visits, sources, signup, activation, purchase, or retention events to Agent Analytics", "a Cabinet analyst fetches the Agent Analytics data and explains the outcome", "the analyst writes the finding and next action back into the workspace"],
      "Report events from the project surface Cabinet agents are improving, then use Cabinet's markdown memory for recurring outcome reports.",
      "Cabinet-managed page, traffic source, signup, activation event, or shipped change",
      cabinetScreenshots,
      [
        {
          label: "Agent Analytics Cabinet article",
          href: "https://blog.agentanalytics.sh/blog/cabinet-teams-need-end-user-analytics"
        }
      ]
    )
  },
  {
    slug: "dify", installMethod: "mcp",
    rank: 9,
    title: "Dify",
    githubRepo: "langgenius/dify",
    accent: "blue",
    mark: {
      kind: "image",
      src: "/logos/dify.svg",
      label: "Dify logo"
    },
    summary:
      "An agentic workflow builder combining workflows, chatflows, apps, and knowledge systems in one product surface.",
    note: "Combines orchestration features with app-building and knowledge tools.",
    overview: [
      "Dify is an agentic workflow builder that combines workflows, chatflows, apps, and knowledge systems.",
      "It belongs in Open Orchestrators because it pairs visual app-building with orchestration features that help teams ship agentic experiences."
    ],
    bestFor: ["Agentic apps", "Chatflows and workflows", "Knowledge-connected product experiences"],
    tags: ["visual builder", "workflow", "knowledge integration"],
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
        label: "GitHub",
        href: "https://github.com/langgenius/dify"
      }
    ],
    screenshots: difyScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "dify",
      "Dify",
      "Dify builders publish apps, chatflows, demos, docs, and product journeys. Agent Analytics gives a follow-up agent the web and product-event data around those experiences.",
      ["a Dify app, chatflow, demo, or product journey is published", "the surrounding landing pages, docs, campaigns, search entry points, and product entry points report events to Agent Analytics", "a builder or agent fetches visits, sources, signup, demo request, activation, first value, and retention data", "the builder decides which project surface deserves iteration"],
      "Report events from the public pages and product surfaces around Dify experiences so analytics covers the journey before and after users engage with the app or chatflow.",
      "Dify app, chatflow, page, signup, demo request, activation event, or product journey",
      difyScreenshots
    )
  },
  {
    slug: "flowise", installMethod: "api-only",
    rank: 10,
    title: "Flowise",
    githubRepo: "FlowiseAI/Flowise",
    accent: "mint",
    mark: {
      kind: "image",
      src: "/logos/flowise.png",
      label: "Flowise logo"
    },
    summary:
      "An open-source system for building AI agents visually, with emphasis on agent flows and orchestration through a builder interface.",
    note: "Presents orchestration through a visual builder rather than a code-first framework.",
    overview: [
      "Flowise is an open-source system for visually building AI agents and agent flows.",
      "It belongs in Open Orchestrators because it makes orchestration accessible through a builder interface rather than only code-first workflow definitions."
    ],
    bestFor: ["Visual agent flows", "Low-code agent builders", "Flow-to-action orchestration"],
    tags: ["visual builder", "agent flows", "open source"],
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
        label: "GitHub",
        href: "https://github.com/FlowiseAI/Flowise"
      }
    ],
    screenshots: flowiseScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "flowise",
      "Flowise",
      "Flowise builders can publish agent flows behind pages, demos, apps, and support paths. Agent Analytics lets a follow-up agent evaluate the conversion path around those flows.",
      ["a Flowise-powered page, demo, app, or support path reaches users", "the downstream web or product surface reports CTA, demo request, signup, purchase, and first-value events to Agent Analytics", "a builder or agent fetches the Agent Analytics data and finds the biggest conversion drop-off", "the builder compares project surfaces by conversion, not only successful flow execution"],
      "Report events from the pages and product paths around Flowise-powered experiences so builders can see which flows move users toward value.",
      "Flowise-powered page, CTA, signup, demo request, purchase, or first-value event",
      flowiseScreenshots
    )
  },
  {
    slug: "multica", installMethod: "cli-and-skill",
    rank: 11,
    title: "Multica",
    githubRepo: "multica-ai/multica",
    visibility: "not-open-important",
    accent: "cyan",
    mark: {
      kind: "image",
      src: "/logos/multica.svg",
      label: "Multica logo"
    },
    summary:
      "A source-available managed agents platform (Apache 2.0 plus hosted-use and branding conditions) where coding agents act like teammates, take assigned issues, execute autonomously, and reuse shared skills over time.",
    note: "Centers orchestration on issue boards, runtime daemons, and reusable skills for human-plus-agent teams.",
    overview: [
      "Multica is a source-available managed agents platform where coding agents act like teammates, take assigned issues, execute autonomously, and reuse shared skills.",
      "Its license is Apache 2.0 plus additional conditions: hosting Multica for third parties or embedding it in a commercial product needs a commercial license from Index Labs (Hong Kong) Limited, and the Multica logo, name, and attribution must be kept. That makes it source-available rather than OSI open source, so it is tracked with the not-open-important entries.",
      "It belongs in Open Orchestrators because it centers the operational layer around issue assignment, runtime visibility, and durable agent capability."
    ],
    bestFor: ["Managed coding agents", "Issue-to-agent assignment", "Reusable agent skills"],
    tags: ["managed agents", "issue tracking", "skills", "runtime dashboard"],
    links: [
      {
        label: "Website",
        href: "https://multica.ai/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/multica-ai/multica"
      }
    ],
    screenshots: multicaScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "multica",
      "Multica",
      "Multica assigns issues to managed coding agents. Agent Analytics gives the follow-up agent data on whether the shipped issue improved the surface users actually touch.",
      ["an issue for a website, docs flow, onboarding path, or app surface is assigned to an agent", "the agent ships and deploys the change", "the changed surface reports visits, sources, signup, activation, retention, or funnel movement to Agent Analytics", "a managed agent fetches the outcome report and closes the loop back to the board"],
      "Use Agent Analytics after Multica agents ship user-facing work so completed issues can be judged by reported web and product outcomes.",
      "Multica-built page, traffic source, signup, activation event, retention change, or shipped issue",
      multicaScreenshots
    )
  },
  {
    slug: "orca", installMethod: "cli-and-skill",
    rank: 12,
    title: "Orca",
    githubRepo: "stablyai/orca",
    accent: "amber",
    mark: {
      kind: "image",
      src: "/logos/orca.svg",
      label: "Orca logo",
      surface: "dark"
    },
    summary:
      "A worktree-based IDE for AI coding agents that runs Claude Code, Codex, OpenCode, and other agents side by side across isolated git branches.",
    note: "Centers orchestration on parallel coding agents, worktree isolation, and in-app review flow inside a desktop IDE.",
    overview: [
      "Orca is a worktree-based IDE for running Claude Code, Codex, OpenCode, and other coding agents side by side across isolated branches.",
      "It belongs in Open Orchestrators because it focuses on the operator control plane for parallel coding agents: worktrees, review, active-agent visibility, and branch isolation."
    ],
    bestFor: ["Parallel coding agents", "Worktree isolation", "In-app agent review"],
    tags: ["coding agents", "worktrees", "desktop IDE", "open source"],
    links: [
      {
        label: "Website",
        href: "https://www.onorca.dev/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/stablyai/orca"
      }
    ],
    screenshots: orcaScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "orca",
      "Orca",
      "Orca helps operators compare and merge parallel coding-agent branches. Agent Analytics lets a follow-up agent compare the user outcome after a selected branch ships.",
      ["multiple agents work in isolated branches on a project surface", "selected changes merge and deploy to the website, docs, app, or onboarding path", "the changed path reports visits, sources, signup, activation, funnels, retention, or experiment events to Agent Analytics", "a follow-up agent fetches the Agent Analytics comparison and the operator chooses what to keep improving"],
      "Use Agent Analytics after Orca-managed changes deploy, especially when several branches are competing to improve a user-facing path.",
      "Orca-built page, traffic source, signup, activation event, experiment, or shipped branch",
      orcaScreenshots
    )
  },
  {
    slug: "gastown", installMethod: "cli-and-skill",
    rank: 13,
    title: "Gas Town",
    githubRepo: "gastownhall/gastown",
    accent: "orange",
    mark: {
      kind: "monogram",
      value: "GT",
      label: "Gas Town monogram"
    },
    summary:
      "A multi-agent workspace manager for Claude Code, GitHub Copilot, Codex, Gemini, and other coding agents with persistent work tracking.",
    note:
      "Centers orchestration on git-backed work state, handoffs, and workspace-level coordination for coding agents.",
    overview: [
      "Gas Town is a multi-agent workspace manager for Claude Code, GitHub Copilot, Codex, Gemini, and other coding agents with persistent work tracking.",
      "It belongs in Open Orchestrators because it treats coding-agent work as persistent, coordinated workspace state rather than isolated terminal sessions."
    ],
    bestFor: ["Multi-agent coding workspaces", "Persistent work tracking", "Git-backed handoffs"],
    tags: ["coding agents", "workspace manager", "persistent work tracking", "git-backed"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/gastownhall/gastown",
        emphasis: "primary"
      }
    ],
    screenshots: gasTownScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "gastown",
      "Gas Town",
      "Gas Town keeps coding-agent work persistent and coordinated. Agent Analytics gives the next handoff real visitor and conversion data after tracked work ships.",
      ["agents coordinate and complete tracked project work", "the change ships to the website, docs, app, onboarding flow, or support surface", "the changed surface reports visits, sources, signup, activation, retention, or funnel movement to Agent Analytics", "the next agent fetches the outcome and turns it into a handoff or follow-up task"],
      "Use Agent Analytics after Gas Town agents finish user-facing project work so handoffs include reported usage, not only task status.",
      "Gas Town-built page, traffic source, signup, activation event, funnel movement, or shipped task",
      gasTownScreenshots
    )
  },
  {
    slug: "swarmclaw", installMethod: "mcp",
    rank: 14,
    title: "SwarmClaw",
    githubRepo: "swarmclawai/swarmclaw",
    accent: "emerald",
    mark: {
      kind: "image",
      src: "/logos/swarmclaw.png",
      label: "SwarmClaw logo"
    },
    summary:
      "A self-hosted multi-agent AI runtime and control plane for autonomous agents, delegated work, schedules, provider management, MCP support, and chat-platform connectors.",
    note:
      "Centers orchestration on a self-hosted runtime where agents can delegate work, manage providers, use connectors, run scheduled tasks, and operate OpenClaw and Hermes Agent swarms.",
    overview: [
      "SwarmClaw is a self-hosted multi-agent AI runtime and control plane for running autonomous agents, delegating work, managing providers, scheduling tasks, connecting agents to chat platforms, and supporting MCP-based integrations.",
      "It belongs in Open Orchestrators because its public surfaces describe delegation, memory, schedules, connectors, OpenClaw integration, provider management, and structured multi-agent work as core capabilities."
    ],
    bestFor: ["Self-hosted agent runtimes", "Delegated autonomous work", "Scheduled agent operations"],
    tags: ["agent runtime", "self-hosted", "delegation", "schedules"],
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
        label: "npm",
        href: "https://www.npmjs.com/package/@swarmclawai/swarmclaw"
      }
    ],
    screenshots: swarmClawScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "swarmclaw",
      "SwarmClaw",
      "SwarmClaw can run delegated and scheduled agent work. Agent Analytics gives scheduled SwarmClaw tasks the user-event data needed to pick the next improvement.",
      ["a SwarmClaw agent ships a page, docs update, onboarding change, connector guide, or install-flow improvement", "the changed surface reports visits, sources, install intent, setup starts, signups, provider connections, first projects, or equivalent activation events to Agent Analytics", "a scheduled SwarmClaw task fetches the Agent Analytics results", "the task reviews project usage and assigns the next improvement"],
      "Install Agent Analytics around the project surface SwarmClaw agents change first, then keep the activation event set small until the builder loop is working.",
      "SwarmClaw-built page, traffic source, install intent, setup path, signup, or activation event",
      swarmClawScreenshots
    )
  },
  {
    slug: "agno", installMethod: "api-only",
    rank: 16,
    title: "Agno",
    githubRepo: "agno-agi/agno",
    accent: "blue",
    mark: {
      kind: "image",
      src: "/logos/agno.png",
      label: "Agno logo"
    },
    summary:
      "An open-source runtime for building, running, governing, and monitoring agents, teams, workflows, and AgentOS services in production.",
    note:
      "Centers orchestration on production agent runtimes, teams, workflows, memory, guardrails, and AgentOS operations.",
    overview: [
      "Agno is an open-source runtime for building, running, governing, and monitoring agents, teams, workflows, and AgentOS services.",
      "It belongs in Open Orchestrators because it treats agents, teams, workflows, runtime serving, monitoring, approvals, and production control-plane concerns as connected parts of one agentic software system."
    ],
    bestFor: ["Production agent runtimes", "Agent teams and workflows", "AgentOS operations"],
    tags: ["agent runtime", "workflows", "teams", "production"],
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
        label: "GitHub",
        href: "https://github.com/agno-agi/agno"
      },
      {
        label: "PyPI",
        href: "https://pypi.org/project/agno/"
      }
    ],
    screenshots: agnoScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "agno",
      "Agno",
      "Agno systems can build and operate production agent workflows. Agent Analytics gives those workflows user-facing outcome data from the websites, apps, docs, demos, and support surfaces they affect.",
      ["an Agno-backed builder ships a docs update, onboarding change, product improvement, support surface, or web app change", "the changed surface reports visits, sources, signup, install intent, setup start, first run, report viewed, or task completed events to Agent Analytics", "an Agno workflow or builder fetches the Agent Analytics outcome data", "the workflow proposes the next improvement from user-facing results"],
      "Instrument the project surface that the Agno system affects. Agent Analytics reads the reported web or product events; it is not a replacement for Agno logs or traces.",
      "Agno-built page, traffic source, signup, install intent, first run, report viewed, or task completed event",
      agnoScreenshots
    )
  },
  {
    slug: "agent-office-suite", installMethod: "mcp",
    rank: 21,
    title: "Agent Office Suite",
    githubRepo: "manpoai/AgentOfficeSuite",
    accent: "sky",
    mark: {
      kind: "image",
      src: "/logos/agent-office-suite.png",
      label: "Agent Office Suite logo"
    },
    summary:
      "An Apache-2.0 office suite where AI agents collaborate with humans on docs, databases, slides, and flowcharts through MCP and comments.",
    note:
      "Centers orchestration on shared office artifacts: agents can be mentioned, receive contextual tasks, edit content, leave traceable changes, and work through MCP without replacing the user's existing agent.",
    overview: [
      "Agent Office Suite, also called AOSE, is an open-source self-hosted office suite for agent collaboration across documents, databases, presentations, and flowcharts.",
      "It belongs in Open Orchestrators because the product surface is a shared work layer for humans and agents: @mentions, contextual comments, MCP tools, agent registration, approvals, version history, and reversible agent edits.",
      "The public README documents Claude Code, Codex CLI, Gemini CLI, OpenClaw, and Zylos support, with `aose-main` for the local workspace and `aose-mcp` for agent connection."
    ],
    bestFor: ["Agent-collaborative office work", "Docs, tables, slides, and flowcharts", "Traceable agent edits"],
    tags: ["office suite", "MCP", "documents", "agent collaboration"],
    links: [
      {
        label: "Website",
        href: "https://www.agentofficesuite.com/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/manpoai/AgentOfficeSuite"
      },
      {
        label: "Manpo X",
        href: "https://x.com/manpoai"
      },
      {
        label: "Latest release",
        href: "https://github.com/manpoai/AgentOfficeSuite/releases/tag/v2.0.8"
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/aose-main"
      }
    ],
    screenshots: agentOfficeSuiteScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "agent-office-suite",
      "Agent Office Suite",
      "Agent Office Suite gives agents a place to co-create docs, tables, slides, and flowcharts with humans. Agent Analytics measures whether those agent-produced artifacts improve the websites, docs, onboarding flows, demos, or product surfaces they are meant to move.",
      ["an agent uses Agent Office Suite to create or update a document, table, slide deck, flowchart, launch note, support guide, onboarding plan, or product brief", "the related public surface reports visits, sources, signup, install intent, setup start, task completion, report viewed, or conversion events to Agent Analytics", "the agent fetches Agent Analytics results after the artifact ships or is shared", "the next office artifact or product task is updated from measured user behavior"],
      "Instrument the project surface affected by the office artifact, not the editor itself. Agent Analytics reads the reported web or product events so the agent can connect planning work to outcome data.",
      "Agent Office Suite-authored doc, launch note, support guide, onboarding path, traffic source, signup, install intent, task completed, report viewed, or conversion event",
      agentOfficeSuiteScreenshots
    )
  },
  {
    slug: "mastra", installMethod: "api-only",
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
      "An open-source TypeScript framework for building agents, graph-based workflows, MCP servers, evals, observability, and production AI applications.",
    note:
      "Centers orchestration on TypeScript agents, explicit workflows, human-in-the-loop suspension, MCP, evals, and observability.",
    overview: [
      "Mastra is an open-source TypeScript framework for building agents, graph-based workflows, MCP servers, evals, observability, and production AI applications.",
      "It belongs in Open Orchestrators because it gives TypeScript teams structured primitives for agents, workflow state, branching, suspension and resume, and production application deployment."
    ],
    bestFor: ["TypeScript agent applications", "Graph-based workflows", "Human-in-the-loop workflow control"],
    tags: ["typescript", "agents", "workflows", "observability"],
    links: [
      {
        label: "Website",
        href: "https://mastra.ai/",
        emphasis: "primary"
      },
      {
        label: "Docs",
        href: "https://mastra.ai/docs"
      },
      {
        label: "GitHub",
        href: "https://github.com/mastra-ai/mastra"
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@mastra/core"
      }
    ],
    screenshots: mastraScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "mastra",
      "Mastra",
      "Mastra builders ship TypeScript agents and workflows into real apps, docs, demos, onboarding, and support surfaces. Agent Analytics gives those workflows user-facing outcome data after the change lands.",
      ["a Mastra-backed builder changes a page, docs flow, onboarding path, app surface, demo, or support surface", "the changed surface reports visits, sources, signup, install intent, setup start, first workflow run, report viewed, or task completed events to Agent Analytics", "a Mastra workflow or builder fetches the Agent Analytics event data", "the workflow creates the next improvement task from user-facing results"],
      "Instrument the TypeScript app, docs, demo, or product surface where Mastra helps builders ship change. Agent Analytics reads the reported surface events; it is not a replacement for Mastra logs or traces.",
      "Mastra-built app, traffic source, signup, install intent, first workflow run, report viewed, or task completed event",
      mastraScreenshots
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
      "A local-first agent workspace and host layer for teams, with desktop and CLI runtimes, shareable setups, browser control, scheduled tasks, and remote operation.",
    note:
      "Centers orchestration on shareable agent setups: local or remote hosts, permissions, browser automation, scheduled prompts, and opencode-powered execution.",
    overview: [
      "OpenWork is a local-first, cloud-ready agent workspace for teams, built around a desktop app, a CLI host/orchestrator, shareable skills and configs, and optional remote or cloud workers.",
      "The public repo and docs describe sessions, live streaming, permission handling, skills, MCP, plugins, browser control, scheduled automations, self-hosting, and team distribution through shared workspaces and skill hubs. The LICENSE file keeps most of the repo under MIT while reserving the /ee directory under a Fair Source license.",
      "It belongs in Open Orchestrators because the product is not just a chat shell: it is an operating layer for running, sharing, and governing agent workflows across local machines, remote hosts, and team environments."
    ],
    bestFor: ["Sharing agent setups across a team", "Local-first agent work with remote hosts", "Browser automation and scheduled workflows"],
    tags: ["local-first", "desktop", "CLI host", "browser automation", "MCP"],
    links: [
      {
        label: "Website",
        href: "https://openworklabs.com/",
        emphasis: "primary"
      },
      {
        label: "Docs",
        href: "https://openworklabs.com/docs/start-here/get-started"
      },
      {
        label: "GitHub",
        href: "https://github.com/different-ai/openwork"
      },
      {
        label: "OpenWork Orchestrator npm",
        href: "https://www.npmjs.com/package/openwork-orchestrator"
      }
    ],
    screenshots: openWorkScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "openwork",
      "OpenWork",
      "OpenWork teams can share repeatable agent setups for browser tasks, outreach, reporting, and internal workflows. Agent Analytics measures whether the customer-facing pages, product paths, and docs those workflows change actually move users.",
      ["a builder or operator uses OpenWork to run or share a browser task, scheduled workflow, onboarding change, docs update, or product experiment", "the affected website, docs path, signup flow, or app surface reports visits, sources, CTA clicks, signup, activation, retention, or task-completion events to Agent Analytics", "an OpenWork session or follow-up agent fetches the Agent Analytics results after the workflow ships", "the team updates the shared OpenWork setup from measured user behavior instead of only internal task output"],
      "OpenWork already exposes this in the Skills UI. In OpenWork, open `Skills`, find `Install from OpenPackage`, paste `gh@agent-analytics/skills`, and click `Install`. That installs the Agent Analytics package into the current workspace; if the list does not update immediately, click `Refresh` and confirm the new skills appear under `Installed skills`. The current package installs both `agent-analytics` and `agent-analytics-autoresearch`. If you prefer OpenWork's share-link flow instead of the package installer, their `Importing an existing skill with a share URL` guide is still the fallback path.",
      "OpenWork-managed page, docs path, traffic source, CTA click, signup, activation event, retention signal, or workflow outcome",
      openWorkScreenshots,
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
      "A TypeScript library and CLI for orchestrating AI coding agents in isolated sandbox environments with branch strategies, hooks, logs, templates, and merge-back workflows.",
    note:
      "Centers orchestration on programmatic sandboxed coding-agent runs: invoke an agent with `sandcastle.run()`, run it in Docker, Podman, Vercel, Daytona, or a custom provider, and bring the resulting commits back through a branch strategy.",
    overview: [
      "Sandcastle is an MIT-licensed TypeScript library and CLI for orchestrating AI coding agents in isolated sandboxes. The README frames the core loop as: invoke agents with `sandcastle.run()`, sandbox the agent with a configurable branch strategy, then merge the commits made on the branch back into the host repo.",
      "It belongs in Open Orchestrators because it provides a programmable control layer around coding agents: sandbox providers, worktrees, branch strategies, host and sandbox hooks, prompt templates, dynamic context commands, logging, review-pipeline templates, and support for providers such as Claude Code, Codex, and OpenCode."
    ],
    bestFor: ["Programmatic coding-agent orchestration", "Sandboxed agent execution", "Review pipelines and merge-back automation"],
    tags: ["typescript", "coding agents", "sandboxes", "worktrees", "MIT"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mattpocock/sandcastle",
        emphasis: "primary"
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/@ai-hero/sandcastle"
      },
      {
        label: "Latest release",
        href: "https://github.com/mattpocock/sandcastle/releases/tag/v0.5.5"
      }
    ],
    screenshots: sandcastleScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "sandcastle",
      "Sandcastle",
      "Sandcastle can run coding agents in isolated sandboxes and merge their commits back into a project. Agent Analytics measures whether the shipped change improved the user-facing surface after that agent work lands.",
      ["a Sandcastle run asks Claude Code, Codex, OpenCode, or another coding agent to change a website, docs flow, onboarding path, app surface, demo, or experiment", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, or task-completion events to Agent Analytics", "a follow-up Sandcastle run or developer agent fetches Agent Analytics results after deployment", "the next sandboxed run is scoped from measured user outcomes instead of only code-level completion"],
      "Instrument the deployed surface affected by Sandcastle-managed commits. Agent Analytics reads product and web events after the branch ships; it does not replace Sandcastle logs, sandbox traces, branch state, or provider output.",
      "Sandcastle-managed page, docs path, traffic source, CTA click, signup, activation event, retention signal, or shipped experiment",
      sandcastleScreenshots
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
      "A workflow layer for OpenAI Codex CLI that adds stronger default sessions, reusable skills, native hooks, HUD/status surfaces, project guidance, and team-style execution commands.",
    note:
      "Centers orchestration on making Codex a repeatable agent runtime: `$deep-interview` for clarification, `$ralplan` for planning, `$team` for coordinated parallel execution, and `$ralph` for persistent completion loops.",
    overview: [
      "oh-my-codex, also called OMX, is an MIT-licensed workflow layer around OpenAI Codex CLI. It keeps Codex as the execution engine while adding prompts, skills, AGENTS.md scaffolding, native Codex hooks, HUD/status surfaces, logs, memory, plans, and local runtime state under `.omx/`.",
      "It belongs in Open Orchestrators because it turns a single Codex CLI install into a structured operating layer for agent work: clarify scope, approve plans, route work to persistent or parallel executors, preserve project guidance, and coordinate repeatable agent workflows from the terminal."
    ],
    bestFor: ["Codex CLI power users", "Repeatable agent workflows", "Team-style terminal execution"],
    tags: ["codex", "cli", "skills", "hooks", "multi-agent", "MIT"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Yeachan-Heo/oh-my-codex",
        emphasis: "primary"
      },
      {
        label: "Website",
        href: "https://yeachan-heo.github.io/oh-my-codex-website/"
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/oh-my-codex"
      }
    ],
    screenshots: ohMyCodexScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "oh-my-codex",
      "oh-my-codex",
      "oh-my-codex helps Codex users plan, route, and complete agent work through repeatable workflows. Agent Analytics measures whether the shipped website, docs, onboarding, or product changes from those workflows actually move users.",
      ["an OMX workflow uses `$deep-interview`, `$ralplan`, `$team`, or `$ralph` to plan and ship a website, docs, onboarding, product, demo, or growth change", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, or task-completion events to Agent Analytics", "a follow-up Codex or OMX session fetches Agent Analytics results after deployment", "the next OMX plan is scoped from measured user outcomes instead of only terminal/task completion"],
      "Install the Agent Analytics skill into the same Codex/OMX working environment and instrument the deployed surface affected by OMX-managed work. Agent Analytics reads product and web events after the change ships; it does not replace OMX plans, logs, hooks, HUD state, or Codex execution traces.",
      "OMX-managed page, docs path, traffic source, CTA click, signup, activation event, retention signal, or shipped experiment",
      ohMyCodexScreenshots
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
      "An open-source AI agent team workspace by NetMind.AI whose agents remember, collaborate, and use tools from day one.",
    note:
      "Centers orchestration on ready-to-run agent teams: memory-aware agents with persistent context, multi-agent collaboration between PM, developer, deployment, research, and custom agents, composable capabilities, and Matrix-based communication.",
    overview: [
      "NarraNexus is an open-source AI agent team workspace by NetMind.AI. It is not another framework for wiring agents together, but a team of agents that already remember, collaborate, and use tools from day one.",
      "It belongs in Open Orchestrators because it provides a complete multi-agent operating environment: agents with persistent memory across sessions, multi-agent collaboration, composable capabilities (Memory, Awareness, Chat, RAG, Jobs, Skills, Social Network, Matrix), MCP tool integrations, and cloud/macOS/local deployment options."
    ],
    bestFor: ["Ready-to-run agent teams", "Persistent multi-agent workspaces", "Agent collaboration with memory"],
    tags: ["multi-agent", "memory", "collaboration", "MCP", "open-source"],
    links: [
      {
        label: "Website",
        href: "https://github.com/NetMindAI-Open/NarraNexus",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/NetMindAI-Open/NarraNexus"
      },
      {
        label: "Portal",
        href: "https://www.narra.nexus/"
      }
    ],
    screenshots: narranexusScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "narranexus",
      "NarraNexus",
      "NarraNexus gives teams a ready-to-run agent workspace where agents collaborate with persistent memory. Agent Analytics measures whether the agent-driven changes move real users afterward.",
      ["a NarraNexus agent team collaborates on a website, docs, onboarding flow, product surface, or experiment", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, or task-completion events to Agent Analytics", "a NarraNexus agent fetches Agent Analytics results after the change ships", "the agent team updates its next task from measured user behavior"],
      "Instrument the project surface that NarraNexus agents affect. Agent Analytics reads the reported web or product events; it does not replace NarraNexus internal logs or traces.",
      "NarraNexus-managed page, docs path, traffic source, CTA click, signup, activation event, retention signal, or shipped experiment",
      narranexusScreenshots
    )
  },
  {
    slug: "fusion", installMethod: "cli-and-skill",
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
      "An open-source, multi-node agent orchestrator where a planning agent turns a plain-language task into a PROMPT.md plan, then runs plan, review, execute, and review gates for each task in an isolated git worktree, controllable from desktop, web, mobile, or the fn CLI.",
    note: "Centers orchestration on a kanban board with per-task worktrees, workflow approval gates, hierarchical missions, and any local or cloud model across a synced multi-node mesh.",
    overview: [
      "Fusion is an open-source, multi-node agent orchestrator that plans tasks into PROMPT.md specs and runs them through plan, review, execute, and review gates inside isolated git worktrees, controllable from desktop, web, mobile, or the fn CLI.",
      "It belongs in Open Orchestrators because it coordinates many agents and tasks as shared board state across a synced mesh of peer nodes, with hierarchical missions, inter-agent messaging, and per-project model lanes for local and cloud providers."
    ],
    bestFor: ["Parallel coding agents", "Worktree isolation", "Hierarchical missions and planning"],
    tags: ["coding agents", "worktree isolation", "missions", "multi-node mesh", "open source"],
    links: [
      {
        label: "Website",
        href: "https://runfusion.ai/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/Runfusion/Fusion"
      }
    ],
    screenshots: fusionScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "fusion",
      "Fusion",
      "Fusion ships tasks autonomously through worktree-isolated workflow gates. Agent Analytics gives the next agent real visitor and conversion data after a merged task reaches a user-facing surface.",
      ["a task is planned, executed, and reviewed through Fusion's workflow gates in an isolated worktree", "the merged change ships to the website, docs, app, onboarding flow, or support surface", "the changed surface reports visits, sources, signup, activation, retention, or funnel movement to Agent Analytics", "a follow-up agent fetches the outcome report and turns it into the next task or mission"],
      "Use Agent Analytics after Fusion tasks ship user-facing work so completed tasks and missions are judged by reported web and product outcomes, not only board status.",
      "Fusion-built page, traffic source, signup, activation event, retention change, or shipped task",
      fusionScreenshots
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
      "An MIT-licensed lead/worker orchestration framework where a lead agent receives tasks from Slack, GitHub, GitLab, Linear, Jira, email, WhatsApp, or the API and delegates to worker agents running in isolated Docker environments with persistent memory and identity.",
    note:
      "Centers orchestration on a lead/worker swarm with persistent SOUL/IDENTITY identity, vector-searchable compounding memory, DAG workflows with human-in-the-loop gates, scheduled tasks, MCP servers, skills, and harness-agnostic execution across Claude Code, OpenAI Codex, pi-mono, Devin, Claude Managed Agents, and opencode.",
    overview: [
      "Agent Swarm is an MIT-licensed orchestration framework from Desplega Labs. A lead agent receives work from Slack, GitHub, GitLab, Linear, Jira, email, WhatsApp, or the HTTP API, breaks it down, and delegates to worker agents running in isolated Docker environments. Workers ship changes back as pull requests, Slack/email replies, or published pages.",
      "It belongs in Open Orchestrators because the swarm itself is the operating surface: workers share a vector-searchable memory and persistent identity files (SOUL.md, IDENTITY.md, CLAUDE.md), the workflow engine runs DAG-based automation with approval gates and structured I/O, scheduled cron-based tasks handle standing work, and skills plus per-agent MCP servers with scope cascade give agents reusable procedural knowledge.",
      "Public materials describe harness-agnostic execution across Claude Code, OpenAI Codex, pi-mono, Devin, Claude Managed Agents, and opencode, follow-up continuity that inherits bounded prior-task context even on providers without native session resume, DB-backed pages with public / authed / password modes and version history, a Redis-like KV store with auto-scoped context per Slack thread or PR or Linear issue, and a real-time dashboard at app.agent-swarm.dev for monitoring agents, tasks, and inter-agent chat."
    ],
    bestFor: [
      "Lead/worker swarm orchestration",
      "Multi-channel inbound (Slack, GitHub, Linear, email, API)",
      "Persistent identity and compounding memory across sessions"
    ],
    tags: ["lead/worker", "swarm runtime", "Docker", "memory", "workflows", "MCP", "open source"],
    links: [
      {
        label: "Website",
        href: "https://agent-swarm.dev",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/desplega-ai/agent-swarm"
      },
      {
        label: "Docs",
        href: "https://docs.agent-swarm.dev"
      },
      {
        label: "Dashboard",
        href: "https://app.agent-swarm.dev"
      },
      {
        label: "Templates",
        href: "https://templates.agent-swarm.dev"
      },
      {
        label: "Discord",
        href: "https://discord.gg/KZgfyyDVZa"
      },
      {
        label: "Official X",
        href: "https://x.com/desplegalabs"
      }
    ],
    screenshots: agentSwarmScreenshots,
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
      agentSwarmScreenshots
    )
  },
  {
    slug: "agentlas-os", installMethod: "mcp",
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
      "An Apache-2.0 local-first agent operation environment that builds portable agent and team packages and runs them across supported coding hosts.",
    note:
      "Centers orchestration on portable package contracts, explicit roles, host-owned runtime selection, governed memory and policy boundaries, MCP/A2A interoperability, and verification receipts.",
    overview: [
      "Agentlas OS is an Apache-2.0 agent operation environment for building, storing, borrowing, and running specialist agents and multi-agent teams. Its public package contract carries roles, tools, memory boundaries, permissions, routing, and verification requirements rather than binding an agent to one model workspace.",
      "It belongs in Open Orchestrators because its core surface composes explicit agent roles into temporary task forces, validates exact runtime bundles, and executes them through supported hosts while keeping local project context, credentials, and permissions on the operator's machine."
    ],
    bestFor: [
      "Portable agent and team packages",
      "Cross-host coding-agent orchestration",
      "Local-first governed agent operations"
    ],
    tags: ["open source", "Apache-2.0", "agent OS", "multi-agent", "MCP", "A2A", "local-first"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/agentlas-ai/Agentlas-OS",
        emphasis: "primary"
      },
      {
        label: "Website",
        href: "https://agentlas.cloud/"
      },
      {
        label: "Releases",
        href: "https://github.com/agentlas-ai/Agentlas-OS/releases"
      }
    ],
    screenshots: agentlasOsScreenshots,
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
      agentlasOsScreenshots,
      [
        {
          label: "Agent Analytics skill repository",
          href: "https://github.com/Agent-Analytics/skills"
        }
      ]
    )
  },
  {
    slug: "agon", installMethod: "api-only",
    rank: 31,
    title: "Agon",
    githubRepo: "AutoResearch-Factory/Agon",
    accent: "violet",
    mark: { kind: "monogram", value: "Ag", label: "Agon monogram" },
    summary: "An autonomous research system that coordinates scientist, coder, and auditor loops from topic to idea, proposal, experiment, and paper.",
    note: "Centers orchestration on compact prompt loops, zero-code dispatch, independent critique, and human checkpoints for long-running scientific research.",
    overview: [
      "Agon is an autonomous research system for running scientific workflows from a topic through idea generation, proposal writing, experiment execution, and paper drafting.",
      "It belongs in Open Orchestrators because the repository is organized around multi-agent research loops rather than a single assistant: scientist, coder, and auditor roles are dispatched through reusable prompts, with critics used to break outputs before the workflow moves forward.",
      "The public repository includes setup instructions and agent, command, reference, and skill artifacts. The accompanying paper frames the design around Prompt Economy and zero-code orchestration."
    ],
    bestFor: ["Autonomous research loops", "Scientist-coder-auditor workflows", "Prompt-based orchestration"],
    tags: ["research agents", "multi-agent", "prompt loops", "scientific workflows"],
    links: [
      { label: "GitHub", href: "https://github.com/AutoResearch-Factory/Agon", emphasis: "primary" },
      { label: "Paper", href: "https://arxiv.org/abs/2606.24177" }
    ],
    screenshots: [],
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
    summary: "An open-source local and cloud agent IDE for running coding agents across isolated workspaces, shared sessions, and subagents.",
    note: "Centers orchestration on parallel workspaces, multi-agent collaboration, plugins, MCP bindings, and review flow across local and cloud environments.",
    overview: [
      "Proliferate is an open-source local and cloud agent IDE for running Claude Code, Codex, Gemini CLI, OpenCode, and related coding agents across isolated workspaces or shared sessions.",
      "It belongs in Open Orchestrators because the product surface is the operator workspace around agent work: parallel branches, subagents, plugin-mounted skills and MCP servers, review loops, and local or remote execution."
    ],
    bestFor: ["Parallel coding-agent workspaces", "Subagent workflows", "Plugin and MCP-bound agent sessions"],
    tags: ["coding agents", "workspaces", "subagents", "plugins", "open source"],
    links: [
      { label: "Website", href: "https://proliferate.com/", emphasis: "primary" },
      { label: "GitHub", href: "https://github.com/proliferate-ai/proliferate" },
      { label: "Docs", href: "https://proliferate.com/docs" }
    ],
    screenshots: proliferateScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "proliferate", "Proliferate",
      "Proliferate helps teams run and review parallel coding-agent work. Agent Analytics lets a follow-up agent measure what the shipped branch changed for real users.",
      ["a workspace ships a page, docs flow, onboarding path, app surface, or product change", "the deployed surface reports visits, sources, signup, activation, retention, funnel, or experiment events to Agent Analytics", "a follow-up agent fetches the last period and compares it with the prior period", "the team decides what to merge, iterate, or automate next from measured user outcomes"],
      "Use Agent Analytics after Proliferate-managed work lands so the next agent can judge branches and follow-up tasks by user behavior, not only by code diff.",
      "page, traffic source, signup, activation event, funnel step, experiment, or shipped workspace", proliferateScreenshots
    )
  },
  {
    slug: "orkas", installMethod: "cli-and-skill",
    rank: 31,
    title: "Orkas",
    githubRepo: "Orkas-AI/Orkas",
    accent: "violet",
    mark: { kind: "image", src: "/logos/orkas.png", label: "Orkas logo", surface: "dark" },
    summary: "An MIT-licensed, local-first multi-agent desktop application where a Commander coordinates specialist agents across research, coding, data, documents, and media.",
    note: "Centers orchestration on one desktop conversation, shared plans, parallel or sequential dispatch, visibility-scoped context, local storage, and per-agent memory and skill evolution.",
    overview: [
      "Orkas is an open-source, local-first AI workforce for macOS, Windows, and Linux. A Commander decomposes goals and coordinates specialist agents for research, coding, data analysis, documents, video, and slides from one desktop conversation.",
      "It belongs in Open Orchestrators because multi-agent coordination is the product surface: structured dispatch, shared plans, parallel or sequential execution, visibility-scoped context, local files and model keys, and per-agent private memory and skills.",
      "The repository is MIT-licensed and supports bring-your-own model keys, local model endpoints, and external CLI coding agents including Claude Code, Codex, OpenCode, and Cline."
    ],
    bestFor: ["Local multi-agent knowledge work", "One-chat coordination across specialist agents", "Private memory, skills, files, and model keys"],
    tags: ["multi-agent", "local-first", "desktop", "agent memory", "open source"],
    links: [
      { label: "Website", href: "https://orkas.ai/?source=open-orchestrators", emphasis: "primary" },
      { label: "GitHub", href: "https://github.com/Orkas-AI/Orkas" },
      { label: "Releases", href: "https://github.com/Orkas-AI/Orkas/releases" }
    ],
    screenshots: orkasScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "orkas", "Orkas",
      "Orkas coordinates specialist agents across research, coding, data, documents, and media. Agent Analytics gives those agents user-facing outcome data after an Orkas-built change ships.",
      ["a user asks Orkas to research, plan, build, or revise a website, docs path, onboarding flow, app surface, or growth experiment", "the Commander dispatches specialist agents and the finished change ships", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, funnels, and experiment events to Agent Analytics", "a later Orkas task reads those outcomes and chooses the next improvement from measured user behavior"],
      "Install Agent Analytics on the user-facing surface Orkas agents change. Agent Analytics measures outcomes after deployment; it does not replace Orkas conversations, plans, local files, private agent memory, or execution logs.",
      "Orkas-built page, traffic source, CTA click, signup, activation event, funnel step, retention signal, or shipped experiment", orkasScreenshots
    )
  },
  {
    slug: "fractal", installMethod: "cli-and-skill",
    rank: 31,
    title: "fractal",
    githubRepo: "plasma-ai/fractal",
    accent: "emerald",
    mark: { kind: "monogram", value: "FR", label: "fractal monogram" },
    summary: "An Apache-2.0 CLI and terminal UI for hierarchical loops of coding agents, with recursive delegation across separate git worktrees.",
    note: "Centers orchestration on recursive agent trees, per-node worktrees, multiple coding-agent backends, and hard caps on iterations, depth, children, cost, and time.",
    overview: [
      "fractal is an Apache-2.0 orchestrator for autonomous coding-agent loops. Each node works toward a goal in its own git worktree and can spawn child nodes for separable subtasks, so the execution tree grows with the problem.",
      "It belongs in Open Orchestrators because delegation and bounded execution are the core behavior: operators set caps on iterations, depth, children, cost, and time; steer or stop nodes; and inspect runs, messages, costs, and state in a live terminal UI backed by local SQLite.",
      "The CLI supports Claude Code, Codex, Grok Build, OpenCode, and Oh My Pi as per-node agent backends."
    ],
    bestFor: ["Hierarchical coding-agent delegation", "Recursive worktree-based execution", "Bounded autonomous agent loops"],
    tags: ["coding agents", "hierarchical orchestration", "worktrees", "terminal UI", "Apache-2.0"],
    links: [
      { label: "GitHub", href: "https://github.com/plasma-ai/fractal", emphasis: "primary" },
      { label: "Documentation", href: "https://docs.plasma.ai/fractal" },
      { label: "PyPI", href: "https://pypi.org/project/plasma-fractal/" }
    ],
    screenshots: fractalScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "fractal", "fractal",
      "fractal delegates coding work across a recursive tree of bounded agent loops. Agent Analytics reports user behavior on the deployed surfaces those runs change.",
      ["a fractal root node plans a website, docs, onboarding, app, or product change and delegates separable work to child nodes", "the completed changes are reviewed, merged, and deployed to the user-facing surface", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, funnels, and experiment events to Agent Analytics", "the operator uses those outcomes to scope the next bounded fractal run"],
      "Install Agent Analytics on the deployed surfaces fractal agents change. Agent Analytics measures user behavior after deployment; it does not replace fractal's local run state, message history, cost tracking, or terminal monitoring.",
      "fractal-managed page, docs path, traffic source, CTA click, signup, activation event, funnel step, experiment, or shipped change", fractalScreenshots
    )
  },
  {
    slug: "tempest", installMethod: "cli-and-skill",
    rank: 32,
    title: "Tempest",
    githubRepo: "tempestai-dev/tempest",
    accent: "violet",
    mark: { kind: "monogram", value: "Tm", label: "Tempest monogram" },
    summary: "An Apache-2.0 Tauri-based ADE (Agentic Development Environment) that runs CLI coding agents with 64% fewer tokens via an embedded xterm.js terminal.",
    note: "Centers orchestration on token intelligence, isolated DB branches per session, and multi-agent session management inside a native desktop environment.",
    overview: [
      "Tempest is a Tauri-based desktop ADE for running CLI coding agents such as Claude Code with dramatically reduced token usage. Its embedded xterm.js terminal gives agents a real shell surface while token intelligence trims context overhead by 64%.",
      "It belongs in Open Orchestrators because it frames coding-agent work as a first-class native desktop operating surface: isolated database branches per agent session, multi-agent session management, and a custom frameless window built specifically for agentic engineering workflows."
    ],
    bestFor: ["Token-efficient CLI agent sessions", "Isolated DB branches per agent", "Native desktop ADE for coding agents"],
    tags: ["ADE", "coding agents", "token intelligence", "Tauri", "xterm.js", "Apache-2.0"],
    links: [{ label: "GitHub", href: "https://github.com/tempestai-dev/tempest", emphasis: "primary" }],
    screenshots: tempestScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "tempest", "Tempest",
      "Tempest runs coding agents with fewer tokens and isolated workspaces. Agent Analytics gives those agents user-facing outcome data after a Tempest-built change ships.",
      ["a builder uses Tempest to run a coding agent session and ship a page, docs update, onboarding change, or product surface", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, funnels, and experiment events to Agent Analytics", "a follow-up Tempest agent session fetches the Agent Analytics results and compares the shipped path with the prior period", "the builder decides what to improve next from user behavior, closing the agentic development loop"],
      "Install Agent Analytics on the project surface Tempest agents help ship. The token intelligence and DB isolation features are orthogonal to analytics; Agent Analytics measures user-facing outcomes after the change lands.",
      "Tempest-built page, traffic source, CTA click, signup, activation event, funnel step, experiment, or shipped agent session", tempestScreenshots
    )
  },
  {
    slug: "crewplane", installMethod: "cli-and-skill",
    rank: 31,
    title: "Crewplane",
    githubRepo: "crewplaneai/crewplane",
    accent: "cyan",
    mark: { kind: "image", src: "/logos/crewPlane.png", label: "Crewplane logo" },
    summary: "A CLI-first control plane for reviewable, repeatable, and resumable coding-agent workflows in Markdown, with explicit artifact handoffs across Claude Code, Codex, Gemini CLI, Copilot CLI, and other configured commands.",
    note: "Centers orchestration on explicit DAGs, artifact-backed handoffs, bounded review loops, and resumption from validated completed nodes while provider CLIs retain their own tools, permissions, and authentication.",
    overview: [
      "Crewplane is an Apache-2.0 command-line control plane for agent work that has grown beyond a single prompt. Workflows live beside the project as Markdown files: YAML front matter defines nodes and dependencies, and matching sections contain prompts for provider-backed nodes, so teams can version and review the process before it runs.",
      "Preflight validates the composed DAG before execution. Ready nodes can run concurrently; a parallel node can fan out one prompt across providers, while a sequential node can run one executor or a bounded executor/reviewer remediation loop. Saved outputs and optional structured findings artifacts can move downstream through explicit references.",
      "New projects default to deterministic mock execution, letting users validate orchestration and inspect normal run records without provider credentials, model calls, or token spend.",
      "Crewplane invokes configured provider CLIs directly and stores compiled preflight artifacts, outputs, logs, manifests, and consolidated results under the project-local .crewplane/ directory. With the filesystem backend, it can reuse a same-signature successful result or start a new run from validated completed nodes in a failed or cancelled attempt."
    ],
    bestFor: ["Version-controlled agent workflows", "Cross-provider handoffs and review loops", "Resumable, inspectable local runs"],
    tags: ["coding agents", "CLI-first", "Markdown workflows", "DAG orchestration", "resumable runs", "Apache-2.0"],
    links: [
      { label: "GitHub", href: "https://github.com/crewplaneai/crewplane", emphasis: "primary" },
      { label: "Docs", href: "https://github.com/crewplaneai/crewplane/blob/master/docs/index.md" },
      { label: "Installation", href: "https://github.com/crewplaneai/crewplane/blob/master/docs/getting-started/installation.md" }
    ],
    screenshots: crewplaneScreenshots,
    agentAnalytics: {
      heading: "Measure outcomes from Crewplane-orchestrated work",
      valueProp: "Crewplane records how an agent workflow ran. Agent Analytics can add post-deployment behavior data when the changed surface is separately instrumented and a selected provider is separately configured to access Agent Analytics.",
      measurementLoop: ["a Crewplane workflow uses configured provider CLIs to produce or review a user-facing change", "after deployment, the changed surface is separately instrumented with Agent Analytics to report page views and explicitly configured product events", "an optional later parallel or sequential node asks a provider that already has Agent Analytics access to query those results, and Crewplane records the provider response as ordinary node output", "the team reviews that output and decides what, if anything, to change in a later workflow"],
      setupNotes: "Crewplane has no native Agent Analytics integration or special analytics node. Configure tracking and Agent Analytics authentication separately, then make the Agent Analytics skill, MCP tools, CLI, or API available in the selected provider CLI's own environment. Crewplane invokes that provider and records its response; it does not install Agent Analytics, instrument the deployed surface, or interpret the analytics. Use a changed workflow input or --force when a fresh time-window query must bypass same-signature result reuse.",
      prompt: "Use Agent Analytics for this measurement only if access has already been separately configured and authenticated and tracking is installed on the deployed surface. If not, explain what is missing; do not imply that Crewplane provides the integration. Fetch the last 7 days and compare them with the prior 7 days. Report observed changes in page views, CTA clicks, signup starts, completed signups, activation events, and experiment exposures. Identify drop-offs and associations without claiming that Crewplane or a single change caused them. Return the analysis as this node's normal output.",
      ctaLabel: "Track builder outcomes",
      ctaHref: agentAnalyticsSignupHref("crewplane"),
      screenshots: crewplaneScreenshots,
      relatedLinks: [{ label: "Agent Analytics access options", href: "https://docs.agentanalytics.sh/reference/cli-mcp-api/" }]
    }
  },
  {
    slug: "graphcode", installMethod: "cli-and-skill", rank: 31, title: "GraphCode", githubRepo: "scgopi/GraphCode", accent: "mint",
    mark: { kind: "monogram", value: "Gc", label: "GraphCode logo" },
    summary: "A native macOS workspace that arranges coding-agent sessions into a graph, where every node is a live terminal and edges fire hand-offs, messages, and spawns without a person present.",
    note: "Centers orchestration on the graph itself rather than a board or a queue: a goal-based loop ends when its shell predicate exits 0, and that exit is what fires the outgoing edges to the next sessions.",
    overview: ["GraphCode is a native macOS app that runs each coding-agent session as a node on a canvas. Nodes are real terminals backed by libghostty and a zmx multiplexer, so a session can be opened, watched, and corrected mid-run instead of only inspected after it finishes.", "It belongs in Parallel Coding-Agent Runners because coordination is expressed as typed edges between sessions: hand-off, message, and spawn edges fire unattended, loops can be goal-based (run until a shell command exits 0), and a local daemon keeps sessions alive across app restarts. Claude Code is the most complete backend, with Codex and Copilot CLI also supported."],
    bestFor: ["Graph-structured agent hand-offs", "Long-running unattended loops", "Live terminal sessions you can steer mid-run"],
    tags: ["macos", "coding agents", "graph orchestration", "terminals", "FSL-1.1-MIT"],
    links: [{ label: "GitHub", href: "https://github.com/scgopi/GraphCode", emphasis: "primary" }, { label: "Website", href: "https://graphcode.app/" }, { label: "Releases", href: "https://github.com/scgopi/GraphCode/releases" }],
    screenshots: graphcodeScreenshots,
    agentAnalytics: agentAnalyticsSection("graphcode", "GraphCode", "GraphCode can run a graph of coding-agent sessions that ship changes to a product surface unattended. Agent Analytics measures whether the work those edges triggered actually improved the user-facing result.", ["a GraphCode loop asks Claude Code, Codex, or Copilot CLI to change a website, docs path, onboarding flow, app surface, or experiment", "the changed surface reports visits, sources, CTA clicks, signup, activation, retention, or task-completion events to Agent Analytics", "a hand-off or message edge fires a follow-up loop that fetches Agent Analytics results after the change ships", "the next goal-based loop is scoped from measured user outcomes rather than from a shell predicate alone"], "Instrument the deployed surface that GraphCode loops change. Agent Analytics reads product and web events after the work lands; it does not replace GraphCode's session transcripts, dial log, graph state, or agent output.", "GraphCode-managed page, docs path, traffic source, CTA click, signup, activation event, retention signal, or shipped experiment", graphcodeScreenshots)
  },
  {
    slug: "agentgrid", installMethod: "cli-and-skill", rank: 31, title: "AgentGrid", visibility: "not-open-important", accent: "cyan",
    mark: { kind: "monogram", value: "AG", label: "AgentGrid monogram" },
    summary: "A commercial desktop workspace for orchestrating Claude Code, Codex, and other coding agents on a persistent visual canvas.",
    note: "Not open-source; combines visible master/worker delegation, follow-up messages, session recovery, terminals, browsers, and notes in one project workspace.",
    overview: ["AgentGrid runs on macOS, Windows, and Linux and lets builders use supported coding harnesses side by side with their existing provider subscriptions.", "Its public orchestration guide documents role-based workers, model selection, waiting for results, reading worker output, sending follow-ups to existing sessions, and recovering teams after restart."],
    bestFor: ["Mixed-harness coding teams", "Visible worker conversations", "Persistent project workspaces"],
    tags: ["not open", "coding agents", "visual canvas", "delegation", "session recovery"],
    links: [{ label: "Website", href: "https://agentgrid.sh/", emphasis: "primary" }, { label: "Orchestration docs", href: "https://agentgrid.sh/docs/guides/orchestrating-agents" }, { label: "Download", href: "https://agentgrid.sh/download" }],
    screenshots: agentGridScreenshots,
    agentAnalytics: agentAnalyticsSection("agentgrid", "AgentGrid", "For a separately instrumented project, outcome data can inform the next task assigned to an AgentGrid worker.", ["a builder delegates a website or product change to a worker", "the reviewed change is deployed to the instrumented project", "a follow-up task reads the configured analytics and checks the observation window", "the builder uses the measured result to choose the next change"], "This is an optional measurement workflow for projects built with AgentGrid, not a built-in AgentGrid integration or a claim that its sessions report to Agent Analytics. Configure and verify the project's analytics separately.", "page visit, traffic source, signup, activation event, or funnel step", agentGridScreenshots)
  },
  {
    slug: "looptroop", installMethod: "cli-and-skill", rank: 31, title: "LoopTroop", githubRepo: "looptroop-ai/LoopTroop", accent: "emerald",
    mark: { kind: "monogram", value: "LT", label: "LoopTroop logo" },
    summary: "A local GUI orchestrator for repository-scale coding tickets that separates multi-model planning, atomic task execution in isolated OpenCode worktrees, and human review gates.",
    note: "Centers orchestration on phased ticket lifecycles: multi-LLM councils deliberate on specifications, tasks decompose into atomic units, and agents execute in isolated worktrees with fresh-context recovery loops.",
    overview: ["LoopTroop is an open-source desktop orchestrator for multi-stage software tasks. Instead of running a single conversational session where prompt context degrades, LoopTroop splits work into distinct phases: human problem scoping, multi-model council consensus, and atomic milestone units termed beads.", "It belongs in Parallel Coding-Agent Runners because each milestone executes inside an isolated OpenCode git worktree with dedicated verification commands and automated retry loops. Developers review progress through visual diffs, approve plan transitions, and inspect execution logs before code merges back into the primary branch."],
    bestFor: ["Multi-model council planning", "Worktree-isolated agent execution", "Phased coding ticket delivery"],
    tags: ["local GUI", "coding agents", "git worktrees", "multi-model council", "MIT"],
    links: [{ label: "Website", href: "https://www.looptroop.ovh/", emphasis: "primary" }, { label: "GitHub", href: "https://github.com/looptroop-ai/LoopTroop" }, { label: "Docs", href: "https://www.looptroop.ovh/docs/" }],
    screenshots: looptroopScreenshots,
    agentAnalytics: agentAnalyticsSection("looptroop", "LoopTroop", "LoopTroop executes structured coding tickets across isolated worktrees. Agent Analytics helps teams verify whether the shipped changes improved user activation, traffic retention, and feature engagement.", ["a developer uses LoopTroop to plan, implement, and merge a feature or bug fix in an isolated worktree", "the updated product surface sends page view, signup, activation, and conversion events to Agent Analytics", "a subsequent agent workflow queries Agent Analytics to compare user metrics from the new release against the previous baseline", "the developer and LLM council use the observed metrics to plan the next set of milestone beads"], "Deploy Agent Analytics to the user-facing application built with LoopTroop. The tracking loop measures production behavior after pull requests land; it operates alongside LoopTroop's local worktree transcripts and verification tests.", "LoopTroop-delivered feature, conversion pathway, traffic source, onboarding milestone, or retention event", looptroopScreenshots)
  },
  {
    slug: "ordewell", installMethod: "cli-and-skill", rank: 31, title: "Ordewell", githubRepo: "ordewell/ordewell", accent: "emerald",
    mark: { kind: "monogram", value: "Or", label: "Ordewell monogram" },
    summary: "An Apache-2.0 terminal CLI and TUI that turns one goal into an ordered, editable plan of coding-agent tasks, each pinned to its own runner, model, mode, and effort, where a task counts as done only when its own completion marker appears in that runner's output.",
    note: "Centers orchestration on a dependency graph of named tasks: independent nodes run concurrently on whichever harness the operator assigns, the plan stays editable while tasks are in flight, and every completion verdict is read from the runner's own output rather than from a summary written by an agent.",
    overview: ["Ordewell is an Apache-2.0 command-line tool and terminal UI for coding-agent work that starts from a goal instead of a prompt. A planner session that is refused edit commands inspects the repository and returns a structured plan of tasks with explicit dependencies, each pinned to a runner, model, mode, and effort level, and the operator can edit, retarget, reorder, or remove tasks before anything executes.", "It belongs in Parallel Coding-Agent Runners because the plan, not a chat session, is what the runtime schedules: once a task's dependencies are satisfied it runs alongside its siblings on the harness the operator assigned to it, so Claude Code, Codex, and OpenCode can each carry different parts of one goal. Each task decides it is finished by emitting its own unique completion marker into its runner output, which is what the graph records as the verdict. Tasks share the repository working tree, so the plan separates them by dependency and file scope rather than by a checkout per task."],
    bestFor: ["Goal to plan to tasks runs", "Per-task runner, model, mode, and effort", "Completion markers instead of claimed success"],
    tags: ["coding agents", "terminal UI", "dependency graph", "parallel execution", "Apache-2.0"],
    links: [{ label: "GitHub", href: "https://github.com/ordewell/ordewell", emphasis: "primary" }, { label: "Website", href: "https://ordewell.ai/" }],
    screenshots: ordewellScreenshots,
    agentAnalytics: agentAnalyticsSection("ordewell", "Ordewell", "Ordewell plans a goal into ordered tasks and runs each one on the harness the operator assigns. Agent Analytics supplies measured user behavior on the surfaces those runs change.", ["a goal is planned into tasks that build or revise a site, docs path, onboarding flow, or app surface", "the reviewed changes are merged and deployed", "the deployed surface reports visits, sources, CTA clicks, signup, activation, and funnel events to Agent Analytics", "a later plan, or the operator, reads those outcomes and scopes the next set of tasks from measured user behavior"], "Point Agent Analytics at the deployed surface Ordewell tasks change. Agent Analytics measures events on the deployed surface after deployment; it does not replace Ordewell's plan graph, task output, or completion markers.", "page, traffic source, CTA click, signup, activation event, funnel step, or shipped task", ordewellScreenshots)
  },
  {
    slug: "raven", installMethod: "mcp", rank: 31, title: "Raven", githubRepo: "EverMind-AI/Raven", accent: "blue",
    mark: { kind: "monogram", value: "Rv", label: "Raven monogram" },
    summary: "An Apache-2.0 host agent that plans complex tasks as DAGs and orchestrates built-in research, coding, design, and on-call agents plus third-party agents such as Claude Code, Codex, OpenClaw, and Hermes Agent over ACP, CLI, or OpenAI-compatible APIs.",
    note: "Centers orchestration on one host agent that generates a DAG for a complex task, coordinates specialized agents, manages task dependencies and parallel execution, and turns multi-step collaboration into reusable workflows.",
    overview: ["Raven is an Apache-2.0 host agent from EverMind that brings built-in and third-party agents together to carry out complex tasks. Its built-in agents are Raven-Research for autonomous deep research with structured reports and traceable sources, Raven-Code for agentic software development, debugging, refactoring, and data analysis, Raven-Design for slide decks, brand assets, charts, diagrams, and web interfaces, and Raven-Oncall for unattended workflow automation over hours or overnight.", "It belongs in Multi-Agent Platforms And Builders because orchestration is the product surface: Raven generates a DAG for a complex task, coordinates specialized agents, and manages task dependencies and parallel execution. Third-party agents connect over ACP, CLI, or OpenAI-compatible APIs, with presets for Claude Code, Codex, OpenCode, Hermes Agent, OpenClaw, MiroThinker, GitHub Copilot, Qwen Code, CodeBuddy, Qoder, Grok Build, Kimi Code, and Pi.", "Editors and hosts can launch Raven itself as an ACP server; it also serves A2A tasks over HTTP JSON-RPC and uses MCP for external tools and resources. EverOS memory preserves user context, agent experience, and world knowledge across sessions. Raven ships a WebUI, a terminal UI, and a Docker setup, and is pre-alpha, so interfaces may change."],
    bestFor: ["DAG-planned multi-agent tasks", "Mixing built-in and third-party agents", "Research, coding, design, and on-call work from one host agent"],
    tags: ["host agent", "DAG orchestration", "multi-agent", "ACP", "A2A", "Apache-2.0"],
    links: [{ label: "Website", href: "https://raven.evermind.ai", emphasis: "primary" }, { label: "GitHub", href: "https://github.com/EverMind-AI/Raven" }, { label: "Docs", href: "https://evermind-ai.github.io/Raven/" }],
    screenshots: [],
    agentAnalytics: agentAnalyticsSection("raven", "Raven", "Raven's built-in coding and design agents can build software changes and web interfaces as part of a larger task DAG. For a separately instrumented project, Agent Analytics can report how the shipped surface performed so the next Raven task starts from measured user behavior.", ["a user asks Raven to plan and build a website, docs path, onboarding flow, or product change, and Raven runs it as a DAG across built-in or third-party agents", "the reviewed change is deployed to a project that is separately instrumented with Agent Analytics", "the deployed surface reports visits, sources, CTA clicks, signups, activation, and funnel events to Agent Analytics", "a later Raven task with Agent Analytics access configured reads those results and scopes the next change from measured outcomes"], "This is an optional measurement workflow for projects built with Raven, not a built-in Raven integration or a claim that Raven reports to Agent Analytics. Instrument the deployed surface separately, and configure Agent Analytics access only in the Raven setup that should query it.", "Raven-built page, docs path, traffic source, CTA click, signup, activation event, funnel step, or shipped change", [])
  },
  {
    slug: "orbi", installMethod: "cli-and-skill", rank: 31, title: "Orbi", githubRepo: "orbi-build/orbi", accent: "amber",
    mark: { kind: "image", src: "/logos/orbi.svg", label: "Orbi logo" },
    summary: "A self-hosted issue-to-release runner: label a GitHub Issue ai-ready, and one agent session implements it on a branch while a separate review session checks the pull request against the Issue's acceptance criteria before the reviewed head is merged and tagged.",
    note: "Centers orchestration on GitHub Issues as the work queue: implementer and reviewer run as separate sessions, and only the commit the reviewer approved is merged and released.",
    overview: ["Orbi is an AGPL-3.0 Python runner that polls a repository for Issues labeled ai-ready, works each one in an isolated git worktree, and opens a pull request. Ordering between Issues comes from GitHub's native blockedBy links and milestones, so the queue lives in the repository rather than in a separate board.", "It belongs in Parallel Coding-Agent Runners because it routes issues to agents and splits delivery across roles: an implementation session writes the change, an independent review session checks the diff against the acceptance criteria written in the Issue and sends it back for fixes, and the runner merges only the reviewed head before cutting a tagged release. It runs on the Pi agent engine with any OpenAI-compatible API or a Codex subscription; a hosted version, Orbi Cloud, runs the same loop."],
    bestFor: ["Issue-driven unattended delivery", "Independent review before merge", "Self-hosted release automation"],
    tags: ["issue-to-PR", "coding agents", "git worktrees", "independent review", "AGPL-3.0"],
    links: [{ label: "Website", href: "https://orbi.build/?ref=dir-openorchestrators", emphasis: "primary" }, { label: "GitHub", href: "https://github.com/orbi-build/orbi" }, { label: "Docs", href: "https://docs.orbi.build/" }],
    screenshots: orbiScreenshots,
    agentAnalytics: agentAnalyticsSection("orbi", "Orbi", "Orbi closes the loop from Issue to tagged release; it does not observe what a release did to the product. Agent Analytics can supply that signal when the shipped surface is separately instrumented.", ["a maintainer files an ai-ready Issue with acceptance criteria", "Orbi implements it, the review session approves it, and the reviewed head is merged and released", "the deployed surface, separately instrumented, reports page views and configured product events to Agent Analytics", "the maintainer or an agent reads those results and files the next Issue with the measured outcome as its starting point"], "Orbi has no Agent Analytics integration. Instrument the deployed product separately and give whichever agent queries it its own Agent Analytics access.", "Orbi-released change, traffic source, signup, activation event, or funnel step", orbiScreenshots)
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
    slug: "openrig", installMethod: "mcp", rank: 35, title: "OpenRig", githubRepo: "mvschwarz/openrig", accent: "orange",
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
    slug: "ruflo", installMethod: "mcp", rank: 37, title: "Ruflo", githubRepo: "ruvnet/ruflo", accent: "violet",
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
