---
marp: true
theme: default
size: "16:9"
paginate: true
title: "Portofolio — Resha Ananda Rahman"
style: |
  section {
    background: #ffffff;
    color: #0f172a;
    font-family: "Segoe UI", "Inter", Arial, sans-serif;
    font-size: 24px;
    line-height: 1.5;
    padding: 52px 64px;
  }
  h1 {
    color: #0f172a;
    font-size: 46px;
    font-weight: 800;
    border-bottom: none;
    margin: 0 0 10px;
    letter-spacing: -0.5px;
  }
  h2 {
    color: #0f172a;
    font-size: 34px;
    font-weight: 800;
    border-bottom: 3px solid #0d9488;
    padding-bottom: 8px;
    margin: 0 0 22px;
    letter-spacing: -0.3px;
  }
  h3 {
    color: #0f766e;
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 6px;
  }
  p { margin: 6px 0; }
  strong { color: #0f172a; }
  ul { margin: 4px 0; padding-left: 22px; }
  li { margin-bottom: 6px; }
  table {
    font-size: 19px;
    border-collapse: collapse;
    width: 100%;
    margin-top: 6px;
  }
  th {
    background: #0f766e;
    color: #ffffff;
    border: 1px solid #14b8a6;
    padding: 7px 10px;
    text-align: left;
    font-weight: 600;
  }
  td {
    border: 1px solid #cbd5e1;
    padding: 6px 10px;
    background: #f8fafc;
  }
  code {
    background: #f1f5f9;
    color: #0f766e;
    padding: 1px 7px;
    border-radius: 4px;
    font-size: 20px;
  }
  .kicker {
    font-family: ui-monospace, Consolas, monospace;
    font-size: 15px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #0d9488;
    margin-bottom: 14px;
    font-weight: 700;
  }
  .subtitle { color: #475569; font-size: 24px; margin-bottom: 26px; }
  .muted { color: #64748b; font-size: 17px; }
  .card {
    background: #f8fafc;
    border: 1px solid #cbd5e1;
    border-radius: 12px;
    padding: 14px 18px;
  }
  .card strong { color: #0f766e; }
  .tealband {
    background: #f0fdfa;
    border-left: 5px solid #0d9488;
    border-radius: 0 10px 10px 0;
    padding: 12px 18px;
    margin-top: 14px;
  }
  .badge {
    display: inline-block;
    background: #ccfbf1;
    color: #0f766e;
    border: 1px solid #5eead4;
    border-radius: 999px;
    padding: 3px 14px;
    font-size: 16px;
    font-weight: 700;
    margin-right: 8px;
  }
  .kpi {
    font-size: 44px;
    font-weight: 800;
    color: #0d9488;
    line-height: 1.1;
  }
  .kpilabel { font-size: 16px; color: #475569; font-weight: 600; }
  img.shot {
    width: 100%;
    border: 1px solid #cbd5e1;
    border-radius: 10px;
    display: block;
  }
  .col { flex: 1; min-width: 0; }
  .row { display: flex; gap: 22px; align-items: flex-start; }
  .num {
    font-family: ui-monospace, Consolas, monospace;
    color: #0d9488;
    font-weight: 800;
    font-size: 18px;
  }
  section.lead h1 { font-size: 58px; margin-top: 70px; }
---

<!-- _class: lead -->
<!-- _paginate: false -->

<div class="kicker">Portofolio</div>

# Pengembangan Web & Quality Assurance

<div class="subtitle">Tiga proyek terpilih & bukti metodologi QA · github.com/Res-ha</div>

**Resha Ananda Rahman**
S1 Teknik Informatika · Universitas Palangka Raya · IPK 3,62/4,00
Palangka Raya, Kalimantan Tengah

---

## Profil dan relevansi

<div class="row">
<div class="col card">

**Pendidikan**
S1 Teknik Informatika
Universitas Palangka Raya
**IPK 3,62 / 4,00**

</div>
<div class="col card">

**Functional testing**
Uji fungsi lintas browser & device pada sistem yang saya bangun sendiri (Koperasi UPR), plus functional checks saat maintenance situs klien.

</div>
</div>

<div class="row" style="margin-top:16px">
<div class="col card">

**Troubleshooting & dokumentasi**
Help desk Telkom: **10+ kendala harian**, dokumentasi status via Google Sheets, eskalasi error sistem, koordinasi follow-up.

</div>
<div class="col card">

**SQL & data**
5 proyek analisis data SQL (DQLab) + **5 sertifikat** — fondasi untuk validasi data dan pemeriksaan integritas.

</div>
</div>

---

## Pengalaman yang mendukung peran QA

<div class="row">
<div class="col card">

**Junior WordPress Web Developer**
_Tingang.id_

- Development & maintenance situs klien
- **Bug fixes** dan penyesuaian konten/antarmuka
- **Functional checks** sebelum perubahan dirilis

</div>
<div class="col card">

**Intern — Web Developer**
_Koperasi Upaya UPR_

- Membangun sistem informasi berbasis web (PHP + CodeIgniter 4)
- **Functional testing lintas browser & device**
- Merancang struktur informasi yang mudah dinavigasi

</div>
<div class="col card">

**Provisioning & Migration Help Desk**
_PT Telkom Akses · Jul 2025 – Agu 2026_

- **10+** kendala order harian · **117** teknisi dalam koordinasi
- Dokumentasi status case, eskalasi error sistem
- Koordinasi follow-up: helpdesk–lapangan–sales–CSR

</div>
</div>

<div class="tealband">
<strong>Pola kerja yang terbentuk:</strong> identifikasi masalah secara sistematis → dokumentasi yang jelas → memastikan setiap kasus mendapat follow-up.
</div>

---

## Bukti kemampuan QA

<div class="row">
<div class="col card">

<h3>📝 Metodologi — dokumentasi QA</h3>

- **135 test case** dalam **14 suite** (`docs/testing/`)
- Format ID standar · kolom langkah & hasil harapkan
- Distribusi: **73 Positive · 42 Edge · 20 Negative**
- Coverage map: 12 fitur PRD → suite
- Template laporan bug (severity S1–S4, priority P1–P3)

</div>
<div class="col card">

<h3>🧪 Hasil pilot eksekusi — 7 Okt 2026</h3>

- **22 kasus** dieksekusi otomatis (suite Theme + Contact)
- **11 lulus · 1 gagal · 10 blocked · 0 error konsol**
- **2 laporan bug dibuat**, di antaranya:
  - **S2** — fitur form kontak tidak terimplementasi (komponen dead code, kontra PRD)
  - **S3** — default tema tidak mengikuti `prefers-color-scheme` sesuai PRD

</div>
</div>

<div class="tealband">
<strong>Dokumen nyata:</strong> 14 file test case + 14 PDF + EXECUTION report + 2 bug report — siap direview di repository.
</div>

---

## Proyek 1 — Koperasi Upaya UPR Information System

<span class="badge">2024</span><span class="badge">Full-stack</span><span class="badge">LIVE · koperasiupayaupr.org</span>

<div class="row" style="margin-top:14px">
<div class="col" style="flex:1.15">
<img class="shot" src="assets/koperasi-home.png" alt="Tampilan live Koperasi Upaya UPR">
<div class="muted" style="margin-top:6px">Portal live Koperasi KPRI Upaya UPR</div>
</div>
<div class="col">

- **Overview:** website resmi Koperasi Upaya UPR — profil, layanan, dan informasi operasional bagi anggota, dengan struktur **MVC** yang memisahkan data, logika, dan presentasi.
- **Fitur:** profil organisasi · informasi layanan · konten mudah dikelola · layout responsif
- **Stack:** CodeIgniter 4 · PHP · MySQL

<div class="tealband" style="margin-top:12px">
<strong>QA angle:</strong> functional testing di berbagai browser & device sebelum rilis; merancang struktur informasi yang mudah dinavigasi.
</div>

</div>
</div>

---

## Proyek 2 — Live PL Tracker

<span class="badge">2026</span><span class="badge">TypeScript · React · Vite</span><span class="badge">Live demo</span>

<div class="row" style="margin-top:12px">
<div class="col" style="flex:1.2">
<img class="shot" src="assets/livepl-home.png" alt="Live PL Tracker home">
</div>
<div class="col">

**Dashboard match center Premier League** — skor, jadwal, klasemen, dan statistik dalam pengalaman mobile-first.

<div class="row" style="gap:10px;margin-top:10px">
<div class="col card" style="padding:10px 12px"><span class="num">01</span><br><strong>Scores / Home</strong><br><span class="muted">snapshot musim & hasil</span></div>
<div class="col card" style="padding:10px 12px"><span class="num">02</span><br><strong>Schedule</strong><br><span class="muted">pekan 1–38, filter tim</span></div>
</div>
<div class="row" style="gap:10px;margin-top:10px">
<div class="col card" style="padding:10px 12px"><span class="num">03</span><br><strong>Standings & Stats</strong><br><span class="muted">20 klub, top skor/assist</span></div>
<div class="col card" style="padding:10px 12px"><span class="num">04</span><br><strong>Team & Profile</strong><br><span class="muted">favorit via localStorage</span></div>
</div>

<div class="tealband" style="margin-top:10px">
<strong>QA angle:</strong> state coverage lengkap — loading skeleton, not-found, focus-visible, reduced-motion.
</div>

</div>
</div>

---

## Live PL Tracker — Match Center

<div class="row" style="margin-top:6px">
<div class="col" style="flex:1.25">
<img class="shot" src="assets/livepl-matchcenter.png" alt="Match Center detail pertandingan">
<div class="muted" style="margin-top:6px">Detail pertandingan: skor, gol, statistik, lineup, timeline</div>
</div>
<div class="col">

<div class="row" style="gap:16px">
<div class="col"><div class="kpi">38</div><div class="kpilabel">Pekan pertandingan</div></div>
<div class="col"><div class="kpi">20</div><div class="kpilabel">Klub Premier League</div></div>
</div>
<div class="row" style="gap:16px;margin-top:16px">
<div class="col"><div class="kpi">2024/25</div><div class="kpilabel">Data musim final</div></div>
<div class="col"><div class="kpi">5</div><div class="kpilabel">Area Match Center</div></div>
</div>

<div class="card" style="margin-top:16px">

**Challenge → Solusi**
Rate limit API Footbal → **mock data deterministik**: alur dapat direproduksi tanpa API key, tanpa login — ramah untuk review & pengujian.

</div>

</div>
</div>

---

## Proyek 3 — SQL Data Analysis Portfolio

<span class="badge">5 proyek</span><span class="badge">MySQL · MariaDB</span><span class="badge">5 sertifikat DQLab</span>

<div class="row" style="margin-top:12px">
<div class="col" style="flex:1.1">
<img class="shot" src="assets/sql-repo.png" alt="Repository SQL Data Analysis Portfolio">
</div>
<div class="col">

| #   | Proyek SQL               | Fokus                 |
| --- | ------------------------ | --------------------- |
| 1   | Fundamental SQL          | `GROUP BY`, `HAVING`  |
| 2   | Data Engineer Challenge  | Produk & transaksi    |
| 3   | Retail Sales Performance | Pendapatan & promosi  |
| 4   | B2B Customer Analytics   | Segmentasi pelanggan  |
| 5   | E-Commerce Analysis      | **30 kueri** analisis |

<div class="tealband" style="margin-top:12px">
<strong>QA angle:</strong> SQL untuk <strong>validasi data</strong> — rekonstruksi angka dari tabel sumber, cek konsistensi hasil, dan menelusuri akar cause defect terkait data.
</div>

</div>
</div>

---

## Kemampuan untuk posisi Junior QA Engineer

<div class="row">
<div class="col card">

**Functional testing**
Terbiasa memverifikasi fitur di browser & device berbeda, menyusun skenario positive/negative/edge, dan menjalankannya secara terstruktur.

</div>
<div class="col card">

**Identifikasi & dokumentasi defect**
Membuat 135 test case + 2 laporan bug lengkap dengan langkah reproduksi, severity, dan bukti — siap dikonsumsi developer.

</div>
</div>

<div class="row" style="margin-top:14px">
<div class="col card">

**SQL & verifikasi data**
5 proyek analisis SQL — query untuk menelusuri inkonsistensi data saat menyelidiki akar cause sebuah defect.

</div>
<div class="col card">

**Kolaborasi dengan tim pengembangan**
Pengalaman kerja bersama helpdesk, teknisi, sales, CSR, dan klien — koordinasi lintas fungsi untuk menutup loop perbaikan.

</div>
</div>

<div class="tealband">
<strong>Kejujuran & kesiapan:</strong> pengalaman profesional saya belum di role QA penuh — namun fondasi web development, functional testing, troubleshooting, dan SQL, ditambah dokumentasi QA yang saya susun sendiri, menjadi landasan kuat untuk belajar cepat dan berkontribusi bersama tim.
</div>

---

<!-- _class: lead -->
<!-- _paginate: false -->

<div class="kicker">Terima kasih</div>

# Mari terhubung

<div class="row" style="margin-top:20px">
<div class="col card">

**Kontak**
✉️ reshaanandarahman@gmail.com
🔗 linkedin.com/in/resha-ananda-rahman
💻 github.com/Res-ha
🌐 reshaananda-portfolio.vercel.app

</div>
<div class="col card">

**Proyek**
🤝 koperasiupayaupr.org
⚽ live-sports-tracker-zeta.vercel.app
🗄️ github.com/Res-ha/sql-data-analysis-portfolio

</div>
</div>

<div class="tealband" style="margin-top:22px">
<strong>Resha Ananda Rahman</strong> · S1 Teknik Informatika · IPK 3,62/4,00 · Palangka Raya, Kalimantan Tengah
</div>
