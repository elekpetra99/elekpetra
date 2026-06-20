"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section">
      <div className="container">
        <AnimatedSection animation="fadeUp">
          <h2 className="section-title">{t.contact.title}</h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={1}>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <div>
              <p className="text-lg text-[var(--muted)] mb-8 max-w-lg">
                {t.contact.intro}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm tracking-wide uppercase text-[var(--muted)] mb-2">
                    {t.contact.email}
                  </h3>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-lg hover:text-[var(--burgundy)] transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm tracking-wide uppercase text-[var(--muted)] mb-2">
                    {t.contact.social}
                  </h3>
                  <div className="flex gap-4">
                    {["Instagram", "YouTube", "Spotify"].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-sm hover:text-[var(--burgundy)] transition-colors"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-sm tracking-wide uppercase text-[var(--muted)] mb-2"
                  >
                    {t.contact.formName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] focus:border-[var(--burgundy)] outline-none transition-colors"
                    placeholder="..."
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm tracking-wide uppercase text-[var(--muted)] mb-2"
                  >
                    {t.contact.formEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] focus:border-[var(--burgundy)] outline-none transition-colors"
                    placeholder="..."
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    className="block text-sm tracking-wide uppercase text-[var(--muted)] mb-2"
                  >
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] focus:border-[var(--burgundy)] outline-none transition-colors resize-none"
                    placeholder="..."
                  />
                </div>

                <button type="submit" className="btn-primary">
                  {t.contact.formSubmit}
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}