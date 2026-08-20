import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Certification } from "@/data/credentials";
import { useLanguage } from "@/lib/i18n";

export function CertificationModal({
  certification,
  onClose,
}: {
  certification: Certification;
  onClose: () => void;
}) {
  const { pick, t } = useLanguage();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousActiveElement = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled"));

      if (focusable.length === 0) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousActiveElement?.focus({ preventScroll: true });
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-zinc-950/70 p-4 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="certification-modal-title"
        className="max-h-[min(860px,calc(100dvh-2rem))] w-full max-w-5xl overflow-y-auto rounded-2xl bg-background shadow-2xl shadow-zinc-950/30 ring-1 ring-border"
      >
        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
          <div className="bg-secondary p-4 sm:p-6">
            <img
              src={certification.detailImage}
              alt={`${pick(certification.name)} certificate`}
              width={1800}
              height={1400}
              className="h-auto max-h-[70dvh] w-full rounded-xl object-contain"
            />
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  {t("certification.details")}
                </p>
                <h2
                  id="certification-modal-title"
                  className="mt-3 text-2xl font-semibold tracking-tight text-foreground"
                >
                  {pick(certification.name)}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">{certification.issuer}</p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label={t("certification.close")}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-5 border-t border-border pt-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs text-muted-foreground">{t("certification.credentialId")}</dt>
                <dd className="mt-1 break-words text-sm font-medium text-foreground">
                  {certification.credentialId}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">{t("certification.type")}</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  {pick(certification.type)}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">{t("certification.category")}</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  {pick(certification.category)}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">{t("certification.issueDate")}</dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  {pick(certification.issueDate)}
                </dd>
              </div>
            </dl>

            <div className="mt-8 border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-foreground">{t("certification.about")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pick(certification.description)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
