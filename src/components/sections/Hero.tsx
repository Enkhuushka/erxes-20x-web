"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Play, Check, Circle } from "lucide-react";
import { dayDataMn, dayDataEn } from "@/lib/day-data";

export default function Hero() {
  const locale = useLocale();
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden border-b border-border bg-background-soft px-6 pt-16 pb-20 lg:px-10 lg:pt-24 lg:pb-32">
      <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2 lg:items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <Terminal className="h-3.5 w-3.5 text-primary" />
              {t("eyebrow")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight text-foreground"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            {t("lead")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href={`/${locale}/day/1`}
              className="group inline-flex h-12 items-center gap-2 rounded-[10px] bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
            >
              <Play className="h-4 w-4 fill-current" />
              {t("start")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href={`/${locale}/about`}
              className="inline-flex h-12 items-center gap-2 rounded-[10px] border border-border bg-secondary px-6 text-sm font-semibold text-secondary-foreground transition-all hover:-translate-y-0.5 hover:bg-muted"
            >
              {t("learnMore")}
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {[t("tag1"), t("tag2"), t("tag3")].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <ConsoleVisual />
        </motion.div>
      </div>
    </section>
  );
}

function ConsoleVisual() {
  const locale = useLocale();
  const data = locale === "mn" ? dayDataMn : dayDataEn;
  const currentDay = 1;
  const completedDays = 0;
  const totalDays = 5;
  const progress = Math.round((completedDays / totalDays) * 100);

  const days = Array.from({ length: totalDays }, (_, i) => {
    const id = i + 1;
    const day = data[id];
    const [short, subtitle] = day.title.split(" — ");
    return { id, short, subtitle, outcome: day.outcome };
  });

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-border bg-card p-1 shadow-[var(--shadow-console)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="relative rounded-[20px] border border-border/50 bg-background/40 p-5 backdrop-blur-sm">
        <div className="mb-5 flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-destructive" />
          <span className="h-3 w-3 rounded-full bg-warning" />
          <span className="h-3 w-3 rounded-full bg-success" />
          <span className="ml-2 font-mono text-xs text-muted-foreground">
            erxes-20x roadmap --locale {locale}
          </span>
        </div>

        <div className="space-y-4 font-mono text-sm">
          <div className="flex items-start gap-3">
            <span className="text-primary">$</span>
            <div>
              <p className="text-foreground">npx erxes-20x@latest init</p>
              <p className="text-muted-foreground">Installing 5-day marketer course...</p>
              <p className="text-success">Ready — 5 modules loaded</p>
            </div>
          </div>

          <div className="rounded-[16px] border border-border bg-card/60 p-4">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">
              {locale === "mn" ? "5 өдрийн хөтөлбөр" : "5-Day Roadmap"}
            </p>
            <div className="space-y-2">
              {days.map((day) => {
                const isCurrent = day.id === currentDay;
                const isCompleted = day.id <= completedDays;
                return (
                  <Link
                    key={day.id}
                    href={`/${locale}/day/${day.id}`}
                    className={`group flex items-center gap-3 rounded-xl border p-3 transition-all hover:-translate-y-0.5 ${
                      isCurrent
                        ? "border-primary/40 bg-primary/5 shadow-[0_0_20px_rgba(224,86,253,0.10)]"
                        : isCompleted
                        ? "border-success/30 bg-success/5"
                        : "border-transparent bg-secondary/40 hover:border-primary/20"
                    }`}
                  >
                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${
                        isCurrent
                          ? "bg-primary text-primary-foreground"
                          : isCompleted
                          ? "bg-success text-background"
                          : "bg-background text-muted-foreground"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : isCurrent ? (
                        <Play className="h-3.5 w-3.5 fill-current" />
                      ) : (
                        <Circle className="h-3.5 w-3.5" />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-foreground">{day.short}</span>
                        {day.subtitle && (
                          <span className="hidden truncate text-xs text-muted-foreground sm:inline">
                            — {day.subtitle}
                          </span>
                        )}
                      </div>
                      <p className="truncate text-xs text-muted-foreground">{day.outcome}</p>
                    </div>
                    <span
                      className={`rounded-md px-2 py-0.5 text-xs font-bold ${
                        isCurrent
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      D{day.id}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-4">
              <div className="mb-1.5 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  {locale === "mn" ? "Ажиглагдах прогресс" : "Overall progress"}
                </span>
                <span className="font-semibold text-primary">{progress}%</span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-input">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-md border border-border bg-background p-3">
            <span className="text-primary">→</span>
            <div>
              <p className="text-xs text-muted-foreground">{locale === "mn" ? "Дараагийн алхам" : "Next step"}</p>
              <p className="text-foreground">{locale === "mn" ? "Day 1: Intro & outcome-оос эхлэх" : "Start Day 1: Intro & outcome"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
