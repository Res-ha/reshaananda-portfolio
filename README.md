# Resha Ananda Rahman — Portofolio

Website portofolio pribadi **Resha Ananda Rahman** — IT support specialist & web developer berbasis di Palangka Raya, Kalimantan Tengah. Estetika **Spotlight**: zinc neutrals, aksen teal, font Geist, full light/dark mode, dan dukungan dua bahasa (EN/ID).

Dibangun dengan [TanStack Start](https://tanstack.com/start) (file-based routing + SSR), React 19, dan Tailwind CSS v4.

**Live app**: https://reshaananda-portfolio.vercel.app

## Halaman

| Route | Deskripsi |
|---|---|
| `/` | Hero (foto + nama), photo collage, Selected Projects, preview Blog, Skills, Work Experience + Download CV, kontak |
| `/about` | Profil lengkap ala Magic Portfolio: bio, riwayat kerja, tools, sosial |
| `/blog` | Daftar tulisan (EN/ID); `/blog/$slug` untuk detail |
| `/projects` | Card grid proyek; `/projects/$slug` untuk detail (Overview, Tech Stack, Features, Challenges & Solutions, Outcome) |
| `/gallery` | Grid foto |

## Dokumentasi

- [PRD.md](./PRD.md) — Product Requirements Document (kebutuhan, KPI, spesifikasi, roadmap).
- [DESIGN.md](./DESIGN.md) — Design system: warna, tipografi, komponen, motion, aksesibilitas.

## Tech Stack

- **Framework:** TanStack Start + TanStack Router (SSR, file-based routing)
- **UI:** React 19 · Tailwind CSS v4 · lucide-react · Geist Variable
- **Package manager:** [npm](https://www.npmjs.com)
- **Konten:** file typed di `src/data/` (profile, projects, posts, experience) — bilingual EN/ID

## Struktur Folder

```
public/                 Aset statis: favicon.svg, favicon.ico, cv-resha-ananda-rahman.pdf
src/
  routes/               Route file-based (index, about, blog, projects, gallery, __root)
  components/           Komponen UI (SiteNav, SiteFooter, PhotoCollage, LanguageToggle, dll.)
  components/motion/    FadeIn & Stagger (IntersectionObserver)
  data/                 Konten terpusat bilingual (profile, projects, posts, experience)
  assets/               Gambar (portrait.jpg, collage-*.jpg)
  lib/                  Utilitas, tema, i18n (i18n.ts, LanguageProvider.tsx)
```

## Menjalankan Lokal

```sh
git clone <this-repository-url>
cd reshaananda-portfolio
npm install
npm run dev        # dev server
npm run build      # production build (SSR)
npm run preview    # preview build
npm run lint       # eslint
```

## Build dengan Lovable

Dikembangkan dengan [Lovable](https://lovable.dev). Lanjutkan di [Lovable editor](https://lovable.dev/projects/00dddc2b-b90c-4539-a362-362ef631a5cd).

- **Ship faster:** deskripsikan fitur, Lovable mengurus kodenya.
- **Stay in sync:** perubahan di Lovable ter-commit langsung ke repositori.
- **Full ownership:** kode milik Anda; push ke `main` di GitHub dan perubahan sinkron kembali ke Lovable.

## Lisensi

© 2026 Resha Ananda Rahman. All rights reserved.
