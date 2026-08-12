"use client"
import { Handle, Position, type NodeProps, type Node } from "@xyflow/react"
import type { WorkflowNodeData } from "./types"

export function WorkflowNode({ data }: NodeProps<Node<WorkflowNodeData>>) {
  return (
    <div className="w-48 rounded-2xl border border-emerald-900/15 bg-white p-4 shadow-xl shadow-emerald-950/10">
      <Handle type="target" position={Position.Left} className="!bg-emerald-600" />
      <span className="rounded-full bg-emerald-50 px-2 py-1 font-mono text-[10px] font-bold tracking-wide text-emerald-800 uppercase">{data.kind}</span>
      <p className="mt-3 text-xs leading-5 text-slate-600">{data.detail}</p>
      <Handle type="source" position={Position.Right} className="!bg-emerald-600" />
    </div>
  )
}
