"use client";

import { useLanguage } from "@/components/LanguageContext";

const content = {
  en: {
    email: "Email",
    social: "Social",
    management: "Management",
    managementNote: "For concerts and collaborations.",
    send: "Send Message",
    name: "Name",
    message: "Message",
  },
  hu: {
    email: "Email",
    social: "Közösségi",
    management: "Menedzsment",
    managementNote: "Koncertek és együttműködések.",
    send: "Üzenet küldése",
    name: "Név",
    message: "Üzenet",
  },
};

export function Contact() {
  const { t, lang } = useLanguage();
  const c = content[lang];

  return (
    <section id="contact" className="section-alt" tabIndex={-1} aria-label={t.contact.title}>
      <div className="contact-grid">
        <div className="contact-info">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.intro}</p>
          
          <div className="contact-block">
            <h3>{c.email}</h3>
            <a href="mailto:petra@elekpetra.hu">petra@elekpetra.hu</a>
          </div>
          
          <div className="contact-block">
            <h3>{c.social}</h3>
            <div className="contact-links">
              <a href="#">Instagram</a>
              <a href="#">YouTube</a>
              <a href="#">Spotify</a>
            </div>
          </div>
          
          <div className="contact-block">
            <h3>{c.management}</h3>
            <p>{c.managementNote}</p>
            <a href="mailto:management@elekpetra.hu">management@elekpetra.hu</a>
          </div>
        </div>
        
        <div className="contact-form">
          <form>
            <label>{c.name}</label>
            <input type="text" />
            
            <label>{c.email}</label>
            <input type="email" />
            
            <label>{c.message}</label>
            <textarea rows={4} />
            
            <button type="submit" className="btn btn-primary">{c.send}</button>
          </form>
        </div>
      </div>
    </section>
  );
}