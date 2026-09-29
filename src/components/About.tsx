"use client";

import { useLanguage } from "@/components/LanguageContext";

type Highlights = Record<"year" | "event", string>;

const collaborationsEn: Highlights[] = [
  { year: "2026", event: "Budapest Classic, MÜPA, October" },
  { year: "2026", event: "Zemplén Festival, Kvintesszencia Masterclass, August" },
  { year: "2026", event: "MOL New Europe Foundation concerts, July" },
  { year: "2026", event: "MOL New Europe Foundation concerts, June" },
  { year: "2026", event: "Zsófi Döbrönte: The Magic Flute, directing exam, SZFE, April" },
  { year: "2026", event: "Liszt song recital with Eszter Szabó, April" },
  { year: "2026", event: "Kvintesszencia Masterclass exam recital, January" },
  { year: "2025", event: "Andrea Rost Opera Academy, The Magic Flute, Nyíregyháza, August" },
  { year: "2025", event: "Festival Academy: Humperdinck: Hansel and Gretel — Role: Dream Fairy, July" },
  { year: "2025", event: "Kvintesszencia Masterclass final concert, January" },
  { year: "2024", event: "Christmas concert with the Kodály Philharmonic Orchestra, December" },
  { year: "2024", event: "Concerts with the choir and orchestra of Sola Scriptura Theological College, August" },
  { year: "2024", event: "Ördögkatlan Festival, concert with musicologist Rebeka Ádány-Pál, July" },
  { year: "2024", event: "Liszt Academy of Music, MA graduation concert with the Era Nova chamber orchestra, April" },
  { year: "2024", event: "Liszt Academy of Music, chamber music concert with the Ötöshangzat wind quintet, November" },
  { year: "2023", event: "Kodály Centre, concert with the Pécs Philharmonic Orchestra, November" },
  { year: "2023", event: "Concert with the Budapest Strings, October" },
  { year: "2023", event: "Ars Sacra Festival, concert with the Era Nova Chamber Orchestra, October" },
  { year: "2022", event: "University of Debrecen, contemporary opera with the KorTársulat, December" },
];

const collaborationsHu: Highlights[] = [
  { year: "2026", event: "Budapest Classic, MÜPA, október" },
  { year: "2026", event: "Zemplén Fesztivál, Kvintesszencia Mesteriskola, augusztus" },
  { year: "2026", event: "MOL Új-Európa Alapítvány koncertek, július" },
  { year: "2026", event: "MOL Új-Európa Alapítvány koncertek, június" },
  { year: "2026", event: "Döbrönte Zsófi: A varázsfuvola, rendezővizsga, SZFE, április" },
  { year: "2026", event: "Liszt-dal koncert Szabó Eszterrel, április" },
  { year: "2026", event: "Kvintesszencia Mesteriskola vizsgakoncert, január" },
  { year: "2025", event: "Rost Andrea Operaakadémia, A varázsfuvola, Nyíregyháza, augusztus" },
  { year: "2025", event: "Festival Academy: Humperdinck: János és Gretel — Szerep: Álommanó, július" },
  { year: "2025", event: "Kvintesszencia Mesteriskola vizsgakoncert, január" },
  { year: "2024", event: "Karácsonyi koncert a Kodály Filharmonikusokkal, december" },
  { year: "2024", event: "Koncertek a Sola Scriptura Teológiai Főiskola ének- és zenekarával, augusztus" },
  { year: "2024", event: "Ördögkatlan Fesztivál, koncert Ádány-Pál Rebeka muzikológus előadásával, július" },
  { year: "2024", event: "Zeneakadémia, MA diplomakoncert az Era Nova kamarazenekarral, április" },
  { year: "2024", event: "Zeneakadémia, kamarazene koncert az Ötöshangzat fúvósötössel, november" },
  { year: "2023", event: "Kodály központ, koncert a Pécsi Filharmónikusokkal, november" },
  { year: "2023", event: "Koncert a Budapesti Vonósokkal, október" },
  { year: "2023", event: "Ars Sacra Fesztivál, koncert az Era Nova kamarazenekarral, október" },
  { year: "2022", event: "Debreceni Egyetem, kortárs operaelőadás a KorTársulattal, december" },
];

const competitionsEn: Highlights[] = [
  { year: "", event: "1st Opera Competition, Hungarian State Opera House, Round 2" },
  { year: "2025", event: "Handel Opera Academy, Serse — Atalanta" },
  { year: "", event: "Successful audition at the Hungarian State Opera House" },
];

const competitionsHu: Highlights[] = [
  { year: "", event: "I. Operaverseny, Magyar Állami Operaház, II. forduló" },
  { year: "2025", event: "Händel Opera Academy, Serse — Atalanta" },
  { year: "", event: "Eredményes meghallgatás a Magyar Állami Operaháznál" },
];

export function About() {
  const { t, lang } = useLanguage();
  const collaborations = lang === "en" ? collaborationsEn : collaborationsHu;
  const competitions = lang === "en" ? competitionsEn : competitionsHu;

  return (
    <section id="about" tabIndex={-1} aria-label={t.about.title}>
      <div className="about-text">
        <h2>{t.about.title}</h2>
        {t.about.bio.map((p, i) => <p key={i}>{p}</p>)}

        <h3>{t.about.studies}</h3>
        <div className="highlight-item">
          <span className="highlight-year">2024–2026</span>
          <span className="highlight-text">
            {lang === "en"
              ? "University of Pécs — Kvintesszencia Masterclass (postgraduate programme), Erika Miklósa"
              : "Pécsi Tudományegyetem — Kvintesszencia Mesteriskola (posztgraduális képzés), Miklósa Erika"}
          </span>
        </div>
        <div className="highlight-item">
          <span className="highlight-year">2022–2024</span>
          <span className="highlight-text">
            {lang === "en"
              ? "Franz Liszt Academy of Music, Budapest — MA Oratorio and Art Song"
              : "Liszt Ferenc Zeneművészeti Egyetem, Budapest — MA Oratórium- és dalének szak"}
          </span>
        </div>
        <div className="highlight-item">
          <span className="highlight-year">2019–2022</span>
          <span className="highlight-text">
            {lang === "en"
              ? "Franz Liszt Academy of Music, Budapest — BA Classical Singing"
              : "Liszt Ferenc Zeneművészeti Egyetem, Budapest — BA Klasszikus ének szak"}
          </span>
        </div>

        <h3>{t.about.collaborations}</h3>
        {collaborations.map((h, i) => (
          <div key={i} className="highlight-item">
            <span className="highlight-year">{h.year}</span>
            <span className="highlight-text">{h.event}</span>
          </div>
        ))}

        <h3>{t.about.competitions}</h3>
        {competitions.map((h, i) => (
          <div key={i} className="highlight-item">
            {h.year && <span className="highlight-year">{h.year}</span>}
            <span className="highlight-text">{h.event}</span>
          </div>
        ))}
      </div>
    </section>
  );
}