"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { m, AnimatePresence } from "framer-motion"
import { DURATION, EASING } from "@/lib/motion"

/* ─── Nav links ───────────────────────────────────────────────── */
const links = [
  { label: "Work",  href: "#work"    },
  { label: "About", href: "#about"   },
]

/* ─── Threshold: navbar switches from dark to light mode.
   The hero dark overlay fades between ~55–80% of its 250vh
   scroll range. At 1.4× viewport height the background is
   transitioning to warm white — safe to show the light nav.
   Refined in Phase B once the hero is live. ─────────────────── */
const DARK_THRESHOLD_VH = 1.4

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > window.innerHeight * DARK_THRESHOLD_VH)
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "transition-all duration-500",
          scrolled
            ? "bg-surface/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent",
        ].join(" ")}
      >
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className={[
              "font-serif text-[13px] tracking-tight transition-colors duration-500",
              scrolled ? "text-charcoal" : "text-surface",
            ].join(" ")}
          >
            Artemis Axen
          </Link>

          {/* Desktop navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={[
                  "text-[13px] transition-colors duration-500",
                  scrolled
                    ? "text-dim hover:text-charcoal"
                    : "text-surface/60 hover:text-surface",
                ].join(" ")}
              >
                {label}
              </a>
            ))}

            <a
              href="#contact"
              className={[
                "text-[13px] font-medium transition-all duration-500 pb-px",
                scrolled
                  ? "text-charcoal border-b border-charcoal hover:opacity-60"
                  : "text-surface border-b border-surface/40 hover:border-surface",
              ].join(" ")}
            >
              Start a project →
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center -mr-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={[
                "transition-colors duration-500",
                scrolled || mobileOpen ? "text-charcoal" : "text-surface",
              ].join(" ")}
            >
              {mobileOpen ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M2 2l14 14M16 2L2 16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M2 4.5h14M2 9h14M2 13.5h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            key="mobile-menu"
            className="fixed inset-0 z-40 bg-ink flex flex-col"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: DURATION.default,
              ease: EASING.editorial,
            }}
          >
            {/* Top bar space */}
            <div className="h-14" />

            {/* Links */}
            <nav
              className="flex flex-col justify-center flex-1 px-8 gap-8"
              aria-label="Mobile navigation"
            >
              {links.map(({ label, href }, i) => (
                <m.a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="font-serif italic text-surface/80 hover:text-surface transition-colors"
                  style={{ fontSize: "var(--text-title)" }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: DURATION.default,
                    ease: EASING.editorial,
                    delay: 0.05 * (i + 1),
                  }}
                >
                  {label}
                </m.a>
              ))}

              <m.a
                href="#contact"
                onClick={closeMenu}
                className="font-serif italic text-surface hover:opacity-70 transition-opacity"
                style={{ fontSize: "var(--text-title)" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: DURATION.default,
                  ease: EASING.editorial,
                  delay: 0.15,
                }}
              >
                Start a project →
              </m.a>
            </nav>

            {/* Bottom location */}
            <m.p
              className="px-8 pb-10 text-[11px] uppercase tracking-[0.12em] text-[#4A4845]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: DURATION.default, delay: 0.2 }}
            >
              Athens · Greece
            </m.p>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}
