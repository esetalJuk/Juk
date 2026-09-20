"use client";

import { useEffect, type ReactNode } from "react";
import type LocomotiveScrollType from "locomotive-scroll";
import { gsap, ScrollTrigger } from "@/lib/gsap";

/**
 * Wires Locomotive Scroll (built on Lenis) to GSAP's ticker + ScrollTrigger,
 * so scroll-driven animations stay in sync with the smoothed scroll position.
 * No-ops under prefers-reduced-motion, leaving native scroll in place.
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let scroll: LocomotiveScrollType | null = null;
    let cancelled = false;

    (async () => {
      const { default: LocomotiveScroll } = await import("locomotive-scroll");
      if (cancelled) return;

      scroll = new LocomotiveScroll({
        autoStart: true,
        lenisOptions: {
          duration: 1.05,
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 1.2,
        },
        scrollCallback: () => ScrollTrigger.update(),
        initCustomTicker: (render) => gsap.ticker.add(render),
        destroyCustomTicker: (render) => gsap.ticker.remove(render),
      });

      gsap.ticker.lagSmoothing(0);
      ScrollTrigger.refresh();

      window.addEventListener("load", () => ScrollTrigger.refresh());
    })();

    return () => {
      cancelled = true;
      scroll?.destroy();
    };
  }, []);

  return <>{children}</>;
}
