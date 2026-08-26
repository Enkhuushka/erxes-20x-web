"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const days = [
  {
    id: 1,
    current: true,
    mn: {
      title: "Intro · Basics",
      items: ["Intro", "Install", "erxes Skills install"],
    },
    en: {
      title: "Intro · Basics",
      items: ["Intro", "Install", "erxes Skills install"],
    },
  },
  {
    id: 2,
    current: false,
    mn: {
      title: "PRD + UX/UI",
      items: ["PRD", "Design.md", "UX UI research"],
    },
    en: {
      title: "PRD + UX/UI",
      items: ["PRD", "Design.md", "UX UI research"],
    },
  },
  {
    id: 3,
    current: false,
    mn: {
      title: "Front-end",
      items: ["Build the interface"],
    },
    en: {
      title: "Front-end",
      items: ["Build the interface"],
    },
  },
  {
    id: 4,
    current: false,
    mn: {
      title: "Showoff",
      items: ["Live demo session"],
    },
    en: {
      title: "Showoff",
      items: ["Live demo session"],
    },
  },
  {
    id: 5,
    current: false,
    mn: {
      title: "Graduation",
      items: ["Сертификат · Demo"],
    },
    en: {
      title: "Graduation",
      items: ["Certificate · Demo"],
    },
  },
];

export default function Curriculum() {
  const locale = useLocale();
  const t = useTranslations("curriculum");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="curriculum"
      className="bg-background px-6 py-20 lg:px-10 lg:py-32"
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {days.map((day, i) => {
            const content = day[locale as "mn" | "en"];
            return (
              <motion.div
                key={day.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <DayCard
                  locale={locale}
                  id={day.id}
                  current={day.current}
                  title={content.title}
                  items={content.items}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DayCard({
  locale,
  id,
  current,
  title,
  items,
}: {
  locale: string;
  id: number;
  current: boolean;
  title: string;
  items: string[];
}) {
  const t = useTranslations("curriculum");

  return (
    <Link
      href={`/${locale}/day/${id}`}
      className={`group relative flex h-full flex-col rounded-[16px] border p-5 transition-all hover:-translate-y-1 ${
        current
          ? "border-primary bg-primary/5 shadow-[0_0_24px_rgba(224,86,253,0.12)]"
          : "border-border bg-card hover:border-primary/40"
      }`}
    >
      <div className="mb-3 flex items-start justify-between">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          {t("day")}
        </span>
        {current && (
          <span className="rounded bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
            Today
          </span>
        )}
      </div>

      <p
        className={`mb-4 text-[clamp(3rem,6vw,5rem)] font-bold leading-none tracking-tight ${
          current ? "text-primary" : "text-foreground"
        }`}
      >
        {String(id).padStart(2, "0")}
      </p>

      <div className="mb-4 h-px bg-border" />

      <h3 className="mb-3 text-lg font-bold text-foreground">{title}</h3>

      <ul className="mb-5 flex-1 space-y-1.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-sm text-muted-foreground"
          >
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-primary">
        {t("viewDay")}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
