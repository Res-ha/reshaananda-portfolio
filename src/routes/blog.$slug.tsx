import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { posts } from "@/data/posts";
import { useLanguage } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/seo";
import { useDocumentMeta } from "@/lib/useDocumentMeta";

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((item) => item.slug === slug);
  const { pick, t } = useLanguage();
  useDocumentMeta(
    post
      ? {
          title: `${post.title.en} - Blog Resha`,
          description: post.excerpt.en,
          canonical: absoluteUrl(`/blog/${post.slug}`),
          type: "article",
          structuredData: {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title.en,
            description: post.excerpt.en,
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
            author: { "@id": "https://reshaananda-portfolio.vercel.app/#person" },
          },
        }
      : { title: "Tulisan tidak ditemukan", robots: "noindex" },
  );

  if (!post) {
    return (
      <Container className="mt-12 sm:mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-foreground">{t("notFound.title")}</h1>
          <p className="mt-3 text-muted-foreground">{t("notFound.desc")}</p>
          <Link to="/blog" className="mt-6 inline-flex min-h-11 items-center text-primary">
            <ArrowLeft className="mr-1 h-4 w-4" aria-hidden="true" />
            {t("blog.all")}
          </Link>
        </div>
      </Container>
    );
  }

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
