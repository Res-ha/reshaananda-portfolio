import type { Localized } from "@/lib/i18n";

export const profile = {
  name: "Resha Ananda Rahman",
  initials: "RA",
  role: {
    en: "IT Support Specialist & Web Developer",
    id: "Spesialis IT Support & Pengembang Web",
  } satisfies Localized<string>,
  location: {
    en: "Palangka Raya, Central Kalimantan",
    id: "Palangka Raya, Kalimantan Tengah",
  } satisfies Localized<string>,
  email: "reshaanandarahman@gmail.com",
  cvUrl: "/cv-resha-ananda-rahman.pdf",
  headline: {
    en: "IT support specialist and web developer building practical PHP, Laravel, and WordPress solutions.",
    id: "Spesialis IT support dan pengembang web yang membangun solusi praktis PHP, Laravel, dan WordPress.",
  } satisfies Localized<string>,
  short: {
    en: "I keep networks and systems running during the day, and build web applications with Laravel, CodeIgniter, and WordPress in between.",
    id: "Siang hari saya menjaga jaringan dan sistem tetap berjalan, sambil membangun aplikasi web dengan Laravel, CodeIgniter, dan WordPress.",
  } satisfies Localized<string>,
  bio: [
    {
      en: "I'm Resha, an IT support specialist and web developer based in Palangka Raya, Central Kalimantan. At PT. Telkom Akses I coordinate provisioning and migration for 117 field technicians across two branches, keeping ticket resolution at 85% against SLA.",
      id: "Saya Resha, spesialis IT support dan pengembang web yang berdomisili di Palangka Raya, Kalimantan Tengah. Di PT. Telkom Akses saya mengoordinasikan provisioning dan migrasi untuk 117 teknisi lapangan di dua cabang, menjaga penyelesaian tiket tetap di angka 85% terhadap SLA.",
    },
    {
      en: "As a freelance web developer I helped design, build, and maintain 10+ client websites with the Tingang.id team, from hospitality to conservation NGOs, and improved loading performance by up to 20%.",
      id: "Sebagai pengembang web freelance, saya membantu merancang, membangun, dan merawat 10+ website klien bersama tim Tingang.id, mulai dari sektor perhotelan hingga NGO konservasi, serta meningkatkan performa pemuatan hingga 20%.",
    },
    {
      en: "I graduated in informatics from Universitas Palangka Raya (IPK 3.62), where I also assisted practical labs in web programming, network security, and spatial analysis. I hold Cisco and DQLab certifications in cybersecurity and data analytics.",
      id: "Saya lulusan informatika Universitas Palangka Raya (IPK 3.62), tempat saya juga membantu praktikum web programming, keamanan jaringan, dan analisis spasial. Saya memegang sertifikasi Cisco dan DQLab di bidang keamanan siber dan analisis data.",
    },
  ] satisfies Localized<string>[],
  socials: [
    { label: "GitHub", href: "https://github.com/Res-ha", icon: "github" as const },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/resha-ananda-rahman/",
      icon: "linkedin" as const,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/reshaanandaa/",
      icon: "instagram" as const,
    },
    { label: "Email", href: "mailto:reshaanandarahman@gmail.com", icon: "mail" as const },
  ],
  skills: [
    "PHP",
    "Laravel",
    "CodeIgniter",
    "WordPress",
    "TypeScript",
    "JavaScript",
    "Python",
    "MySQL",
    "HTML & CSS",
    "Flutter",
    "Network Troubleshooting",
    "QGIS",
    "Git",
  ],
};
