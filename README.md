# Little Elara Steps — Website

Marketing website for **Little Elara Steps**, a specialized day care & pre-school in East Delhi
(inclusive care for every child, including children with ASD, ADHD and developmental delays).

Built to match the reference design: warm, professional, gently playful. Muted brand palette,
Chillax type, wavy section dividers, arched image frames and hand-drawn doodles.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** (design tokens in `src/app/globals.css`)
- **Framer Motion** (`motion/react`) for entrance & scroll reveals
- **GSAP ScrollTrigger** for the pinned scroll-stacking "Our Approach" section
- **@phosphor-icons/react** for icons (no lucide)
- **pnpm**, **Husky** + **lint-staged** + **Prettier** + **ESLint**

## Run it

```bash
pnpm install      # install dependencies
pnpm dev          # start dev server at http://localhost:3000
pnpm build        # production build
pnpm start        # run the production build
pnpm format       # format with Prettier
```

## Project structure

```
src/
  app/            layout.tsx, page.tsx, globals.css (tokens)
  components/
    layout/       Navbar, Footer, Logo, ProgressThread
    sections/     Hero, TrustBar, Services, About, Approach, Routine,
                  Progress, Testimonials, Gallery, Contact
    ui/           Button, Badge, SectionHeading, Wave, ImageSlot, Doodles, Icon
  lib/            constants.ts (all copy), motion.ts (variants), tints.ts
public/
  logo.png        your brand logo (used in nav + footer)
  images/         drop your real photos here
```

All site text lives in `src/lib/constants.ts` — edit copy there, not inside components.

## Images

Every photo is a labelled **placeholder slot** right now so you can see where each image goes.
To add a real photo, pass `src` to the `ImageSlot` (e.g. `src="/images/classroom.jpg"`).

## Before going live — needs real client info (search the code for `TODO(client)`)

- [ ] Real address, phone, email, opening hours (`src/lib/constants.ts` → `SITE`)
- [ ] Real photographs of the centre (Gallery, Hero, Services, About, Approach)
- [ ] Real daily routine timings (`ROUTINE`)
- [ ] Real, permission-given parent testimonials (`TESTIMONIALS`)
- [ ] Connect the contact form to email or a service like Formspree (`src/components/sections/Contact.tsx`)
- [ ] Replace `public/logo.png` if you want a different logo

> A simple single-file version of this site is kept in `legacy/standalone-index.html`.
