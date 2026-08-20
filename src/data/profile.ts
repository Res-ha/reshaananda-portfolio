import type { Localized } from "@/lib/i18n";

export const profile = {
  name: "Resha Ananda Rahman",
  initials: "RA",
  role: {
    en: "Web Developer & Data Analytics Learner",
    id: "Web Developer & Sedang Belajar Analisis Data",
  } satisfies Localized<string>,
  location: {
    en: "Palangka Raya, Central Kalimantan",
    id: "Palangka Raya, Kalimantan Tengah",
  } satisfies Localized<string>,
  email: "reshaanandarahman@gmail.com",
  cvUrl: "/cv-resha-ananda-rahman.pdf",
  headline: {
    en: "Web Developer building practical PHP, Laravel, and WordPress solutions while growing in data analytics.",
    id: "Web Developer yang membangun solusi PHP, Laravel, dan WordPress sambil mengembangkan kemampuan analisis data.",
  } satisfies Localized<string>,
  heroShort: {
    en: "I build practical websites and useful digital tools with PHP, Laravel, and WordPress while growing in data analytics.",
    id: "Saya membangun website praktis dan solusi digital dengan PHP, Laravel, dan WordPress sambil mengembangkan kemampuan analisis data.",
  } satisfies Localized<string>,
  short: {
    en: "I build and maintain PHP-based websites for clients and organizations, with a background in technical support and network troubleshooting.",
    id: "Saya membangun dan merawat website berbasis PHP untuk klien dan organisasi, dengan latar belakang dukungan teknis dan troubleshooting jaringan.",
  } satisfies Localized<string>,
  bio: [
    {
      en: "I'm Resha, a web developer based in Palangka Raya, Central Kalimantan. My background in IT support includes coordinating provisioning and migration support for 117 field technicians, handling 10+ technical tickets daily, and maintaining an 85% resolution rate against SLA.",
      id: "Saya Resha, web developer yang berdomisili di Palangka Raya, Kalimantan Tengah. Latar belakang saya di bidang IT support mencakup koordinasi dukungan provisioning dan migrasi untuk 117 teknisi lapangan, penanganan 10+ tiket teknis harian, dan tingkat resolusi 85% sesuai SLA.",
    },
    {
      en: "As a freelance web developer with Tingang.id, I helped design, build, maintain, and fix bugs across 10+ client websites in hospitality, conservation, consulting, and resort industries, improving loading performance by up to 20%.",
      id: "Sebagai pengembang web freelance bersama Tingang.id, saya membantu merancang, membangun, merawat, dan memperbaiki bug pada 10+ website klien di bidang hospitality, konservasi, konsultan, dan resort, serta meningkatkan performa loading hingga 20%.",
    },
    {
      en: "I graduated with a Bachelor's degree in Informatics from Universitas Palangka Raya with a 3.62/4.00 GPA. I also assisted practical labs in web programming, network security, and spatial analysis, and hold certifications in cybersecurity, data analytics, and Python.",
      id: "Saya lulusan S1 Teknik Informatika dari Universitas Palangka Raya dengan IPK 3,62/4,00. Saya juga pernah menjadi asisten praktikum pemrograman web, keamanan jaringan, dan analisis spasial, serta memiliki sertifikasi keamanan siber, analisis data, dan Python.",
    },
  ] satisfies Localized<string>[],
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/resha-ananda-rahman/",
      icon: "linkedin" as const,
    },
    { label: "GitHub", href: "https://github.com/Res-ha", icon: "github" as const },
    {
      label: "Instagram",
      href: "https://www.instagram.com/reshaanandaa/",
      icon: "instagram" as const,
    },
  ],
  skills: [
    "PHP",
    "Laravel",
    "CodeIgniter",
    "WordPress",
    "JavaScript",
    "Python",
    "MySQL",
    "HTML & CSS",
    "Flutter",
    "AJAX",
    "Network Troubleshooting",
    "Network Security",
    "QGIS",
    "Git",
    "Data Analytics",
    "Technical Communication",
  ],
  skillGroups: {
    web: ["PHP", "Laravel", "CodeIgniter", "WordPress", "JavaScript", "MySQL"],
    networking: ["Network Troubleshooting", "Network Security", "QGIS"],
    data: ["Python", "Data Analytics", "Flutter", "AJAX", "Git"],
  },
};
