"use client";

import { useLanguage } from "@/components/LanguageContext";

interface GalleryImage {
  src: string;
  caption: string | null;
}

const galleryImages: GalleryImage[] = [
  { src: "/gallery-01.jpg", caption: null }, // placeholder — photo withheld
  { src: "/gallery-02.jpg", caption: null }, // placeholder — photo withheld
  { src: "/gallery-03.jpg", caption: null }, // placeholder — photo withheld
  { src: "/gallery-04.jpg", caption: "Kvintesszencia Mesteriskola 2025/26" },
  { src: "/gallery-05.jpg", caption: "Kvintesszencia Mesteriskola 2025/26" },
  { src: "/gallery-06.jpg", caption: "Kvintesszencia 2024/25" },
  { src: "/gallery-07.jpg", caption: "Kvintesszencia 2024/25" },
  { src: "/gallery-08.jpg", caption: null }, // duplicate — replace with new photo
  { src: "/gallery-09.jpg", caption: "Kvintesszencia 2024/25" },
  { src: "/gallery-10.jpg", caption: null }, // duplicate — replace with new photo
  { src: "/gallery-11.jpg", caption: null }, // duplicate — replace with new photo
  { src: "/gallery-12.jpg", caption: "Kvintesszencia 2024/25" },
  { src: "/gallery-13.jpg", caption: null }, // duplicate — replace with new photo
  { src: "/gallery-14.jpg", caption: null }, // Google Photos batch — caption pending
  { src: "/gallery-15.jpg", caption: null }, // Google Photos batch — caption pending
  { src: "/gallery-16.jpg", caption: null }, // duplicate — replace with new photo
  { src: "/gallery-17.jpg", caption: null }, // duplicate — replace with new photo
  { src: "/gallery-18.jpg", caption: null }, // duplicate — replace with new photo
  { src: "/gallery-19.jpg", caption: null }, // Google Photos batch — caption pending
  { src: "/gallery-20.jpg", caption: null }, // duplicate — replace with new photo
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
                alt={img.caption ? `Elek Petra — ${img.caption}` : "Elek Petra — Gallery"}
                className={`gallery-photo${i >= galleryImages.length - 4 ? " gallery-photo-focus-top" : ""}`}
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
              {img.caption && (
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