import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { getRetailFormats } from "@/lib/content";

export function FormatBreakdown() {
  const formats = getRetailFormats();

  return (
    <Section className="py-16 sm:py-20">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">Por formato</p>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl">
          Cada formato de retail pierde margen distinto
        </h2>
      </Reveal>

      <Reveal
        group
        stagger={0.08}
        className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {formats.map((format) => (
          <Link
            key={format.slug}
            href={`/${format.slug}`}
            data-reveal-item
            className="group flex h-full flex-col bg-tinta-raised p-6 transition-colors hover:bg-tinta-card"
          >
            <span className="font-display text-xl transition-colors group-hover:text-verde-acento">
              {format.navLabel}
            </span>
            <span className="mt-3 flex-1 text-sm text-ink-muted">
              {format.painPoints[0]?.label}
            </span>
            <span className="eyebrow mt-6 text-azul-primario transition-colors group-hover:text-verde-acento">
              Ver formato →
            </span>
          </Link>
        ))}
      </Reveal>
    </Section>
  );
}
