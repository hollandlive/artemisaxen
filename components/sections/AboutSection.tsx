import SectionLabel     from "@/components/ui/SectionLabel"
import FadeIn           from "@/components/ui/FadeIn"
import LanguageStagger  from "@/components/ui/LanguageStagger"

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About"
      className="bg-canvas"
    >
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">

        <FadeIn direction="none">
          <SectionLabel>About</SectionLabel>
        </FadeIn>

        <div className="mt-8 flex flex-col lg:flex-row lg:items-start lg:gap-20">

          {/* ── Left: bio ─────────────────────────────────────── */}
          <div className="lg:w-7/12">
            <FadeIn direction="up" delay={0.06}>
              <h2
                className="font-serif italic text-charcoal leading-[1.05]"
                style={{ fontSize: "var(--text-title)" }}
              >
                I design and build things that work.
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.14}>
              <p className="mt-7 text-[15px] text-body leading-[1.85]">
                A designer and developer based in Athens. I work across the full
                stack — from brand identity to Shopify custom themes, Next.js
                platforms, and everything in between.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.20}>
              <p className="mt-4 text-[15px] text-body leading-[1.85]">
                My clients are entrepreneurs and small businesses who want a
                digital presence that reflects their quality. I work in close
                collaboration: you bring the vision, I bring the execution.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.26}>
              <div className="mt-10 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
                <span className="text-[12px] text-dim tracking-wide">
                  Available for new projects
                </span>
              </div>
            </FadeIn>
          </div>

          {/* ── Right: languages ──────────────────────────────── */}
          <div className="mt-16 lg:mt-0 lg:w-5/12">
            <FadeIn direction="none" delay={0.10}>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted mb-6">
                Working in five languages
              </p>
            </FadeIn>

            <LanguageStagger />
          </div>
        </div>
      </div>
    </section>
  )
}
