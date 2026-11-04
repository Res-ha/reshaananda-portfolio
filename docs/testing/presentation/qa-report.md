---
marp: true
theme: default
size: "16:9"
paginate: true
title: "QA Documentation Report — Resha Ananda Rahman Portfolio"
style: |
  section {
    background: #ffffff;
    color: #1f2937;
    font-family: "Segoe UI", "Inter", Arial, sans-serif;
    font-size: 26px;
    line-height: 1.5;
    padding: 58px 72px;
  }
  h1 {
    color: #111827;
    font-size: 52px;
    font-weight: 700;
    border-bottom: none;
    margin-bottom: 18px;
  }
  h2 {
    color: #111827;
    font-size: 36px;
    font-weight: 700;
    border-bottom: 3px solid #9ca3af;
    padding-bottom: 10px;
    margin-bottom: 26px;
  }
  h3 {
    color: #374151;
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  strong { color: #111827; }
  a { color: #4b5563; }
  table {
    font-size: 21px;
    border-collapse: collapse;
    width: 100%;
    margin-top: 8px;
  }
  th {
    background: #374151;
    color: #ffffff;
    border: 1px solid #6b7280;
    padding: 8px 12px;
    text-align: left;
    font-weight: 600;
  }
  td {
    border: 1px solid #d1d5db;
    padding: 7px 12px;
  }
  tr:nth-child(even) td { background: #f9fafb; }
  ul { margin-top: 6px; }
  li { margin-bottom: 8px; }
  blockquote {
    background: #f3f4f6;
    border-left: 6px solid #4b5563;
    color: #1f2937;
    padding: 14px 20px;
    margin-top: 16px;
    font-size: 24px;
  }
  code {
    background: #f3f4f6;
    color: #111827;
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 22px;
  }
  .meta { color: #6b7280; font-size: 24px; }
  .kpi { font-size: 30px; font-weight: 700; color: #111827; }
  .bar { display: inline-block; height: 30px; background: #6b7280; vertical-align: middle; border-radius: 3px; }
  .barlight { background: #9ca3af; }
  section.lead h1 { font-size: 60px; margin-top: 90px; }
---

<!-- _class: lead -->
<!-- _paginate: false -->

# QA Documentation Report

**Portfolio Website — Resha Ananda Rahman**

Ringkasan 14 suite · 135 test case · dokumentasi MD + PDF

<div class="meta">

PRD v2.1 · React 19 + Vite + Tailwind CSS v4 · 7 Oktober 2026

</div>

---

## Tentang Proyek & Ruang Lingkup

**Objek pengujian:** SPA portfolio statis (tanpa backend/CMS/database)

- **10 rute utama:** `/`, `/about`, `/projects`, `/projects/:slug`, `/blog`, `/blog/:slug`, `/gallery`, `/certifications`, `/contact`, `/experience` (redirect)
- **Fitur inti:** bilingual EN/ID, light/dark mode, download CV PDF, form `mailto:`, modal sertifikasi, 404 + Error Boundary
- **Kualitas:** WCAG AA, keyboard nav, Lighthouse ≥ 90, tanpa error konsol

**Di luar scope (PRD §7):** backend, auth, payment, komentar blog, CMS

---

## Metodologi & Konvensi

**Format ID:** `TC-<PREFIX>-<NNN>` — 14 prefix, mis. `TC-NAV-001`

| Aspek        | Ketentuan                                                                               |
| ------------ | --------------------------------------------------------------------------------------- |
| Jenis test   | **Positive** (alur normal) · **Negative** (antisipasi error) · **Edge** (kondisi batas) |
| Kolom        | ID · Deskripsi · Langkah · Hasil Diharapkan · Jenis                                     |
| Eksekusi     | `npm run dev` · viewport 375/768/1440 · keyboard-only · reset localStorage              |
| Ground truth | PRD.md · DESIGN.md · verifikasi kode `src/`                                             |
| Bug report   | Template `BUG-TEMPLATE.md` (severity S1–S4, priority P1–P3)                             |

---

## Coverage Map — PRD §3 → Suite

| Fitur PRD          | Suite        | Fitur PRD           | Suite |
| ------------------ | ------------ | ------------------- | ----- |
| 1. Home / Landing  | TC-04        | 7. Gallery          | TC-08 |
| 2. Navigation      | TC-01        | 8. Certifications   | TC-07 |
| 3. Bilingual EN/ID | TC-02        | 9. Download CV      | TC-10 |
| 4. About           | TC-04, TC-12 | 10. Light/Dark Mode | TC-03 |
| 5. Projects        | TC-05        | 11. Contact         | TC-09 |
| 6. Blog            | TC-06        | 12. Error Handling  | TC-11 |

**Lintas suite:** Accessibility → TC-12 · Responsive → TC-13 · Performance → TC-14
**Checklist DESIGN §10** tersedia di README `docs/testing/README.md`

---

## Ringkasan 14 Suite — 135 Test Case

| Suite                    | Jumlah | Suite                | Jumlah  |
| ------------------------ | ------ | -------------------- | ------- |
| TC-01 Navigasi & Routing | 12     | TC-08 Gallery        | 7       |
| TC-02 Bilingual EN/ID    | 10     | TC-09 Contact        | 12      |
| TC-03 Light/Dark Mode    | 10     | TC-10 Download CV    | 7       |
| TC-04 Home               | 10     | TC-11 Error Handling | 9       |
| TC-05 Projects           | 10     | TC-12 Accessibility  | 12      |
| TC-06 Blog               | 9      | TC-13 Responsive     | 9       |
| TC-07 Certifications     | 9      | TC-14 Performance    | 9       |
|                          |        | **Total**            | **135** |

Output: **16 file Markdown** + **14 file PDF** di `docs/testing/`

---

## Distribusi Jenis Pengujian

| Jenis     | Jumlah  | Proporsi                                                   |
| --------- | ------- | ---------------------------------------------------------- |
| Positive  | **73**  | <span class="bar" style="width:420px"></span> 54%          |
| Edge      | **42**  | <span class="bar barlight" style="width:243px"></span> 31% |
| Negative  | **20**  | <span class="bar barlight" style="width:116px"></span> 15% |
| **Total** | **135** |                                                            |

- Mayoritas teras pada **alur normal** sesuai fitur yang ada
- **15% negative test** mengunci error path: slug invalid, form kosong, localStorage korup, rute 404
- **31% edge test** menutup kondisi batas: viewport ekstrem, reduced-motion, case-sensitive slug, data gagal dimuat

---

## Kriteria Kualitas (PRD §2)

| Kriteria      | Target                                              | Suite        |
| ------------- | --------------------------------------------------- | ------------ |
| Performance   | Lighthouse ≥ 90 · FCP < 1,5s (4G)                   | TC-14        |
| Accessibility | WCAG AA ≥ 4,5:1 · keyboard nav · `aria-current`     | TC-12        |
| Bilingual     | Toggle EN/ID seluruh UI · persist `localStorage`    | TC-02        |
| Theme         | Light/dark · tanpa FOUC · preferensi tersimpan      | TC-03        |
| Reliability   | Tanpa error konsol · tanpa 404 tak disengaja        | TC-11, TC-14 |
| Privacy       | Tanpa backend · `rel="noreferrer"` · form `mailto:` | TC-09        |

---

## ⚠️ Temuan Terbuka — Menunggu Klarifikasi PO

**Isu: fallback tema tidak sesuai spesifikasi**

- **PRD §3.10:** _"Jika belum ada preferensi, sistem menggunakan `prefers-color-scheme`"_
- **Implementasi:** `index.html:19` → `var dark = theme ? theme === "dark" : true` — selalu **dark** sebagai default, tanpa membaca preferensi sistem

**Dampak:** pengguna dengan sistem light mode melihat situs dark saat pertama kali (belum tentu intent PO).

**Ditandai pada:** `TC-THM-003` · `docs/testing/README.md` → Temuan #1
**Aksi:** konfirmasi PO → perbaiki PRD **atau** perbaiki kode (membaca `window.matchMedia("(prefers-color-scheme: dark)")`)

---

## Alur Laporan Bug

**Template:** `docs/testing/BUG-TEMPLATE.md`

1. **Temukan** saat eksekusi TC → catat `Test Case ID` yang gagal
2. **Isi laporan:** judul spesifik · severity (S1–S4) · priority (P1–P3) · steps reproduksi · expected vs actual · bukti (screenshot/console)
3. **Kirim** ke developer/PO · attach suite terkait (mis. `TC-09-contact`)
4. **Verifikasi ulang** setelah fix → status `Verified` · tutup

Severity: **S1** Blocker rilis · **S2** Major · **S3** Minor · **S4** Cosmetic

---

## Next Steps

1. **Klarifikasi PO** — isu default tema (`TC-THM-003`)
2. **Eksekusi manual TC** — 135 kasus per suite, mulai dari rute kritis (TC-01, TC-09, TC-11)
3. **Automation Playwright** — skill `webapp-testing` terpasang; otomatiskan TC regresi (rute, form, toggle bahasa/tema)
4. **Regenerasi PDF** bila ada revisi:
   `npx md-to-pdf --config-file docs/testing/pdf/md-to-pdf.config.cjs docs/testing/TC-*.md`
5. **Quality gate** — `npm run lint && npm run build` sebelum setiap rilis (TC-14)

**Repo:** `docs/testing/` · **Dokumen sumber:** `PRD.md`, `DESIGN.md`, `README.md`
