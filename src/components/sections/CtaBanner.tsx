"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const locale = useLocale();
  const t = useTranslations("cta");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-background px-6 py-12 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-[1240px] overflow-hidden rounded-[24px] bg-primary px-6 py-12 md:px-12 md:py-16 lg:px-16"
      >
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="mb-3 text-[clamp(1.5rem,3vw,2.5rem)] font-bold leading-tight text-primary-foreground">
              {t("title")}
            </h2>
            <p className="text-primary-foreground/80">{t("lead")}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex h-12 items-center gap-2 rounded-[10px] bg-background px-6 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5"
            >
              {t("button")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex h-12 items-center gap-2 rounded-[10px] border border-primary-foreground/30 px-6 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/10"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
