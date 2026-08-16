import { createContext, useContext } from "react";

export type Lang = "en" | "id";

export type Localized<T> = { en: T; id: T };

export const messages = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.blog": "Blog",
    "nav.gallery": "Gallery",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "lang.button": "Language",
    "lang.switchTo": "Switch to Indonesian",
    "footer.rights": "All rights reserved.",
    "home.selectedProjects": "Selected projects",
    "home.allProjects": "All projects",
    "home.latestWriting": "Latest writing",
    "home.allPosts": "All posts",
    "home.skills": "Skills",
    "home.portraitAlt": "Portrait of Resha Ananda Rahman",
    "contact.title": "Get in touch",
    "contact.subtitle": "Have a project in mind or just want to say hello? Send a note.",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.emailPlaceholder": "you@example.com",
    "contact.messagePlaceholder": "Tell me a little about it…",
    "contact.send": "Send Message",
    "contact.sending": "Opening your mail app…",
    "contact.errorEmail": "Enter a valid email address.",
    "contact.errorMessage": "Please write at least 10 characters.",
    "contact.errorFix": "Please fix the fields above and try again.",
    "contact.success": "Your mail app should be open with the message ready to send.",
    "contact.response": "Responses usually within 24 hours.",
    "experience.title": "Work Experience",
    "experience.download": "Download CV",
    "experience.present": "Present",
    "project.view": "View project",
    "project.caseStudy": "Case study",
    "project.liveDemo": "Live Demo",
    "project.sourceCode": "Source Code",
    "projects.title": "Projects",
    "projects.intro":
      "A showcase of projects I've built and maintained - from real-time web apps to data analysis studies.",
    "projects.back": "Back",
    "projects.backAll": "Back to All Projects",
    "projects.next": "Next Project",
    "projects.overview": "Overview",
    "projects.features": "Key Features",
    "projects.stack": "Tech Stack",
    "projects.challenges": "Challenges & Solutions",
    "projects.outcome": "Outcome",
    "blog.title": "Notes written slowly.",
    "blog.intro":
      "Mostly small things I learn while working: code, networks, and how to tidy up processes.",
    "blog.read": "Read post",
    "blog.all": "All posts",
    "gallery.title": "A visual diary.",
    "gallery.intro": "Desks, cables, maps, and coffee - the surroundings of most of my work.",
    "about.work": "Work",
    "about.education": "Education",
    "about.tools": "Tools I reach for",
    "about.degree": "Informatics Engineering (S.T.)",
    "about.gpa": "IPK 3.62 / 4.00",
    "error.title": "This page didn't load",
    "error.desc": "Something went wrong on our end. You can try refreshing or head back home.",
    "error.tryAgain": "Try again",
    "notFound.title": "Page not found",
    "notFound.desc": "The page you're looking for doesn't exist or has been moved.",
    "notFound.goHome": "Go home",
  },
  id: {
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.blog": "Blog",
    "nav.gallery": "Galeri",
    "nav.openMenu": "Buka menu",
    "nav.closeMenu": "Tutup menu",
    "lang.button": "Bahasa",
    "lang.switchTo": "Ganti ke Inggris",
    "footer.rights": "Semua hak cipta dilindungi.",
    "home.selectedProjects": "Proyek pilihan",
    "home.allProjects": "Semua proyek",
    "home.latestWriting": "Tulisan terbaru",
    "home.allPosts": "Semua tulisan",
    "home.skills": "Keahlian",
    "home.portraitAlt": "Potret Resha Ananda Rahman",
    "contact.title": "Hubungi saya",
    "contact.subtitle": "Ada proyek di pikiran atau sekadar ingin menyapa? Kirim pesan.",
    "contact.email": "Email",
    "contact.message": "Pesan",
    "contact.emailPlaceholder": "kamu@contoh.com",
    "contact.messagePlaceholder": "Ceritakan sedikit tentangnya…",
    "contact.send": "Kirim Pesan",
    "contact.sending": "Membuka aplikasi email…",
    "contact.errorEmail": "Masukkan alamat email yang valid.",
    "contact.errorMessage": "Tulis minimal 10 karakter.",
    "contact.errorFix": "Perbaiki isian di atas lalu coba lagi.",
    "contact.success": "Aplikasi email kamu seharusnya sudah terbuka dengan pesan siap dikirim.",
    "contact.response": "Biasanya dibalas dalam 24 jam.",
    "experience.title": "Pengalaman Kerja",
    "experience.download": "Unduh CV",
    "experience.present": "Sekarang",
    "project.view": "Lihat proyek",
    "project.caseStudy": "Studi kasus",
    "project.liveDemo": "Demo Langsung",
    "project.sourceCode": "Kode Sumber",
    "projects.title": "Proyek",
    "projects.intro":
      "Jejeran proyek yang saya buat dan rawat - dari aplikasi web real-time hingga studi analisis data.",
    "projects.back": "Kembali",
    "projects.backAll": "Kembali ke Semua Proyek",
    "projects.next": "Proyek Berikutnya",
    "projects.overview": "Gambaran Umum",
    "projects.features": "Fitur Utama",
    "projects.stack": "Teknologi",
    "projects.challenges": "Tantangan & Solusi",
    "projects.outcome": "Hasil",
    "blog.title": "Catatan yang saya tulis pelan-pelan.",
    "blog.intro":
      "Kebanyakan soal hal-hal kecil yang saya pelajari sambil kerja: kode, jaringan, dan cara merapikan proses.",
    "blog.read": "Baca tulisan",
    "blog.all": "Semua tulisan",
    "gallery.title": "Buku harian visual.",
    "gallery.intro": "Meja, kabel, peta, dan kopi - lingkungan sebagian besar pekerjaan saya.",
    "about.work": "Pengalaman",
    "about.education": "Pendidikan",
    "about.tools": "Alat yang saya gunakan",
    "about.degree": "S.T. Teknik Informatika",
    "about.gpa": "IPK 3.62 / 4.00",
    "error.title": "Halaman ini gagal dimuat",
    "error.desc": "Terjadi kendala dari sisi kami. Coba muat ulang atau kembali ke beranda.",
    "error.tryAgain": "Coba lagi",
    "notFound.title": "Halaman tidak ditemukan",
    "notFound.desc": "Halaman yang kamu cari tidak ada atau sudah dipindahkan.",
    "notFound.goHome": "Ke beranda",
  },
} as const;

export type MessageKey = keyof typeof messages.en;

export type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: MessageKey) => string;
  pick: <T>(value: Localized<T>) => T;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
