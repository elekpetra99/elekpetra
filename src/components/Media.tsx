"use client";

import { useLanguage } from "@/components/LanguageContext";

const mediaItems = [
  { title: "Spring Festival Gala", location: "Budapest, Palace of Arts", year: "2024" },
  { title: "Vienna Musikverein Recital", location: "Vienna, Brahms Hall", year: "2023" },
  { title: "Contemporary Music Festival", location: "Budapest, Liszt Academy", year: "2023" },
  { title: "Opera Gala Night", location: "Prague, National Theatre", year: "2022" },
  { title: "Chamber Music Evening", location: "Salzburg, Mozarteum", year: "2022" },
  { title: "Liederabend", location: "Budapest, Vigadó", year: "2021" },
];

export function Media() {
  const { t } = useLanguage();

  return (
    <section id="media">
      <h2>{t.media.title}</h2>
      <p style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>{t.media.intro}</p>
      
      <div className="gallery-grid">
        {mediaItems.map((item, i) => (
          <div key={i} className="gallery-item" style={{ 
            position: "relative", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            background: "var(--stone)"
          }}>
            <span style={{ 
              fontSize: "0.75rem", 
              letterSpacing: "0.2em", 
              textTransform: "uppercase", 
              color: "var(--warm-gray)" 
            }}>
              [Image]
            </span>
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "1rem",
              background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
              color: "var(--cream)"
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontStyle: "italic" }}>{item.title}</div>
              <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>{item.location} · {item.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}