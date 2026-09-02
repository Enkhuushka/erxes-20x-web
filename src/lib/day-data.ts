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
        desc: "Бүтээгдэхүүний шаардлага, use case, sitemap, navigation санаа BRD file дээр бичих. Жишээ BRD file:",
        code: "BRD жишээ 1 → https://stormy-ginger-kwdr.here.now/\nBRD жишээ 2 → https://eager-ether-dztm.here.now/",
        checkpoints: ["Use case тодорхойлсон", "Sitemap / navigation бичсэн", "BRD холбоосыг хадгалсан"],
      },
      {
        title: "UI/UX + Pencil · MCP",
        desc: "Дизайн систем, components, Pencil ашиглан homepage direction, visual direction сонгох. Reference:",
        code: "https://styles.refero.design/",
        checkpoints: ["UX/UI research хийсэн", "Visual direction сонгосон", "Pencil дээр homepage direction эхлүүлсэн"],
      },
      {
        title: "Site setup config",
        desc: "erxes Skills ашиглан шинэ сайт үүсгэхэд бөглөх үндсэн тохиргоонууд.",
        note: [
          {
            title: "1. Site Name",
            text: "Вэбсайтын өвөрмөц идэвхжүүлэгч. Зайг зураасаар (-) сольсон жижиг үсэгтэй байх ёстой.",
            bullets: ["my-coffee-shop", "grand-hotel", "tech-store"],
          },
          {
            title: "2. Template Type",
            text: "Бүтээх вэбсайтын төрлийг сонгох.",
            bullets: [
              "business - Company or service site (about, services, contact)",
              "ecommerce - Online store (products, cart, checkout)",
              "tour - Travel and tour operator (packages, itineraries, booking)",
              "hotel - Accommodation (rooms, amenities, reservation)",
            ],
          },
          {
            title: "3. Languages",
            text: "Вэбсайт дэмжих бүх хэлийг сонгох. Эхний хэл default болно.",
            bullets: ["mn - Mongolian", "en - English", "zh - Chinese", "ru - Russian", "ko - Korean", "ja - Japanese"],
          },
          {
            title: "4. Tone",
            text: "Вэбсайтын агуулгын зан чанар, хэв маяг.",
            bullets: [
              "formal - Professional, corporate tone",
              "casual - Friendly, conversational tone",
              "modern - Contemporary, trendy tone",
              "traditional - Classic, established tone",
              "playful - Fun, energetic tone",
            ],
          },
          {
            title: "5. Sections",
            text: "Вэбсайтад оруулах хуудас, хэсгүүдийг сонгох.",
            bullets: [
              "about - About Us page",
              "services - Services page",
              "blog - Blog/News section",
              "contact - Contact page",
              "gallery - Image gallery",
              "pricing - Pricing plans",
              "team - Team members",
              "testimonials - Customer testimonials",
              "faq - Frequently asked questions",
              "menu - Menu/Products list",
              "portfolio - Portfolio/Work showcase",
            ],
          },
          {
            title: "6. Design Strategy",
            text: "Вэбсайтын дизайныг хэрхэн өрнүүлэх вэ?",
            bullets: [
              "from-scratch - Build a completely new design",
              "copy-site - Replicate an existing website's look",
              "improve-site - Take an existing site and make it better",
              "brand-first - Start from brand identity (colors, fonts, logo)",
              "beat-competitors - Analyze competitors and outdesign them",
            ],
          },
          {
            title: "7. UI Source",
            text: "Дизайны урамшуулал хаанаас авах вэ? (from-scratch эсвэл brand-first үед асуудаг)",
            bullets: [
              "words - Describe what you want in text",
              "pencil - Use an existing .pen file",
              "screenshot - Upload screenshots as reference",
              "website - Use an existing website URL",
            ],
          },
          {
            title: "8. Color Hint",
            text: "Вэбсайтын өнгөний схемийн гол өнгө. (UI source нь words үед асуудаг)",
            bullets: [
              "brown - Warm, earthy tones",
              "blue - Professional, trustworthy",
              "forest-green - Natural, organic",
              "navy - Corporate, sophisticated",
              "warm-orange - Energetic, inviting",
            ],
          },
          {
            title: "9. Deployment Target",
            text: "Вэбсайтаа хаана deploy хийх вэ?",
            bullets: [
              "vercel - Push to GitHub and deploy to Vercel (live URL)",
              "github - Push to GitHub only (no Vercel deploy)",
            ],
          },
          {
            title: "10. erxes Configuration",
            text: "Вэбсайтаа erxes CMS-тэй холбох.",
            bullets: [
              "erxes SaaS URL - Your erxes dashboard URL",
              "Client Portal Token - Secret key for website communication",
              "Client Portal ID - Unique identifier for your portal",
            ],
          },
        ],
        checkpoints: ["Тохиргооны талбаруудыг танилцсан", "site.config.json-ийн утгыг ойлгосон"],
      },
      {
        title: "Design.md",
        desc: "Design.md file-аа бэлдэж, styles.refero.design-аас reference авах.",
        code: "https://styles.refero.design/",
        checkpoints: ["Design.md үүсгэсэн", "Color / typography тодорхойлсон", "Reference холбоос хадгалсан"],
      },
      {
        title: "Бүртгэл",
        desc: "Сургалтад бүртгүүлэхдээ доорх QR-ийг уншуулна уу.",
        qrUrl: "https://docs.google.com/forms/d/1JU-kz0Sfx6k_6cXRkcnUZHfuauGxicaofejRm0sYQtk/viewform",
        checkpoints: ["Бүртгэлийн QR-ийг уншуулсан", "Бүртгэлээ баталгаажуулсан"],
      },
    ],
  },
  3: {
    id: 3,
    title: "Front-end — Build & Deploy",
    outcome: "Сонгосон дизайны дагуу front-end бүтээж, Vercel дээр deploy хийх.",
    lessons: [
      {
        title: "Front-end development",
        desc: "Сонгосон дизайны дагуу front-end бүтээх, polish, iterate хийх.",
        code: "# Next.js project ажиллуулах\ncd output/<site-name>\ncorepack pnpm install\ncorepack pnpm dev",
        checkpoints: ["Next.js project ажиллуулсан", "Hero + section component бичсэн", "Polish / iterate хийсэн"],
      },
      {
        title: "GitHub push",
        desc: "Бүтээсэн сайтаа GitHub repo руу push хийх.",
        code: "git add .\ngit commit -m \"Day 3 build\"\ngit push origin main",
        checkpoints: ["GitHub repo үүсгэсэн", "Push хийсэн", "Branch хяналт шалгасан"],
      },
      {
        title: "Deploy to Vercel",
        desc: "erxes Skills deploy script ашиглан Vercel дээр deploy хийх. Command-ийг core/web хавтаснаас ажиллуулна.",
        code: "# Жишээ: site нэр нь erxes-20x-web\ncd content-plugin/headless/core/web\ncorepack pnpm run deploy \"erxes-20x-web\"",
        checkpoints: ["Deploy script ажиллуулсан", "Vercel deploy амжилттай", "Live URL авсан"],
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
        desc: "Define product requirements, use cases, sitemap, and navigation ideas in a BRD file. Example BRD:",
        code: "Example BRD 1 → https://stormy-ginger-kwdr.here.now/\nExample BRD 2 → https://eager-ether-dztm.here.now/",
        checkpoints: ["Defined use cases", "Drafted sitemap/navigation", "Saved BRD link"],
      },
      {
        title: "UI/UX + Pencil · MCP",
        desc: "Design system, components, use Pencil to create homepage directions and pick a visual direction. Reference:",
        code: "https://styles.refero.design/",
        checkpoints: ["Did UX/UI research", "Chose a visual direction", "Started homepage directions in Pencil"],
      },
      {
        title: "Site setup config",
        desc: "Core configuration fields filled when creating a new site with erxes Skills.",
        note: [
          {
            title: "1. Site Name",
            text: "The unique identifier for your website. Must be lowercase with dashes instead of spaces.",
            bullets: ["my-coffee-shop", "grand-hotel", "tech-store"],
          },
          {
            title: "2. Template Type",
            text: "Choose the type of website you want to build.",
            bullets: [
              "business - Company or service site (about, services, contact)",
              "ecommerce - Online store (products, cart, checkout)",
              "tour - Travel and tour operator (packages, itineraries, booking)",
              "hotel - Accommodation (rooms, amenities, reservation)",
            ],
          },
          {
            title: "3. Languages",
            text: "Select all languages your website should support. The first language becomes the default.",
            bullets: ["mn - Mongolian", "en - English", "zh - Chinese", "ru - Russian", "ko - Korean", "ja - Japanese"],
          },
          {
            title: "4. Tone",
            text: "The personality and style of your website's content.",
            bullets: [
              "formal - Professional, corporate tone",
              "casual - Friendly, conversational tone",
              "modern - Contemporary, trendy tone",
              "traditional - Classic, established tone",
              "playful - Fun, energetic tone",
            ],
          },
          {
            title: "5. Sections",
            text: "Choose which pages and sections your website should include.",
            bullets: [
              "about - About Us page",
              "services - Services page",
              "blog - Blog/News section",
              "contact - Contact page",
              "gallery - Image gallery",
              "pricing - Pricing plans",
              "team - Team members",
              "testimonials - Customer testimonials",
              "faq - Frequently asked questions",
              "menu - Menu/Products list",
              "portfolio - Portfolio/Work showcase",
            ],
          },
          {
            title: "6. Design Strategy",
            text: "How do you want to approach the design of your website?",
            bullets: [
              "from-scratch - Build a completely new design",
              "copy-site - Replicate an existing website's look",
              "improve-site - Take an existing site and make it better",
              "brand-first - Start from brand identity (colors, fonts, logo)",
              "beat-competitors - Analyze competitors and outdesign them",
            ],
          },
          {
            title: "7. UI Source",
            text: "Where will the design inspiration come from? (Asked only for from-scratch or brand-first)",
            bullets: [
              "words - Describe what you want in text",
              "pencil - Use an existing .pen file",
              "screenshot - Upload screenshots as reference",
              "website - Use an existing website URL",
            ],
          },
          {
            title: "8. Color Hint",
            text: "The dominant color for your website theme. (Asked only when UI source is 'words')",
            bullets: [
              "brown - Warm, earthy tones",
              "blue - Professional, trustworthy",
              "forest-green - Natural, organic",
              "navy - Corporate, sophisticated",
              "warm-orange - Energetic, inviting",
            ],
          },
          {
            title: "9. Deployment Target",
            text: "Where do you want to deploy your website?",
            bullets: [
              "vercel - Push to GitHub and deploy to Vercel (live URL)",
              "github - Push to GitHub only (no Vercel deploy)",
            ],
          },
          {
            title: "10. erxes Configuration",
            text: "Connect your website to the erxes CMS for content management.",
            bullets: [
              "erxes SaaS URL - Your erxes dashboard URL",
              "Client Portal Token - Secret key for website communication",
              "Client Portal ID - Unique identifier for your portal",
            ],
          },
        ],
        checkpoints: ["Reviewed all setup fields", "Understood site.config.json values"],
      },
      {
        title: "Design.md",
        desc: "Prepare your Design.md file and pull references from styles.refero.design.",
        code: "https://styles.refero.design/",
        checkpoints: ["Created Design.md", "Defined colors/typography", "Saved reference link"],
      },
      {
        title: "Registration",
        desc: "Scan the QR code below to register for the course.",
        qrUrl: "https://docs.google.com/forms/d/1JU-kz0Sfx6k_6cXRkcnUZHfuauGxicaofejRm0sYQtk/viewform",
        checkpoints: ["Scanned the registration QR", "Confirmed registration"],
      },
    ],
  },
  3: {
    id: 3,
    title: "Front-end — Build & Deploy",
    outcome: "Build the front-end based on your approved design and deploy to Vercel.",
    lessons: [
      {
        title: "Front-end development",
        desc: "Build the front-end based on the chosen design, then polish and iterate.",
        code: "# Run the Next.js project\ncd output/<site-name>\ncorepack pnpm install\ncorepack pnpm dev",
        checkpoints: ["Ran Next.js project", "Built hero + section components", "Polished and iterated"],
      },
      {
        title: "GitHub push",
        desc: "Push your built site to the GitHub repository.",
        code: "git add .\ngit commit -m \"Day 3 build\"\ngit push origin main",
        checkpoints: ["Created GitHub repo", "Pushed code", "Checked branch status"],
      },
      {
        title: "Deploy to Vercel",
        desc: "Run the erxes Skills deploy script from the core/web directory to deploy to Vercel.",
        code: "# Example: site name is erxes-20x-web\ncd content-plugin/headless/core/web\ncorepack pnpm run deploy \"erxes-20x-web\"",
        checkpoints: ["Ran deploy script", "Vercel deploy succeeded", "Got live URL"],
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
