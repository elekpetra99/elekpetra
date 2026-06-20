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
      <h2>{t.about.title}</h2>
      {t.about.bio.map((p, i) => <p key={i}>{p}</p>)}
      
      <h3 style={{ marginTop: "2rem", fontSize: "0.875rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--warm-gray)" }}>
        {t.about.highlights}
      </h3>
      
      <div style={{ marginTop: "1.5rem" }}>
        {highlights.map((h, i) => (
          <div key={i} style={{ padding: "1rem 0", borderLeft: "2px solid var(--stone)", paddingLeft: "1rem", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.875rem", color: "var(--burgundy)", fontWeight: 500 }}>{h.year}</span>
            <span style={{ display: "block", marginTop: "0.25rem" }}>{h.event}</span>
          </div>
        ))}
      </div>
    </section>
  );
}