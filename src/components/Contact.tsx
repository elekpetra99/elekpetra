"use client";

import { useLanguage } from "@/components/LanguageContext";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/elektra.579" },
];

const content = {
  en: {
    send: "Send Message",
    name: "Name",
    email: "Email",
    message: "Message",
    social: "Social",
  },
  hu: {
    send: "Üzenet küldése",
    name: "Név",
    email: "Email",
    message: "Üzenet",
    social: "Közösségi",
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
            <h3>{c.social}</h3>
            <div className="contact-links">
              <a href={socials[0].url} target="_blank" rel="noopener noreferrer">{socials[0].name}</a>
            </div>
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