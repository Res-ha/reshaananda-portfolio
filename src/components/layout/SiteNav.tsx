import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { useLanguage, type MessageKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";
import portrait from "@/assets/portrait.jpg";

const links = [
  { kind: "route", to: "/about", label: "nav.about" },
  { kind: "route", to: "/projects", label: "nav.projects" },
  { kind: "route", to: "/certifications", label: "nav.certifications" },
  { kind: "route", to: "/contact", label: "nav.contact" },
] as const satisfies ReadonlyArray<{ kind: "route"; to: string; label: MessageKey }>;

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
            className="absolute left-4 flex items-center gap-2 rounded-full bg-card py-1.5 pr-4 pl-1.5 text-card-foreground shadow-lg shadow-zinc-800/5 ring-1 ring-border backdrop-blur-md transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <img
              src={portrait}
              alt=""
              width={900}
              height={900}
              loading="lazy"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span className="text-sm font-medium text-card-foreground">
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
          className="flex w-fit items-center gap-1 rounded-full bg-card px-2 py-1.5 text-card-foreground shadow-lg shadow-zinc-800/5 ring-1 ring-border backdrop-blur-md transition-colors duration-300"
        >
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  aria-current={isActive(link.to) ? "page" : undefined}
                  className={cn(
                    "block rounded-full px-3 py-2 text-sm transition-colors duration-300 active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                    isActive(link.to) ? "text-primary" : "text-foreground hover:text-primary",
                  )}
                >
                  {t(link.label)}
                </Link>
              </li>
            ))}
          </ul>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  aria-label={t("nav.openMenu")}
                  className="rounded-full md:hidden"
                />
              }
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,22rem)]">
              <SheetHeader className="border-b border-border pb-5">
                <SheetTitle>{profile.name}</SheetTitle>
                <SheetDescription>{t("nav.openMenu")}</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile" className="px-4">
                <ul className="grid gap-1">
                  {links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        aria-current={isActive(link.to) ? "page" : undefined}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block rounded-xl px-3 py-3 text-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          isActive(link.to)
                            ? "bg-secondary font-medium text-primary"
                            : "text-foreground hover:bg-secondary hover:text-primary",
                        )}
                      >
                        {t(link.label)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
}
