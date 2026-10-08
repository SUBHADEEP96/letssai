import type { GalleryItem } from "@/lib/content/types"
import { ProductMockupCard } from "./ProductMockupCard"
export function IndustryGallery({
  title,
  items,
}: {
  title: string
  items: GalleryItem[]
}) {
  return (
    <section className="section bg-emerald-50/60" aria-labelledby="gallery-heading">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-bold tracking-[0.18em] text-[#016630] uppercase">
            Original product views
          </p>
          <h2
            id="gallery-heading"
            className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl"
          >
            What could an AI workspace for {title.toLowerCase()} look like?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-8">
            These interface concepts show practical workflows—not a promise of
            an off-the-shelf product. The final workspace is shaped around your
            systems and review needs.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((item) => (
            <ProductMockupCard item={item} key={item.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
