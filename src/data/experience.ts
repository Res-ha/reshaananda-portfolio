import type { Localized } from "@/lib/i18n";

export type Experience = {
  company: string;
  initials: string;
  role: Localized<string>;
  start: string;
  end: Localized<string>;
};

export const experiences: Experience[] = [
  {
    company: "PT. Telkom Akses",
    initials: "TA",
    role: {
      en: "Help Desk Provisioning & Migration",
      id: "Help Desk Provisioning & Migrasi",
    },
    start: "2025",
    end: { en: "Present", id: "Sekarang" },
  },
  {
    company: "Tingang.id",
    initials: "TI",
    role: {
      en: "Junior Web Developer (Freelance)",
      id: "Junior Web Developer (Freelance)",
    },
    start: "2024",
    end: { en: "2025", id: "2025" },
  },
  {
    company: "Universitas Palangka Raya",
    initials: "UP",
    role: {
      en: "Lab Teaching Assistant",
      id: "Asisten Praktikum Laboratorium",
    },
    start: "2023",
    end: { en: "2024", id: "2024" },
  },
  {
    company: "Koperasi Upaya UPR",
    initials: "KU",
    role: {
      en: "IT Support & Web Developer Intern",
      id: "Magang IT Support & Web Developer",
    },
    start: "2023",
    end: { en: "2023", id: "2023" },
  },
];
