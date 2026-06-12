import FadeIn    from "@/components/ui/FadeIn"
import LivePulse from "@/components/ui/LivePulse"
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
      className="relative overflow-hidden min-h-screen"
      style={{
        background: "linear-gradient(135deg, #0E2240 0%, #0C111A 100%)",
      }}
      aria-label={`Project: ${p.name}`}
    >
      <div className="relative max-w-5xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center lg:flex-row-reverse lg:items-center lg:gap-20">

        {/* ── Text column (right on desktop) ───────────────────── */}
        <div className="lg:w-5/12 lg:shrink-0">
          <FadeIn direction="up" delay={0}>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-livecity-accent">
              02 / {p.category}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.08}>
            <h2
              className="font-serif italic mt-4 leading-[0.95]"
              style={{ fontSize: "var(--text-title)", color: "#EFF9FF" }}
            >
              {p.name}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.14}>
            <p
              className="font-serif mt-5 leading-snug"
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.375rem)",
                color:    "rgba(239,249,255,0.55)",
              }}
            >
              {p.tagline}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.20}>
            <p
              className="mt-6 text-[14px] leading-[1.8]"
              style={{ color: "rgba(148,163,184,0.65)" }}
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
                         transition-opacity hover:opacity-60 text-livecity-accent"
              style={{
                borderBottom:  "1px solid rgba(0,212,255,0.35)",
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
          style={{ color: "rgba(0,212,255,0.30)" }}
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
              border:          "1px solid rgba(0,212,255,0.12)",
              backgroundColor: "rgba(0,212,255,0.03)",
            }}
          >
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-livecity-live shrink-0" />
              <span
                className="text-[9px] font-medium uppercase tracking-[0.12em] text-livecity-live"
              >
                Live
              </span>
            </div>
            <p
              className="text-[13px] font-medium leading-tight"
              style={{ color: "rgba(0,212,255,0.85)" }}
            >
              {name}
            </p>
            <p
              className="text-[10px] mt-1 tracking-[0.08em]"
              style={{ color: "rgba(0,212,255,0.28)" }}
            >
              {code}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
