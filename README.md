# Portfolio — Fresh Graduate Software Developer

A premium, minimal personal portfolio built with Next.js (App Router), TypeScript,
Tailwind CSS, shadcn/ui-style components, Framer Motion, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before you deploy — replace the placeholders

This project ships with realistic placeholder content so it's ready to run out
of the box. Swap these out with your real information:

1. **Name & bio** — `components/hero.tsx`, `components/about.tsx`, `app/layout.tsx` (metadata),
   and `components/navbar.tsx` (logo text).
2. **Portrait** — replace `public/portrait.svg` with a real photo (`.jpg`/`.png`/`.webp`)
   and update the `src` in `components/hero.tsx`.
3. **Projects** — edit the `projects` array in `components/projects.tsx`:
   - Replace `public/projects/project-*.svg` with real screenshots (recommended
     size ~1200×750, `.png`/`.jpg`/`.webp`).
   - Update `title`, `description`, `stack`, `features`, and `href` (your GitHub
     repo links) for each project.
4. **Contact links** — update email, LinkedIn, and Instagram in `components/contact.tsx`.
5. **Site metadata** — update the domain, title, and description in `app/layout.tsx`.

## Structure

```
app/
  layout.tsx      Root layout, fonts, SEO metadata
  page.tsx        Composes all sections
  globals.css     Base styles, focus states, reduced-motion support
components/
  navbar.tsx      Sticky nav with blur-on-scroll and mobile menu
  hero.tsx        Hero with intro + portrait
  about.tsx       Short professional intro + 3 pillars
  tech-stack.tsx  Categorized tech badge grid
  projects.tsx    Featured project cards
  contact.tsx     Contact channels
  footer.tsx      Copyright
  ui/             button.tsx, badge.tsx (shadcn-style primitives)
lib/
  utils.ts        `cn` class-merging helper
```

## Design notes

- Palette, spacing, and type scale follow a neutral, product-site aesthetic
  (inspired by Vercel / Linear / Apple / Raycast / Clerk) — no gradients,
  glassmorphism, or neon accents.
- Font: Inter, loaded via `next/font/google` (self-hosted, no layout shift).
- Motion: Framer Motion is used only for fade-up entrances, scroll reveals,
  and subtle hover scale/translate — respects `prefers-reduced-motion`.
- Accessible focus rings are enabled globally via `:focus-visible` in `globals.css`.

## Build for production

```bash
npm run build
npm run start
```
