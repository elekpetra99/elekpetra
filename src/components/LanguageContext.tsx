"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "en" | "hu";

interface Translations {
  nav: {
    about: string;
    repertoire: string;
    media: string;
    contact: string;
  };
  hero: {
    tagline: string;
    ctaRepertoire: string;
    ctaContact: string;
    portraitAlt: string;
  };
  about: {
    title: string;
    highlights: string;
    bio1: string;
    bio2: string;
    bio3: string;
    highlight1: string;
    highlight2: string;
    highlight3: string;
    highlight4: string;
  };
  repertoire: {
    title: string;
    intro: string;
    note: string;
  };
  media: {
    title: string;
    intro: string;
  };
  contact: {
    title: string;
    intro: string;
    email: string;
    social: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
  footer: {
    copyright: string;
    privacy: string;
    terms: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      repertoire: "Repertoire",
      media: "Media",
      contact: "Contact",
    },
    hero: {
      tagline: "Classical Musician",
      ctaRepertoire: "Explore Repertoire",
      ctaContact: "Get in Touch",
      portraitAlt: "Elek Petra portrait",
    },
    about: {
      title: "About",
      highlights: "Highlights",
      bio1: "[Background, education, training. Replace with actual content.]",
      bio2: "[Artistic philosophy, approach to music, key influences.]",
      bio3: "[Notable achievements, collaborations, current activities.]",
      highlight1: "[Achievement or performance highlight]",
      highlight2: "[Achievement or performance highlight]",
      highlight3: "[Achievement or performance highlight]",
      highlight4: "[Achievement or performance highlight]",
    },
    repertoire: {
      title: "Repertoire",
      intro: "A selection of works from the classical repertoire, curated through years of study and performance experience.",
      note: "Additional repertoire available upon request.",
    },
    media: {
      title: "Media",
      intro: "Recordings and photographs from performances and sessions.",
    },
    contact: {
      title: "Contact",
      intro: "For bookings, collaborations, or inquiries, please reach out through the form or contact details below.",
      email: "Email",
      social: "Social",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSubmit: "Send Message",
    },
    footer: {
      copyright: "All rights reserved.",
      privacy: "Privacy",
      terms: "Terms",
    },
  },
  hu: {
    nav: {
      about: "Bemutatkozás",
      repertoire: "Repertoár",
      media: "Média",
      contact: "Kapcsolat",
    },
    hero: {
      tagline: "Klasszikus Zenész",
      ctaRepertoire: "Repertoár",
      ctaContact: "Kapcsolat",
      portraitAlt: "Elek Petra portré",
    },
    about: {
      title: "Bemutatkozás",
      highlights: "Kiemelések",
      bio1: "[Háttér, tanulmányok, képzés. Cserélje ki a tényleges tartalomra.]",
      bio2: "[Művészeti filozófia, zenei megközelítés, hatások.]",
      bio3: "[Kiemelkedő eredmények, együttműködések, jelenlegi tevékenységek.]",
      highlight1: "[Eredmény vagy fellépés kiemelése]",
      highlight2: "[Eredmény vagy fellépés kiemelése]",
      highlight3: "[Eredmény vagy fellépés kiemelése]",
      highlight4: "[Eredmény vagy fellépés kiemelése]",
    },
    repertoire: {
      title: "Repertoár",
      intro: "Válogatás a klasszikus repertoárból, az évek során elsajátított művek.",
      note: "További művek igény szerint elérhetők.",
    },
    media: {
      title: "Média",
      intro: "Felvételek és fényképek fellépésekről és hangversenyekről.",
    },
    contact: {
      title: "Kapcsolat",
      intro: "Fellépések, együttműködések vagy egyéb megkeresések esetén kérem lépjen kapcsolatba az alábbi elérhetőségeken.",
      email: "Email",
      social: "Közösségi",
      formName: "Név",
      formEmail: "Email",
      formMessage: "Üzenet",
      formSubmit: "Küldés",
    },
    footer: {
      copyright: "Minden jog fenntartva.",
      privacy: "Adatvédelem",
      terms: "Feltételek",
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}