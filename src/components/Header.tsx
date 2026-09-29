"use client";

import { useLanguage } from "@/components/LanguageContext";

function NavContent() {
  const { t, lang, setLang } = useLanguage();

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#repertoire", label: t.nav.masterclasses },
    { href: "#media", label: t.nav.media },
    { href: "#articles", label: t.nav.articles },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <nav>
      <a href="#" className="logo">Elek Petra</a>

      {/* Desktop navigation */}
      <div className="nav-links">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
        <div className="lang-switch">
          <button
            type="button"
            onClick={() => setLang("hu")}
            className={lang === "hu" ? "active" : ""}
          >
            HU
          </button>
          <span>/</span>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={lang === "en" ? "active" : ""}
          >
            EN
          </button>
        </div>
      </div>

      {/* Mobile: single toggle showing the other language */}
      <button
        type="button"
        className="mobile-lang-btn"
        onClick={() => setLang(lang === "hu" ? "en" : "hu")}
        aria-label={lang === "hu" ? "Switch to English" : "Váltás magyarra"}
      >
        {lang === "hu" ? "EN" : "HU"}
      </button>
    </nav>
  );
}

export function Header() {
  return (
    <header>
      <NavContent />
    </header>
  );
}