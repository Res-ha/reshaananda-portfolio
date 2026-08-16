import type { Localized } from "@/lib/i18n";

export type Post = {
  slug: string;
  date: string;
  title: Localized<string>;
  dateLabel: Localized<string>;
  excerpt: Localized<string>;
  body: Localized<string[]>;
};

export const posts: Post[] = [
  {
    slug: "kenapa-saya-masih-pakai-php",
    title: {
      en: "Why I still use PHP in 2026",
      id: "Kenapa saya masih pakai PHP di 2026",
    },
    date: "2026-06-12",
    dateLabel: { en: "12 June 2026", id: "12 Juni 2026" },
    excerpt: {
      en: "A lot of people say PHP is past its time. I think the language isn't the problem - it's how we use it.",
      id: "Banyak yang bilang PHP sudah lewat masanya. Menurut saya bukan bahasanya yang jadi masalah, tapi cara kita memakainya.",
    },
    body: {
      en: [
        "Whenever I mention I code in PHP day to day, usually one or two people raise an eyebrow. Fair enough. But after years of maintaining client projects that have to run on cheap hosting and stay easy to hand over to someone else, I'm increasingly convinced PHP is still a sensible choice.",
        "What changed isn't the language, it's the ecosystem. Laravel keeps project structure tidy without memorizing weird conventions. Composer solved the dependency problems that used to drive me crazy. And PHP 8 itself is much stricter about types.",
        "My advice is simple: don't pick a language because it's being talked about right now. Pick one you can maintain on your own two years from now, and that your team can pick up if you're on leave.",
      ],
      id: [
        "Setiap kali saya bilang sehari-hari ngoding PHP, biasanya ada satu-dua orang yang mengangkat alis. Wajar sih. Tapi setelah beberapa tahun mengurus proyek klien yang harus jalan di hosting murah dan tetap gampang diserahkan ke orang lain, saya makin yakin PHP masih pilihan yang masuk akal.",
        "Yang berubah bukan bahasanya, tapi ekosistemnya. Laravel bikin struktur proyek jadi rapi tanpa harus menghafal konvensi aneh. Composer menyelesaikan masalah dependensi yang dulu bikin pusing. Dan PHP 8 sendiri sudah jauh lebih ketat soal tipe data.",
        "Saran saya sederhana: jangan pilih bahasa karena sedang ramai dibicarakan. Pilih yang bisa kamu rawat sendiri dua tahun ke depan, dan yang tim kamu bisa lanjutkan kalau kamu sedang cuti.",
      ],
    },
  },
  {
    slug: "catatan-troubleshooting-jaringan",
    title: {
      en: "Small notes on office network troubleshooting",
      id: "Catatan kecil soal troubleshooting jaringan kantor",
    },
    date: "2026-04-03",
    dateLabel: { en: "3 April 2026", id: "3 April 2026" },
    excerpt: {
      en: "Before blaming the ISP, there are a few boring steps that almost always find the real culprit.",
      id: "Sebelum menyalahkan ISP, ada beberapa langkah membosankan yang hampir selalu menemukan biang masalahnya.",
    },
    body: {
      en: [
        "Most office network problems I've handled aren't caused by something complicated. A loose cable, an overheating switch, or one device flooding the network with broadcasts. The problem is we often jump straight to the most dramatic guess.",
        "The sequence I always follow is the same: check the physical layer first, then IP addresses, then DNS, then the application. Boring, but it saves time.",
        "One habit that helps the most: write everything down. The date, the symptoms, what you tried, and the result. Six months later that log is what saves you.",
      ],
      id: [
        "Sebagian besar gangguan jaringan kantor yang pernah saya tangani bukan karena hal rumit. Kabel longgar, switch kepanasan, atau satu perangkat yang membanjiri broadcast. Masalahnya, kita sering langsung menebak yang paling dramatis.",
        "Urutan yang saya pakai selalu sama: cek lapisan fisik dulu, baru alamat IP, baru DNS, baru aplikasi. Membosankan, tapi hemat waktu.",
        "Satu kebiasaan yang paling membantu: catat semuanya. Tanggal, gejala, apa yang dicoba, hasilnya. Enam bulan kemudian catatan itu yang menyelamatkan kamu.",
      ],
    },
  },
  {
    slug: "belajar-flutter-pelan-pelan",
    title: {
      en: "Learning Flutter slowly while working",
      id: "Belajar Flutter pelan-pelan sambil kerja",
    },
    date: "2026-02-18",
    dateLabel: { en: "18 February 2026", id: "18 Februari 2026" },
    excerpt: {
      en: "You don't need an intense bootcamp. Just one small feature per week, worked on until it actually runs.",
      id: "Tidak perlu bootcamp intensif. Cukup satu fitur kecil per minggu, dikerjakan sampai benar-benar jalan.",
    },
    body: {
      en: [
        "I started learning Flutter seriously when a client needed a simple courier app. The deadline was tight, so I couldn't join a long course.",
        "What worked for me: take one small feature each week (a data list, an input form, or notifications), then work on it until it actually runs on a real device, not just on the emulator.",
        "After three months, the result wasn't a fancy app, but it was good enough for ten couriers to use every day. That was more than enough.",
      ],
      id: [
        "Saya mulai serius belajar Flutter waktu ada klien butuh aplikasi kurir sederhana. Waktunya mepet, jadi saya tidak sempat ikut kelas panjang.",
        "Yang berhasil buat saya: ambil satu fitur kecil tiap minggu (daftar data, form input, atau notifikasi), lalu kerjakan sampai betul-betul jalan di perangkat asli, bukan cuma di emulator.",
        "Setelah tiga bulan, hasilnya bukan aplikasi yang megah, tapi cukup dipakai setiap hari oleh sepuluh kurir. Itu sudah lebih dari cukup.",
      ],
    },
  },
  {
    slug: "menulis-dokumentasi-yang-dibaca",
    title: {
      en: "Writing documentation that actually gets read",
      id: "Menulis dokumentasi yang benar-benar dibaca",
    },
    date: "2025-12-05",
    dateLabel: { en: "5 December 2025", id: "5 Desember 2025" },
    excerpt: {
      en: "Good documentation is short, specific, and answers the questions that actually cross the reader's mind.",
      id: "Dokumentasi bagus itu pendek, spesifik, dan menjawab pertanyaan yang benar-benar muncul di kepala pembacanya.",
    },
    body: {
      en: [
        "Project documentation often ends up as a pile of pages nobody opens. Usually because it's written to look complete, not to be used.",
        "I now write it starting from questions: how do I run this project on a new laptop? What should I do if a deploy fails? Who do I contact if the database is full?",
        "If a page doesn't answer a real question, that page can be deleted.",
      ],
      id: [
        "Dokumentasi proyek sering berakhir jadi tumpukan halaman yang tidak pernah dibuka. Biasanya karena ditulis untuk terlihat lengkap, bukan untuk dipakai.",
        "Saya sekarang menulisnya dari pertanyaan: bagaimana cara menjalankan proyek ini di laptop baru? Apa yang harus dilakukan kalau deploy gagal? Siapa yang dihubungi kalau database penuh?",
        "Kalau sebuah halaman tidak menjawab pertanyaan nyata, halaman itu boleh dihapus.",
      ],
    },
  },
];
