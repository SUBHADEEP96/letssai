"use client"
import { Handle, Position, type NodeProps, type Node } from "@xyflow/react"
import { BellRinging, Brain, CheckCircle, Database, Gauge, GitBranch, HandPalm, Lightning, UserCircle } from "@phosphor-icons/react"
import type { WorkflowNodeData, WorkflowNodeKind } from "@/lib/workflows/types"

const icons: Record<WorkflowNodeKind, typeof Lightning> = { trigger: Lightning, input: UserCircle, assistant: Brain, knowledge: Database, decision: GitBranch, human: HandPalm, integration: BellRinging, output: CheckCircle, dashboard: Gauge }
export function WorkflowNode({ data }: NodeProps<Node<WorkflowNodeData>>) {
  const Icon = icons[data.type]
  return <div className="w-48 rounded-2xl border border-emerald-900/15 bg-white p-4 shadow-xl shadow-emerald-950/8">
    <Handle type="target" position={Position.Left} className="!bg-emerald-600" />
    <span className="mb-3 grid size-9 place-items-center rounded-xl bg-emerald-100 text-emerald-800"><Icon size={19} aria-hidden /></span>
    <div className="text-sm font-semibold text-slate-950">{data.label}</div>
    <div className="mt-1 text-xs leading-5 text-slate-600">{data.detail}</div>
    <Handle type="source" position={Position.Right} className="!bg-emerald-600" />
  </div>
}
