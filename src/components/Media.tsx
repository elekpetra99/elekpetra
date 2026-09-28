"use client";

import { useLanguage } from "@/components/LanguageContext";

interface GalleryImage {
  src: string;
  caption: string | null;
}

const galleryImages: GalleryImage[] = [
  { src: "/gallery-01.jpg?v=2", caption: "Kvintesszencia Mesteriskola 2025/26" },
  { src: "/gallery-02.jpg?v=2", caption: "Kvintesszencia Mesteriskola 2025/26" },
  { src: "/gallery-03.jpg?v=2", caption: "Kvintesszencia 2024/25" },
  { src: "/gallery-04.jpg?v=2", caption: "Kvintesszencia 2024/25" },
  { src: "/gallery-05.jpg?v=2", caption: "Kvintesszencia 2024/25" },
  { src: "/gallery-06.jpg?v=2", caption: null }, // new photo — caption pending
  { src: "/gallery-07.jpg?v=2", caption: null }, // new photo — caption pending
  { src: "/gallery-08.jpg?v=2", caption: null }, // new photo — caption pending
];

// Per-slot crop focus (user-specified, desktop 3-col grid positions)
// 3-col layout: col1 = 01,04,07 / col2 = 02,05,08 / col3 = 03,06
const focusMap: (string | null)[] = [
  "gallery-photo-f10", // 01 — 10%
  "gallery-photo-f8", // 02 — 8%
  null, // 03 — center (default)
  "gallery-photo-f8", // 04 — 8%
  "gallery-photo-f20", // 05 — 20%
  "gallery-photo-f8", // 06 — 8% (unchanged)
  "gallery-photo-f50", // 07 — center 50%
  "gallery-photo-f20", // 08 — 20%
];

// Per-slot crop focus (see focusMap above)
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
                className={`gallery-photo${focusMap[i] ? ` ${focusMap[i]}` : ""}`}
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