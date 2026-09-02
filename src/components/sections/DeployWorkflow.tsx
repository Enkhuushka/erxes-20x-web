import { Monitor, GitBranch, Workflow, Globe, Triangle } from "lucide-react";

export default function DeployWorkflow() {
  const steps = [
    { icon: Monitor, label: "Local machine" },
    { icon: GitBranch, label: "Push to GitHub" },
    { icon: Workflow, label: "GitHub Actions" },
    { icon: Triangle, label: "Deploy to Vercel" },
    { icon: Globe, label: "Deployed app" },
  ];

  return (
    <div className="mt-10 rounded-[24px] border border-border bg-card p-6 md:p-10">
      <p className="mb-8 text-center text-sm font-bold uppercase tracking-widest text-primary">
        Deploy workflow
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={i} className="flex items-center gap-3 md:gap-4">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[0_0_24px_rgba(224,86,253,0.12)] md:h-20 md:w-20">
                  <Icon className="h-8 w-8 md:h-10 md:w-10" />
                </div>
                <span className="max-w-[90px] text-center text-xs font-semibold text-muted-foreground md:max-w-[110px] md:text-sm">
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden h-px w-6 bg-primary/40 md:block" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
