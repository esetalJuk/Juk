"use client";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { CtaButton } from "@/components/ui/cta-button";
import { useContactModal } from "@/components/layout/contact-modal";
import { SHOWROOMS } from "@/lib/content";

export function Showrooms() {
  const { openModal } = useContactModal();

  return (
    <Section className="py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">Showrooms</p>
        <h2 className="font-display text-balance mt-4 text-4xl sm:text-5xl">
          Visítanos antes de decidir
        </h2>
        <p className="mt-5 max-w-xl font-body text-base normal-case tracking-normal text-ink-muted">
          Tenemos dos showrooms interactivos con las seis soluciones
          operando en un entorno real. Elige el que te quede más cerca.
        </p>
      </Reveal>

      <Reveal
        group
        stagger={0.1}
        className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2"
      >
        {SHOWROOMS.map((showroom) => (
          <div
            key={showroom.city}
            data-reveal-item
            className="bg-tinta-raised p-6 sm:p-8"
          >
            <h3 className="font-display text-xl text-white">
              {showroom.city}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{showroom.details}</p>
          </div>
        ))}
      </Reveal>

      <div className="mt-9">
        <CtaButton onClick={() => openModal("showroom")}>
          Agenda tu visita
        </CtaButton>
      </div>
    </Section>
  );
}
