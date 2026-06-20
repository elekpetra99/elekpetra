"use client";

import { useLanguage } from "@/components/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-alt">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>{t.contact.title}</h2>
          <p style={{ marginTop: "1rem", marginBottom: "2rem" }}>{t.contact.intro}</p>
          
          <div style={{ marginBottom: "2rem" }}>
            <h3>Email</h3>
            <a href="mailto:petra@elekpetra.hu" style={{ fontSize: "1.25rem" }}>petra@elekpetra.hu</a>
          </div>
          
          <div style={{ marginBottom: "2rem" }}>
            <h3>Social</h3>
            <div className="contact-links">
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">Spotify</a>
            </div>
          </div>
          
          <div>
            <h3>Management</h3>
            <p style={{ marginBottom: "0.5rem" }}>For concerts and collaborations.</p>
            <a href="mailto:management@elekpetra.hu">management@elekpetra.hu</a>
          </div>
        </div>
        
        <div>
          <form>
            <label>Name</label>
            <input type="text" />
            
            <label>Email</label>
            <input type="email" />
            
            <label>Message</label>
            <textarea rows={4} />
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}