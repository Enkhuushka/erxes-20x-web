"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, CheckCheck, ExternalLink, Play, MessageCircle, Globe, Wrench, Puzzle, FileText, Palette, Code, Rocket, FileCode } from "lucide-react";

export type AgendaItem = {
  title: string;
  desc: string;
  icon: "play" | "message" | "globe" | "wrench" | "puzzle" | "file" | "palette" | "code" | "rocket" | "file-code";
  main?: boolean;
};

export type Lesson = {
  title: string;
  desc: string;
  code?: string;
  checkpoints?: string[];
};

export type DayData = {
  id: number;
  title: string;
  outcome: string;
  lessons: Lesson[];
  agenda?: AgendaItem[];
};

export default function DayPage({ day }: { day: DayData }) {
  const locale = useLocale();
  const t = useTranslations("dayPage");
  const prev = day.id > 1 ? day.id - 1 : null;
  const next = day.id < 5 ? day.id + 1 : null;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background px-6 py-10 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1240px]">
        <Link
          href={`/${locale}`}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("back")}
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4 rounded-[16px] border border-border bg-card p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">
                {t("day")} {day.id}
              </p>
              <nav className="space-y-1">
                {day.lessons.map((lesson, i) => (
                  <a
                    key={i}
                    href={`#lesson-${i + 1}`}
                    className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {i + 1}. {lesson.title}
                  </a>
                ))}
              </nav>
              <div className="h-px bg-border" />
              <div className="rounded-[10px] bg-primary/10 p-3">
                <p className="text-xs font-semibold text-primary">{t("duration")}</p>
              </div>
            </div>
          </aside>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 overflow-hidden rounded-[24px] border border-border bg-card p-6 md:p-10"
            >
              <span className="mb-3 inline-flex items-center rounded-md bg-secondary px-2 py-1 font-mono text-xs font-bold text-secondary-foreground">
                {t("day")} {day.id}
              </span>
              <h1 className="mb-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground">
                {day.title}
              </h1>
              <div className="rounded-[10px] border border-primary/30 bg-primary/10 p-4">
                <p className="text-sm font-semibold text-primary">{t("outcome")}</p>
                <p className="mt-1 text-muted-foreground">{day.outcome}</p>
              </div>
            </motion.div>

            {day.agenda && day.agenda.length > 0 && <Agenda day={day} />}

            <div className="mb-12 space-y-6">
              {day.lessons.map((lesson, i) => (
                <LessonCard key={i} index={i} lesson={lesson} />
              ))}
            </div>

            <div className="flex items-center justify-between">
              {prev ? (
                <Link
                  href={`/${locale}/day/${prev}`}
                  className="inline-flex h-12 items-center gap-2 rounded-[10px] border border-border bg-secondary px-5 text-sm font-semibold text-secondary-foreground transition-all hover:-translate-y-0.5"
                >
                  <ArrowLeft className="h-4 w-4" />
                  {t("prev")}
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/${locale}/day/${next}`}
                  className="inline-flex h-12 items-center gap-2 rounded-[10px] bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
                >
                  {t("next")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LessonCard({ index, lesson }: { index: number; lesson: Lesson }) {
  const t = useTranslations("dayPage");
  const [completed, setCompleted] = useState(false);

  return (
    <motion.article
      id={`lesson-${index + 1}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-[16px] border border-border bg-card p-6 transition-all hover:border-[#545454]"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <span className="mb-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary font-mono text-xs font-bold text-secondary-foreground">
            {index + 1}
          </span>
          <h3 className="mt-2 text-xl font-semibold text-foreground">
            {lesson.title}
          </h3>
        </div>
        <button
          type="button"
          onClick={() => setCompleted((c) => !c)}
          className={`inline-flex h-9 items-center gap-2 rounded-[10px] px-3 text-xs font-semibold transition-all ${
            completed
              ? "bg-success text-background"
              : "border border-border bg-secondary text-secondary-foreground hover:bg-muted"
          }`}
        >
          {completed ? <CheckCheck className="h-4 w-4" /> : <Check className="h-4 w-4" />}
          {completed ? t("completed") : t("complete")}
        </button>
      </div>

      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
        {lesson.desc}
      </p>

      {lesson.code && <CodeBlock code={lesson.code} />}

      {lesson.checkpoints && lesson.checkpoints.length > 0 && (
        <div className="mt-5 rounded-[10px] bg-background-soft p-4">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-primary">
            {t("checkpoint")}
          </p>
          <ul className="space-y-2">
            {lesson.checkpoints.map((cp, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-primary" />
                {cp}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.article>
  );
}

function CodeBlock({ code }: { code: string }) {
  const lines = code.split("\n").map((line) => {
    const match = line.match(/(https?:\/\/[^\s]+)/);
    return { text: line, url: match ? match[1] : null };
  });
  const hasUrl = lines.some((l) => l.url);
  const urlLines = lines.filter((l): l is { text: string; url: string } => !!l.url);
  const nonUrlLines = lines.filter((l) => !l.url && l.text);
  const useGrid = urlLines.length > 1 && nonUrlLines.length === 0;

  if (hasUrl) {
    return (
      <div className={`rounded-[10px] border border-border bg-background p-4 ${useGrid ? "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" : "space-y-3"}`}>
        {urlLines.map((line, i) => (
          <UrlRow key={i} text={line.text} url={line.url} />
        ))}
        {nonUrlLines.map((line, i) => (
          <pre
            key={`nonurl-${i}`}
            className="overflow-x-auto font-mono text-sm text-foreground"
          >
            <code>{line.text}</code>
          </pre>
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[10px] border border-border bg-background">
      <div className="border-b border-border px-3 py-2">
        <span className="font-mono text-xs text-muted-foreground">command.sh</span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm text-foreground">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function Agenda({ day }: { day: DayData }) {
  const t = useTranslations("dayPage");

  const iconMap: Record<AgendaItem["icon"], React.ElementType> = {
    play: Play,
    message: MessageCircle,
    globe: Globe,
    wrench: Wrench,
    puzzle: Puzzle,
    file: FileText,
    palette: Palette,
    code: Code,
    rocket: Rocket,
    "file-code": FileCode,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="mb-8 overflow-hidden rounded-[24px] border border-border bg-card p-6 md:p-10"
    >
      <div className="mb-6 flex items-center gap-2">
        <span className="h-3 w-3 bg-primary" />
        <span className="text-xs font-bold uppercase tracking-widest text-primary">
          {t("agendaEyebrow", { day: day.id })}
        </span>
      </div>

      <h2 className="mb-2 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground">
        {t("agendaTitle")}
      </h2>
      <p className="mb-8 text-lg text-muted-foreground">{t("agendaLead")}</p>

      <div className="space-y-3">
        {day.agenda?.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={i}
              className={`relative flex items-center gap-4 rounded-[10px] p-4 transition-all hover:bg-primary/5 ${
                item.main
                  ? "border border-primary bg-primary/5 shadow-[0_0_20px_rgba(224,86,253,0.08)]"
                  : "border border-border border-l-4 border-l-primary bg-background"
              }`}
            >
              <span className="text-lg font-bold text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
              {item.main && (
                <span className="hidden rounded bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground sm:inline-block">
                  {t("mainTask")}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

function UrlRow({ text, url }: { text: string; url: string }) {
  const t = useTranslations("dayPage");
  const isDiscord = url.includes("discord.gg");
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
    url
  )}`;
  const label = text.split(" → ")[0] || "";

  return (
    <div className="flex flex-col gap-3 rounded-[10px] border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0 flex-1">
        {label && label !== url ? (
          <p className="text-base font-semibold text-foreground">{label}</p>
        ) : null}
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="mt-0.5 inline-flex items-center gap-1 break-all text-xs font-semibold text-primary transition-colors hover:underline"
        >
          {url}
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-9 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground transition-all hover:-translate-y-0.5"
        >
          {t("openLink")}
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        {isDiscord && (
          <div className="flex flex-col items-center gap-1">
            <img
              src={qr}
              alt={`QR for ${url}`}
              width={120}
              height={120}
              className="rounded-lg border border-border bg-white p-1"
            />
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
              {t("scan")}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
