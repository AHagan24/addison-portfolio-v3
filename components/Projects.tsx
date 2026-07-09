"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  useEffect(() => {
    console.log(
      "%c┌──────┐\n│  AH  │\n└──────┘\n\n%cYou found the console.\nCurious developers get further than most.\n\nLet's talk → hello@addisonhagan.dev",
      "font-family: monospace; color: #ededed; font-size: 13px; line-height: 1.4;",
      "font-family: monospace; color: #a3a3a3; font-size: 12px; line-height: 1.6;"
    );
  }, []);

  return (
    <section id="projects" className="relative px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
          Projects
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Selected work
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-7 text-neutral-400">
          Three projects, three different problems — an AI diagnostics
          product, an NFT marketplace, and a code-review assistant.
        </p>

        <div className="mt-20 flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ProjectCard project={project} reverse={index % 2 === 1} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
