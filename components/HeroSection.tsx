import Link from "next/link";

function BrowserMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-border shadow-[0_4px_24px_rgba(0,0,0,0.07)]">
      {/* Browser chrome */}
      <div className="bg-[#EEECEA] px-4 py-3 flex items-center gap-3 border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#DEDBD5]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#DEDBD5]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#DEDBD5]" />
        </div>
        <div className="flex-1">
          <div className="bg-surface rounded px-3 py-1 text-[11px] text-muted font-mono">
            sokole.com
          </div>
        </div>
      </div>

      {/* Page preview — Sokole brand colors */}
      <div className="bg-[#F5EFE6] relative overflow-hidden" style={{ aspectRatio: "16/10" }}>
        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-[#F5EFE6] border-b border-[#E8DFD0] flex items-center px-4 gap-3 z-10">
          <div className="w-10 h-1.5 bg-[#2A1209] rounded-sm" />
          <div className="flex-1" />
          <div className="w-5 h-1 bg-[#2A1209]/30 rounded-sm" />
          <div className="w-5 h-1 bg-[#2A1209]/30 rounded-sm" />
          <div className="w-10 h-4 bg-[#2A1209] rounded-sm" />
        </div>

        {/* Hero */}
        <div className="absolute top-7 left-0 right-0 bottom-[30%] bg-[#2A1209] flex flex-col items-center justify-center gap-2">
          <div className="w-20 h-1 bg-[#C9A84C]/50 rounded" />
          <div className="w-32 h-2.5 bg-[#F5EFE6]/85 rounded" />
          <div className="w-20 h-1 bg-[#F5EFE6]/40 rounded mt-0.5" />
          <div className="mt-2 w-14 h-4 bg-[#C9A84C] rounded-sm" />
        </div>

        {/* Product row */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-[#F5EFE6] px-4 flex items-center gap-2">
          <div className="flex-1 h-[85%] bg-[#EDD5CA] rounded" />
          <div className="flex-1 h-[85%] bg-[#D4B896] rounded" />
          <div className="flex-1 h-[85%] bg-[#EDD5CA] rounded" />
          <div className="flex-1 h-[85%] bg-[#C4837A]/40 rounded" />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-14 md:gap-10 items-center">
        {/* Copy */}
        <div className="order-2 md:order-1">
          <p className="text-xs uppercase tracking-widest text-muted mb-6 font-medium">
            Web Design &amp; Development
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15] text-ink mb-6">
            Build a website that works for your business.
          </h1>
          <p className="text-base text-dim leading-relaxed mb-8 max-w-md">
            I design and build Shopify stores, custom websites, and digital
            presences for small businesses — in Greece and beyond.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="text-sm font-medium text-ink border border-ink px-5 py-2.5 rounded-md hover:bg-ink hover:text-surface transition-colors"
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-surface bg-ink px-5 py-2.5 rounded-md hover:bg-body transition-colors"
            >
              Let&apos;s Talk →
            </a>
          </div>
          <p className="text-xs text-muted mt-6">
            Based in Athens · Available for new projects
          </p>
        </div>

        {/* Browser mockup */}
        <div className="order-1 md:order-2">
          <BrowserMockup />
        </div>
      </div>
    </section>
  );
}
