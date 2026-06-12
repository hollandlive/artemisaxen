import FadeIn       from "@/components/ui/FadeIn"
import LivePulse    from "@/components/ui/LivePulse"
import SectionArrow from "@/components/ui/SectionArrow"
import { projects } from "@/lib/projects"

const p = projects.find((x) => x.id === "livecity")!

const CITIES = [
  { name: "Athens",    code: "GR" },
  { name: "Amsterdam", code: "NL" },
  { name: "Lisbon",    code: "PT" },
  { name: "Tokyo",     code: "JP" },
  { name: "Barcelona", code: "ES" },
  { name: "New York",  code: "US" },
]

export default function LiveCityScene() {
  return (
    <article
      id="livecity"
      className="relative overflow-hidden min-h-screen"
      style={{
        background: "linear-gradient(135deg, #EEF2FF 0%, #E4ECFF 100%)",
      }}
      aria-label={`Project: ${p.name}`}
    >
      <div className="relative max-w-5xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center lg:flex-row-reverse lg:items-center lg:gap-20">

        {/* ── Text column (right on desktop) ───────────────────── */}
        <div className="lg:w-5/12 lg:shrink-0">
          <FadeIn direction="up" delay={0}>
            <p
              className="text-[11px] font-medium uppercase tracking-[0.14em]"
              style={{ color: "#3B5BDB" }}
            >
              02 / {p.category}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.08}>
            <h2
              className="font-serif italic mt-4 leading-[0.95]"
              style={{ fontSize: "var(--text-title)", color: "#1A2D6B" }}
            >
              {p.name}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.14}>
            <p
              className="font-serif mt-5 leading-snug"
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.375rem)",
                color:    "rgba(26,45,107,0.65)",
              }}
            >
              {p.tagline}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.20}>
            <p
              className="mt-6 text-[14px] leading-[1.8]"
              style={{ color: "rgba(51,75,147,0.65)" }}
            >
              {p.what}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.26}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-8 text-[13px] font-medium
                         transition-opacity hover:opacity-60"
              style={{
                color:         "#3B5BDB",
                borderBottom:  "1px solid rgba(59,91,219,0.35)",
                paddingBottom: "1px",
              }}
            >
              Visit {p.name} →
            </a>
          </FadeIn>
        </div>

        {/* ── Visual column (left on desktop) ──────────────────── */}
        <div
          className="hidden lg:flex lg:w-7/12 items-center justify-center"
          aria-hidden="true"
        >
          <LiveCityVisual />
        </div>
      </div>

      <SectionArrow
        targetId="travelhub"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      />
    </article>
  )
}

function LiveCityVisual() {
  return (
    <div className="w-full max-w-[420px]">

      {/* Header row */}
      <div className="flex items-center justify-between mb-5">
        <LivePulse />
        <span
          className="text-[10px] uppercase tracking-[0.14em]"
          style={{ color: "rgba(26,45,107,0.40)" }}
        >
          12 languages · live now
        </span>
      </div>

      {/* Camera grid */}
      <div className="grid grid-cols-3 gap-2">
        {CITIES.map(({ name, code }) => (
          <div
            key={name}
            className="p-4"
            style={{
              border:          "1px solid rgba(59,91,219,0.15)",
              backgroundColor: "rgba(59,91,219,0.04)",
            }}
          >
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-livecity-live shrink-0" />
              <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-livecity-live">
                Live
              </span>
            </div>
            <p
              className="text-[13px] font-medium leading-tight"
              style={{ color: "rgba(26,45,107,0.85)" }}
            >
              {name}
            </p>
            <p
              className="text-[10px] mt-1 tracking-[0.08em]"
              style={{ color: "rgba(26,45,107,0.30)" }}
            >
              {code}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
