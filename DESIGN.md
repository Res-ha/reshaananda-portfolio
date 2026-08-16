# DESIGN.md — Design System Portofolio Resha Ananda Rahman

> Referensi desain resmi website portofolio **Resha Ananda Rahman**.
> Bersumber dari `.lovable/plan/spotlight-style-portfolio-resha-ananda-rahman-2026-08-15.md` dan kondisi implementasi terkini.
> Stack visual: Tailwind CSS v4 · Font: Geist Variable · Accent: Teal · Neutrals: Zinc

---

## 1. Filosofi & Vibe

- **Estetika:** Spotlight by Tailwind UI — craftsmanship tinggi, clean, editorial, minimalis.
- **Layout:** Content-first, white space luas, 2-kolom asimetris di desktop.
- **Mode:** Light & Dark wajib, transisi `transition-colors duration-300`.
- **Bahasa:** Home, About, & Projects dalam Bahasa Inggris; Blog dalam Bahasa Indonesia santai — pemisahan disengaja.

## 2. Palet Warna & Tokens

Sistem warna Zinc (netral) + Teal (aksen). Tokens terdefinisi di `src/styles.css` (`@theme` + `:root` + `.dark`).

### Light Mode (Default)

| Role | Value |
|---|---|
| Background utama | `zinc-50` `#FAFAFA` |
| Surface / card | `white` `#FFFFFF` |
| Teks utama | `zinc-900` `#18181B` |
| Teks sekunder / caption | `zinc-600` `#52525B` |
| Border / ring halus | `zinc-900/5` |
| Link & label (aksen) | `teal-700` `#0F766E` (kontras WCAG AA) |
| Tombol primer | `bg-teal-700` + teks `white` |

### Dark Mode

| Role | Value |
|---|---|
| Background utama | `zinc-900` `#18181B` |
| Surface / card | `zinc-800/50` + `backdrop-blur` |
| Teks utama | `zinc-100` `#F4F4F5` |
| Teks sekunder | `zinc-400` `#A1A1AA` |
| Border | `white/10` |
| Link & label (aksen) | `teal-400` `#2DD4BF` |
| Tombol primer | `bg-teal-500` + teks `zinc-950` |

> **Aturan kontras:** hindari `text-teal-600`, `text-zinc-400`, `text-zinc-500` sebagai teks statis di background terang (gagal kontras AA).

## 3. Tipografi (Geist Variable)

| Elemen | Ukuran | Weight | Tracking |
|---|---|---|---|
| Display / Hero | `text-4xl`–`text-5xl` | Bold | `tracking-tight` |
| Section heading | `text-2xl`–`text-3xl` | SemiBold | `tracking-tight` |
| Card title | `text-base`–`text-lg` | Medium/SemiBold | normal |
| Body | `text-base` | Regular | `leading-relaxed` |
| Caption / meta | `text-xs`–`text-sm` | Regular/Medium | normal |

## 4. Komponen Inti

### A. Pill Navbar (Compact, tanpa Home)
- Pill melayang di tengah atas (`rounded-full`, `w-fit`), `bg-white/90` / `dark:bg-zinc-800/90`, `backdrop-blur-md`, `ring-1 ring-zinc-900/5`, `shadow-lg shadow-zinc-800/5`.
- **Menu:** About, Project, Blog, Gallery (Home dihapus). Aktif = `aria-current="page"` + teks teal.
- **Theme Toggle terpisah** dari pill — tombol melayang `absolute right-4`.
- **Avatar kondisional:** Home → tidak tampil (pindah ke Hero); non-Home → avatar + nama di `absolute left-4`, klik ke `/`.
- Hamburger dropdown di mobile (`md:hidden`).

### B. Hero & Photo Collage
- Hero: portrait bulat, headline besar, bio ≤ 20 kata, ikon sosial.
- Collage: 5 foto `aspect-9/10`, rotasi artistik `+2, -2, +1, +3, -2` deg; card 4–5 `hidden sm:block`.
- Hover: foto melurus (`rotate-0`) + membesar (`scale-105`) + naik `z-10`.
- Float: animasi `float-soft` 6s ease-in-out, stagger 400ms; mati saat `prefers-reduced-motion`.
- Mobile: scroll horizontal `snap-x snap-mandatory`.

### C. Grid Konten Home (2 Kolom)
- Kiri `lg:col-span-7`: Selected Projects (4 item) → Tulisan terbaru (3) + link "Semua tulisan" → Skills.
- Kanan `lg:col-span-5`: Work Experience card (tombol Download CV) + Contact card.

### D. About (ala Magic Portfolio)
- Kiri sticky `lg:col-span-4`: portrait, role, lokasi (ikon MapPin), tag bahasa.
- Kanan `lg:col-span-8` (max-w 2xl): nama → headline → sosial → bio → **Work** timeline → **Tools I reach for**.

### E. Skill Badges
- Pill kecil: `bg-zinc-100`/`bg-zinc-800`, teks `zinc-700`/`zinc-300`.

### F. Project Tiles (`/projects`)
- Monokrom: avatar inisial `bg-zinc-900 text-white` (dark: `bg-zinc-100 text-zinc-900`).
- Hover: `-translate-y-1` + shadow naik + judul teal. Meta `domain · year`; indikator "Case study".

### G. Footer
- Navigasi sama dengan navbar (About, Project, Blog, Gallery).
- Copyright: `© 2026 Resha Ananda Rahman. All rights reserved.`

### H. Branding Tab Browser
- Favicon: `public/favicon.svg` — rounded square `teal-700` + teks putih tebal "RAR" (+ fallback `favicon.ico`).

## 5. Micro-Interactions & Motion

1. Card hover: judul → teal; panah → `translate-x-1`; kartu proyek → `-translate-y-1`.
2. Social hover: **ikon menjadi putih `#FFF`** (`hover:bg-teal-700 hover:text-white`; dark `dark:hover:bg-teal-600 dark:hover:text-white`) + glow `shadow-teal-700/20`. Efek ini **terisolasi** dari hover teal menu navigasi.
3. Theme transition: `transition-colors duration-300` global.
4. Reveal on scroll: `FadeIn` + `StaggerContainer` (IntersectionObserver).
5. Reduced motion: semua animasi mati via aturan global di `styles.css`.

## 6. Responsive & Breakpoints

- **Mobile (< 640px):** single column; collage scroll horizontal; hamburger.
- **Tablet (640–1024px):** grid menyesuaikan (`px-6`); collage menampilkan semua foto (`sm:justify-center sm:overflow-visible`).
- **Desktop (> 1024px):** container `max-w-7xl`; grid `lg:grid-cols-12`; gap `gap-y-20 lg:gap-x-12`.
- Tap target minimal 44px.

## 7. Aksesibilitas (WCAG AA)

- Kontras teks ≥ 4.5:1; link `teal-700` (light) / `teal-400` (dark); caption `zinc-600`/`zinc-400`.
- Focus: `:focus-visible` outline 2px `--color-ring` (teal).
- ARIA: `aria-current="page"`, `aria-invalid` + `aria-describedby` di form, `role="status"`/`role="alert"`.
- Heading berurutan (satu `h1` per halaman), alt text jujur.

## 8. Tokens CSS (src/styles.css)

- `@theme inline`: `--color-background`, `--color-foreground`, `--color-primary` (teal), `--color-muted-foreground`, dst.
- Utilitas custom: `@utility float-soft`.
- Dark variant: `@custom-variant dark (&:is(.dark *))`.
