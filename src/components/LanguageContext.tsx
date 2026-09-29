"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Translations = {
  nav: { about: string; masterclasses: string; media: string; contact: string };
  hero: { tagline: string; ctaMasterclasses: string; ctaContact: string };
  about: {
    title: string;
    bio: string[];
    studies: string;
    collaborations: string;
    competitions: string;
  };
  masterclasses: { title: string; intro: string };
  media: { title: string; intro: string };
  contact: { title: string; intro: string };
};

const en: Translations = {
  nav: { about: "About", masterclasses: "Masterclasses", media: "Media", contact: "Contact" },
  hero: { tagline: "Soprano", ctaMasterclasses: "Masterclasses", ctaContact: "Get in Touch" },
  about: {
    title: "About",
    bio: [
      "Petra Elek is a soprano. She completed her BA in Classical Singing (2019–2022) and her MA in Oratorio and Art Song (2022–2024) at the Franz Liszt Academy of Music in Budapest.",
      "Since 2024 she has been a postgraduate student of the Kvintesszencia Masterclass programme at the University of Pécs, under Erika Miklósa.",
      "She performs regularly in concerts, festivals and opera productions."
    ],
    studies: "Studies",
    collaborations: "Collaborations & Cultural Activities",
    competitions: "Competitions, Auditions & Results"
  },
  masterclasses: { title: "Masterclasses", intro: "Masterclasses and summer academies." },
  media: { title: "Media", intro: "" },
  contact: { title: "Contact", intro: "For bookings and collaborations." }
};

const hu: Translations = {
  nav: { about: "Rólam", masterclasses: "Mesterkurzusok", media: "Média", contact: "Kapcsolat" },
  hero: { tagline: "Szoprán", ctaMasterclasses: "Mesterkurzusok", ctaContact: "Kapcsolat" },
  about: {
    title: "Rólam",
    bio: [
      "Elek Petra szoprán. Klasszikus ének (BA, 2019–2022), majd oratórium- és dalének (MA, 2022–2024) szakon szerzett diplomát a Liszt Ferenc Zeneművészeti Egyetemen.",
      "2024-től a Pécsi Tudományegyetem Kvintesszencia Mesteriskola posztgraduális képzésének hallgatója, Miklósa Erika irányításával.",
      "Rendszeresen fellép koncerteken, fesztiválokon és operaprodukciókban."
    ],
    studies: "Tanulmányok",
    collaborations: "Együttműködések és kulturális tevékenység",
    competitions: "Versenyek, meghallgatások, eredmények"
  },
  masterclasses: { title: "Mesterkurzusok", intro: "Mesterkurzusok és nyári akadémiák." },
  media: { title: "Média", intro: "" },
  contact: { title: "Kapcsolat", intro: "Fellépések és együttműködések." }
};

type Lang = "en" | "hu";

const LanguageContext = createContext<{
  t: Translations;
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ t: hu, lang: "hu", setLang: () => {} });

export const useLanguage = () => useContext(LanguageContext);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("hu");

  // Initialize from URL param on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get("lang");
    if (urlLang === "en" || urlLang === "hu") {
      setLangState(urlLang);
    }
    // Strip stale #hash from refreshes so the browser doesn't jump to a section
    // on second render (mobile pull-to-refresh preserves the hash).
    if (window.location.hash) {
      const url = new URL(window.location.href);
      url.hash = "";
      window.history.replaceState({}, "", url.toString());
      // restore scroll position the browser saved for the reload
      window.scrollTo({ top: 0 });
    }
  }, []);

  // Update URL when language changes
  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", newLang);
    window.history.replaceState({}, "", url.toString());
  };

  const t = lang === "en" ? en : hu;
  return (
    <LanguageContext.Provider value={{ t, lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}