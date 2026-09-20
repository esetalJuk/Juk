import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { FeatureGrid } from "@/components/oem/feature-grid";
import { OEM_QUIENES_SOMOS } from "@/lib/oem-content";

export function OemQuienesSomos() {
  return (
    <Section id="quienes-somos" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">{OEM_QUIENES_SOMOS.eyebrow}</p>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl">
          {OEM_QUIENES_SOMOS.title}
        </h2>
        <p className="mt-4 max-w-xl font-body text-base normal-case tracking-normal text-ink-muted">
          {OEM_QUIENES_SOMOS.body}
        </p>
      </Reveal>

      <div className="mt-10">
        <FeatureGrid columns={4} features={OEM_QUIENES_SOMOS.cards} />
      </div>

      <Reveal className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="eyebrow text-ink-faint">
          Showroom{" "}
          <span className="text-white normal-case tracking-normal">
            {OEM_QUIENES_SOMOS.showrooms}
          </span>
        </p>
        <p className="font-display text-lg text-verde-acento sm:text-xl">
          {OEM_QUIENES_SOMOS.closing}
        </p>
      </Reveal>
    </Section>
  );
}
