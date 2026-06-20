"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "scaleIn";
  delay?: number;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const element = ref.current;
    if (!element) return;

    // Check if already in viewport (for above-fold content)
    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
    
    if (isInViewport) {
      // Small delay to allow initial render
      const timer = setTimeout(() => setIsVisible(true), delay * 100 + 50);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin: "50px" }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, delay]);

  const animationClass = {
    fadeUp: "animate-fade-up",
    fadeIn: "animate-fade-in",
    scaleIn: "animate-scale-in",
  }[animation];

  // Show content immediately if JS is disabled or before hydration
  // Animation only hides content if JS successfully loads
  const shouldAnimate = mounted && !isVisible;

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : shouldAnimate ? "opacity-0" : ""}`}
      style={delay > 0 && isVisible ? { animationDelay: `${delay * 100}ms` } : undefined}
    >
      {children}
    </div>
  );
}