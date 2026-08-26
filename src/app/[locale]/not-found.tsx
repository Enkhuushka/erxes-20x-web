"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function NotFound() {
  const locale = useLocale();
  const t = useTranslations("notFound");

  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-[clamp(4rem,10vw,8rem)] font-bold leading-none text-primary">
        404
      </h1>
      <h2 className="mt-4 text-2xl font-semibold text-foreground">{t("title")}</h2>
      <p className="mt-2 max-w-md text-muted-foreground">{t("message")}</p>
      <Link
        href={`/${locale}`}
        className="mt-6 inline-flex h-12 items-center gap-2 rounded-[10px] bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
      >
        {t("goHome")}
      </Link>
    </div>
  );
}
