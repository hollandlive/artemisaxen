import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { SITE_NAME } from "@/lib/metadata"

export const metadata: Metadata = {
  title: `Privacy Policy · ${SITE_NAME}`,
  description: "How Artemis Axen collects, uses, and protects visitor data on this site.",
}

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-[13px] text-muted mb-10">Last updated: 19 August 2026</p>

          <div className="space-y-8 text-body text-[15px] leading-relaxed">
            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Overview</h2>
              <p>
                This Privacy Policy explains what information artemisaxen.com (&ldquo;the
                Site&rdquo;) collects from visitors, why, and how it&rsquo;s used. The Site is
                operated by Artemis Axen, based in Athens, Greece.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Information we collect</h2>
              <p>
                <strong>Contact form.</strong> When you submit the contact form, we collect the
                name, email address, and message you provide. This information is used solely to
                respond to your message and is not sold, rented, or shared with third parties for
                marketing purposes.
              </p>
              <p className="mt-3">
                <strong>Analytics.</strong> Like most websites, we use Google Analytics to
                understand how visitors use the Site (pages viewed, general location, device
                type). This data is aggregated and does not directly identify you.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Cookies</h2>
              <p>
                The Site uses cookies set by Google Analytics to distinguish visitors and measure
                site usage. You can control or delete cookies through your browser settings; doing
                so may affect how the Site displays but won&rsquo;t prevent you from reading it.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Advertising</h2>
              <p>
                The Site may display advertisements served by Google AdSense. Third-party vendors,
                including Google, use cookies to serve ads based on a user&rsquo;s prior visits to
                this Site or other websites. Google&rsquo;s use of advertising cookies enables it
                and its partners to serve ads based on your visits to this and other sites on the
                Internet. You may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://adssettings.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  Google Ads Settings
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Third-party services</h2>
              <p>
                The Site is hosted on Vercel and uses Vercel Blob to serve images, Resend to
                deliver contact-form messages, and Google Analytics for usage statistics. Each of
                these providers processes data under its own privacy policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Your rights</h2>
              <p>
                If you are in the EU/EEA, you have the right to request access to, correction of,
                or deletion of any personal data we hold about you (for example, a contact-form
                submission). To exercise these rights, use the{" "}
                <a href="/#contact" className="underline underline-offset-2">
                  contact form
                </a>.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Children&rsquo;s privacy</h2>
              <p>
                The Site is not directed at children under 13, and we do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Changes to this policy</h2>
              <p>
                This policy may be updated from time to time. Material changes will be reflected
                by updating the date at the top of this page.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
