"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

interface MediaItem {
  titleEn: string;
  titleHu: string;
  venueEn: string;
  venueHu: string;
  year: string;
}

const mediaItems: MediaItem[] = [
  { 
    titleEn: "Spring Festival Gala", 
    titleHu: "Tavaszi Fesztivál Gála", 
    venueEn: "Budapest, Palace of Arts",
    venueHu: "Budapest, Müpa",
    year: "2024" 
  },
  { 
    titleEn: "Vienna Musikverein Recital", 
    titleHu: "Bécsi Musikverein Recital", 
    venueEn: "Vienna, Brahms Hall",
    venueHu: "Bécs, Brahms Terem",
    year: "2023" 
  },
  { 
    titleEn: "Contemporary Music Festival", 
    titleHu: "Kortárs Zenei Fesztivál", 
    venueEn: "Budapest, Liszt Academy",
    venueHu: "Budapest, Zeneakadémia",
    year: "2023" 
  },
  { 
    titleEn: "Opera Gala Night", 
    titleHu: "Opera Gála Est", 
    venueEn: "Prague, National Theatre",
    venueHu: "Prága, Nemzeti Színház",
    year: "2022" 
  },
  { 
    titleEn: "Chamber Music Evening", 
    titleHu: "Kamarazene Est", 
    venueEn: "Salzburg, Mozarteum",
    venueHu: "Salzburg, Mozarteum",
    year: "2022" 
  },
  { 
    titleEn: "Liederabend", 
    titleHu: "Dalest", 
    venueEn: "Budapest, Vigadó",
    venueHu: "Budapest, Vigadó",
    year: "2021" 
  },
];

export function Media() {
  const { t, lang } = useLanguage();

  return (
    <section id="media" className="section bg-[var(--cream-dark)]">
      <div className="container">
        <AnimatedSection animation="fadeUp">
          <p className="section-subtitle">{t.media.title}</p>
          <h2>{t.media.title}</h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={1}>
          <p className="mt-8 mb-12 text-lg text-[var(--muted)] max-w-2xl">
            {t.media.intro}
          </p>
        </AnimatedSection>

        <div className="gallery-grid mt-12">
          {mediaItems.map((item, i) => (
            <AnimatedSection key={i} animation="scaleIn" delay={i % 3 + 2}>
              <div className="gallery-item group cursor-pointer">
                {/* Replace with actual images */}
                {/* <img src={`/media/${i+1}.jpg`} alt={item.titleEn} className="w-full h-full object-cover" /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--near-black)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)] group-hover:opacity-0 transition-opacity">
                  <span className="text-sm tracking-widest uppercase">[Image]</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-[var(--cream)] font-[family-name:var(--font-display)] text-xl italic mb-1">
                    {lang === "hu" ? item.titleHu : item.titleEn}
                  </div>
                  <div className="text-[var(--cream)]/80 text-sm">
                    {lang === "hu" ? item.venueHu : item.venueEn} · {item.year}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}