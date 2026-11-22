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
  booking: {
    calendarEmbedUrl:
      process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL ||
      "https://calendar.google.com/calendar/appointments/schedules/AcZssZ284hxXq5ihqo10WnFRXFi241D9Wu5ZOzslR9VcCTd6RlVWH7hSSrP0bz1ykB-Gq_z5G4jNnj6m?gv=true",
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
        question:
          "What is the difference between an AI chatbot and an AI customer support agent?",
        answer:
          "A basic chatbot follows scripts and answers a fixed set of questions. An AI customer support agent understands open-ended requests, draws on your approved knowledge, collects the details your team needs, and can take defined actions or hand them over to a person. LetssAI builds the second kind, shaped around your support workflow and connected channels.",
      },
      {
        question:
          "Can AI handle customer support on WhatsApp, email and website chat from one place?",
        answer:
          "Yes. LetssAI's support suite brings WhatsApp, email, Instagram/Facebook, SMS and website chat into one unified inbox, so the AI and your team see the same conversations in one place. Channels are connected as part of the agreed scope.",
      },
      {
        question:
          "Can AI answer order status, refund and delivery questions automatically?",
        answer:
          "Yes, when the assistant is connected to the relevant order or customer data. Routine requests such as order updates, refund status and delivery enquiries can be resolved instantly, while exceptions go to an agent with the details already gathered.",
      },
      {
        question:
          "How does the AI decide when to pass a conversation to a human?",
        answer:
          "Escalation rules are set during implementation. Typical triggers include complex or technical issues, sensitive topics, high-value customers and signs of frustration. LetssAI workflows can route technical issues to specialists and flag frustrated customers for priority handling. When the assistant is unsure, it asks a clarifying question, uses an approved fallback or hands over.",
      },
      {
        question:
          "How can AI customer support reduce support costs without hurting service quality?",
        answer:
          "By absorbing repeated, predictable questions so your team spends its time on conversations that need judgment. Quality is protected through approved knowledge, scope limits and human handoff. Savings depend on your volumes, so the practical measures are the share of enquiries resolved without an agent, response time and customer satisfaction.",
      },
      {
        question: "Can I see how the AI assistant is performing?",
        answer:
          "Yes. Live agent analytics track conversation volume, open, unattended and unassigned chats, average response and resolution times, and customer satisfaction, with the AI shown alongside human agents so you can compare them.",
      },
      {
        question:
          "Can one setup support multiple brands or business lines?",
        answer:
          "Yes. Separate assistants can be configured with their own name, styling, greetings and approved knowledge for different brands or workflows, with clear boundaries between them.",
      },
      {
        question: "Will AI customer support replace my support team?",
        answer:
          "No. It handles repeat questions and prepares context so your people can focus on sensitive, complex or high-value conversations. Your team keeps control through approval steps, handoff rules and monitoring. It can reduce the number of support team members needed as most of the repeat tasks are handled by AI.",
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
        question:
          "How is an AI voice agent different from a traditional phone menu (IVR)?",
        answer:
          "A phone menu forces callers through numbered options. An AI voice agent holds a natural conversation: callers say what they need in their own words, the assistant asks clarifying questions, and then takes an agreed next step such as booking, qualifying or transferring to a person.",
      },
      {
        question:
          "Can the AI call back missed calls and follow up on new enquiries?",
        answer:
          "Yes, within the approved scope. Missed-call follow-up reconnects with callers and captures why they got in touch, and outbound workflows can follow up enquiries, confirm appointments and send reminders. Audience, consent and timing rules are agreed during implementation.",
      },
      {
        question: "Can AI calling help reduce missed appointments?",
        answer:
          "It can help. Confirmation and reminder calls give customers a simple way to confirm, reschedule or cancel, and changes are flagged for your team and reflected in connected calendars. Results depend on your process, so we suggest tracking confirmation rates and missed appointments before and after launch.",
      },
      {
        question:
          "Does the voice assistant work in more than one language?",
        answer:
          "LetssAI can support multilingual conversations and route enquiries by language, location, intent and team availability. The languages and voices for your use case are confirmed during the workflow review. Our intelligent voice assistants can also auto detect and switch languages mid conversation as needed.",
      },
      {
        question:
          "How does the assistant cope with accents, background noise and interruptions?",
        answer:
          "The workflow is designed to handle natural pauses, interruptions, overlapping speech, incomplete sentences and background noise, and it asks for clarification instead of guessing. If it still cannot be sure, it escalates to a person rather than inventing an answer.",
      },
      {
        question: "What happens after the call ends?",
        answer:
          "The outcome is recorded: a concise summary, the customer's next step, and updates to connected calendars or CRM fields where integrations are in place. Auditable call outcomes let your team review what was said and decided.",
      },
      {
        question:
          "Are AI phone calls legal, and how are consent and call rules handled?",
        answer:
          "Rules on automated, recorded and outbound calls differ by country and by industry. LetssAI builds consent-aware workflows and agrees audience, timing and escalation rules during implementation, but each business remains responsible for meeting the regulations in the regions it calls, so we recommend reviewing requirements as part of scoping.",
      },
      {
        question:
          "Which businesses get the most from AI calling and appointment booking?",
        answer:
          "Businesses that depend on phone enquiries and bookings, such as clinics, real estate, automotive and finance teams, hospitality and service businesses. The best fit is a repeated, well-defined conversation where a clear outcome and a safe handoff can be designed.",
      },
      {
        question:
          "Can I hear what an AI call sounds like before committing?",
        answer:
          "Yes. The LetssAI home page includes example AI-assisted phone conversations for automotive, finance, real estate, ecommerce and hospitality scenarios, and a discovery call can map a similar conversation to your business.",
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
        question: "What is speed-to-lead, and why does it matter?",
        answer:
          "Speed-to-lead is how quickly a new enquiry gets a real response after it comes in. Replying while interest is fresh generally improves the chance of a conversation and a booking, while slow replies let leads go cold. LetssAI's workflow triggers personalized outreach within seconds of a web form or chat submission.",
      },
      {
        question: "How does AI qualify leads?",
        answer:
          "It holds a two-way conversation and asks structured questions you approve, such as budget, urgency and project scope, then produces a qualification score and a short lead brief for your sales team. Qualified prospects can be guided straight to booking, and others are routed or nurtured as you define.",
      },
      {
        question: "Which channels can AI use to follow up with leads?",
        answer:
          "Web forms, website chat, WhatsApp through the WhatsApp Business API, and email sequences, plus phone calls through LetssAI's AI calling service. Channels are chosen around where your leads actually engage.",
      },
      {
        question:
          "Which CRMs does LetssAI work with for lead follow-up?",
        answer:
          "Workflows connect to HubSpot, GoHighLevel, Pipedrive, Zoho, and to any other CRMs where a suitable integration is available. The AI can update deal stages, qualification fields, notes and task reminders so records stay current without manual entry.",
      },
      {
        question:
          "Can AI book sales meetings directly onto our reps' calendars?",
        answer:
          "Yes. After qualification, prospects choose from available consultation times on your sales calendars, and the confirmation syncs to the CRM.",
      },
      {
        question:
          "How is AI lead follow-up different from email marketing automation?",
        answer:
          "Marketing automation sends scheduled messages whether or not the lead replies. AI follow-up is conversational: it reads replies, answers approved questions, asks qualifying questions and adapts the next step, then hands interested leads to a person.",
      },
      {
        question:
          "How do we keep AI follow-up on-brand and avoid annoying leads?",
        answer:
          "Messaging is approved up front, scope and cadence are agreed before rollout, and review points stay with your team. Leads who show interest or raise something sensitive are passed to a salesperson with the conversation context.",
      },
      {
        question: "What does my sales team receive from the AI?",
        answer:
          "A lead brief, a qualification score and a confirmed meeting in the CRM, so reps start conversations with the basics already gathered and spend their time with pre-screened, motivated prospects instead of chasing unresponsive ones.",
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
        question:
          "When should I build a custom CRM instead of using HubSpot, GoHighLevel, Zoho or Salesforce?",
        answer:
          "Consider a custom CRM when your sales or service process does not fit standard CRM structures, your team relies on spreadsheets and workarounds, or you need deep integration with other systems. If your process is fairly standard, customizing an existing CRM is often faster. LetssAI can do either, and we start by reviewing your current workflow.",
      },
      {
        question: "What does an AI-ready CRM mean?",
        answer:
          "It is a CRM whose data is structured, connected and current enough for AI to use: customer information, conversations, call notes and deal documents in one timeline, with clear fields and permissions. That lets AI summarize records, classify enquiries, suggest next steps and update approved fields.",
      },
      {
        question:
          "Can LetssAI customize our existing CRMs like HubSpot, GoHighLevel, Zoho instead of building from scratch?",
        answer:
          "Yes. LetssAI builds custom modules for existing CRMs, so you can keep the platform your team knows and add the structures and automations your process needs.",
      },
      {
        question: "How does AI reduce manual CRM data entry?",
        answer:
          "Auto-logging of conversations, AI summaries of calls and chats, smart status progression and automated task prompts mean reps record less by hand. Approved fields update automatically while important decisions stay with your team.",
      },
      {
        question:
          "Can the CRM bring calls, WhatsApp, email and invoices into one customer timeline?",
        answer:
          "Yes. The service unifies multi-channel interactions, call notes and deal documentation into a single timeline with a unified customer inbox, so everyone sees the full history of a customer in one place.",
      },
      {
        question:
          "How much does AI CRM development cost, and how long does it take?",
        answer:
          "There is no fixed package. Cost and timeline depend on the number of workflows, integrations and users, the AI features included and your security requirements. After a discovery call, LetssAI defines the scope and sends a proposal.",
      },
      {
        question: "What happens to our existing customer data?",
        answer:
          "How existing data is moved into the new system, and which records are cleaned up first, is defined during discovery so the CRM starts with information your team can trust.",
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
        question: "What is AI system integration?",
        answer:
          "It means connecting AI assistants to the tools you already use, such as your CRM, email, calendars, databases, Google Sheets, WhatsApp, dashboards and help desk, so they can use approved information and take permitted actions instead of working as a disconnected chatbot.",
      },
      {
        question: "Which tools and platforms can LetssAI integrate with?",
        answer:
          "CRMs, help desks and ticketing, email, WhatsApp, calendars, Google Sheets, databases, dashboards, knowledge bases, and calling platforms and CPaaS, through APIs, webhooks, MCP and SIP trunking where available. Compatibility is checked during discovery.",
      },
      {
        question:
          "What is MCP, and why does it matter for AI integration?",
        answer:
          "MCP, the Model Context Protocol, is an open standard for connecting AI to tools and data sources in a consistent way. LetssAI uses an extensible MCP layer so approved systems can be added without rebuilding the assistant each time.",
      },
      {
        question: "What if our software has no ready-made integration?",
        answer:
          "LetssAI can connect through APIs and custom endpoints, using event-driven webhooks and middleware to pass information between systems and trigger actions without manual double entry.",
      },
      {
        question: "Can AI read and write data in our systems safely?",
        answer:
          "Access is limited to approved data and permitted actions, with access scopes, review points and human escalation defined up front. The aim is for the AI to do the routine work while your team keeps control of anything sensitive.",
      },
      {
        question: "Can LetssAI connect AI to our existing phone system?",
        answer:
          "Yes, where supported. LetssAI can connect calling platforms and CPaaS, use SIP trunking to link existing telephony to supported voice workflows, and route calls to a person when escalation is needed.",
      },
      {
        question: "How does knowledge-base synchronization work?",
        answer:
          "Knowledge-base synchronization keeps approved support content available to the assistant, so answers reflect your current documentation within the sources agreed for the workflow.",
      },
      {
        question: "Can we integrate step by step?",
        answer:
          "Yes. We recommend starting with one workflow and connecting only the systems it needs, then adding integrations as the workflow proves useful.",
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
        question:
          "How can AI help real estate agents respond to property enquiries faster?",
        answer:
          "AI replies to a new enquiry within seconds on WhatsApp, web chat or email, answers approved property questions and asks a few qualifying questions, so buyers are not left waiting for an agent to be free. Your team then picks up warm, informed leads instead of starting from scratch.",
      },
      {
        question: "What questions can AI ask to qualify property buyers?",
        answer:
          "Typically budget, preferred location, property type, timeline and whether the buyer is ready to visit, plus any financing details you want captured. You approve the questions, and the AI passes a short brief and score to the right agent.",
      },
      {
        question: "Can AI book site visits and reduce no-shows?",
        answer:
          "It can offer available slots, confirm the visit, send reminders and assign the right adviser, with the booking reflected on connected calendars. Reminders and easy rescheduling make visits easier to keep, and your team can track attendance.",
      },
      {
        question:
          "Can AI answer questions about price, availability and floor plans?",
        answer:
          "Only from information you approve, such as brochures, price sheets and listing details, or a connected inventory source. Anything outside that, and any negotiation, goes to an agent, so buyers are never quoted figures the AI does not have.",
      },
      {
        question: "Can AI re-engage old or cold property leads?",
        answer:
          "Yes. A list of missed leads can be followed up with approved messages over WhatsApp or calls, and anyone who shows interest is routed to your sales team with the conversation context.",
      },
      {
        question: "Should buyers be told they are talking to an AI?",
        answer:
          "We recommend that the assistant introduces itself clearly as an AI and makes it easy to reach a person. Transparency builds trust, and an easy handoff keeps serious buyers from getting frustrated.",
      },
      {
        question: "Which CRMs does real estate AI follow-up work with?",
        answer:
          "LetssAI connects to HubSpot, Pipedrive and Zoho, and to other CRMs where a suitable integration exists. It can update stages, notes and reminders so records stay current without manual entry.",
      },
      {
        question:
          "Is this suitable for brokers, developers and rental agencies?",
        answer:
          "Yes. It suits any property team that handles a steady flow of enquiries from portals, ads, WhatsApp or its website. Developers with large lead volumes and small brokerages both benefit from faster, more consistent follow-up.",
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
        question:
          "Can an AI receptionist book and reschedule clinic appointments?",
        answer:
          "Yes. It can answer calls or messages, offer available slots, confirm, reschedule or cancel appointments on a connected calendar, and pass anything unusual to your front desk. This applies to general, dental, physiotherapy, dermatology and other clinics.",
      },
      {
        question:
          "What can an AI assistant answer for patients, and what can it not?",
        answer:
          "It can answer approved administrative questions such as opening hours, location, documents to bring, appointment types and fees. It does not give medical advice or interpret symptoms, and clinical or sensitive questions are passed to a staff member.",
      },
      {
        question: "Can AI appointment reminders reduce no-shows?",
        answer:
          "Reminders with simple confirm, reschedule or cancel options can help patients keep or release their slots, which supports a fuller schedule. Reminders are consent-aware, and results depend on your clinic, so track confirmations and missed appointments before and after launch.",
      },
      {
        question:
          "What happens if a patient describes symptoms or an emergency?",
        answer:
          "The assistant does not assess symptoms. Escalation rules agreed with your clinic route those conversations to a person straight away, and can direct patients to emergency services if you want that message used.",
      },
      {
        question:
          "Is AI patient communication compliant with HIPAA, GDPR or local privacy rules?",
        answer:
          "It depends on what information a workflow handles and on the data-handling arrangements agreed for your clinic. LetssAI scopes workflows around administrative tasks, limits access to what is needed and agrees data handling during design. Your clinic's obligations under rules such as HIPAA, GDPR or local health privacy law should be reviewed as part of scoping.",
      },
      {
        question: "Will AI replace my front desk team?",
        answer:
          "No. It takes over repetitive booking calls, reminders and routine questions so your team can focus on patients in front of them and on conversations that need a person. Staff stay in control of handoffs and exceptions.",
      },
      {
        question: "Can AI collect patient feedback after a visit?",
        answer:
          "Yes. Short approved post-visit questions can be sent or asked, and responses are grouped into themes such as reception, booking and follow-up for your team to review.",
      },
      {
        question: "Can AI connect to our clinic calendar or practice software?",
        answer:
          "It can connect to calendars and, where a suitable integration is available, to your CRM or practice management tools. Which systems are involved is confirmed during the workflow review.",
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
        question: "How does AI client intake work for a law firm?",
        answer:
          "The assistant gathers enquiry details with questions you approve, such as contact information, matter type and key facts, offers consultation times and prepares an administrative summary for a lawyer to review. It works at any hour, so after-hours enquiries are not lost, and a person decides whether to take the matter.",
      },
      {
        question: "How do you stop AI from giving legal advice?",
        answer:
          "The assistant is limited to administrative tasks and approved information, introduces itself as an intake assistant, and hands over to your team when a conversation moves toward advice. Scope limits and review points are agreed before launch.",
      },
      {
        question:
          "Does using AI for intake put client confidentiality at risk?",
        answer:
          "It does not. Data handling is scoped up front: what is collected, who can access it, how long it is kept and whether any of it is used to train models. LetssAI does not use client data to train public foundation models without explicit consent. Professional rules differ by jurisdiction, so your firm should check its own obligations.",
      },
      {
        question: "Can AI search our firm's documents and show its sources?",
        answer:
          "Yes. An internal knowledge workflow can search approved matter documents and answer from them with links back to the source, so lawyers can verify the answer instead of trusting it. Access follows the permissions you set.",
      },
      {
        question: "Can AI help with conflict checks?",
        answer:
          "It can collect the names and details needed and prepare them for review, but the conflict check itself, and the decision on whether to accept a matter, stays with your firm.",
      },
      {
        question:
          "Can AI schedule consultations and send deadlines or hearing reminders?",
        answer:
          "It can offer consultation slots and send administrative reminders for documents due, reviews and hearings. It supplements your firm's docketing and calendaring system and does not replace it.",
      },
      {
        question: "Should clients be told they are talking to AI?",
        answer:
          "We recommend clear disclosure and an easy route to a person, particularly because people contacting a law firm are often stressed or in urgent situations.",
      },
      {
        question: "Does it work with our practice management or CRM software?",
        answer:
          "It can connect to CRMs, calendars and document sources where a suitable integration is available. The systems involved are confirmed in the workflow review.",
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
        question:
          "How can AI help coaching institutes and schools reply to admission enquiries faster?",
        answer:
          "AI answers new enquiries within seconds on WhatsApp, web chat or calls, shares approved course details, asks qualifying questions and books a demo or counsellor call. Counsellors then spend time with interested families instead of repeating the same answers.",
      },
      {
        question: "Can AI answer course, fee and batch questions on WhatsApp?",
        answer:
          "Yes, from information you approve, such as brochures, fee structures, batch timings and eligibility rules. Questions it cannot answer, or that need personal guidance, go to a counsellor with the conversation already captured.",
      },
      {
        question:
          "Can AI follow up after a demo class to help convert enquiries into admissions?",
        answer:
          "Yes. It can collect feedback after a demo, answer remaining questions and remind families of the next step, then pass interested students to a counsellor. The follow-up cadence is agreed with you in advance.",
      },
      {
        question: "Can AI send fee reminders without being pushy?",
        answer:
          "Yes. Reminders use approved wording and timing, can be adjusted for tone, and escalate to staff when a family needs a conversation rather than another message.",
      },
      {
        question:
          "Can AI answer student questions about timetables and course access?",
        answer:
          "Yes. A student FAQ assistant can answer approved administrative questions about schedules, access and course admin, and hand over to staff for anything else.",
      },
      {
        question: "Will AI replace admission counsellors?",
        answer:
          "No. It handles the repetitive first response, qualification and reminders so counsellors can focus on the conversations that win an admission. Counsellors take over whenever a family needs personal attention.",
      },
      {
        question: "How are student and parent details protected?",
        answer:
          "Access, retention and escalation rules are defined for each workflow, and only the information needed for the task is used. Families' details are handled under the data arrangements agreed during solution design, and rules for minors' data should be reviewed as part of scoping.",
      },
      {
        question: "Can the assistant talk to families in their own language?",
        answer:
          "Yes, LetssAI supports multilingual conversations, and languages and mixed-language styles are confirmed for your use case during the workflow review.",
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
        question: "Can AI answer my order questions automatically?",
        answer:
          "Yes. When connected to your order data, the assistant can resolve order status, delivery and refund questions instantly and pass exceptions to an agent. These repeat questions are usually the largest share of e-commerce support volume.",
      },
      {
        question: "Can AI handle returns and exchanges?",
        answer:
          "It can explain your return policy, collect the details your team needs and guide customers through returns and exchange requests, with edge cases and disputes handed to a person.",
      },
      {
        question:
          "Can AI recover abandoned carts, and what results have you seen?",
        answer:
          "Yes. In a case study, a fashion and lifestyle D2C brand reached shoppers within minutes of checkout abandonment, converted 13% of abandoned carts and recovered ₹16.9L in under 30 days. Results vary by store, so we set targets after reviewing your traffic and checkout flow.",
      },
      {
        question: "Can AI verify cash-on-delivery orders to reduce RTO?",
        answer:
          "Yes. An AI call can confirm intent and delivery address on COD orders in real time before dispatch. In the same case study, the brand saw 15 to 20% lower RTO losses. Your results depend on your order mix and process.",
      },
      {
        question: "Can AI answer product, sizing and fit questions?",
        answer:
          "Yes, when it is trained on your approved product details, size charts and policies. It can resolve sizing hesitation live and send a one-click checkout link on WhatsApp when the shopper is ready.",
      },
      {
        question: "Can AI collect product reviews after delivery?",
        answer:
          "Yes. It can ask for reviews at the right moment after delivery using approved wording, and route unhappy customers to your team before they leave a poor review.",
      },
      {
        question:
          "Can one inbox handle WhatsApp, Instagram, email and website chat?",
        answer:
          "Yes. LetssAI's support suite brings these channels into one unified inbox, with AI handling routine questions, workflows routing the rest, and analytics showing response times and customer satisfaction.",
      },
      {
        question:
          "Does it work with Shopify, WooCommerce and other store platforms?",
        answer:
          "It connects to your store and order systems where a suitable integration or API is available. The platform and data needed are confirmed during discovery.",
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
        question:
          "How can AI automate client document collection for an accounting firm?",
        answer:
          "The assistant sends approved reminders for missing documents, tracks what has been requested, received and is still missing for each client, and alerts your team when something is overdue. It removes the repeated chasing so staff focus on the work that needs an accountant.",
      },
      {
        question: "Can AI extract data from invoices and receipts accurately?",
        answer:
          "AI can read invoice emails and attachments and capture fields such as vendor, date and amount into a spreadsheet or dashboard. Extracted data is prepared for a person to verify, so accuracy checks and sign-off stay with your team.",
      },
      {
        question:
          "Can AI send reminders for missing documents without annoying clients?",
        answer:
          "Yes. Reminder wording, timing and frequency are approved by you, and clients who need a conversation are escalated to a person instead of receiving more messages.",
      },
      {
        question: "Can AI help prepare monthly or month-end reports?",
        answer:
          "It can assemble inputs, flag exceptions and prepare a draft for accountant review. The accountant checks and approves before anything is shared.",
      },
      {
        question: "Is client financial data safe with AI?",
        answer:
          "Access, retention and review steps are defined for each workflow, and only the information needed for a task is used. LetssAI does not use client data to train public foundation models without explicit consent. Your own regulatory duties should be reviewed as part of scoping.",
      },
      {
        question: "Does it work with our spreadsheets and accounting software?",
        answer:
          "It can update spreadsheets and dashboards and connect to other tools where a suitable integration is available. Compatibility with your accounting platform is confirmed during discovery.",
      },
      {
        question: "Can AI answer our team's internal process questions?",
        answer:
          "Yes. An internal knowledge assistant can answer repeated questions about procedures, checklists and policies from your approved documents, and point to the source.",
      },
      {
        question: "Can AI help during tax season and month-end peaks?",
        answer:
          "Yes. Peak periods are where repeated document chasing and routine questions pile up, so automating collection, reminders and first responses frees capacity. We suggest launching before your busy season so the workflow is already stable.",
      },
    ],
  },
]

export const industriesHubFaqs: FAQ[] = [
  {
    question: "Which industries does LetssAI work with?",
    answer:
      "LetssAI works with real estate, healthcare and clinics, legal firms, education and coaching, e-commerce, and finance and accounting. Each workflow is shaped around how that sector actually operates.",
  },
  {
    question: "Why does an AI solution need to be built for my industry?",
    answer:
      "Because the language, rules and handoffs differ. A clinic must keep medical questions with staff, a law firm must avoid anything resembling legal advice, and an online store needs live order data. LetssAI starts from your sector's repeated tasks, approved information and review points rather than a generic chatbot template.",
  },
  {
    question: "What AI use cases are common across industries?",
    answer:
      "Fast replies to enquiries, appointment and site-visit booking, follow-ups and payment reminders, CRM updates, answers drawn from approved documents, and summaries or reports prepared for a person to review. Each industry page shows how these look in practice.",
  },
  {
    question: "What if my industry is not listed?",
    answer:
      "The same building blocks of support, calling, follow-up, CRM and integration apply to many other service businesses. If your team handles repeated enquiries, bookings, reminders or documents, book a discovery call and we will tell you where AI can help and where it can't.",
  },
  {
    question: "Does LetssAI give medical, legal or financial advice?",
    answer:
      "No. In regulated sectors, LetssAI supports administrative work such as booking, intake, reminders, document organization and approved FAQs. Advice, diagnosis and professional judgment stay with qualified people, and the assistant hands over when a conversation moves in that direction.",
  },
  {
    question:
      "How does LetssAI handle sensitive client or patient information?",
    answer:
      "Access, retention, integrations and escalation rules are defined for each workflow, and data handling is agreed during solution design. LetssAI does not use client data to train public foundation models without explicit consent. Privacy rules in health, legal and financial sectors differ by country, so they should be reviewed as part of scoping.",
  },
  {
    question:
      "How long does an industry workflow take to launch, and what does it cost?",
    answer:
      "Focused automations are typically delivered in roughly two working weeks, depending on complexity, integrations and security needs. Pricing is tailored rather than fixed, and a proposal follows a discovery call.",
  },
  {
    question: "How do I get started in my industry?",
    answer:
      "Book a free AI [discovery call](https://letssai.com/ai-discovery) and describe your repeated tasks and bottlenecks. We identify one practical first workflow, the information it needs and the points where your team stays involved.",
  },
]

export const homeFaqs: FAQ[] = [
  {
    question:
      "How do I integrate AI into my business operations without disrupting what already works?",
    answer:
      "Start with one repetitive, high-volume workflow and connect AI to the tools your team already uses, instead of replacing your systems. LetssAI builds AI that plugs into your website, WhatsApp, email, CRM, calendars and documents. We begin by mapping where your team spends manual time, automate one process end to end, and expand once it’s working. Your people keep control of approvals and exceptions.",
  },
  {
    question:
      "What is an AI readiness assessment, and do I need one before starting?",
    answer:
      "An AI readiness assessment checks whether your data, processes, tools and team can support an AI project before you commit a budget. It usually looks at how well your workflows are documented, where your data lives, which systems need to connect, and who owns the outcome. Our AI discovery call covers these questions and ends in a clear scope, so you know what to automate first and what to fix before building.",
  },
  {
    question:
      "What does AI strategy consulting involve, and how is it different from just buying AI tools?",
    answer:
      "AI strategy consulting decides which problems AI should solve, in what order, and how to measure the result. Buying tools alone often leaves you with disconnected chatbots that nobody uses. LetssAI starts from your business goals and existing workflows, ranks the opportunities by impact and effort, and then builds the solution, so strategy and delivery come from the same team.",
  },
  {
    question: "How can I reduce operational costs with AI?",
    answer:
      "AI reduces operating costs by taking over repetitive work such as answering common enquiries, qualifying leads, scheduling, follow-ups, data entry and routine reporting. That frees your team for work that needs judgment. Savings depend on your volumes and processes, so we don’t promise a universal figure. During discovery we identify the highest-cost manual tasks and agree on what to measure, such as response time, hours saved or tickets resolved without a human.",
  },
  {
    question:
      "What is custom AI agent development, and when do I need a custom agent instead of an off-the-shelf chatbot?",
    answer:
      "A custom AI agent is software that understands requests, uses your business information, and takes actions such as booking an appointment, updating a CRM record or creating a ticket. Off-the-shelf chatbots mostly answer generic questions. You need a custom agent when it must follow your rules, connect to your systems, handle your specific workflows, or work across voice, chat and email.",
  },
  {
    question:
      "How do I automate customer support workflows without losing the human touch?",
    answer:
      "Let AI resolve routine questions instantly and route everything sensitive or complex to your team. LetssAI’s support automation covers WhatsApp, email, Instagram and website chat in one inbox. It can handle order updates, refunds and delivery questions, send technical issues to the right specialist, flag frustrated customers for priority attention, and balance workload across agents.",
  },
  {
    question:
      "What is enterprise RAG implementation, and why does it matter for AI accuracy?",
    answer:
      "Retrieval-augmented generation (RAG) lets an AI answer from your own approved documents and data instead of guessing from general training. For a business, that means answers based on your policies, product details, contracts or knowledge base, which can be kept current as those documents change. A solid implementation also covers access controls and sensible limits on what the AI can say.",
  },
  {
    question: "What should I look for in an AI workflow automation partner?",
    answer:
      "Look for a partner who starts with your business process rather than a technology pitch. Key signs are a discovery phase before any build, integrations with the tools you already run, human approval steps for important decisions, clear data-security arrangements, and a defined timeline and scope. LetssAI works remotely with clients across several time zones and delivers production-ready systems, not just demos.",
  },
  {
    question: "How do I know which process to automate with AI first?",
    answer:
      "Pick a task that is frequent, rule-based, time-consuming and easy to measure. Good first candidates are lead follow-up, appointment booking, answering repeat customer questions and CRM updates. If the process is already clear and has a measurable baseline, such as time per task or response time, it will be easier to prove results quickly and build confidence for the next automation.",
  },
  {
    question: "Will AI automation replace my team?",
    answer:
      "It depends on your team size, workflows, and where human expertise adds value.  For smaller teams, LetssAI reduces unnecessary manual dependencies, helping you scale without constantly hiring. For larger teams, AI handles repetitive work while employees focus on decisions, relationships, and growth. Our philosophy is simple: Empower people who add value. Automate work that doesn't need them. The result? A smarter, leaner business where your people focus on what truly matters.",
  },
]
