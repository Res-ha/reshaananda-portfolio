import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { StaggerContainer } from "@/components/motion/Stagger";
import { posts } from "@/data/posts";
import { useLanguage } from "@/lib/i18n";

const title = "Blog - Catatan Resha Ananda Rahman";
const description =
  "Tulisan santai dalam Bahasa Indonesia soal pengembangan web, jaringan kantor, dan kebiasaan kerja sehari-hari.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { pick, t } = useLanguage();
  return (
    <Container className="mt-12 sm:mt-20">
      <FadeIn className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl ">
          {t("blog.title")}
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">{t("blog.intro")}</p>
      </FadeIn>

      <StaggerContainer className="mt-16 max-w-3xl space-y-10 border-l border-zinc-900/5 pl-6 dark:border-white/10">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <p className="text-xs text-muted-foreground">{pick(post.dateLabel)}</p>
            <h2 className="mt-1 text-lg font-semibold text-foreground">
              <Link
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="transition-colors duration-300 group-hover:text-primary group-hover:text-primary"
              >
                {pick(post.title)}
              </Link>
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              {pick(post.excerpt)}
            </p>
            <p className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">
              {t("blog.read")}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </p>
          </article>
        ))}
      </StaggerContainer>
    </Container>
  );
}
