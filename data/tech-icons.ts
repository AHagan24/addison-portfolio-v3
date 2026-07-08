import type { ComponentType, CSSProperties } from "react";
import { BsOpenai } from "react-icons/bs";
import {
  SiClaude,
  SiClaudecode,
  SiCloudinary,
  SiCss,
  SiEthereum,
  SiExpress,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiGit,
  SiGithub,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type IconComponent = ComponentType<{ className?: string; style?: CSSProperties }>;

export type TechIcon = {
  icon: IconComponent;
  /** Brand color, tuned for legibility on a near-black background. */
  color: string;
};

/** Keyed by the exact tech name used in data/projects.ts stacks and data/skills.ts skills. */
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
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
  "Framer Motion": { icon: SiFramer, color: "#ededed" },
  GSAP: { icon: SiGreensock, color: "#88CE02" },
  "Express.js": { icon: SiExpress, color: "#ededed" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  Firestore: { icon: SiFirebase, color: "#FFCA28" },
  Mongoose: { icon: SiMongoose, color: "#880000" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#ededed" },
  Vercel: { icon: SiVercel, color: "#ededed" },
  Cloudinary: { icon: SiCloudinary, color: "#3448C5" },
  Postman: { icon: SiPostman, color: "#FF6C37" },
  Claude: { icon: SiClaude, color: "#D97757" },
  "Claude Code": { icon: SiClaudecode, color: "#D97757" },
};
