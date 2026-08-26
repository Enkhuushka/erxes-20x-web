"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Play } from "lucide-react";

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
  return (
    <div className="rounded-[24px] border border-border bg-card p-5 shadow-[var(--shadow-console)]">
      <div className="mb-4 flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-destructive" />
        <span className="h-3 w-3 rounded-full bg-warning" />
        <span className="h-3 w-3 rounded-full bg-success" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          erxes-20x --course
        </span>
      </div>
      <div className="space-y-3 font-mono text-sm">
        <div className="flex items-start gap-3">
          <span className="text-primary">$</span>
          <div>
            <p className="text-foreground">npx erxes-20x init --team alpha</p>
            <p className="text-muted-foreground">Installing course modules...</p>
            <p className="text-success">Done in 0.8s</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-primary">$</span>
          <div>
            <p className="text-foreground">erxes run day-1</p>
            <p className="text-accent">Starting Day 1: Intro · Basics</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <span className="text-primary">$</span>
          <div>
            <p className="text-foreground">erxes progress --all</p>
            <div className="mt-2 h-2 w-full max-w-[220px] overflow-hidden rounded-full bg-input">
              <div className="h-full w-1/5 rounded-full bg-primary" />
            </div>
            <p className="mt-1 text-xs text-muted-foreground">20% complete</p>
          </div>
        </div>
        <div className="rounded-md border border-border bg-background p-3">
          <p className="text-xs text-muted-foreground">// next lesson</p>
          <p className="text-foreground">Sales pipeline automation</p>
        </div>
      </div>
    </div>
  );
}
