import { skillCategories } from "@/data/skills";
import { techIcons } from "@/data/tech-icons";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
          Skills
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Core Technologies
        </h2>

        <p className="mt-4 font-mono text-xs text-neutral-500">~/skills</p>

        <div className="mt-8 flex flex-wrap justify-center gap-x-16 gap-y-14">
          {skillCategories.map((category) => (
            <div key={category.label} className="w-48 sm:w-56">
              <p className="font-mono text-xs tracking-wide text-neutral-500 uppercase">
                {category.label}
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {category.skills.map((skill) => {
                  const entry = techIcons[skill];
                  const Icon = entry?.icon;
                  return (
                    <li key={skill} className="flex items-center gap-2.5">
                      {Icon && (
                        <Icon
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0"
                          style={{ color: entry.color }}
                        />
                      )}
                      <span className="text-sm text-neutral-300">{skill}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
