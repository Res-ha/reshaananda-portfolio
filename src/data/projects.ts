import type { Localized } from "@/lib/i18n";

export type Project = {
  slug: string;
  title: string;
  initials: string;
  domain: string;
  year: string;
  category: Localized<string>;
  date: Localized<string>;
  summary: Localized<string>;
  stack: string[];
  caseStudy: boolean;
  link: string;
  live?: string;
  image?: string;
  overview: Localized<string>;
  features: Localized<string[]>;
  challenges: Localized<string[]>;
  outcome: Localized<string>;
};

export const projects: Project[] = [
  {
    slug: "website-realtime-pemilu",
    title: "Website Realtime Pemilu",
    initials: "WP",
    domain: "github.com/Res-ha/website-realtime-pemilu",
    year: "2026",
    category: { en: "Web App", id: "Aplikasi Web" },
    date: { en: "August 2026", id: "Agustus 2026" },
    summary: {
      en: "A real-time vote count monitor for the 2024 Central Kalimantan gubernatorial election, built with Laravel 12 and AdminLTE.",
      id: "Monitor real-time perolehan suara untuk Pilkada Gubernur Kalimantan Tengah 2024, dibangun dengan Laravel 12 dan AdminLTE.",
    },
    stack: ["Laravel 12", "AdminLTE 3", "Bootstrap 4", "SQLite"],
    caseStudy: false,
    link: "https://github.com/Res-ha/website-realtime-pemilu",
    overview: {
      en: "A real-time web app for monitoring vote tallies for the 2024 Gubernatorial and Vice-Gubernatorial Election of Central Kalimantan, covering 14 regencies/cities, 136 districts, 1,571 villages, and 4,446 polling stations. Built with Laravel 12, AdminLTE 3, and SQLite, with a custom civic theme - ink green with red accents, dark mode, self-hosted fonts, and monospace digits. All data is dummy data for demo and recap-flow simulation.",
      id: "Aplikasi web real-time untuk memantau perolehan suara Pilkada Gubernur dan Wakil Gubernur Kalimantan Tengah 2024, mencakup 14 kabupaten/kota, 136 kecamatan, 1.571 desa, dan 4.446 TPS. Dibangun dengan Laravel 12, AdminLTE 3, dan SQLite, dengan tema civic khas - hijau tinta dengan aksen merah, mode gelap, font self-hosted, dan digit monospace. Seluruh data merupakan data dummy untuk simulasi demo dan alur rekap.",
    },
    features: {
      en: [
        "Real-time vote recap as counting progresses",
        "2024 Central Kalimantan coverage: 14 regencies/cities, 136 districts, 1,571 villages, 4,446 polling stations",
        "Custom civic theme: ink green + red accents, dark mode, monospace digits",
        "Dummy data for demo and recap-flow simulation",
      ],
      id: [
        "Rekap suara real-time seiring berjalannya penghitungan",
        "Cakupan Pilkada Kalteng 2024: 14 kabupaten/kota, 136 kecamatan, 1.571 desa, 4.446 TPS",
        "Tema civic khas: hijau tinta + aksen merah, mode gelap, digit monospace",
        "Data dummy untuk simulasi demo dan alur rekap",
      ],
    },
    challenges: {
      en: [
        "Keeping data in sync without heavy polling that overloads the server.",
        "Designing a consistent civic theme (ink green + red accents, dark mode, self-hosted fonts) across every page.",
      ],
      id: [
        "Menjaga data tetap sinkron tanpa polling berat yang membebani server.",
        "Merancang tema civic yang konsisten (hijau tinta + aksen merah, mode gelap, font self-hosted) di setiap halaman.",
      ],
    },
    outcome: {
      en: "A website used live to monitor vote recaps during the election, with a stable real-time data flow and a distinctive civic theme.",
      id: "Website yang dipakai langsung untuk memantau rekap suara selama Pilkada, dengan alur data real-time yang stabil dan tema civic yang khas.",
    },
  },
  {
    slug: "website-portofolio-v2",
    title: "Website Portofolio v2",
    initials: "PV",
    domain: "website-portofolio-v2.vercel.app",
    year: "2026",
    category: { en: "Web App", id: "Aplikasi Web" },
    date: { en: "August 2026", id: "Agustus 2026" },
    summary: {
      en: "A personal portfolio built with Next.js 15 and Tailwind CSS v4, styled after the Spotlight design system.",
      id: "Portofolio pribadi yang dibangun dengan Next.js 15 dan Tailwind CSS v4, bergaya mengikuti design system Spotlight.",
    },
    stack: ["Next.js 15", "React 19", "Tailwind CSS v4", "Motion"],
    caseStudy: false,
    link: "https://github.com/Res-ha/website-portofolio-v2",
    live: "https://website-portofolio-v2.vercel.app",
    overview: {
      en: "The second iteration of Resha Ananda Rahman's personal portfolio, built with Next.js 15, Tailwind CSS v4, and Motion. It adopts the Spotlight aesthetic by Tailwind UI - calm, editorial, a Zinc palette with a Teal accent, complete with dark mode.",
      id: "Iterasi kedua portofolio pribadi Resha Ananda Rahman, dibangun dengan Next.js 15, Tailwind CSS v4, dan Motion. Mengadopsi estetika Spotlight dari Tailwind UI - tenang, editorial, palet Zinc dengan aksen Teal, lengkap dengan mode gelap.",
    },
    features: {
      en: [
        "Next.js 15 with the App Router",
        "Tailwind CSS v4 with a custom-variant dark mode",
        "Smooth animations with Motion (Framer Motion)",
        "Spotlight theme: Zinc + Teal accent, calm and editorial",
      ],
      id: [
        "Next.js 15 dengan App Router",
        "Tailwind CSS v4 dengan mode gelap custom-variant",
        "Animasi halus dengan Motion (Framer Motion)",
        "Tema Spotlight: aksen Zinc + Teal, tenang dan editorial",
      ],
    },
    challenges: {
      en: [
        "Choosing a project structure that stays clean as features grow.",
        "Setting up the deployment pipeline so every change publishes automatically.",
      ],
      id: [
        "Memilih struktur proyek yang tetap rapi seiring bertambahnya fitur.",
        "Menyiapkan pipeline deployment agar setiap perubahan terpublikasi otomatis.",
      ],
    },
    outcome: {
      en: "A live portfolio on Vercel that serves as the foundation for the next iteration.",
      id: "Portofolio live di Vercel yang menjadi fondasi untuk iterasi berikutnya.",
    },
  },
  {
    slug: "live-sports-tracker",
    title: "Live Sports Tracker",
    initials: "LS",
    domain: "live-sports-tracker-zeta.vercel.app",
    year: "2026",
    category: { en: "Web App", id: "Aplikasi Web" },
    date: { en: "August 2026", id: "Agustus 2026" },
    summary: {
      en: "Live Sports Tracker Premier League - scores, fixtures, standings, and player stats from the API-Football 2024/25 season.",
      id: "Live Sports Tracker Premier League - skor, jadwal, klasemen, dan statistik pemain dari musim API-Football 2024/25.",
    },
    stack: ["TypeScript", "React", "Vite", "API-Football"],
    caseStudy: false,
    link: "https://github.com/Res-ha/live-sports-tracker",
    live: "https://live-sports-tracker-zeta.vercel.app",
    image: "/projects/live-sports-tracker.png",
    overview: {
      en: "A Premier League tracker showing results, fixtures, standings, and player stats from API-Football (final 2024/25 season data). It showcases external REST API integration, data management, and UX customization such as favorite teams and a responsive layout.",
      id: "Tracker Premier League yang menampilkan hasil, jadwal, klasemen, dan statistik pemain dari API-Football (data final musim 2024/25). Menunjukkan integrasi REST API eksternal, pengelolaan data, dan kustomisasi UX seperti tim favorit serta layout responsif.",
    },
    features: {
      en: [
        "Per-match Match Center: score, goalscorers, stats, lineups, timeline",
        "Tabbed detail panel: Preview, Squad, Stats, Table, Info",
        "Master-detail schedule across weeks 1-38 with kickoff times and crests",
        "Standings, top scorers, and top assists for 2024/25",
      ],
      id: [
        "Match Center per pertandingan: skor, pencetak gol, statistik, susunan pemain, timeline",
        "Panel detail bertab: Preview, Squad, Stats, Table, Info",
        "Jadwal master-detail pekan 1-38 dengan jam kickoff dan logo tim",
        "Klasemen, top skor, dan top assist untuk 2024/25",
      ],
    },
    challenges: {
      en: [
        "Managing API-Football rate limits while keeping updates timely.",
        "Keeping performance smooth when many matches run at the same time.",
      ],
      id: [
        "Mengelola batas rate API-Football sambil menjaga pembaruan tetap tepat waktu.",
        "Menjaga performa tetap halus saat banyak pertandingan berjalan bersamaan.",
      ],
    },
    outcome: {
      en: "A live tracker deployed on Vercel, serving real-time match data with a lightweight UI.",
      id: "Tracker live yang di-deploy di Vercel, menyajikan data pertandingan real-time dengan UI yang ringan.",
    },
  },
  {
    slug: "koperasi-berbasis-website",
    title: "Koperasi Berbasis Website",
    initials: "KB",
    domain: "koperasiupayaupr.org",
    year: "2024",
    category: { en: "Web App", id: "Aplikasi Web" },
    date: { en: "June 2024", id: "Juni 2024" },
    summary: {
      en: "The official website for Koperasi Upaya Universitas Palangka Raya - profiles, services, and operational info for members.",
      id: "Website resmi Koperasi Upaya Universitas Palangka Raya - profil, layanan, dan informasi operasional bagi anggota.",
    },
    stack: ["CodeIgniter 4", "PHP", "MySQL"],
    caseStudy: true,
    link: "https://github.com/Res-ha/Koperasi-Berbasis-Website",
    live: "https://koperasiupayaupr.org",
    overview: {
      en: "The official website of Koperasi Upaya, Universitas Palangka Raya, built on the CodeIgniter 4 framework. It publishes the cooperative's profile, services, and operational information to members and the public, with an MVC structure that cleanly separates data, logic, and presentation.",
      id: "Website resmi Koperasi Upaya, Universitas Palangka Raya, yang dibangun dengan framework CodeIgniter 4. Menyajikan profil koperasi, layanan, dan informasi operasional kepada anggota dan publik, dengan struktur MVC yang memisahkan data, logika, dan presentasi secara rapi.",
    },
    features: {
      en: [
        "Organization profile and information",
        "Cooperative services information",
        "Content that is easy to manage",
        "Responsive layout",
      ],
      id: [
        "Profil dan informasi organisasi",
        "Informasi layanan koperasi",
        "Konten yang mudah dikelola",
        "Layout responsif",
      ],
    },
    challenges: {
      en: [
        "Designing an information structure that is easy to navigate for visitors.",
        "Shipping the first production website from zero to release.",
      ],
      id: [
        "Merancang struktur informasi yang mudah dinavigasi pengunjung.",
        "Menerbitkan website produksi pertama dari nol hingga rilis.",
      ],
    },
    outcome: {
      en: "The cooperative's official website, live at koperasiupayaupr.org, strengthening its digital presence.",
      id: "Website resmi koperasi, live di koperasiupayaupr.org, memperkuat kehadiran digitalnya.",
    },
  },
  {
    slug: "analisis-sentiment-topic-modeling",
    title: "Analisis Sentimen Berbasis Aspek & Topic Modeling",
    initials: "AS",
    domain: "github.com/Res-ha/Analisis-Sentiment-Berbasis-Aspek-Topic-Modellling",
    year: "2024",
    category: { en: "Data Science", id: "Ilmu Data" },
    date: { en: "June 2024", id: "Juni 2024" },
    summary: {
      en: "Aspect-based sentiment analysis combined with topic modeling on Indonesian text, built as a Jupyter notebook study.",
      id: "Analisis sentimen berbasis aspek yang dipadukan dengan topic modeling pada teks Bahasa Indonesia, disusun sebagai studi Jupyter notebook.",
    },
    stack: ["Python", "Jupyter", "Pandas"],
    caseStudy: false,
    link: "https://github.com/Res-ha/Analisis-Sentiment-Berbasis-Aspek-Topic-Modellling",
    overview: {
      en: "An aspect-based sentiment analysis study combined with topic modeling on Indonesian text, delivered as a reproducible Jupyter notebook.",
      id: "Studi analisis sentimen berbasis aspek yang dipadukan dengan topic modeling pada teks Bahasa Indonesia, disajikan sebagai Jupyter notebook yang dapat direproduksi.",
    },
    features: {
      en: [
        "Aspect extraction from text",
        "Topic modeling to cluster topics",
        "Sentiment labeling",
        "Reproducible notebook",
      ],
      id: [
        "Ekstraksi aspek dari teks",
        "Topic modeling untuk mengelompokkan topik",
        "Pelabelan sentimen",
        "Notebook yang dapat direproduksi",
      ],
    },
    challenges: {
      en: [
        "Preprocessing informal Indonesian text.",
        "Choosing a topic modeling approach and interpreting its results.",
      ],
      id: [
        "Preprocessing teks Bahasa Indonesia yang informal.",
        "Memilih pendekatan topic modeling dan menginterpretasikan hasilnya.",
      ],
    },
    outcome: {
      en: "A well-documented sentiment analysis study in notebook form, useful as a reference for text analysis research.",
      id: "Studi analisis sentimen yang terdokumentasi baik dalam bentuk notebook, berguna sebagai referensi penelitian analisis teks.",
    },
  },
  {
    slug: "online-shop-codeigniter",
    title: "Online Shop CodeIgniter",
    initials: "OS",
    domain: "github.com/Res-ha/Online-Shop-CI",
    year: "2024",
    category: { en: "E-commerce", id: "Toko Online" },
    date: { en: "June 2024", id: "Juni 2024" },
    summary: {
      en: "An online shop built on the CodeIgniter framework - products, cart, and orders.",
      id: "Toko online yang dibangun di atas framework CodeIgniter - produk, keranjang, dan pesanan.",
    },
    stack: ["CodeIgniter 4", "PHP", "MySQL"],
    caseStudy: false,
    link: "https://github.com/Res-ha/Online-Shop-CI",
    overview: {
      en: "An online shop built on the CodeIgniter 4 App Starter. It manages products, shopping carts, and orders with an MVC architecture, released under the MIT license as a learning starter for PHP web development.",
      id: "Toko online yang dibangun di atas CodeIgniter 4 App Starter. Mengelola produk, keranjang belanja, dan pesanan dengan arsitektur MVC, dirilis di bawah lisensi MIT sebagai starter belajar pengembangan web PHP.",
    },
    features: {
      en: ["Product and category management", "Shopping cart", "Order flow", "MVC code structure"],
      id: [
        "Manajemen produk dan kategori",
        "Keranjang belanja",
        "Alur pesanan",
        "Struktur kode MVC",
      ],
    },
    challenges: {
      en: [
        "Following CodeIgniter framework conventions consistently.",
        "Separating business logic, data, and presentation for easy maintenance.",
      ],
      id: [
        "Mengikuti konvensi framework CodeIgniter secara konsisten.",
        "Memisahkan logika bisnis, data, dan presentasi agar mudah dirawat.",
      ],
    },
    outcome: {
      en: "An open-source online shop project under the MIT license that serves as a starter for learning CodeIgniter.",
      id: "Proyek toko online open-source di bawah lisensi MIT yang menjadi starter untuk belajar CodeIgniter.",
    },
  },
];
