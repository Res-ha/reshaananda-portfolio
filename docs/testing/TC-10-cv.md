# TC-10 — Download CV

**Tujuan:** Memastikan tombol Download CV membuka file PDF statis yang valid dan ikut terbawa dalam production build.

**Prasyarat:** `npm run dev`. File acuan: `public/cv-resha-ananda-rahman.pdf`.

**Referensi:** PRD §3.9, §2 Content Delivery; `src/data/profile.ts:15` (`cvUrl: "/cv-resha-ananda-rahman.pdf"`)

| ID        | Deskripsi                                            | Langkah Pengujian                                                                               | Hasil yang Diharapkan                                                                                                                                     | Jenis    |
| --------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| TC-CV-001 | Tombol Download CV membuka file PDF                  | 1. Buka halaman yang memuat tombol **Download CV** (Home atau About)<br>2. Klik tombol tersebut | Browser membuka `/cv-resha-ananda-rahman.pdf` (tab baru atau tab yang sama sesuai perilaku link)                                                          | Positive |
| TC-CV-002 | File PDF dapat dibuka dan terbaca                    | 1. Setelah tombol diklik, amati hasilnya di browser PDF viewer                                  | PDF terbuka tanpa error "corrupt"/"damaged"; identitas Resha Ananda Rahman terbaca, halaman dapat di-scroll                                               | Positive |
| TC-CV-003 | URL PDF diakses langsung                             | 1. Paste `http://localhost:5173/cv-resha-ananda-rahman.pdf` di address bar                      | Request status **200 OK**, konten tipe `application/pdf` (dilayani dari `public/`)                                                                        | Positive |
| TC-CV-004 | CV termuat dalam production build                    | 1. Jalankan `npm run build`<br>2. Periksa folder `dist/`                                        | File `dist/cv-resha-ananda-rahman.pdf` ikut tersalin ke hasil build (PRD §3.9)                                                                            | Positive |
| TC-CV-005 | CV tetap bisa diunduh pada build preview             | 1. Jalankan `npm run preview`<br>2. Buka tombol Download CV dari preview server                 | PDF terbuka dengan benar pada mode preview (bukan hanya di dev server)                                                                                    | Edge     |
| TC-CV-006 | Tautan CV konsisten antar halaman                    | 1. Bandingkan tombol Download CV di Home dan About (dan About intro)                            | Semua tombol merujuk ke path yang sama `/cv-resha-ananda-rahman.pdf`, sesuai `profile.cvUrl`                                                              | Edge     |
| TC-CV-007 | CV tidak menimbulkan mixed-content/404 di deployment | 1. Cek deployment produksi (vercel.app) atau akses via domain live<br>2. Klik Download CV       | PDF terbuka normal di domain produksi; tidak 404 (di Vercel semua rute rewrite ke index.html — pastikan aset PDF tetap dilayani sebagai file, bukan HTML) | Edge     |
