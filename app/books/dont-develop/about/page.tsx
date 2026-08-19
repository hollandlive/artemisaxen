import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { SITE_NAME, SITE_URL } from "@/lib/metadata"

const PAGE_URL = `${SITE_URL}/books/dont-develop/about`

export const metadata: Metadata = {
  title: `About · Don't Develop · ${SITE_NAME}`,
  description: "About the novel Don't Develop and its author, Artemis Axen.",
  alternates: { canonical: PAGE_URL },
}

export default function AboutBookPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
                   focus:z-[100] focus:px-4 focus:py-2 focus:bg-surface
                   focus:text-charcoal focus:text-sm focus:rounded-md focus:outline-none
                   focus:shadow-lg"
      >
        Skip to content
      </a>

      <Navbar />

      <main
        id="main"
        className="min-h-[100dvh]"
        style={{
          backgroundColor:  "#06111e",
          backgroundImage:  "radial-gradient(ellipse at 50% 0%, #1e3a5f 0%, #0d1829 50%, #06111e 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize:   "100% 100vh",
        }}
      >
        <div className="max-w-[680px] mx-auto" style={{ padding: "120px 24px 100px" }}>
          <Link
            href="/books/dont-develop"
            className="block text-[13px] uppercase tracking-[0.1em] hover:opacity-70 transition-opacity"
            style={{ color: "#8a96aa" }}
          >
            ← Don&rsquo;t Develop
          </Link>

          <p className="text-[11px] uppercase tracking-[0.12em] mt-12 mb-3" style={{ color: "#c98a4b" }}>
            About
          </p>
          <h1 className="font-serif text-[32px] mb-10" style={{ color: "#e8e6e1" }}>
            The book &amp; the author
          </h1>

          <div className="space-y-8 font-serif text-[16px] leading-[1.85]" style={{ color: "#e8e6e1" }}>
            <section>
              <h2 className="text-[19px] mb-2" style={{ color: "#c98a4b" }}>Don&rsquo;t Develop</h2>
              <p>
                A psychological techno-thriller set in present-day London. The novel follows
                Michael Lawson as the line between his working life and something watching from
                inside his own screen starts to blur.
              </p>
              <p className="mt-4">
                The Russian original, &ldquo;Не проявляй,&rdquo; is complete — all 47 chapters. An
                English edition is being translated chapter by chapter, starting with the Prologue
                and Chapter 1.
              </p>
            </section>

            <section>
              <h2 className="text-[19px] mb-2" style={{ color: "#c98a4b" }}>Artemis Axen</h2>
              <p>
                Artemis Axen is a writer based in Athens, Greece, working in Russian and English.
                Don&rsquo;t Develop is their debut novel.
              </p>
            </section>

            <section>
              <p>
                <Link href="/#contact" className="underline underline-offset-2">
                  Get in touch
                </Link>{" "}
                for press, translation, or licensing inquiries.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
