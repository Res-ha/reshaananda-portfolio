import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export function ProjectCard({ project }: { project: Project }) {
  const { pick, t } = useLanguage();
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-800/5 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:shadow-black/20">
      <div className="aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-zinc-900 transition-colors duration-300 group-hover:bg-teal-800 dark:bg-zinc-100 dark:group-hover:bg-teal-500">
            <span
              aria-hidden="true"
              className="text-4xl font-semibold text-white dark:text-zinc-900"
            >
              {project.initials}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">{project.year}</p>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="transition-colors duration-300 group-hover:text-teal-700 dark:group-hover:text-teal-400"
            >
              {project.title}
            </Link>
          </h2>
          {project.caseStudy && (
            <span className="shrink-0 rounded-full bg-zinc-900/5 px-2.5 py-0.5 text-xs font-medium text-zinc-600 ring-1 ring-zinc-900/10 dark:bg-white/10 dark:text-zinc-300 dark:ring-white/10">
              {t("project.caseStudy")}
            </span>
          )}
        </div>

        <p className="line-clamp-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {pick(project.summary)}
        </p>

        <div className="mt-1 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-white/10"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-zinc-100 pt-4 dark:border-zinc-800">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors duration-300 hover:border-teal-700 hover:text-teal-700 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-teal-400 dark:hover:text-teal-400"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-teal-800 active:scale-[0.98] dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {t("project.liveDemo")}
            </a>
          ) : (
            <Link
              to="/projects/$slug"
              params={{ slug: project.slug }}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-teal-700 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-teal-800 active:scale-[0.98] dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400"
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
