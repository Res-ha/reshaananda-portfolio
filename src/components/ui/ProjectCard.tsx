import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export function ProjectCard({ project }: { project: Project }) {
  const { pick, t } = useLanguage();
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-800/5 dark:hover:shadow-black/20">
      <div className="aspect-video w-full overflow-hidden bg-secondary">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-foreground transition-colors duration-300 group-hover:bg-primary">
            <span aria-hidden="true" className="text-4xl font-semibold text-background">
              {project.initials}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-medium text-muted-foreground">{project.year}</p>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-foreground">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="transition-colors duration-300 group-hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring"
            >
              {project.title}
            </Link>
          </h2>
          {project.caseStudy && (
            <span className="shrink-0 rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground ring-1 ring-border">
              {t("project.caseStudy")}
            </span>
          )}
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {pick(project.summary)}
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-border"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary/90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {t("project.liveDemo")}
            </a>
          ) : (
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary/90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              {t("project.view")}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
