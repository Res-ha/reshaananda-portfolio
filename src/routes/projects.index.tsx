import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { FadeIn } from "@/components/motion/FadeIn";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/projects/")({
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const { t } = useLanguage();
  return (
    <Container className="mt-12 sm:mt-20">
      <FadeIn className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
          {t("projects.title")}
        </h1>
        <p className="mt-2 border-b border-dashed border-zinc-300 pb-6 text-base leading-relaxed text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
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
    </Container>
  );
}
