"use client";

import { LanguageProvider, useLanguage } from "@/components/LanguageContext";
import { Header } from "@/components/Header";
import { About } from "@/components/About";
import { Repertoire } from "@/components/Repertoire";
import { Media } from "@/components/Media";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

function HeroContent() {
  const { t, lang } = useLanguage();

  const stats = [
    { num: "15+", label: lang === "hu" ? "Év tapasztalat" : "Years Experience" },
    { num: "50+", label: lang === "hu" ? "Fellépés" : "Performances" },
    { num: "12", label: lang === "hu" ? "Ország" : "Countries" },
  ];

  return (
    <section className="hero">
      <div className="hero-grid">
        {/* Image first */}
        <div className="hero-image">
          <img 
            src="/portrait.jpg" 
            alt="Elek Petra" 
            width={1024}
            height={1365}
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
            <a href="#repertoire" className="btn btn-primary">{t.hero.ctaRepertoire}</a>
            <a href="#contact" className="btn btn-secondary">{t.hero.ctaContact}</a>
          </div>
          
          <div className="stats">
            {stats.map((s, i) => (
              <div key={i}>
                <div className="stat-number">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <HeroContent />
        <About />
        <Repertoire />
        <Media />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}