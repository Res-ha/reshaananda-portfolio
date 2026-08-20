import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/motion/FadeIn";
import { PortfolioPageLayout } from "@/components/layout/PortfolioPageLayout";
import { CertificationCard } from "@/components/ui/CertificationCard";
import { CertificationModal } from "@/components/ui/CertificationModal";
import { certifications, type Certification } from "@/data/credentials";
import { useLanguage } from "@/lib/i18n";
import { absoluteUrl, personStructuredData, siteUrl } from "@/lib/seo";

const title = "Certifications - Resha Ananda Rahman";
const description =
  "Certificates and professional learning achievements in cybersecurity, data analytics, Python, and web development by Resha Ananda Rahman.";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/certifications") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${siteUrl}/certifications#collectionpage`,
          name: title,
          url: absoluteUrl("/certifications"),
          about: personStructuredData,
          inLanguage: ["en", "id"],
        },
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/certifications") }],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <PortfolioPageLayout>
      <FadeIn className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {t("certifications.title")}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {t("certifications.intro")}
        </p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {certifications.map((certification, index) => (
          <FadeIn key={certification.id} delay={index * 60} className="h-full">
            <CertificationCard
              certification={certification}
              onOpen={() => setSelected(certification)}
            />
          </FadeIn>
        ))}
      </div>

      {selected && (
        <CertificationModal certification={selected} onClose={() => setSelected(null)} />
      )}
    </PortfolioPageLayout>
  );
}
