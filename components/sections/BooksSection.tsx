import FadeIn from "@/components/ui/FadeIn"
import SectionLabel from "@/components/ui/SectionLabel"

export default function BooksSection() {
  return (
    <section
      className="min-h-[100dvh] flex items-center justify-center"
      style={{
        padding: "0 min(10vw, 100px)",
        background:
          "radial-gradient(ellipse at 50% 0%, #1e3a5f 0%, #0d1829 50%, #06111e 100%) fixed",
      }}
      aria-label="Books"
    >
      <div className="text-center max-w-3xl">
        <FadeIn direction="up" amount={0.3}>
          <SectionLabel light>Books</SectionLabel>
        </FadeIn>

        <FadeIn direction="up" amount={0.3} delay={0.05}>
          <h1
            className="font-serif italic text-surface leading-[1.05] mb-6"
            style={{ fontSize: "var(--text-title)" }}
          >
            Don&rsquo;t Develop
          </h1>
        </FadeIn>

        <FadeIn direction="up" amount={0.3} delay={0.1}>
          <p
            className="font-serif text-surface/60"
            style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}
          >
            Psychological techno-thriller
          </p>
        </FadeIn>

        <FadeIn direction="up" amount={0.3} delay={0.15}>
          <p className="mt-10 font-serif text-surface/40 tracking-tight text-[15px]">
            <span className="opacity-60">— </span>
            by Artemis Axen
          </p>
        </FadeIn>

        <FadeIn direction="up" amount={0.3} delay={0.2}>
          <p className="mt-16 text-[11px] font-medium uppercase tracking-[0.12em] text-surface/30">
            Coming soon
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
