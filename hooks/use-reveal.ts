'use client';

import { useEffect, useRef } from 'react';

/**
 * Adds the `is-visible` class to elements with the `reveal` class
 * when they enter the viewport. Re-scans on dependency changes.
 */
export function useReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.reveal, .reveal-left, .reveal-scale, .reveal-up'));
    if (observerRef.current) observerRef.current.disconnect();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    observerRef.current = observer;
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
