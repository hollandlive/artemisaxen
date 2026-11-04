import Navbar            from "@/components/layout/Navbar"
import Footer            from "@/components/layout/Footer"
import FadeIn            from "@/components/ui/FadeIn"
import HeroSection       from "@/components/sections/HeroSection"
import ProofSection      from "@/components/sections/ProofSection"
import NotesSection      from "@/components/sections/NotesSection"
import ExperienceSection from "@/components/sections/ExperienceSection"
import StackSection      from "@/components/sections/StackSection"
import WorkSection       from "@/components/sections/WorkSection"
import AboutSection      from "@/components/sections/AboutSection"
import ContactSection    from "@/components/sections/ContactSection"

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

        <ProofSection />

        <FadeIn direction="up" amount={0.05}>
          <div id="work">
            <WorkSection />
          </div>
        </FadeIn>

        <NotesSection />

        <ExperienceSection />

        <StackSection />

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
