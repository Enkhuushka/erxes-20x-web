"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[16px] border border-border bg-card p-6 md:p-8"
    >
      <div className="mb-5 space-y-1">
        <h3 className="text-xl font-semibold text-foreground">{t("title")}</h3>
        <p className="text-sm text-muted-foreground">{t("lead")}</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            {t("name")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="h-11 w-full rounded-[10px] border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-ring"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
            {t("email")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-11 w-full rounded-[10px] border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-ring"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full rounded-[10px] border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-ring"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-[10px] bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 disabled:opacity-70"
        >
          {status === "success" ? (
            <>
              <CheckCircle className="h-4 w-4" />
              {t("success")}
            </>
          ) : status === "submitting" ? (
            t("sending")
          ) : (
            <>
              <Send className="h-4 w-4" />
              {t("submit")}
            </>
          )}
        </button>

        {status === "error" && (
          <p className="text-sm text-destructive">{t("error")}</p>
        )}
      </div>
    </form>
  );
}
