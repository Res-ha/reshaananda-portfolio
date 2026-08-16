# Spotlight-style Portfolio — Resha Ananda Rahman

A clean, editorial personal site in the Spotlight aesthetic: Zinc neutrals, Teal accent, Inter, generous white space, full light/dark mode.

## Pages

- `/` — Home: hero (headline, short English bio, social icon buttons), rotated 5-photo collage strip, then the 2-column grid: left = project feed + 3 latest blog previews + skills pills; right = Work Experience card (with Download CV) + Contact card.
- `/about` — Longer English bio, portrait, social links.
- `/projects` — Monochrome project tiles with initial avatars, domain/year meta, hover lift.
- `/blog` — Indonesian post list; `/blog/$slug` for each post.
- `/gallery` — Photo grid with light hover motion.

All content is realistic placeholder content (bio, 5–6 projects, 3–4 Indonesian blog posts, work history) stored in typed files under `src/data/` so it is easy to swap later.

## Shared chrome

- Floating pill navbar: centered, `rounded-full`, blurred translucent background, subtle ring + shadow. Links Home / About / Blog / Project / Gallery with `aria-current="page"` and teal active state. Avatar+name link appears at left on every page except Home. Live clock on the right (hidden under 420px), theme toggle button, hamburger dropdown on mobile.
- Footer with copyright and nav repeat.
- Theme toggle persists to localStorage, applies `.dark` class, no hydration flash.

## Design system

- Tokens rewritten in `src/styles.css`: Zinc-based background/surface/text tokens plus teal accent tokens for both modes, per the spec's exact values (light links `teal-700`, dark `teal-400`, captions `zinc-600` / `zinc-400`).
- Inter loaded via `<link>` in `__root.tsx`, exposed as a `--font-*` theme token.
- Typography scale: hero `text-4xl`–`text-5xl` bold tracking-tight; sections `text-2xl`–`text-3xl` semibold; card titles `text-base`/`text-lg`; body 16px relaxed; captions `text-xs`–`text-sm`.
- Global `transition-colors duration-300` on themed surfaces.

## Motion

- Small motion primitives (`FadeIn`, `StaggerContainer`, `StaggerItem`) built on CSS/IntersectionObserver — no extra dependency.
- Collage: per-card rotations (+2, -2, +1, +3, -2 deg), hover straightens to `rotate-0` with `scale-105` and raised z-index; gentle staggered floating loop.
- Card hover: title turns teal, arrow shifts `translate-x-1`. Social buttons get teal fill + soft glow.
- Every animation disabled under `prefers-reduced-motion`.

## Contact form

Email + message inputs with inline validation (`aria-invalid`, `aria-describedby`) and idle/sending/success states announced via `role="status"` / `role="alert"`. Submitting opens the user's mail client via a prefilled `mailto:` link — no backend. A line below reads "Responses usually within 24 hours." with a direct email link.

## Responsive & accessibility

- Mobile single column; collage becomes `snap-x` horizontal scroll with cards 4–5 hidden under `sm`; hamburger nav.
- Desktop `max-w-7xl`, `lg:grid-cols-12` split 7/5, `gap-y-20 lg:gap-x-12`.
- Ordered headings (single `h1` per page), honest alt text, teal focus-visible rings on all interactive elements, 44px minimum tap targets.

## Technical notes

- TanStack Start file routes (no Next.js APIs): `index.tsx`, `about.tsx`, `projects.tsx`, `blog.index.tsx`, `blog.$slug.tsx`, `gallery.tsx`; each gets its own `head()` with unique title/description/OG tags.
- Images generated as project assets and imported directly; plain `<img>` with explicit aspect ratios.
- Components under `src/components/` (`SiteNav`, `Hero`, `PhotoCollage`, `ProjectCard`, `SkillBadges`, `ExperienceCard`, `ContactCard`, `motion/`).
