"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-canvas/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-ink text-sm font-medium tracking-tight">
          Artem Axen
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#work"
            className="text-sm text-dim hover:text-ink transition-colors"
          >
            Work
          </a>
          <a
            href="#about"
            className="text-sm text-dim hover:text-ink transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-surface bg-ink hover:bg-body px-4 py-1.5 rounded-md transition-colors"
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ink w-8 h-8 flex items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-5 flex flex-col gap-5">
          <a href="#work" className="text-sm text-body" onClick={() => setOpen(false)}>
            Work
          </a>
          <a href="#about" className="text-sm text-body" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#contact" className="text-sm font-medium text-ink" onClick={() => setOpen(false)}>
            Let&apos;s talk →
          </a>
        </div>
      )}
    </nav>
  );
}
