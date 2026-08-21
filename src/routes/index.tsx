import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PortfolioPageLayout } from "@/components/layout/PortfolioPageLayout";
import { ContactCard } from "@/components/sections/contact/ContactCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Capabilities } from "@/components/sections/home/Capabilities";
import { ExperienceCard } from "@/components/sections/home/ExperienceCard";
import { ProjectListItem } from "@/components/sections/projects/ProjectListItem";
import { SectionMarker } from "@/components/sections/shared/SectionMarker";
import { SocialLinks } from "@/components/sections/shared/SocialLinks";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/Stagger";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import { absoluteUrl, personStructuredData, siteUrl, websiteStructuredData } from "@/lib/seo";

const title = `${profile.name} | Web Developer & Data Analytics Learner`;
const description =
  "Portfolio of Resha Ananda Rahman, a Web Developer in Palangka Raya specializing in PHP, Laravel, WordPress, and practical web solutions while growing in data analytics.";
const featuredProjects = [projects[2], projects[0], projects[3]].filter(
  (project): project is (typeof projects)[number] => project !== undefined,
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: siteUrl },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        "script:ld+json": {
          "@context": "https://schema.org",
          "@graph": [
            personStructuredData,
            websiteStructuredData,
            {
              "@type": "WebPage",
              "@id": `${siteUrl}/#webpage`,
              name: title,
              url: absoluteUrl("/"),
              isPartOf: { "@id": `${siteUrl}/#website` },
              about: { "@id": `${siteUrl}/#person` },
              inLanguage: ["en", "id"],
            },
          ],
        },
      },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Home,
});

function Home() {
  const { pick, t } = useLanguage();
  return (
    <PortfolioPageLayout className="mt-10 sm:mt-16">
      <section aria-labelledby="home-hero-heading">
        <FadeIn>
          <SectionMarker index="00" label={t("home.profile")} />
          <h1
            id="home-hero-heading"
            className="hero-title-reveal mt-3 max-w-3xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          >
            {profile.name}
          </h1>
          <p className="hero-copy-reveal mt-4 max-w-2xl text-lg font-medium leading-relaxed text-primary">
            {pick(profile.role)}
          </p>
          <p className="hero-copy-reveal mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground [animation-delay:180ms]">
            {pick(profile.heroShort)}
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            <Badge variant="secondary" className="h-7 gap-2 rounded-full px-3">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-30 motion-reduce:hidden" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span>{t("home.availability")}</span>
            </Badge>
            <Badge variant="outline" className="h-7 rounded-full px-3">
              {t("home.currentFocus")}
            </Badge>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              size="lg"
              className="min-h-11 rounded-full px-5"
              render={<Link to="/projects" />}
            >
              {t("home.viewProjects")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-h-11 rounded-full px-5"
              render={<a href="#contact" />}
            >
              {t("home.contactMe")}
            </Button>
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="text-sm font-medium text-muted-foreground">{t("home.connect")}</p>
            <div className="mt-3">
              <SocialLinks label={t("home.connect")} />
            </div>
          </div>
        </FadeIn>
      </section>

      <div className="mt-20 border-t border-border pt-10 sm:mt-24 sm:pt-12">
        <Capabilities />
      </div>

      <section aria-labelledby="projects-heading" className="mt-20 sm:mt-24">
        <SectionMarker index="02" label={t("home.sectionProjects")} />
        <h2
          id="projects-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {t("home.selectedProjects")}
        </h2>
        <StaggerContainer className="mt-8">
          {featuredProjects.map((project, index) => (
            <ProjectListItem key={project.slug} project={project} featured={index === 0} />
          ))}
        </StaggerContainer>
        <Link
          to="/projects"
          className="group mt-6 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {t("home.allProjects")}
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </section>

      <FadeIn className="mt-20 sm:mt-24">
        <ExperienceCard sectionIndex="03" />
      </FadeIn>

      <FadeIn delay={100} className="mt-20 sm:mt-24">
        <ContactCard sectionIndex="04" />
      </FadeIn>
    </PortfolioPageLayout>
  );
}
