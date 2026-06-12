import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artem Axen — Web Design & Development",
  description:
    "Web design and development for small businesses, Shopify stores, and local brands. Based in Athens, Greece.",
  openGraph: {
    title: "Artem Axen — Web Design & Development",
    description:
      "Web design and development for small businesses, Shopify stores, and local brands. Based in Athens, Greece.",
    url: "https://artemaxen.com",
    siteName: "Artem Axen",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
