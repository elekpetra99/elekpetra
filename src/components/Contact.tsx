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
    management: "Management & Bookings",
    sending: "Sending…",
    sent: "Thank you — your message has been sent.",
    sendError: "Something went wrong, please try again or write directly to the email above.",
  },
  hu: {
    send: "Üzenet küldése",
    name: "Név",
    email: "Email",
    message: "Üzenet",
    social: "Közösségi",
    management: "Menedzsment & fellépések",
    sending: "Küldés…",
    sent: "Köszönjük — üzenete elment.",
    sendError: "Hiba történt, kérjük próbálja újra, vagy írjon a fenti email címre.",
  },
};

export function Contact() {
  const { t, lang } = useLanguage();
  const c = content[lang];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const button = form.querySelector<HTMLButtonElement>("button[type=submit]");
    const note = form.querySelector<HTMLElement>(".form-note");
    if (!button || button.disabled) return;

    button.disabled = true;
    button.dataset.state = "sending";
    if (note) { note.textContent = ""; note.dataset.state = ""; }

    // Runtime-configure via NEXT_PUBLIC env; falls back to graceful error if unset.
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    const data = new FormData(form);
    if (accessKey) data.set("access_key", accessKey);
    // Honeypot anti-spam (bots fill this hidden field)
    data.set("botcheck", "");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json().catch(() => null);
      if (res.ok && json?.success) {
        form.reset();
        if (note) { note.textContent = c.sent; note.dataset.state = "ok"; }
      } else {
        if (note) { note.textContent = c.sendError; note.dataset.state = "err"; }
      }
    } catch {
      if (note) { note.textContent = c.sendError; note.dataset.state = "err"; }
    } finally {
      button.disabled = false;
      button.dataset.state = "idle";
    }
  }

  return (
    <section id="contact" className="section-alt" tabIndex={-1} aria-label={t.contact.title}>
      <div className="contact-grid">
        <div className="contact-info">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.intro}</p>

          <div className="contact-block">
            <h3>{c.management}</h3>
            <a href="mailto:petraelek.management@gmail.com">petraelek.management@gmail.com</a>
          </div>

          <div className="contact-block">
            <h3>{c.social}</h3>
            <div className="contact-links">
              {socials.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
              ))}
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <label htmlFor="cf-name">{c.name}</label>
            <input id="cf-name" type="text" name="name" required />

            <label htmlFor="cf-email">{c.email}</label>
            <input id="cf-email" type="email" name="email" required />

            <label htmlFor="cf-message">{c.message}</label>
            <textarea id="cf-message" name="message" rows={4} required />

            {/* Hidden honeypot — bots type here, humans never see it */}
            <input type="checkbox" name="botcheck" className="hp-box" style={{ display: "none" }} />

            <button type="submit" className="btn btn-primary">{c.send}</button>
            <p className="form-note" role="status" />
          </form>
        </div>
      </div>
    </section>
  );
}