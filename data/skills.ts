export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Firebase",
      "Firestore",
      "REST API Development",
      "Authentication",
    ],
  },
  {
    label: "AI & APIs",
    skills: [
      "OpenAI API",
      "OpenAI Vision API",
      "API Integration",
      "JSON",
      "Prompt Engineering",
    ],
  },
  {
    label: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Visual Studio Code",
      "Vercel",
      "Figma",
      "Cloudinary",
      "Postman",
    ],
  },
];
