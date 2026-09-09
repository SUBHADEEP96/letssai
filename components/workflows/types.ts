import type { Edge, Node } from "@xyflow/react"

export type WorkflowKind = "Trigger" | "AI Assistant" | "Decision" | "Human Review" | "Integration" | "Output" | "Report"
export type WorkflowNodeData = { label: string; detail: string; kind: WorkflowKind }
export type WorkflowDefinition = {
  title: string
  explanation: string
  outcome: string
  tools: string[]
  nodes: Node<WorkflowNodeData>[]
  edges: Edge[]
}
