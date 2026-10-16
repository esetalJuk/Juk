import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SolutionIntro } from "@/components/oem/solution-intro";
import { FeatureGrid } from "@/components/oem/feature-grid";
import type { FarmaciasZone } from "@/lib/farmacias-content";

export function ZoneSection({
  zone,
  reverse,
}: {
  zone: FarmaciasZone;
  /** Flips which side carries the solution text vs. the highlights, for left/right rhythm across zones. */
  reverse?: boolean;
}) {
  return (
    <>
      <SolutionIntro
        number={zone.number}
        title={zone.title}
        tagline={zone.zoneLabel}
        body={zone.problema}
        centered
        taglineGreen
      />

      <Section className="pt-8 sm:pt-10 pb-[60px]">
        <div className="grid overflow-hidden border border-line bg-line gap-px lg:grid-cols-2">
          <Reveal
            className={`flex flex-col justify-center bg-[#070d14] p-8 sm:p-10 ${reverse ? "lg:order-2" : ""}`}
          >
            <div className="flex items-center gap-2">
              <Icon name={zone.icon} className="h-5 w-5 text-verde-acento" />
              <span className="eyebrow text-verde-acento">La solución</span>
            </div>
            {zone.solucion.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="mt-4 font-body text-sm normal-case tracking-normal text-[#fff]/70 first:mt-3"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal
            group
            stagger={0.08}
            className={`grid grid-cols-1 gap-px bg-line sm:grid-cols-2 ${reverse ? "lg:order-1" : ""}`}
          >
            {zone.highlights.map((highlight) => (
              <div
                key={highlight}
                data-reveal-item
                className="flex items-start gap-3 bg-[#070d14] p-6"
              >
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-verde-acento" />
                <span className="text-sm text-[#fff]/70">{highlight}</span>
              </div>
            ))}
          </Reveal>
        </div>

        {zone.subItems && (
          <div className="mt-px">
            <FeatureGrid features={zone.subItems} columns={3} />
          </div>
        )}
      </Section>
    </>
  );
}
