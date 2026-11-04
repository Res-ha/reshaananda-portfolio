# Dokumentasi QA — Test Case

Dokumen pengujian untuk **Portfolio Website — Resha Ananda Rahman** (PRD v2.1).
Disusun oleh peran QA Engineer, berbasis PRD.md, DESIGN.md, dan verifikasi kode (`src/`).

## Cara Eksekusi

```bash
npm run dev        # buka http://localhost:5173
npm run lint       # cek kualitas kode
npm run build      # production build → dist/
npm run preview    # preview build produksi
```

- Eksekusi **manual** di browser: desktop 1440px, tablet 768px, mobile 375px.
- Uji keyboard: gunakan `Tab`, `Enter`, `Escape` (tanpa mouse).
- Untuk simulasi localStorage terhapus: DevTools → Application → Local Storage → hapus key `lang` dan `theme`.

## Konvensi ID

Format: `TC-<PREFIX>-<NNN>`

| Prefix    | Suite              | Prefix    | Suite                     |
| --------- | ------------------ | --------- | ------------------------- |
| `TC-NAV`  | Navigasi & Routing | `TC-CTC`  | Contact                   |
| `TC-I18N` | Bilingual EN/ID    | `TC-CV`   | Download CV               |
| `TC-THM`  | Light/Dark Mode    | `TC-ERR`  | Error Handling            |
| `TC-HOM`  | Home               | `TC-A11Y` | Accessibility             |
| `TC-PRJ`  | Projects           | `TC-RSP`  | Responsive                |
| `TC-BLG`  | Blog               | `TC-PER`  | Performance & Reliability |
| `TC-CRT`  | Certifications     |           |                           |
| `TC-GAL`  | Gallery            |           |                           |

**Jenis Pengujian:** `Positive` (alur normal) · `Negative` (antisipasi error) · `Edge` (kondisi ekstrem/batas).

## Daftar Test Case

| File                                                 | Suite                     | Jumlah Kasus | Cakupan PRD |
| ---------------------------------------------------- | ------------------------- | ------------ | ----------- |
| [TC-01-navigation.md](./TC-01-navigation.md)         | Navigasi & Routing        | 12           | §3.2, §4    |
| [TC-02-bilingual.md](./TC-02-bilingual.md)           | Bilingual EN/ID           | 10           | §3.3        |
| [TC-03-theme.md](./TC-03-theme.md)                   | Light/Dark Mode           | 10           | §3.10       |
| [TC-04-home.md](./TC-04-home.md)                     | Home / Landing            | 10           | §3.1        |
| [TC-05-projects.md](./TC-05-projects.md)             | Projects                  | 10           | §3.5        |
| [TC-06-blog.md](./TC-06-blog.md)                     | Blog                      | 9            | §3.6        |
| [TC-07-certifications.md](./TC-07-certifications.md) | Certifications            | 9            | §3.8        |
| [TC-08-gallery.md](./TC-08-gallery.md)               | Gallery                   | 7            | §3.7        |
| [TC-09-contact.md](./TC-09-contact.md)               | Contact                   | 12           | §3.11       |
| [TC-10-cv.md](./TC-10-cv.md)                         | Download CV               | 7            | §3.9        |
| [TC-11-error-handling.md](./TC-11-error-handling.md) | Error Handling            | 9            | §3.12       |
| [TC-12-accessibility.md](./TC-12-accessibility.md)   | Accessibility             | 12           | §2, §7.3    |
| [TC-13-responsive.md](./TC-13-responsive.md)         | Responsive                | 9            | §7.2        |
| [TC-14-performance.md](./TC-14-performance.md)       | Performance & Reliability | 9            | §2, §7.4    |
| **Total**                                            | **14 suite**              | **135**      |             |

## Coverage Map

### PRD §3 Core Features → Suite

| # Fitur PRD            | Suite Test Case |
| ---------------------- | --------------- |
| 1. Home / Landing Page | TC-04           |
| 2. Navigation          | TC-01           |
| 3. Bilingual EN/ID     | TC-02           |
| 4. About               | TC-04, TC-12    |
| 5. Projects            | TC-05           |
| 6. Blog                | TC-06           |
| 7. Gallery             | TC-08           |
| 8. Certifications      | TC-07           |
| 9. Download CV         | TC-10           |
| 10. Light/Dark Mode    | TC-03           |
| 11. Contact            | TC-09           |
| 12. Error Handling     | TC-11           |

### DESIGN.md §10 Checklist QA → Suite

| Checklist DESIGN                     | Suite        |
| ------------------------------------ | ------------ |
| Homepage alur hero → contact         | TC-04        |
| Light & dark mode terbaca            | TC-03        |
| Viewport 375/768/1440 tanpa overflow | TC-13        |
| Navigasi keyboard                    | TC-12        |
| `prefers-reduced-motion` dihormati   | TC-12        |
| Route lama tetap terbuka             | TC-01, TC-11 |
| Build, lint, typecheck lulus         | TC-14        |
| Kredit inspirasi footer tersedia     | TC-04        |

### Kriteria Kualitas (PRD §2) → Suite

| Kriteria      | Target                                        | Suite          |
| ------------- | --------------------------------------------- | -------------- |
| Performance   | Lighthouse ≥ 90, FCP < 1,5s (4G)              | TC-PER         |
| Accessibility | WCAG AA ≥ 4.5:1, keyboard nav, `aria-current` | TC-A11Y        |
| Bilingual     | Toggle EN/ID seluruh UI                       | TC-I18N        |
| Theme         | Light/dark, preferensi tersimpan, tanpa FOUC  | TC-THM         |
| Reliability   | Tanpa error konsol & 404 tak disengaja        | TC-ERR, TC-PER |
| Privacy       | Tanpa backend, `rel="noreferrer"`             | TC-CTC, TC-PER |

## Temuan / Klarifikasi Terbuka

| #   | Temuan                                                                                                                                                                                                                           | Status                                                                                               |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| 1   | PRD §3.10 menyebut fallback `prefers-color-scheme` saat belum ada preferensi tema, namun `index.html:19` dan `src/lib/theme.tsx` melakukan default ke **dark** tanpa membaca `prefers-color-scheme`. Ditandai pada `TC-THM-003`. | ✅ Dikonfirmasi saat eksekusi → [BUG-002](./bugs/BUG-002-default-tema-tanpa-prefers-color-scheme.md) |
| 2   | Prasyarat automation: skill `anthropics/skills@webapp-testing` terpasang di `.agents/skills/webapp-testing` untuk eksekusi Playwright.                                                                                           | Siap dipakai                                                                                         |
| 3   | Form kontak (`ContactCard`) tidak pernah dirender — fitur PRD §3.11 tidak ada di UI.                                                                                                                                             | ✅ Ditemukan saat eksekusi pilot → [BUG-001](./bugs/BUG-001-form-kontak-tidak-ada.md)                |

## Hasil Eksekusi

Pilot **22 kasus** (TC-03 + TC-09) pada 7 Oktober 2026 → **11 Pass · 1 Fail · 10 Blocked · 2 bug report**.
Detail: [EXECUTION-2026-10-07.md](./EXECUTION-2026-10-07.md) · laporan bug: [`bugs/`](./bugs/)

## Ekspor PDF

```bash
npx md-to-pdf --config-file docs/testing/pdf/md-to-pdf.config.js docs/testing/TC-*.md
```

Hasil PDF tersedia di [`pdf/`](./pdf/).

## Laporan Bug

Gunakan template [BUG-TEMPLATE.md](./BUG-TEMPLATE.md) saat menemukan defect.
