import { Component, useEffect, type ErrorInfo, type ReactNode } from "react";
import { Link, Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { useLanguage } from "@/lib/i18n";
import { useDocumentMeta } from "@/lib/useDocumentMeta";
import { About } from "@/routes/about";
import { BlogPost } from "@/routes/blog.$slug";
import { BlogIndex } from "@/routes/blog.index";
import { CertificationsPage } from "@/routes/certifications";
import { ContactPage } from "@/routes/contact";
import { Gallery } from "@/routes/gallery";
import { Home } from "@/routes/index";
import { ProjectDetail } from "@/routes/projects.$slug";
import { ProjectsIndex } from "@/routes/projects.index";

class AppErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  override state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Application error", error, info);
  }

  override render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

function ErrorFallback() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">{t("error.title")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("error.desc")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {t("error.tryAgain")}
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {t("notFound.goHome")}
          </a>
        </div>
      </div>
    </div>
  );
}

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, hash]);

  return null;
}

function SiteLayout() {
  const { t } = useLanguage();

  return (
    <>
      <ScrollManager />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        {t("a11y.skipToContent")}
      </a>
      <div className="relative flex min-h-dvh overflow-clip bg-background transition-colors duration-300">
        <div className="site-atmosphere" aria-hidden="true">
          <span className="ambient-glow" />
          <span className="ambient-glow ambient-glow--secondary" />
        </div>
        <div className="relative z-10 flex min-h-dvh w-full flex-col">
          <SiteNav />
          <main id="main-content" className="flex-1 pb-16">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </div>
    </>
  );
}

function NotFound() {
  const { t } = useLanguage();
  useDocumentMeta({ title: "Page not found - Resha Ananda Rahman", robots: "noindex" });

  return (
    <div className="flex min-h-[65vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-7xl font-bold text-foreground">404</p>
        <h1 className="mt-4 text-xl font-semibold text-foreground">{t("notFound.title")}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("notFound.desc")}</p>
        <Link
          to="/"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {t("notFound.goHome")}
        </Link>
      </div>
    </div>
  );
}

export function App() {
  return (
    <AppErrorBoundary>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<ProjectsIndex />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="certifications" element={<CertificationsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="blog" element={<BlogIndex />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="experience" element={<Navigate to="/about#career" replace />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppErrorBoundary>
  );
}
