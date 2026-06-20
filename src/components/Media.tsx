"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

interface MediaItem {
  type: "image" | "video" | "audio";
  title: string;
  description?: string;
  thumbnail?: string;
}

const mediaItems: MediaItem[] = [
  { type: "image", title: "[Performance Title]", description: "[Venue, Date]" },
  { type: "image", title: "[Performance Title]", description: "[Venue, Date]" },
  { type: "image", title: "[Performance Title]", description: "[Venue, Date]" },
  { type: "image", title: "[Performance Title]", description: "[Venue, Date]" },
  { type: "image", title: "[Performance Title]", description: "[Venue, Date]" },
  { type: "image", title: "[Performance Title]", description: "[Venue, Date]" },
];

export function Media() {
  return (
    <section id="media" className="section bg-[var(--cream-dark)]">
      <div className="container">
        <AnimatedSection animation="fadeUp">
          <h2 className="section-title">Media</h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={1}>
          <p className="mt-12 mb-12 text-lg text-[var(--muted)] max-w-2xl">
            Recordings and photographs from performances and sessions.
          </p>
        </AnimatedSection>

        <div className="gallery-grid mt-12">
          {mediaItems.map((item, i) => (
            <AnimatedSection key={i} animation="scaleIn" delay={i % 3}>
              <div className="gallery-item group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-[var(--muted)] mb-2">[Image]</div>
                    <div className="text-[var(--foreground)] font-[family-name:var(--font-display)] text-lg italic">
                      {item.title}
                    </div>
                    {item.description && (
                      <div className="text-sm text-[var(--muted)] mt-1">
                        {item.description}
                      </div>
                    )}
                  </div>
                </div>
                <div className="absolute inset-0 bg-[var(--burgundy)]/0 group-hover:bg-[var(--burgundy)]/10 transition-colors duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}