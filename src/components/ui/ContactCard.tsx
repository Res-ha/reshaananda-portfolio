import { Mail } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { SurfaceCard } from "@/components/ui/Card";
import { profile } from "@/data/profile";
import { useLanguage } from "@/lib/i18n";

type Status = "idle" | "sending" | "success" | "error";

export function ContactCard() {
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
    <SurfaceCard>
      <h2 className="flex items-center gap-2 text-sm font-semibold text-card-foreground">
        <Mail className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
        {t("contact.title")}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">{t("contact.subtitle")}</p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        <div>
          <label htmlFor={emailId} className="block text-xs font-medium text-foreground">
            {t("contact.email")}
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
            placeholder={t("contact.emailPlaceholder")}
            className="mt-1.5 min-h-11 w-full rounded-xl border border-input bg-background px-3 text-sm text-foreground transition-colors duration-300 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          {errors.email && (
            <p id={`${emailId}-error`} className="mt-1.5 text-xs text-destructive">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={messageId} className="block text-xs font-medium text-foreground">
            {t("contact.message")}
          </label>
          <textarea
            id={messageId}
            name="message"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${messageId}-error` : undefined}
            placeholder={t("contact.messagePlaceholder")}
            className="mt-1.5 w-full rounded-xl border border-input bg-background p-3 text-sm text-foreground transition-colors duration-300 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
          {errors.message && (
            <p id={`${messageId}-error`} className="mt-1.5 text-xs text-destructive">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-11 w-full rounded-full bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors duration-300 hover:bg-primary/90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? t("contact.sending") : t("contact.send")}
        </button>

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
      </form>

      <p className="mt-4 text-xs text-muted-foreground">
        {t("contact.response")}{" "}
        <a
          href={`mailto:${profile.email}`}
          className="font-medium text-primary underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {profile.email}
        </a>
      </p>
    </SurfaceCard>
  );
}
