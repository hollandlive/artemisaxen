import FadeIn      from "@/components/ui/FadeIn"
import ContactForm from "@/components/sections/ContactForm"

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
            Let&apos;s talk.
          </h2>
        </FadeIn>

        <FadeIn direction="up" delay={0.14}>
          <p className="mt-5 text-[14px] leading-relaxed" style={{ color: "#7B6B99" }}>
            Hiring for a full-stack role? Send a message — I reply within 24 hours.
          </p>
        </FadeIn>

        {/* ── Message form ──────────────────────────────────── */}
        <FadeIn direction="up" delay={0.20}>
          <div className="mt-14 border-t" style={{ borderColor: "rgba(120,60,100,0.10)" }}>
            <ContactForm />
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
