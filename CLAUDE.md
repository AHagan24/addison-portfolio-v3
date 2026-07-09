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

- **Next.js 16 App Router**, single route. `app/layout.tsx` loads the Inter font via `next/font/google` (exposed as CSS var `--font-inter`) and imports `app/globals.css`. `app/page.tsx` composes the full page as a fixed stack of sections separated by `SectionDivider`: `Navbar`, `Hero`, `Projects`, `About`, `Skills`, `Contact`, `Footer`. Section order lives only in `page.tsx` — there's no config-driven layout.
- **Tailwind v4**, configured entirely in CSS (`app/globals.css`) via `@theme inline` — there is no `tailwind.config.ts`. Design tokens (`--background`, `--foreground`, `--primary`) live there; keep new tokens consistent with the palette in AGENTS.md rather than hardcoding one-off colors in components.
- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/components/Hero`, `@/lib/utils`.
- **`components/`** holds page sections (`Navbar.tsx`, `Hero.tsx`, `Projects.tsx`, `ProjectCard.tsx`, `About.tsx`, `Skills.tsx`, `Contact.tsx`, `Footer.tsx`) per the structure defined in AGENTS.md. `AnimatedBackground.tsx` is still a 0-byte placeholder — superseded by `components/ui/falling-pattern.tsx`, which is what's actually wired into `Hero`. Check file contents before assuming a stub has been implemented.
- **`components/ui/`** is the low-level primitives layer: `button.tsx` (CVA variants + Radix `Slot` for `asChild`), `falling-pattern.tsx` (the animated background used behind Hero — the site's core visual identity per AGENTS.md), `section-divider.tsx` (the hairline `<hr>` rendered between every section in `page.tsx`), `tilt-card.tsx` (client component providing a mouse-follow 3D tilt, ±5° max rotation + slight hover scale; wraps the image container in `ProjectCard`, nothing else), `animated-theme-toggle.tsx` (built but **not currently rendered anywhere** — the site has no live light/dark toggle despite this component existing).
- **`data/projects.ts`** drives the Projects section: each `Project` has `title`, `slug`, `description`, `stack` (tech name strings), `icon` (Lucide fallback glyph), optional `image` (path under `public/projects/`), and `href` (live deploy link, opened via `target="_blank"`). **`data/skills.ts`** drives the Skills section: `skillCategories` groups skill-name strings under a `label` (Frontend / Backend / AI & APIs / Tools). **`data/tech-icons.ts`** maps stack/skill name strings (used by both `data/projects.ts` and `data/skills.ts`) to a brand icon + color — mostly `react-icons/si`; OpenAI uses `react-icons/bs`'s `BsOpenai` since `simple-icons` dropped the OpenAI mark in v16.0.0 for trademark reasons. A name with no entry in `tech-icons.ts` renders without an icon (Skills) or falls back to `Code2` (ProjectCard) — check this file before adding a new stack/skill string.
- **`public/projects/`** holds project screenshots referenced by `data/projects.ts`. When swapping a screenshot, change the filename (e.g. bump a `-v2`/`-v3` suffix) rather than overwriting the same path — Next/browser caching otherwise serves the stale image at that URL. `public/logo.png` is the navbar wordmark (referenced directly by `Navbar.tsx`, not part of the projects data).
- **Favicon** is generated from a source PNG, not maintained by hand: `app/icon.png` (Next's file-based favicon convention) and `app/favicon.ico` (legacy multi-size ICO for older browser tab handling) must both be regenerated together when the logo changes. Any PNG frame embedded in `favicon.ico` **must be RGBA** — Next's Rust image decoder throws `"The PNG is not in RGBA format!"` on RGB-only frames, so always pass through `sharp(...).ensureAlpha()` when rebuilding either file from a flat/opaque source image.
- **`lib/utils.ts`** exports `cn()` (clsx + tailwind-merge) — use this for all conditional/merged className logic instead of manual string concatenation.
- Client-side interactivity (scroll listeners, framer-motion, state) requires `"use client"` at the top of the file, as in `Navbar.tsx` and `tilt-card.tsx`.
- `Navbar.tsx` already implements the collapsed/mobile nav pattern (hamburger menu below `sm:`, active-section tracking via `IntersectionObserver`) — the mobile-nav gap noted in AGENTS.md has been resolved; don't re-flag it as an open bug.
