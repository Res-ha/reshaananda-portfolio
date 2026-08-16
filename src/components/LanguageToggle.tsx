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
        "grid h-9 w-9 shrink-0 place-items-center rounded-full ring-1 ring-zinc-900/5 transition-colors duration-300 hover:bg-zinc-100 active:scale-95 dark:ring-white/10 dark:hover:bg-zinc-700/60",
        className,
      )}
    >
      <span className="text-[10px] font-bold tracking-wider text-zinc-700 dark:text-zinc-300">
        {lang.toUpperCase()}
      </span>
    </button>
  );
}
