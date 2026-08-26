"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Monitor, Hand, Users, FileCode, MessageCircleQuestion } from "lucide-react";

const icons = [Monitor, Hand, Users, FileCode, MessageCircleQuestion];

export default function Method() {
  const t = useTranslations("method");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = ["1", "2", "3", "4", "5"];

  return (
    <section
      ref={ref}
      className="border-t border-border bg-background-soft px-6 py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 max-w-2xl">
          <span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-primary">
            {t("eyebrow")}
          </span>
          <h2 className="mb-4 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight text-foreground">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("lead")}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((key, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group rounded-[16px] border border-border bg-card p-6 transition-all hover:-translate-y-1.5 hover:border-[#545454]"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[10px] bg-secondary text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(`items.${key}.desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
