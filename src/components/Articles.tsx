"use client";

import { useLanguage } from "@/components/LanguageContext";

type Article = {
  source: string;
  title: string;
  excerpt: string;
  url: string;
  date: string;
  image: string;
};

// Same article for both languages — the piece itself is Hungarian press, so
// title/excerpt/source stay verbatim; only the date and the section labels localize.
const articlesEn: Article[] = [
  {
    source: "Tenger Média",
    title: "Lelkes közönségre számíthatnak a fiatalok",
    excerpt:
      "Visszatér a TehetségKert a VeszprémFestre, de Kőszegen is bemutatkoznak a MOL – Új Európa Alapítvány által támogatott fiatal művészek.",
    url: "https://tenger.media/2026/06/28/tehetsegkert-mol-uj-europa-alapitvany-veszpremfeszt-koszeg",
    date: "June 28, 2026",
    image: "/articles-tehetsegkert.jpg?v=1",
  },
];

const articlesHu: Article[] = [
  { ...articlesEn[0], date: "2026. június 28." },
];

export function Articles() {
  const { lang } = useLanguage();
  const articles = lang === "en" ? articlesEn : articlesHu;

  return (
    <section
      id="articles"
      className="section-alt"
      tabIndex={-1}
      aria-label={lang === "en" ? "Articles" : "Cikkek"}
    >
      <div className="media-content">
        <h2>{lang === "en" ? "Articles" : "Cikkek"}</h2>
        <p className="media-intro">{lang === "en" ? "Press coverage and articles." : "Sajtómegjelenések és cikkek."}</p>

        <div className="articles-list">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="article-item"
            >
              <img src={a.image} alt={a.title} className="article-image" loading="lazy" />
              <div className="article-body">
                <span className="article-source">{a.source}</span>
                <span className="article-title">{a.title}</span>
                <span className="article-excerpt">{a.excerpt}</span>
                <span className="article-date">{a.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}