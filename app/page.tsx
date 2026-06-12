import Navbar          from "@/components/layout/Navbar"
import Footer          from "@/components/layout/Footer"
import FadeIn          from "@/components/ui/FadeIn"
import HeroSection     from "@/components/sections/HeroSection"
import InsightsSection from "@/components/sections/InsightsSection"
import WorkSection     from "@/components/sections/WorkSection"
import AboutSection    from "@/components/sections/AboutSection"
import ContactSection  from "@/components/sections/ContactSection"

export default function Home() {
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

      <main id="main">
        <HeroSection />

        <FadeIn direction="up" amount={0.05}>
          <InsightsSection />
        </FadeIn>

        <FadeIn direction="up" amount={0.05}>
          <div id="work">
            <WorkSection />
          </div>
        </FadeIn>

        <FadeIn direction="up" amount={0.05}>
          <AboutSection />
        </FadeIn>

        <FadeIn direction="up" amount={0.05}>
          <ContactSection />
        </FadeIn>
      </main>

      <Footer />
    </>
  )
}
