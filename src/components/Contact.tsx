"use client";

import { AnimatedSection } from "@/components/AnimatedSection";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <AnimatedSection animation="fadeUp">
          <h2 className="section-title">Contact</h2>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={1}>
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact info */}
            <div>
              <p className="text-lg text-[var(--muted)] mb-8 max-w-lg">
                For bookings, collaborations, or inquiries, please reach out through 
                the form or contact details below.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm tracking-wide uppercase text-[var(--muted)] mb-2">
                    Email
                  </h3>
                  <a 
                    href="mailto:contact@example.com" 
                    className="text-lg hover:text-[var(--burgundy)] transition-colors"
                  >
                    contact@example.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm tracking-wide uppercase text-[var(--muted)] mb-2">
                    Social
                  </h3>
                  <div className="flex gap-4">
                    {["Instagram", "YouTube", "Spotify"].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-sm hover:text-[var(--burgundy)] transition-colors"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-sm tracking-wide uppercase text-[var(--muted)] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] focus:border-[var(--burgundy)] outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm tracking-wide uppercase text-[var(--muted)] mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] focus:border-[var(--burgundy)] outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    className="block text-sm tracking-wide uppercase text-[var(--muted)] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--cream)] border border-[var(--border)] focus:border-[var(--burgundy)] outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button type="submit" className="btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}