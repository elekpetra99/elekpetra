"use client";

import { useEffect, useRef } from "react";

export function ScrollController() {
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const sections = ["hero", "about", "repertoire", "media", "contact"];
    
    const scrollToSection = (index: number) => {
      if (index < 0 || index >= sections.length) return;
      
      const element = document.getElementById(sections[index]);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    const getCurrentSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      return Math.round(scrollY / windowHeight);
    };

    // Handle wheel scroll
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;
      
      // Debounce - prevent rapid scrolling
      if (isScrolling.current || timeSinceLastScroll < 800) return;
      
      const direction = e.deltaY > 0 ? 1 : -1;
      const currentSection = getCurrentSection();
      const nextSection = currentSection + direction;
      
      if (nextSection >= 0 && nextSection < sections.length) {
        isScrolling.current = true;
        lastScrollTime.current = now;
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
        if (sections.includes(sectionId)) {
          e.preventDefault();
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            
            // Close mobile nav if open
            const mobileNav = document.querySelector(".mobile-nav") as HTMLElement;
            if (mobileNav) {
              mobileNav.classList.remove("open");
            }
          }
        }
      }
    };

    // Passive wheel for better performance, but we need to prevent default
    // So we use non-passive
    window.addEventListener("wheel", handleWheel, { passive: false });
    document.addEventListener("click", handleNavClick);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      document.removeEventListener("click", handleNavClick);
    };
  }, []);

  return null;
}