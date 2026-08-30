export const site = {
  name: "Andrew Billings",
  role: "Software Engineer",
  tagline:
    "Building reliable systems across APIs, agents, and full-stack products.",
  email: "billingsandrewjohn@gmail.com",
  github: "https://github.com/Andrew50",
  linkedin: "https://linkedin.com/in/billinaj",
  resume: "/Andrew_Billings_Resume.pdf",
  url: "https://andrewbillings.dev",
} as const;

export const experience = [
  {
    company: "Fiserv Corporation",
    role: "Software Engineering Intern",
    location: "Fishers, IN",
    dates: "Jun 2026 – Aug 2026",
    summary:
      "Designed and shipped layered C#/.NET REST APIs with shared Dapper/Oracle data access, OpenAPI contracts, and unit-tested endpoint validation.",
  },
  {
    company: "Hansen Gress Corporation",
    role: "Software Engineering Intern",
    location: "Juneau, AK (Remote)",
    dates: "Jan 2025 – Mar 2026",
    summary:
      "Shipped an internal React/Go AI platform with a custom agent harness, multi-SaaS tool integrations, and production hardening that cut LLM costs ~80%.",
  },
] as const;

export type Project = {
  name: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    name: "Stryde",
    description:
      "Local-first iOS strength-training app with offline workout logging, progress analytics, and multi-device sync.",
    stack: ["Swift", "SwiftUI", "GRDB", "Supabase", "Cloudflare"],
  },
  {
    name: "Peripheral",
    description:
      "Real-time market screening, alerting, and backtesting across ~20K securities and ~1B OHLCV rows.",
    stack: ["Go", "Svelte", "TimescaleDB", "Redis", "Kubernetes"],
    github: "https://github.com/Andrew50/Peripheral",
  },
  {
    name: "Goals",
    description:
      "Personal goal planning and scheduling system with hierarchical progress tracking for 10k+ goals and tasks.",
    stack: ["React", "Rust", "Neo4j", "Docker"],
    github: "https://github.com/Andrew50/goals",
    live: "https://goals.andrewbillings.dev",
  },
];

export const education = {
  school: "Purdue University",
  degree: "B.S. Computer Engineering",
  dates: "Aug 2023 – May 2027",
  detail:
    "Data Science Certificate; concentrations in Artificial Intelligence and Machine Learning, Computer Systems",
} as const;

export const skills = [
  {
    label: "Languages",
    items: "Go, TypeScript, Python, C#, SQL, Swift, Rust, C/C++",
  },
  {
    label: "Frameworks",
    items: ".NET, React, Svelte, SwiftUI, FastAPI",
  },
  {
    label: "Data",
    items: "PostgreSQL, TimescaleDB, Redis, Neo4j, Qdrant, Supabase, Oracle",
  },
  {
    label: "Infrastructure",
    items: "Linux, Docker, Kubernetes, GitHub Actions, Cloudflare, GCP, DigitalOcean",
  },
] as const;
