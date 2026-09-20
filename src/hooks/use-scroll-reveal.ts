"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

type RevealOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
};

/**
 * Fade + rise reveal on scroll. If the mounted element carries
 * `data-reveal-group`, every `[data-reveal-item]` child is staggered
 * instead of the container itself.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: RevealOptions = {},
) {
  const ref = useRef<T | null>(null);
  const { y = 32, duration = 0.9, delay = 0, stagger = 0.08, start = "top 85%", once = true } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.hasAttribute("data-reveal-group")
      ? Array.from(el.querySelectorAll<HTMLElement>("[data-reveal-item]"))
      : [el];
    if (targets.length === 0) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y });
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          once,
        },
      });
    }, el);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === el) trigger.kill();
      });
    };
  }, [y, duration, delay, stagger, start, once]);

  return ref;
}
