# Usman Junaid — Portfolio

A premium, interactive 3D personal portfolio spanning esports (Matrix Esports),
cybersecurity, and Amazon / e-commerce.

**Status: Feature-complete, personalized, and refined** — every section
is built with your real information (About, Matrix, Cybersecurity,
Amazon/E-Commerce, Journey, Contact). A cross-section consistency pass
(Phase 11) aligned the Skills section with the more specific real data
established in later phases. Projects and Achievements remain honestly
empty — no real entries have been provided for either yet. See
[Build phases](#build-phases) below.

---

## Running locally

Requires **Node.js 20.9+**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build locally
npm run lint       # ESLint
npm run typecheck  # TypeScript, no emit
```

## Editing content

Almost everything visible on the site is driven by `/data/site.config.ts`
(name, bio, socials, email, nav, CTAs). Update that file to change copy and
links across the whole site — no need to touch components. As later phases
add richer sections (Matrix Esports, Cybersecurity, Skills, Projects, etc.),
each will get its own typed file in `/data`.

**Before sending this site to anyone real** (a sponsor, recruiter, client),
check [`PLACEHOLDER_CONTENT.md`](./PLACEHOLDER_CONTENT.md) — it lists every
placeholder value that still needs your real information.

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** (CSS-first theme, see `app/globals.css`)
- **React Three Fiber** / **Three.js** — the hero's 3D composition: a
  central core, three orbiting pillars (esports / cybersecurity /
  e-commerce, distinguished by shape, not color), and a sparse particle
  field, with cursor parallax and scroll-linked camera movement. Fully
  lazy-loaded and gated by a device-tier check (see below).
- **GSAP** (+ ScrollTrigger) — scroll-driven animation
- **Framer Motion** — component-level micro-interactions
- **Lucide** — icons
- **Zustand** — lightweight, non-reactive bridge from GSAP ScrollTrigger to
  the R3F render loop (`lib/hero-scroll-store.ts`)

Fonts (Space Grotesk, Inter, JetBrains Mono) are **self-hosted** via
`@fontsource-variable/*` rather than `next/font/google`, so the site has no
runtime dependency on Google Fonts.

## Project structure

```
app/                  Routes, layout, metadata, SEO files
components/
  3d/                 R3F scene, device-tier gating, static fallback
  ui/                 Reusable primitives (GlassCard, Badge, SectionHeading…)
  navigation/         Navbar, mobile menu, scroll progress, footer
  sections/           One component per page section
  projects/           Project card/modal (Phase 4)
data/                 Typed content — the single source of truth for copy
lib/                  Hooks and utilities (device tier, reduced motion, gsap)
types/                Shared TypeScript interfaces for /data
```

## Design system

- **Colors** — near-black base (`--color-bg: #08090b`), warm-white text, one
  restrained accent (`--color-accent: #34e5a1`) used only for small
  deliberate moments: thin lines, dots, focus states, glow. Never large
  fills or blocks of accent-colored text.
- **Type** — Space Grotesk (display), Inter (body), JetBrains Mono (tags,
  labels, data — the "technical" voice).
- **Glass** — used sparingly: nav bar, the hero's 3D panel, stat/skill
  chips. Most of the page stays flat.
- All tokens live in `app/globals.css` under `@theme inline`.

## Accessibility & performance baked in

- Skip-to-content link, visible focus rings, keyboard-navigable nav + mobile
  menu with focus handling.
- `prefers-reduced-motion` is respected globally (GSAP, Framer Motion, CSS,
  and the 3D scene all check it).
- The 3D hero scene is code-split (`next/dynamic`, `ssr: false`) and gated
  by a device-tier check — low-tier devices and reduced-motion get a static
  CSS fallback instead of WebGL.
- All routes are statically prerendered.

## Build phases

1. ✅ **Foundation** — project setup, design system, navigation, section
   shells, SEO/meta foundation.
2. ✅ **Hero 3D experience** — full composition (core + 3 orbiting pillars +
   particle field), cursor parallax, scroll-linked camera, tiered
   device fallback.
3. ✅ **About / personal brand** — nine-domain focus grid, centralized
   stat cards (real facts and counts only — unverified metrics render as
   explicit "add your number" placeholders, never fabricated), scroll
   reveal + count-up animation.
4. ✅ **Matrix Esports** — the primary case study: pillars grid, stats
   (same real-facts-or-explicit-placeholder rule as About), an abstract
   animated tournament-bracket visual, events/sponsors panels (honest
   empty states — no invented history), and Matrix's own social links.
5. ✅ **Cybersecurity** — interactive network-topology diagram (hover/
   focus/click, keyboard accessible), a full skills-and-learning-areas
   grid (10 areas, all framed as learning — never claimed
   certifications or professional pentesting experience), and an honest
   empty projects panel.
6. ✅ **Amazon & E-Commerce** — a six-stage research pipeline (product
   hunting through listing research) styled as a BI-dashboard panel, a
   toolkit grid (Excel, Helium 10, SellerSprite), and stats limited to
   real facts and self-evident counts — no invented revenue, sales, or
   client figures.
7. ✅ **Projects** — reusable card component (generated placeholder
   visual when no image is set — never stock imagery), category
   filtering with animated transitions, honest empty state (`projects:
   []` until real ones exist).
8. ✅ **Skills** — four category clusters of floating tags, no
   percentage bars or invented proficiency scores.
9. ✅ **Journey** — cinematic vertical timeline with a scroll-scrubbed
   accent line; every stage honestly labeled (education / personal
   project / founder / experience / ongoing learning / looking ahead)
   so nothing reads as formal employment it isn't.
10. ✅ **Achievements** — ready to group by category; honest empty state
    until real achievements are confirmed.
11. ✅ **Final CTA, Contact & Footer** — a cinematic closing CTA (CSS-only
    glow, parallax, and particles — no additional WebGL context), a
    contact section with direct-contact methods (placeholders clearly
    marked, never hidden or faked) and a fully validated, accessible
    contact form with real loading/success/error states, and an
    expanded footer (brand, nav, socials, dynamic-year copyright). The
    form is honestly a demo — no backend is connected, and it says so
    rather than pretending a message was sent.
12. Final cross-browser polish and a real backend for the contact form
    whenever one exists.
