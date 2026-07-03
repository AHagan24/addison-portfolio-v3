<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# AGENTS.md

# Addison Portfolio

A recruiter-focused portfolio built with Next.js, TypeScript, and Tailwind CSS.

The goal is simple:

- Show technical ability.
- Showcase real projects.
- Feel premium and memorable.
- Be easy to maintain.
- Avoid generic "AI portfolio template" aesthetics.

---

# Project Philosophy

This portfolio should feel like a product, not a resume page.

Every section should answer one of these questions:

1. Who are you?
2. What can you build?
3. Why should someone hire you?
4. How can they contact you?

If a section doesn't support one of these goals, don't add it.

---

# Design Principles

## Keep It Minimal

- Prioritize whitespace.
- Avoid unnecessary sections.
- Avoid visual clutter.
- Prefer one strong idea over ten average ideas.

---

## Premium, Not Flashy

The background animation is the visual identity.

Everything else should support it.

Do not add:

- excessive gradients
- glowing neon effects
- glassmorphism everywhere
- spinning objects
- distracting animations
- unnecessary particles
- random 3D elements

Animations should feel intentional and subtle.

---

## Color System

### Background

```css
#000000
#050505
#0A0A0A
#111111
```

### Text

```css
#FFFFFF
#E5E5E5
#A3A3A3
#737373
```

### Borders

```css
rgba(255,255,255,0.08)
rgba(255,255,255,0.12)
```

### Accent

One accent color maximum.

Used only for:

- buttons
- links
- active states
- tiny highlights

Do not introduce multiple accent colors.

---

# Lighting

Think:

- dark room
- high-end monitor
- subtle reflections

Not:

- cyberpunk
- gaming RGB
- neon everywhere

Shadows should be soft.

Cards should barely lift off the background.

Use contrast through spacing and typography more than effects.

---

# Typography

The site should feel like a software product.

Recommended:

- Inter
- Geist
- IBM Plex Sans

Optional monospace accents:

- Geist Mono
- JetBrains Mono

Use monospace sparingly.

---

# Layout Rules

## Max Width

```css
1280px
```

## Section Padding

```css
padding-top: 8rem;
padding-bottom: 8rem;
```

## Content Width

```css
max-width: 1200px;
margin: auto;
padding-left: 2rem;
padding-right: 2rem;
```

---

# Architecture

```txt
app/
├── layout.tsx
├── page.tsx
├── globals.css

components/
├── Navbar.tsx
├── Hero.tsx
├── Projects.tsx
├── ProjectCard.tsx
├── About.tsx
├── Skills.tsx
├── Contact.tsx
├── AnimatedBackground.tsx
├── Container.tsx
├── Section.tsx
└── Button.tsx

data/
├── projects.ts
└── skills.ts
```

---

# Sections

## Hero

Purpose:
Introduce Addison immediately.

Contains:

- Name
- Title
- Short description
- CTA buttons
- Background animation

Must fit entirely above the fold.

---

## Projects

Most important section.

Projects:

1. Skinstric AI Internship
2. Ultraverse NFT Marketplace
3. CodeCritic AI

Project cards should prioritize:

- screenshot
- short description
- stack
- links

Recruiters should understand the project within 10 seconds.

---

## About

Keep short.

One or two paragraphs maximum.

---

## Skills

Organized by category:

- Frontend
- Backend
- Tools
- AI / APIs

Avoid giant walls of badges.

---

## Contact

Simple.

No forms.

Include:

- Email
- GitHub
- LinkedIn
- Resume

---

# Responsiveness

Desktop first.

Then:

- laptop
- tablet
- mobile

Nothing should break under:

```css
320px
```

No horizontal scrolling.

---

# Performance

Aim for:

- Lighthouse 95+
- Minimal dependencies
- Fast page loads
- Optimized images
- No unnecessary libraries

---

# Animations

Animations should:

- support the experience
- never become the experience

Preferred:

- fade
- slight translate
- subtle scale
- hover states

Avoid:

- bounce
- large parallax
- excessive spring animations

---

# Code Standards

- TypeScript everywhere.
- Strict typing.
- Reusable components.
- No duplicated UI.
- Keep components small.
- Prefer composition over massive files.

---

# Definition of Done

A feature is complete when:

- responsive
- accessible
- visually polished
- no console errors
- no TypeScript errors
- no layout shifts
- passes build
- feels intentional

---

# Final Goal

A recruiter should open this portfolio and think:

"This person builds polished software products."

Not:

"This looks like another AI-generated developer portfolio."

<!-- END:nextjs-agent-rules -->
