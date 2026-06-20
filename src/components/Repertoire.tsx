"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

interface RepertoireItem {
  title: string;
  composer: string;
  notes?: string;
}

const repertoire: RepertoireItem[] = [
  { title: "[Piece Title]", composer: "[Composer Name]" },
  { title: "[Piece Title]", composer: "[Composer Name]" },
  { title: "[Piece Title]", composer: "[Composer Name]" },
  { title: "[Piece Title]", composer: "[Composer Name]" },
  { title: "[Piece Title]", composer: "[Composer Name]" },
  { title: "[Piece Title]", composer: "[Composer Name]" },
];

export function Repertoire() {
  return (
    <section id="repertoire" className="section">
      <div className="container">
        <AnimatedSection animation="fadeUp">
          <h2 className="section-title">Repertoire</h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={1}>
          <p className="mt-12 mb-12 text-lg text-[var(--muted)] max-w-2xl">
            A selection of works from the classical repertoire, curated through years of 
            study and performance experience.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={2}>
          <div className="max-w-3xl">
            {repertoire.map((item, i) => (
              <div key={i} className="repertoire-item">
                <span className="repertoire-title">{item.title}</span>
                <span className="repertoire-composer">{item.composer}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={3}>
          <p className="mt-8 text-sm text-[var(--muted)]">
            Additional repertoire available upon request.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}