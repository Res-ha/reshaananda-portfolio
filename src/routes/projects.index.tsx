import { PortfolioPageLayout } from "@/components/layout/PortfolioPageLayout";
import { ProjectCard } from "@/components/sections/projects/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

const title = "Projects - Resha Ananda Rahman";
const description =
  "Selected PHP, Laravel, CodeIgniter, WordPress, data analytics, and web development projects by Resha Ananda Rahman.";

export function ProjectsIndex() {
  const { t } = useLanguage();
  useDocumentMeta({ title, description, canonical: absoluteUrl("/projects") });

  return (
    <PortfolioPageLayout>
      <FadeIn className="max-w-2xl">
        <p className="section-kicker">{t("projects.log")}</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
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
