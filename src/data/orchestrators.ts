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
  tags: string[];
  links: OrchestratorLink[];
}

export const siteMeta = {
  name: "Open Orchestrators",
  pageTitle: "AI Agent Orchestration Platforms | Open Orchestrators",
  description: "A directory of AI agent orchestration platforms.",
  canonicalUrl: "https://open-orchestrators.org/"
};

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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];
