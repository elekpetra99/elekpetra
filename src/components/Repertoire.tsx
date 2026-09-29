"use client";

import { useLanguage } from "@/components/LanguageContext";

type Masterclass = { year: string; name: string; detail?: string };

const masterclassesEn: Masterclass[] = [
  { year: "2025", name: "Ewita's Royal Masterclass", detail: "Eva Katrakova Bodorova" },
  { year: "2024", name: "Andrea Rost Opera Academy", detail: "Die Zauberflöte — Die Königin der Nacht" },
  { year: "2024", name: "Alexander Schmalcz chamber music masterclass" },
  { year: "2023", name: "International Choral Academy", detail: "Rolf Beck" },
  { year: "2023", name: "Early Music Days festival and masterclasses, Vác", detail: "Emőke Baráth vocal masterclass and György Vashegyi chamber music masterclass" },
  { year: "2023", name: "Performance Practice in Baroque Singing", detail: "Emőke Baráth masterclass (early Baroque Italian music, Liszt Ferenc Academy of Music)" },
  { year: "2022", name: "Performance Practice in Baroque Singing", detail: "Emőke Baráth masterclass (Bach's vocal music, Liszt Ferenc Academy of Music)" },
  { year: "2022", name: "Crescendo Summer Academy, Tokaj", detail: "Constance Fee vocal masterclass, opera scenes with Bence Varga, art song with Ferenc János Szabó" },
];

const masterclassesHu: Masterclass[] = [
  { year: "2025", name: "Ewita's Royal Matercalss", detail: "Eva Katrakova Bodorova" },
  { year: "2024", name: "Rost Andrea Operaakadémia", detail: "Die Zauberflöte — Die Königin der Nacht" },
  { year: "2024", name: "Alexander Schmalcz kamarazene mesterkurzus" },
  { year: "2023", name: "International Chorakademie", detail: "Rolf Beck" },
  { year: "2023", name: "Régi Zenei Napok fesztivál és mesterkurzus, Vác", detail: "Baráth Emőke ének mesterkurzus és Vashegyi György kamarazene mesterkurzus" },
  { year: "2023", name: "A barokk éneklés előadásmódja", detail: "Baráth Emőke mesterkurzus (korabarokk olasz zene, LFZE hallgatói számára)" },
  { year: "2022", name: "A barokk éneklés előadásmódja", detail: "Baráth Emőke mesterkurzus (Bach vokális zenéje, LFZE hallgatói számára)" },
  { year: "2022", name: "Crescendo Nyári Akadémia, Tokaj", detail: "Constance Fee ének mesterkurzus, opera jelenetek Varga Bencével, dal Szabó Ferenc Jánossal" },
];

export function Repertoire() {
  const { t, lang } = useLanguage();
  const masterclasses = lang === "en" ? masterclassesEn : masterclassesHu;

  return (
    <section id="repertoire" className="section-alt" tabIndex={-1} aria-label={t.masterclasses.title}>
      <div className="repertoire-grid">
        <h2>{t.masterclasses.title}</h2>
        <p className="repertoire-intro">{t.masterclasses.intro}</p>

        <div className="repertoire-list">
          {masterclasses.map((m, i) => (
            <div key={i} className="repertoire-item mc-item">
              <span className="mc-year">{m.year}</span>
              <div className="mc-body">
                <span className="repertoire-title">{m.name}</span>
                {m.detail && <span className="repertoire-composer">{m.detail}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}