import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";
import { PortfolioPageLayout } from "@/components/layout/PortfolioPageLayout";
import { SkillBadges } from "@/components/ui/SkillBadges";
import { FadeIn } from "@/components/motion/FadeIn";
import { education } from "@/data/credentials";
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
              <Link
                to="/experience"
                className="group inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {t("about.viewExperience")}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                to="/certifications"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {t("about.viewCertifications")}
              </Link>
              <a
                href={profile.cvUrl}
                download
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {t("experience.download")}
                <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <section aria-labelledby="education-heading" className="mt-16">
              <h2
                id="education-heading"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                {t("about.education")}
              </h2>
              <div className="mt-8 flex flex-col gap-2">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-foreground">{education.institution}</h3>
                  <p className="shrink-0 text-xs text-muted-foreground tabular-nums">
                    {pick(education.period)}
                  </p>
                </div>
                <p className="text-sm font-medium text-primary">{t("about.degree")}</p>
                <p className="text-sm text-muted-foreground">
                  {t("about.gpa")} {education.gpa}
                </p>
              </div>
            </section>

            <section aria-labelledby="tools-heading" className="mt-16">
              <h2
                id="tools-heading"
                className="text-2xl font-semibold tracking-tight text-foreground"
              >
                {t("about.tools")}
              </h2>
              <div className="mt-6">
                <SkillBadges skills={profile.skills} />
              </div>
            </section>
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
    </PortfolioPageLayout>
  );
}
