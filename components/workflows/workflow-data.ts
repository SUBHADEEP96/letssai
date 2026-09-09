import type { Service } from "@/lib/site"
import type { WorkflowDefinition, WorkflowKind } from "./types"

const titles: Record<string, string> = {
  "ai-customer-support": "From repeated questions to faster customer replies",
  "ai-sales-lead-follow-up": "From new lead to booked conversation",
  "ai-knowledge-assistant": "From scattered documents to clear internal answers",
  "ai-marketing-assistant": "From campaign idea to ready-to-review content",
  "ai-calling-appointment-booking": "From contact list to confirmed appointment",
  "ai-workflow-automation": "From manual handoffs to connected daily work",
  "ai-system-integration": "From disconnected tools to one connected AI layer",
}
const kinds: WorkflowKind[] = ["Trigger", "AI Assistant", "Decision", "Human Review", "Integration", "Output", "Report"]

export function workflowFor(service: Service): WorkflowDefinition {
  const steps = service.workflow
  const nodes = Array.from({ length: 7 }, (_, index) => {
    const row = index % 2
    return {
      id: `${index + 1}`,
      type: "workflow",
      position: { x: index * 220, y: row * 130 },
      data: {
        kind: kinds[index],
        label: kinds[index],
        detail: steps[index % steps.length],
      },
    }
  })
  return {
    title: titles[service.slug] ?? `How ${service.title} works`,
    explanation: "A clear example of how information moves through the workflow, where AI helps, and where your team stays in control.",
    outcome: service.benefits.join(" · "),
    tools: service.tools,
    nodes,
    edges: nodes.slice(0, -1).map((node, index) => ({
      id: `e-${node.id}-${nodes[index + 1].id}`,
      source: node.id,
      target: nodes[index + 1].id,
      animated: true,
      style: { stroke: "#0f8a70", strokeWidth: 2 },
    })),
  }
}
