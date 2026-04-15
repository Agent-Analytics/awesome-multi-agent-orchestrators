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
  summary: string;
  note: string;
  tags: string[];
}

export const siteMeta = {
  name: "Open Orchestrators",
  pageTitle: "Open Agent Orchestration Platforms Directory and News | Open Orchestrators",
  description: "Open Agent Orchestration platforms directory and news.",
  canonicalUrl: "https://openorchestrators.org/"
};

export const orchestrationTools: OrchestrationToolEntry[] = [
  {
    slug: "agent-analytics",
    title: "Agent Analytics",
    url: "https://agentanalytics.sh/",
    sourceName: "Agent Analytics website",
    mark: "AA",
    summary:
      "Agent-friendly web analytics for the websites, docs, apps, onboarding paths, demos, and launches built with AI agents.",
    note:
      "Gives agents a skill, CLI, MCP, API, and tracker path to measure visitors, sources, signup, activation, retention, conversion, and growth.",
    tags: ["analytics", "growth loop", "agent skill"]
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
    summary:
      "Observability for OpenClaw agents that shows what failed, where spend leaked, and how to improve runs.",
    note:
      "Adds traces, trajectory dashboards, token and cost visibility, and Tracy, a doctor agent that recommends fixes from live run data.",
    tags: ["observability", "OpenClaw", "tracing"]
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
  prompt: `Review the last 7 days for this project. Tell me which ${promptFocus} produced the strongest builder outcome, where users dropped off, and what my agent workflow should improve next.`,
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

const agnoScreenshots = [
  screenshot("agno", "Agno", "Agno website", "https://agno.com/")
];

const mastraScreenshots = [
  screenshot("mastra", "Mastra", "Mastra website", "https://mastra.ai/")
];

const supersetScreenshots = [
  screenshot("superset", "Superset", "Superset website", "https://superset.sh/")
];

const augmentIntentScreenshots = [
  screenshot("augment-intent", "Augment Code Intent", "Augment Code Intent page", "https://www.augmentcode.com/product/intent")
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
      "Superset helps builders ship more quickly with coding agents. Agent Analytics helps them see whether that velocity turns into visitors, conversion, retention, and growth.",
      ["a builder uses Superset to ship a page, docs update, onboarding change, app screen, demo, or growth experiment", "users arrive from search, GitHub, launch posts, campaigns, docs, referrals, or product navigation", "Agent Analytics measures visits, sources, signup, activation, retention, funnels, and conversion events", "the builder decides what to improve next from user behavior, not from implementation details alone"],
      "Install Agent Analytics on the project surface Superset helps you ship. The branch, worktree, or agent setup is secondary; the main question is whether the shipped work moves visitors toward value.",
      "page, traffic source, signup, activation event, funnel step, retention signal, or growth experiment",
      supersetScreenshots
    )
  },
  {
    slug: "augment-intent",
    rank: 2,
    title: "Augment Code Intent",
    accent: "emerald",
    mark: {
      kind: "image",
      src: "/logos/augment-code.svg",
      label: "Augment Code logo"
    },
    summary:
      "Augment's answer to what comes after the IDE: agent orchestration, isolated workspaces, and living specs in one developer workspace.",
    note:
      "Starts from Intent's three superpowers: coordinated agents, isolated workspaces, and specs that stay alive as work changes.",
    overview: [
      "Augment Code describes Intent as what comes after the IDE: a developer workspace for agent orchestration, isolated git-worktree-backed workspaces, and living specs.",
      "Its core workflow is coordinator, implementors, and verifier. The coordinator turns a task into a spec, implementors execute in waves, and the verifier checks the result against the spec before the developer reviews the work.",
      "Intent also brings code, browser previews, terminal, git operations, model choice, Augment Context Engine, and BYOA support for Claude Code, Codex, and OpenCode into the same workspace."
    ],
    bestFor: ["Agent orchestration", "Isolated workspaces", "Living specs"],
    tags: ["agent orchestration", "isolated workspaces", "living specs", "post-IDE"],
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
        "The clean Agent Analytics integration for Augment is the skill path. Install the Agent Analytics skill through the skills.sh workflow, then Augment can load it from the standard agent-skills locations and use the official CLI to create projects, add tracking, and read growth analytics from the same agent loop.",
      measurementLoop: [
        "install the Agent Analytics skill with `npx skills add Agent-Analytics/agent-analytics-skill`",
        "Augment discovers the skill from `.agents/skills/`, `.augment/skills/`, or another supported skills location",
        "the skill guides login, project creation, tracker install, event verification, and analytics queries through the official Agent Analytics CLI",
        "Intent keeps the spec, agents, code, terminal, browser, and git workflow together while Agent Analytics reports visitors, sources, signup, activation, retention, conversion, and growth"
      ],
      setupNotes:
        "This fits Augment's Skills model: skills are modular packages of domain knowledge, workflows, tool guidance, and resources. For Agent Analytics, the skill teaches the agent how to set up tracking and measure the shipped surface without making the developer leave Augment for a dashboard-first workflow.",
      prompt:
        "Install the Agent Analytics skill with `npx skills add Agent-Analytics/agent-analytics-skill`. Then set up Agent Analytics for this project. If approval is needed, send me the approval link and wait. After approval, create the project, add tracking, verify the first event, and report visits, sources, signup, activation, retention, conversion, and growth for the shipped surface.",
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
    slug: "paperclip",
    rank: 3,
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
      }
    ],
    screenshots: paperclipScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "paperclip",
      "Paperclip",
      "Agent Analytics measures the projects Paperclip companies build or improve, from landing pages and docs to signup and onboarding. The Paperclip live plugin is optional visibility; the core value is project usage data.",
      ["an AI employee ships a page, docs update, campaign, or product change", "users reach the landing page, docs, install flow, signup, onboarding path, or first project", "Agent Analytics tracks visits, sources, install intent, signup, activation, purchase, or retention", "Paperclip turns the measured project outcome into the next assigned job"],
      "Use the Paperclip setup guide for the agent task flow. Add the live plugin only when the company wants current traffic visibility inside Paperclip.",
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
    rank: 4,
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
      "Agent Analytics is web analytics for builders who use CrewAI crews to ship content, product pages, docs, onboarding, or growth experiments.",
      ["a CrewAI-backed builder ships content, onboarding, docs, or product work", "users visit, click, sign up, activate, purchase, or return", "Agent Analytics measures the web or product events tied to that project surface", "the Analyst or Growth role reports what changed and assigns the next crew task"],
      "Track the project surfaces the crew is improving, then let Analyst, Growth, Product, or Content roles read the results as part of the next planning loop.",
      "CrewAI-built page, traffic source, signup, activation event, or shipped change",
      crewAiScreenshots
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
      "Agent Analytics is web analytics an OpenClaw assistant can install, read, and use while builders ship projects across websites, docs, apps, and experiments.",
      ["OpenClaw adds tracking or ships a project change", "users visit pages, click CTAs, sign up, activate, return, or enter an experiment", "Agent Analytics captures traffic, events, funnels, retention, and experiment results", "the assistant brings the next recommendation back into the chat loop"],
      "Install the Agent Analytics skill in OpenClaw, approve the browser login, and let the assistant create projects, add tracking, and run scheduled builder reports.",
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
      "Agent Analytics measures the apps, demos, docs, landing pages, and product journeys builders create or improve with Sim.",
      ["a Sim-built app, workflow-backed demo, docs path, or agent-created surface goes live", "users enter from search, docs, landing pages, app navigation, or chat experiences", "Agent Analytics tracks visits, sources, signup, activation, first value, and retention events", "the builder compares project surfaces by user movement, not only successful automation runs"],
      "Track the public product, docs, demo, or app surfaces connected to Sim-built experiences so builders can evaluate activation and drop-off.",
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
      "Agent Analytics gives builders using Culture an agent-friendly way to measure the web and product surfaces their coordinated work ships.",
      ["agents coordinate project work in rooms or through protocol flows", "the shipped page, docs update, app change, or support surface reaches users", "Agent Analytics measures visits, sources, signup, activation, retention, and funnel movement", "the report can be handed back into the coordination loop as the next project task"],
      "Track the project surface Culture agents are helping build, then use the measured user events as input for the next coordinated task.",
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
      "Agent Analytics is web analytics for builders using Cabinet to ship and improve projects. Track the project surface, then let Cabinet hold the report and next action.",
      ["a Cabinet-backed builder or agent ships a page, docs change, campaign, or onboarding update", "users visit the website, docs, landing page, signup flow, or app surface", "Agent Analytics tracks visits, sources, signup, activation, purchase, or retention events", "a Cabinet analyst writes the finding and next action back into the workspace"],
      "Install tracking on the project surface Cabinet agents are improving, then use Cabinet's markdown memory for recurring outcome reports.",
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
      "Agent Analytics measures the apps, chatflows, demos, docs, and product journeys builders publish with Dify.",
      ["a Dify app, chatflow, demo, or product journey is published", "users arrive from landing pages, docs, campaigns, search, or product entry points", "Agent Analytics tracks visits, sources, signup, demo request, activation, first value, and retention", "the builder decides which project surface deserves iteration"],
      "Track the public pages and product events around Dify experiences so analytics captures the user journey before and after users engage with the app or chatflow.",
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
      "Agent Analytics measures the pages, demos, apps, and conversion paths builders connect to Flowise-powered experiences.",
      ["a Flowise-powered page, demo, app, or support path reaches users", "users click a CTA, request a demo, sign up, purchase, or reach first value", "Agent Analytics tracks the downstream web and product events", "the builder compares project surfaces by conversion, not only successful flow execution"],
      "Track the pages and events around Flowise-powered project surfaces so builders can see which experiences move users toward value.",
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
      "Agent Analytics helps builders using Multica measure whether coding-agent issue work improved the project surface users actually touch.",
      ["an issue for a website, docs flow, onboarding path, or app surface is assigned to an agent", "the agent ships and deploys the change", "Agent Analytics measures visits, sources, signup, activation, retention, or funnel movement", "the outcome report closes the loop back to the managed-agent board"],
      "Use Agent Analytics after Multica agents ship user-facing work so completed issues can be judged by web and product outcomes.",
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
      "Agent Analytics gives builders using Orca a shared web analytics layer after parallel coding-agent branches ship to a project.",
      ["multiple agents work in isolated branches on a project surface", "selected changes merge and deploy to the website, docs, app, or onboarding path", "Agent Analytics compares visits, sources, signup, activation, funnels, retention, or experiment results", "the operator chooses what to keep improving based on measured user behavior"],
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
      "Agent Analytics helps builders using Gas Town measure the web and product outcomes after coordinated coding-agent tasks ship.",
      ["agents coordinate and complete tracked project work", "the change ships to the website, docs, app, onboarding flow, or support surface", "Agent Analytics measures visits, sources, signup, activation, retention, or funnel movement", "the outcome becomes the next handoff or follow-up task"],
      "Use Agent Analytics after Gas Town agents finish user-facing project work so handoffs include measured usage, not only task status.",
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
      kind: "monogram",
      value: "SC",
      label: "SwarmClaw monogram"
    },
    summary:
      "A self-hosted AI agent runtime for autonomous agents, delegated work, schedules, provider management, and chat-platform connectors.",
    note:
      "Centers orchestration on a self-hosted runtime where agents can delegate work, manage providers, use connectors, and run scheduled tasks.",
    overview: [
      "SwarmClaw is a self-hosted AI agent runtime for running autonomous agents, delegating work, managing providers, scheduling tasks, and connecting agents to chat platforms.",
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
      "Agent Analytics is web analytics for builders using SwarmClaw agents to ship pages, docs, onboarding, demos, or other project surfaces.",
      ["a SwarmClaw agent ships a page, docs update, onboarding change, connector guide, or install-flow improvement", "users arrive from search, GitHub, launch posts, Discord, docs, or community links", "Agent Analytics tracks visits, sources, install intent, setup starts, signups, provider connections, first projects, or equivalent activation events", "a scheduled SwarmClaw task reviews project usage and assigns the next improvement"],
      "Install Agent Analytics around the project surface SwarmClaw agents change first, then keep the activation event set small until the builder loop is working.",
      "SwarmClaw-built page, traffic source, install intent, setup path, signup, or activation event",
      swarmClawScreenshots
    )
  },
  {
    slug: "agno",
    rank: 15,
    title: "Agno",
    githubRepo: "agno-agi/agno",
    accent: "blue",
    mark: {
      kind: "monogram",
      value: "Ag",
      label: "Agno monogram"
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
      "Agent Analytics measures the websites, apps, docs, onboarding flows, demos, and support surfaces builders create or improve with Agno systems.",
      ["an Agno-backed builder ships a docs update, onboarding change, product improvement, support surface, or web app change", "users encounter the changed surface through the website, app, docs, demo, community link, or internal web app", "Agent Analytics tracks visits, sources, signup, install intent, setup start, first run, report viewed, or task completed events", "the Agno workflow or builder reviews the project outcome and proposes the next improvement"],
      "Instrument the project surface that the Agno system affects. Agent Analytics measures that web or product surface, not Agno logs or traces.",
      "Agno-built page, traffic source, signup, install intent, first run, report viewed, or task completed event",
      agnoScreenshots
    )
  },
  {
    slug: "mastra",
    rank: 16,
    title: "Mastra",
    githubRepo: "mastra-ai/mastra",
    accent: "mint",
    mark: {
      kind: "monogram",
      value: "Ma",
      label: "Mastra monogram"
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
      "Agent Analytics measures the TypeScript apps, docs, demos, onboarding flows, and support surfaces builders create or improve with Mastra.",
      ["a Mastra-backed builder changes a page, docs flow, onboarding path, app surface, demo, or support surface", "users encounter the changed surface through search, GitHub, social, docs, product navigation, or an internal web app", "Agent Analytics tracks visits, sources, signup, install intent, setup start, first workflow run, report viewed, or task completed events", "a Mastra workflow or builder reviews the project event data and creates the next improvement task"],
      "Instrument the TypeScript app, docs, demo, or product surface where Mastra helps builders ship change. Agent Analytics measures that surface, not Mastra logs or traces.",
      "Mastra-built app, traffic source, signup, install intent, first workflow run, report viewed, or task completed event",
      mastraScreenshots
    )
  }
];
