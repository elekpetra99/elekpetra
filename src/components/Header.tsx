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
        
        {/* Desktop navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>{item.label}</a>
          ))}
          <div className="lang-switch">
            <button 
              onClick={() => setLang("en")}
              className={lang === "en" ? "active" : ""}
            >
              EN
            </button>
            <span>/</span>
            <button 
              onClick={() => setLang("hu")}
              className={lang === "hu" ? "active" : ""}
            >
              HU
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-nav ${mobileOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a 
            key={item.href} 
            href={item.href} 
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <div className="lang-switch" style={{ marginTop: "1rem", justifyContent: "center" }}>
          <button 
            onClick={() => setLang("en")}
            className={lang === "en" ? "active" : ""}
          >
            EN
          </button>
          <span>/</span>
          <button 
            onClick={() => setLang("hu")}
            className={lang === "hu" ? "active" : ""}
          >
            HU
          </button>
        </div>
      </div>
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