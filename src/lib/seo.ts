import { profile } from "@/data/profile";

export const siteUrl = "https://reshaananda-portfolio.vercel.app";

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export const personStructuredData = {
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: profile.name,
  url: siteUrl,
  jobTitle: "Web Developer",
  description:
    "Web Developer based in Palangka Raya, Central Kalimantan, specializing in PHP, Laravel, WordPress, and practical web solutions while developing skills in data analytics.",
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Palangka Raya",
    addressRegion: "Central Kalimantan",
    addressCountry: "ID",
  },
  sameAs: profile.socials.filter(({ href }) => href.startsWith("http")).map(({ href }) => href),
  knowsAbout: [
    "Web development",
    "Network troubleshooting",
    "PHP",
    "Laravel",
    "CodeIgniter",
    "WordPress",
    "MySQL",
    "Python",
    "Data analytics",
    "Network security",
    "IT support",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Palangka Raya",
  },
};

export const websiteStructuredData = {
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Resha Ananda Rahman Portfolio",
  url: siteUrl,
  description:
    "Portfolio of Resha Ananda Rahman, a Web Developer in Palangka Raya focused on PHP, Laravel, WordPress, and data analytics.",
  publisher: { "@id": `${siteUrl}/#person` },
  inLanguage: ["en", "id"],
};
