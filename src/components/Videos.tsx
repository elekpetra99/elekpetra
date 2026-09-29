"use client";

import { useLanguage } from "@/components/LanguageContext";

type Video = {
  id: string; // YouTube video ID
  title: string;
  titleEn?: string;
  meta: string;
  metaEn?: string;
};

const videos: Video[] = [
  {
    id: "GHsTEDt9gKw",
    title: "W. A. Mozart: Ah se in ciel, benigne stelle — koncertária",
    titleEn: "W. A. Mozart: Ah se in ciel, benigne stelle — concert aria",
    meta: "MA diplomahangverseny — Era Nova Kamarazenekar",
    metaEn: "MA graduation concert — Era Nova Chamber Orchestra",
  },
  {
    id: "WeKK1tGtkuc",
    title: "KvintEsszencia Mesteriskola hallgatója (2024–2025)",
    titleEn: "KvintEsszencia Masterclass student (2024–2025)",
    meta: "KvintEsszencia Mesteriskola",
    metaEn: "KvintEsszencia Masterclass",
  },
  {
    id: "z4F5TM7jCUE",
    title: "A Kvintesszencia Mesteriskola bemutatja: Elek Petra",
    titleEn: "The Kvintesszencia Masterclass presents: Petra Elek",
    meta: "KvintEsszencia Mesteriskola",
    metaEn: "KvintEsszencia Masterclass",
  },
];

export function Videos() {
  const { lang } = useLanguage();
  const en = lang === "en";

  return (
    <section id="videos" tabIndex={-1} aria-label={en ? "Videos" : "Videók"}>
      <div className="media-content">
        <h2>{en ? "Videos" : "Videók"}</h2>
        <p className="media-intro">{en ? "Performances and portraits." : "Felvételek és portréfilmek."}</p>

        <div className="videos-grid">
          {videos.map((v) => (
            <div key={v.id} className="video-item">
              <div className="video-frame">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${v.id}?rel=0`}
                  title={en ? (v.titleEn || v.title) : v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="video-caption">
                <span className="video-title">{en ? (v.titleEn || v.title) : v.title}</span>
                <span className="video-meta">{en ? (v.metaEn || v.meta) : v.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}