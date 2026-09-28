"use client";

import { useLanguage } from "@/components/LanguageContext";

const galleryImages = [
  { src: "/gallery-01.jpg", orientation: "landscape" },
  { src: "/gallery-02.jpg", orientation: "portrait" },
  { src: "/gallery-03.jpg", orientation: "portrait" },
  { src: "/gallery-04.jpg", orientation: "portrait" },
  { src: "/gallery-05.jpg", orientation: "portrait" },
  { src: "/gallery-06.jpg", orientation: "portrait" },
  { src: "/gallery-07.jpg", orientation: "landscape" },
  { src: "/gallery-08.jpg", orientation: "portrait" },
  { src: "/gallery-09.jpg", orientation: "portrait" },
  { src: "/gallery-10.jpg", orientation: "portrait" },
  { src: "/gallery-11.jpg", orientation: "portrait" },
  { src: "/gallery-12.jpg", orientation: "landscape" },
];

export function Media() {
  const { t, lang } = useLanguage();
  const caption =
    lang === "en" ? "Kvintesszencia 2024/25" : "Kvintesszencia 2024/25";

  return (
    <section id="media" tabIndex={-1} aria-label={t.media.title}>
      <div className="media-content">
        <h2>{t.media.title}</h2>
        {t.media.intro && <p className="media-intro">{t.media.intro}</p>}

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div key={i} className="gallery-item">
              <img
                src={img.src}
                alt={`Elek Petra — ${caption}`}
                className="gallery-photo"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="gallery-overlay">
                <div className="gallery-title">{caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}