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
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "var(--cream)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          maxWidth: "var(--content-width)",
          margin: "0 auto",
          padding: "0 clamp(1.5rem, 4vw, 3rem)",
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem",
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            textDecoration: "none",
          }}
        >
          Elek Petra
        </a>

        {/* Desktop nav */}
        <div style={{ display: "none" }} className="md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: "0.875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--foreground)",
                textDecoration: "none",
                marginLeft: "2rem",
                transition: "color 0.3s ease",
              }}
            >
              {item.label}
            </a>
          ))}
          <div style={{ marginLeft: "2rem" }}>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile menu */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              padding: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Menu"
          >
            <svg style={{ width: "1.5rem", height: "1.5rem" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "var(--cream)",
            borderTop: "1px solid var(--border)",
            padding: "1rem clamp(1.5rem, 4vw, 3rem)",
          }}
          className="md:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontSize: "0.875rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--foreground)",
                textDecoration: "none",
                padding: "0.75rem 0",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}