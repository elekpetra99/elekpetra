"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageContext";
import { useState } from "react";

export function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/98 backdrop-blur-sm border-b border-[var(--border)]">
      <nav className="container flex items-center justify-between h-16">
        <AnimatedSection animation="fadeIn" aboveFold>
          <a href="#" className="font-[family-name:var(--font-display)] text-2xl tracking-tight hover:text-[var(--burgundy)] transition-colors">
            Elek Petra
          </a>
        </AnimatedSection>

        {/* Desktop nav */}
        <AnimatedSection animation="fadeIn" delay={1} aboveFold className="hidden md:flex items-center gap-10">
          <a href="#about" className="text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
            {t.nav.about}
          </a>
          <a href="#repertoire" className="text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
            {t.nav.repertoire}
          </a>
          <a href="#media" className="text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
            {t.nav.media}
          </a>
          <a href="#contact" className="text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
            {t.nav.contact}
          </a>
          <LanguageSwitcher />
        </AnimatedSection>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:text-[var(--burgundy)] transition-colors"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--cream)] border-t border-[var(--border)]">
          <div className="container py-4 space-y-4">
            <a href="#about" onClick={() => setMenuOpen(false)} className="block text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
              {t.nav.about}
            </a>
            <a href="#repertoire" onClick={() => setMenuOpen(false)} className="block text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
              {t.nav.repertoire}
            </a>
            <a href="#media" onClick={() => setMenuOpen(false)} className="block text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
              {t.nav.media}
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
              {t.nav.contact}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}