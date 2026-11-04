"use client"

import { useEffect, useRef, useState } from "react"
import { m, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { EASING } from "@/lib/motion"

/* ─── Video background ───────────────────────────────────────────
   Self-hosted ping-pong loop (seamless), portrait cut on phones.
   <source media> picks the file; the poster shows until it plays.
───────────────────────────────────────────────────────────────── */
function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-ink" aria-hidden="true">
      <picture>
        <source media="(orientation: portrait)" srcSet="/hero/hero-portrait.jpg" />
        <img
          src="/hero/hero-landscape.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source media="(orientation: portrait)" src="/hero/hero-portrait.mp4" type="video/mp4" />
        <source src="/hero/hero-landscape.mp4" type="video/mp4" />
      </video>
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
        Artemis Axen — Full-Stack Developer, Next.js &amp; TypeScript
      </h1>

      <div className="text-center max-w-5xl w-full" aria-hidden="true">
        <p
          className="font-serif italic text-charcoal leading-[1.1] mb-4"
          style={{ fontSize: "var(--text-display)" }}
        >
          I build products that scale.
        </p>
        <p
          className="font-serif italic text-body leading-[1.1]"
          style={{ fontSize: "var(--text-display)" }}
        >
          And I know what they cost.
        </p>
        <p
          className="mt-10 font-serif text-muted tracking-tight"
          style={{ fontSize: "clamp(1.125rem, 2.5vw, 1.5rem)" }}
        >
          <span className="opacity-40">— </span>
          Artemis Axen
          <span className="opacity-40"> · Full-Stack Developer</span>
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
   180vh outer container · 100dvh sticky shell.
   Headline is visible on load (staggered entrance), then fades and
   lifts away over the first ~half viewport of scroll while the dark
   overlay clears to canvas by ~1 viewport.
───────────────────────────────────────────────────────────────── */
const ENTER = { duration: 1.0, ease: EASING.editorial }

function HeroAnimated() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Page scroll in px, mapped against the viewport height
  const { scrollY } = useScroll()
  const [vh, setVh] = useState(800)
  useEffect(() => {
    const update = () => setVh(window.innerHeight)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const contentOpacity   = useTransform(scrollY, [0, vh * 0.55], [1, 0])
  const contentY         = useTransform(scrollY, [0, vh * 0.55], [0, -70])
  const overlayOpacity   = useTransform(scrollY, [vh * 0.45, vh * 0.95], [0.6, 0])
  const indicatorOpacity = useTransform(scrollY, [0, vh * 0.12], [1, 0])

  const handleScrollToWork = () => {
    document.getElementById("proof")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      className="relative h-[180vh]"
      aria-label="Hero"
    >
      <h1 className="sr-only">
        Artemis Axen — Full-Stack Developer, Next.js &amp; TypeScript
      </h1>

      {/* ── Sticky viewport shell ─────────────────────────────── */}
      <div className="sticky top-0 h-[100dvh] bg-canvas overflow-hidden">

        <VideoBackground />

        {/* Dark overlay — clears as canvas settles */}
        <m.div
          className="absolute inset-0 bg-ink z-0"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />

        {/* ── Headline ────────────────────────────────────────── */}
        <m.div
          className="absolute inset-0 z-10 flex items-center justify-center px-6 pointer-events-none"
          style={{ opacity: contentOpacity, y: contentY }}
          aria-hidden="true"
        >
          <div className="text-center w-full max-w-5xl">
            <m.p
              className="font-serif italic text-surface leading-[1.05]"
              style={{ fontSize: "var(--text-display)", textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...ENTER, delay: 0.2 }}
            >
              I build products that scale.
            </m.p>
            <m.p
              className="font-serif italic leading-[1.05] mt-2"
              style={{ fontSize: "var(--text-display)", color: "rgba(250,250,248,0.78)", textShadow: "0 2px 24px rgba(0,0,0,0.45)" }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...ENTER, delay: 0.75 }}
            >
              And I know what they cost.
            </m.p>
            <m.p
              className="mt-10 text-[12px] sm:text-[13px] uppercase tracking-[0.18em]"
              style={{ color: "rgba(250,250,248,0.70)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...ENTER, delay: 1.35 }}
            >
              Artemis Axen · Full-Stack Developer · Next.js · TypeScript · Supabase
            </m.p>
          </div>
        </m.div>

        {/* ── Scroll indicator (clickable) ────────────────────── */}
        <m.button
          onClick={handleScrollToWork}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10
                     cursor-pointer appearance-none bg-transparent border-0 p-2 -m-2"
          style={{ opacity: indicatorOpacity }}
          aria-label="Scroll to next section"
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
