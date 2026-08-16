import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/profile";
import { useLanguage, type MessageKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import portrait from "@/assets/portrait.jpg";

const links = [
  { to: "/about", label: "nav.about" },
  { to: "/projects", label: "nav.projects" },
  { to: "/blog", label: "nav.blog" },
  { to: "/gallery", label: "nav.gallery" },
] as const satisfies ReadonlyArray<{ to: string; label: MessageKey }>;

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";
  const { t } = useLanguage();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (to: string) => pathname.startsWith(to);

  return (
    <header className="sticky top-0 z-50 pt-5 pb-2">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        {!isHome && (
          <Link
            to="/"
            className="absolute left-4 hidden items-center gap-2 rounded-full bg-white/90 py-1.5 pr-4 pl-1.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md transition-colors duration-300 sm:flex dark:bg-zinc-800/90 dark:ring-white/10"
          >
            <img
              src={portrait}
              alt=""
              width={900}
              height={900}
              loading="lazy"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {profile.name.split(" ")[0]}
            </span>
          </Link>
        )}

        <div className="absolute right-4 flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <nav
          aria-label="Main"
          className="flex w-fit items-center gap-1 rounded-full bg-white/90 px-2 py-1.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md transition-colors duration-300 dark:bg-zinc-800/90 dark:ring-white/10"
        >
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={isActive(link.to) ? "page" : undefined}
                  className={cn(
                    "block rounded-full px-3 py-2 text-sm transition-colors duration-300 active:scale-[0.97]",
                    isActive(link.to)
                      ? "text-teal-700 dark:text-teal-400"
                      : "text-zinc-700 hover:text-teal-700 dark:text-zinc-300 dark:hover:text-teal-400",
                  )}
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            className="grid h-11 w-11 place-items-center rounded-full text-zinc-700 md:hidden dark:text-zinc-300"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </nav>

        {open && (
          <ul
            id="mobile-nav"
            className="absolute top-full mt-2 w-56 rounded-2xl bg-white/95 p-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-md md:hidden dark:bg-zinc-800/95 dark:ring-white/10"
          >
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={isActive(link.to) ? "page" : undefined}
                  className={cn(
                    "block rounded-xl px-3 py-3 text-sm transition-colors duration-300 active:scale-[0.97]",
                    isActive(link.to)
                      ? "text-teal-700 dark:text-teal-400"
                      : "text-zinc-700 dark:text-zinc-300",
                  )}
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
