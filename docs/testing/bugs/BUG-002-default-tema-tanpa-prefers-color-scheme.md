# [BUG-002] Default tema tidak mengikuti `prefers-color-scheme` sesuai PRD

| Field             | Isi                                                                       |
| ----------------- | ------------------------------------------------------------------------- |
| **Severity**      | `S3` Minor — preferensi UX, tidak ada crash/data loss                     |
| **Priority**      | `P2` Sprint ini (perlu keputusan PO: kode vs dokumen)                     |
| **Suite terkait** | `TC-03-theme`                                                             |
| **Test Case ID**  | `TC-THM-003`                                                              |
| **Environment**   | `npm run dev` · Chromium/Playwright · sistem operasi dalam **mode light** |
| **Browser / OS**  | Chromium / Windows 11                                                     |
| **Viewport**      | 1440×900                                                                  |
| **Bahasa / Tema** | EN · tanpa preferensi tema tersimpan                                      |
| **Status**        | Open                                                                      |

### Langkah Reproduksi (Steps to Reproduce)

1. Pastikan OS dalam **light mode** (Windows: Settings → Colors → Light)
2. Hapus key `theme` dari localStorage (DevTools → Application → Local Storage)
3. Buka/muat ulang `http://localhost:5173/`
4. Amati tema yang dirender dan nilai `matchMedia('(prefers-color-scheme: dark)').matches`

### Hasil yang Diharapkan

**PRD §3.10:** "Jika belum ada preferensi, sistem menggunakan **`prefers-color-scheme`**." → dengan sistem light, situs harus tampil **light mode**.

### Hasil Aktual (Actual Result)

Situs tampil **dark mode** meski sistem light:

```
localStorage.getItem('theme')                      → null
window.matchMedia('(prefers-color-scheme: dark)').matches → false   (sistem light)
document.documentElement.className                 → "dark"          (situs dark!)
getComputedStyle(document.body).backgroundColor    → rgb(11, 17, 24)
```

### Bukti

- `index.html:19` → `var dark = theme ? theme === "dark" : true;` — default `true` (dark) tanpa membaca `prefers-color-scheme`
- `src/lib/theme.tsx:2` (`themeScript`) — logika sama, default dark
- Tidak ada `window.matchMedia('(prefers-color-scheme…)')` di seluruh source
- Laporan eksekusi: `docs/testing/EXECUTION-2026-10-07.md` (TC-THM-003)

### Root Cause (opsional, diisi developer)

Inline script anti-FOUC di `index.html` dan `themeScript` di `theme.tsx` men-hardcode default dark; cabang `prefers-color-scheme` tidak pernah ditambahkan.

### Catatan Tambahan

- **Keputusan PO diperlukan:** (a) perbaiki kode → baca `matchMedia('(prefers-color-scheme: dark)')` saat key kosong, atau (b) revisi PRD §3.10 bila default dark memang disengaja (dark-first).
- Observasi terkait (tidak terpisah jadi bug): nilai storage tidak valid (mis. `theme="biru"`) jatuh ke **light**, sedangkan key kosong jatuh ke **dark** — arah fallback tidak konsisten (TC-THM-007).
- Setelah fix: eksekusi ulang TC-THM-003 dan TC-THM-007.
