export const site = {
  name: "Andrew Billings",
  role: "Software Engineer",
  tagline:
    "Software engineer working across systems, infrastructure, and products.",
  email: "billingsandrewjohn@gmail.com",
  github: "https://github.com/Andrew50",
  linkedin: "https://linkedin.com/in/billinaj",
  resume: "/Andrew_Billings_Resume.pdf",
  url: "https://andrewbillings.dev",
  education: "Computer Engineering at Purdue, graduating 2027.",
} as const;

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  /** YouTube video ID for an optional demo page */
  youtubeId?: string;
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "stryde",
    name: "Stryde",
    description:
      "Strength training for iOS with adaptive workout recommendations.",
    stack: ["Swift", "SwiftUI", "Supabase"],
    image: {
      src: "/projects/stryde.jpg",
      alt: "Stryde workout logging screen with set entry and estimated 1RM",
      width: 452,
      height: 960,
    },
    links: [
      { label: "Website", href: "https://trystryde.app", external: true },
    ],
  },
  {
    slug: "peripheral",
    name: "Peripheral",
    description:
      "Market research and strategy platform built for large-scale historical data.",
    stack: ["Go", "Python", "PostgreSQL", "Kubernetes"],
    image: {
      src: "/projects/peripheral.jpg",
      alt: "Peripheral trading research interface with charting, watchlist, and assistant",
      width: 1232,
      height: 580,
    },
    youtubeId: "bMt3_SvlBbM",
    links: [
      { label: "Demo", href: "/projects/peripheral" },
      {
        label: "GitHub",
        href: "https://github.com/Andrew50/peripheral",
        external: true,
      },
    ],
  },
  {
    slug: "goal-architecture",
    name: "Goal Architecture",
    description:
      "Personal planning and scheduling built around a graph of 10K+ goals and tasks.",
    stack: ["Rust", "React", "Neo4j"],
    image: {
      src: "/projects/goals-network.jpg",
      alt: "Goal Architecture network view showing a large interconnected goal graph",
      width: 1400,
      height: 723,
    },
    links: [
      {
        label: "Website",
        href: "https://goals.andrewbillings.dev",
        external: true,
      },
      { label: "GitHub", href: "https://github.com/Andrew50/goals", external: true },
    ],
  },
  {
    slug: "sc2-overlay",
    name: "SC2 Overlay",
    description: "Branching build-order overlay for StarCraft II.",
    stack: ["TypeScript", "Electron", "Cytoscape"],
    image: {
      src: "/projects/sc2-overlay.jpg",
      alt: "SC2 Overlay build-order viewer with branching graph visualization",
      width: 1400,
      height: 957,
    },
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Andrew50/sc2-overlay",
        external: true,
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
