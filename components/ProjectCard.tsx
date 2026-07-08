import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { techIcons } from "@/data/tech-icons";
import { TiltCard } from "@/components/ui/tilt-card";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  const Icon = project.icon;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <TiltCard
        className={cn(
          "relative aspect-16/10 overflow-hidden rounded-xl border border-white/10",
          reverse ? "lg:order-2" : "lg:order-1"
        )}
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1.5px), linear-gradient(155deg, #101010, #0a0a0a 60%, #060606)",
          backgroundSize: "10px 10px, 100% 100%",
        }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Icon aria-hidden="true" strokeWidth={1.5} className="h-8 w-8 text-neutral-600" />
          </div>
        )}
      </TiltCard>

      <div className={reverse ? "lg:order-1" : "lg:order-2"}>
        <p className="font-mono text-xs text-neutral-500">~/work/{project.slug}</p>

        <h3 className="mt-3 flex items-center gap-2 text-2xl font-semibold text-white">
          {project.title}
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
            className="flex h-6 w-6 items-center justify-center rounded-md border border-white/10 text-neutral-500 transition hover:border-white/20 hover:text-white"
          >
            <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </h3>

        <p className="mt-3 leading-7 text-neutral-400">{project.description}</p>

        <ul className="mt-5 flex">
          {project.stack.map((tech, i) => {
            const entry = techIcons[tech];
            const TechGlyph = entry?.icon ?? Code2;
            return (
              <li
                key={tech}
                tabIndex={0}
                className={cn(
                  "group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a] outline-none transition hover:z-10 hover:border-white/25 focus-visible:z-10 focus-visible:border-white/25 focus-visible:ring-2 focus-visible:ring-white/40",
                  i !== 0 && "-ml-3"
                )}
              >
                <TechGlyph
                  aria-hidden="true"
                  className="h-5 w-5"
                  style={{ color: entry?.color ?? "#737373" }}
                />
                <span className="sr-only">{tech}</span>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-full left-1/2 mb-2.5 -translate-x-1/2 translate-y-1 rounded-md border border-white/10 bg-[#111111] px-2.5 py-1 font-mono text-[11px] whitespace-nowrap text-neutral-300 opacity-0 shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition duration-150 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:transition-none"
                >
                  {tech}
                  <span className="absolute left-1/2 top-full -mt-1 h-2 w-2 -translate-x-1/2 rotate-45 bg-[#111111]" />
                </span>
              </li>
            );
          })}
        </ul>

        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white"
        >
          View project
          <ArrowUpRight
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </div>
    </div>
  );
}
