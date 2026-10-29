import { siteConfig, services, industries, homeFaqs } from "@/lib/site"

export function getLlmsTxt(): string {
  const baseUrl = siteConfig.url

  return `# ${siteConfig.name}

> Practical AI assistants, autonomous voice telephony, and deterministic workflow systems engineered for growing businesses.

LetssAI builds high-impact, production-ready artificial intelligence systems that integrate directly into existing enterprise workflows and communication tools. Our platform capabilities include autonomous voice AI telephony, multi-channel customer support assistants, inbound sales qualification pipelines, bespoke AI-ready CRM architectures, and event-driven API middleware integrations. All systems operate with strict deterministic guardrails, zero unconsented foundation model training on customer data, and seamless human-in-the-loop escalation.

## Core Services

- [AI Customer Support](${baseUrl}/services/ai-customer-support): Multichannel automated support across website chat, WhatsApp Business API, and inbound email with verified knowledge base (RAG) grounding and safe operator handoff.
- [AI Calling & Appointment Booking](${baseUrl}/services/ai-calling-appointment-booking): Low-latency voice AI agents handling inbound/outbound telephony, calendar availability checks, automated multi-channel confirmations, and structured call transcript synchronization.
- [AI Sales & Lead Follow-up](${baseUrl}/services/ai-sales-lead-follow-up): Sub-60-second speed-to-lead qualification, dynamic qualification dialogues, automated consultation scheduling, and real-time CRM deal stage synchronization.
- [AI CRM Development](${baseUrl}/services/ai-crm-development): Bespoke AI-ready CRM architectures with customized schemas, unified omnichannel communications, automated deal tracking, and role-based access control.
- [AI System Integration](${baseUrl}/services/ai-system-integration): Bidirectional API middleware connecting language models to internal databases, ERPs, accounting tools, webhooks, and event-driven workflow automation pipelines.

## Industry Solutions

- [Real Estate](${baseUrl}/industries/real-estate): Property inquiry qualification, site visit scheduling, WhatsApp follow-up, and automated CRM deal progression.
- [Healthcare & Clinics](${baseUrl}/industries/healthcare-clinics): Patient intake triage, calendar slot reservations, automated appointment reminders, and clinic phone reception.
- [Retail & E-commerce](${baseUrl}/industries/retail-ecommerce): Order status tracking, product recommendations, multi-tier customer service, and post-purchase review workflows.
- [Education & Coaching](${baseUrl}/industries/education-coaching): Course admissions inquiries, student consultation booking, and multi-channel student support.
- [Finance & Accounting](${baseUrl}/industries/finance-accounting): Client document collection, appointment coordination, compliance-aware data triage, and reporting workflows.
- [Legal Firms](${baseUrl}/industries/legal-firms): Case intake triage, initial consultation booking, and secure client communication workflows.

## Architecture & Principles

- [Why LetssAI](${baseUrl}/why-letssai): Architectural doctrine, rapid autonomous response, minimal stack disruption, and human-in-the-loop oversight.
- [Privacy Policy](${baseUrl}/privacy-policy): Zero foundation model training on confidential customer data, encryption in transit and at rest, and strict data retention controls.
- [Terms & Conditions](${baseUrl}/terms-and-conditions): Service specifications, deterministic AI boundaries, and client data ownership.
- [Contact & Consultation](${baseUrl}/contact): Request a free workflow review to evaluate automation feasibility.

## Optional

- [Full Documentation (llms-full.txt)](${baseUrl}/llms-full.txt): Complete, consolidated documentation of all LetssAI services, industries, architectural principles, workflows, and FAQs in a single file.
`
}

export function getLlmsFullTxt(): string {
  const baseUrl = siteConfig.url

  let full = `# ${siteConfig.name} — Full System & Solutions Documentation

> Comprehensive machine-readable reference of LetssAI services, industry frameworks, integration architecture, and operational guardrails.

Website: ${baseUrl}
Contact: ${siteConfig.contactEmail || "contact@letssai.com"}
Brand Value: Practical, production-ready AI solutions delivering measurable operational outcomes.

---

# 1. Architectural Doctrine & Safety Principles

LetssAI designs and deploys artificial intelligence systems around five non-negotiable operational principles:

1. **Focus on Specific, High-Impact Workflows**: We identify high-friction manual operational bottlenecks (e.g. initial inquiry response, appointment confirmations, repetitive CRM updates) rather than deploying generic, unguided chatbots.
2. **Deploy Across Existing Workflows, Not Disconnected Tools**: Systems embed natively into the software and channels clients already use—including WhatsApp Business API, website widgets, Google Workspace, Microsoft 365, HubSpot, Salesforce, Zoho, and custom relational databases.
3. **Keep Human Expertise in the Loop**: Sensitive inquiries, edge cases, negative customer sentiment, or high-stakes business decisions automatically trigger warm handoffs to human operators with full conversation context and pre-assembled briefs.
4. **Maintain Deterministic Control & Strict Data Privacy**: AI systems are strictly grounded in verified business documentation with rigid hallucination guardrails. Customer data is NEVER used to train public foundation models without express written consent.
5. **Measure by Measurable Throughput & Outcomes**: Success is evaluated on tangible operational metrics: sub-minute response times, zero dropped leads, eliminated clerical data entry, and confirmed calendar appointments.

---

# 2. Detailed Service Catalog

`

  for (const s of services) {
    full += `## Service: ${s.title}
- **URL**: ${baseUrl}${s.href}
- **Overview**: ${s.description}
- **Primary Tools & Integrations**: ${s.tools.join(", ")}

### Business Problems Solved
${s.problems.map((p) => `- ${p}`).join("\n")}

### Core Capabilities
${s.does.map((d) => `- ${d}`).join("\n")}

### Execution Workflow
${s.workflow.map((w, i) => `${i + 1}. ${w}`).join("\n")}

### Measurable Benefits
${s.benefits.map((b) => `- ${b}`).join("\n")}

### Frequently Asked Questions
${s.faqs.map((f) => `**Q: ${f.question}**\nA: ${f.answer}`).join("\n\n")}

---

`
  }

  full += `# 3. Industry Solutions

`

  for (const ind of industries) {
    full += `## Industry: ${ind.title}
- **URL**: ${baseUrl}${ind.href}
- **Use Case**: ${ind.useCase}

### Common Sector Challenges
${ind.problems.map((p) => `- ${p}`).join("\n")}

### Key Tailored Workflows
${ind.workflows.map((w) => `- ${w}`).join("\n")}

### Sector Benefits
${ind.benefits.map((b) => `- ${b}`).join("\n")}

### Frequently Asked Questions
${ind.faqs.map((f) => `**Q: ${f.question}**\nA: ${f.answer}`).join("\n\n")}

---

`
  }

  full += `# 4. Engagement & Consultation Process

To evaluate an automation workflow with LetssAI:
1. **Initial Review**: Submit current manual workflow bottlenecks via ${baseUrl}/contact.
2. **Technical Feasibility Audit**: LetssAI engineers evaluate APIs, authentication models, and data security requirements.
3. **Staging Prototype**: A sandboxed implementation is tested against edge cases with staff feedback.
4. **Production Deployment**: Rollout with real-time telemetry, human approval gates, and ongoing model refinement.
`

  return full
}
