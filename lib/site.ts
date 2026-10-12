export const siteConfig = {
  name: "LetssAI",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.letssai.com",
  title: "LetssAI | Practical AI Solutions for Growing Businesses",
  description:
    "LetssAI builds practical AI assistants for customer support, calling, CRM development, sales follow-up, workflows, and system integrations.",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  contactCta: "Talk to LetssAI",
  brand: {
    color: "#016630",
  },
  assets: {
    logoPrimary: "/media/letssai_logo.png",
    logoWhite: "/media/letssai_logo_footer.png",
    icon: "/media/letssai_icon.png",
    buttonIcon: "/media/letssai-button-icon-white.png",
    ogImage: "/media/letssai_logo.png",
  },
  deliveryLocations: [
    { label: "India", x: 69, y: 58 },
    { label: "Global Remote Delivery", x: 49, y: 39 },
    { label: "Client Teams", x: 22, y: 44 },
    { label: "Partner Locations", x: 84, y: 40 },
  ],
}

export type FAQ = { question: string; answer: string }
export type Service = {
  slug: string
  title: string
  href: string
  description: string
  seoTitle: string
  metaDescription: string
  icon: string
  tools: string[]
  problems: string[]
  does: string[]
  workflow: string[]
  benefits: string[]
  industries: string[]
  faqs: FAQ[]
}
export type Industry = {
  slug: string
  title: string
  href: string
  useCase: string
  seoTitle: string
  metaDescription: string
  icon: string
  problems: string[]
  services: string[]
  workflows: string[]
  benefits: string[]
  faqs: FAQ[]
  gallery?: string[]
}

export const services: Service[] = [
  {
    slug: "ai-customer-support",
    title: "AI Customer Support",
    href: "/services/ai-customer-support",
    description:
      "Automate website, WhatsApp, and email support with human handoff.",
    seoTitle: "AI Customer Support for Website, WhatsApp & Email | LetssAI",
    metaDescription:
      "Use LetssAI to answer repeated customer questions across website chat, WhatsApp, and email with safe human handoff.",
    icon: "ChatCircleText",
    tools: [
      "Website Chatbot Widget",
      "WhatsApp Business API",
      "Inbound Email Routing",
      "Zendesk & Freshdesk",
      "Verified Knowledge Base (RAG)",
      "Human Hand-off Console",
    ],
    problems: [
      "Support specialists spend excessive time answering the same tier-1 inquiries",
      "Off-hours response delays lead to customer frustration and lost opportunities",
      "Disparate communications across email, WhatsApp, and web fragment customer history",
      "Automated chat solutions without guardrails risk hallucinating policy details",
    ],
    does: [
      "Answers common questions using verified business knowledge and strict guardrails",
      "Categorizes incoming support requests and extracts intent for rapid triage",
      "Captures structured customer details such as order numbers and account identifiers",
      "Initiates immediate human escalation whenever complex or sensitive issues arise",
    ],
    workflow: [
      "Customer initiates an inquiry via website chat, WhatsApp Business, or support email.",
      "Retrieval engine matches approved documentation to generate a grounded, accurate response.",
      "If the issue requires manual intervention, full context is routed to an on-duty team member.",
      "Resolution logs and categorized conversation metadata sync to your ticketing platform.",
    ],
    benefits: [
      "Rapid first-response time across digital communication touchpoints",
      "Substantial reduction in routine ticket backlog, empowering agents to focus on complex cases",
      "Consistent support messaging grounded in approved business rules",
      "Seamless warm handoff to live operators with complete context preserved",
    ],
    industries: [
      "E-commerce",
      "Healthcare & Clinics",
      "Education & Coaching",
      "Real Estate",
    ],
    faqs: [
      {
        question: "Can AI answer WhatsApp and website questions?",
        answer:
          "Yes. LetssAI can support website chat, WhatsApp, and email when those channels are connected and approved answers are available.",
      },
      {
        question: "Will it replace my support team?",
        answer:
          "No. It helps reduce repeated questions and prepares better handoffs so your team can focus on sensitive or complex work.",
      },
    ],
  },
  {
    slug: "ai-calling-appointment-booking",
    title: "AI Calling & Appointment Booking",
    href: "/services/ai-calling-appointment-booking",
    description:
      "Automate outbound calls, appointment booking, and feedback collection.",
    seoTitle: "AI Calling and Appointment Booking Assistant | LetssAI",
    metaDescription:
      "Automate appointment requests, reminders, feedback collection, call summaries, and calendar updates with LetssAI.",
    icon: "PhoneCall",
    tools: [
      "Twilio & SIP Telephony",
      "Google Calendar & Outlook",
      "WhatsApp Cloud Platform",
      "HubSpot & Salesforce",
      "Real-time Transcription",
      "Operator Escalation Desk",
    ],
    problems: [
      "Peak-hour phone volume ties up receptionists and leaves callers on hold",
      "Appointment no-show rates rise when confirmation calls and reminders are performed manually",
      "Customer feedback collection after appointments is inconsistent or forgotten",
      "Verbal conversation nuances and scheduling preferences are rarely logged into CRM records",
    ],
    does: [
      "Conducts low-latency, natural inbound and outbound telephone calls with sub-second voice synthesis",
      "Queries real-time provider calendars to present open slots and confirm booking details",
      "Dispatches instant WhatsApp and SMS confirmation notifications with one-click reschedule options",
      "Transcribes call audio into structured summaries, sentiment tags, and next-step actions",
    ],
    workflow: [
      "Caller dials an inbound line or an automated trigger initiates an outbound confirmation call.",
      "Conversational voice agent greets the caller and verifies scheduling availability in real time.",
      "Appointment is reserved on the calendar and multi-channel confirmations are sent immediately.",
      "Call transcript, sentiment, and structured parameters are synced into your CRM contact record.",
    ],
    benefits: [
      "Reliable voice call handling without hold times or unanswered inquiries",
      "Measurable decline in missed appointments through automated reminder sequences",
      "Hours of manual front-desk telephone coordination returned to high-touch client service",
      "Structured call summaries and next steps automatically appended to customer records",
    ],
    industries: [
      "Healthcare & Clinics",
      "Real Estate",
      "Education & Coaching",
      "Finance & Accounting",
    ],
    faqs: [
      {
        question: "Can sensitive calls be reviewed by a person?",
        answer:
          "Yes. Sensitive or unclear conversations should be routed for human review.",
      },
    ],
  },
  {
    slug: "ai-sales-lead-follow-up",
    title: "AI Sales & Lead Follow-up",
    href: "/services/ai-sales-lead-follow-up",
    description:
      "Qualify leads, follow up automatically, and update CRM records.",
    seoTitle:
      "AI Sales Follow-up Assistant for Lead Qualification & CRM Updates | LetssAI",
    metaDescription:
      "Improve lead response time with AI follow-up, qualification, reminders, appointment booking, and CRM updates.",
    icon: "TrendUp",
    tools: [
      "Web Form Webhooks",
      "WhatsApp Business API",
      "Email Automation Sequences",
      "HubSpot, Pipedrive & Zoho",
      "Calendly & Google Meet",
      "Lead Scoring & Triage",
    ],
    problems: [
      "Inbound prospects that wait over five minutes for initial contact experience steep drop-off",
      "Sales representatives lose high-value selling hours chasing unqualified or unresponsive leads",
      "Incomplete prospect data forces reps to conduct basic discovery during live meetings",
      "Dormant CRM pipeline contacts remain untouched without consistent re-engagement sequences",
    ],
    does: [
      "Triggers rapid personalized outreach within seconds of web form or chat submission",
      "Asks structured qualifying questions to evaluate budget, urgency, and project scope",
      "Schedules discovery consultations directly onto sales representatives' calendars",
      "Updates CRM deal stages, qualification fields, and automated task reminders",
    ],
    workflow: [
      "Inbound prospect submits an inquiry form or initiates conversation on WhatsApp/chat.",
      "AI outreach initiates two-way dialogue to gather preliminary requirements and qualification details.",
      "Qualified prospects are guided to choose an available consultation time on sales calendars.",
      "Comprehensive lead brief, qualification score, and meeting confirmation sync to the CRM.",
    ],
    benefits: [
      "Sub-minute speed-to-lead radically improves conversion rates from existing marketing spend",
      "Account executives spend their time in conversations with pre-screened, motivated prospects",
      "Automated cadence reactivates stalled leads without requiring manual outreach",
      "Consistently organized CRM records with complete qualification history and next steps",
    ],
    industries: [
      "Real Estate",
      "Education & Coaching",
      "Finance & Accounting",
      "E-commerce",
    ],
    faqs: [
      {
        question: "Can LetssAI follow up with old leads?",
        answer:
          "Yes. It can help re-engage older leads with approved messaging and route interested prospects back to your sales team.",
      },
      {
        question: "Can it update my CRM?",
        answer:
          "Yes, when your CRM supports integration, LetssAI can update fields, notes, and reminders.",
      },
    ],
  },
  {
    slug: "ai-crm-development",
    title: "AI CRM Development",
    href: "/services/ai-crm-development",
    description:
      "Build an AI-ready CRM around your sales, service, and follow-up workflows.",
    seoTitle: "AI CRM Development for Sales & Customer Operations | LetssAI",
    metaDescription:
      "Design and develop an AI-ready CRM that unifies leads, customer conversations, follow-ups, reporting, and team workflows.",
    icon: "Database",
    tools: [
      "Custom CRM Schemas",
      "PostgreSQL & Supabase",
      "HubSpot & Zoho Custom Modules",
      "Unified Customer Inbox",
      "Role-Based Access Control",
      "Operational Analytics",
    ],
    problems: [
      "Off-the-shelf CRM products impose rigid structures that fail to reflect your operational reality",
      "Customer interactions across calls, WhatsApp, email, and invoices live in disconnected silos",
      "Sales and account managers spend hours manually logging updates and moving deal stages",
      "Executive reporting is obscured by incomplete records and delayed data entry",
    ],
    does: [
      "Architects bespoke data schemas and stage automations built around your true sales cycle",
      "Unifies multi-channel interactions, call notes, and deal documentation into a 360-degree timeline",
      "Embeds automated AI summarization, smart status progression, and automated task prompts",
      "Enforces role-based permissions, data hygiene guardrails, and audit compliance logging",
    ],
    workflow: [
      "Operational discovery maps stages, data fields, team roles, and external software dependencies.",
      "Custom data models, API endpoints, and authentication scopes are designed and validated.",
      "Intelligent workflow automation and auto-logging capabilities are tested against edge cases.",
      "Staging validation precedes zero-downtime historical data migration and team rollout.",
    ],
    benefits: [
      "A centralized single source of truth configured specifically for your team's commercial workflow",
      "Elimination of hours of manual administrative recordkeeping each week",
      "Dependable pipeline forecasting grounded in verified, real-time activity metrics",
      "Secure architecture with deterministic access controls and complete audit trails",
    ],
    industries: [
      "Real Estate",
      "Healthcare & Clinics",
      "Education & Coaching",
      "E-commerce",
    ],
    faqs: [
      {
        question: "Can LetssAI build a CRM around our existing process?",
        answer:
          "Yes. We begin with your current sales, service, and reporting workflow, then design the CRM, permissions, integrations, and automations around the approved process.",
      },
      {
        question: "Can the CRM connect with our existing tools?",
        answer:
          "Yes, where suitable integrations are available. Common connections include forms, email, WhatsApp, calendars, calling workflows, spreadsheets, and dashboards.",
      },
      {
        question: "Can AI update and summarize CRM records?",
        answer:
          "Yes. AI can prepare summaries, classify enquiries, suggest next steps, and update approved fields while important decisions remain with your team.",
      },
    ],
  },
  {
    slug: "ai-system-integration",
    title: "AI System Integration",
    href: "/services/ai-system-integration",
    description: "Connect AI with CRM, email, dashboards, databases, and APIs.",
    seoTitle:
      "AI System Integration for CRM, Email, Dashboards & Business Tools | LetssAI",
    metaDescription:
      "Make AI work with the tools you already use, including CRM, email, databases, Google Sheets, WhatsApp, calendars, and dashboards.",
    icon: "PlugsConnected",
    tools: [
      "REST & GraphQL APIs",
      "Event-Driven Webhooks",
      "HubSpot, Salesforce & ERPs",
      "PostgreSQL, MySQL & BigQuery",
      "Slack & Microsoft Teams",
      "Custom Middleware Connectors",
    ],
    problems: [
      "AI tools operate in isolated browser tabs without real-time read/write access to internal systems",
      "Team members manually copy-paste customer information between email, CRM, and billing tools",
      "Custom software workflows break silently without centralized error telemetry or queue monitors",
      "Legacy databases and custom business software lack modern endpoints for autonomous AI agents",
    ],
    does: [
      "Constructs secure, bidirectional connectors bridging AI engines with internal databases and SaaS apps",
      "Architects deterministic workflow pipelines with schema validation, idempotency, and rate limits",
      "Automates event-driven triggers across messaging platforms, accounting tools, and customer databases",
      "Implements comprehensive telemetry, dead-letter recovery queues, and human approval checkpoints",
    ],
    workflow: [
      "Technical audit reviews API capabilities, security credentials, and data transfer requirements.",
      "Custom integration middleware is developed with payload validation and error-handling mechanisms.",
      "Event listeners trigger automated actions upon operational milestones (e.g. lead captured, invoice paid).",
      "End-to-end integration tests verify reliability, idempotency, and edge-case handling before launch.",
    ],
    benefits: [
      "Continuous data flow eliminates repetitive manual entry across disparate software platforms",
      "Deterministic, audit-logged autonomous workflows that adhere to strict security policies",
      "Real-time data synchronization between customer-facing channels and internal back-office systems",
      "Modular connector framework that easily scales as new software is introduced into your stack",
    ],
    industries: [
      "Real Estate",
      "Healthcare & Clinics",
      "Finance & Accounting",
      "E-commerce",
    ],
    faqs: [
      {
        question: "Do I need to change my current software?",
        answer:
          "Usually no. LetssAI is designed to work around the tools your team already uses where integration is available.",
      },
    ],
  },
]

export const industries: Industry[] = [
  {
    slug: "real-estate",
    title: "Real Estate",
    href: "/industries/real-estate",
    useCase:
      "Follow up property inquiries, book site visits, and update CRM records.",
    seoTitle: "AI Solutions for Real Estate Lead Follow-up | LetssAI",
    metaDescription:
      "AI support for real estate lead follow-up, property inquiries, site visit reminders, CRM updates, calls, and WhatsApp follow-up.",
    icon: "HouseLine",
    problems: [
      "Property inquiries need fast follow-up",
      "Site visits require reminders",
      "CRM records fall behind",
      "WhatsApp and calling follow-up takes time",
    ],
    services: [
      "AI Sales & Lead Follow-up",
      "AI Customer Support",
      "AI Calling & Appointment Booking",
    ],
    workflows: [
      "New property inquiry → WhatsApp follow-up → qualifying questions → site visit booking → CRM update",
      "Missed lead list → approved follow-up → interested leads routed to sales",
    ],
    benefits: [
      "Faster lead response",
      "Better site visit coordination",
      "Cleaner sales records",
    ],
    faqs: [
      {
        question: "Can LetssAI help real estate teams follow up on leads?",
        answer:
          "Yes. It can qualify inquiries, send approved follow-ups, book site visits, and update CRM records.",
      },
    ],
  },
  {
    slug: "healthcare-clinics",
    title: "Healthcare & Clinics",
    href: "/industries/healthcare-clinics",
    useCase:
      "Reduce front desk workload with appointment support, FAQs, reminders, and feedback.",
    seoTitle: "AI Solutions for Healthcare Clinics | LetssAI",
    metaDescription:
      "AI workflow support for clinics: appointment booking, patient FAQs, reminders, feedback collection, and front desk workload reduction.",
    icon: "FirstAidKit",
    problems: [
      "Appointment calls overload the front desk",
      "Patients ask repeated admin questions",
      "Reminders and feedback are manual",
      "Sensitive conversations need human review",
    ],
    services: [
      "AI Calling & Appointment Booking",
      "AI Customer Support",
      "AI CRM Development",
    ],
    workflows: [
      "Patient request → appointment options → confirmation → reminder → feedback collection",
      "FAQ question → approved admin answer → human handoff if medical",
    ],
    benefits: [
      "Less front desk pressure",
      "Easier booking",
      "Safer handoff for sensitive topics",
    ],
    faqs: [
      {
        question: "Does LetssAI provide medical diagnosis?",
        answer:
          "No. LetssAI supports administrative workflows and patient FAQs, not medical diagnosis or clinical advice.",
      },
    ],
  },
  {
    slug: "legal-firms",
    title: "Legal Firms",
    href: "/industries/legal-firms",
    useCase:
      "Support client intake, scheduling, document organization, and internal document search.",
    seoTitle: "AI Workflow Support for Legal Firms | LetssAI",
    metaDescription:
      "Administrative AI support for legal firms: client intake, appointment scheduling, document organization, and knowledge search without legal advice.",
    icon: "Scales",
    problems: [
      "Client intake details are scattered",
      "Document search takes time",
      "Appointment scheduling is repetitive",
      "FAQs need careful handoff",
    ],
    services: ["AI CRM Development", "AI Customer Support"],
    workflows: [
      "New inquiry → intake questions → appointment scheduling → admin summary",
      "Team question → approved document search → source-based answer",
    ],
    benefits: [
      "Better intake organization",
      "Faster document lookup",
      "Clear admin handoff",
    ],
    faqs: [
      {
        question: "Does LetssAI give legal advice?",
        answer:
          "No. It supports admin and knowledge workflows and should not provide legal advice.",
      },
    ],
  },
  {
    slug: "education-coaching",
    title: "Education & Coaching",
    href: "/industries/education-coaching",
    useCase:
      "Automate admission inquiries, student FAQs, payment reminders, and demo class booking.",
    seoTitle: "AI Solutions for Education and Coaching | LetssAI",
    metaDescription:
      "AI assistants for admission inquiry follow-up, student support, course FAQs, payment reminders, demo class booking, and WhatsApp automation.",
    icon: "GraduationCap",
    problems: [
      "Admission inquiries need quick replies",
      "Course FAQs repeat daily",
      "Payment reminders are manual",
      "Demo class booking needs coordination",
    ],
    services: [
      "AI Sales & Lead Follow-up",
      "AI Customer Support",
      "AI Calling & Appointment Booking",
    ],
    workflows: [
      "Inquiry → course FAQ answer → qualification → demo booking → reminder",
      "Student question → approved answer → staff handoff",
    ],
    benefits: [
      "Faster admission follow-up",
      "Less repeated admin work",
      "Better student communication",
    ],
    faqs: [
      {
        question: "Can LetssAI book demo classes?",
        answer:
          "Yes. It can collect details, check available slots when connected, and send reminders.",
      },
    ],
  },
  {
    slug: "retail-ecommerce",
    title: "E-commerce",
    href: "/industries/retail-ecommerce",
    useCase:
      "Answer order questions, product FAQs, returns, exchanges, and review requests.",
    seoTitle: "AI Customer Support for E-commerce | LetssAI",
    metaDescription:
      "AI support for e-commerce order questions, product FAQs, returns and exchange support, review collection, and inventory inquiries when connected.",
    icon: "ShoppingCart",
    problems: [
      "Order status questions repeat often",
      "Return and exchange steps need clarity",
      "Product FAQs slow the support team",
      "Review collection is inconsistent",
    ],
    services: ["AI Customer Support", "AI System Integration"],
    workflows: [
      "Customer question → approved order or product response → ticket if needed",
      "Delivery completed → review request → dashboard update",
    ],
    benefits: [
      "Faster customer replies",
      "Reduced repeated questions",
      "More organized support",
    ],
    faqs: [
      {
        question: "Can LetssAI answer inventory questions?",
        answer:
          "Yes, if it is connected to a reliable inventory or product system.",
      },
    ],
  },
  {
    slug: "finance-accounting",
    title: "Finance & Accounting",
    href: "/industries/finance-accounting",
    useCase:
      "Support invoice handling, document collection, client reminders, and report preparation.",
    seoTitle: "AI Workflow Support for Finance and Accounting | LetssAI",
    metaDescription:
      "AI workflow support for finance and accounting teams: invoice handling, document collection, client reminders, internal knowledge, and reports.",
    icon: "Receipt",
    problems: [
      "Document collection needs repeated reminders",
      "Invoice details need organization",
      "Internal process questions repeat",
      "Report preparation includes manual steps",
    ],
    services: ["AI CRM Development", "AI System Integration"],
    workflows: [
      "Client reminder → document collection → checklist update → team alert",
      "Invoice email → detail extraction → spreadsheet or dashboard update",
    ],
    benefits: [
      "Less manual follow-up",
      "Better document organization",
      "Faster admin reporting",
    ],
    faqs: [
      {
        question: "Does LetssAI provide financial advice?",
        answer:
          "No. It supports workflow and document tasks, not financial advice or regulated recommendations.",
      },
    ],
  },
]

export const homeFaqs: FAQ[] = [
  {
    question: "What does LetssAI help businesses automate?",
    answer:
      "LetssAI helps with customer replies, lead follow-up, document questions, appointment booking, reminders, reports, and routine workflows across existing business tools.",
  },
  {
    question: "Is LetssAI built for small and growing businesses?",
    answer:
      "Yes. The website and services are designed for teams that want practical AI inside tools they already use.",
  },
  {
    question: "Can LetssAI include human handoff?",
    answer:
      "Yes. Human handoff is part of the design for sensitive, complex, or high-value conversations.",
  },
]
