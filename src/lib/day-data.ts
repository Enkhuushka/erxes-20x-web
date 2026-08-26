import { DayData } from "@/components/sections/DayPage";

export const dayDataMn: Record<number, DayData> = {
  1: {
    id: 1,
    title: "Intro · Basics — Setup & Skills install",
    outcome: "Setup-аас эхлээд эхний AI Skill-ээ ашиглах хүртэл бэлтгэсэн байх.",
    lessons: [
      {
        title: "Intro & outcome",
        desc: "5-Day 20x Marketer хөтөлбөрийн зорилго, багш MJ · Түвшинтөгс + Erica, өдөр бүрийн roadmap.",
        code: "5-DAY 20x MARKETER · ROADMAP\nӨДӨР 01  Intro · Basics\nӨДӨР 02  PRD + UX/UI\nӨДӨР 03  Front-end\nӨДӨР 04  Showoff\nӨДӨР 05  Graduation",
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
        desc: "OpenCode, Paper, Pencil хэрэгсэлүүдийг татан суулгах.",
        code: "OpenCode → https://opencode.ai\nPaper    → https://paper.design\nPencil   → https://www.pencil.dev",
        checkpoints: ["OpenCode суулгасан", "Paper суулгасан", "Pencil суулгасан"],
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
    lessons: [
      {
        title: "PRD/BRD бичих",
        desc: "Бүтээгдэхүүний шаардлага, use case, sitemap, navigation санаа BRD file дээр бичих. Жишээ BRD file-ууд:",
        code: "https://stormy-ginger-kwdr.here.now/\nhttps://eager-ether-dztm.here.now/",
        checkpoints: ["Use case тодорхойлсон", "Sitemap / navigation бичсэн", "BRD холбоосыг хадгалсан"],
      },
      {
        title: "UI/UX + Pencil & Paper · MCP",
        desc: "Дизайн систем, components, Pencil & Paper ашиглан homepage direction, visual direction сонгох.",
        code: "https://styles.refero.design/\nPaper  → https://paper.design\nPencil → https://www.pencil.dev",
        checkpoints: ["UX/UI research хийсэн", "Visual direction сонгосон", "Pencil дээр homepage direction эхлүүлсэн"],
      },
      {
        title: "Front-end development",
        desc: "Сонгосон дизайны дагуу front-end бүтээх, polish, iterate хийх.",
        code: "# Next.js project ажиллуулах\npnpm install\npnpm dev",
        checkpoints: ["Next.js project ажиллуулсан", "Hero + section component бичсэн", "Polish / iterate хийсэн"],
      },
      {
        title: "GitHub deploy",
        desc: "Бүтээсэн сайтаа GitHub push хийгээд Vercel дээр deploy хийх, CI/CD танилцах.",
        code: "git add .\ngit commit -m \"Day 2 build\"\ngit push origin main\n# Vercel dashboard-аас deploy хянах",
        checkpoints: ["GitHub repo үүсгэсэн", "Push хийсэн", "Vercel deploy амжилттай"],
      },
      {
        title: "Design.md",
        desc: "Design.md file-аа бэлдэж, styles.refero.design-аас reference авах.",
        code: "https://styles.refero.design/",
        checkpoints: ["Design.md үүсгэсэн", "Color / typography тодорхойлсон", "Reference холбоос хадгалсан"],
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
    lessons: [
      {
        title: "Intro & outcome",
        desc: "5-Day 20x Marketer roadmap, instructors MJ · Tuvshintugs + Erica, what you’ll build each day.",
        code: "5-DAY 20x MARKETER · ROADMAP\nDAY 01  Intro · Basics\nDAY 02  PRD + UX/UI\nDAY 03  Front-end\nDAY 04  Showoff\nDAY 05  Graduation",
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
        desc: "Download and install OpenCode, Paper, and Pencil.",
        code: "OpenCode → https://opencode.ai\nPaper    → https://paper.design\nPencil   → https://www.pencil.dev",
        checkpoints: ["Installed OpenCode", "Installed Paper", "Installed Pencil"],
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
    lessons: [
      {
        title: "Write PRD/BRD",
        desc: "Define product requirements, use cases, sitemap, and navigation ideas in a BRD file. Example BRD files:",
        code: "https://stormy-ginger-kwdr.here.now/\nhttps://eager-ether-dztm.here.now/",
        checkpoints: ["Defined use cases", "Drafted sitemap/navigation", "Saved BRD link"],
      },
      {
        title: "UI/UX + Pencil & Paper · MCP",
        desc: "Design system, components, use Pencil & Paper to create homepage directions and pick a visual direction. Reference:",
        code: "https://styles.refero.design/\nPaper  → https://paper.design\nPencil → https://www.pencil.dev",
        checkpoints: ["Did UX/UI research", "Chose a visual direction", "Started homepage directions in Pencil"],
      },
      {
        title: "Front-end development",
        desc: "Build the front-end based on the chosen design, then polish and iterate.",
        code: "# Run the Next.js project\npnpm install\npnpm dev",
        checkpoints: ["Ran Next.js project", "Built hero + section components", "Polished and iterated"],
      },
      {
        title: "GitHub deploy",
        desc: "Push your site to GitHub and deploy to Vercel, learn CI/CD basics.",
        code: "git add .\ngit commit -m \"Day 2 build\"\ngit push origin main\n# Monitor deploy from Vercel dashboard",
        checkpoints: ["Created GitHub repo", "Pushed code", "Successful Vercel deploy"],
      },
      {
        title: "Design.md",
        desc: "Prepare your Design.md file and pull references from styles.refero.design.",
        code: "https://styles.refero.design/",
        checkpoints: ["Created Design.md", "Defined colors/typography", "Saved reference link"],
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
