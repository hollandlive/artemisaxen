import FadeIn from "@/components/ui/FadeIn"
import { projects } from "@/lib/projects"

const p = projects.find((x) => x.id === "travelhub")!

const COMPASS_RADII = [168, 132, 98, 66, 38, 14]

const DESTINATIONS = [
  { label: "Athens",    cx: 248, cy: 132, opacity: 0.55 },
  { label: "Amsterdam", cx:  80, cy: 185, opacity: 0.30 },
  { label: "Lisbon",    cx: 228, cy: 258, opacity: 0.40 },
  { label: "Tokyo",     cx: 318, cy: 150, opacity: 0.22 },
]

export default function TravelHubScene() {
  return (
    <article
      className="relative overflow-hidden min-h-screen"
      style={{
        background: "linear-gradient(160deg, #1B3A5C 0%, #0F1923 60%)",
      }}
      aria-label={`Project: ${p.name}`}
    >
      <div className="relative max-w-5xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center lg:flex-row lg:items-center lg:gap-20">

        {/* ── Text column ──────────────────────────────────────── */}
        <div className="lg:w-5/12 lg:shrink-0">
          <FadeIn direction="up" delay={0}>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-travelhub-light">
              03 / {p.category}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.08}>
            <h2
              className="font-serif italic mt-4 leading-[0.95]"
              style={{ fontSize: "var(--text-title)", color: "#EFF6FF" }}
            >
              {p.name}
            </h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.14}>
            <p
              className="font-serif mt-5 leading-snug"
              style={{
                fontSize: "clamp(1.15rem, 2vw, 1.375rem)",
                color: "rgba(239,246,255,0.50)",
              }}
            >
              {p.tagline}
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.20}>
            <p
              className="mt-6 text-[14px] leading-[1.8]"
              style={{ color: "rgba(147,197,253,0.50)" }}
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
                         transition-opacity hover:opacity-60 text-travelhub-light"
              style={{
                borderBottom: "1px solid rgba(147,197,253,0.35)",
                paddingBottom: "1px",
              }}
            >
              Visit {p.name} →
            </a>
          </FadeIn>
        </div>

        {/* ── Visual column ────────────────────────────────────── */}
        <div
          className="hidden lg:flex lg:w-7/12 items-center justify-center"
          aria-hidden="true"
        >
          <CompassVisual />
        </div>
      </div>
    </article>
  )
}

function CompassVisual() {
  return (
    <div className="relative w-[400px] h-[400px]">
      <svg
        className="w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
      >
        {/* Concentric rings */}
        {COMPASS_RADII.map((r) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            stroke="rgba(147,197,253,0.12)"
            strokeWidth="1"
          />
        ))}

        {/* Axis crosshairs */}
        <line
          x1="200" y1="22" x2="200" y2="378"
          stroke="rgba(147,197,253,0.08)"
          strokeWidth="1"
        />
        <line
          x1="22" y1="200" x2="378" y2="200"
          stroke="rgba(147,197,253,0.08)"
          strokeWidth="1"
        />

        {/* 45° diagonals */}
        <line
          x1="82" y1="82" x2="318" y2="318"
          stroke="rgba(147,197,253,0.04)"
          strokeWidth="1"
        />
        <line
          x1="318" y1="82" x2="82" y2="318"
          stroke="rgba(147,197,253,0.04)"
          strokeWidth="1"
        />

        {/* Cardinal tick marks */}
        {[
          [200, 22], [200, 378], [22, 200], [378, 200],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="2.5"
            fill="rgba(147,197,253,0.35)"
          />
        ))}

        {/* Center dot */}
        <circle cx="200" cy="200" r="3" fill="rgba(147,197,253,0.70)" />
        <circle cx="200" cy="200" r="7" stroke="rgba(147,197,253,0.20)" strokeWidth="1" fill="none" />

        {/* Destination dots */}
        {DESTINATIONS.map(({ cx, cy, opacity }) => (
          <circle
            key={cx + "," + cy}
            cx={cx}
            cy={cy}
            r="2"
            fill={`rgba(147,197,253,${opacity * 0.9})`}
          />
        ))}

        {/* Destination connector lines */}
        {DESTINATIONS.map(({ cx, cy, opacity }) => (
          <line
            key={"l" + cx + "," + cy}
            x1="200"
            y1="200"
            x2={cx}
            y2={cy}
            stroke={`rgba(147,197,253,${opacity * 0.25})`}
            strokeWidth="0.75"
            strokeDasharray="3 4"
          />
        ))}
      </svg>

      {/* Destination labels — positioned over the SVG */}
      {DESTINATIONS.map(({ label, cx, cy, opacity }) => (
        <span
          key={label}
          className="absolute text-[9px] uppercase tracking-[0.18em]"
          style={{
            color: `rgba(147,197,253,${opacity})`,
            /* shift slightly so label doesn't overlap the dot */
            left: `${(cx / 400) * 100}%`,
            top:  `${(cy / 400) * 100}%`,
            transform: cx > 200
              ? "translate(6px, -50%)"
              : "translate(calc(-100% - 6px), -50%)",
          }}
        >
          {label}
        </span>
      ))}
    </div>
  )
}
