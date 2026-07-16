"use client";

import { useLanguage } from "@/components/LanguageContext";

const repertoireEn = [
  { title: "Four Last Songs", composer: "R. Strauss" },
  { title: "Wesendonck-Lieder", composer: "R. Wagner" },
  { title: "Frauenliebe und -leben", composer: "R. Schumann" },
  { title: "Dichterliebe", composer: "R. Schumann" },
  { title: "Gymnopédies", composer: "E. Satie (arr.)" },
  { title: "Hungarian Folk Songs", composer: "B. Bartók" },
  { title: "Mélodies passagères", composer: "S. Barber" },
  { title: "Das Buch der hängenden Gärten", composer: "A. Schönberg" },
];

const repertoireHu = [
  { title: "Vier letzte Lieder", composer: "R. Strauss" },
  { title: "Wesendonck-Lieder", composer: "R. Wagner" },
  { title: "Frauenliebe und -leben", composer: "R. Schumann" },
  { title: "Dichterliebe", composer: "R. Schumann" },
  { title: "Gymnopédies", composer: "E. Satie (átirat)" },
  { title: "Magyar népdalok", composer: "B. Bartók" },
  { title: "Mélodies passagères", composer: "S. Barber" },
  { title: "Das Buch der hängenden Gärten", composer: "A. Schönberg" },
];

export function Repertoire() {
  const { t, lang } = useLanguage();
  const repertoire = lang === "en" ? repertoireEn : repertoireHu;

  return (
    <section id="repertoire" className="section-alt" tabIndex={-1} aria-label={t.repertoire.title}>
      <div className="repertoire-grid">
        <h2>{t.repertoire.title}</h2>
        <p className="repertoire-intro">{t.repertoire.intro}</p>
        
        <div className="repertoire-list">
          {repertoire.map((item, i) => (
            <div key={i} className="repertoire-item">
              <span className="repertoire-title">{item.title}</span>
              <span className="repertoire-composer">{item.composer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}