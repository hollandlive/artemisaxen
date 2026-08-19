import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import BookHero from "@/components/books/BookHero"
import ChapterList from "@/components/books/ChapterList"
import { SITE_NAME, SITE_URL } from "@/lib/metadata"
import { getChapters } from "@/lib/books"

const PAGE_URL = `${SITE_URL}/books/dont-develop`

export const metadata: Metadata = {
  title: `Don't Develop · ${SITE_NAME}`,
  description: "Don't Develop — a psychological techno-thriller by Artemis Axen. Read the full novel, chapter by chapter.",
  alternates: { canonical: PAGE_URL },
}

export default function DontDevelopPage() {
  const chapters = getChapters("ru") ?? []

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
        style={{
          backgroundColor:  "#06111e",
          backgroundImage:  "radial-gradient(ellipse at 50% 0%, #1e3a5f 0%, #0d1829 50%, #06111e 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize:   "100% 100vh",
        }}
      >
        <BookHero />

        <div className="text-center flex flex-col items-center gap-3" style={{ padding: "0 min(10vw, 100px) 48px" }}>
          <Link
            href="/books/dont-develop/ru/chapter/0"
            className="inline-block text-[13px] uppercase tracking-[0.12em] border-b pb-1 transition-colors duration-300"
            style={{ color: "#e8e6e1", borderColor: "#1e3050" }}
          >
            Read in Russian (full novel) →
          </Link>
          <Link
            href="/books/dont-develop/about"
            className="inline-block text-[13px] uppercase tracking-[0.12em] border-b pb-1 transition-colors duration-300"
            style={{ color: "#8a96aa", borderColor: "#1e3050" }}
          >
            About the book &amp; author →
          </Link>
        </div>

        <ChapterList lang="ru" chapters={chapters} />
      </main>

      <Footer />
    </>
  )
}
