import type { Localized } from "@/lib/i18n";

export type Experience = {
  company: string;
  initials: string;
  role: Localized<string>;
  start: Localized<string>;
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
    start: { en: "July 2025", id: "Juli 2025" },
    end: { en: "August 2026", id: "Agustus 2026" },
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
  },
];
