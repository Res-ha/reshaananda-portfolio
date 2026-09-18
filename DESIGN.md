# DESIGN.md: Editorial Developer Portfolio

Dokumen ini adalah acuan visual dan UX untuk website portofolio Resha Ananda Rahman. Arah baru mempelajari kekuatan [Brittany Chiang v4](https://v4.brittanychiang.com/), lalu menerjemahkannya menjadi identitas Resha sendiri. Implementasi tidak menyalin teks, struktur, atau detail visual secara satu banding satu.

## 1. Design read

- **Jenis pekerjaan:** redesign menyeluruh pada tampilan, tanpa menghapus route, isi, bilingual, SEO, dan fitur yang sudah ada.
- **Audiens utama:** recruiter, hiring manager, calon klien, dan kolaborator teknis.
- **Kesan yang dituju:** tenang, teknis, terpercaya, tajam, dan mudah dipindai.
- **Bahasa visual:** dark editorial-technologist dengan tipografi besar, ruang kosong luas, komposisi asimetris, dan satu aksen copper.
- **Design variance:** 6 dari 10.
- **Motion intensity:** 5 dari 10.
- **Visual density:** 4 dari 10.

## 2. Hasil audit referensi

Pola yang layak diadaptasi:

1. Hero berbasis teks dengan urutan hierarki yang sangat jelas: sapaan, nama, positioning, deskripsi, lalu CTA.
2. Navigasi tetap ringkas dan selalu mudah dijangkau.
3. Alur cerita berurutan: perkenalan, tentang, kemampuan, pengalaman, proyek, lalu kontak.
4. Aksen copper hanya dipakai untuk state aktif, link penting, fokus, dan detail interaktif.
5. Pengalaman kerja memakai tab agar informasi padat tetap mudah dipindai.
6. Proyek unggulan memakai komposisi editorial bergantian antara visual dan penjelasan.
7. Kontak ditutup dengan satu pesan dan satu aksi utama, bukan form yang berat pada homepage.
8. Motion dipakai untuk orientasi dan feedback, bukan sebagai dekorasi utama.

Hal yang tidak disalin:

- Nomor pada judul section.
- Copywriting, urutan data, atau identitas merek Brittany Chiang.
- Gatsby, styled-components, Anime.js, dan ScrollReveal dari implementasi asli.
- Overlay gambar yang membuat teks atau detail proyek sulit dibaca.

## 3. Teknologi

### Wajib dan sudah tersedia

| Teknologi                  | Peran                                                              |
| -------------------------- | ------------------------------------------------------------------ |
| React 19 + TypeScript      | Komponen, state interaktif, tab pengalaman, dan rendering halaman. |
| Vite                       | Development server dan production build.                           |
| React Router               | Route detail yang sudah ada dan navigasi hash di homepage.         |
| Tailwind CSS v4            | Layout, responsive behavior, state, dan semantic color tokens.     |
| Base UI / komponen lokal   | Sheet mobile dan primitive aksesibel.                              |
| Lucide React               | Ikon konsisten yang sudah dipakai proyek.                          |
| Geist Variable             | Tipografi utama.                                                   |
| IntersectionObserver lokal | Reveal on scroll tanpa dependensi animasi tambahan.                |

### Tambahan yang tidak diperlukan

- Tidak perlu migrasi ke Gatsby.
- Tidak perlu styled-components karena token dan styling sudah ditangani Tailwind serta CSS variables.
- Tidak perlu Framer Motion, GSAP, Anime.js, atau ScrollReveal. CSS transition dan IntersectionObserver mencukupi untuk intensitas motion yang dipilih.
- Tidak perlu backend atau koneksi Lovable.

### Font metadata teknis

Gunakan stack monospace lokal untuk label kecil, periode, teknologi, dan metadata:

```css
ui-monospace, "SFMono-Regular", Consolas, "Liberation Mono", monospace
```

Tidak ada paket font tambahan agar ukuran bundle tetap hemat.

## 4. Sistem visual

### Palet

Satu aksen saja: copper. Neutrals memakai keluarga ink yang dingin agar copper terasa hangat tanpa mengubah keseluruhan halaman menjadi beige.

| Token            | Light                    | Dark                    |
| ---------------- | ------------------------ | ----------------------- |
| Background       | cool off-white `#f3f4f2` | ink `#0b1118`           |
| Surface          | soft white `#fafaf7`     | charcoal `#131d26`      |
| Elevated surface | cool gray `#e6e9e7`      | blue charcoal `#1a2934` |
| Foreground       | dark ink `#1c242a`       | warm ivory `#e9e4da`    |
| Muted            | steel `#5d686c`          | smoke `#93a0a8`         |
| Border           | ink 14%                  | steel ink `#2b3942`     |
| Primary          | deep copper `#9c4e2b`    | copper `#d88b55`        |
| Primary hover    | dark copper `#7f3e21`    | light copper `#e7a372`  |

### Tipografi

- Display: Geist Variable, `font-weight: 650-750`, tracking rapat.
- Body: Geist Variable, ukuran 16 sampai 18 px dan leading lega.
- Metadata: system monospace, uppercase seperlunya, tracking ringan.
- Hero desktop memakai skala fluid dengan `clamp()` agar proporsional dari tablet sampai layar lebar.
- Satu `h1` per halaman dan urutan heading harus tetap semantik.

### Bentuk

- Button: radius 4 sampai 6 px, bukan pill.
- Card: radius 8 sampai 12 px bila grouping memang membutuhkan surface.
- Portrait: radius kecil dengan outline offset sebagai aksen.
- Badge teknologi: tanpa capsule berlebihan; gunakan teks monospace atau chip radius kecil.

## 5. Layout dan komponen

### Navigasi

- Header sticky dengan background translucent agar konten tetap memiliki konteks.
- Logo monogram di kiri.
- Link utama, bahasa, tema, dan CTA kontak di kanan.
- Mobile memakai sheet dengan tap target minimum 44 px.
- Route lama tetap tersedia untuk menjaga deep link dan SEO.

### Side rails

- Desktop besar menampilkan social links di sisi kiri dan email vertikal di sisi kanan.
- Disembunyikan pada layar kecil agar tidak mengganggu ruang baca.
- Seluruh link memiliki label aksesibel dan focus state.

### Hero

- Minimum tinggi sekitar satu viewport pada desktop.
- Urutan: sapaan monospace, nama, positioning, deskripsi singkat, dua CTA.
- Tidak memakai card, badge status, atau visual dekoratif yang mengalahkan headline.
- CTA utama menuju proyek, CTA kedua menuju kontak.

### About preview

- Grid dua kolom: copy dan portrait.
- Portrait memakai treatment copper tipis dan border offset.
- Daftar teknologi dibuat ringkas, maksimal dua kolom.
- Tautan menuju halaman About untuk cerita lengkap.

### Capabilities

- Tiga kelompok editorial dengan garis atas.
- Tidak dibuat menjadi tiga card identik.
- Label "sedang dipelajari" hanya muncul pada area data.

### Experience

- Tab vertikal pada desktop dan tab horizontal yang dapat digulir pada mobile.
- Satu panel aktif berisi role, perusahaan, periode, dan highlight hasil kerja.
- Tab bisa dioperasikan dengan keyboard dan memiliki `aria-selected`.

### Featured projects

- Tiga proyek pilihan dengan arah visual bergantian.
- Gambar asli dipakai jika tersedia.
- Proyek tanpa screenshot memakai bidang tipografis bermerek, bukan screenshot palsu.
- Ringkasan, peran, dampak, teknologi, dan link studi kasus tetap terbaca tanpa hover.
- Halaman `/projects` tetap menjadi katalog lengkap.

### Contact

- Homepage memakai CTA terpusat yang singkat dengan satu tombol email.
- Form tetap tersedia di route `/contact`.
- Footer memuat kredit inspirasi desain secara ringkas.

## 6. Motion

- Reveal memakai opacity dan pergeseran Y maksimal 16 px.
- Stagger pendek, 60 sampai 100 ms antar elemen.
- Hover proyek hanya menggeser visual atau ikon beberapa piksel.
- Tidak ada listener scroll manual dan tidak ada parallax.
- Semua motion non-esensial mati pada `prefers-reduced-motion: reduce`.

## 7. Responsive behavior

- **Mobile, 375 px:** satu kolom, side rails hilang, tab experience horizontal, headline tidak terpotong.
- **Tablet, 768 px:** spacing diperluas, proyek tetap satu kolom, navigasi desktop mulai digunakan jika muat.
- **Desktop, 1280 px ke atas:** konten utama maksimal 1100 px, side rails aktif, komposisi proyek bergantian.
- Konten tidak boleh bergantung pada hover.

## 8. Aksesibilitas dan UX

- Kontras minimum WCAG AA.
- Skip link tetap tersedia.
- Focus ring copper selalu terlihat di mode terang dan gelap.
- Semua icon-only button memiliki accessible name.
- Active nav dan active tab tidak ditandai oleh warna saja.
- Portrait dan screenshot memiliki alt text yang jujur.
- Form route `/contact` mempertahankan validasi inline dan status yang diumumkan.
- Tidak ada teks antarmuka dengan dash panjang; gunakan tanda baca biasa.

## 9. Batas implementasi

- Pertahankan seluruh route, data proyek, metadata SEO, bilingual, theme toggle, dan struktur data yang ada.
- Jangan menambah backend, CMS, analytics, atau integrasi Lovable.
- Jangan membuat konten pengalaman atau angka baru yang tidak didukung data proyek.
- Jangan menambah gambar buatan untuk menyamarkan ketiadaan screenshot.

## 10. Checklist QA

- [x] Homepage membentuk alur hero, about, capabilities, experience, projects, contact.
- [x] Light dan dark mode sama-sama terbaca jelas.
- [x] Viewport 375 px, 768 px, dan 1440 px tidak overflow.
- [x] Navigasi keyboard bekerja pada menu, tab, CTA, dan social links.
- [x] `prefers-reduced-motion` dihormati.
- [x] Semua route lama tetap dapat dibuka.
- [x] Build, lint, dan typecheck lulus.
- [x] Tidak ada koneksi atau branding Lovable.
- [x] Kredit inspirasi Brittany Chiang v4 tersedia secara proporsional.
