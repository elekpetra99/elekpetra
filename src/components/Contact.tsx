"use client";

import { useLanguage } from "@/components/LanguageContext";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="section-alt">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.intro}</p>
          
          <div className="contact-block">
            <h3>Email</h3>
            <a href="mailto:petra@elekpetra.hu">petra@elekpetra.hu</a>
          </div>
          
          <div className="contact-block">
            <h3>Social</h3>
            <div className="contact-links">
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">Spotify</a>
            </div>
          </div>
          
          <div className="contact-block">
            <h3>Management</h3>
            <p>For concerts and collaborations.</p>
            <a href="mailto:management@elekpetra.hu">management@elekpetra.hu</a>
          </div>
        </div>
        
        <div className="contact-form">
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