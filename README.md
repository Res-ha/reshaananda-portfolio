# Resha Ananda Rahman — Portfolio

Portfolio pribadi Resha Ananda Rahman, seorang IT support specialist dan web developer dari Palangka Raya, Kalimantan Tengah.

Website ini menampilkan profil, pengalaman kerja, proyek, tulisan teknis, galeri, CV, dan kontak dalam satu tempat.

**Live website:** [reshaananda-portfolio.vercel.app](https://reshaananda-portfolio.vercel.app)

## Fitur Utama

- Bilingual English / Bahasa Indonesia
- Light dan dark mode dengan preferensi tersimpan
- Server-side rendering menggunakan TanStack Start
- Portfolio proyek dengan halaman detail
- Blog dengan URL berbasis slug
- Galeri foto responsif
- Download CV dalam format PDF
- Form kontak berbasis `mailto:`
- Navigasi keyboard dan focus state yang accessible
- Konten terpusat dan typed di `src/data/`

## Halaman

| Route             | Isi                                                                             |
| ----------------- | ------------------------------------------------------------------------------- |
| `/`               | Hero, proyek pilihan, tulisan terbaru, skills, pengalaman kerja, CV, dan kontak |
| `/about`          | Profil, bio, pengalaman, pendidikan, tools, dan sosial                          |
| `/projects`       | Daftar proyek dalam bentuk card grid                                            |
| `/projects/$slug` | Detail proyek: overview, fitur, tech stack, tantangan, dan outcome              |
| `/blog`           | Daftar tulisan                                                                  |
| `/blog/$slug`     | Detail tulisan                                                                  |
| `/gallery`        | Galeri foto                                                                     |

## Tech Stack

- [TanStack Start](https://tanstack.com/start) dan TanStack Router
- React 19
- Tailwind CSS v4
- TypeScript
- Geist Variable
- lucide-react
- npm

## Struktur Folder

```text
src/
├── assets/       Gambar lokal seperti portrait dan collage
├── components/
│   ├── layout/   Container, SiteNav, SiteFooter
│   ├── media/    PhotoCollage
│   ├── motion/   FadeIn dan Stagger
│   └── ui/       Card, form, toggle, project, dan social components
├── data/         Sumber konten typed: profile, projects, posts, experience
├── lib/          i18n, theme, utility, dan error handling
├── routes/       Route TanStack Router
├── router.tsx    Konfigurasi router
├── server.ts     Server entry
└── styles.css    Design tokens dan global styles

public/
├── cv-resha-ananda-rahman.pdf
├── favicon.svg
└── projects/
```

## Menjalankan Secara Lokal

### Persyaratan

- Node.js versi LTS
- npm

### Instalasi

```bash
git clone https://github.com/Res-ha/reshaananda-portfolio.git
cd reshaananda-portfolio
npm install
```

### Development

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) atau URL yang ditampilkan oleh Vite.

### Validasi dan Production Build

```bash
npm run lint       # Memeriksa kualitas kode
npm run build      # Membuat production build
npm run preview    # Menjalankan hasil build secara lokal
npm run format     # Memformat source code dengan Prettier
```

## Mengelola Konten

Konten portfolio dikelola melalui file typed di `src/data/`:

- `profile.ts` — identitas, bio, skills, sosial, dan CV
- `projects.ts` — daftar dan detail proyek
- `posts.ts` — tulisan blog bilingual
- `experience.ts` — riwayat pengalaman kerja

Untuk menambahkan atau memperbarui konten, edit file data terkait tanpa mengubah komponen presentasi.

## Dokumentasi Proyek

- [PRD.md](./PRD.md) — kebutuhan produk, fitur, user flow, arsitektur, dan batasan teknis
- [DESIGN.md](./DESIGN.md) — design system, tokens, layout, motion, aksesibilitas, dan QA checklist

## Deployment

Build menghasilkan output frontend dan SSR yang dapat digunakan pada platform yang mendukung TanStack Start/Nitro.

Sebelum deployment, jalankan:

```bash
npm run lint
npm run build
```

## Lisensi

© 2026 Resha Ananda Rahman. All rights reserved.
