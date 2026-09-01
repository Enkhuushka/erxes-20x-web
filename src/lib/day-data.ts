import { DayData } from "@/components/sections/DayPage";

export const dayDataMn: Record<number, DayData> = {
  1: {
    id: 1,
    title: "Intro · Basics — Setup & Skills install",
    outcome: "Setup-аас эхлээд эхний AI Skill-ээ ашиглах хүртэл бэлтгэсэн байх.",
    agenda: [
      { title: "Intro & outcome", desc: "Хөтөлбөрийн зорилго · юу сурах вэ?", icon: "play" },
      { title: "Discord нэгдэх", desc: "discord.com · 20x Company channel", icon: "message" },
      { title: "erxes-д нэгдэх", desc: "erxes.io · бүртгэл + erxes Content CMS үүсгэх", icon: "globe" },
      { title: "Tools install", desc: "OpenCode · Pencil", icon: "wrench" },
      { title: "erxes Skills install + ашиглах", desc: "ӨНӨӨДРИЙН ГОЛ ДААЛГАВАР", icon: "puzzle", main: true },
    ],
    lessons: [
      {
        title: "Intro & outcome",
        desc: "5-Day 20x Marketer хөтөлбөрийн зорилго, багш MJ · Түвшинтөгс + Erica, өдөр бүрийн roadmap.",
        checkpoints: ["Хөтөлбөрийн зорилгыг ойлгосон", "5 өдрийн roadmap танилцсан", "Өнөөдрийн гол даалгавар тодорхой"],
      },
      {
        title: "Discord нэгдэх",
        desc: "discord.com-оор бүртгүүлж, 20x Company channel-д нэгдэх. Холбоос: https://discord.gg/AVJeEQGNY",
        code: "https://discord.gg/AVJeEQGNY",
        checkpoints: ["Discord бүртгүүлсэн", "20x Company channel-д нэгдсэн", "Хэрэгтэй мэдээлэл авсан"],
      },
      {
        title: "erxes-д нэгдэх",
        desc: "erxes.io дээр бүртгэл үүсгэж, erxes Content CMS руу нэвтрэх.",
        code: "https://www.erxes.io",
        checkpoints: ["erxes.io-д бүртгүүлсэн", "Content CMS нэвтэрсэн", "Workspace тохиргоо хийсэн"],
      },
      {
        title: "Tools install",
        desc: "OpenCode, Pencil хэрэгсэлүүдийг татан суулгах.",
        code: "OpenCode → https://opencode.ai\nPencil → https://www.pencil.dev",
        note: [
          {
            title: "OpenCode",
            text: "Хиймэл оюун ухаанд суурилсан програмчлалын хэрэгсэл бөгөөд код бичих, засварлах, алдаа илрүүлэх болон төслийн файлуудтай ажиллахад хөгжүүлэгчдэд тусалдаг. Энэ нь програм боловсруулах үйл явцыг хурдан, хялбар болгоход ашиглагдана.",
          },
          {
            title: "Pencil",
            text: "Хиймэл оюун ухааны тусламжтайгаар веб болон гар утасны аппликейшны UI/UX дизайныг боловсруулах хэрэгсэл юм. Дизайныг визуал байдлаар үүсгэхээс гадна бэлэн дизайныг програмын кодтой холбон хэрэгжүүлэх боломжтой.",
          },
        ],
        checkpoints: ["OpenCode суулгасан", "Pencil суулгасан"],
      },
      {
        title: "erxes Skills install + ашиглах",
        desc: "github.com/erxes/erxes-skills repo-оос skill суулгаж, OpenCode дээр ашиглах. Node.js болон Python суулгасан эсэхийг шалгах.",
        code: "https://github.com/erxes/erxes-skills\n# Open: erxes skills → Content plugin → Headless → Web\nnode -v\npython --version",
        checkpoints: ["erxes Skills repo татсан", "Node.js/Python бэлэн", "Анхны skill ажиллуулсан"],
      },
    ],
  },
  2: {
    id: 2,
    title: "PRD + UX/UI — BRD & Design.md",
    outcome: "Өөрийн вэбийн BRD/PRD, UX/UI research, Design.md-г бэлдсэн байх.",
    agenda: [
      { title: "PRD/BRD бичих", desc: "Бүтээгдэхүүний шаардлага · use case", icon: "file" },
      { title: "UI/UX + Pencil · MCP", desc: "Дизайн систем · components", icon: "palette" },
      { title: "Design.md", desc: "Reference · style guide", icon: "file-code", main: true },
    ],
    lessons: [
      {
        title: "PRD/BRD бичих",
        desc: "Бүтээгдэхүүний шаардлага, use case, sitemap, navigation санаа BRD file дээр бичих. Жишээ BRD file-ууд:",
        code: "https://stormy-ginger-kwdr.here.now/\nhttps://eager-ether-dztm.here.now/",
        checkpoints: ["Use case тодорхойлсон", "Sitemap / navigation бичсэн", "BRD холбоосыг хадгалсан"],
      },
      {
        title: "UI/UX + Pencil · MCP",
        desc: "Дизайн систем, components, Pencil ашиглан homepage direction, visual direction сонгох.",
        code: "https://styles.refero.design/\nPencil → https://www.pencil.dev",
        checkpoints: ["UX/UI research хийсэн", "Visual direction сонгосон", "Pencil дээр homepage direction эхлүүлсэн"],
      },
      {
        title: "Design.md",
        desc: "Design.md file-аа бэлдэж, styles.refero.design-аас reference авах.",
        code: "https://styles.refero.design/",
        checkpoints: ["Design.md үүсгэсэн", "Color / typography тодорхойлсон", "Reference холбоос хадгалсан"],
      },
      {
        title: "20X Mobile Development",
        desc: "Build. Launch. Improve. Эхний 5 хоногт гар утасны аппынхаа суурийг бүтээж, цаашид 20X багтай хамт тасралтгүй хөгжүүлнэ.",
        note: [
          {
            title: "Формат",
            bullets: [
              "Workshop + Hands-on Implementation",
              "Багаар болон ганцаарчилсан зөвлөгөө",
              "Launch хийсний дараах тасралтгүй хөгжүүлэлт, дэмжлэг",
            ],
          },
          {
            title: "Хэнд зориулагдсан бэ?",
            bullets: [
              "Startup Founder",
              "Business Owner",
              "Product Manager",
              "Marketing Manager",
              "Designer",
              "Developer биш ч өөрийн апптай болохыг хүссэн хүн бүр",
            ],
          },
          {
            title: "Юу авчрах вэ?",
            bullets: ["Laptop (заавал)"],
          },
          {
            title: "Яагаад 20X Mobile Development вэ?",
            text: "Ихэнх сургалт хэдхэн хоногийн дараа дуусдаг. Харин 20X Mobile Development бол сургалтаар хязгаарлагдахгүй. Бид хамтдаа аппын эхний хувилбарыг бүтээж, цаашдын хөгжүүлэлтийг хамт үргэлжлүүлдэг. Сургалтын дараа ч:",
            bullets: [
              "Шинэ боломж (Feature) нэмэх",
              "Алдаа засах",
              "AI ашиглан хөгжүүлэлт хийх",
              "UI/UX-ээ сайжруулах",
              "Зөвлөгөө авах",
              "Community-тэй хамт хөгжих",
            ],
          },
          {
            title: "Сургалтын үр дүн",
            bullets: [
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
          {
            title: "Хөтөлбөр",
            bullets: [
              "DAY 1 — Strategy & Planning",
              "DAY 2 — UX/UI Design",
              "DAY 3 — Mobile Development",
              "DAY 4 — Optimization & Showcase",
              "DAY 5 — Launch",
            ],
          },
          {
            title: "Сургалтын дараа",
            text: "Эндээс сургалт дуусахгүй. 20X Community-ийн нэг хэсэг болсноор та хүссэн үедээ:",
            bullets: [
              "Шинэ Feature хөгжүүлэх",
              "AI боломжууд нэмэх",
              "Backend өргөжүүлэх",
              "Performance сайжруулах",
              "UI/UX шинэчлэх",
              "Хамтарсан хөгжүүлэлтийн уулзалтад (Build Session) дахин оролцох",
              "Community болон mentor-уудаас зөвлөгөө авах",
            ],
          },
          {
            title: "Давуу тал",
            bullets: [
              "Founder, Developer болон Builder Community",
              "Discord Community",
              "Албан ёсны сертификат",
              "Тасралтгүй хөгжүүлэлт, зөвлөгөө",
              "Бодит аппын төслөө үргэлжлүүлэн хөгжүүлэх боломж",
              "Урт хугацааны хамтын ажиллагаа",
            ],
          },
          {
            title: "Membership",
            text: "20X Mobile Development нь дангаараа тусдаа үнэтэй бүтээгдэхүүн биш — 20X Membership-ийн 3 сургалтын нэг юм. $49-аар 3 хүн, 3 сургалт. $50 нэмээд $99-аар — erxes Full Service. Энэ нь зөвхөн сургалтын төлбөр биш — 20X Company Club Community-ийн гишүүнчлэл.",
          },
          {
            title: "Анхаарах зүйл",
            bullets: [
              "Laptop заавал авчирна.",
              "Энэ бол лекц биш, бодитоор хийж сурах workshop.",
              "Хүн бүр өөрийн аппын эхний хувилбарыг бүтээж, цаашид 20X багтай хамт тасралтгүй хөгжүүлэх боломжтой болно.",
              "Membership-ийн хүрээнд AI Masterclass болон 20X Website Development-ийн эрх мөн адил багтдаа.",
            ],
          },
        ],
        checkpoints: ["20X Mobile Development танилцуулгыг үзсэн", "Membership загварыг ойлгосон"],
      },
    ],
  },
  3: {
    id: 3,
    title: "Front-end — Build the interface",
    outcome: "Сонгосон дизайны дагуу interface-ийг бүрэн бүтээх.",
    lessons: [
      {
        title: "Segment бүтээх",
        desc: "Хэрэглэгчдийг шинж чанараар нь бүлэглэх, dynamic segment үүсгэх.",
        code: "erxes segment create --name \"Active Users\" --filter lastLogin<30days",
        checkpoints: ["Filter сонгосон", "Segment үүсгэсэн", "Гишүүд шалгасан"],
      },
      {
        title: "Email campaign",
        desc: "Email template бүтээх, campaign ажиллуулах, A/B test хийх.",
        code: "erxes campaign create --channel email --segment \"Active Users\"",
        checkpoints: ["Template үүсгэсэн", "Segment холбосон", "Campaign илгээсэн"],
      },
      {
        title: "Харилцагчийн зам",
        desc: "Customer journey map, automation workflow зурах.",
        code: "erxes journey create --name \"Onboarding\" --steps welcome,activate,retain",
        checkpoints: ["Journey map зурсан", "Automation workflow үүсгэсэн", "Test хийсэн"],
      },
    ],
  },
  4: {
    id: 4,
    title: "Showoff — Live demo session",
    outcome: "Бүтээсэн сайтаа тайлбарлан demo хийх.",
    lessons: [
      {
        title: "Ticket management",
        desc: "Ирсэн хүсэлтийг ticket болгон хувиарлах, SLA тохируулах.",
        code: "erxes ticket create --subject \"Login issue\" --priority high",
        checkpoints: ["Ticket үүсгэсэн", "Priority SLA тохируулсан", "Assign хийсэн"],
      },
      {
        title: "Knowledge base",
        desc: "Мэдлэгийн сан үүсгэх, category/article бүтээх.",
        code: "erxes kb create --category \"FAQ\" --article \"How to reset password\"",
        checkpoints: ["Category үүсгэсэн", "Article бичсэн", "Publish хийсэн"],
      },
      {
        title: "Chatbot холболт",
        desc: "Messenger, website chatbot холбох, авто хариу бичих.",
        code: "erxes integration create --kind messenger --name \"Website Chat\"",
        checkpoints: ["Integration үүсгэсэн", "Script embed хийсэн", "Auto-reply тохируулсан"],
      },
    ],
  },
  5: {
    id: 5,
    title: "Graduation — Сертификат · Demo",
    outcome: "Сертификат авах, эцсийн demo хийх.",
    lessons: [
      {
        title: "Dashboard бүтээх",
        desc: "Pivot chart, funnel, report widget-үүдийг нэгтгэх.",
        code: "erxes dashboard create --name \"Sales Overview\" --widgets pipeline,forecast",
        checkpoints: ["Dashboard үүсгэсэн", "Widget нэмсэн", "Filter тохируулсан"],
      },
      {
        title: "Plugin суулгах",
        desc: "Marketplace-аас plugin сонгон суулгах, тохиргоо хийх.",
        code: "erxes plugin install erxes-20x-reports\nerxes plugin enable erxes-20x-reports",
        checkpoints: ["Plugin сонгосон", "Суулгасан", "Идэвхжүүлсэн"],
      },
      {
        title: "Багт нэвтрүүлэх",
        desc: "Role, permission, team хуваарьлалт, rollout төлөвлөгөө.",
        code: "erxes role create --name \"Sales Rep\" --permissions leads,deals",
        checkpoints: ["Role үүсгэсэн", "Permission олгосон", "Team assign хийсэн"],
      },
    ],
  },
};

export const dayDataEn: Record<number, DayData> = {
  1: {
    id: 1,
    title: "Intro · Basics — Setup & Skills Install",
    outcome: "Get set up from scratch and run your first erxes AI Skill.",
    agenda: [
      { title: "Intro & outcome", desc: "Program goal · what you'll learn", icon: "play" },
      { title: "Join Discord", desc: "discord.com · 20x Company channel", icon: "message" },
      { title: "Join erxes", desc: "erxes.io · register + create Content CMS", icon: "globe" },
      { title: "Install tools", desc: "OpenCode · Pencil", icon: "wrench" },
      { title: "Install & use erxes Skills", desc: "Today's main task", icon: "puzzle", main: true },
    ],
    lessons: [
      {
        title: "Intro & outcome",
        desc: "5-Day 20x Marketer roadmap, instructors MJ · Tuvshintugs + Erica, what you’ll build each day.",
        checkpoints: ["Understood the program goal", "Reviewed the 5-day roadmap", "Know today's main task"],
      },
      {
        title: "Join Discord",
        desc: "Sign up at discord.com and join the 20x Company channel. Invite: https://discord.gg/AVJeEQGNY",
        code: "https://discord.gg/AVJeEQGNY",
        checkpoints: ["Signed up on Discord", "Joined the 20x Company channel", "Captured key info"],
      },
      {
        title: "Join erxes",
        desc: "Create an account on erxes.io and enter the erxes Content CMS workspace.",
        code: "https://www.erxes.io",
        checkpoints: ["Registered on erxes.io", "Entered Content CMS", "Configured workspace"],
      },
      {
        title: "Install tools",
        desc: "Download and install OpenCode and Pencil.",
        code: "OpenCode → https://opencode.ai\nPencil → https://www.pencil.dev",
        note: [
          {
            title: "OpenCode",
            text: "An AI-powered coding assistant that helps developers write, edit, debug code and work with project files — making software development faster and easier.",
          },
          {
            title: "Pencil",
            text: "An AI-powered design tool for building web and mobile UI/UX visuals; it creates designs visually and can connect finished designs to working code.",
          },
        ],
        checkpoints: ["Installed OpenCode", "Installed Pencil"],
      },
      {
        title: "Install & use erxes Skills",
        desc: "Install the skill from github.com/erxes/erxes-skills and use it inside OpenCode. Verify Node.js and Python.",
        code: "https://github.com/erxes/erxes-skills\n# Open: erxes skills → Content plugin → Headless → Web\nnode -v\npython --version",
        checkpoints: ["Cloned erxes Skills", "Node.js/Python ready", "Ran first skill"],
      },
    ],
  },
  2: {
    id: 2,
    title: "PRD + UX/UI — BRD & Design.md",
    outcome: "Prepare your BRD/PRD, UX/UI research, and Design.md for your website.",
    agenda: [
      { title: "Write PRD/BRD", desc: "Product requirements · use case", icon: "file" },
      { title: "UI/UX + Pencil · MCP", desc: "Design system · components", icon: "palette" },
      { title: "Design.md", desc: "Reference · style guide", icon: "file-code", main: true },
    ],
    lessons: [
      {
        title: "Write PRD/BRD",
        desc: "Define product requirements, use cases, sitemap, and navigation ideas in a BRD file. Example BRD files:",
        code: "https://stormy-ginger-kwdr.here.now/\nhttps://eager-ether-dztm.here.now/",
        checkpoints: ["Defined use cases", "Drafted sitemap/navigation", "Saved BRD link"],
      },
      {
        title: "UI/UX + Pencil · MCP",
        desc: "Design system, components, use Pencil to create homepage directions and pick a visual direction. Reference:",
        code: "https://styles.refero.design/\nPencil → https://www.pencil.dev",
        checkpoints: ["Did UX/UI research", "Chose a visual direction", "Started homepage directions in Pencil"],
      },
      {
        title: "Design.md",
        desc: "Prepare your Design.md file and pull references from styles.refero.design.",
        code: "https://styles.refero.design/",
        checkpoints: ["Created Design.md", "Defined colors/typography", "Saved reference link"],
      },
      {
        title: "20X Mobile Development",
        desc: "Build. Launch. Improve. Build the foundation of your mobile app in the first 5 days, then keep improving continuously with the 20X team.",
        note: [
          {
            title: "Format",
            bullets: [
              "Workshop + Hands-on Implementation",
              "Group and individual mentoring",
              "Continuous development and support after launch",
            ],
          },
          {
            title: "Who is it for?",
            bullets: [
              "Startup Founder",
              "Business Owner",
              "Product Manager",
              "Marketing Manager",
              "Designer",
              "Anyone who wants their own app without being a developer",
            ],
          },
          {
            title: "What to bring",
            bullets: ["Laptop (required)"],
          },
          {
            title: "Why 20X Mobile Development?",
            text: "Most courses end after a few days. 20X Mobile Development is not limited to training. We build the first version of your app together and continue future development together. After the course you can:",
            bullets: [
              "Add new features",
              "Fix bugs",
              "Use AI for development",
              "Improve UI/UX",
              "Get advice",
              "Grow with the community",
            ],
          },
          {
            title: "Learning outcomes",
            bullets: [
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
          {
            title: "Program",
            bullets: [
              "DAY 1 — Strategy & Planning",
              "DAY 2 — UX/UI Design",
              "DAY 3 — Mobile Development",
              "DAY 4 — Optimization & Showcase",
              "DAY 5 — Launch",
            ],
          },
          {
            title: "After the course",
            text: "The learning does not stop here. As part of the 20X Community you can at any time:",
            bullets: [
              "Develop new features",
              "Add AI capabilities",
              "Extend the backend",
              "Improve performance",
              "Refresh UI/UX",
              "Join build sessions again",
              "Get advice from mentors and the community",
            ],
          },
          {
            title: "Benefits",
            bullets: [
              "Founder, Developer and Builder Community",
              "Discord Community",
              "Official certificate",
              "Continuous development and advice",
              "Keep improving your real app project",
              "Long-term collaboration",
            ],
          },
          {
            title: "Membership",
            text: "20X Mobile Development is not a separate paid product — it is one of 3 courses included in 20X Membership. $49 for 3 people, 3 courses. Add $50 to get $99 — erxes Full Service. This is not just a course fee — it is membership in the 20X Company Club Community.",
          },
          {
            title: "Important notes",
            bullets: [
              "You must bring a laptop.",
              "This is not a lecture but a hands-on workshop.",
              "Everyone will build the first version of their app and can keep developing it continuously with the 20X team.",
              "Membership also includes AI Masterclass and 20X Website Development access.",
            ],
          },
        ],
        checkpoints: ["Reviewed the 20X Mobile Development overview", "Understood the membership model"],
      },
    ],
  },
  3: {
    id: 3,
    title: "Front-end — Build the Interface",
    outcome: "Build the full interface based on your approved design.",
    lessons: [
      {
        title: "Build segments",
        desc: "Group customers by attributes and create dynamic segments.",
        code: "erxes segment create --name \"Active Users\" --filter lastLogin<30days",
        checkpoints: ["Chose filters", "Created segment", "Reviewed members"],
      },
      {
        title: "Email campaign",
        desc: "Create email templates, run campaigns, and A/B test.",
        code: "erxes campaign create --channel email --segment \"Active Users\"",
        checkpoints: ["Created template", "Linked segment", "Sent campaign"],
      },
      {
        title: "Customer journey",
        desc: "Map customer journeys and build automation workflows.",
        code: "erxes journey create --name \"Onboarding\" --steps welcome,activate,retain",
        checkpoints: ["Mapped journey", "Created workflow", "Tested"],
      },
    ],
  },
  4: {
    id: 4,
    title: "Showoff — Live Demo Session",
    outcome: "Present and demo the site you built.",
    lessons: [
      {
        title: "Ticket management",
        desc: "Convert inbound requests into tickets, set priorities and SLAs.",
        code: "erxes ticket create --subject \"Login issue\" --priority high",
        checkpoints: ["Created a ticket", "Set SLA", "Assigned to agent"],
      },
      {
        title: "Knowledge base",
        desc: "Create categories and articles for self-service.",
        code: "erxes kb create --category \"FAQ\" --article \"How to reset password\"",
        checkpoints: ["Created category", "Wrote article", "Published"],
      },
      {
        title: "Chatbot integration",
        desc: "Connect Messenger and website chatbot, set auto replies.",
        code: "erxes integration create --kind messenger --name \"Website Chat\"",
        checkpoints: ["Created integration", "Embedded script", "Set auto-reply"],
      },
    ],
  },
  5: {
    id: 5,
    title: "Graduation — Certificate · Demo",
    outcome: "Receive certificate and give final demo.",
    lessons: [
      {
        title: "Build dashboards",
        desc: "Combine pivot charts, funnels, and report widgets.",
        code: "erxes dashboard create --name \"Sales Overview\" --widgets pipeline,forecast",
        checkpoints: ["Created dashboard", "Added widgets", "Set filters"],
      },
      {
        title: "Install plugins",
        desc: "Choose and install plugins from the marketplace.",
        code: "erxes plugin install erxes-20x-reports\nerxes plugin enable erxes-20x-reports",
        checkpoints: ["Selected plugin", "Installed", "Enabled"],
      },
      {
        title: "Team rollout",
        desc: "Roles, permissions, team assignments, and rollout plan.",
        code: "erxes role create --name \"Sales Rep\" --permissions leads,deals",
        checkpoints: ["Created role", "Set permissions", "Assigned team"],
      },
    ],
  },
};
