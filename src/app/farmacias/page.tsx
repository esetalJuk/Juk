import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";

import { FarmaciasHero } from "@/components/farmacias/farmacias-hero";
import { SideProgressNav } from "@/components/farmacias/side-progress-nav";
import { ZoneSection } from "@/components/farmacias/zone-section";
import { SectionZone } from "@/components/oem/section-zone";
import { SectionHeader } from "@/components/oem/section-header";
import { FeatureGrid } from "@/components/oem/feature-grid";

import {
  FARMACIAS_HERO,
  FARMACIAS_DOLOR,
  FARMACIAS_ZONAS_INTRO,
  FARMACIAS_ZONAS,
  FARMACIAS_POR_QUE,
  FARMACIAS_CIERRE,
} from "@/lib/farmacias-content";

export const metadata: Metadata = {
  title: FARMACIAS_HERO.h1,
  description:
    "Protección, exhibición e inteligencia para cada zona de tu farmacia: dermocosmética, fórmula infantil, mostrador, línea de cajas, bodega y piso de venta completo.",
};

export default function FarmaciasPage() {
  return (
    <>
      <FarmaciasHero />

      <SideProgressNav />
      <div className="xl:pl-72">
        <div className="zone-light" style={{ backgroundColor: "#ffffff" }}>
          <Section id="dolor" className="scroll-mt-20 pt-8 sm:pt-10 pb-[60px]">
            <SectionHeader
              eyebrow={FARMACIAS_DOLOR.eyebrow}
              title={FARMACIAS_DOLOR.title}
            />
            <FeatureGrid
              features={FARMACIAS_DOLOR.features}
              columns={4}
              variant="verde"
            />
          </Section>

          <Section id="zonas" className="scroll-mt-20 pt-8 sm:pt-10 pb-[60px]">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-white">{FARMACIAS_ZONAS_INTRO.eyebrow}</p>
              <h2 className="font-display text-balance mt-4 text-3xl sm:text-4xl">
                {FARMACIAS_ZONAS_INTRO.title}
              </h2>
              <p className="mt-5 max-w-xl font-body text-base normal-case tracking-normal text-ink-muted">
                {FARMACIAS_ZONAS_INTRO.body}
              </p>
            </Reveal>
          </Section>
        </div>

        {FARMACIAS_ZONAS.map((zone, index) => (
          <SectionZone key={zone.slug} id={zone.slug} accent={zone.accent}>
            <ZoneSection zone={zone} reverse={index % 2 === 1} />
          </SectionZone>
        ))}

        <SectionZone id="por-que" accent="azul-primario">
          <Section className="pt-8 sm:pt-10 pb-[60px]">
            <SectionHeader
              eyebrow={FARMACIAS_POR_QUE.eyebrow}
              title={FARMACIAS_POR_QUE.title}
              intro={FARMACIAS_POR_QUE.intro}
            />
            <FeatureGrid features={FARMACIAS_POR_QUE.features} columns={3} />
          </Section>
        </SectionZone>
      </div>

      <div id="cierre">
        <CtaBanner title={FARMACIAS_CIERRE.title} body={FARMACIAS_CIERRE.body} />
      </div>
    </>
  );
}
