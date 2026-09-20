"use client";

import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { CtaButton } from "@/components/ui/cta-button";
import { useContactModal } from "@/components/layout/contact-modal";
import { PRIMARY_CTA_LABEL } from "@/lib/content";

const INSIGHTS = [
  {
    number: "01",
    label: "Merma invisible",
    body: "Corresponde a operación, no siempre a robo: una góndola mal exhibida o un precio desactualizado durante horas.",
  },
  {
    number: "02",
    label: "Robo hormiga",
    body: "Bajo volumen y alta frecuencia. Difícil de ver sin datos en tiempo real del punto de venta.",
  },
  {
    number: "03",
    label: "Visibilidad de piso",
    body: "Tráfico y zonas calientes que hoy la mayoría de las tiendas físicas no mide de forma sistemática.",
  },
];

export function InsightBlock() {
  const { openModal } = useContactModal();

  return (
    <Section className="py-20 sm:py-28">
      <div className="grid gap-12 border-t border-line pt-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-verde-acento">Antes del reporte de inventario</p>
          <h2 className="font-display text-balance mt-4 text-4xl sm:text-5xl">
            Hay un tipo de pérdida que no aparece en el inventario
          </h2>
          <p className="mt-6 max-w-md font-body text-base normal-case tracking-normal text-ink-muted">
            No siempre es robo. Es una góndola mal exhibida, una cámara que
            nadie revisa, un anaquel que se queda desactualizado de precio
            durante horas. La merma operativa se acumula antes de
            convertirse en una cifra de cierre de periodo.
          </p>
          <CtaButton
            onClick={() => openModal("showroom")}
            className="mt-8"
          >
            {PRIMARY_CTA_LABEL}
          </CtaButton>
        </Reveal>

        <Reveal group stagger={0.1} className="divide-y divide-line border-y border-line lg:border-none lg:divide-y-0">
          {INSIGHTS.map((insight) => (
            <div
              key={insight.number}
              data-reveal-item
              className="pleca flex gap-5 py-6 pl-6 first:pt-0 lg:border-b lg:border-line lg:last:border-none"
            >
              <span className="font-mono text-sm text-azul-primario">
                {insight.number}
              </span>
              <div>
                <p className="font-display text-lg">{insight.label}</p>
                <p className="mt-2 text-sm text-ink-muted">{insight.body}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
