import FadeIn    from "@/components/ui/FadeIn"
import LivePulse from "@/components/ui/LivePulse"
import { projects } from "@/lib/projects"

const p = projects.find((x) => x.id === "livecity")!

/* Skyline polygon — 480×160 viewBox, buildings from x=0 to x=480 */
const SKYLINE_PATH =
  "M0,160 L0,95 " +
  "L40,95 L40,75 L62,75 L62,88 L92,88 L92,62 L112,62 L112,78 " +
  "L144,78 L144,48 L170,48 L170,35 L204,35 L204,20 " +
  "L226,20 L226,30 L254,30 L254,42 L274,42 L274,58 " +
  "L306,58 L306,42 L330,42 L330,64 L360,64 L360,78 " +
  "L382,78 L382,70 L410,70 L410,86 L430,86 L430,80 " +
  "L460,80 L460,92 L480,92 L480,160 Z"

export default function LiveCityScene() {
  return (
    <article
      className="relative overflow-hidden min-h-screen bg-livecity-bg"
      aria-label={`Project: ${p.name}`}
    >
      <div className="relative max-w-5xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center lg:flex-row-reverse lg:items-center lg:gap-20">

        {/* ── Text column (right on desktop via flex-row-reverse) ─ */}
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
                color: "rgba(239,249,255,0.55)",
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
                borderBottom: "1px solid rgba(0,212,255,0.35)",
                paddingBottom: "1px",
              }}
            >
              Visit {p.name} →
            </a>
          </FadeIn>
        </div>

        {/* ── Visual column (left on desktop) ─────────────────── */}
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
    <div className="relative w-full max-w-[460px] h-[400px]">

      {/* Camera viewfinder corners */}
      {(["tl", "tr", "bl", "br"] as const).map((pos) => (
        <div
          key={pos}
          className="absolute w-10 h-10"
          style={{
            top:    pos.startsWith("t") ? 0 : "auto",
            bottom: pos.startsWith("b") ? 0 : "auto",
            left:   pos.endsWith("l")   ? 0 : "auto",
            right:  pos.endsWith("r")   ? 0 : "auto",
            borderTop:    pos.startsWith("t") ? "1.5px solid rgba(0,212,255,0.22)" : "none",
            borderBottom: pos.startsWith("b") ? "1.5px solid rgba(0,212,255,0.22)" : "none",
            borderLeft:   pos.endsWith("l")   ? "1.5px solid rgba(0,212,255,0.22)" : "none",
            borderRight:  pos.endsWith("r")   ? "1.5px solid rgba(0,212,255,0.22)" : "none",
          }}
        />
      ))}

      {/* LIVE badge */}
      <div className="absolute top-6 left-6">
        <LivePulse />
      </div>

      {/* Scan line */}
      <div
        className="absolute left-10 right-10"
        style={{
          top: "38%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(0,212,255,0.35) 20%, rgba(0,212,255,0.35) 80%, transparent)",
        }}
      />

      {/* City skyline */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 480 160"
        fill="none"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          d={SKYLINE_PATH}
          fill="rgba(0,212,255,0.07)"
          stroke="rgba(0,212,255,0.22)"
          strokeWidth="0.75"
          strokeLinejoin="miter"
        />

        {/* Window lights */}
        {[
          [48, 78], [52, 86], [96, 66], [155, 52], [174, 40],
          [208, 25], [213, 33], [232, 35], [258, 46], [312, 47],
          [390, 74], [436, 84],
        ].map(([x, y], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width="3"
            height="3"
            fill="rgba(0,212,255,0.55)"
          />
        ))}

        {/* Ground line */}
        <line
          x1="0" y1="159.5" x2="480" y2="159.5"
          stroke="rgba(0,212,255,0.25)"
          strokeWidth="0.75"
        />
      </svg>

      {/* Timestamp */}
      <div
        className="absolute bottom-4 right-3"
        style={{
          fontFamily: "monospace",
          fontSize: "9px",
          color: "rgba(0,212,255,0.25)",
          letterSpacing: "0.08em",
        }}
      >
        REC · 00:00:00
      </div>
    </div>
  )
}
