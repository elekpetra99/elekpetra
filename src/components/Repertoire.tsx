"use client";

import { useLanguage } from "@/components/LanguageContext";

const repertoire = [
  { title: "Four Last Songs", composer: "R. Strauss" },
  { title: "Wesendonck-Lieder", composer: "R. Wagner" },
  { title: "Frauenliebe und -leben", composer: "R. Schumann" },
  { title: "Dichterliebe", composer: "R. Schumann" },
  { title: "Gymnopédies", composer: "E. Satie (arr.)" },
  { title: "Hungarian Folk Songs", composer: "B. Bartók" },
  { title: "Mélodies passagères", composer: "S. Barber" },
  { title: "Das Buch der hängenden Gärten", composer: "A. Schönberg" },
];

export function Repertoire() {
  const { t } = useLanguage();

  return (
    <section id="repertoire" className="section-alt">
      <div>
        <h2>{t.repertoire.title}</h2>
        <p style={{ marginTop: "1.5rem", marginBottom: "2rem", maxWidth: "60ch" }}>{t.repertoire.intro}</p>
        
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