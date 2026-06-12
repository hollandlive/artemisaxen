import type { Variants, Transition } from "framer-motion"

/* ── Easing curves ──────────────────────────────────────────────── */
export const EASING = {
  editorial: [0.25, 0.1, 0, 1]   as [number, number, number, number],
  reveal:    [0.00, 0.0, 0.2, 1] as [number, number, number, number],
  ui:        [0.40, 0.0, 0.2, 1] as [number, number, number, number],
} as const

/* ── Duration scale ─────────────────────────────────────────────── */
export const DURATION = {
  quick:   0.20,
  default: 0.55,
  slow:    0.90,
  crawl:   2.20,
} as const

/* ── Shared transitions ─────────────────────────────────────────── */
export const transitions = {
  fadeUp: {
    duration: DURATION.slow,
    ease: EASING.editorial,
  } as Transition,

  reveal: {
    duration: DURATION.slow,
    ease: EASING.reveal,
  } as Transition,

  ui: {
    duration: DURATION.quick,
    ease: EASING.ui,
  } as Transition,

  staggerChild: {
    duration: DURATION.default,
    ease: EASING.reveal,
  } as Transition,
} as const

/* ── Reusable variants ──────────────────────────────────────────── */
export const fadeUpVariants: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const fadeInVariants: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
}

export const clipRevealVariants: Variants = {
  hidden:  { clipPath: "inset(8% 0 0 0)", opacity: 0 },
  visible: { clipPath: "inset(0% 0 0 0)", opacity: 1 },
}

export const staggerContainerVariants: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.10,
      delayChildren:   0.20,
    },
  },
}

export const staggerChildVariants: Variants = {
  hidden:  { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
}

/* ── Reduced-motion factory ─────────────────────────────────────── */
// Pass the result of useReducedMotion() from a component.
// Returns safe variants that omit all positional movement.
export function getReducedVariants(prefersReduced: boolean) {
  const instant: Transition = { duration: 0.15 }

  return {
    fadeUp: {
      variants:   prefersReduced ? fadeInVariants : fadeUpVariants,
      transition: prefersReduced ? instant : transitions.fadeUp,
    },
    clipReveal: {
      variants:   prefersReduced ? fadeInVariants : clipRevealVariants,
      transition: prefersReduced ? instant : transitions.reveal,
    },
    stagger: {
      containerVariants: prefersReduced
        ? fadeInVariants
        : staggerContainerVariants,
      childVariants: prefersReduced
        ? fadeInVariants
        : staggerChildVariants,
      transition: prefersReduced ? instant : transitions.staggerChild,
    },
  }
}
