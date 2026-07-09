import { Boxes, Code2, Sparkles, type LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  slug: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  /** Screenshot shown on the project card; falls back to the icon when omitted. */
  image?: string;
  /** Placeholder until the real deployment/repo links are ready. */
  href: string;
};

export const projects: Project[] = [
  {
    title: "Skinstric AI",
    slug: "skinstric-ai",
    description:
      "AI skincare diagnostics platform — shipped production-ready frontend features for an internship, from Figma handoff to deployment.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI Vision API",
      "Figma",
    ],
    icon: Sparkles,
    image: "/projects/skinstric-ai-v4.png",
    href: "https://skinstric-ai-internship-one.vercel.app/",
  },
  {
    title: "Ultraverse",
    slug: "ultraverse",
    description:
      "Modern NFT marketplace focused on seamless wallet connectivity, asset discovery, and responsive user experience.",
    stack: ["React", "TypeScript", "Web3 technologies", "Node.js"],
    icon: Boxes,
    image: "/projects/ultraverse.png",
    href: "https://addison-internship.vercel.app/",
  },
  {
    title: "CodeCritic AI",
    slug: "codecritic-ai",
    description:
      "AI code-review platform that generates intelligent feedback, stores review history, and helps developers improve code quality.",
    stack: ["Next.js", "OpenAI API", "MongoDB"],
    icon: Code2,
    image: "/projects/codecritic-ai.png",
    href: "https://code-critic-ai-six.vercel.app/",
  },
];
