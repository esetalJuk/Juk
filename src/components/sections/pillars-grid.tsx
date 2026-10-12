import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { PILLARS } from "@/lib/content";

export function PillarsGrid() {
  const topPillars = PILLARS.filter((pillar) => !pillar.parent);

  return (
    <Section className="py-14 sm:py-20">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">Un entorno por operación</p>
        <h2 className="font-display mt-4 text-4xl sm:text-5xl">
          Una solución para cada operación
        </h2>
        <p className="mt-5 max-w-xl font-body text-base normal-case tracking-normal text-ink-muted">
          Retail, OEMs, farmacias y centros comerciales enfrentan retos
          distintos. Por eso estamos preparados para atender a cada sector
          con soluciones pensadas para su operación específica.
        </p>
      </Reveal>

      <Reveal
        group
        stagger={0.1}
        className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {topPillars.map((pillar) => (
          <Link
            key={pillar.slug}
            href={`/${pillar.slug}`}
            data-reveal-item
            className="group flex h-full flex-col bg-tinta-raised px-6 py-8 transition-colors hover:bg-tinta-card"
          >
            <span className="eyebrow text-ink-faint">{pillar.eyebrow}</span>
            <span className="font-display mt-4 text-2xl text-white transition-colors group-hover:text-verde-acento">
              {pillar.navLabel}
            </span>
            <span className="mt-3 flex-1 text-sm text-ink-muted">
              {pillar.painPoints[0]?.label}: {pillar.painPoints[0]?.description}
            </span>
            <span className="eyebrow mt-6 text-azul-primario transition-colors group-hover:text-verde-acento">
              Ver pilar →
            </span>
          </Link>
        ))}
      </Reveal>
    </Section>
  );
}
