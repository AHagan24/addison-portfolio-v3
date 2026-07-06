# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build — run before considering a feature done
npm run start    # serve the production build
npm run lint     # ESLint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test runner configured in this project.

## Architecture

- **Next.js 16 App Router**, single route so far. `app/layout.tsx` loads the Inter font via `next/font/google` (exposed as CSS var `--font-inter`) and imports `app/globals.css`. `app/page.tsx` composes section components directly (`Navbar`, `Hero`, ...).
- **Tailwind v4**, configured entirely in CSS (`app/globals.css`) via `@theme inline` — there is no `tailwind.config.ts`. Design tokens (`--background`, `--foreground`, `--primary`) live there; keep new tokens consistent with the palette in AGENTS.md rather than hardcoding one-off colors in components.
- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/Hero`, `@/lib/utils`.
- **`components/`** holds page sections (`Hero.tsx`, `Navbar.tsx`, `About.tsx`, `Projects.tsx`, `ProjectCard.tsx`, `Skills.tsx`, `Contact.tsx`, `AnimatedBackground.tsx`) per the structure defined in AGENTS.md. Several of these are currently empty placeholder files awaiting implementation — check file contents before assuming a section exists.
- **`components/ui/`** is the low-level primitives layer: `button.tsx` (CVA variants + Radix `Slot` for `asChild`), `falling-pattern.tsx` (the animated background used behind Hero — the site's core visual identity per AGENTS.md), `animated-theme-toggle.tsx`.
- **`lib/utils.ts`** exports `cn()` (clsx + tailwind-merge) — use this for all conditional/merged className logic instead of manual string concatenation.
- Client-side interactivity (scroll listeners, framer-motion, state) requires `"use client"` at the top of the file, as in `Navbar.tsx`.
- `data/projects.ts` and `data/skills.ts` are referenced by the architecture in AGENTS.md but do not exist yet — project/skill content is not yet data-driven.
