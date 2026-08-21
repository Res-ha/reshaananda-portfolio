# DESIGN.md — Design System Portofolio Resha Ananda Rahman

> Referensi desain resmi website portofolio **Resha Ananda Rahman**.
> Bersumber dari `.lovable/plan/spotlight-style-portfolio-resha-ananda-rahman-2026-08-15.md` dan kondisi implementasi terkini.
> Stack visual: Tailwind CSS v4 · Font: Geist Variable · Accent: Teal · Neutrals: Zinc

---

## 1. Filosofi & Vibe

- **Estetika:** Spotlight by Tailwind UI — craftsmanship tinggi, clean, editorial, minimalis.
- **Layout:** Content-first, white space luas, 2-kolom asimetris di desktop.
- **Mode:** Light & Dark wajib, transisi `transition-colors duration-300`.
- **Bahasa:** UI dan seluruh konten portfolio tersedia dalam English dan Bahasa Indonesia. Mode Bahasa Indonesia boleh menggunakan gaya bahasa yang lebih natural dan santai pada artikel blog.

## 2. Palet Warna & Tokens

Sistem warna Zinc (netral) + Teal (aksen). Tokens terdefinisi di `src/styles.css` (`@theme` + `:root` + `.dark`).

### Light Mode (Default)

| Role                    | Value                                  |
| ----------------------- | -------------------------------------- |
| Background utama        | `zinc-50` `#FAFAFA`                    |
| Surface / card          | `white` `#FFFFFF`                      |
| Teks utama              | `zinc-900` `#18181B`                   |
| Teks sekunder / caption | `zinc-600` `#52525B`                   |
| Border / ring halus     | `zinc-900/5`                           |
| Link & label (aksen)    | `teal-700` `#0F766E` (kontras WCAG AA) |
| Tombol primer           | `bg-teal-700` + teks `white`           |

### Dark Mode

| Role                 | Value                           |
| -------------------- | ------------------------------- |
| Background utama     | `zinc-900` `#18181B`            |
| Surface / card       | `zinc-800/50` + `backdrop-blur` |
| Teks utama           | `zinc-100` `#F4F4F5`            |
| Teks sekunder        | `zinc-400` `#A1A1AA`            |
| Border               | `white/10`                      |
| Link & label (aksen) | `teal-400` `#2DD4BF`            |
| Tombol primer        | `bg-teal-500` + teks `zinc-950` |

> **Aturan kontras:** hindari `text-teal-600`, `text-zinc-400`, `text-zinc-500` sebagai teks statis di background terang (gagal kontras AA).

### Semantic token policy

Komponen reusable wajib mengutamakan token semantik daripada warna mentah:

```text
Background: bg-background
Foreground: text-foreground
Surface: bg-card
Muted text: text-muted-foreground
Border: border-border
Primary action: bg-primary text-primary-foreground
Focus ring: ring-ring
```

Warna mentah seperti `text-zinc-900` atau `bg-teal-700` boleh digunakan pada artwork, avatar, dan treatment visual khusus, tetapi bukan sebagai default komponen reusable.

## 3. Tipografi (Geist Variable)

| Elemen          | Ukuran                | Weight          | Tracking          |
| --------------- | --------------------- | --------------- | ----------------- |
| Display / Hero  | `text-4xl`–`text-5xl` | Bold            | `tracking-tight`  |
| Section heading | `text-2xl`–`text-3xl` | SemiBold        | `tracking-tight`  |
| Card title      | `text-base`–`text-lg` | Medium/SemiBold | normal            |
| Body            | `text-base`           | Regular         | `leading-relaxed` |
| Caption / meta  | `text-xs`–`text-sm`   | Regular/Medium  | normal            |

## 4. Komponen Inti

### A. Pill Navbar (Compact, tanpa Home)

- Pill melayang di tengah atas (`rounded-full`, `w-fit`), `bg-white/90` / `dark:bg-zinc-800/90`, `backdrop-blur-md`, `ring-1 ring-zinc-900/5`, `shadow-lg shadow-zinc-800/5`.
- **Menu:** About, Projects, Certifications, Contact (Home dihapus). Aktif = `aria-current="page"` + teks teal.
- **Theme Toggle terpisah** dari pill — tombol melayang `absolute right-4`.
- **Avatar kondisional:** Home → tidak tampil (pindah ke Hero); non-Home → avatar + nama di `absolute left-4`, klik ke `/`.
- Hamburger dropdown di mobile (`md:hidden`).

### B. Hero

- Split layout: headline dan CTA di kiri, satu portrait utama di kanan.
- Headline maksimal dua baris, bio ≤ 20 kata, CTA utama dan ikon sosial tetap terlihat tanpa scroll berlebih.
- Portrait menggunakan `aspect-[4/5]`, `rounded-2xl`, dan motion ringan yang mati saat `prefers-reduced-motion`.
- Photo collage tidak digunakan di Home; seluruh eksplorasi foto ditempatkan pada halaman Gallery.

### C. Komposisi Home

- **Core Capabilities** ditempatkan setelah hero sebagai tiga kolom editorial dengan border atas, bukan card.
- **Selected Projects** menggunakan lebar penuh: satu case study visual sebagai anchor dan dua project pendukung dalam baris ringkas.
- Chapter berikutnya menampilkan Work Experience timeline dengan fokus pada metrik dan peran profesional.
- Tombol Download CV berada di luar timeline sebagai CTA terpisah.
- **Get in Touch** menjadi section full-width dengan layout dua kolom menjelang footer.
- Data & Tools diberi penanda "Currently learning" karena menjadi area pengembangan kompetensi.

### D. About

- Intro menggunakan grid responsif dengan bio di kiri dan portrait di kanan.
- CTA utama: Download CV. CTA sekunder: View Certifications.
- **Career** menggunakan satu Card timeline dengan metadata perusahaan, peran, periode, dan tautan LinkedIn.
- **Education** menggunakan Card dengan shell, spacing, ikon, dan metadata yang konsisten dengan Career.
- **Tools I reach for** tetap menjadi daftar skill berbentuk pill setelah Career dan Education.

### E. Skill Badges

- Pill kecil: `bg-zinc-100`/`bg-zinc-800`, teks `zinc-700`/`zinc-300`.

### F. Radius & Shape Rules

- Button dan badge: `rounded-full`.
- Input dan mobile menu: `rounded-xl`.
- Card dan image utama: `rounded-2xl`.
- Utility/error action: `rounded-md`.
- Jangan mencampur radius lain tanpa alasan hierarki yang terdokumentasi.

### G. Project Tiles (`/projects`)

- Monokrom: avatar inisial `bg-zinc-900 text-white` (dark: `bg-zinc-100 text-zinc-900`).
- Jika project memiliki image, tampilkan image tersebut; jika tidak, gunakan avatar inisial sebagai fallback.
- Image wajib memiliki alt text deskriptif. Avatar inisial dapat bersifat dekoratif jika judul project sudah tersedia.
- Hover: `-translate-y-1` + shadow naik + judul teal. Meta `domain · year`; indikator "Case study".
- Pada Home, project pertama menggunakan visual `aspect-video`; dua project berikutnya memakai baris editorial tanpa card untuk menjaga hierarchy.

### H. CTA Hierarchy

- Primary: View case study, Download CV, Send message.
- Secondary: GitHub, Live demo, Read article.
- Gunakan maksimal satu jenis primary CTA yang dominan dalam satu viewport.

### I. Footer

- Tidak ada menu tambahan di footer.
- Logo dan nama berada di kiri; copyright berada di kanan pada desktop.
- Copyright: `© 2026 Resha Ananda Rahman. All rights reserved.`

### J. Branding Tab Browser

- Favicon: `public/favicon.svg` — rounded square `teal-700` + teks putih tebal "RAR" (+ fallback `favicon.ico`).

### K. Component Organization

- `src/components/ui/` hanya berisi primitive shadcn dan kontrol reusable seperti language serta theme toggle.
- `src/components/sections/about/` berisi Career, Education, dan skill sections.
- `src/components/sections/home/` berisi Capabilities dan Work Experience summary.
- `src/components/sections/projects/` berisi project cards dan list items.
- `src/components/sections/certifications/` berisi certification card dan modal.
- `src/components/sections/contact/` berisi contact section.
- `src/components/sections/shared/` berisi SectionMarker dan social links.

## 5. Micro-Interactions & Motion

1. Card hover: judul → teal; panah → `translate-x-1`; kartu proyek → `-translate-y-1`.
2. Social hover: **ikon menjadi putih `#FFF`** (`hover:bg-teal-700 hover:text-white`; dark `dark:hover:bg-teal-600 dark:hover:text-white`) + glow `shadow-teal-700/20`. Efek ini **terisolasi** dari hover teal menu navigasi.
3. Theme transition: `transition-colors duration-300` global.
4. Reveal on scroll: `FadeIn` + `StaggerContainer` (IntersectionObserver).
5. Reduced motion: semua animasi mati via aturan global di `styles.css`.

Animasi dekoratif boleh dihilangkan sepenuhnya ketika `prefers-reduced-motion: reduce`. Perubahan state penting tetap harus memiliki indikator non-animasi yang jelas dan tidak boleh menjadikan opacity sebagai satu-satunya penanda status.

## 6. Responsive & Breakpoints

- **Mobile (< 640px):** single column; collage scroll horizontal; hamburger.
- **Tablet (640–1024px):** grid menyesuaikan (`px-6`); collage menampilkan semua foto (`sm:justify-center sm:overflow-visible`).
- **Desktop (> 1024px):** container `max-w-7xl`; grid `lg:grid-cols-12`; gap `gap-y-20 lg:gap-x-12`.
- Tap target minimal 44px.

## 7. Aksesibilitas (WCAG AA)

- Kontras teks ≥ 4.5:1; link `teal-700` (light) / `teal-400` (dark); caption `zinc-600`/`zinc-400`.
- Focus: `:focus-visible` outline 2px `--color-ring` (teal).
- Semua link, button, toggle, input, dan menu memiliki focus state yang terlihat; gunakan `focus-visible:ring-2`, `focus-visible:ring-ring`, dan `focus-visible:ring-offset-2` bila diperlukan.
- ARIA: `aria-current="page"`, `aria-invalid` + `aria-describedby` di form, `role="status"`/`role="alert"`.
- Heading berurutan (satu `h1` per halaman), alt text jujur.
- Sediakan skip link menuju `#main-content`.
- Warna tidak boleh menjadi satu-satunya indikator untuk active, error, success, atau disabled state; kombinasikan dengan teks, ikon, underline, atau border.

### Mobile navigation

- Mobile navbar menampilkan hamburger dan brand/avatar yang tetap memberi affordance untuk kembali ke Home.
- Menu memiliki `aria-expanded`, `aria-controls`, dan label yang jelas.
- Tombol `Escape` menutup menu dan focus dikembalikan ke trigger.
- Tap target minimum adalah 44 × 44 px.

## 8. Tokens CSS (src/styles.css)

- `@theme inline`: `--color-background`, `--color-foreground`, `--color-primary` (teal), `--color-muted-foreground`, dst.
- Utilitas custom: `@utility float-soft`.
- Dark variant: `@custom-variant dark (&:is(.dark *))`.

## 9. UI States

- **Loading:** skeleton mengikuti bentuk layout final, bukan spinner generik sebagai satu-satunya indikator.
- **Empty:** jelaskan bahwa konten belum tersedia dan berikan konteks yang membantu.
- **Error:** pesan inline yang jelas, dekat dengan sumber masalah, serta CTA pemulihan bila memungkinkan.
- **404:** tampilkan status, penjelasan singkat, dan link kembali ke halaman terkait.
- **Form:** validasi inline menggunakan `aria-invalid` dan `aria-describedby`; jangan mengandalkan toast saja.

## 10. Do / Don't

### Do

- Gunakan satu accent teal secara konsisten.
- Gunakan whitespace sebagai pemisah utama.
- Gunakan card hanya saat grouping atau elevation menyampaikan hierarki.
- Pertahankan typography, spacing, dan radius yang konsisten.
- Uji desain pada light mode, dark mode, keyboard, dan reduced motion.

### Don't

- Menambahkan gradient dekoratif tanpa fungsi.
- Menggunakan lebih dari satu accent color dalam satu halaman.
- Membuat semua section menjadi card.
- Menggunakan teks abu-abu terlalu terang pada light mode.
- Menampilkan dua CTA dengan tujuan yang sama dalam satu viewport.

## 11. Design QA Checklist

- [ ] UI dan konten mengikuti aturan bilingual pada PRD.
- [ ] Semua halaman diuji pada viewport 375 px, 768 px, dan 1440 px.
- [ ] Keyboard navigation berjalan dari navbar sampai footer.
- [ ] Focus state terlihat jelas pada seluruh elemen interaktif.
- [ ] Dark mode tidak memiliki teks dengan kontras rendah.
- [ ] Semua image memiliki alt text yang jujur dan relevan.
- [ ] Tidak ada layout shift saat image atau font dimuat.
- [ ] Semua button memiliki state hover, focus, active, dan disabled bila relevan.
- [ ] `prefers-reduced-motion` sudah diuji.
- [ ] Tidak ada CTA dengan tujuan yang sama.
- [ ] Loading, empty, error, dan 404 state tersedia sesuai kebutuhan.
- [ ] Komponen reusable menggunakan semantic tokens.
