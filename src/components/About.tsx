"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { useLanguage } from "@/components/LanguageContext";

const highlightsEn = [
  { year: "2024", text: "Solo recital at Budapest Spring Festival, broadcast live on Hungarian Radio" },
  { year: "2023", text: "Premiere of newly commissioned work by contemporary Hungarian composer" },
  { year: "2022", text: "International debut at Vienna Musikverein with chamber orchestra" },
  { year: "2021", text: "First prize winner at the International Vocal Competition in Prague" },
];

const highlightsHu = [
  { year: "2024", text: "Szólórecital a Budapesti Tavaszi Fesztiválon, élő közvetítés a Magyar Rádióban" },
  { year: "2023", text: "Kortárs magyar zeneszerző új művének ősbemutatója" },
  { year: "2022", text: "Nemzetközi debüt a Bécsi Musikvereinban kamarazenekarral" },
  { year: "2021", text: "Első díj a prágai Nemzetközi Énekversenyen" },
];

export function About() {
  const { t, lang } = useLanguage();
  const highlights = lang === "hu" ? highlightsHu : highlightsEn;

  return (
    <section id="about" className="section bg-[var(--cream-dark)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio */}
          <div>
            <AnimatedSection animation="fadeUp">
              <p className="section-subtitle">{lang === "hu" ? "Bemutatkozás" : "About"}</p>
              <h2>{t.about.title}</h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={1}>
              <div className="mt-12 space-y-6 text-lg leading-relaxed text-[var(--foreground)]">
                <p>
                  {lang === "hu"
                    ? "Elek Petra szoprán a magyar zenei hagyományok mély ismeretével és a kortárs repertoár iránti elkötelezettséggel lép fel a hazai és nemzetközi színpadokon. Tanulmányait a Liszt Ferenc Zeneművészeti Egyetemen végezte, ahol többek között a német és francia romantikus repertoár specializálódott."
                    : "Petra Elek is a soprano whose performances are marked by deep musical insight and compelling dramatic presence. After completing her studies at the Liszt Ferenc Academy of Music in Budapest, she has established herself as a versatile artist equally at home in operatic roles and concert repertoire."
                  }
                </p>
                <p>
                  {lang === "hu"
                    ? "Különleges érdeklődéssel fordul a 20. századi magyar zene felé, és rendszeresen mutat be ritkán hallott műveket a közönségnek. Művészetét a zenei tisztaság és az érzelmi mélység egységesség jellemzi."
                    : "With a particular affinity for late Romantic and 20th-century repertoire, she has performed in major concert halls across Europe, collaborating with renowned conductors and orchestras. Her interpretations are noted for their emotional depth and technical precision."
                  }
                </p>
                <p>
                  {lang === "hu"
                    ? "A szólóéneklés mellett rendszeresen közreműködik kamaraegyüttesekkel és kamarakórusokban, ahol a kisebb formátumú zenei élmények intimitását élvezi."
                    : "Beyond solo performances, she maintains an active interest in chamber music and collaborative projects, constantly seeking new ways to bring classical music to contemporary audiences."
                  }
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={2}>
              <div className="mt-10">
                <a href="#contact" className="btn-secondary">
                  {lang === "hu" ? "Kapcsolatfelvétel" : "Get in Touch"}
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Highlights */}
          <div>
            <AnimatedSection animation="fadeUp" delay={1}>
              <div className="space-y-10">
                <h3 className="text-lg tracking-wide uppercase text-[var(--muted)] font-sans">
                  {t.about.highlights}
                </h3>

                <div className="space-y-8">
                  {highlights.map((item, i) => (
                    <AnimatedSection key={i} animation="slideRight" delay={i + 2}>
                      <div className="group pl-6 border-l-2 border-[var(--border)] hover:border-[var(--burgundy)] transition-colors">
                        <span className="block text-sm text-[var(--burgundy)] font-medium mb-2 tracking-wide">
                          {item.year}
                        </span>
                        <span className="block text-[var(--foreground)] group-hover:text-[var(--burgundy)] transition-colors leading-relaxed">
                          {item.text}
                        </span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}