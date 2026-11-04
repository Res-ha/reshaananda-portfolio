# [BUG-001] Form kontak tidak muncul di UI — komponen ContactCard tidak terpakai

| Field             | Isi                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------- |
| **Severity**      | `S2` Major — fitur yang disyaratkan PRD tidak ada di produk                           |
| **Priority**      | `P1` Rilis ini (PRD menandai Contact sebagai in-scope)                                |
| **Suite terkait** | `TC-09-contact`                                                                       |
| **Test Case ID**  | `TC-CTC-001` s/d `TC-CTC-008`, `TC-CTC-011`, `TC-CTC-012` (10 kasus Blocked)          |
| **Environment**   | `npm run dev` (dev server) · Chrome/Playwright · juga berlaku untuk `npm run preview` |
| **Browser / OS**  | Chromium (Playwright) / Windows 11                                                    |
| **Viewport**      | 1440×900                                                                              |
| **Bahasa / Tema** | EN & ID · light & dark (tidak berpengaruh)                                            |
| **Status**        | Open                                                                                  |

### Langkah Reproduksi (Steps to Reproduce)

1. Jalankan `npm run dev`, buka `http://localhost:5173/contact`
2. Amati halaman: hanya kartu kanal (Email/Instagram/LinkedIn/GitHub) dan tombol "Send email"
3. Inspeksi DOM: `document.querySelectorAll('form').length` → **0**, `document.querySelectorAll('input, textarea').length` → **0**
4. Ulangi pemeriksaan di `/` dan `/about` → juga 0 form/0 input

### Hasil yang Diharapkan

Sesuai **PRD §3.11** ("Form kontak menggunakan `mailto:`"), **README** (rute `/contact` = "Kanal kontak dan form email"), dan **DESIGN §5** ("Form tetap tersedia di route `/contact`"): tersedia form dengan field email + pesan, validasi inline (regex email, minimal 10 karakter), `aria-invalid`/`aria-describedby`, dan submit via `mailto:`.

### Hasil Aktual (Actual Result)

Tidak ada form di halaman mana pun. Komponen yang mengimplementasikan form (`src/components/sections/contact/ContactCard.tsx`, berisi `<form>` di baris 79 dengan seluruh logika validasi) **tidak pernah diimpor/digunakan** oleh route atau section mana pun — dead code.

**Bukti pendukung:**

- Pencarian `src/` untuk `<form|errorEmail|type="email"` → hanya match di `ContactCard.tsx`
- Pencarian `ContactCard` → hanya ditemukan di file definisinya sendiri
- Audit runtime: `/` = 0 form · `/contact` = 0 form · `/about` = 0 form
- 10 dari 12 test case suite TC-09 menjadi **Blocked**

### Bukti

- File: `src/components/sections/contact/ContactCard.tsx:79` (`<form onSubmit={handleSubmit} …>`)
- Dokumen kontradiktif: `PRD.md` §3.11 · `README.md` tabel rute `/contact` · `DESIGN.md` §5 Contact
- Laporan eksekusi: `docs/testing/EXECUTION-2026-10-07.md`

### Root Cause (opsional, diisi developer)

Dugaan: refactor halaman `/contact` (chanel cards) menggantikan `ContactCard` tanpa menghapus komponen atau memperbarui dokumen.

### Catatan Tambahan

- Alternatif non-blocker yang ada saat ini: 3 link `mailto:` langsung (TC-CTC-009 lolos) — pengunjung tetap bisa menghubungi, namun bukan form sesuai spesifikasi.
- Keputusan perlu PO: **implementasi form** di `/contact` **atau** **revisi PRD/README/DESIGN** bila form dibatalkan.
- Regresi test terkait: setelah fix, eksekusi ulang seluruh TC-09.
