"use client"
import { useMemo } from "react"
import { Background, Controls, Panel, ReactFlow } from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import type { WorkflowDefinition } from "./types"
import { WorkflowNode } from "./WorkflowNode"
import { WorkflowLegend } from "./WorkflowLegend"

export function WorkflowShowcase({ workflow }: { workflow: WorkflowDefinition }) {
  const nodeTypes = useMemo(() => ({ workflow: WorkflowNode }), [])
  return (
    <section className="section bg-[#effaf6]" aria-labelledby="workflow-title">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-bold tracking-[.18em] text-emerald-700 uppercase">Interactive workflow</p>
        <h2 id="workflow-title" className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">{workflow.title}</h2>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">{workflow.explanation}</p>
        <div className="mt-8 hidden h-[500px] overflow-hidden rounded-[2rem] border border-emerald-900/10 bg-white shadow-2xl shadow-emerald-950/5 md:block">
          <ReactFlow nodes={workflow.nodes} edges={workflow.edges} nodeTypes={nodeTypes} fitView fitViewOptions={{ padding: 0.2 }} nodesDraggable={false} nodesConnectable={false} elementsSelectable={false} aria-label={`${workflow.title} diagram`}>
            <Background color="#b7e4d5" gap={24} />
            <Controls showInteractive={false} />
            <Panel position="top-left"><WorkflowLegend /></Panel>
          </ReactFlow>
        </div>
        <ol className="mt-8 grid gap-3 md:hidden" aria-label="Workflow steps">
          {workflow.nodes.map((node, index) => <li key={node.id} className="rounded-2xl border border-emerald-900/10 bg-white p-5"><span className="font-mono text-xs font-bold text-emerald-700">{index + 1}. {node.data.kind}</span><p className="mt-2 leading-6 text-slate-700">{node.data.detail}</p></li>)}
        </ol>
        <div className="mt-6 grid gap-4 rounded-3xl bg-emerald-950 p-6 text-white md:grid-cols-2">
          <div><b>Business outcome</b><p className="mt-2 text-sm leading-6 text-emerald-50/75">{workflow.outcome}</p></div>
          <div><b>Supported tools and channels</b><p className="mt-2 text-sm leading-6 text-emerald-50/75">{workflow.tools.join(" · ")}</p></div>
        </div>
      </div>
    </section>
  )
}
