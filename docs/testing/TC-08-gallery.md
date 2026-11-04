# TC-08 — Gallery

**Tujuan:** Memastikan galeri menampilkan foto secara lengkap, responsif, dan aksesibel.

**Prasyarat:** `npm run dev`, buka `http://localhost:5173/gallery`.

**Referensi:** PRD §3.7, §4.6; `src/routes/gallery.tsx`

| ID         | Deskripsi                                     | Langkah Pengujian                                                                                                 | Hasil yang Diharapkan                                                                                           | Jenis    |
| ---------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | -------- |
| TC-GAL-001 | Grid foto tampil lengkap                      | 1. Buka `/gallery`<br>2. Tunggu seluruh gambar dimuat                                                             | Seluruh foto dari data galeri tampil dalam grid                                                                 | Positive |
| TC-GAL-002 | Tidak ada gambar rusak (broken image)         | 1. Telusuri seluruh halaman galeri<br>2. Amati setiap slot gambar                                                 | Tidak ada ikon broken image atau slot kosong; semua request gambar status 200                                   | Positive |
| TC-GAL-003 | Setiap foto memiliki alt text                 | 1. Inspeksi seluruh `<img>` di galeri                                                                             | Semua gambar punya alt text deskriptif yang jujur (DESIGN §8)                                                   | Positive |
| TC-GAL-004 | Layout grid responsif                         | 1. Uji viewport 375px → 768px → 1440px<br>2. Amati jumlah kolom dan spasi                                         | 375px: 1 kolom · 768px: 2 kolom · 1440px: kolom lebih banyak sesuai desain; tanpa gambar terpotong aneh         | Edge     |
| TC-GAL-005 | Tidak ada overflow horizontal                 | 1. Di tiap viewport, geser halaman ke kiri-kanan (atau cek `document.documentElement.scrollWidth <= clientWidth`) | Tidak ada scroll horizontal pada galeri                                                                         | Negative |
| TC-GAL-006 | Deep link galeri berfungsi                    | 1. Paste `http://localhost:5173/gallery` langsung di address bar<br>2. Muat ulang halaman                         | Halaman render langsung tanpa blank page                                                                        | Positive |
| TC-GAL-007 | Gambar tidak memperlambat pemuatan berlebihan | 1. Buka `/gallery` di tab Network (filter Img)<br>2. Amati urutan & ukuran request                                | Gambar dimuat lazy/offscreen saat memungkinkan; tidak ada request ukuran tidak wajar yang memblokir paint utama | Edge     |
