import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { SITE_NAME } from "@/lib/metadata"

export const metadata: Metadata = {
  title: `Legal · ${SITE_NAME}`,
  description: "Copyright notice and intellectual property rights for the works of Artemis Axen.",
}

export default function LegalPage() {
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
          <h1 className="font-serif italic text-charcoal leading-[1.1] mb-10" style={{ fontSize: "var(--text-title)" }}>
            Copyright &amp; intellectual property
          </h1>

          <div className="space-y-8 text-body text-[15px] leading-relaxed">
            <p>
              © 2026 Artemis Axen. All rights reserved.
            </p>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Ownership</h2>
              <p>
                &ldquo;DON&rsquo;T DEVELOP&rdquo; is an original novel written by Artemis Axen. The text,
                titles, characters, world, and all associated lore and creative elements
                (the &ldquo;Work&rdquo;) are the exclusive intellectual property of the author. This
                applies to every book published under the Artemis Axen name, present and future.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Prohibited uses</h2>
              <p>
                No part of the Work may be copied, reproduced, distributed, or published in any
                form without the author&rsquo;s prior written permission. This includes, without
                limitation, republishing the text elsewhere, adapting the characters or world for
                other works, and any commercial or non-commercial redistribution.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">AI &amp; text/data mining</h2>
              <p>
                The author expressly reserves all rights to the Work for the purposes of text and
                data mining, and for the training, fine-tuning, or development of any machine
                learning or artificial intelligence model. No part of the Work may be used as
                training data, ingested into a dataset, or otherwise processed by automated
                systems for such purposes without the author&rsquo;s prior written permission.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-charcoal text-lg mb-2">Permissions</h2>
              <p>
                For licensing, adaptation, translation, or any other use of the Work, use the{" "}
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
