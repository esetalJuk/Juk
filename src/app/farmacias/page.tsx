import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Icon } from "@/components/icons/icon";

import { FarmaciasHero } from "@/components/farmacias/farmacias-hero";
import { SideProgressNav } from "@/components/farmacias/side-progress-nav";
import { ZoneSection } from "@/components/farmacias/zone-section";
import { SectionZone } from "@/components/oem/section-zone";
import { SectionHeader } from "@/components/oem/section-header";

import {
  FARMACIAS_HERO,
  FARMACIAS_GRUPOS,
  FARMACIAS_ZONAS,
  FARMACIAS_CIERRE,
  FARMACIAS_CTA,
} from "@/lib/farmacias-content";

export const metadata: Metadata = {
  title: FARMACIAS_HERO.h1,
  description:
    "Protección, exhibición e inteligencia para cada punto de tu farmacia: bases de seguridad, ganchos inteligentes, dispensadores, etiquetas, EAS, inteligencia artificial y cerraduras electrónicas.",
};

export default function FarmaciasPage() {
  const exhibicionZonas = FARMACIAS_ZONAS.filter(
    (zone) => zone.group === "exhibicion",
  );
  const seguridadZonas = FARMACIAS_ZONAS.filter(
    (zone) => zone.group === "seguridad",
  );

  return (
    <>
      <FarmaciasHero />

      <SideProgressNav />
      <div className="xl:pl-72">
        <div className="zone-light" style={{ backgroundColor: "#ffffff" }}>
          <Section
            id={FARMACIAS_GRUPOS.exhibicion.slug}
            className="scroll-mt-20 pt-8 sm:pt-10 pb-[60px]"
          >
            <SectionHeader
              eyebrow={FARMACIAS_GRUPOS.exhibicion.label}
              title={FARMACIAS_GRUPOS.exhibicion.title}
              intro={FARMACIAS_GRUPOS.exhibicion.body}
            />
          </Section>
        </div>

        {exhibicionZonas.map((zone, index) => (
          <SectionZone key={zone.slug} id={zone.slug} accent={zone.accent}>
            <ZoneSection zone={zone} reverse={index % 2 === 1} />
          </SectionZone>
        ))}

        <div className="zone-light" style={{ backgroundColor: "#ffffff" }}>
          <Section
            id={FARMACIAS_GRUPOS.seguridad.slug}
            className="scroll-mt-20 pt-8 sm:pt-10 pb-[60px]"
          >
            <SectionHeader
              eyebrow={FARMACIAS_GRUPOS.seguridad.label}
              title={FARMACIAS_GRUPOS.seguridad.title}
              intro={FARMACIAS_GRUPOS.seguridad.body}
            />
          </Section>
        </div>

        {seguridadZonas.map((zone, index) => (
          <SectionZone key={zone.slug} id={zone.slug} accent={zone.accent}>
            <ZoneSection zone={zone} reverse={index % 2 === 1} />
          </SectionZone>
        ))}

        <SectionZone id="por-que" accent="azul-primario">
          <Section className="pt-8 sm:pt-10 pb-[60px]">
            <SectionHeader
              eyebrow={FARMACIAS_CIERRE.eyebrow}
              title={FARMACIAS_CIERRE.title}
              intro={FARMACIAS_CIERRE.body}
            />
            <Reveal
              group
              stagger={0.08}
              className="grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
            >
              {FARMACIAS_CIERRE.highlights.map((highlight) => (
                <div
                  key={highlight}
                  data-reveal-item
                  className="flex items-start gap-3 bg-[#070d14] p-6"
                >
                  <Icon
                    name="check"
                    className="mt-0.5 h-5 w-5 shrink-0 text-verde-acento"
                  />
                  <span className="text-sm text-[#fff]/70">{highlight}</span>
                </div>
              ))}
            </Reveal>
          </Section>
        </SectionZone>
      </div>

      <div id="cierre">
        <CtaBanner title={FARMACIAS_CTA.title} body={FARMACIAS_CTA.body} />
      </div>
    </>
  );
}
