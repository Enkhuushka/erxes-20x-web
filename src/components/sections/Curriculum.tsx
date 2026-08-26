"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const days = [
  {
    id: 1,
    mn: { title: "Intro · Basics", summary: "Setup, Discord, erxes, OpenCode, Paper, Pencil, erxes Skills install" },
    en: { title: "Intro · Basics", summary: "Setup, Discord, erxes, OpenCode, Paper, Pencil, erxes Skills install" },
  },
  {
    id: 2,
    mn: { title: "PRD + UX/UI", summary: "BRD/PRD бичих, UI/UX research, Design.md, front-end & deploy" },
    en: { title: "PRD + UX/UI", summary: "Write BRD/PRD, UI/UX research, Design.md, front-end & deploy" },
  },
  {
    id: 3,
    mn: { title: "Front-end", summary: "Сонгосон дизайны дагуу interface бүтээх" },
    en: { title: "Front-end", summary: "Build the interface based on the approved design" },
  },
  {
    id: 4,
    mn: { title: "Showoff", summary: "Бүтээсэн сайтаа demo хийх" },
    en: { title: "Showoff", summary: "Demo the site you built" },
  },
  {
    id: 5,
    mn: { title: "Graduation", summary: "Сертификат · эцсийн demo" },
    en: { title: "Graduation", summary: "Certificate · final demo" },
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                  title={content.title}
                  summary={content.summary}
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
  title,
  summary,
}: {
  locale: string;
  id: number;
  title: string;
  summary: string;
}) {
  const t = useTranslations("curriculum");

  return (
    <Link
      href={`/${locale}/day/${id}`}
      className="group relative flex h-full flex-col rounded-[16px] border border-border bg-card p-6 transition-all hover:-translate-y-1.5 hover:border-[#545454]"
    >
      <span className="absolute left-0 right-0 top-0 h-1 origin-left scale-x-[0.18] rounded-t-[16px] bg-primary transition-transform duration-220 group-hover:scale-x-100" />
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-md bg-secondary px-2 py-1 font-mono text-xs font-bold text-secondary-foreground">
          {t("day")} {id}
        </span>
        <span className="text-xs text-muted-foreground">{t("duration")}</span>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
        {summary}
      </p>
      <div className="space-y-3">
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-input">
          <div
            className="h-full rounded-full bg-primary transition-all duration-300"
            style={{ width: `${id * 20}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{t("progressLabel")}</span>
          <span>{id * 20}%</span>
        </div>
      </div>
      <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
        {t("viewDay")}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
