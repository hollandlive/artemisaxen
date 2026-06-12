import FadeIn      from "@/components/ui/FadeIn"
import { CONTACT } from "@/lib/metadata"

const LINKS: { channel: string; display: string; href: string; external?: boolean }[] = [
  {
    channel: "Email",
    display: CONTACT.email,
    href:    `mailto:${CONTACT.email}`,
  },
  {
    channel:  "Instagram",
    display:  `@${CONTACT.instagram.split("/").pop()}`,
    href:     CONTACT.instagram,
    external: true,
  },
  {
    channel:  "WhatsApp",
    display:  "Message on WhatsApp",
    href:     CONTACT.whatsapp,
    external: true,
  },
]

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      style={{
        background: "linear-gradient(160deg, #F5F0FF 0%, #FFF0E8 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32">

        <FadeIn direction="none">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: "#7B6B99" }}>
            Get in touch
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.06}>
          <h2
            className="font-serif italic mt-6 leading-[1.0]"
            style={{ fontSize: "var(--text-title)", color: "#2D1A2A" }}
          >
            Let&apos;s build something.
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.14}>
          <p className="mt-5 text-[14px] leading-relaxed" style={{ color: "#7B6B99" }}>
            Available for new projects. Response within 24 hours.
          </p>
        </FadeIn>

        {/* ── Contact links ──────────────────────────────────── */}
        <ul className="mt-14 list-none m-0 p-0" role="list">
          {LINKS.map(({ channel, display, href, external }, i) => (
            <li
              key={channel}
              className="border-t first:border-t-0"
              style={{ borderColor: "rgba(120,60,100,0.10)" }}
            >
              <FadeIn direction="up" delay={0.20 + i * 0.08}>
                <a
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-center justify-between py-6
                             transition-opacity hover:opacity-60"
                  aria-label={`${channel}: ${display}`}
                >
                  <span className="flex flex-col sm:flex-row sm:items-baseline sm:gap-5">
                    <span
                      className="text-[11px] font-medium uppercase tracking-[0.14em]"
                      style={{ color: "#7B6B99" }}
                    >
                      {channel}
                    </span>
                    <span
                      className="font-serif italic mt-1 sm:mt-0"
                      style={{
                        fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                        color:    "#2D1A2A",
                      }}
                    >
                      {display}
                    </span>
                  </span>
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    style={{ color: "#7B6B99" }}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
