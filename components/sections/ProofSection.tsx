import FadeIn from "@/components/ui/FadeIn"

const FACTS = [
  { value: "18 yrs", label: "living and working in the Netherlands" },
  { value: "2014",   label: "first commit as a professional developer" },
  { value: "4",      label: "products in production in 2026" },
  { value: "30k+",   label: "localised pages served on Vercel" },
]

export default function ProofSection() {
  return (
    <section id="proof" aria-label="At a glance" className="bg-canvas border-b border-border">
      <div className="max-w-5xl mx-auto px-6 py-20 lg:py-24">
        <FadeIn direction="up">
          <p
            className="font-serif italic text-charcoal leading-[1.15] max-w-3xl"
            style={{ fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)" }}
          >
            Full-stack developer who ships products end to end — and knows
            what they cost to run: database IO, cache writes, bot traffic and search visibility.
          </p>
        </FadeIn>

        <dl className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-y-10 border-t border-border">
          {FACTS.map(({ value, label }, i) => (
            <FadeIn key={label} direction="up" delay={0.06 + i * 0.05}>
              <div className="pt-6 pr-4">
                <dt className="sr-only">{label}</dt>
                <dd className="font-serif text-charcoal leading-none"
                    style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)" }}>
                  {value}
                </dd>
                <p className="mt-2 text-[12px] text-dim leading-relaxed">{label}</p>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  )
}
