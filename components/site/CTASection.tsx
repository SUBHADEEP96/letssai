import Link from "next/link"
export function CTASection({
  title = "Ready to see where AI can save time in your business?",
  text = "Tell us what your team does manually today. We’ll help identify practical places AI can support your workflow.",
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-[2rem] bg-emerald-950 p-8 text-white md:p-12">
        <h2 className="max-w-3xl text-3xl leading-tight font-semibold tracking-tight md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-emerald-50/75">
          {text}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Request a free AI workflow review
        </Link>
      </div>
    </section>
  )
}
