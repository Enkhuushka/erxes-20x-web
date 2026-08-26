import { DayData } from "@/components/sections/DayPage";

export const dayDataMn: Record<number, DayData> = {
  1: {
    id: 1,
    title: "erxes орчин ба CRM үндэс",
    outcome: "erxes ажиллуулах, хэрэглэгчийн бүртгэл, lead удирдлагыг эзэмшсэн байх.",
    lessons: [
      {
        title: "erxes workspace танилцуулга",
        desc: "Сургалтын зорилго, erxes платформын үндсэн бүтэц, dashboard-ийн тайлбар.",
        code: "# erxes workspace-ээ нээнэ үү\nerxes login\nerxes project init erxes-20x",
        checkpoints: ["Login хийж чадсан", "Dashboard-ийн үндсэн цэс тодорхой", "Workspace бүтээсэн"],
      },
      {
        title: "Хэрэглэгчийн бүртгэл",
        desc: "Contact, company, customer гэсэн үндсэн объектуудын ялгаа, бүртгэл, импорт.",
        code: "# Customer импортлох жишээ\ncurl -X POST https://api.erxes.io/customer-import \\\n  -H \"Content-Type: application/json\" \\\n  -d @customers.json",
        checkpoints: ["Хэрэглэгч үүсгэсэн", "Company холбосон", "Импорт ажиллуулсан"],
      },
      {
        title: "Lead удирдлага",
        desc: "Lead оруулах, stage-үүдээр хөдөлгөх, assign хийх, activity бүртгэх.",
        code: "erxes lead create --name \"Boldoo\" --company \"Acme\" --stage \"new\"",
        checkpoints: ["Lead үүсгэсэн", "Stage шилжүүлсэн", "Activity нэмсэн"],
      },
    ],
  },
  2: {
    id: 2,
    title: "Борлуулалтын хөтөлбөр",
    outcome: "Pipeline stage-үүд, deal management, automation rule бичих чадвартай болно.",
    lessons: [
      {
        title: "Pipeline бүтээх",
        desc: "Board, pipeline, stage-ийн хоорондын хамаарлыг ойлгож, өөрсдийн борлуулалтын pipeline бүтээнэ.",
        code: "erxes pipeline create --name \"Sales 2026\" --stages prospecting,proposal,won",
        checkpoints: ["Board үүсгэсэн", "Pipeline үүсгэсэн", "Stage тохиргоо хийсэн"],
      },
      {
        title: "Deal удирдлага",
        desc: "Deal үүсгэх, үнийн дүн, хаагдах магадлал, forecast харах.",
        code: "erxes deal create --amount 5000000 --probability 60 --stage proposal",
        checkpoints: ["Deal үүсгэсэн", "Amount/probability оруулсан", "Forecast report харсан"],
      },
      {
        title: "Automation rule",
        desc: "Stage шилжих үед автоматаар task, email, notification үүсгэх.",
        code: "erxes automation create --trigger dealStageChange --action sendEmail",
        checkpoints: ["Trigger сонгосон", "Action тохируулсан", "Automation идэвхжүүлсэн"],
      },
    ],
  },
  3: {
    id: 3,
    title: "Маркетингийн кампанит ажил",
    outcome: "Сегмент, campaign, email automation бүтээх.",
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
    title: "Үйлчилгээний төв",
    outcome: "Ticket, knowledge base, chatbot холболтыг хийх.",
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
    title: "Тайлан ба өргөтгөл",
    outcome: "Dashboard, plugin суулгах, багийнхaa ажиллах процесст нэвтрүүлэх.",
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
    title: "erxes Workspace & CRM Foundations",
    outcome: "Run erxes, manage contacts and leads by the end of the day.",
    lessons: [
      {
        title: "erxes workspace overview",
        desc: "Course goals, platform structure, and dashboard walkthrough.",
        code: "# Open your erxes workspace\nerxes login\nerxes project init erxes-20x",
        checkpoints: ["Logged in", "Dashboard understood", "Workspace created"],
      },
      {
        title: "Contact records",
        desc: "Contacts, companies, and customers: differences, creation, import.",
        code: "# Example customer import\ncurl -X POST https://api.erxes.io/customer-import \\\n  -H \"Content-Type: application/json\" \\\n  -d @customers.json",
        checkpoints: ["Created a contact", "Linked a company", "Ran an import"],
      },
      {
        title: "Lead management",
        desc: "Create leads, move through stages, assign owners, log activities.",
        code: "erxes lead create --name \"Boldoo\" --company \"Acme\" --stage \"new\"",
        checkpoints: ["Created a lead", "Changed a stage", "Logged an activity"],
      },
    ],
  },
  2: {
    id: 2,
    title: "Sales Pipeline",
    outcome: "Build pipelines, manage deals, and write automation rules.",
    lessons: [
      {
        title: "Build a pipeline",
        desc: "Boards, pipelines, and stages; create your own sales pipeline.",
        code: "erxes pipeline create --name \"Sales 2026\" --stages prospecting,proposal,won",
        checkpoints: ["Created a board", "Created a pipeline", "Configured stages"],
      },
      {
        title: "Deal management",
        desc: "Create deals, amount, probability, and forecast views.",
        code: "erxes deal create --amount 5000000 --probability 60 --stage proposal",
        checkpoints: ["Created a deal", "Added amount/probability", "Viewed forecast"],
      },
      {
        title: "Automation rules",
        desc: "Auto-create tasks, emails, and notifications when stages change.",
        code: "erxes automation create --trigger dealStageChange --action sendEmail",
        checkpoints: ["Chose a trigger", "Set an action", "Activated automation"],
      },
    ],
  },
  4: {
    id: 4,
    title: "Service Center",
    outcome: "Run tickets, knowledge base, and chatbot integrations.",
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
  3: {
    id: 3,
    title: "Marketing Campaigns",
    outcome: "Build segments, campaigns, and email automation.",
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
  5: {
    id: 5,
    title: "Reporting & Extensions",
    outcome: "Create dashboards, install plugins, and roll out to your team.",
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
