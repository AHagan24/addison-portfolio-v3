<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# AGENTS.md

# Addison Portfolio

A recruiter-focused portfolio built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

Goals: show technical ability, showcase real projects, feel premium and memorable, stay easy to maintain, avoid generic "AI portfolio template" aesthetics.

---

# Project Philosophy

This should feel like a product, not a resume page. Every section must answer one of:

1. Who are you?
2. What can you build?
3. Why should someone hire you?
4. How can they contact you?

If a section doesn't support one of these, don't add it.

---

# Design Principles

## Keep It Minimal

Prioritize whitespace. Avoid unnecessary sections and visual clutter. One strong idea beats ten average ones.

## Premium, Not Flashy

The falling-dot background (`components/ui/falling-pattern.tsx`) is the visual identity — everything else supports it.

Do not add: excessive gradients, glowing neon, glassmorphism, spinning objects, distracting animations, particles, random 3D elements. Animations should feel intentional and subtle.

## Color System

Tokens live in `app/globals.css` (Tailwind v4 `@theme inline` — there is no `tailwind.config.ts`):

- `--background: #050505`, `--foreground: #ededed`, `--primary: rgba(255,255,255,0.35)`

Reference palette to stay within:

```css
/* backgrounds */ #000000 #050505 #0A0A0A #111111
/* text */        #FFFFFF #E5E5E5 #A3A3A3 #737373
/* borders */     rgba(255,255,255,0.08) rgba(255,255,255,0.12)
```

One accent color maximum, used only for buttons, links, active states, tiny highlights. Never introduce a second accent.

## Lighting

Dark room, high-end monitor, subtle reflections — not cyberpunk or gaming RGB. Shadows soft; cards barely lift off the background. Prefer spacing/typography contrast over effects.

## Typography

Inter (current, via `next/font/google`), Geist, or IBM Plex Sans. Monospace (Geist Mono / JetBrains Mono) sparingly, for accents only.

---

# Layout Rules

- Max width: `1280px`
- Section padding: `padding-top/bottom: 8rem`
- Content width: `max-width: 1200px; margin: auto; padding-inline: 2rem`

---

# Architecture

```txt
app/
├── layout.tsx           # Inter font, metadata, globals.css
├── page.tsx             # composes section components
└── globals.css          # Tailwind v4 theme tokens

components/
├── Navbar.tsx             # done
├── Hero.tsx               # done
├── Projects.tsx           # stub
├── ProjectCard.tsx        # stub
├── About.tsx              # stub
├── Skills.tsx             # stub
├── Contact.tsx            # stub
├── AnimatedBackground.tsx # stub — superseded by ui/falling-pattern.tsx for now
└── ui/
    ├── button.tsx               # CVA variants + Radix Slot
    ├── falling-pattern.tsx      # animated background, the site's visual identity
    └── animated-theme-toggle.tsx

lib/
└── utils.ts             # cn() — clsx + tailwind-merge

data/                     # planned, not yet created
├── projects.ts
└── skills.ts
```

Path alias `@/*` → repo root.

---

# Sections

## Hero (done)

Name, title, short description, CTA buttons, background animation. Must fit entirely above the fold.

## Projects (not started)

Most important section. Projects: Skinstric AI Internship, Ultraverse NFT Marketplace, CodeCritic AI. Cards prioritize screenshot, short description, stack, links — understandable within 10 seconds.

## About (not started)

One or two paragraphs maximum.

## Skills (not started)

Grouped by Frontend / Backend / Tools / AI-APIs. Avoid giant badge walls.

## Contact (not started)

No forms. Just email, GitHub, LinkedIn, resume.

---

# Responsiveness

Desktop-first, then laptop → tablet → mobile. Nothing breaks under 320px. No horizontal scrolling.

Known bug: `Navbar.tsx` overlaps on mobile (logo and links collide below ~640px) — needs a collapsed/mobile nav pattern before it's done.

---

# Performance

Lighthouse 95+, minimal dependencies, fast loads, optimized images, no unnecessary libraries.

---

# Animations

Support the experience, never become it. Prefer fade, slight translate, subtle scale, hover states. Avoid bounce, large parallax, excessive spring animations.

---

# Code Standards

TypeScript everywhere, strict typing, reusable components, no duplicated UI, keep components small, prefer composition. Use `cn()` from `lib/utils.ts` for conditional classNames instead of manual string concatenation.

---

# Definition of Done

Responsive, accessible, visually polished, no console errors, no TypeScript errors, no layout shifts, passes build, feels intentional.

---

# Final Goal

A recruiter should think "this person builds polished software products" — not "this looks like another AI-generated developer portfolio."

<!-- END:nextjs-agent-rules -->
