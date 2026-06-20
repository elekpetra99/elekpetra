"use client";

import { useLanguage } from "@/components/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 border-t border-[var(--border)]">
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
          <div className="font-[family-name:var(--font-display)] text-lg text-[var(--foreground)]">
            Elek Petra
          </div>
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Elek Petra. {t.footer.copyright}
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--burgundy)] transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-[var(--burgundy)] transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}