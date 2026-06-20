"use client";

import { useEffect, useRef } from "react";

export function ScrollController() {
  const isScrolling = useRef(false);
  const currentSection = useRef(0);

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

    // Handle wheel scroll
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Prevent rapid scrolling
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

    // Handle nav link clicks
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        const sectionId = target.hash.slice(1);
        const index = sections.indexOf(sectionId);
        if (index !== -1) {
          e.preventDefault();
          scrollToSection(index);
          
          // Close mobile nav if open
          const mobileNav = document.querySelector(".mobile-nav") as HTMLElement;
          if (mobileNav) {
            mobileNav.classList.remove("open");
          }
        }
      }
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling.current) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      // Minimum swipe distance
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

    window.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("click", handleNavClick);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.removeEventListener("click", handleNavClick);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return null;
}