import { createFileRoute, Link } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { PortfolioPageLayout } from "@/components/layout/PortfolioPageLayout";
import { CareerSection } from "@/components/sections/about/CareerSection";
import { EducationSection } from "@/components/sections/about/EducationSection";
import { SkillBadges } from "@/components/sections/about/SkillBadges";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/i18n";
import { absoluteUrl, personStructuredData, siteUrl } from "@/lib/seo";
import portrait from "@/assets/portrait.jpg";

const title = "About Resha Ananda Rahman | Web Developer & Data Analytics Learner";
const description =
  "Learn about Resha Ananda Rahman, a Web Developer in Palangka Raya with experience in PHP, Laravel, WordPress, client website maintenance, and ongoing data analytics study.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: absoluteUrl("/about") },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "@id": `${siteUrl}/about#profilepage`,
          name: title,
          url: absoluteUrl("/about"),
          mainEntity: personStructuredData,
          inLanguage: ["en", "id"],
        },
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: About,
});

function About() {
  const { pick, t } = useLanguage();
  return (
    <PortfolioPageLayout>
      <FadeIn delay={100}>
        <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_220px] md:items-start">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t("about.title")}
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">{pick(profile.headline)}</p>

            <div className="mt-12 space-y-6">
              {profile.bio.map((paragraph) => (
                <p key={paragraph.en} className="text-base leading-relaxed text-muted-foreground">
                  {pick(paragraph)}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="min-h-11 rounded-full px-5"
                render={<a href={profile.cvUrl} download />}
              >
                {t("experience.download")}
                <Download className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="min-h-11 rounded-full px-5"
                render={<Link to="/certifications" />}
              >
                {t("about.viewCertifications")}
              </Button>
            </div>
          </div>

          <figure className="order-first md:order-last">
            <img
              src={portrait}
              alt={t("home.portraitAlt")}
              width={900}
              height={900}
              loading="eager"
              decoding="async"
              className="aspect-square w-40 rounded-3xl object-cover ring-1 ring-border sm:w-48 md:w-full"
            />
          </figure>
        </div>
      </FadeIn>

      <FadeIn delay={180} className="mt-20">
        <CareerSection />
      </FadeIn>

      <FadeIn delay={240} className="mt-20">
        <EducationSection />
      </FadeIn>

      <FadeIn delay={300} className="mt-20">
        <section aria-labelledby="tools-heading">
          <h2
            id="tools-heading"
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          >
            {t("about.tools")}
          </h2>
          <div className="mt-6">
            <SkillBadges skills={profile.skills} />
          </div>
        </section>
      </FadeIn>
    </PortfolioPageLayout>
  );
}
