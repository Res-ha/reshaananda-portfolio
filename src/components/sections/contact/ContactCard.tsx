import { Mail } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/i18n";
import { SectionMarker } from "@/components/sections/shared/SectionMarker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "success" | "error";

export function ContactCard({ sectionIndex }: { sectionIndex?: string }) {
  const { t } = useLanguage();
  const emailId = useId();
  const messageId = useId();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: { email?: string; message?: string } = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t("contact.errorEmail");
    if (message.trim().length < 10) next.message = t("contact.errorMessage");
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const href = `mailto:${profile.email}?subject=${encodeURIComponent(
        `Message from ${email}`,
      )}&body=${encodeURIComponent(`${message}\n\n- ${email}`)}`;
      window.location.href = href;
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-border pt-10 sm:pt-12"
    >
      {sectionIndex && (
        <div className="mb-5">
          <SectionMarker index={sectionIndex} label={t("home.sectionContact")} />
        </div>
      )}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-16">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-sm font-medium text-primary">
            <Mail className="h-4 w-4" aria-hidden="true" />
            {t("contact.email")}
          </div>
          <h2
            id="contact-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t("contact.title")}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            {t("contact.subtitle")}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {profile.email}
          </a>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-5 lg:col-span-7">
          <div>
            <Label htmlFor={emailId} className="text-xs">
              {t("contact.email")}
            </Label>
            <Input
              id={emailId}
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              aria-invalid={errors.email ? true : undefined}
              aria-describedby={errors.email ? `${emailId}-error` : undefined}
              placeholder={t("contact.emailPlaceholder")}
              className="mt-2 min-h-11 rounded-xl bg-background px-4"
            />
            {errors.email && (
              <p id={`${emailId}-error`} className="mt-1.5 text-xs text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor={messageId} className="text-xs">
              {t("contact.message")}
            </Label>
            <Textarea
              id={messageId}
              name="message"
              rows={4}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              aria-invalid={errors.message ? true : undefined}
              aria-describedby={errors.message ? `${messageId}-error` : undefined}
              placeholder={t("contact.messagePlaceholder")}
              className="mt-2 min-h-32 rounded-xl bg-background p-4"
            />
            {errors.message && (
              <p id={`${messageId}-error`} className="mt-1.5 text-xs text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="min-h-11 rounded-full px-5"
            disabled={status === "sending"}
          >
            {status === "sending" ? t("contact.sending") : t("contact.send")}
          </Button>

          {status === "success" && (
            <p role="status" className="text-xs text-primary">
              {t("contact.success")}
            </p>
          )}
          {status === "error" && Object.keys(errors).length > 0 && (
            <p role="alert" className="text-xs text-destructive">
              {t("contact.errorFix")}
            </p>
          )}
          <p className="text-xs text-muted-foreground">{t("contact.response")}</p>
        </form>
      </div>
    </section>
  );
}
