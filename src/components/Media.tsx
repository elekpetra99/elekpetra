"use client";

import { useLanguage } from "@/components/LanguageContext";

interface GalleryImage {
  src: string;
  caption: string;
  orientation: "portrait" | "landscape";
}

const galleryImages: GalleryImage[] = [
  { src: "/gallery-01.jpg", caption: "placeholder", orientation: "portrait" },
  { src: "/gallery-02.jpg", caption: "placeholder", orientation: "portrait" },
  { src: "/gallery-03.jpg", caption: "placeholder", orientation: "portrait" },
  { src: "/gallery-04.jpg", caption: "Kvintesszencia 2024/25", orientation: "portrait" },
  { src: "/gallery-05.jpg", caption: "Kvintesszencia 2024/25", orientation: "portrait" },
  { src: "/gallery-06.jpg", caption: "Kvintesszencia 2024/25", orientation: "landscape" },
  { src: "/gallery-07.jpg", caption: "Kvintesszencia 2024/25", orientation: "portrait" },
  { src: "/gallery-08.jpg", caption: "Kvintesszencia 2024/25", orientation: "portrait" },
  { src: "/gallery-09.jpg", caption: "Kvintesszencia 2024/25", orientation: "landscape" },
  { src: "/gallery-10.jpg", caption: "Kvintesszencia Mesteriskola 2025/26", orientation: "portrait" },
  { src: "/gallery-11.jpg", caption: "Kvintesszencia Mesteriskola 2025/26", orientation: "portrait" },
  { src: "/gallery-12.jpg", caption: "Kvintesszencia Mesteriskola 2025/26", orientation: "landscape" },
];

export function Media() {
  const { t } = useLanguage();

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
                alt={`Elek Petra — ${img.caption === "placeholder" ? "Gallery" : img.caption}`}
                className="gallery-photo"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              {img.caption !== "placeholder" && (
                <div className="gallery-overlay">
                  <div className="gallery-title">{img.caption}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}