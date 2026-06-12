"use client"

import { m, useReducedMotion } from "framer-motion"
import { fadeUpVariants, fadeInVariants, transitions } from "@/lib/motion"

type Props = {
  children:   React.ReactNode
  className?: string
  delay?:     number
  direction?: "up" | "none"
  amount?:    number  // viewport threshold 0–1, default 0.2
}

export default function FadeIn({
  children,
  className,
  delay   = 0,
  direction = "up",
  amount  = 0.2,
}: Props) {
  const prefersReduced = useReducedMotion()

  const variants   = prefersReduced || direction === "none"
    ? fadeInVariants
    : fadeUpVariants

  const transition = {
    ...(prefersReduced ? { duration: 0.15 } : transitions.fadeUp),
    delay: prefersReduced ? 0 : delay,
  }

  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </m.div>
  )
}
