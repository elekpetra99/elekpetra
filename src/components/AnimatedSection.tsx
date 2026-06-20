"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "scaleIn";
  delay?: number;
  threshold?: number;
  /**
   * If true, element starts visible and animates out of view (for above-fold content)
   * If false (default), element starts invisible and animates in when scrolled into view
   */
  aboveFold?: boolean;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  threshold = 0.1,
  aboveFold = false,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(aboveFold);
  const [hasAnimated, setHasAnimated] = useState(aboveFold);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasAnimated) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      setHasAnimated(true);
      return;
    }

    // For above-fold content, check if already in viewport
    if (aboveFold) {
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      if (isInViewport) {
        // Already visible, animate immediately
        requestAnimationFrame(() => {
          setIsVisible(true);
          setHasAnimated(true);
        });
        return;
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: "50px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay, aboveFold, hasAnimated]);

  // Build inline styles for transform
  const getStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
      transitionDelay: isVisible && delay > 0 ? `${delay * 100}ms` : "0ms",
    };

    // Always visible after animation
    if (isVisible) {
      base.opacity = 1;
      base.transform = "none";
    } else {
      // Hidden state before animation
      base.opacity = 0;
      if (animation === "fadeUp") {
        base.transform = "translateY(30px)";
      } else if (animation === "scaleIn") {
        base.transform = "scale(0.98)";
      }
    }

    return base;
  };

  return (
    <div ref={ref} className={className} style={getStyle()}>
      {children}
    </div>
  );
}