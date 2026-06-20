"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageContext";
import { useState } from "react";

export function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#repertoire", label: t.nav.repertoire },
    { href: "#media", label: t.nav.media },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)] border-b border-[var(--border)]">
      <nav className="container flex items-center justify-between h-16">
        <AnimatedSection animation="fadeIn" aboveFold>
          <a href="#" className="font-[family-name:var(--font-display)] text-2xl tracking-tight hover:text-[var(--burgundy)] transition-colors">
            Elek Petra
          </a>
        </AnimatedSection>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <AnimatedSection key={item.href} animation="fadeIn" delay={i + 1} aboveFold>
              <a
                href={item.href}
                className="text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            </AnimatedSection>
          ))}
          <AnimatedSection animation="fadeIn" delay={4} aboveFold>
            <LanguageSwitcher />
          </AnimatedSection>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:text-[var(--burgundy)] transition-colors cursor-pointer"
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
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm tracking-widest uppercase text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}