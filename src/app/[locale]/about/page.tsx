import { getTranslations } from "next-intl/server";
import {
  Rocket,
  Users,
  Laptop,
  Lightbulb,
  Target,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  AlertTriangle,
  MessageCircle,
  Award,
  Repeat,
  Wrench,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: `${locale === "mn" ? "Бидний тухай" : "About"} — ${t("defaultTitle")}`,
    description: t("homeDescription"),
  };
}

const content: Record<
  string,
  {
    heroTitle: string;
    heroLead: string;
    eyebrow: string;
    format: { title: string; items: string[] };
    audience: { title: string; intro: string; items: string[] };
    bring: { title: string; item: string };
    why: { title: string; intro: string; items: string[] };
    outcome: { title: string; items: string[] };
    program: { title: string; days: { title: string; items: string[] }[] };
    after: { title: string; intro: string; items: string[] };
    benefits: { title: string; items: string[] };
    membership: { title: string; paragraphs: string[] };
    note: { title: string; items: string[] };
  }
> = {
  mn: {
    heroTitle: "20X Mobile Development",
    heroLead: "Build. Launch. Improve. Эхний 5 хоногт гар утасны аппынхаа суурийг бүтээж, цаашид 20X багтай хамт тасралтгүй хөгжүүлнэ.",
    eyebrow: "БИДНИЙ ТУХАЙ",
    format: {
      title: "Формат",
      items: [
        "Workshop + Hands-on Implementation",
        "Багаар болон ганцаарчилсан зөвлөгөө",
        "Launch хийсний дараах тасралтгүй хөгжүүлэлт, дэмжлэг",
      ],
    },
    audience: {
      title: "Хэнд зориулагдсан бэ?",
      intro: "Энэ бүтээгдэхүүн нь дараах хүмүүст зориулагдсан:",
      items: [
        "Startup Founder",
        "Business Owner",
        "Product Manager",
        "Marketing Manager",
        "Designer",
        "Developer биш ч өөрийн апптай болохыг хүссэн хүн бүр",
      ],
    },
    bring: {
      title: "Юу авчрах вэ?",
      item: "Laptop (заавал)",
    },
    why: {
      title: "Яагаад 20X Mobile Development вэ?",
      intro:
        "Ихэнх сургалт хэдхэн хоногийн дараа дуусдаг. Харин 20X Mobile Development бол сургалтаар хязгаарлагдахгүй. Бид хамтдаа аппын эхний хувилбарыг бүтээж, цаашдын хөгжүүлэлтийг хамт үргэлжлүүлдэг. Сургалтын дараа ч:",
      items: [
        "Шинэ боломж (Feature) нэмэх",
        "Алдаа засах",
        "AI ашиглан хөгжүүлэлт хийх",
        "UI/UX-ээ сайжруулах",
        "Зөвлөгөө авах",
        "Community-тэй хамт хөгжих",
      ],
    },
    outcome: {
      title: "Сургалтын үр дүн",
      items: [
        "Mobile App хөгжүүлэлтийн үндсэн ойлголтыг эзэмшинэ",
        "iOS болон Android-д зориулсан аппын бүтэц ойлгоно",
        "UX/UI-ийн үндсэн зарчмыг хэрэгжүүлж сурна",
        "AI ашиглан хөгжүүлэлтийн хурдыг нэмэгдүүлж сурна",
        "Сервер тал (Backend) болон системүүд хоорондын холболттой (API) холбож сурна",
        "Нэвтрэх, бүртгүүлэх системийн (Authentication) үндсэн ойлголтыг хэрэгжүүлнэ",
        "Мэдэгдэл илгээх функц (Push Notification) болон гар утасны аппын бусад үндсэн боломжуудыг ашиглаж сурна",
        "Кодын хувилбарыг хадгалж, удирдах хэрэгсэл (Git, GitHub) ашиглан төслөө удирдана",
        "Аппын эцсийн хувилбар бэлтгэх (Production Build) үндсэн ойлголттой болно",
        "Өөрийн байгууллагад тохирсон Mobile App-ын суурийг бүтээнэ",
        "20X Company Club Community-д нэгдэнэ",
      ],
    },
    program: {
      title: "Хөтөлбөр",
      days: [
        {
          title: "DAY 1 — Strategy & Planning",
          items: [
            "Аппын зорилго тодорхойлох",
            "Бүтээгдэхүүний шаардлагын баримт бичиг (PRD) боловсруулах",
            "Хэрэглэгчийн туршлагын замын зураглал (User Journey) боловсруулах",
            "Дэлгэц хоорондын шилжилтийн зураглал (Screen Flow) гаргах",
            "Feature төлөвлөх",
          ],
        },
        {
          title: "DAY 2 — UX/UI Design",
          items: [
            "Mobile Дизайны нэгдсэн стандарт (Design System) боловсруулах",
            "Брэндийн визуал стандартыг тодорхойлох",
            "App Screen дизайн боловсруулах",
            "UX/UI-г AI ашиглан хөгжүүлэх",
          ],
        },
        {
          title: "DAY 3 — Mobile Development",
          items: [
            "Project Setup хийх",
            "Git & GitHub ашиглах",
            "Аппын харагдах дүрсийг (UI) хөгжүүлэх",
            "Системүүд хоорондын холболт (API) болон сервер тал (Backend) холбох",
            "Нэвтрэх, бүртгүүлэх систем (Authentication) хэрэгжүүлэх",
          ],
        },
        {
          title: "DAY 4 — Optimization & Showcase",
          items: [
            "Ажиллах хурдыг сайжруулах",
            "Компьютер, гар утас гээд бүх төхөөрөмж дээр зөв харагдахыг (Responsive) шалгах",
            "Алдаа засварлах",
            "Өөрийн аппыг танилцуулах",
            "Feedback авч сайжруулах",
          ],
        },
        {
          title: "DAY 5 — Launch",
          items: [
            "Аппын эцсийн хувилбарыг бэлтгэх",
            "Апп дэлгүүрт (App Store, Google Play) байршуулахад бэлдэх",
            "Хувилбарын түүхийг хөтлөх (Version Management)",
            "Цаашдын хөгжүүлэлтийн төлөвлөгөө гаргах",
            "Сертификат гардан авах",
          ],
        },
      ],
    },
    after: {
      title: "Сургалтын дараа",
      intro:
        "Эндээс сургалт дуусахгүй. 20X Community-ийн нэг хэсэг болсноор та хүссэн үедээ:",
      items: [
        "Шинэ Feature хөгжүүлэх",
        "AI боломжууд нэмэх",
        "Backend өргөжүүлэх",
        "Performance сайжруулах",
        "UI/UX шинэчлэх",
        "Хамтарсан хөгжүүлэлтийн уулзалтад (Build Session) дахин оролцох",
        "Community болон mentor-уудаас зөвлөгөө авах",
      ],
    },
    benefits: {
      title: "Давуу тал",
      items: [
        "Founder, Developer болон Builder Community",
        "Discord Community",
        "Албан ёсны сертификат",
        "Тасралтгүй хөгжүүлэлт, зөвлөгөө",
        "Бодит аппын төслөө үргэлжлүүлэн хөгжүүлэх боломж",
        "Урт хугацааны хамтын ажиллагаа",
      ],
    },
    membership: {
      title: "Membership",
      paragraphs: [
        "20X Mobile Development нь дангаараа тусдаа үнэтэй бүтээгдэхүүн биш — 20X Membership-ийн 3 сургалтын нэг юм.",
        "$49-аар 3 хүн, 3 сургалт.",
        "$50 нэмээд $99-аар — erxes Full Service.",
        "Энэ нь зөвхөн сургалтын төлбөр биш — 20X Company Club Community-ийн гишүүнчлэл.",
      ],
    },
    note: {
      title: "Анхаарах зүйл",
      items: [
        "Laptop заавал авчирна.",
        "Энэ бол лекц биш, бодитоор хийж сурах workshop.",
        "Хүн бүр өөрийн аппын эхний хувилбарыг бүтээж, цаашид 20X багтай хамт тасралтгүй хөгжүүлэх боломжтой болно.",
        "Membership-ийн хүрээнд AI Masterclass болон 20X Website Development-ийн эрх мөн адил багтдаа.",
      ],
    },
  },
  en: {
    heroTitle: "20X Mobile Development",
    heroLead: "Build. Launch. Improve. Build the foundation of your mobile app in the first 5 days, then keep improving continuously with the 20X team.",
    eyebrow: "ABOUT",
    format: {
      title: "Format",
      items: [
        "Workshop + Hands-on Implementation",
        "Group and individual mentoring",
        "Continuous development and support after launch",
      ],
    },
    audience: {
      title: "Who is it for?",
      intro: "This product is designed for:",
      items: [
        "Startup Founder",
        "Business Owner",
        "Product Manager",
        "Marketing Manager",
        "Designer",
        "Anyone who wants their own app without being a developer",
      ],
    },
    bring: {
      title: "What to bring",
      item: "Laptop (required)",
    },
    why: {
      title: "Why 20X Mobile Development?",
      intro:
        "Most courses end after a few days. 20X Mobile Development is not limited to training. We build the first version of your app together and continue future development together. After the course you can:",
      items: [
        "Add new features",
        "Fix bugs",
        "Use AI for development",
        "Improve UI/UX",
        "Get advice",
        "Grow with the community",
      ],
    },
    outcome: {
      title: "Learning outcomes",
      items: [
        "Master the fundamentals of mobile app development",
        "Understand app architecture for iOS and Android",
        "Learn to apply UX/UI principles",
        "Speed up development using AI",
        "Connect backend systems and APIs",
        "Implement authentication basics",
        "Use push notifications and other core mobile capabilities",
        "Manage your project with Git and GitHub",
        "Understand production build basics",
        "Build a mobile app foundation tailored to your organization",
        "Join the 20X Company Club Community",
      ],
    },
    program: {
      title: "Program",
      days: [
        {
          title: "DAY 1 — Strategy & Planning",
          items: [
            "Define the app goal",
            "Create the product requirements document (PRD)",
            "Develop the user journey map",
            "Create screen-flow diagrams",
            "Plan features",
          ],
        },
        {
          title: "DAY 2 — UX/UI Design",
          items: [
            "Build a mobile design system",
            "Define brand visual standards",
            "Design app screens",
            "Use AI to improve UX/UI",
          ],
        },
        {
          title: "DAY 3 — Mobile Development",
          items: [
            "Set up the project",
            "Use Git & GitHub",
            "Develop the UI",
            "Connect APIs and backend",
            "Implement authentication",
          ],
        },
        {
          title: "DAY 4 — Optimization & Showcase",
          items: [
            "Improve performance",
            "Check responsiveness across devices",
            "Fix bugs",
            "Present your app",
            "Collect feedback and iterate",
          ],
        },
        {
          title: "DAY 5 — Launch",
          items: [
            "Prepare the final app build",
            "Get ready for App Store and Google Play",
            "Manage version history",
            "Plan future development",
            "Receive certificate",
          ],
        },
      ],
    },
    after: {
      title: "After the course",
      intro:
        "The learning does not stop here. As part of the 20X Community you can at any time:",
      items: [
        "Develop new features",
        "Add AI capabilities",
        "Extend the backend",
        "Improve performance",
        "Refresh UI/UX",
        "Join build sessions again",
        "Get advice from mentors and the community",
      ],
    },
    benefits: {
      title: "Benefits",
      items: [
        "Founder, Developer and Builder Community",
        "Discord Community",
        "Official certificate",
        "Continuous development and advice",
        "Keep improving your real app project",
        "Long-term collaboration",
      ],
    },
    membership: {
      title: "Membership",
      paragraphs: [
        "20X Mobile Development is not a separate paid product — it is one of 3 courses included in 20X Membership.",
        "$49 for 3 people, 3 courses.",
        "Add $50 to get $99 — erxes Full Service.",
        "This is not just a course fee — it is membership in the 20X Company Club Community.",
      ],
    },
    note: {
      title: "Important notes",
      items: [
        "You must bring a laptop.",
        "This is not a lecture but a hands-on workshop.",
        "Everyone will build the first version of their app and can keep developing it continuously with the 20X team.",
        "Membership also includes AI Masterclass and 20X Website Development access.",
      ],
    },
  },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = content[locale] || content.mn;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-background px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1000px]">
        <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
          <Rocket className="h-4 w-4" />
          {c.eyebrow}
        </span>
        <h1 className="mb-6 text-[clamp(2.5rem,6vw,4rem)] font-bold leading-tight text-foreground">
          {c.heroTitle}
        </h1>
        <p className="mb-16 max-w-[720px] text-xl leading-relaxed text-muted-foreground">
          {c.heroLead}
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <InfoCard icon={CalendarDays} title={c.format.title} items={c.format.items} />
          <InfoCard icon={Users} title={c.audience.title} intro={c.audience.intro} items={c.audience.items} />
          <InfoCard icon={Laptop} title={c.bring.title} items={[c.bring.item]} />
        </div>

        <Section icon={Lightbulb} title={c.why.title}>
          <p className="mb-5 text-lg leading-relaxed text-muted-foreground">{c.why.intro}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {c.why.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45 bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section icon={Target} title={c.outcome.title}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {c.outcome.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section icon={CalendarDays} title={c.program.title}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.program.days.map((day, i) => (
              <div
                key={i}
                className="rounded-[16px] border border-border bg-card p-5 transition-all hover:border-primary/30"
              >
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">
                  {day.title}
                </h3>
                <ul className="space-y-2">
                  {day.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rotate-45 bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section icon={Repeat} title={c.after.title}>
          <p className="mb-5 text-lg leading-relaxed text-muted-foreground">{c.after.intro}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {c.after.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45 bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section icon={Award} title={c.benefits.title}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {c.benefits.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <MessageCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section icon={CreditCard} title={c.membership.title}>
          <div className="rounded-[16px] border border-primary/30 bg-primary/5 p-6">
            {c.membership.paragraphs.map((p, i) => (
              <p key={i} className={`text-lg text-foreground ${i !== c.membership.paragraphs.length - 1 ? "mb-3" : ""}`}>
                {p}
              </p>
            ))}
          </div>
        </Section>

        <Section icon={AlertTriangle} title={c.note.title}>
          <ul className="space-y-3">
            {c.note.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-foreground">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45 bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  intro,
  items,
}: {
  icon: React.ElementType;
  title: string;
  intro?: string;
  items: string[];
}) {
  return (
    <div className="rounded-[16px] border border-border bg-card p-5 transition-all hover:border-primary/30">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <h2 className="mb-2 text-lg font-bold text-foreground">{title}</h2>
      {intro && <p className="mb-2 text-sm text-muted-foreground">{intro}</p>}
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed text-muted-foreground">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14">
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}
