"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { HeroScene } from "@/components/three/hero-scene";
import { CtaButton } from "@/components/ui/cta-button";
import { CtaLink } from "@/components/ui/cta-link";
import { useContactModal } from "@/components/layout/contact-modal";
import { PILLARS, PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL } from "@/lib/content";

export function HomeHero() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { openModal } = useContactModal();
  const topPillars = PILLARS.filter((pillar) => !pillar.parent);

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

    const tl = gsap.timeline({ delay: 0.15 });
    tl.set(targets, { opacity: 0, y: 28 });
    tl.to(targets, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power3.out",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden border-b border-line pb-20 pt-36 sm:pb-28 sm:pt-44"
    >
      <HeroScene />
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
        <p data-hero-item className="eyebrow text-verde-acento">
          Dások All Solutions · Retail físico en México
        </p>
        <h1
          data-hero-item
          className="font-display text-balance mt-6 max-w-4xl text-5xl sm:text-7xl lg:text-[5.5rem]"
        >
          Convertimos espacios comerciales en entornos inteligentes
        </h1>
        <p
          data-hero-item
          className="mt-7 max-w-xl font-body text-lg normal-case tracking-normal text-ink-muted"
        >
          Antenas EAS, etiquetas ESL, Digital Signage, inteligencia
          artificial con datos en tiempo real y cerraduras electrónicas, con
          Dások como tu socio estratégico en cada etapa: diagnóstico,
          instalación, capacitación y operación.
        </p>
        <div data-hero-item className="mt-10 flex flex-wrap gap-4">
          <CtaButton onClick={() => openModal("showroom")}>
            {PRIMARY_CTA_LABEL}
          </CtaButton>
          <CtaButton variant="secondary" onClick={() => openModal("asesor")}>
            {SECONDARY_CTA_LABEL}
          </CtaButton>
        </div>

        <div
          data-hero-item
          className="mt-16 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-8"
        >
          {topPillars.map((pillar) => (
            <CtaLink
              key={pillar.slug}
              href={`/${pillar.slug}`}
              variant="ghost"
              className="!px-0 !py-0 text-sm normal-case tracking-normal text-white/80 hover:text-verde-acento"
            >
              {pillar.navLabel} →
            </CtaLink>
          ))}
        </div>
      </div>
    </div>
  );
}
