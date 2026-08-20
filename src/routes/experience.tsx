import { createFileRoute } from "@tanstack/react-router";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { PortfolioPageLayout } from "@/components/layout/PortfolioPageLayout";
import { useLanguage } from "@/lib/i18n";
import { absoluteUrl, personStructuredData, siteUrl } from "@/lib/seo";

const title = "Work Experience - Resha Ananda Rahman";
const description =
  "Professional experience of Resha Ananda Rahman across web development, IT operations, and technical education.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/experience") },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${siteUrl}/experience#profilepage`,
          name: title,
          url: absoluteUrl("/experience"),
          mainEntity: personStructuredData,
          inLanguage: ["en", "id"],
        },
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/experience") }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  const { t } = useLanguage();

  return (
    <PortfolioPageLayout>
      <FadeIn className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {t("experience.title")}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {t("experience.intro")}
        </p>
      </FadeIn>
      <FadeIn delay={100} className="mt-12">
        <ExperienceCard />
      </FadeIn>
    </PortfolioPageLayout>
  );
}
