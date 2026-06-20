"use client";

import { useLanguage } from "@/components/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 border-t border-[var(--border)]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="font-[family-name:var(--font-display)] text-2xl text-[var(--foreground)]">
            Elek Petra
          </div>
          
          <div className="text-center text-[var(--muted)] text-sm">
            © {new Date().getFullYear()} Elek Petra. {t.footer.copyright}
          </div>
          
          <div className="flex justify-end gap-8 text-sm">
            <a href="#" className="text-[var(--muted)] hover:text-[var(--burgundy)] transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="text-[var(--muted)] hover:text-[var(--burgundy)] transition-colors">
              {t.footer.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}