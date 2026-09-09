const items = [["bg-emerald-500", "Automated step"], ["bg-amber-400", "Decision or review"], ["bg-slate-500", "Connected system"]]
export function WorkflowLegend() { return <div className="flex flex-wrap gap-4 text-xs text-slate-600">{items.map(([color, label]) => <span className="flex items-center gap-2" key={label}><i className={`size-2 rounded-full ${color}`} />{label}</span>)}</div> }
