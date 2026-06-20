"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-24 pb-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text content */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <AnimatedSection animation="fadeUp" delay={0} aboveFold>
              <p className="section-subtitle">
                {t.hero.tagline}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={1} aboveFold>
              <h1 className="mb-8">
                <span className="block">Elek</span>
                <span className="block text-[var(--burgundy)]">Petra</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={2} aboveFold>
              <p className="lead mb-10">
                {lang === "hu" 
                  ? "A klasszikus repertoár mély értelmezése és a zenei történet mesélt megértése jellemzi fellépéseimet. A hangversenytermek intimitását és a színpadi jelenlét erőteljességét keresem minden előadásban."
                  : "With a deep commitment to the classical repertoire and a nuanced understanding of musical storytelling, I bring both intimate concert experiences and powerful stage presence to every performance."
                }
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={3} aboveFold>
              <div className="flex flex-wrap gap-4">
                <a href="#repertoire" className="btn-primary">
                  {t.hero.ctaRepertoire}
                </a>
                <a href="#contact" className="btn-secondary">
                  {t.hero.ctaContact}
                </a>
              </div>
            </AnimatedSection>

            {/* Stats/Highlights */}
            <AnimatedSection animation="fadeUp" delay={4} aboveFold>
              <div className="mt-16 grid grid-cols-3 gap-8 pt-8 border-t border-[var(--border)]">
                <div>
                  <div className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[var(--burgundy)] mb-1">15+</div>
                  <div className="text-sm text-[var(--muted)] uppercase tracking-wide">
                    {lang === "hu" ? "Év tapasztalat" : "Years Experience"}
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[var(--burgundy)] mb-1">50+</div>
                  <div className="text-sm text-[var(--muted)] uppercase tracking-wide">
                    {lang === "hu" ? "Fellépés" : "Performances"}
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-[var(--burgundy)] mb-1">12</div>
                  <div className="text-sm text-[var(--muted)] uppercase tracking-wide">
                    {lang === "hu" ? "Ország" : "Countries"}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Portrait */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <AnimatedSection animation="scaleIn" delay={1} aboveFold>
              <div className="relative">
                <div className="portrait-frame shadow-2xl">
                  {/* Replace this div with an actual image */}
                  {/* <img src="/portrait.jpg" alt={t.hero.portraitAlt} className="w-full h-full object-cover" /> */}
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)]">
                    <span className="text-sm tracking-widest uppercase">Portrait</span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-[var(--burgundy)] opacity-30"></div>
                <div className="absolute -top-6 -right-6 w-32 h-32 border border-[var(--burgundy)] opacity-20"></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}