"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

export function Contact() {
  const { t, lang } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact info */}
          <div>
            <AnimatedSection animation="fadeUp">
              <p className="section-subtitle">{t.contact.title}</p>
              <h2>{t.contact.title}</h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={1}>
              <p className="mt-8 text-lg text-[var(--muted)] max-w-lg leading-relaxed">
                {t.contact.intro}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={2}>
              <div className="mt-12 space-y-8">
                <div className="group">
                  <h3 className="text-sm tracking-widest uppercase text-[var(--muted)] mb-3">
                    {t.contact.email}
                  </h3>
                  <a 
                    href="mailto:petra@elekpetra.hu" 
                    className="text-2xl font-[family-name:var(--font-display)] hover:text-[var(--burgundy)] transition-colors"
                  >
                    petra@elekpetra.hu
                  </a>
                </div>

                <div className="group">
                  <h3 className="text-sm tracking-widest uppercase text-[var(--muted)] mb-3">
                    {t.contact.social}
                  </h3>
                  <div className="flex gap-6">
                    {[
                      { name: "Instagram", href: "#" },
                      { name: "YouTube", href: "#" },
                      { name: "Spotify", href: "#" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="text-[var(--foreground)] hover:text-[var(--burgundy)] transition-colors tracking-wide"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="group">
                  <h3 className="text-sm tracking-widest uppercase text-[var(--muted)] mb-3">
                    {lang === "hu" ? "Menedzsment" : "Management"}
                  </h3>
                  <p className="text-[var(--foreground)]">
                    {lang === "hu"
                      ? "Koncertek és együttműködések esetén kérem lépjen kapcsolatba menedzsmentemmel."
                      : "For concerts and collaborations, please contact my management."
                    }
                  </p>
                  <a href="mailto:management@elekpetra.hu" className="text-[var(--burgundy)] hover:text-[var(--burgundy-dark)] transition-colors">
                    management@elekpetra.hu
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Contact form */}
          <div>
            <AnimatedSection animation="fadeUp" delay={2}>
              <div className="bg-[var(--cream-dark)] p-8 md:p-12 border border-[var(--border)]">
                <form className="space-y-6">
                  <div>
                    <label 
                      htmlFor="name"
                      className="block text-sm tracking-widest uppercase text-[var(--muted)] mb-3"
                    >
                      {t.contact.formName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-4 bg-[var(--cream)] border border-[var(--border)] focus:border-[var(--burgundy)] outline-none transition-colors text-lg"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="email"
                      className="block text-sm tracking-widest uppercase text-[var(--muted)] mb-3"
                    >
                      {t.contact.formEmail}
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-4 bg-[var(--cream)] border border-[var(--border)] focus:border-[var(--burgundy)] outline-none transition-colors text-lg"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="message"
                      className="block text-sm tracking-widest uppercase text-[var(--muted)] mb-3"
                    >
                      {t.contact.formMessage}
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-4 bg-[var(--cream)] border border-[var(--border)] focus:border-[var(--burgundy)] outline-none transition-colors resize-none text-lg"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    {t.contact.formSubmit}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}