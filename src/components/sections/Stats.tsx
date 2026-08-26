"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, Layers } from "lucide-react";

export default function Stats() {
  const t = useTranslations("stats");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Calendar, value: t("days"), label: t("daysLabel") },
    { icon: Clock, value: t("hours"), label: t("hoursLabel") },
    { icon: Layers, value: t("modules"), label: t("modulesLabel") },
  ];

  return (
    <section
      ref={ref}
      className="border-b border-border bg-background px-6 py-12 lg:px-10"
    >
      <div className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-10 md:flex-row">
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 md:w-auto md:flex-1">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-4 rounded-[16px] border border-border bg-card p-5 transition-all hover:-translate-y-1.5 hover:border-[#545454]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] bg-secondary text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex items-center gap-5 rounded-[16px] border border-border bg-card p-5"
        >
          <div className="relative h-20 w-20">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-input"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <motion.path
                className="text-primary"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="0 100"
                animate={{ strokeDasharray: inView ? "0 100" : "0 100" }}
                transition={{ duration: 0.3 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">{t("progress")}</span>
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold text-foreground">
              {t("progressLabel")}
            </p>
            <p className="text-sm text-muted-foreground">{t("progress")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
