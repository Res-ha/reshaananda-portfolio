import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PortfolioPageLayout } from "@/components/layout/PortfolioPageLayout";
import { AboutPreview } from "@/components/sections/home/AboutPreview";
import { Capabilities } from "@/components/sections/home/Capabilities";
import { ExperienceCard } from "@/components/sections/home/ExperienceCard";
import { HomeContact } from "@/components/sections/home/HomeContact";
import { ProjectListItem } from "@/components/sections/projects/ProjectListItem";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/FadeIn";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import { absoluteUrl, personStructuredData, siteUrl, websiteStructuredData } from "@/lib/seo";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

const title = `${profile.name} | Web Developer & Data Analytics Learner`;
const description =
  "Portfolio of Resha Ananda Rahman, a Web Developer in Palangka Raya specializing in PHP, Laravel, WordPress, and practical web solutions while growing in data analytics.";
const featuredProjects = [projects[2], projects[0], projects[3]].filter(
  (project): project is (typeof projects)[number] => project !== undefined,
);

export function Home() {
  const { pick, t } = useLanguage();
  useDocumentMeta({
    title,
    description,
    canonical: absoluteUrl("/"),
    structuredData: {
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
  });

  return (
    <PortfolioPageLayout className="mt-0 sm:mt-0">
      <section
        aria-labelledby="home-hero-heading"
        className="flex min-h-[calc(100svh-5rem)] items-center py-20 sm:py-24"
      >
        <FadeIn className="w-full">
          <p className="hero-copy-reveal font-mono text-sm text-primary">{t("home.greeting")}</p>
          <h1
            id="home-hero-heading"
            className="hero-title-reveal mt-5 max-w-5xl text-[clamp(3rem,8vw,6.75rem)] leading-[0.94] font-bold tracking-[-0.055em] text-foreground"
          >
            {profile.name}.
          </h1>
          <p className="hero-copy-reveal mt-4 max-w-5xl text-[clamp(2.25rem,6.5vw,5.5rem)] leading-[1] font-bold tracking-[-0.05em] text-muted-foreground [animation-delay:100ms]">
            {pick(profile.role)}.
          </p>
          <p className="hero-copy-reveal mt-7 max-w-xl text-base leading-8 text-muted-foreground [animation-delay:180ms] sm:text-lg">
            {pick(profile.heroShort)}
          </p>
          <div className="hero-copy-reveal mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
            <Button
              size="lg"
              nativeButton={false}
              className="min-h-12 rounded-md px-6 font-mono text-xs"
              render={<Link to="/projects" />}
            >
              {t("home.viewProjects")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              className="min-h-12 rounded-md border-primary px-6 font-mono text-xs text-primary hover:bg-primary/10 hover:text-primary"
              render={<a href="#contact" />}
            >
              {t("home.contactMe")}
            </Button>
          </div>
          <p className="hero-copy-reveal mt-8 flex items-center gap-3 font-mono text-[11px] text-muted-foreground [animation-delay:300ms]">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-35 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {t("home.availability")}
          </p>
        </FadeIn>
      </section>

      <FadeIn className="py-24 sm:py-32">
        <AboutPreview />
      </FadeIn>

      <FadeIn className="py-24 sm:py-32">
        <Capabilities />
      </FadeIn>

      <FadeIn className="py-24 sm:py-32">
        <ExperienceCard />
      </FadeIn>

      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="scroll-mt-28 py-24 sm:py-32"
      >
        <FadeIn className="max-w-2xl">
          <p className="section-kicker">{t("home.sectionProjects")}</p>
          <h2 id="projects-heading" className="section-title mt-4">
            {t("home.selectedProjects")}
          </h2>
        </FadeIn>
        <div className="mt-14 space-y-24 sm:space-y-32">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 80}>
              <ProjectListItem project={project} index={index} />
            </FadeIn>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            to="/projects"
            className="group inline-flex min-h-11 items-center gap-2 font-mono text-xs text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
          >
            {t("home.allProjects")}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </section>

      <FadeIn className="py-24 sm:py-36">
        <HomeContact />
      </FadeIn>
    </PortfolioPageLayout>
  );
}
