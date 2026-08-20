import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} - Resha Ananda Rahman` },
        { name: "description", content: project.summary.en },
        { property: "og:title", content: project.title },
        { property: "og:description", content: project.summary.en },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const { pick, t } = useLanguage();

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <Container className="mt-12 sm:mt-20">
      <FadeIn className="mx-auto max-w-3xl">
        <Link
          to="/projects"
          className="group inline-flex min-h-11 items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {t("projects.back")}
        </Link>

        <h1 className="mt-8 text-4xl font-bold tracking-tight text-foreground">{project.title}</h1>

        <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <span className="rounded-full bg-teal-50 px-3 py-1 font-medium text-primary dark:bg-teal-500/10 ">
            {pick(project.category)}
          </span>
          <span>{pick(project.date)}</span>
        </p>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {pick(project.summary)}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary/90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {t("project.liveDemo")}
            </a>
          )}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors duration-300 hover:border-primary hover:text-primary active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            {t("project.sourceCode")}
          </a>
        </div>

        <div className="mt-10 grid h-52 place-items-center overflow-hidden rounded-xl border-[1.5px] border-zinc-900/10 bg-linear-to-b from-zinc-100 to-zinc-50 dark:border-white/10 dark:from-zinc-800/70 dark:to-zinc-900">
          {project.image ? (
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          ) : (
            <div className="grid h-full w-full place-items-center bg-zinc-900 dark:bg-zinc-100">
              <span
                aria-hidden="true"
                className="text-6xl font-semibold text-white dark:text-foreground"
              >
                {project.initials}
              </span>
            </div>
          )}
        </div>

        <section aria-labelledby="overview-heading" className="mt-14">
          <h2
            id="overview-heading"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            {t("projects.overview")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {pick(project.overview)}
          </p>
        </section>

        <section aria-labelledby="features-heading" className="mt-12">
          <h2
            id="features-heading"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            {t("projects.features")}
          </h2>
          <ul className="mt-4 space-y-3">
            {pick(project.features).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-teal-400"
                />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="stack-heading" className="mt-12">
          <h2 id="stack-heading" className="text-2xl font-semibold tracking-tight text-foreground">
            {t("projects.stack")}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-foreground ring-1 ring-zinc-900/5 dark:bg-zinc-800  dark:ring-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section aria-labelledby="challenges-heading" className="mt-12">
          <h2
            id="challenges-heading"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            {t("projects.challenges")}
          </h2>
          <ul className="mt-4 space-y-3">
            {pick(project.challenges).map((challenge) => (
              <li
                key={challenge}
                className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-teal-400"
                />
                {challenge}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="outcome-heading" className="mt-12">
          <h2
            id="outcome-heading"
            className="text-2xl font-semibold tracking-tight text-foreground"
          >
            {t("projects.outcome")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {pick(project.outcome)}
          </p>
        </section>

        <div className="mt-16 border-t border-border pt-8 ">
          <Link
            to="/projects"
            className="group inline-flex min-h-11 items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            {t("projects.backAll")}
          </Link>

          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="group mt-8 block rounded-xl border-[1.5px] border-zinc-900/10 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-800/5 active:scale-[0.99] dark:border-white/10"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {t("projects.next")}
            </p>
            <div className="mt-2 flex items-center justify-between gap-4">
              <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary  group-hover:text-primary">
                {next.title}
              </h3>
              <ArrowRight
                className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1 "
                aria-hidden="true"
              />
            </div>
            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {pick(next.summary)}
            </p>
          </Link>
        </div>
      </FadeIn>
    </Container>
  );
}
