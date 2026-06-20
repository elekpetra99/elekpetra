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
      <div className="media-content">
        <h2>{t.media.title}</h2>
        <p className="media-intro">{t.media.intro}</p>
        
        <div className="gallery-grid">
          {mediaItems.map((item, i) => (
            <div key={i} className="gallery-item">
              <div className="gallery-placeholder">
                <span>[Photo]</span>
              </div>
              <div className="gallery-overlay">
                <div className="gallery-title">{item.title}</div>
                <div className="gallery-meta">{item.location} · {item.year}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}