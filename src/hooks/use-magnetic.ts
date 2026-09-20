"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

/**
 * Subtle magnetic pull toward the cursor for premium CTA buttons.
 * Translation is capped at `max` px regardless of element size, so two
 * buttons sitting a normal gap apart never drift into each other.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35, max = 8) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (prefersReduced || !hasHover) return;

    const clamp = (value: number) => Math.max(-max, Math.min(max, value));

    const handleMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = event.clientX - rect.left - rect.width / 2;
      const relY = event.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: clamp(relX * strength),
        y: clamp(relY * strength),
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [strength, max]);

  return ref;
}
