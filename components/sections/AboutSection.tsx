import SectionLabel    from "@/components/ui/SectionLabel"
import FadeIn          from "@/components/ui/FadeIn"
import LanguageStagger from "@/components/ui/LanguageStagger"
import SectionArrow    from "@/components/ui/SectionArrow"

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About"
      className="relative"
      style={{ background: "linear-gradient(to bottom, #F7F5F0 0%, #F1EBE3 100%)" }}
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
                Crutches, and then wings.
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={0.14}>
              <p className="mt-7 text-[15px] text-body leading-[1.85]">
                I started as a PHP and Drupal developer in Amsterdam agencies in
                2014, after studying design and printing engineering. Live webcams
                were a hobby — I could watch skylines for hours.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.20}>
              <p className="mt-4 text-[15px] text-body leading-[1.85]">
                In February 2026 I started turning that hobby into LiveCity.cam,
                learning React and Next.js as I built it — first with ChatGPT, from
                May with Claude Code. What would once have taken me months, or never
                shipped at all, went live in weeks. A year later there are four
                products in production, and I understand what sits underneath them:
                load, cache, bots, cost and search.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.26}>
              <div className="mt-10 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] shrink-0" />
                <span className="text-[12px] text-dim tracking-wide">
                  Open to full-stack roles in the Netherlands · EU citizen
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

      <SectionArrow
        targetId="contact"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      />
    </section>
  )
}
