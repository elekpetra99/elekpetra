"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="order-2 lg:order-1">
            <AnimatedSection animation="fadeUp" delay={0} aboveFold>
              <p className="text-sm tracking-[0.2em] uppercase text-[var(--muted)] mb-4">
                Classical Musician
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={1} aboveFold>
              <h1 className="mb-6">
                <span className="block">[Full Name]</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={2} aboveFold>
              <p className="text-xl text-[var(--muted)] mb-8 max-w-lg leading-relaxed">
                [Short tagline or bio statement about your musical practice and artistic approach.]
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={3} aboveFold>
              <div className="flex flex-wrap gap-4">
                <a href="#repertoire" className="btn-primary">
                  Explore Repertoire
                </a>
                <a href="#contact" className="btn-secondary">
                  Get in Touch
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2">
            <AnimatedSection animation="scaleIn" delay={1} aboveFold>
              <div className="portrait-frame shadow-2xl">
                {/* Replace this div with an actual image */}
                {/* <img src="/portrait.jpg" alt="[Full Name]" className="w-full h-full object-cover" /> */}
                <div className="absolute inset-0 flex items-center justify-center text-[var(--muted)]">
                  <span className="text-sm tracking-widest uppercase">Portrait</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}