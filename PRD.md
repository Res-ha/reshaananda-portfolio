# PRD: Portfolio Website — Resha Ananda Rahman

> Product Requirements Document · v2.0 · 16 Agustus 2026
> Status: **Fase Implementasi** · Stack: TanStack Start + React 19 + Tailwind CSS v4

## Problem Statement

Sebagai developer web yang berdomisili di Palangka Raya, aku mau punya kehadiran daring terpadu yang menampilkan portofolio proyek, tulisan teknis, riwayat kerja, dan jalur kontak dalam satu tempat. Supaya klien dan rekan developer bisa menilai kemampuan dalam hitungan detik, menghubungi dengan mudah, dan tidak perlu menebak-nebak siapa aku. Dulu aku tidak punya halaman yang cepat, rapi, dan mudah dirawat — konten tersebar dan tampilan tidak konsisten. Sekarang aku mau halaman yang ringan (SSR), bisa dibaca dua bahasa (EN/ID), dan kontennya gampang diganti tanpa menyentuh kode komponen.

---

## Goals

- Menyajikan profil, proyek, tulisan, dan kontak dalam satu situs multi-route yang cepat dan rapi.
- Memberikan kesan profesional lewat estetika **Spotlight**: zinc neutrals + aksen teal, font Geist, light/dark mode.
- Mendukung dua bahasa (Bahasa Indonesia & English) di seluruh halaman dengan satu toggle.
- Menjaga konten (proyek, tulisan, pengalaman) dapat diperbarui tanpa mengubah komponen — cukup edit file di `src/data/`.
- Memastikan halaman ringan, aksesibel, dan bebas error konsol maupun tautan mati.

---

## Target Users

- **Klien / Calon Pemberi Kerja**: ingin melihat hasil kerja & CV, menilai profesionalisme, menghubungi via email.
- **Rekan Developer**: membaca tulisan teknis, melihat tech stack, terhubung lewat GitHub/LinkedIn.
- **HR / Perekrut**: mengunduh CV dalam PDF untuk arsip.
- **Pengunjung Umum**: menjelajah galeri dan memahami kepribadian pemilik lewat halaman About.

---

## User Stories

### 1. Pengunjung di Halaman Awal

**Story:** Sebagai pengunjung, aku mau melihat profil dan karya unggulan di halaman pertama supaya aku bisa menilai kemampuan dalam 5 detik.

**Acceptance:**
- Hero menampilkan foto profil bulat, headline, bio singkat, dan ikon sosial.
- Section "Selected projects" menampilkan proyek unggulan dengan badge tech stack.
- Section tulisan menampilkan posting terbaru dengan tautan ke daftar lengkap.
- Sidebar menampilkan kartu Work Experience (dengan tombol **Download CV**) dan kartu kontak.

### 2. Navigasi Tanpa Home

**Story:** Sebagai pengunjung, aku mau menu navigasi yang ringkas tanpa tautan Home supaya aku berpindah halaman lebih cepat.

**Acceptance:**
- Menu navbar: **About, Project, Blog, Gallery** (tanpa Home).
- Link aktif diberi `aria-current="page"` dan warna teal.
- Toggle tema dan toggle bahasa berdiri di kanan navbar.
- Di halaman non-Home, avatar + nama muncul di kiri (klik → kembali ke `/`).

### 3. Baca Situs dalam Bahasa Indonesia / English

**Story:** Sebagai pembaca berbahasa Indonesia atau tamu internasional, aku mau situs bisa dibaca dalam dua bahasa supaya aku nyaman memahami isinya.

**Acceptance:**
- Tombol **EN/ID** di navbar mengganti seluruh teks UI dan konten (nav, hero, blog, proyek, galeri, kontak).
- Pilihan bahasa tersimpan di `localStorage` dan bertahan setelah reload/pindah halaman.
- Atribut `lang` pada `<html>` ikut berubah mengikuti bahasa aktif.
- Default bahasa adalah English; pengguna bisa berpindah ke Bahasa Indonesia.

### 4. About ala Magic Portfolio

**Story:** Sebagai klien, aku mau melihat profil lengkap dengan riwayat kerja supaya aku percaya pada kredibilitas kandidat.

**Acceptance:**
- Kolom kiri sticky: portrait, role, lokasi (ikon MapPin), dan skill.
- Kolom kanan: nama, headline, ikon sosial, bio paragraf, section **Work** (timeline perusahaan + periode), section **Tools I reach for** (skill badges).

### 5. Unduh CV

**Story:** Sebagai HR, aku mau mengunduh CV dalam format PDF supaya aku bisa mengarsipkannya.

**Acceptance:**
- Tombol "Download CV" membuka `/cv-resha-ananda-rahman.pdf` (file di `public/`).
- File PDF valid dan berhasil ikut build.

### 6. Blog Dua Bahasa

**Story:** Sebagai pembaca, aku mau membaca tulisan lengkap dengan URL bersih dan isi tersedia dalam bahasa pilihanku supaya mudah dibagikan.

**Acceptance:**
- `/blog` menampilkan daftar tulisan; `/blog/$slug` menampilkan isi lengkap.
- Judul, ringkasan, dan isi tulisan tersedia dalam EN & ID.
- Slug tak dikenal → halaman 404 (tanpa crash).

### 7. Mode Light/Dark

**Story:** Sebagai pengguna malam, aku mau beralih tema yang tersimpan supaya aku tidak perlu mengatur ulang.

**Acceptance:**
- Toggle menyimpan pilihan ke `localStorage`; fallback `prefers-color-scheme`.
- Class `.dark` diterapkan via inline script → **tanpa flash (FOUC)**.

---

## Functional Requirements

- [x] **Hero & PhotoCollage**: foto profil bulat, headline, bio singkat, ikon sosial, dan kolase foto dengan animasi hover.
- [x] **Selected Projects**: grid proyek unggulan (1/2/3 kolom responsif) dengan meta tahun saja dan badge stack.
- [x] **Project Detail**: `/projects/$slug` menampilkan overview, tech stack, features, challenges & solutions, outcome.
- [x] **Blog**: daftar tulisan di `/blog` dan detail di `/blog/$slug`, konten EN/ID.
- [x] **Gallery**: grid foto di `/gallery`.
- [x] **About**: profil lengkap dengan riwayat kerja dan tools.
- [x] **Download CV**: tautan ke `public/cv-resha-ananda-rahman.pdf`.
- [x] **Kontak via mailto**: form kontak membuka email pengguna (tanpa backend).
- [x] **Theme Toggle**: light/dark dengan persistensi `localStorage` + inline script anti-FOUC.
- [x] **Language Toggle**: EN/ID seluruh situs dengan persistensi `localStorage` dan sinkron `lang` pada `<html>`.
- [x] **404 & Error Handler**: halaman 404 dan error UI di `__root.tsx`, teks diterjemahkan.

---

## Non-Functional Requirements

- **Performance**: Lighthouse Performance ≥ 90; FCP < 1,5 detik (emulasi 4G); render SSR + bundle kecil.
- **Accessibility**: semua teks lolos kontras WCAG AA (≥ 4.5:1) di light & dark mode; navigasi keyboard dan `aria-current`.
- **Reliability**: zero error konsol dan zero 404 pada semua tautan internal.
- **Maintainability**: konten di `src/data/` (typed, single source of truth); dokumen PRD, DESIGN, dan README sinkron.
- **Portability**: paket manager npm (lockfile `package-lock.json`); tidak ada dependensi `ui/*` shadcn yang tak terpakai.
- **Privacy**: tanpa backend, tanpa data pengguna tersimpan; semua link sosial `rel="noreferrer"`.

---

## Scope

### In Scope

1. Tujuh rute utama: `/`, `/about`, `/blog`, `/blog/$slug`, `/projects`, `/projects/$slug`, `/gallery`.
2. Hero, PhotoCollage, Selected Projects, preview Blog, Skills, Work Experience, dan Kontak di Home.
3. Bilingual (Bahasa Indonesia & English) dengan toggle di navbar.
4. Theme toggle light/dark tanpa FOUC.
5. Konten terpusat di `src/data/` (profile, projects, posts, experience).
6. CV PDF statis di `public/`.

### Out of Scope

1. Backend/API kontak — form memakai `mailto:` tanpa penyimpanan server.
2. CMS headless (mis. MDX) — konten dikelola lewat file `src/data/*`.
3. Login/autentikasi, payment, atau komentar blog.
4. Halaman "Articles" terpisah — tulisan ditangani lewat Blog.
5. Jam real-time di footer (LiveClock) — dihapus demi fokus performa.