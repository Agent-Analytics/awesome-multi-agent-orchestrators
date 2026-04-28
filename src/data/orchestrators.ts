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

export interface OrchestratorEntry {
  slug: string;
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
  pageTitle: "Open Multi-Agent Orchestration Platforms Directory and News | Open Orchestrators",
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

const augmentIntentScreenshots = [
  screenshot("augment-intent", "Augment Code Intent", "Augment Code Intent page", "https://www.augmentcode.com/product/intent")
];

const hyperScreenshots = [
  screenshot("hyper", "Hyper", "Hyper website", "https://www.hyperfx.ai/")
];

const crewletScreenshots = [
  screenshot("crewlet", "Crewlet", "Crewlet website", "https://www.crewlet.io/")
];

export const orchestrators: OrchestratorEntry[] = [
  {
    slug: "superset",
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
    slug: "vibe-kanban",
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
    slug: "augment-intent",
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
        "install the Agent Analytics skill with `npx skills add Agent-Analytics/agent-analytics-skill`",
        "Augment discovers the skill from `.agents/skills/`, `.augment/skills/`, or another supported skills location",
        "the skill guides login, project creation, tracker install, event reporting, event verification, and analytics queries through the official Agent Analytics CLI",
        "Intent keeps the spec, agents, code, terminal, browser, and git workflow together while the agent reads visitors, sources, signup, activation, retention, conversion, and growth from Agent Analytics"
      ],
      setupNotes:
        "This fits Augment's Skills model: skills are modular packages of domain knowledge, workflows, tool guidance, and resources. For Agent Analytics, the skill teaches the agent how to set up event reporting and read the shipped surface results without making the developer leave Augment for a dashboard-first workflow.",
      prompt:
        "Install the Agent Analytics skill with `npx skills add Agent-Analytics/agent-analytics-skill`. Then set up Agent Analytics for this project. If approval is needed, send me the approval link and wait. After approval, create the project, add event reporting, verify the first event arrives, fetch the last 7 days, and explain visits, sources, signup, activation, retention, conversion, and growth for the shipped surface.",
      ctaLabel: "Install Agent Analytics skill",
      ctaHref: "https://github.com/Agent-Analytics/agent-analytics-skill",
      screenshots: augmentIntentScreenshots,
      relatedLinks: [
        {
          label: "Agent Analytics skill repository",
          href: "https://github.com/Agent-Analytics/agent-analytics-skill"
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
    slug: "hyper",
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
    slug: "crewlet",
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
    slug: "paperclip",
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
    slug: "crewai",
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
    slug: "squad",
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
          href: "https://github.com/Agent-Analytics/agent-analytics-skill"
        },
        {
          label: "Squad CLI package",
          href: "https://www.npmjs.com/package/@bradygaster/squad-cli"
        }
      ]
    )
  },
  {
    slug: "openclaw",
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
    slug: "nanoclaw",
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
    slug: "hermes",
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
        "install the Agent Analytics skill with `npx skills add Agent-Analytics/agent-analytics-skill`",
        "Hermes follows the skill to approve login, create or select the project, add the tracker, and verify the first event",
        "the changed surface reports visits, sources, install intent, signup, activation, retention, funnel, and experiment events to Agent Analytics",
        "a scheduled Hermes task uses the skill to fetch Agent Analytics results and turn the measured user outcome into the next skill, task, subagent job, or scheduled report"
      ],
      setupNotes:
        "This fits Hermes' skill-centered operating model: Hermes can keep memory, create skills, schedule work, and delegate through subagents while the Agent Analytics skill supplies the product analytics workflow. Agent Analytics measures the user-facing project surface; it does not replace Hermes logs, traces, terminal sessions, or conversation memory.",
      prompt:
        "Install the Agent Analytics skill with `npx skills add Agent-Analytics/agent-analytics-skill`. Then set up Agent Analytics for this project. If approval is needed, send me the approval link and wait. After approval, create or select the project, add event reporting, verify the first event arrives, and create a scheduled Hermes report for visits, sources, install intent, signup, activation, retention, funnel drop-off, and the next improvement.",
      ctaLabel: "Install Agent Analytics skill",
      ctaHref: "https://github.com/Agent-Analytics/agent-analytics-skill",
      screenshots: hermesScreenshots,
      relatedLinks: [
        {
          label: "Agent Analytics skill repository",
          href: "https://github.com/Agent-Analytics/agent-analytics-skill"
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
    slug: "sim",
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
    slug: "culture",
    rank: 7,
    title: "Culture",
    githubRepo: "OriNachum/culture",
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
        href: "https://github.com/OriNachum/culture"
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
    slug: "cabinet",
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
    slug: "dify",
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
    slug: "flowise",
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
    slug: "multica",
    rank: 11,
    title: "Multica",
    githubRepo: "multica-ai/multica",
    accent: "cyan",
    mark: {
      kind: "image",
      src: "/logos/multica.svg",
      label: "Multica logo"
    },
    summary:
      "An open-source managed agents platform where coding agents act like teammates, take assigned issues, execute autonomously, and reuse shared skills over time.",
    note: "Centers orchestration on issue boards, runtime daemons, and reusable skills for human-plus-agent teams.",
    overview: [
      "Multica is an open-source managed agents platform where coding agents act like teammates, take assigned issues, execute autonomously, and reuse shared skills.",
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
    slug: "orca",
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
    slug: "gastown",
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
    slug: "swarmclaw",
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
    slug: "agno",
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
    slug: "agent-office-suite",
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
    slug: "mastra",
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
    slug: "openwork",
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
      "OpenWork already exposes this in the Skills UI. In OpenWork, open `Skills`, find `Install from OpenPackage`, paste `gh@Agent-Analytics/agent-analytics-skill`, and click `Install`. That installs the Agent Analytics package into the current workspace; if the list does not update immediately, click `Refresh` and confirm the new skills appear under `Installed skills`. The current package installs both `agent-analytics` and `agent-analytics-autoresearch`. If you prefer OpenWork's share-link flow instead of the package installer, their `Importing an existing skill with a share URL` guide is still the fallback path.",
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
          href: "https://github.com/Agent-Analytics/agent-analytics-skill"
        }
      ]
    )
  },
  {
    slug: "sandcastle",
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
    slug: "oh-my-codex",
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
    slug: "sidjua",
    rank: 15,
    title: "SIDJUA",
    githubRepo: "GoetzKohlberg/sidjua",
    accent: "violet",
    mark: {
      kind: "monogram",
      value: "SJ",
      label: "SIDJUA monogram"
    },
    summary:
      "A governance-first AI agent orchestration platform where policy, approval, budget, classification, and audit checks run before agent actions execute.",
    note:
      "Centers orchestration on structural governance: pre-action enforcement, divisions, tiers, budgets, audit trails, always-on agents, and self-hosted operation.",
    overview: [
      "SIDJUA is an AGPL-licensed, governance-first AI agent orchestration platform for running agents with structural policy enforcement instead of relying only on prompts.",
      "It belongs in Open Orchestrators because its core product surface is the operating layer around agents: divisions, tiers, pre-action enforcement, budgets, approval workflows, classification checks, governed daemons, multi-channel messaging, and audit trails.",
      "The project roadmap expands that control-plane direction with native tool calling, webhook inbound, observability, MCP client integration, MCP server mode, consent and tool-call governance, and enterprise isolation work."
    ],
    bestFor: ["Governed agent operations", "Budget and approval enforcement", "Self-hosted compliance-aware orchestration"],
    tags: ["governance", "agent orchestration", "self-hosted", "audit trail"],
    links: [
      {
        label: "Website",
        href: "https://www.sidjua.com/",
        emphasis: "primary"
      },
      {
        label: "GitHub",
        href: "https://github.com/GoetzKohlberg/sidjua"
      },
      {
        label: "Roadmap",
        href: "https://www.sidjua.com/roadmap"
      },
      {
        label: "Latest release",
        href: "https://github.com/GoetzKohlberg/sidjua/releases"
      }
    ],
    screenshots: sidjuaScreenshots,
    agentAnalytics: {
      heading: "Measure governed changes from SIDJUA",
      valueProp:
        "SIDJUA can govern the agent work before it happens. Agent Analytics measures whether the governed change moved real users afterward.",
      measurementLoop: [
        "a SIDJUA-governed orchestrator agent reviews the site and decides the signup CTA should change",
        "the coding agent applies the CTA change under SIDJUA's policy, budget, approval, and audit controls",
        "the site reports page views, CTA clicks, signup starts, completed signups, source data, and conversion events to Agent Analytics after the change ships",
        "on a schedule, the SIDJUA-governed agent fetches fresh analytics data from Agent Analytics, explains what happened to the signup path for the business owner, and recommends whether to keep, revert, or assign the next governed experiment"
      ],
      setupNotes:
        "SIDJUA's current public docs mention agent skills for sandboxing and OpenClaw import, while the broader community skill registry is on the roadmap. For Agent Analytics today, use the existing global agent skill path: if the SIDJUA workflow runs a coding agent that already has the Agent Analytics skill from skills.sh, that agent can wire event reporting, verify events are arriving, connect to Agent Analytics, and read the results without a SIDJUA-specific integration.",
      prompt:
        "You changed the primary signup CTA to increase signups. Use the existing Agent Analytics skill from skills.sh if it is installed. First verify the site is reporting page views, CTA clicks, signup starts, and completed signup events to Agent Analytics. Then fetch the last 7 days of Agent Analytics data and compare it with the prior 7 days. Tell me what happened to customer traffic and the signup path: visits, sources, CTA clicks, signup starts, completed signups, conversion rate, and the biggest drop-off. Recommend whether we should keep the CTA, revert it, or assign the next SIDJUA-governed experiment.",
      ctaLabel: "Measure governed changes",
      ctaHref: agentAnalyticsSignupHref("sidjua"),
      screenshots: sidjuaScreenshots,
      relatedLinks: [
        {
          label: "Agent Analytics skill repository",
          href: "https://github.com/Agent-Analytics/agent-analytics-skill"
        },
        {
          label: "Skills directory",
          href: "https://skills.sh/"
        }
      ]
    }
  }
];
