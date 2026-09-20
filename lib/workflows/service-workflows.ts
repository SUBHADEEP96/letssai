import type {
  WorkflowEdgeData,
  WorkflowNodeData,
  WorkflowNodeKind,
} from "./types"

const flows: Record<
  string,
  {
    title: string
    description: string
    steps: [string, string, WorkflowNodeKind][]
  }
> = {
  "ai-customer-support": {
    title: "From repeated questions to faster customer replies",
    description:
      "A support journey that answers from approved content and keeps people in control.",
    steps: [
      ["Customer inbox", "Website chat, WhatsApp or email", "input"],
      ["Intent check", "FAQ, order, booking, complaint or person", "decision"],
      ["Approved answers", "Search current support content", "knowledge"],
      ["Clear reply", "Answer common questions plainly", "assistant"],
      ["Human handoff", "Route sensitive or unclear requests", "human"],
      ["Ticket summary", "Create a ticket with useful context", "output"],
      ["Support trends", "Show recurring questions", "dashboard"],
    ],
  },
  "ai-sales-lead-follow-up": {
    title: "From new lead to booked conversation",
    description:
      "Respond while interest is fresh, qualify consistently and give sales a clean next action.",
    steps: [
      ["New lead", "Form, ad, WhatsApp, email or CRM", "trigger"],
      ["Quick reply", "Acknowledge the inquiry", "assistant"],
      ["Qualification", "Ask fit, timing and interest questions", "decision"],
      ["Lead score", "Prioritise fit, urgency and intent", "knowledge"],
      ["Booking", "Offer a call, visit or demo", "integration"],
      ["CRM update", "Save answers and next action", "output"],
      ["Sales handoff", "Send a concise lead brief", "human"],
    ],
  },
  "ai-calling-appointment-booking": {
    title: "From contact list to confirmed appointment",
    description:
      "Coordinate approved outreach, live availability and reminders with staff routing when needed.",
    steps: [
      ["Contact selected", "Choose an approved lead or customer", "trigger"],
      ["Outreach", "Message or approved call flow", "assistant"],
      ["Intent & timing", "Ask availability and purpose", "input"],
      ["Calendar check", "Read open appointment slots", "integration"],
      ["Book or route", "Confirm or involve staff", "human"],
      ["Reminder", "Send appointment details", "output"],
      ["Booking report", "Save outcome and summary", "dashboard"],
    ],
  },
  "ai-crm-development": {
    title: "From scattered customer data to one reliable CRM",
    description:
      "Design the customer record, permissions and automations around the way your team works.",
    steps: [
      ["Process discovery", "Map sales and service workflows", "input"],
      ["Customer model", "Define contacts, leads and activity", "knowledge"],
      ["Roles & access", "Set team permissions", "decision"],
      ["CRM build", "Create approved views and actions", "integration"],
      [
        "AI assistance",
        "Summaries, classification and next steps",
        "assistant",
      ],
      ["Team testing", "Validate workflows before launch", "human"],
      ["Pipeline reporting", "Monitor outcomes and exceptions", "dashboard"],
    ],
  },
  "ai-system-integration": {
    title: "From disconnected tools to one connected AI layer",
    description:
      "Map permissions first, connect only approved systems, then monitor real workflows.",
    steps: [
      ["Tool discovery", "Identify systems already in use", "input"],
      ["Connection map", "APIs, forms, CRM, files and data", "knowledge"],
      ["Safe actions", "Define access and permissions", "decision"],
      ["AI layer", "Connect approved capabilities", "assistant"],
      ["Test run", "Validate with human approval", "human"],
      ["Reporting layer", "Add operational visibility", "dashboard"],
      ["Monitor & improve", "Review quality and exceptions", "output"],
    ],
  },
}
export function getWorkflow(slug: string) {
  const flow = flows[slug]
  const nodes: WorkflowNodeData[] = flow.steps.map(
    ([label, detail, type], i) => ({
      id: `${i + 1}`,
      label,
      detail,
      type,
      x: i * 225,
      y: i % 2 ? 125 : 20,
    })
  )
  const edges: WorkflowEdgeData[] = nodes.slice(1).map((node, i) => ({
    id: `e${i + 1}-${i + 2}`,
    source: `${i + 1}`,
    target: node.id,
  }))
  return { title: flow.title, description: flow.description, nodes, edges }
}
