import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { SITE_NAME } from "@/lib/metadata"

export const metadata: Metadata = {
  title: `Terms of Use · ${SITE_NAME}`,
  description: "Terms governing use of artemisaxen.com.",
}

export default function TermsPage() {
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

      <main id="main" className="bg-canvas pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted mb-3">
            Legal
          </p>
          <h1 className="font-serif italic text-charcoal leading-[1.1] mb-3" style={{ fontSize: "var(--text-title)" }}>
            Terms of Use
          </h1>
          <p className="text-[13px] text-muted mb-10">Last updated: 19 August 2026</p>

          <div className="space-y-8 text-body text-[15px] leading-relaxed">
            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Acceptance</h2>
              <p>
                By using artemisaxen.com (&ldquo;the Site&rdquo;), you agree to these Terms of
                Use. If you don&rsquo;t agree, please don&rsquo;t use the Site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Use of the Site</h2>
              <p>
                The Site and its content — including the novel Don&rsquo;t Develop, its text,
                images, and design — are provided for personal, non-commercial reading and
                browsing. See the{" "}
                <a href="/legal" className="underline underline-offset-2">
                  Legal
                </a>{" "}
                page for ownership and reuse terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">No warranty</h2>
              <p>
                The Site is provided &ldquo;as is,&rdquo; without warranties of any kind, express
                or implied. We don&rsquo;t guarantee the Site will be uninterrupted, error-free,
                or available at all times.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Limitation of liability</h2>
              <p>
                To the fullest extent permitted by law, Artemis Axen is not liable for any
                indirect, incidental, or consequential damages arising from your use of the Site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Third-party links</h2>
              <p>
                The Site may link to third-party sites (for example, YouTube or Instagram). We
                aren&rsquo;t responsible for the content or practices of sites we don&rsquo;t
                operate.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Governing law</h2>
              <p>
                These Terms are governed by the laws of Greece, without regard to conflict-of-law
                principles.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Changes</h2>
              <p>
                These Terms may be updated from time to time. Continued use of the Site after a
                change constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Contact</h2>
              <p>
                Questions about these Terms? Use the{" "}
                <a href="/#contact" className="underline underline-offset-2">
                  contact form
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
