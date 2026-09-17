import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { PortfolioPageLayout } from "@/components/layout/PortfolioPageLayout";
import { FadeIn } from "@/components/motion/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((item) => item.slug === slug);
  const { pick, t } = useLanguage();
  useDocumentMeta(
    project
      ? {
          title: `${project.title} - Resha Ananda Rahman`,
          description: project.summary.en,
          canonical: absoluteUrl(`/projects/${project.slug}`),
          structuredData: {
            "@context": "https://schema.org",
            "@type": "SoftwareSourceCode",
            "@id": `${siteUrl}/projects/${project.slug}#project`,
            name: project.title,
            description: project.summary.en,
            abstract: project.impact.en,
            url: absoluteUrl(`/projects/${project.slug}`),
            codeRepository: project.link,
            dateCreated: project.year,
            programmingLanguage: project.stack,
            runtimePlatform: "Web",
            creator: { "@id": `${siteUrl}/#person` },
            keywords: project.stack.join(", "),
          },
        }
      : { title: "Project not found", robots: "noindex" },
  );

  if (!project) {
    return (
      <PortfolioPageLayout>
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-foreground">{t("notFound.title")}</h1>
          <p className="mt-3 text-muted-foreground">{t("notFound.desc")}</p>
          <Link to="/projects" className="mt-6 inline-flex min-h-11 items-center text-primary">
            <ArrowLeft className="mr-1 h-4 w-4" aria-hidden="true" />
            {t("projects.backAll")}
          </Link>
        </div>
      </PortfolioPageLayout>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  if (!next) {
    return null;
  }

  return (
    <PortfolioPageLayout>
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
          <Badge
            variant="secondary"
            className="rounded-full bg-primary/10 font-medium text-primary"
          >
            {pick(project.category)}
          </Badge>
          <span>{pick(project.date)}</span>
        </p>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {pick(project.summary)}
        </p>

        <dl className="mt-8 grid gap-5 border-y border-border py-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs text-muted-foreground">{t("project.role")}</dt>
            <dd className="mt-1 text-sm font-medium text-foreground">{pick(project.role)}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">{t("project.impact")}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-foreground">{pick(project.impact)}</dd>
          </div>
          <div>
            <dt className="text-xs text-muted-foreground">{t("project.status")}</dt>
            <dd className="mt-1 text-sm font-medium text-primary">{pick(project.status)}</dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.live && (
            <Button
              size="lg"
              className="min-h-11 rounded-full px-4"
              render={<a href={project.live} target="_blank" rel="noreferrer" />}
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              {t("project.liveDemo")}
            </Button>
          )}
          <Button
            variant="outline"
            size="lg"
            className="min-h-11 rounded-full px-4"
            render={<a href={project.link} target="_blank" rel="noreferrer" />}
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            {t("project.sourceCode")}
          </Button>
        </div>

        <div className="mt-10 grid h-52 place-items-center overflow-hidden rounded-xl border border-border bg-linear-to-b from-secondary to-background">
          {project.image ? (
            <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
          ) : (
            <div className="grid h-full w-full place-items-center bg-foreground">
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
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
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
                className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground ring-1 ring-border"
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
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
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

          <Card className="mt-8 gap-0 border-border p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-zinc-800/5">
            <Link
              to={`/projects/${next.slug}`}
              className="group block rounded-xl p-6 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {t("projects.next")}
              </p>
              <div className="mt-2 flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {next.title}
                </h3>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                {pick(next.summary)}
              </p>
            </Link>
          </Card>
        </div>
      </FadeIn>
    </PortfolioPageLayout>
  );
}
