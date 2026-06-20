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
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth"
        });
      }
    };

    // Handle wheel scroll - works on Chrome/Firefox
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
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

    // Handle scroll for Safari and other browsers
    const handleScroll = () => {
      if (isScrolling.current) return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSection = Math.round(scrollY / windowHeight);
      
      if (newSection !== currentSection.current) {
        currentSection.current = newSection;
      }
    };

    // Handle nav link clicks
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        const sectionId = target.hash.slice(1);
        const index = sections.indexOf(sectionId);
        if (index !== -1) {
          e.preventDefault();
          scrollToSection(index);
          
          const mobileNav = document.querySelector(".mobile-nav") as HTMLElement;
          if (mobileNav) {
            mobileNav.classList.remove("open");
          }
        }
      }
    };

    // Touch events for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      if (Math.abs(diff) < 50) return;
      
      const direction = diff > 0 ? 1 : -1;
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
      if (e.key === "ArrowDown" || e.key === "PageDown") direction = 1;
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

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleNavClick);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleNavClick);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}