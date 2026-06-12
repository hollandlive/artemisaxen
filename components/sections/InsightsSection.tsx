import FadeIn       from "@/components/ui/FadeIn"
import SectionLabel from "@/components/ui/SectionLabel"

const THOUGHTS = [
  {
    n:       "01",
    title:   "Designing for the age of AI",
    excerpt: "When tools can generate anything, the craft shifts from execution to judgment. What it means to design in a world where the machine can already draw.",
  },
  {
    n:       "02",
    title:   "Why products need personality",
    excerpt: "The most remembered digital products aren't the most functional ones. They're the ones that felt like someone made a choice — and stuck with it.",
  },
  {
    n:       "03",
    title:   "What travel platforms can learn from storytelling",
    excerpt: "A booking flow optimised for conversion is not the same as one optimised for desire. The gap between the two is where most platforms lose.",
  },
  {
    n:       "04",
    title:   "Building experiences people remember",
    excerpt: "Memory is not about features. It's about moments of friction turned to delight, and the quiet confidence of a thing that just works.",
  },
]

export default function InsightsSection() {
  return (
    <section id="thoughts" aria-label="Thoughts" className="bg-canvas">
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">

        <FadeIn direction="none">
          <SectionLabel>Thoughts</SectionLabel>
        </FadeIn>

        <FadeIn direction="up" delay={0.06}>
          <h2
            className="font-serif italic mt-2 leading-[1.0] text-charcoal"
            style={{ fontSize: "var(--text-title)" }}
          >
            Ideas worth revisiting.
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">
          {THOUGHTS.map(({ n, title, excerpt }, i) => (
            <FadeIn key={n} direction="up" delay={0.10 + i * 0.07}>
              <article className="border-t border-border pt-6 pb-10">
                <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted mb-4">
                  {n}
                </p>
                <h3
                  className="font-serif italic leading-[1.1] text-charcoal"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.55rem)" }}
                >
                  {title}
                </h3>
                <p className="mt-3 text-[14px] text-body leading-[1.8]">
                  {excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 mt-5 text-[12px] text-dim
                             transition-opacity hover:opacity-60"
                  style={{
                    borderBottom: "1px solid rgba(107,105,99,0.25)",
                    paddingBottom: "1px",
                  }}
                >
                  Read more →
                </a>
              </article>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  )
}
