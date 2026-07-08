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

- **Next.js 16 App Router**, single route so far. `app/layout.tsx` loads the Inter font via `next/font/google` (exposed as CSS var `--font-inter`) and imports `app/globals.css`. `app/page.tsx` composes section components directly (`Navbar`, `Hero`, `Projects`).
- **Tailwind v4**, configured entirely in CSS (`app/globals.css`) via `@theme inline` — there is no `tailwind.config.ts`. Design tokens (`--background`, `--foreground`, `--primary`) live there; keep new tokens consistent with the palette in AGENTS.md rather than hardcoding one-off colors in components.
- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/Hero`, `@/lib/utils`.
- **`components/`** holds page sections (`Hero.tsx`, `Navbar.tsx`, `Projects.tsx`, `ProjectCard.tsx`) per the structure defined in AGENTS.md. `About.tsx`, `Skills.tsx`, `Contact.tsx`, and `AnimatedBackground.tsx` are still 0-byte placeholder files awaiting implementation — check file contents before assuming a section exists.
- **`components/ui/`** is the low-level primitives layer: `button.tsx` (CVA variants + Radix `Slot` for `asChild`), `falling-pattern.tsx` (the animated background used behind Hero — the site's core visual identity per AGENTS.md), `animated-theme-toggle.tsx`, `tilt-card.tsx` (client component providing a mouse-follow 3D tilt, ±5° max rotation + slight hover scale; wraps the image container in `ProjectCard`, nothing else).
- **`data/projects.ts`** drives the Projects section: each `Project` has `title`, `slug`, `description`, `stack` (tech name strings), `icon` (Lucide fallback glyph), optional `image` (path under `public/projects/`), and `href` (live deploy link, opened via `target="_blank"`). `data/tech-icons.ts` maps each `stack` string to a brand icon + color (mostly `react-icons/si`; OpenAI uses `react-icons/bs`'s `BsOpenai` since `simple-icons` dropped the OpenAI mark in v16.0.0 for trademark reasons). `data/skills.ts` referenced in AGENTS.md does not exist yet.
- **`public/projects/`** holds project screenshots referenced by `data/projects.ts`. When swapping a screenshot, change the filename (e.g. bump a `-v2`/`-v3` suffix) rather than overwriting the same path — Next/browser caching otherwise serves the stale image at that URL.
- **`lib/utils.ts`** exports `cn()` (clsx + tailwind-merge) — use this for all conditional/merged className logic instead of manual string concatenation.
- Client-side interactivity (scroll listeners, framer-motion, state) requires `"use client"` at the top of the file, as in `Navbar.tsx` and `tilt-card.tsx`.
- Known bug (per AGENTS.md, still unresolved): `Navbar.tsx` has no collapsed/mobile nav pattern — logo and links collide below ~640px.
