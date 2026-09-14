export const site = {
  name: "Jonathan Ehrmantraut",
  role: "Front-end developer",
  url: "https://ehrmantraut.me",
  email: "jehrman27@gmail.com",
  github: "https://github.com/Jehrman27",
  repo: "https://github.com/Jehrman27/portfolio",
  linkedin: "https://www.linkedin.com/in/jonathan-ehrmantraut/",
  openToWork: true,
} as const;

export interface Link {
  label: string;
  href: string;
  primary?: boolean;
}

export interface Project {
  name: string;
  org?: string;
  role: string;
  status?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links: Link[];
  note?: string;
}

export const projects: Project[] = [
  {
    name: "Peregrine",
    org: "Adversi",
    role: "Built the entire front end",
    status: "In private beta",
    summary:
      "Peregrine is a threat-intelligence platform that catches adversary infrastructure while it is still being staged, days or weeks before anyone gets attacked with it. I own the web application security analysts sit in front of; my partner owns the Python service behind it.",
    highlights: [
      "Built every screen from an empty React project: routing, Clerk-backed auth, server state in TanStack Query, and the shared component layer the rest of the product is assembled from.",
      "The API client is generated from the backend's OpenAPI spec, so a change on the Python side shows up as a TypeScript error at build time instead of as a bug in front of an analyst.",
      "Long-running hunts stream progress over a WebSocket, so the interface stays honest about what it's doing instead of parking the user on a spinner.",
      "Took it through trials with real analysts and reworked whatever didn't land. Most of the feedback was good; the parts that weren't are the parts I'm happiest with now.",
      "Worked in the Python/FastAPI backend when a feature needed it, and wired up the public waitlist on the Adversi marketing site.",
    ],
    stack: [
      "React",
      "TypeScript",
      "MUI",
      "TanStack Query",
      "React Router",
      "Clerk",
      "WebSockets",
      "OpenAPI codegen",
      "Vite",
    ],
    links: [
      { label: "adversi.net", href: "https://adversi.net/", primary: true },
    ],
    note: "Peregrine sits behind authentication, so there's no public demo to link. The link above goes to Adversi's site. The waitlist flow there is mine; the rest of that page isn't. If you'd like to see the product itself, I'm happy to walk anyone through it over a call.",
  },
  {
    name: "Native Patch",
    role: "Designed and built it solo",
    status: "In active development",
    summary:
      "Type in a ZIP code and get the pollinator-friendly native plants that have actually been observed near you, pulled live from iNaturalist's open observation data. I wanted real practice with the Next.js App Router on a public third-party API instead of another to-do app.",
    highlights: [
      "Server Components do the primary data fetching, which keeps the client bundle small and the first paint fast.",
      "Filter state lives in the URL, so a set of results is shareable and the back button behaves the way people expect.",
      "Typed boundaries around every API response, plus fetch caching and revalidation to stay inside iNaturalist's rate limits.",
    ],
    stack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "iNaturalist API",
      "Vercel",
    ],
    links: [
      {
        label: "Live site",
        href: "https://native-patch.vercel.app/",
        primary: true,
      },
      { label: "Source", href: "https://github.com/Jehrman27/native-patch" },
    ],
  },
];

export const toolbox: { group: string; items: string[] }[] = [
  {
    group: "Core",
    items: ["React", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    group: "Building with",
    items: [
      "Next.js",
      "Vite",
      "MUI",
      "TanStack Query",
      "React Router",
      "Tailwind CSS",
      "CSS Modules",
    ],
  },
  {
    group: "Around the work",
    items: [
      "Git",
      "GitHub Actions",
      "Docker",
      "REST & OpenAPI",
      "Accessibility",
      "Responsive design",
    ],
  },
  {
    group: "Also worked in",
    items: ["Python", "FastAPI"],
  },
];
