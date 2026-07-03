import { FallingPattern } from "@/components/ui/falling-pattern";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <FallingPattern
        color="rgba(255,255,255,0.35)"
        backgroundColor="#050505"
        className="pointer-events-none absolute inset-0 h-screen"
      />

      <div className="absolute inset-0 z-[2] bg-black/30" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div className="mx-auto max-w-3xl">

          <h1 className="text-5xl font-bold tracking-normal text-white sm:text-6xl md:text-7xl">
            Addison Hagan
          </h1>
          <p className="mt-3 text-2xl font-medium tracking-normal text-neutral-400 sm:text-3xl">
            Software Developer
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg">
            I build polished, responsive web apps with Next.js, React,
            TypeScript, and real product thinking.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex w-48 items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              View Projects
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>

            <a
              href="#contact"
              className="inline-flex w-48 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-10 z-10 flex justify-center">
        <div className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <span className="h-1.5 w-1.5 animate-scroll-dot rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
