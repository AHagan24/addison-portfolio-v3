import type { ComponentType, CSSProperties } from "react";
import { BsOpenai } from "react-icons/bs";
import {
  SiEthereum,
  SiFigma,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

type IconComponent = ComponentType<{ className?: string; style?: CSSProperties }>;

export type TechIcon = {
  icon: IconComponent;
  /** Brand color, tuned for legibility on a near-black background. */
  color: string;
};

/** Keyed by the exact tech name used in data/projects.ts stacks. */
export const techIcons: Record<string, TechIcon> = {
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  Figma: { icon: SiFigma, color: "#F24E1E" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  "Web3 technologies": { icon: SiEthereum, color: "#ffffff" },
  "OpenAI API": { icon: BsOpenai, color: "#ededed" },
  "OpenAI Vision API": { icon: BsOpenai, color: "#ededed" },
};
