"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

export function About() {
  return (
    <section id="about" className="section bg-[var(--cream-dark)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Bio */}
          <div>
            <AnimatedSection animation="fadeUp">
              <h2 className="section-title">About</h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={1}>
              <div className="mt-12 space-y-6 text-lg leading-relaxed">
                <p>
                  [Bio paragraph 1 — Background, education, training. Replace with actual content.]
                </p>
                <p>
                  [Bio paragraph 2 — Artistic philosophy, approach to music, key influences.]
                </p>
                <p>
                  [Bio paragraph 3 — Notable achievements, collaborations, current activities.]
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Highlights */}
          <div>
            <AnimatedSection animation="fadeUp" delay={2}>
              <div className="space-y-8">
                <h3 className="text-lg tracking-wide uppercase text-[var(--muted)]">
                  Highlights
                </h3>

                <div className="space-y-6">
                  {[
                    { year: "2024", text: "[Achievement or performance highlight]" },
                    { year: "2023", text: "[Achievement or performance highlight]" },
                    { year: "2022", text: "[Achievement or performance highlight]" },
                    { year: "2021", text: "[Achievement or performance highlight]" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <span className="text-sm text-[var(--burgundy)] font-medium w-16 flex-shrink-0">
                        {item.year}
                      </span>
                      <span className="text-[var(--foreground)] group-hover:text-[var(--burgundy)] transition-colors">
                        {item.text}
                      </span>
                    </div>
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