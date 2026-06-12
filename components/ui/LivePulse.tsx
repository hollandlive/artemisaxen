"use client"

import { m } from "framer-motion"

export default function LivePulse() {
  return (
    <span className="inline-flex items-center gap-2" aria-label="Live">
      <m.span
        className="block w-1.5 h-1.5 rounded-full bg-livecity-live"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{
          duration: 2.4,
          repeat:   Infinity,
          ease:     "easeInOut",
        }}
        aria-hidden="true"
      />
      <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-livecity-live">
        Live
      </span>
    </span>
  )
}
