"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageContext";

export function ScrollController() {
  const { lang } = useLanguage();
  const isScrolling = useRef(false);
  const currentSection = useRef(0);

  // Update document title when language changes
  useEffect(() => {
    document.title = lang === "en" ? "Petra Elek — Soprano" : "Elek Petra — Szoprán";
  }, [lang]);

  useEffect(() => {
    const sections = ["hero", "about", "repertoire", "media", "contact"];
    
    const scrollToSection = (index: number) => {
      if (index < 0 || index >= sections.length) return;
      
      const element = document.getElementById(sections[index]);
      if (element) {
        currentSection.current = index;
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Wheel scroll - intercept and snap to section
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      if (isScrolling.current) return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = currentSection.current + direction;
      
      if (nextSection >= 0 && nextSection < sections.length) {
        isScrolling.current = true;
        scrollToSection(nextSection);
        
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    };

    // Touch swipe for mobile
    let touchStartY = 0;
    let touchStartX = 0;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const diffY = touchStartY - touchEndY;
      const diffX = touchStartX - touchEndX;
      
      // Only trigger if vertical swipe is dominant
      if (Math.abs(diffY) < 50 || Math.abs(diffX) > Math.abs(diffY)) return;
      
      const direction = diffY > 0 ? 1 : -1;
      const nextSection = currentSection.current + direction;
      
      if (nextSection >= 0 && nextSection < sections.length) {
        isScrolling.current = true;
        scrollToSection(nextSection);
        
        setTimeout(() => {
          isScrolling.current = false;
        }, 800);
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling.current) return;
      
      let direction = 0;
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") direction = 1;
      else if (e.key === "ArrowUp" || e.key === "PageUp") direction = -1;
      
      if (direction !== 0) {
        e.preventDefault();
        const nextSection = currentSection.current + direction;
        
        if (nextSection >= 0 && nextSection < sections.length) {
          isScrolling.current = true;
          scrollToSection(nextSection);
          
          setTimeout(() => {
            isScrolling.current = false;
          }, 800);
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
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  return null;
}