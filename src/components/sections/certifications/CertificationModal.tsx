import { X } from "lucide-react";
import type { Certification } from "@/data/credentials";
import { useLanguage } from "@/lib/i18n";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function CertificationModal({
  certification,
  onClose,
}: {
  certification: Certification;
  onClose: () => void;
}) {
  const { pick, t } = useLanguage();

  return (
    <Dialog open onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-h-[calc(100dvh-1rem)] max-w-[calc(100%-1rem)] overflow-y-auto p-0 sm:max-h-[calc(100dvh-2rem)] sm:max-w-6xl sm:overflow-hidden"
      >
        <div className="grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-stretch">
          <div className="flex aspect-[7/5] w-full items-center justify-center overflow-hidden bg-secondary lg:rounded-l-xl">
            <img
              src={certification.detailImage}
              alt={`${pick(certification.name)} certificate`}
              width={1800}
              height={1400}
              className="block h-full w-full object-contain"
            />
          </div>

          <div className="min-w-0 p-6 sm:p-8 lg:max-h-[calc(100dvh-4rem)] lg:overflow-y-auto">
            <div className="flex items-start justify-between gap-6">
              <DialogHeader>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-primary">
                  {t("certification.details")}
                </p>
                <DialogTitle className="mt-1 text-2xl tracking-tight">
                  {pick(certification.name)}
                </DialogTitle>
                <DialogDescription>{certification.issuer}</DialogDescription>
              </DialogHeader>
              <DialogClose
                render={
                  <Button
                    variant="outline"
                    size="icon-lg"
                    aria-label={t("certification.close")}
                    className="shrink-0 rounded-full"
                  />
                }
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </DialogClose>
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
      </DialogContent>
    </Dialog>
  );
}
