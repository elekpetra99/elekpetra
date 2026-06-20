"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "5rem" }}>
      <div className="container">
        <div className="hero-grid">
          {/* Text content */}
          <div className="hero-text-col hero-text-order">
            <AnimatedSection animation="fadeUp" delay={0} aboveFold>
              <p className="section-subtitle">
                {t.hero.tagline}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={1} aboveFold>
              <h1>
                <span style={{ display: "block" }}>Elek</span>
                <span style={{ display: "block", color: "var(--burgundy)" }}>Petra</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={2} aboveFold>
              <p className="lead">
                {lang === "hu" 
                  ? "A klasszikus repertoár mély értelmezése és a zenei történet mesélt megértése jellemzi fellépéseimet. A hangversenytermek intimitását és a színpadi jelenlét erőteljességét keresem minden előadásban."
                  : "With a deep commitment to the classical repertoire and a nuanced understanding of musical storytelling, I bring both intimate concert experiences and powerful stage presence to every performance."
                }
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={3} aboveFold>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "4rem" }}>
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
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", paddingTop: "2rem", borderTop: "1px solid var(--border)" }}>
                <div>
                  <div style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontFamily: "var(--font-display)", color: "var(--burgundy)", marginBottom: "0.5rem" }}>15+</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {lang === "hu" ? "Év tapasztalat" : "Years Experience"}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontFamily: "var(--font-display)", color: "var(--burgundy)", marginBottom: "0.5rem" }}>50+</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {lang === "hu" ? "Fellépés" : "Performances"}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontFamily: "var(--font-display)", color: "var(--burgundy)", marginBottom: "0.5rem" }}>12</div>
                  <div style={{ fontSize: "0.875rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {lang === "hu" ? "Ország" : "Countries"}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Portrait */}
          <div className="hero-portrait-col hero-portrait-order">
            <AnimatedSection animation="scaleIn" delay={0} aboveFold>
              <div style={{ position: "relative" }}>
                <div className="portrait-frame">
                  <img src="/portrait.jpg" alt="Elek Petra" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ position: "absolute", bottom: "-1.5rem", left: "-1.5rem", width: "6rem", height: "6rem", border: "1px solid var(--burgundy)", opacity: 0.2, pointerEvents: "none" }}></div>
                <div style={{ position: "absolute", top: "-1.5rem", right: "-1.5rem", width: "8rem", height: "8rem", border: "1px solid var(--burgundy)", opacity: 0.15, pointerEvents: "none" }}></div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}