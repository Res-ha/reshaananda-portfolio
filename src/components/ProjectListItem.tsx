import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export function ProjectListItem({ project }: { project: Project }) {
  const { pick, t } = useLanguage();
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block rounded-2xl p-5 transition-colors duration-300 hover:bg-white active:scale-[0.99] dark:hover:bg-zinc-800/50"
    >
      <p className="text-xs text-zinc-600 dark:text-zinc-400">
        {pick(project.date)} · {pick(project.category)}
      </p>
      <h3 className="mt-2 text-lg font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-teal-700 dark:text-zinc-100 dark:group-hover:text-teal-400">
        {project.title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
        {pick(project.summary)}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <p className="mt-4 flex items-center gap-1 text-sm font-medium text-teal-700 dark:text-teal-400">
        {t("project.view")}
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </p>
    </Link>
  );
}
