"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--cream)]/95 backdrop-blur-sm border-b border-[var(--border)]">
      <nav className="container flex items-center justify-between h-16">
        <AnimatedSection animation="fadeIn" delay={0} aboveFold>
          <a href="#" className="font-[family-name:var(--font-display)] text-2xl tracking-tight hover:text-[var(--burgundy)] transition-colors">
            [Full Name]
          </a>
        </AnimatedSection>

        <AnimatedSection animation="fadeIn" delay={1} aboveFold className="flex items-center gap-8">
          <a href="#about" className="text-sm tracking-wide text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
            About
          </a>
          <a href="#repertoire" className="text-sm tracking-wide text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
            Repertoire
          </a>
          <a href="#media" className="text-sm tracking-wide text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
            Media
          </a>
          <a href="#contact" className="text-sm tracking-wide text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors">
            Contact
          </a>
        </AnimatedSection>
      </nav>
    </header>
  );
}