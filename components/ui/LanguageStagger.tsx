"use client"

import { m, useReducedMotion } from "framer-motion"

const LANGUAGES = ["English", "Ελληνικά", "Русский", "Nederlands", "Latviešu"]

export default function LanguageStagger() {
  const reduced = useReducedMotion()

  return (
    <m.ul
      className="flex flex-col gap-3 list-none m-0 p-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden:   {},
        visible:  {
          transition: { staggerChildren: 0.11, delayChildren: 0.05 },
        },
      }}
    >
      {LANGUAGES.map((lang, i) => (
        <m.li
          key={lang}
          className="font-serif text-charcoal"
          style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.625rem)" }}
          variants={
            reduced
              ? {
                  hidden:  { opacity: 1 - i * 0.08 },
                  visible: { opacity: 1 - i * 0.08 },
                }
              : {
                  hidden:  { opacity: 0, x: -10 },
                  visible: { opacity: 1 - i * 0.08, x: 0 },
                }
          }
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0, 1] }}
        >
          {lang}
        </m.li>
      ))}
    </m.ul>
  )
}
