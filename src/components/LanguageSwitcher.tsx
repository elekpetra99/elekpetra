"use client";

import { useLanguage } from "./LanguageContext";

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => setLang("en")}
        className={`transition-colors ${lang === "en" ? "text-[var(--burgundy)] font-medium" : "text-[var(--muted)] hover:text-[var(--foreground)]"}`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-[var(--border)]">/</span>
      <button
        onClick={() => setLang("hu")}
        className={`transition-colors ${lang === "hu" ? "text-[var(--burgundy)] font-medium" : "text-[var(--muted)] hover:text-[var(--foreground)]"}`}
        aria-label="Váltás magyarra"
      >
        HU
      </button>
    </div>
  );
}