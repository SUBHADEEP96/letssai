import type { WorkflowKind } from "./types"
const labels: WorkflowKind[] = ["Trigger", "AI Assistant", "Decision", "Human Review", "Integration", "Output", "Report"]
export function WorkflowLegend() {
  return <div className="flex flex-wrap gap-2" aria-label="Workflow node types">{labels.map((label) => <span key={label} className="rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs text-emerald-900">{label}</span>)}</div>
}
