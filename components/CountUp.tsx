
"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

// True when the visitor has asked their device for less motion
function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia("(prefers-reduced-motion: reduce)");
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}

// Counts up to a value like "1057+" when it scrolls into view.
// Without JavaScript, or with reduced motion, the real value is shown straight away.
export default function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const reducedMotion = usePrefersReducedMotion();
  // null means: show the real value
  const [current, setCurrent] = useState<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || target === null || reducedMotion) return;

    let frame = 0;
    let started = false;
    setCurrent(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.disconnect();

        const duration = 1400;
        const begin = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - begin) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCurrent(Math.round(eased * target));
          if (progress < 1) {
            frame = requestAnimationFrame(step);
          } else {
            setCurrent(null);
          }
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target, reducedMotion]);

  return (
    <span ref={ref}>
      {/* Screen readers get the real number; the counting is only for the eyes */}
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">
        {current === null ? value : `${current}${suffix}`}
      </span>
    </span>
  );
}