import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { posts } from "@/data/posts";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Tulisan tidak ditemukan" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title.en} - Blog Resha` },
        { name: "description", content: post.excerpt.en },
        { property: "og:title", content: post.title.en },
        { property: "og:description", content: post.excerpt.en },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const { pick, t } = useLanguage();

  return (
    <Container className="mt-12 sm:mt-20">
      <FadeIn className="mx-auto max-w-2xl">
        <Link
          to="/blog"
          className="group inline-flex min-h-11 items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-primary focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <ArrowLeft
            className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            aria-hidden="true"
          />
          {t("blog.all")}
        </Link>
        <p className="mt-8 text-xs text-muted-foreground">{pick(post.dateLabel)}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground">
          {pick(post.title)}
        </h1>
        <div className="mt-8 space-y-6">
          {pick(post.body).map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </FadeIn>
    </Container>
  );
}
