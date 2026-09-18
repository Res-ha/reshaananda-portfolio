import type { Localized } from "@/lib/i18n";

export type Experience = {
  company: string;
  initials: string;
  role: Localized<string>;
  start: Localized<string>;
  end: Localized<string>;
  highlights: Localized<string[]>;
};

export const experiences: Experience[] = [
  {
    company: "PT. Telkom Akses",
    initials: "TA",
    role: {
      en: "Help Desk Provisioning & Migration",
      id: "Help Desk Provisioning & Migrasi",
    },
    start: { en: "July 2025", id: "Juli 2025" },
    end: { en: "August 2026", id: "Agustus 2026" },
    highlights: {
      en: [
        "Coordinated provisioning and migration support for 117 field technicians.",
        "Handled more than 10 technical tickets per day across operational workflows.",
        "Maintained an 85% resolution rate against service-level targets.",
      ],
      id: [
        "Mengoordinasikan dukungan provisioning dan migrasi untuk 117 teknisi lapangan.",
        "Menangani lebih dari 10 tiket teknis per hari dalam alur operasional.",
        "Mempertahankan tingkat resolusi 85% sesuai target layanan.",
      ],
    },
  },
  {
    company: "Tingang.id",
    initials: "TI",
    role: {
      en: "Junior Web Developer (Freelance)",
      id: "Junior Web Developer (Freelance)",
    },
    start: { en: "July 2024", id: "Juli 2024" },
    end: { en: "August 2025", id: "Agustus 2025" },
    highlights: {
      en: [
        "Helped design, build, maintain, and debug more than 10 client websites.",
        "Worked across hospitality, conservation, consulting, and resort projects.",
        "Improved loading performance by up to 20% on maintained websites.",
      ],
      id: [
        "Membantu merancang, membangun, merawat, dan memperbaiki lebih dari 10 website klien.",
        "Mengerjakan proyek hospitality, konservasi, konsultan, dan resort.",
        "Meningkatkan performa loading hingga 20% pada website yang dirawat.",
      ],
    },
  },
  {
    company: "Universitas Palangka Raya",
    initials: "UP",
    role: {
      en: "Lab Teaching Assistant",
      id: "Asisten Praktikum Laboratorium",
    },
    start: { en: "October 2023", id: "Oktober 2023" },
    end: { en: "May 2024", id: "Mei 2024" },
    highlights: {
      en: [
        "Supported practical classes in web programming, network security, and spatial analysis.",
        "Helped students troubleshoot technical exercises and understand lab workflows.",
      ],
      id: [
        "Mendampingi praktikum pemrograman web, keamanan jaringan, dan analisis spasial.",
        "Membantu mahasiswa menyelesaikan kendala teknis dan memahami alur praktikum.",
      ],
    },
  },
  {
    company: "Koperasi Upaya UPR",
    initials: "KU",
    role: {
      en: "IT Support & Web Developer Intern",
      id: "Magang IT Support & Web Developer",
    },
    start: { en: "August 2023", id: "Agustus 2023" },
    end: { en: "October 2023", id: "Oktober 2023" },
    highlights: {
      en: [
        "Supported daily IT needs while developing the cooperative's web presence.",
        "Applied a maintainable MVC structure for organization and service information.",
      ],
      id: [
        "Mendukung kebutuhan IT harian sambil membangun kehadiran web koperasi.",
        "Menerapkan struktur MVC yang mudah dirawat untuk informasi organisasi dan layanan.",
      ],
    },
  },
];
