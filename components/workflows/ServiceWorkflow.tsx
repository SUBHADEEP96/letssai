"use client"
import { Background, Controls, MarkerType, Panel, ReactFlow, type Edge, type Node } from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import type { WorkflowEdgeData, WorkflowNodeData } from "@/lib/workflows/types"
import { WorkflowNode } from "./WorkflowNode"
import { WorkflowLegend } from "./WorkflowLegend"
import { MobileWorkflowFallback } from "./MobileWorkflowFallback"

const nodeTypes = { workflow: WorkflowNode }
export function ServiceWorkflow({ title, description, nodes, edges }: { title: string; description: string; nodes: WorkflowNodeData[]; edges: WorkflowEdgeData[] }) {
  const flowNodes: Node[] = nodes.map(({ id, x, y, ...data }) => ({ id, type: "workflow", position: { x, y }, data }))
  const flowEdges: Edge[] = edges.map((edge) => ({ ...edge, animated: true, style: { stroke: "#059669", strokeWidth: 2 }, markerEnd: { type: MarkerType.ArrowClosed, color: "#059669" } }))
  return <section className="section bg-[radial-gradient(circle_at_top,#d1fae5,transparent_58%)]" aria-labelledby="workflow-title"><div className="mx-auto max-w-7xl"><p className="text-sm font-semibold tracking-widest text-emerald-700 uppercase">Interactive workflow</p><h2 id="workflow-title" className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2><p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{description}</p><div className="mt-8"><MobileWorkflowFallback nodes={nodes} /><div className="hidden h-[470px] overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white/70 shadow-2xl shadow-emerald-950/8 md:block"><ReactFlow nodes={flowNodes} edges={flowEdges} nodeTypes={nodeTypes} fitView fitViewOptions={{ padding: .1 }} nodesDraggable={false} nodesConnectable={false} panOnScroll><Background color="#a7f3d0" gap={22} /><Controls showInteractive={false} /><Panel position="top-right"><div className="rounded-xl bg-white/90 p-3 shadow"><WorkflowLegend /></div></Panel></ReactFlow></div></div><ol className="sr-only">{nodes.map((node) => <li key={node.id}>{node.label}: {node.detail}</li>)}</ol></div></section>
}
