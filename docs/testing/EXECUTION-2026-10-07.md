# Laporan Eksekusi Pilot Test

**Tanggal:** 7 Oktober 2026
**Tester:** Resha Ananda Rahman (otomasi via Playwright)
**Environment:** `npm run dev` → http://localhost:5173 · Chrome (Playwright) · viewport desktop
**Scope:** Pilot 2 suite dari 14 → **TC-03 Theme (10 kasus)** + **TC-09 Contact (12 kasus)** = **22 kasus**

## Ringkasan Hasil

| Status           | Jumlah | Keterangan                                        |
| ---------------- | ------ | ------------------------------------------------- |
| ✅ Pass          | **11** | Sesuai hasil yang diharapkan                      |
| ❌ Fail / Temuan | **1**  | TC-THM-003 — spesifikasi tidak diimplementasikan  |
| ⛔ Blocked       | **10** | Form kontak tidak tersedia di UI (temuan BUG-001) |
| **Total**        | **22** |                                                   |

**Tambahan:** 0 error konsol sepanjang seluruh sesi · 2 laporan bug dibuat di [`bugs/`](./bugs/)

## Detail — TC-03 Light/Dark Mode

| ID         | Hasil                   | Bukti / Catatan                                                                                                                                                                                            |
| ---------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TC-THM-001 | ✅ Pass                 | Toggle dua arah: dark→light→dark→light; `bg` berubah `#0b1118` ↔ `#f3f4f2`; label tombol state-aware ("Switch to light/dark mode")                                                                         |
| TC-THM-002 | ✅ Pass                 | Set light → reload → tetap light; `localStorage.theme = "light"`                                                                                                                                           |
| TC-THM-003 | ❌ **Temuan → BUG-002** | Kondisi kosong + sistem **light** (`matchMedia('(prefers-color-scheme: dark)') = false`) → situs render **dark**. `prefers-color-scheme` tidak dibaca — konflik PRD §3.10                                  |
| TC-THM-004 | ✅ Pass                 | Saat `waitUntil: 'commit'` (sebelum paint), `<html class="dark">` sudah terpasang → tanpa FOUC                                                                                                             |
| TC-THM-005 | ✅ Pass                 | Kontras terukur (WCAG ratio): **light** 5.2–14.26 · **dark** 6.99–14.96 — semua ≥ 4.5:1 pada sampel `main p`, `nav a`, `footer p`, `h1`, `button`                                                          |
| TC-THM-006 | ✅ Pass                 | `meta theme-color`: `#0b1118` (dark) ↔ `#f3f4f2` (light)                                                                                                                                                   |
| TC-THM-007 | ✅ Pass*                | `theme = "biru"` → reload → aplikasi hidup, 0 crash. *Catatan: nilai tidak valid → render **light**, sedangkan key hilang → **dark** — arah fallback tidak konsisten (observasi minor, tidak memicu crash) |
| TC-THM-008 | ✅ Pass                 | `Storage.prototype.setItem` dibuat rusak total → klik toggle tetap mengubah tema (dark→light), **0 JS error**, aplikasi tetap hidup                                                                        |
| TC-THM-009 | ✅ Pass                 | Di `/blog` + bahasa `id`: toggle tema → URL tetap `/blog`, `html lang="id"`                                                                                                                                |
| TC-THM-010 | ✅ Pass                 | Transisi `0.3s` pada properti warna (`transition-duration: 0.3s`) — halus, teks tetap terbaca                                                                                                              |

**TC-03: 9 Pass · 1 Temuan**

## Detail — TC-09 Contact

| ID         | Hasil      | Bukti / Catatan                                                                                                                                                        |
| ---------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TC-CTC-001 | ⛔ Blocked | Form tidak ada di UI (lihat BUG-001)                                                                                                                                   |
| TC-CTC-002 | ⛔ Blocked | idem                                                                                                                                                                   |
| TC-CTC-003 | ⛔ Blocked | idem                                                                                                                                                                   |
| TC-CTC-004 | ⛔ Blocked | idem                                                                                                                                                                   |
| TC-CTC-005 | ⛔ Blocked | idem                                                                                                                                                                   |
| TC-CTC-006 | ⛔ Blocked | idem                                                                                                                                                                   |
| TC-CTC-007 | ⛔ Blocked | idem                                                                                                                                                                   |
| TC-CTC-008 | ⛔ Blocked | idem                                                                                                                                                                   |
| TC-CTC-009 | ✅ Pass    | `/contact` memiliki **3 link `mailto:`**, sampel `mailto:reshaanandarahman@gmail.com`                                                                                  |
| TC-CTC-010 | ✅ Pass    | **0 request non-GET** selama sesi; storage hanya `["lang", "theme"]` (localStorage) + sessionStorage kosong — tidak ada data pengguna yang disimpan (PRD §2 Privacy ✓) |
| TC-CTC-011 | ⛔ Blocked | Form tidak ada di UI                                                                                                                                                   |
| TC-CTC-012 | ⛔ Blocked | Form tidak ada di UI                                                                                                                                                   |

**TC-CTC: 2 Pass · 10 Blocked**

### Bukti BUG-001 (pemeriksaan tambahan)

- Pencarian seluruh `src/`: satu-satunya markup `<form>` ada di `src/components/sections/contact/ContactCard.tsx:79`
- `ContactCard` **tidak pernah diimpor** oleh komponen mana pun (grep `ContactCard` → hanya definisi)
- Audit halaman: `/` = 0 form/0 input · `/contact` = 0 form/0 input · `/about` = 0 form/0 input
- Kontradiksi dengan: PRD §3.11 ("Form kontak menggunakan `mailto:`"), README (rute `/contact` = "Kanal kontak dan form email"), DESIGN §5 ("Form tetap tersedia di route `/contact`")

## Temuan

| ID Bug                                                               | Judul                                                             | Severity | Priority |
| -------------------------------------------------------------------- | ----------------------------------------------------------------- | -------- | -------- |
| [BUG-001](./bugs/BUG-001-form-kontak-tidak-ada.md)                   | Form kontak tidak diimplementasikan di UI (ContactCard dead code) | S2 Major | P1       |
| [BUG-002](./bugs/BUG-002-default-tema-tanpa-prefers-color-scheme.md) | Default tema tidak mengikuti `prefers-color-scheme` sesuai PRD    | S3 Minor | P2       |

## Rekomendasi

1. **BUG-001** → pass-through ke developer: render `ContactCard` di route `/contact` (atau perbaiki PRD bila form memang dibatalkan — keputusan PO).
2. **BUG-002** → klarifikasi PO: perbaiki kode (baca `matchMedia`) atau revisi PRD (default dark disengaja).
3. Eksekusi menyusul: 12 suite tersisa (113 kasus belum dieksekusi), mulai dari TC-01 Navigation dan TC-11 Error Handling.
4. Perbaiki contoh data uji di `TC-09-contact.md` (TC-CTC-004: "halo dunia" = 10 karakter, lolos validasi) → sudah diperbaiki di file TC.

## Disclaimer

Hasil ini dari **pilot otomatis** pada 1 environment (Chrome desktop). Kasus mobile (375px), keyboard-only penuh, dan browser lintas engine belum dieksekusi.
