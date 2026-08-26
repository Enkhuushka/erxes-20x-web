import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations("footer");

  return (
    <footer className="border-t border-border bg-background-soft">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-10">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-primary font-mono text-xs font-bold text-primary-foreground">
            E
          </span>
          <span>erxes 20x</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          {t("copyright")}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link
            href={`/${locale}/contact`}
            className="transition-colors hover:text-foreground"
          >
            {t("contact")}
          </Link>
          <span className="text-border">|</span>
          <Link
            href={`/${locale}/privacy`}
            className="transition-colors hover:text-foreground"
          >
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}

