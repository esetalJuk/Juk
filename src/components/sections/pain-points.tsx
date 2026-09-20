import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import type { PainPoint } from "@/lib/content";

export function PainPoints({ points }: { points: PainPoint[] }) {
  return (
    <Section className="py-16 sm:py-20">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">Dolor de negocio</p>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl">
          Lo que hoy erosiona el margen en piso de venta
        </h2>
      </Reveal>

      <Reveal
        group
        stagger={0.08}
        className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2"
      >
        {points.map((point) => (
          <div
            key={point.label}
            data-reveal-item
            className="pleca bg-tinta-raised py-6 pl-7 pr-6"
          >
            <h3 className="font-display text-xl">{point.label}</h3>
            <p className="mt-2 text-sm text-ink-muted">{point.description}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
