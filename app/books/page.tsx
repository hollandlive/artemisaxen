import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import BooksSection from "@/components/sections/BooksSection"
import { SITE_NAME } from "@/lib/metadata"

export const metadata: Metadata = {
  title: `Books · ${SITE_NAME}`,
  description: "Don't Develop — a psychological techno-thriller by Artemis Axen.",
}

export default function BooksPage() {
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
        <BooksSection />
      </main>

      <Footer />
    </>
  )
}
