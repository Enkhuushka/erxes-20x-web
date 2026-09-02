import { getTranslations } from "next-intl/server";
import { Target, Users, Layout, Layers, Palette, Cpu, Calendar } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = locale === "mn" ? "Жишээ BRD" : "Example BRD";
  return {
    title: `${title} — ${t("defaultTitle")}`,
    description: t("homeDescription"),
  };
}

const content: Record<
  string,
  {
    eyebrow: string;
    title: string;
    project: string;
    sections: { icon: React.ElementType; title: string; body: string; bullets?: string[] }[];
  }
> = {
  mn: {
    eyebrow: "ЖИШЭЭ",
    title: "BRD — Business Requirements Document",
    project: "Төсөл: erxes 20x Course Website",
    sections: [
      {
        icon: Target,
        title: "1. Зорилго",
        body: "20x Marketer сургалтын талаарх мэдээлэл, хөтөлбөр, бүртгэл, холбоосыг нэг дороос хүргэх вэбсайт бүтээх. Сургалтад хамрагдах хүсэлтэй хүмүүс хялбар ойлгомжтойгоор мэдээлэл авах, бүртгүүлэх боломжтой байх.",
      },
      {
        icon: Users,
        title: "2. Зорилтот хэрэглэгчид",
        body: "Сургалтад суурилагдах багш, маркетер, бүтээгдэхүүн менежер, бизнес эзэн, developer биш ч өөрийн вэб/апп бүтээхийг хүсэгчид.",
      },
      {
        icon: Layout,
        title: "3. Сайтын бүтэц",
        body: "Вэбсайтын төлөвлөгдсөн хуудас болон хэсгүүд:",
        bullets: [
          "Нүүр — Hero, stats, curriculum, architecture, CTA",
          "Day 1–5 — Өдөр бүрт хичээл, холбоос, QR, checklist",
          "About — Сургалтын танилцуулга, давуу тал, membership",
          "Contact — Холбоо барих форм",
        ],
      },
      {
        icon: Layers,
        title: "4. Үндсэн хэсгүүд",
        body: "Hero, Stats, Curriculum, Architecture, CTA, WiFi info, Day pages, About, Contact.",
      },
      {
        icon: Palette,
        title: "5. Дизайны стратеги",
        body: "from-scratch — Dark mode default, magenta/purple accent, modern monospace + clean sans-serif typography.",
      },
      {
        icon: Cpu,
        title: "6. Технологийн олз",
        body: "Сайт бүтээхэд ашиглах технологиуд:",
        bullets: ["Next.js 16", "Tailwind CSS 4", "next-intl i18n", "framer-motion", "Apollo + erxes CMS"],
      },
      {
        icon: Calendar,
        title: "7. Хугацаа",
        body: "5 өдөр: Setup → PRD/UX/UI → Front-end → Demo → Graduation.",
      },
    ],
  },
  en: {
    eyebrow: "EXAMPLE",
    title: "BRD — Business Requirements Document",
    project: "Project: erxes 20x Course Website",
    sections: [
      {
        icon: Target,
        title: "1. Goal",
        body: "Build a website that delivers information about the 20x Marketer course, curriculum, registration, and links in one place. Prospective students should easily understand the program and register.",
      },
      {
        icon: Users,
        title: "2. Target audience",
        body: "Instructors, marketers, product managers, business owners, and anyone without a developer background who wants to build their own website or app.",
      },
      {
        icon: Layout,
        title: "3. Site structure",
        body: "Planned pages and sections of the website:",
        bullets: [
          "Home — Hero, stats, curriculum, architecture, CTA",
          "Day 1–5 — Lessons per day, links, QR, checklist",
          "About — Course overview, benefits, membership",
          "Contact — Contact form",
        ],
      },
      {
        icon: Layers,
        title: "4. Key sections",
        body: "Hero, Stats, Curriculum, Architecture, CTA, WiFi info, Day pages, About, Contact.",
      },
      {
        icon: Palette,
        title: "5. Design strategy",
        body: "from-scratch — Dark mode default, magenta/purple accent, modern monospace + clean sans-serif typography.",
      },
      {
        icon: Cpu,
        title: "6. Tech stack",
        body: "Technologies used to build the site:",
        bullets: ["Next.js 16", "Tailwind CSS 4", "next-intl i18n", "framer-motion", "Apollo + erxes CMS"],
      },
      {
        icon: Calendar,
        title: "7. Timeline",
        body: "5 days: Setup → PRD/UX/UI → Front-end → Demo → Graduation.",
      },
    ],
  },
};

export default async function BrdPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = content[locale] || content.mn;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1000px]">
        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-primary">
          {c.eyebrow}
        </span>
        <h1 className="mb-4 text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-foreground">
          {c.title}
        </h1>
        <p className="mb-12 text-xl text-muted-foreground">{c.project}</p>

        <div className="space-y-6">
          {c.sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <div
                key={i}
                className="rounded-[16px] border-l-4 border-l-primary bg-card p-6 transition-colors hover:bg-background-soft"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h2 className="text-lg font-bold text-foreground">{section.title}</h2>
                </div>
                <p className="mb-3 text-base leading-relaxed text-muted-foreground">{section.body}</p>
                {section.bullets && (
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {section.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-base text-foreground">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-[16px] border-l-4 border-l-primary bg-card p-6">
          <h2 className="mb-3 text-lg font-bold text-foreground">
            {locale === "mn" ? "Жишээ BRD файлууд" : "Example BRD files"}
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://stormy-ginger-kwdr.here.now/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[12px] border border-border bg-background p-4 transition-colors hover:border-primary/50 hover:bg-background-soft"
            >
              <span className="text-base font-semibold text-foreground">Example 1</span>
              <span className="text-sm text-primary">Open ↗</span>
            </a>
            <a
              href="https://eager-ether-dztm.here.now/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-[12px] border border-border bg-background p-4 transition-colors hover:border-primary/50 hover:bg-background-soft"
            >
              <span className="text-base font-semibold text-foreground">Example 2</span>
              <span className="text-sm text-primary">Open ↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
