import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { PILLARS } from "@/lib/content";

export function PillarsGrid() {
  const topPillars = PILLARS.filter((pillar) => !pillar.parent);

  return (
    <Section className="py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">Un entorno por operación</p>
        <h2 className="font-display mt-4 text-4xl sm:text-5xl">
          Tu operación decide el pilar, no el catálogo
        </h2>
        <p className="mt-5 max-w-xl font-body text-base normal-case tracking-normal text-ink-muted">
          Un director de prevención de pérdidas de una tienda departamental y
          un administrador de centro comercial no llegan al mismo problema.
          Cada pilar responde al dolor específico de su operación.
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
