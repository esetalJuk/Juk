"use client";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { CtaButton } from "@/components/ui/cta-button";
import { useContactModal } from "@/components/layout/contact-modal";
import {
  CONTACT_INFO,
  PRIMARY_CTA_LABEL,
  SECONDARY_CTA_LABEL,
} from "@/lib/content";

export function CtaBanner({
  title = "Ver para decidir, antes de comprometer presupuesto",
  body = "Dos showrooms interactivos en operación real, CDMX y norte del país. Agenda tu visita o habla con un asesor esta semana.",
}: {
  title?: string;
  body?: string;
}) {
  const { openModal } = useContactModal();
  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage,
  )}`;

  return (
    <Section className="py-20 sm:py-28">
      <Reveal className="pleca relative overflow-hidden border border-line-strong bg-tinta-raised px-8 py-14 sm:px-14 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-azul-primario/20 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-balance text-4xl sm:text-5xl">
            {title}
          </h2>
          <p className="mt-5 font-body text-base normal-case tracking-normal text-ink-muted">
            {body}
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <CtaButton onClick={() => openModal("showroom")}>
              {PRIMARY_CTA_LABEL}
            </CtaButton>
            <CtaButton variant="secondary" onClick={() => openModal("asesor")}>
              {SECONDARY_CTA_LABEL}
            </CtaButton>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow inline-flex items-center gap-2 px-7 py-4 text-verde-acento transition-colors hover:text-white"
            >
              Escribir por WhatsApp →
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
