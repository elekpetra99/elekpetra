"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

interface RepertoireItem {
  titleEn: string;
  titleHu: string;
  composer: string;
}

const repertoire: RepertoireItem[] = [
  { titleEn: "Four Last Songs", titleHu: "Négy utolsó dal", composer: "R. Strauss" },
  { titleEn: "Wesendonck-Lieder", titleHu: "Wesendonck-dalok", composer: "R. Wagner" },
  { titleEn: "Frauenliebe und -leben", titleHu: "Női szerelem és élet", composer: "R. Schumann" },
  { titleEn: "Dichterliebe", titleHu: "Költői szerelem", composer: "R. Schumann" },
  { titleEn: "Gymnopédies", titleHu: "Gimnopédiák", composer: "E. Satie (arr.)" },
  { titleEn: "Hungarian Folk Songs", titleHu: "Magyar népdalok", composer: "B. Bartók" },
  { titleEn: "Mélodies passagères", titleHu: "Múló dallamok", composer: "S. Barber" },
  { titleEn: "Das Buch der hängenden Gärten", titleHu: "A függőkertek könyve", composer: "A. Schönberg" },
];

export function Repertoire() {
  const { t, lang } = useLanguage();

  return (
    <section id="repertoire" className="section">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeUp">
            <p className="section-subtitle">{lang === "hu" ? "Repertoár" : "Repertoire"}</p>
            <h2>{t.repertoire.title}</h2>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={1}>
            <p className="mt-8 mb-12 text-lg text-[var(--muted)] max-w-2xl leading-relaxed">
              {t.repertoire.intro}
            </p>
          </AnimatedSection>

          <div className="space-y-1">
            {repertoire.map((item, i) => (
              <AnimatedSection key={i} animation="fadeUp" delay={i % 4 + 2}>
                <div className="repertoire-item">
                  <span className="repertoire-title">
                    {lang === "hu" ? item.titleHu : item.titleEn}
                  </span>
                  <span className="repertoire-composer">{item.composer}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fadeUp" delay={6}>
            <p className="mt-10 text-[var(--muted)] italic">
              {t.repertoire.note}
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}