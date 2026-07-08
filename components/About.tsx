import { FileText } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const facts = [
  {
    label: "Focus",
    value: "Modern web applications with a focus on performance and UX.",
  },
  { label: "Stack", value: "Next.js · React · TypeScript" },
  { label: "Based", value: "Maryland, USA" },
  {
    label: "Status",
    value: "Open to Frontend and Full-Stack Software Engineering roles.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs tracking-[0.2em] text-neutral-500 uppercase">
          About
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Building software that solves real problems.
        </h2>

        <div className="mt-12 grid gap-14 lg:grid-cols-[1.6fr_1fr] lg:gap-20">
          <div className="max-w-2xl">
            <div className="space-y-5 text-lg leading-7 text-neutral-400">
              <p>
                I&apos;m Addison Hagan, a frontend-focused software developer
                who enjoys building fast, responsive web applications. I
                primarily work with Next.js, React, and TypeScript, creating
                products that balance clean design, strong performance, and
                maintainable code.
              </p>
              <p>
                Through personal projects and professional experience,
                I&apos;ve built AI-powered applications, modern web
                platforms, and full-stack products. I&apos;m always looking
                to learn, grow, and build software that people genuinely
                enjoy using.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://github.com/AHagan24"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-white/20 hover:text-white"
              >
                <BsGithub aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/addison-hagan-32583732a/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-white/20 hover:text-white"
              >
                <BsLinkedin aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-neutral-400 transition hover:border-white/20 hover:text-white"
              >
                <FileText aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-neutral-500">~/about</p>
            <dl className="mt-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-t border-white/8 py-5 first:border-t-0 first:pt-0"
                >
                  <dt className="font-mono text-xs tracking-wide text-neutral-500 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-6 text-neutral-200">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
