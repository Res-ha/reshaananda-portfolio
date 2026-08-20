import type { Localized } from "@/lib/i18n";
import cybersecurityBadge from "@/assets/certifications/cybersecurity-essentials.png";
import cybersecurityCertificate from "@/assets/certifications/cybersecurity-essentials-certificate.png";
import dataAnalyticsBadge from "@/assets/certifications/data-analytics-essentials.png";
import dataAnalyticsCertificate from "@/assets/certifications/data-analytics-essentials-certificate.png";
import bigDataCertificate from "@/assets/certifications/big-data-using-python.png";
import dqlabCertificate from "@/assets/certifications/data-analyst-python-track.png";

export type Certification = {
  id: string;
  name: Localized<string>;
  issuer: string;
  credentialId: string;
  type: Localized<string>;
  category: Localized<string>;
  issueDate: Localized<string>;
  image: string;
  detailImage: string;
  description: Localized<string>;
};

export const certifications: Certification[] = [
  {
    id: "dqlab-data-analyst-python-track",
    name: { en: "Data Analyst Python Track", id: "Data Analyst Python Track" },
    issuer: "DQLab",
    credentialId: "#DQLABDATRCPNUPKO",
    type: { en: "Course", id: "Kursus" },
    category: { en: "Data analytics", id: "Analisis data" },
    issueDate: { en: "August 13, 2026", id: "13 Agustus 2026" },
    image: dqlabCertificate,
    detailImage: dqlabCertificate,
    description: {
      en: "A DQLab learning track focused on Python fundamentals and practical data analyst workflows.",
      id: "Learning track DQLab yang berfokus pada dasar Python dan alur kerja praktis data analyst.",
    },
  },
  {
    id: "big-data-using-python",
    name: { en: "Big Data using Python", id: "Big Data using Python" },
    issuer: "Fresh Graduate Academy, Digital Talent Scholarship 2024",
    credentialId: "19584621120-15/FGA/BLSDM.Kominfo/2024",
    type: { en: "Training", id: "Pelatihan" },
    category: { en: "Data analytics", id: "Analisis data" },
    issueDate: { en: "September 9, 2024", id: "9 September 2024" },
    image: bigDataCertificate,
    detailImage: bigDataCertificate,
    description: {
      en: "A 130-hour Fresh Graduate Academy training covering data analysis fundamentals, SQL, spreadsheets, Python, and a final project.",
      id: "Pelatihan Fresh Graduate Academy selama 130 jam yang mencakup dasar analisis data, SQL, spreadsheet, Python, dan proyek akhir.",
    },
  },
  {
    id: "data-analytics-essentials",
    name: { en: "Data Analytics Essentials", id: "Data Analytics Essentials" },
    issuer: "Cisco Networking Academy",
    credentialId: "060223bc-e55b-4e7d-8a12-f8b472da9113",
    type: { en: "Course", id: "Kursus" },
    category: { en: "Data analytics", id: "Analisis data" },
    issueDate: { en: "July 10, 2024", id: "10 Juli 2024" },
    image: dataAnalyticsBadge,
    detailImage: dataAnalyticsCertificate,
    description: {
      en: "A Cisco Networking Academy course offered through Universitas Palangka Raya covering essential data analytics concepts.",
      id: "Kursus Cisco Networking Academy melalui Universitas Palangka Raya yang membahas konsep dasar analisis data.",
    },
  },
  {
    id: "cybersecurity-essentials",
    name: { en: "Cybersecurity Essentials", id: "Cybersecurity Essentials" },
    issuer: "Cisco Networking Academy",
    credentialId: "26fc149c-5100-443c-8f14-197b572d995b",
    type: { en: "Course", id: "Kursus" },
    category: { en: "Cybersecurity", id: "Keamanan siber" },
    issueDate: { en: "November 30, 2022", id: "30 November 2022" },
    image: cybersecurityBadge,
    detailImage: cybersecurityCertificate,
    description: {
      en: "A Cisco Networking Academy course covering core cybersecurity concepts, threats, and protective practices.",
      id: "Kursus Cisco Networking Academy yang membahas konsep inti keamanan siber, ancaman, dan praktik perlindungan.",
    },
  },
];

export const education = {
  institution: "Universitas Palangka Raya",
  degree: {
    en: "Bachelor of Informatics Engineering (S.T.)",
    id: "S1 Teknik Informatika (S.T.)",
  } satisfies Localized<string>,
  period: {
    en: "September 2020 - June 2024",
    id: "September 2020 - Juni 2024",
  } satisfies Localized<string>,
  gpa: "3.62/4.00",
};
