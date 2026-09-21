"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { HeroScene } from "@/components/three/hero-scene";
import { CtaButton } from "@/components/ui/cta-button";
import { useContactModal } from "@/components/layout/contact-modal";
import { PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/content";
import { OEM_HERO } from "@/lib/oem-content";

export function OemHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { openModal } = useContactModal();

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const targets = el.querySelectorAll("[data-hero-item]");
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ delay: 0.1 });
    tl.set(targets, { opacity: 0, y: 24 });
    tl.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.1,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden border-b border-line pb-16 pt-32 sm:pb-20 sm:pt-40"
    >
      <HeroScene />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <p data-hero-item className="eyebrow text-white">
          {OEM_HERO.eyebrow}
        </p>
        <h1
          data-hero-item
          className="font-display text-balance mt-6 max-w-3xl text-4xl sm:text-6xl lg:text-7xl"
        >
          {OEM_HERO.h1}
        </h1>
        <p
          data-hero-item
          className="font-display mt-6 max-w-xl text-xl normal-case tracking-normal text-azul-primario sm:text-2xl"
        >
          {OEM_HERO.hook}
        </p>
        <p
          data-hero-item
          className="mt-4 max-w-2xl font-body text-base normal-case tracking-normal text-ink-muted"
        >
          {OEM_HERO.intro}
        </p>
        <div data-hero-item className="mt-9 flex flex-wrap gap-4">
          <CtaButton onClick={() => openModal("showroom")}>
            {PRIMARY_CTA_LABEL}
          </CtaButton>
          <CtaButton variant="secondary" onClick={() => openModal("asesor")}>
            {SECONDARY_CTA_LABEL}
          </CtaButton>
        </div>
      </div>
    </div>
  );
}
