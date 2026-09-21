import {Link} from "@/i18n/navigation"
export function Breadcrumbs({
  items,
  light = false,
}: {
  items: { label: string; href: string }[]
  light?: boolean
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`text-sm ${light ? "text-emerald-50/70" : "text-slate-500"}`}
    >
      <ol className="flex flex-wrap gap-2">
        {items.map((i, idx) => (
          <li key={i.href} className="flex gap-2">
            {idx > 0 && <span>/</span>}
            <Link
              className={light ? "hover:text-white" : "hover:text-emerald-700"}
              href={i.href}
            >
              {i.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
