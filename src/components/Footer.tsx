"use client";

import { useLanguage } from "./LanguageContext";

export function Footer() {
  const { lang } = useLanguage();

  return (
    <footer>
      <div className="footer-grid">
        <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem" }}>
          Elek Petra
        </div>
        <div style={{ fontSize: "0.875rem", color: "var(--warm-gray)", textAlign: "center" }}>
          © {new Date().getFullYear()} Elek Petra.{" "}
          {lang === "en" ? "All rights reserved." : "Minden jog fenntartva."}
        </div>
      </div>
    </footer>
  );
}