import Image, { type StaticImageData } from "next/image"
import { CheckCircle } from "@phosphor-icons/react/dist/ssr"

export function VoiceFeatureRow({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  imageSide,
  points,
}: {
  eyebrow: string
  title: string
  description: string
  image: StaticImageData
  imageAlt: string
  imageSide: "left" | "right"
  points?: string[]
}) {
  return (
    <article className="grid items-center gap-10 border-t border-emerald-950/10 py-14 first:border-t-0 md:grid-cols-2 md:gap-14 md:py-20 lg:gap-20">
      <div className={imageSide === "left" ? "md:order-2" : undefined}>
        <p className="text-sm font-semibold tracking-[0.14em] text-[#016630] uppercase">
          {eyebrow}
        </p>
        <h3 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.025em] text-slate-950 sm:text-4xl">
          {title}
        </h3>
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
        {points && (
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            {points.map((point) => (
              <li
                className="flex gap-2.5 text-sm leading-6 text-slate-700"
                key={point}
              >
                <CheckCircle
                  className="mt-1 shrink-0 text-[#016630]"
                  aria-hidden
                />
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div
        className={`overflow-hidden rounded-[1.75rem] border border-emerald-950/10 bg-emerald-50 shadow-[0_20px_55px_rgba(2,44,34,0.08)] ${imageSide === "left" ? "md:order-1" : undefined}`}
      >
        <Image
          src={image}
          alt={imageAlt}
          sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 45vw, 560px"
          className="h-auto w-full object-cover"
        />
      </div>
    </article>
  )
}
