"use client";

import { useLanguage } from "@/components/LanguageContext";

const highlights = [
  { year: "2024", event: "Solo recital at Budapest Spring Festival" },
  { year: "2023", event: "Premiere of newly commissioned work by contemporary Hungarian composer" },
  { year: "2022", event: "International debut at Vienna Musikverein" },
  { year: "2021", event: "First prize winner at the International Vocal Competition in Prague" },
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-text">
          <h2>{t.about.title}</h2>
          {t.about.bio.slice(0, 2).map((p, i) => <p key={i}>{p}</p>)}
        </div>
        
        <div className="about-highlights">
          <h3>{t.about.highlights}</h3>
          {highlights.map((h, i) => (
            <div key={i} className="highlight-item">
              <span className="highlight-year">{h.year}</span>
              <span className="highlight-text">{h.event}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}