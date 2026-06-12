import type { Metadata } from "next"
import { Inter, Fraunces } from "next/font/google"
import MotionProvider from "@/components/layout/MotionProvider"
import { META, SITE_URL, STRUCTURED_DATA } from "@/lib/metadata"
import "./globals.css"

/* ── Fonts ────────────────────────────────────────────────────── */
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets:  ["latin"],
  axes:     ["opsz"],
  weight:   "variable",
  style:    ["normal", "italic"],
  display:  "swap",
  preload:  true,
})

const inter = Inter({
  variable: "--font-inter",
  subsets:  ["latin"],
  weight:   ["400", "500"],
  display:  "swap",
  preload:  false,
})

/* ── Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title:        META.title,
  description:  META.description,
  robots: {
    index:  true,
    follow: true,
  },
  openGraph: {
    title:     META.ogTitle,
    description: META.description,
    url:       SITE_URL,
    siteName:  "Artemis Axen",
    locale:    "en_US",
    type:      "website",
  },
  twitter: {
    card:        META.twitterCard,
    title:       META.ogTitle,
    description: META.description,
  },
}

/* ── Root layout ──────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  )
}
