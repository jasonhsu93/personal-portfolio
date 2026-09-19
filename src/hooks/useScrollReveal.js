import { useEffect, useRef } from "react";

// Animate on entry without hiding content while it waits to enter the viewport.
export function useScrollReveal() {
  const rootRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia || !window.IntersectionObserver) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer;
    const animations = new Set();
    const stop = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    const start = () => {
      stop();
      if (preference.matches || !rootRef.current) return;
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            const animation = entry.target.animate(
              [
                { opacity: 0, translate: "0 16px" },
                { opacity: 1, translate: "0 0" },
              ],
              { duration: 520, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
            );
            animations.add(animation);
            animation.onfinish = () => animations.delete(animation);
          });
        },
        { threshold: 0.08 },
      );
      rootRef.current
        .querySelectorAll(
          ".sectionHeader, .educationItem, .timelineItem, .featuredProject, .projectCard, .creatorNote, .stackGroup, .contactRow",
        )
        .forEach((element) => observer.observe(element));
    };
    start();
    preference.addEventListener("change", start);
    return () => {
      stop();
      preference.removeEventListener("change", start);
    };
  }, []);

  return rootRef;
}
