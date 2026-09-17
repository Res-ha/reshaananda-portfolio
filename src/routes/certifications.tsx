import { useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { PortfolioPageLayout } from "@/components/layout/PortfolioPageLayout";
import { CertificationCard } from "@/components/sections/certifications/CertificationCard";
import { CertificationModal } from "@/components/sections/certifications/CertificationModal";
import { certifications, type Certification } from "@/data/credentials";
import { useLanguage } from "@/lib/i18n";
import { absoluteUrl, personStructuredData, siteUrl } from "@/lib/seo";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

const title = "Certifications - Resha Ananda Rahman";
const description =
  "Certificates and professional learning achievements in cybersecurity, data analytics, Python, and web development by Resha Ananda Rahman.";

export function CertificationsPage() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Certification | null>(null);
  useDocumentMeta({
    title,
    description,
    canonical: absoluteUrl("/certifications"),
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteUrl}/certifications#collectionpage`,
      name: title,
      url: absoluteUrl("/certifications"),
      about: personStructuredData,
      inLanguage: ["en", "id"],
    },
  });

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
