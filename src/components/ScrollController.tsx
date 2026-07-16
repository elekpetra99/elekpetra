"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageContext";

export function ScrollController() {
  const { lang } = useLanguage();
  const currentSection = useRef(0);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Update document title when language changes
  useEffect(() => {
    document.title = lang === "en" ? "Petra Elek — Soprano" : "Elek Petra — Szoprán";
  }, [lang]);

  useEffect(() => {
    const sections = ["hero", "about", "repertoire", "media", "contact"];
    const sectionVisibility = new Map<string, number>();

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Track which section is most visible using IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          sectionVisibility.set(entry.target.id, entry.intersectionRatio);
        });

        // Find section with highest visibility
        let maxRatio = 0;
        let mostVisibleSection = sections[currentSection.current];

        sectionVisibility.forEach((ratio, id) => {
          if (ratio > maxRatio && sections.includes(id)) {
            maxRatio = ratio;
            mostVisibleSection = id;
          }
        });

        const newIndex = sections.indexOf(mostVisibleSection);
        if (newIndex !== -1 && !isScrolling.current) {
          currentSection.current = newIndex;
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    // Observe all sections
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Smooth scroll to section
    const scrollToSection = (index: number) => {
      if (index < 0 || index >= sections.length) return;

      const element = document.getElementById(sections[index]);
      if (!element) return;

      currentSection.current = index;
      isScrolling.current = true;

      element.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start",
      });

      // Move focus to the section for screen reader accessibility
      // preventScroll avoids double-scroll in browsers that support it
      element.focus({ preventScroll: true });

      // Reset scroll lock after animation
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
      }, prefersReducedMotion ? 100 : 800);
    };

    // Check if a section's content overflows beyond the viewport
    const sectionOverflows = (sectionEl: HTMLElement) => {
      return sectionEl.scrollHeight > window.innerHeight + 60;
    };

    // Wheel scroll - intercept and snap to section
    const handleWheel = (e: WheelEvent) => {
      // Allow normal scroll for small deltas or if already scrolling
      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const currentEl = document.getElementById(
        sections[currentSection.current]
      );
      if (!currentEl) return;

      // If current section content overflows the viewport, allow normal
      // scrolling within it until we reach the top/bottom boundary
      if (sectionOverflows(currentEl)) {
        const rect = currentEl.getBoundingClientRect();
        const scrollingDown = e.deltaY > 0;

        // At the top of section scrolling up → snap to previous
        if (!scrollingDown && rect.top >= -1) {
          e.preventDefault();
          const prevSection = currentSection.current - 1;
          if (prevSection >= 0) scrollToSection(prevSection);
          return;
        }

        // At the bottom of section scrolling down → snap to next
        if (scrollingDown && rect.bottom <= window.innerHeight + 1) {
          e.preventDefault();
          const nextSection = currentSection.current + 1;
          if (nextSection < sections.length) scrollToSection(nextSection);
          return;
        }

        // Otherwise let the browser scroll normally within the section
        return;
      }

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection.current + direction;

      // Only intercept if there's a clear section to snap to
      if (nextSection >= 0 && nextSection < sections.length) {
        // Check if the current section is mostly in view (> 50%)
        const rect = currentEl.getBoundingClientRect();
        const visibility =
          rect.height > 0
            ? Math.max(
                0,
                Math.min(
                  1,
                  (Math.min(rect.bottom, window.innerHeight) -
                    Math.max(rect.top, 0)) /
                    rect.height
                )
              )
            : 0;

        // Only snap if current section is mostly visible (> 50%)
        if (visibility > 0.5) {
          e.preventDefault();
          scrollToSection(nextSection);
        }
      }
    };

    // Touch swipe for mobile
    let touchStartY = 0;
    let touchStartX = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
      touchStartTime = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const timeDiff = Date.now() - touchStartTime;
      const diffY = touchStartY - touchEndY;
      const diffX = touchStartX - touchEndX;

      // Only trigger if:
      // 1. Vertical swipe is dominant
      // 2. Swipe is long enough (> 50px)
      // 3. Swipe is fast enough (< 500ms)
      if (Math.abs(diffY) < 50 || Math.abs(diffX) > Math.abs(diffY) || timeDiff > 500) {
        return;
      }

      const direction = diffY > 0 ? 1 : -1;
      const nextSection = currentSection.current + direction;

      if (nextSection >= 0 && nextSection < sections.length) {
        scrollToSection(nextSection);
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;

      let direction = 0;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        direction = 1;
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        direction = -1;
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSection(0);
        return;
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSection(sections.length - 1);
        return;
      }

      if (direction !== 0) {
        e.preventDefault();
        const nextSection = currentSection.current + direction;

        if (nextSection >= 0 && nextSection < sections.length) {
          scrollToSection(nextSection);
        }
      }
    };

    // Nav link clicks
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      if (link && link.hash) {
        const sectionId = link.hash.slice(1);
        const index = sections.indexOf(sectionId);
        if (index !== -1) {
          e.preventDefault();
          scrollToSection(index);

          const mobileNav = document.querySelector(".mobile-nav") as HTMLElement;
          if (mobileNav) mobileNav.classList.remove("open");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleNavClick);

    return () => {
      observer.disconnect();
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  return null;
}