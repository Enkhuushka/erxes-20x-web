"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  Palette,
  PenTool,
  GitBranch,
  Sparkles,
  ArrowDown,
} from "lucide-react";

export default function Architecture() {
  const t = useTranslations("architecture");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="architecture"
      className="border-y border-border bg-background-soft px-6 py-20 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-12 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-3 flex items-center gap-2"
          >
            <span className="h-3 w-3 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              {t("eyebrow")}
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg italic text-muted-foreground"
          >
            {t("lead")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="rounded-[16px] border border-primary/40 bg-card p-5 shadow-[0_0_24px_rgba(224,86,253,0.06)]">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
                // {t("layer02")}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <SkillCard icon={FileText} title={t("prdWriter")} />
                <SkillCard icon={Palette} title={t("uiuxDesigner")} />
                <SkillCard icon={PenTool} title={t("frontend")} />
                <SkillCard icon={GitBranch} title={t("githubDeploy")} />
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <ArrowDown className="h-4 w-4 text-primary" />
              {t("runsOn")}
            </div>

            <div className="rounded-[16px] border border-primary/40 bg-card p-5 shadow-[0_0_24px_rgba(224,86,253,0.06)]">
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">
                // {t("layer01")}
              </p>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-lg font-bold text-foreground">
                    {t("foundation")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {t("foundationDesc")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-[16px] border border-border bg-card p-5"
          >
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-primary">
              // {t("workflow")}
            </p>
            <div className="space-y-3">
              <WorkflowStep
                number={1}
                icon={FileText}
                title={t("step1")}
                desc={t("step1Desc")}
              />
              <WorkflowStep
                number={2}
                icon={Palette}
                title={t("step2")}
                desc={t("step2Desc")}
              />
              <WorkflowStep
                number={3}
                icon={PenTool}
                title={t("step3")}
                desc={t("step3Desc")}
              />
              <WorkflowStep
                number={4}
                icon={GitBranch}
                title={t("step4")}
                desc={t("step4Desc")}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-[10px] border border-border bg-background p-3 transition-all hover:border-primary/30 hover:bg-primary/5">
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-sm font-bold text-foreground">{title}</span>
    </div>
  );
}

function WorkflowStep({
  number,
  icon: Icon,
  title,
  desc,
}: {
  number: number;
  icon: React.ElementType;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex items-center gap-4 rounded-[10px] border border-border bg-background p-3 transition-all hover:border-primary/40 hover:bg-primary/5">
      <span className="text-lg font-bold leading-none text-primary">
        {String(number).padStart(2, "0")}
      </span>
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}
