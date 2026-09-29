"use client";

import { useEffect } from "react";
import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Repertoire } from "@/components/Repertoire";
import { Media } from "@/components/Media";
import { Articles } from "@/components/Articles";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function HeroContent() {
  const { t, lang } = useLanguage();

  return (
    <section id="hero" tabIndex={-1} aria-label="Hero">
      <div className="hero-grid">
        {/* Image first on mobile and desktop */}
        <div className="hero-image">
          <img 
            src="/portrait.jpg?v=4" 
            alt="Elek Petra" 
            width={1600}
            height={2133}
          />
        </div>
        
        {/* Text content */}
        <div className="hero-text">
          <p className="subtitle">{t.hero.tagline}</p>
          <h1>
            <span>Elek</span>
            <span className="accent">Petra</span>
          </h1>
          <p className="lead">
            {lang === "hu" 
              ? "A klasszikus repertoár mély értelmezése és a zenei történetmesélés iránti elkötelezettséggel, minden fellépésben a hangversenytermek intimitását és a színpadi jelenlét erejét keresem."
              : "With a deep commitment to the classical repertoire and a nuanced understanding of musical storytelling, I bring both intimate concert experiences and powerful stage presence to every performance."
            }
          </p>
          
          <div className="buttons">
            <a href="#repertoire" className="btn btn-primary">{t.hero.ctaMasterclasses}</a>
            <a href="#contact" className="btn btn-secondary">{t.hero.ctaContact}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TitleManager() {
  const { lang } = useLanguage();

  // Update document title when language changes
  useEffect(() => {
    document.title = lang === "en" ? "Petra Elek — Soprano" : "Elek Petra — Szoprán";
  }, [lang]);

  return null;
}

export default function Home() {
  return (
    <LanguageProvider>
      <TitleManager />
      <Header />
      <main>
        <HeroContent />
        <About />
        <Repertoire />
        <Media />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}