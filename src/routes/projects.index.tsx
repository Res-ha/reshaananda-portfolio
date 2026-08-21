import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPageLayout } from "@/components/layout/PortfolioPageLayout";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { SectionMarker } from "@/components/sections/shared/SectionMarker";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects - Resha Ananda Rahman" },
      {
        name: "description",
        content:
          "Selected PHP, Laravel, CodeIgniter, WordPress, data analytics, and web development projects by Resha Ananda Rahman.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/projects") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/projects") }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const { t } = useLanguage();
  return (
    <PortfolioPageLayout>
      <FadeIn className="max-w-2xl">
        <SectionMarker index="00" label={t("projects.log")} />
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {t("projects.title")}
        </h1>
        <p className="mt-2 border-b border-dashed border-border pb-6 text-base leading-relaxed text-muted-foreground">
          {t("projects.intro")}
        </p>
      </FadeIn>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 60} className="h-full">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </PortfolioPageLayout>
  );
}
