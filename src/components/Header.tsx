"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageContext";
import { useState, useEffect } from "react";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[var(--cream)]/98 backdrop-blur-md shadow-sm py-4' 
        : 'bg-transparent py-6'
    }`}>
      <nav className="container flex items-center justify-between">
        <AnimatedSection animation="fadeIn" delay={0} aboveFold>
          <a href="#" className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-tight hover:text-[var(--burgundy)] transition-colors">
            Elek Petra
          </a>
        </AnimatedSection>

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
        </AnimatedSection>

        <div className="flex items-center gap-6">
          <LanguageSwitcher />
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}