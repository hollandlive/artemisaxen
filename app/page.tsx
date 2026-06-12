import Navbar           from "@/components/layout/Navbar"
import Footer           from "@/components/layout/Footer"
import HeroSection      from "@/components/sections/HeroSection"
import InsightsSection  from "@/components/sections/InsightsSection"
import WorkSection      from "@/components/sections/WorkSection"
import AboutSection     from "@/components/sections/AboutSection"
import ContactSection   from "@/components/sections/ContactSection"

/*
 * Sections are replaced phase by phase:
 *   Phase B ✓ HeroSection
 *   Phase C ✓ WorkSection
 *   Phase D ✓ AboutSection, ContactSection
 */

export default function Home() {
  return (
    <>
      {/* Skip to content — accessibility */}
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

      <main id="main">
        <HeroSection />
        <InsightsSection />

        <div id="work">
          <WorkSection />
        </div>

        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
