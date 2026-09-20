"use client";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/icons/icon";
import { gsap } from "@/lib/gsap";
import { OEM_SOLUTION_LINES } from "@/lib/oem-content";

function goToZone(slug: string) {
  const el = document.getElementById(slug);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });

  const target = el.querySelector<HTMLElement>("[data-zone-content]") ?? el;
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  if (prefersReduced) return;

  gsap.fromTo(
    target,
    { x: -28, opacity: 0.5 },
    { x: 0, opacity: 1, duration: 0.65, ease: "power3.out", delay: 0.35 },
  );
}

export function SectionPicker() {
  return (
    <Section className="py-16 sm:py-20">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">El entorno</p>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl">
          Elige por dónde empezar
        </h2>
        <p className="mt-4 max-w-xl font-body text-base normal-case tracking-normal text-ink-muted">
          Siete líneas de solución bajo un solo entorno. Elige una para ir
          directo a su detalle.
        </p>
      </Reveal>

      <Reveal
        group
        stagger={0.06}
        className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
      >
        {OEM_SOLUTION_LINES.map((line) => (
          <button
            key={line.slug}
            type="button"
            data-reveal-item
            onClick={() => goToZone(line.slug)}
            className="group flex flex-col items-start gap-3 bg-tinta-raised p-6 text-left transition-colors hover:bg-tinta-card"
          >
            <span className="font-mono text-xs text-azul-primario">
              {line.number}
            </span>
            <span className="font-display text-xl leading-tight transition-colors group-hover:text-verde-acento">
              {line.label}
            </span>
            <span className="text-sm text-ink-muted">{line.description}</span>
            <span className="eyebrow mt-2 flex items-center gap-1.5 text-azul-primario transition-transform duration-300 group-hover:translate-x-1">
              Ver sección
              <Icon name="arrowRight" className="h-3.5 w-3.5" />
            </span>
          </button>
        ))}
      </Reveal>
    </Section>
  );
}
