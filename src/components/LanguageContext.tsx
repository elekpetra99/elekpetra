"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Translations = {
  nav: { about: string; repertoire: string; media: string; contact: string };
  hero: { tagline: string; ctaRepertoire: string; ctaContact: string };
  about: { title: string; bio: string[]; highlights: string };
  repertoire: { title: string; intro: string };
  media: { title: string; intro: string };
  contact: { title: string; intro: string };
};

const en: Translations = {
  nav: { about: "About", repertoire: "Repertoire", media: "Media", contact: "Contact" },
  hero: { tagline: "Soprano", ctaRepertoire: "Explore Repertoire", ctaContact: "Get in Touch" },
  about: {
    title: "About",
    bio: [
      "Petra Elek is a soprano whose performances are marked by deep musical insight and compelling dramatic presence.",
      "After completing her studies at the Liszt Ferenc Academy of Music in Budapest, she has established herself as a versatile artist equally at home in operatic roles and concert repertoire.",
      "Beyond solo performances, she maintains an active interest in chamber music and collaborative projects."
    ],
    highlights: "Career Highlights"
  },
  repertoire: { title: "Repertoire", intro: "A selection of works from the classical repertoire." },
  media: { title: "Media", intro: "" },
  contact: { title: "Contact", intro: "For bookings, collaborations, or inquiries." }
};

const hu: Translations = {
  nav: { about: "Rólam", repertoire: "Repertoár", media: "Média", contact: "Kapcsolat" },
  hero: { tagline: "Szoprán", ctaRepertoire: "Repertoár", ctaContact: "Kapcsolat" },
  about: {
    title: "Rólam",
    bio: [
      "Elek Petra szoprán művész, aki fellépéseit a zene mély megértése és erőteljes színpadi jelenlét jellemzi.",
      "A Liszt Ferenc Zeneművészeti Egyetem elvégzése után számos operett és koncert repertoárban bizonyított.",
      "A szólófellépések mellett aktív érdeklődést mutat a kamarazene és a közös projektek iránt."
    ],
    highlights: "Pályafutásom"
  },
  repertoire: { title: "Repertoár", intro: "Válogatás a klasszikus repertoárból." },
  media: { title: "Média", intro: "" },
  contact: { title: "Kapcsolat", intro: "Fellépések, együttműködések, érdeklődés." }
};

type Lang = "en" | "hu";

const LanguageContext = createContext<{
  t: Translations;
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ t: en, lang: "en", setLang: () => {} });

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const t = lang === "en" ? en : hu;
  return (
    <LanguageContext.Provider value={{ t, lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}