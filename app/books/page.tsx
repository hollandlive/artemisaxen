import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import FadeIn from "@/components/ui/FadeIn"
import SectionLabel from "@/components/ui/SectionLabel"
import { SITE_NAME, SITE_URL } from "@/lib/metadata"

export const metadata: Metadata = {
  title: `Books · ${SITE_NAME}`,
  description: "Novels by Artemis Axen.",
  alternates: { canonical: `${SITE_URL}/books` },
}

const books = [
  {
    slug:   "dont-develop",
    title:  "Don't Develop",
    genre:  "Psychological techno-thriller",
  },
]

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

      <main
        id="main"
        className="min-h-[100dvh] flex items-center justify-center"
        style={{
          padding:          "0 min(10vw, 100px)",
          backgroundColor:  "#06111e",
          backgroundImage:  "radial-gradient(ellipse at 50% 0%, #1e3a5f 0%, #0d1829 50%, #06111e 100%)",
          backgroundRepeat: "no-repeat",
          backgroundSize:   "100% 100vh",
        }}
      >
        <div className="w-full max-w-2xl">
          <FadeIn direction="up" amount={0.3}>
            <SectionLabel light className="text-center">Books</SectionLabel>
          </FadeIn>

          <ul className="mt-6">
            {books.map((book, i) => (
              <FadeIn key={book.slug} direction="up" amount={0.3} delay={0.05 * (i + 1)}>
                <li style={{ borderColor: "#1e3050" }} className="border-b">
                  <Link
                    href={`/books/${book.slug}`}
                    className="block py-8 text-center group"
                  >
                    <span
                      className="block font-serif italic leading-[1.05] mb-2 group-hover:opacity-70 transition-opacity"
                      style={{ fontSize: "var(--text-title)", color: "#f0ebe2" }}
                    >
                      {book.title}
                    </span>
                    <span className="text-[15px]" style={{ color: "#8a96aa" }}>
                      {book.genre}
                    </span>
                  </Link>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  )
}
