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

export const siteMeta = {
  name: "Open Orchestrators",
  pageTitle: "AI Agent Orchestration News and Directory | Open Orchestrators",
  description: "News and a directory of AI agent orchestration platforms.",
  canonicalUrl: "https://openorchestrators.org/"
};

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
  heading: `How to use ${title} with Agent Analytics`,
  valueProp,
  measurementLoop,
  setupNotes,
  prompt: `Review the last 7 days for this project. Tell me which ${promptFocus} produced the strongest activation signal, where users dropped off, and what my agent team should improve next.`,
  ctaLabel: "Start with Agent Analytics",
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

export const orchestrators: OrchestratorEntry[] = [
  {
    slug: "cabinet",
    rank: 1,
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
      "Agent Analytics turns Cabinet's markdown memory and Data Analyst role into a measured user-outcome loop. The result can come back as a report inside the knowledge base, not another dashboard tab.",
      ["agent ships a page, docs change, campaign, or onboarding update", "real users land on the product or docs", "Agent Analytics tracks traffic, signup, activation, or purchase events", "a Cabinet analyst writes the finding and next action back into the workspace"],
      "Install Agent Analytics in the agent environment Cabinet already uses, then let a Cabinet analyst agent own the recurring reporting loop.",
      "Cabinet page, source, markdown report, or agent-created change",
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
      }
    ],
    screenshots: paperclipScreenshots,
    agentAnalytics: agentAnalyticsSection(
      "paperclip",
      "Paperclip",
      "Agent Analytics connects Paperclip's company-level execution to real end-user behavior after agents ship work.",
      ["an AI employee ships a page, docs update, campaign, or product change", "a real user reaches the landing page, docs, install flow, signup, or first project", "Agent Analytics tracks which step moved and which step leaked", "Paperclip can turn the measured outcome into the next assigned job"],
      "Use the Paperclip setup guide for the agent task flow, or add the live plugin when the company needs current traffic visibility inside Paperclip.",
      "Paperclip job, source, page, or agent-created change",
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
      "Agent Analytics gives CrewAI crews a measurable outcome layer, especially for Analyst, Growth, Product, and Content roles.",
      ["a crew ships content, onboarding, docs, or product work", "users visit, click, sign up, activate, or return", "Agent Analytics measures the business outcome", "the Analyst or Growth role reports what changed and assigns the next crew task"],
      "Give a CrewAI analyst or growth role access to Agent Analytics so the crew can evaluate work by user outcomes instead of only task completion.",
      "crew output, source, page, or workflow",
      crewAiScreenshots
    )
  },
  {
    slug: "openclaw",
    rank: 4,
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
      "Agent Analytics gives an OpenClaw assistant recurring growth checks, experiment reviews, and multi-project reporting.",
      ["OpenClaw adds tracking or ships a product change", "Agent Analytics captures traffic, events, funnels, retention, and experiments", "the assistant reviews the last day or week", "the next recommendation lands back in the chat loop"],
      "Install the Agent Analytics skill in OpenClaw, approve the browser login, and let the assistant create projects, add tracking, and run scheduled checks.",
      "OpenClaw project, source, page, experiment, or agent-created change",
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
    rank: 5,
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
      "Agent Analytics measures whether Sim apps, workflows, integrations, and knowledge-driven experiences lead to user outcomes.",
      ["a Sim workflow or agent-created surface goes live", "users enter from docs, landing pages, apps, or chat experiences", "Agent Analytics tracks activation signals beyond successful runs", "the team compares workflows by real user movement"],
      "Use Agent Analytics around the public product, docs, or app surfaces connected to Sim workflows so the team can evaluate activation, not only execution.",
      "Sim workflow, integration, page, or knowledge-driven experience",
      simScreenshots
    )
  },
  {
    slug: "culture",
    rank: 6,
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
      "Agent Analytics gives Culture rooms and coordinated agents an external feedback loop for the work they ship.",
      ["agents coordinate work in rooms or through protocol flows", "the shipped change reaches users", "Agent Analytics measures traffic, activation, and funnel movement", "the report can be handed back into the coordination workflow"],
      "Use Agent Analytics as the outcome source for Culture agents that need to know whether coordinated work changed user behavior.",
      "Culture room, coordination flow, source, or shipped change",
      cultureScreenshots
    )
  },
  {
    slug: "dify",
    rank: 7,
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
      "Agent Analytics measures user journeys around Dify apps, chatflows, and workflows, filling the gap between internal workflow logs and external conversion behavior.",
      ["a Dify app, chatflow, or workflow is published", "users arrive from landing pages, docs, campaigns, or product entry points", "Agent Analytics tracks the journey to signup, demo, activation, or first value", "the team can decide which flow deserves iteration"],
      "Track the public pages and product events around Dify experiences so analytics captures the user journey before and after the workflow runs.",
      "Dify app, chatflow, source, page, or workflow",
      difyScreenshots
    )
  },
  {
    slug: "flowise",
    rank: 8,
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
      "Agent Analytics measures whether Flowise visual agent flows produce downstream business events.",
      ["a Flowise agent flow handles an interaction or supports a user path", "the user reaches a CTA, signup, demo request, purchase, or first-value event", "Agent Analytics connects the flow context to the downstream event", "the team compares flows by conversion, not only successful execution"],
      "Track the pages and events around Flowise-powered flows so the builder can see which flows move users toward value.",
      "Flowise flow, page, CTA, signup, demo request, purchase, or first-value event",
      flowiseScreenshots
    )
  },
  {
    slug: "multica",
    rank: 9,
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
      "Agent Analytics gives Multica-managed coding agents a way to verify whether issue work moved product metrics.",
      ["an issue is assigned to an agent", "the agent ships a change", "Agent Analytics measures traffic, funnel, activation, or retention movement after deployment", "the outcome report closes the loop back to the managed-agent board"],
      "Use Agent Analytics after Multica agents ship user-facing work so completed issues can be judged by measured outcomes.",
      "Multica issue, shipped change, page, source, or product metric",
      multicaScreenshots
    )
  },
  {
    slug: "orca",
    rank: 10,
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
      "Agent Analytics gives Orca's parallel coding-agent worktrees a shared product feedback layer after changes ship.",
      ["multiple agents work in isolated branches", "selected changes merge and deploy", "Agent Analytics compares the user behavior after each shipped change", "the operator can choose what to keep improving based on traffic, funnels, and activation"],
      "Use Agent Analytics after Orca-managed changes deploy, especially when several agent branches are competing to improve a user-facing path.",
      "Orca worktree, branch, shipped change, experiment, or user-facing path",
      orcaScreenshots
    )
  },
  {
    slug: "gastown",
    rank: 11,
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
      "Agent Analytics gives Gas Town's persistent coding-agent work tracking an outcome report after agents complete tasks.",
      ["agents coordinate and complete tracked work", "the change ships to users", "Agent Analytics measures traffic, activation, or funnel movement", "the outcome becomes the next handoff or follow-up task"],
      "Use Agent Analytics as the measured outcome layer after Gas Town agents finish user-facing work.",
      "Gas Town task, handoff, shipped change, traffic source, or funnel movement",
      gasTownScreenshots
    )
  },
  {
    slug: "swarmclaw",
    rank: 12,
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
      "Agent Analytics gives SwarmClaw-managed agents a measurable feedback loop after they ship, update docs, change onboarding, or operate a product surface.",
      ["a SwarmClaw agent ships a page, docs update, onboarding change, connector guide, or install-flow improvement", "users arrive from search, GitHub, launch posts, Discord, docs, or community links", "Agent Analytics tracks install intent, setup starts, signups, provider connections, first projects, or the product's equivalent activation events", "a scheduled SwarmClaw task asks what changed and assigns the next improvement"],
      "Install Agent Analytics around the public surface SwarmClaw agents change first, then keep the activation event set small until the first loop is working.",
      "SwarmClaw task, shipped change, install intent, setup path, or activation event",
      swarmClawScreenshots
    )
  }
];
