"use client";

import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageContext";

interface GalleryImage {
  src: string;
  caption: string | null;
}

const galleryImages: GalleryImage[] = [
  { src: "/gallery-01.jpg?v=3", caption: "Kvintesszencia Mesteriskola 2024/25" },
  { src: "/gallery-02.jpg?v=3", caption: "Kvintesszencia Mesteriskola 2024/25" },
  { src: "/gallery-03.jpg?v=3", caption: "Kvintesszencia Mesteriskola 2024/25" },
  { src: "/gallery-04.jpg?v=3", caption: "Kvintesszencia Mesteriskola 2025/26" },
  { src: "/gallery-05.jpg?v=3", caption: "Kvintesszencia Mesteriskola 2025/26" },
  { src: "/gallery-06.jpg?v=3", caption: "PIX Photostudio" },
  { src: "/gallery-07.jpg?v=3", caption: "PIX Photostudio" },
  { src: "/gallery-08.jpg?v=3", caption: "PIX Photostudio" },
];

// Per-slot crop focus (user-specified, mobile 2-col grid positions)
// 2-col layout: col1 = 01,03,05,07 / col2 = 02,04,06,08
const focusMap: (string | null)[] = [
  "gallery-photo-f10", // 01 — 10%
  "gallery-photo-f8", // 02 — 8%
  "gallery-photo-f8", // 03 — 8% (1col2 up)
  "gallery-photo-f8", // 04 — 8%
  "gallery-photo-f50", // 05 — 50% (1col3 down)
  "gallery-photo-f20", // 06 — 20%
  "gallery-photo-f25", // 07 — 25% (face-centered, measured)
  "gallery-photo-f20", // 08 — 20%
];

// Per-slot crop focus (see focusMap above)
export function Media() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeRef = useCallback((node: HTMLDivElement | null) => {
    node?.focus();
  }, []);

  const close = useCallback(() => setLightbox(null), []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((cur) =>
        cur === null ? cur : (cur + dir + galleryImages.length) % galleryImages.length
      );
    },
    []
  );

  useEffect(() => {
    if (lightbox === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };

    const lock = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = lock;
      document.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  const current = lightbox === null ? null : galleryImages[lightbox];

  return (
    <section id="media" tabIndex={-1} aria-label={t.media.title}>
      <div className="media-content">
        <h2>{t.media.title}</h2>
        {t.media.intro && <p className="media-intro">{t.media.intro}</p>}

        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="gallery-item"
              role="button"
              tabIndex={0}
              aria-label={img.caption ?? "Open photo"}
              onClick={() => setLightbox(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightbox(i);
                }
              }}
            >
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

      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.caption ?? "Photo"}
          ref={closeRef}
          tabIndex={-1}
          onClick={close}
        >
          <button
            type="button"
            className="lightbox-close"
            aria-label="Close"
            onClick={(e) => { e.stopPropagation(); close(); }}
          >
            ×
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-prev"
            aria-label="Previous photo"
            onClick={(e) => { e.stopPropagation(); step(-1); }}
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox-nav lightbox-next"
            aria-label="Next photo"
            onClick={(e) => { e.stopPropagation(); step(1); }}
          >
            ›
          </button>
          {current.caption && (
            <div className="lightbox-caption">{current.caption}</div>
          )}
          <img
            className="lightbox-img"
            src={current.src}
            alt={current.caption ? `Elek Petra — ${current.caption}` : "Elek Petra — Gallery"}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}