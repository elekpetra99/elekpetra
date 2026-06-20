"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section bg-[var(--cream-dark)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <div>
            <AnimatedSection animation="fadeUp">
              <h2 className="section-title">{t.about.title}</h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={1}>
              <div className="mt-12 space-y-6 text-lg leading-relaxed">
                <p>{t.about.bio1}</p>
                <p>{t.about.bio2}</p>
                <p>{t.about.bio3}</p>
              </div>
            </AnimatedSection>
          </div>

          {/* Highlights */}
          <div>
            <AnimatedSection animation="fadeUp" delay={2}>
              <div className="space-y-8">
                <h3 className="text-lg tracking-wide uppercase text-[var(--muted)]">
                  {t.about.highlights}
                </h3>

                <div className="space-y-6">
                  {[
                    { year: "2024", text: t.about.highlight1 },
                    { year: "2023", text: t.about.highlight2 },
                    { year: "2022", text: t.about.highlight3 },
                    { year: "2021", text: t.about.highlight4 },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <span className="text-sm text-[var(--burgundy)] font-medium w-16 flex-shrink-0">
                        {item.year}
                      </span>
                      <span className="text-[var(--foreground)] group-hover:text-[var(--burgundy)] transition-colors">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}