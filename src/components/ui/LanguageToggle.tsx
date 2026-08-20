import { useLanguage } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  const next = lang === "en" ? "id" : "en";

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={t("lang.switchTo")}
      title={t("lang.button")}
      className={cn(
        "grid h-11 w-11 shrink-0 place-items-center rounded-full text-foreground ring-1 ring-border transition-colors duration-300 hover:bg-accent active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <span className="text-[10px] font-bold tracking-wider text-foreground">
        {lang.toUpperCase()}
      </span>
    </button>
  );
}
