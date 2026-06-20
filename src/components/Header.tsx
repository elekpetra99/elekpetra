"use client";

import { useState } from "react";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";

function NavContent() {
  const { t, lang, setLang } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#repertoire", label: t.nav.repertoire },
    { href: "#media", label: t.nav.media },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <>
      <nav>
        <a href="#" className="logo">Elek Petra</a>
        
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <button 
            onClick={() => setLang(lang === "en" ? "hu" : "en")}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.875rem", fontWeight: lang === "en" ? 600 : 400, color: lang === "en" ? "var(--burgundy)" : "var(--warm-gray)" }}
          >
            EN
          </button>
          <span style={{ color: "var(--stone)" }}>/</span>
          <button 
            onClick={() => setLang(lang === "hu" ? "en" : "hu")}
            style={{ background: "none", border: "none", cursor: "pointer", fontSize: "0.875rem", fontWeight: lang === "hu" ? 600 : 400, color: lang === "hu" ? "var(--burgundy)" : "var(--warm-gray)" }}
          >
            HU
          </button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-nav mobile-open">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export function Header() {
  return (
    <LanguageProvider>
      <header>
        <NavContent />
      </header>
    </LanguageProvider>
  );
}