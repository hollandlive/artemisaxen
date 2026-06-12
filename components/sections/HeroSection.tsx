"use client"

import { useRef } from "react"
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion"

const YT_ID = "mkgiWK2GoOg"

/* ─── YouTube background ─────────────────────────────────────────
   Covers the sticky viewport regardless of aspect ratio.
   pointerEvents none so scroll still works through it.
───────────────────────────────────────────────────────────────── */
function YouTubeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-ink" aria-hidden="true">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_ID}&controls=0&disablekb=1&fs=0&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1`}
        style={{
          position:   "absolute",
          top:        "50%",
          left:       "50%",
          width:      "177.78vh",  /* 16:9 at full height */
          minWidth:   "100%",
          height:     "100vh",
          minHeight:  "56.25vw",   /* 16:9 at full width */
          transform:  "translate(-50%, -50%)",
          border:     "none",
          pointerEvents: "none",
        }}
        allow="autoplay; encrypted-media"
        title="Background video"
      />
    </div>
  )
}

/* ─── Reduced-motion variant ─────────────────────────────────────
   All copy visible immediately, warm white background, no animation.
───────────────────────────────────────────────────────────────── */
function HeroStatic() {
  return (
    <section
      className="min-h-[100dvh] bg-canvas flex items-center justify-center px-6"
      aria-label="Hero"
    >
      <h1 className="sr-only">
        Artemis Axen — Web Design &amp; Development, Athens
      </h1>

      <div className="text-center max-w-5xl w-full" aria-hidden="true">
        <p
          className="font-serif italic text-charcoal leading-[1.1] mb-4"
          style={{ fontSize: "var(--text-display)" }}
        >
          Design is the argument.
        </p>
        <p
          className="font-serif italic text-body leading-[1.1]"
          style={{ fontSize: "var(--text-display)" }}
        >
          Development is the proof.
        </p>
        <p
          className="mt-10 font-serif text-muted tracking-tight"
          style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
        >
          <span className="opacity-40">— </span>
          Artemis Axen
          <span className="opacity-40"> · Athens</span>
        </p>
      </div>
    </section>
  )
}

/* ─── Scroll indicator ───────────────────────────────────────────
   Rendered inside a button — scrolls to #work on click.
───────────────────────────────────────────────────────────────── */
function ScrollIndicator() {
  return (
    <svg width="18" height="26" viewBox="0 0 18 26" fill="none" aria-hidden="true">
      <line
        x1="9" y1="2" x2="9" y2="20"
        stroke="white" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.45"
      />
      <path
        d="M3 14l6 7 6-7"
        stroke="white" strokeWidth="1"
        strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.45"
      />
    </svg>
  )
}

/* ─── Animated hero ──────────────────────────────────────────────
   250vh outer container · 100dvh sticky shell.
   YouTube video visible at 35% through the dark overlay.
───────────────────────────────────────────────────────────────── */
function HeroAnimated() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target:  containerRef,
    offset:  ["start start", "end start"],
  })

  /* Overlay: starts at 0.65 so video is visible, fades out at 55–80% */
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0.55, 0.80],
    [0.65, 0],
  )

  const indicatorOpacity = useTransform(
    scrollYProgress,
    [0, 0.04, 0.10],
    [1, 1, 0],
  )

  const line1Opacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.22, 0.30],
    [0, 1,    1,    0],
  )
  const line1Y = useTransform(scrollYProgress, [0, 0.08], [28, 0])

  const line2Opacity = useTransform(
    scrollYProgress,
    [0.26, 0.34, 0.48, 0.56],
    [0,    1,    1,    0],
  )
  const line2Y = useTransform(scrollYProgress, [0.26, 0.34], [28, 0])

  const nameOpacity = useTransform(scrollYProgress, [0.52, 0.64], [0, 1])
  const nameY       = useTransform(scrollYProgress, [0.52, 0.64], [18, 0])

  const nameColor = useTransform(
    scrollYProgress,
    [0.55, 0.85],
    ["rgba(250,250,248,0.65)", "rgba(107,105,99,0.90)"],
  )

  const handleScrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      className="relative h-[250vh]"
      aria-label="Hero"
    >
      <h1 className="sr-only">
        Artemis Axen — Web Design &amp; Development, Athens
      </h1>

      {/* ── Sticky viewport shell ─────────────────────────────── */}
      <div className="sticky top-0 h-[100dvh] bg-canvas overflow-hidden">

        {/* Cinematic video background */}
        <YouTubeBackground />

        {/* Dark overlay — fades as canvas settles */}
        <m.div
          className="absolute inset-0 bg-ink z-0"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />

        {/* ── Line 1 ──────────────────────────────────────────── */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none"
          aria-hidden="true"
        >
          <m.p
            className="font-serif italic text-surface text-center w-full max-w-5xl leading-[1.1]"
            style={{
              fontSize: "var(--text-display)",
              opacity:  line1Opacity,
              y:        line1Y,
            }}
          >
            Design is the argument.
          </m.p>
        </div>

        {/* ── Line 2 ──────────────────────────────────────────── */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none"
          aria-hidden="true"
        >
          <m.p
            className="font-serif italic text-surface text-center w-full max-w-5xl leading-[1.1]"
            style={{
              fontSize: "var(--text-display)",
              opacity:  line2Opacity,
              y:        line2Y,
            }}
          >
            Development is the proof.
          </m.p>
        </div>

        {/* ── Name + location ─────────────────────────────────── */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none"
          aria-hidden="true"
        >
          <m.div
            className="text-center"
            style={{ opacity: nameOpacity, y: nameY }}
          >
            <m.p
              className="font-serif tracking-tight"
              style={{
                fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)",
                color:    nameColor,
              }}
            >
              — Artemis Axen · Athens
            </m.p>
          </m.div>
        </div>

        {/* ── Scroll indicator (clickable) ────────────────────── */}
        <m.button
          onClick={handleScrollToWork}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                     cursor-pointer appearance-none bg-transparent border-0 p-2 -m-2"
          style={{ opacity: indicatorOpacity }}
          aria-label="Scroll to work section"
        >
          <ScrollIndicator />
        </m.button>

      </div>
    </section>
  )
}

/* ─── Default export ─────────────────────────────────────────────
   Bails to the static version when prefers-reduced-motion is set.
───────────────────────────────────────────────────────────────── */
export default function HeroSection() {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) return <HeroStatic />
  return <HeroAnimated />
}
