import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";

import { OemHero } from "@/components/oem/oem-hero";
import { SideProgressNav } from "@/components/oem/side-progress-nav";
import { DoingGrid } from "@/components/oem/doing-grid";
import { SectionZone } from "@/components/oem/section-zone";
import { SolutionIntro } from "@/components/oem/solution-intro";
import { SectionHeader } from "@/components/oem/section-header";
import { CategoryHeader } from "@/components/oem/category-header";
import { ProductCards } from "@/components/oem/product-cards";
import { FeatureGrid } from "@/components/oem/feature-grid";
import { ProductTable } from "@/components/oem/product-table";
import { ProcessSteps } from "@/components/oem/process-steps";
import { Faq } from "@/components/oem/faq";

import {
  OEM_HERO,
  OEM_RETO,
  OEM_ENTORNO_INTRO,
  OEM_PARA_QUIEN,
  OEM_SEGURIDAD,
  OEM_SIGNAGE,
  OEM_INTERACCION,
  OEM_IA,
  OEM_CERRADURAS,
  OEM_ESL,
  OEM_EAS,
  OEM_PROCESS,
  OEM_FAQ,
  OEM_CIERRE,
} from "@/lib/oem-content";

export const metadata: Metadata = {
  title: OEM_HERO.h1,
  description:
    "Seguridad para exhibición, Digital Signage, interacción en punto de venta, inteligencia artificial, cerraduras electrónicas, etiquetas ESL y antenas EAS para exhibición de electrónica de consumo en México.",
};

export default function OemElectronicaPage() {
  return (
    <>
      <OemHero />

      <SideProgressNav />
      <div className="xl:pl-72">
        <div className="zone-light" style={{ backgroundColor: "#ffffff" }}>
          <Section id="reto" className="scroll-mt-20 py-12 sm:py-16">
            <SectionHeader eyebrow={OEM_RETO.eyebrow} title={OEM_RETO.title} />
            <FeatureGrid features={OEM_RETO.features} columns={3} />
          </Section>

          <Section id="entorno" className="scroll-mt-20 py-12 sm:py-16">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-white">{OEM_ENTORNO_INTRO.eyebrow}</p>
              <h2 className="font-display text-balance mt-4 text-3xl sm:text-4xl">
                {OEM_ENTORNO_INTRO.title}
              </h2>
              <p className="mt-5 max-w-xl font-body text-base normal-case tracking-normal text-ink-muted">
                {OEM_ENTORNO_INTRO.body}
              </p>
            </Reveal>

            <div className="mt-10">
              <DoingGrid />
            </div>
          </Section>

          <Section className="py-12 sm:py-16">
            <SectionHeader
              eyebrow={OEM_PARA_QUIEN.eyebrow}
              title={OEM_PARA_QUIEN.title}
            />
            <FeatureGrid features={OEM_PARA_QUIEN.features} columns={3} />
          </Section>
        </div>

        {/* 01 — Seguridad para exhibición */}
        <SectionZone id="seguridad" accent="azul-primario">
          <SolutionIntro {...OEM_SEGURIDAD.intro} number="01" />

          <Section className="py-12 sm:py-16">
            <div className="grid overflow-hidden border border-line bg-line gap-px lg:grid-cols-2">
              <Reveal className="relative min-h-[280px] bg-tinta-raised">
                <Image
                  src={OEM_SEGURIDAD.categorias.image}
                  alt={OEM_SEGURIDAD.categorias.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                {OEM_SEGURIDAD.categorias.imageCredit && (
                  <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-1 text-[10px] text-[#fff]/70">
                    {OEM_SEGURIDAD.categorias.imageCredit}
                  </span>
                )}
              </Reveal>
              <Reveal className="flex flex-col justify-center bg-tinta-raised p-8 sm:p-10">
                <span className="block h-[3px] w-9 bg-azul-primario" />
                <p className="eyebrow mt-4 text-white">
                  {OEM_SEGURIDAD.categorias.eyebrow}
                </p>
                <h2 className="font-display mt-3 text-3xl sm:text-4xl">
                  {OEM_SEGURIDAD.categorias.title}
                </h2>
                <p className="mt-4 max-w-xl font-body text-sm normal-case tracking-normal text-ink-muted">
                  {OEM_SEGURIDAD.categorias.body}
                </p>
              </Reveal>
            </div>
          </Section>

          <Section className="py-12 sm:py-16">
            <CategoryHeader
              icon={OEM_SEGURIDAD.electronicas.icon}
              label={OEM_SEGURIDAD.electronicas.label}
              title={OEM_SEGURIDAD.electronicas.title}
              body={OEM_SEGURIDAD.electronicas.body}
            />
            <FeatureGrid features={OEM_SEGURIDAD.electronicas.features} columns={4} />
            <div className="mt-10">
              <ProductTable rows={OEM_SEGURIDAD.electronicas.tabla.rows} />
            </div>
          </Section>

          <Section className="py-12 sm:py-16">
            <CategoryHeader
              icon={OEM_SEGURIDAD.mecanicas.icon}
              label={OEM_SEGURIDAD.mecanicas.label}
              title={OEM_SEGURIDAD.mecanicas.title}
              body={OEM_SEGURIDAD.mecanicas.body}
            />
            <FeatureGrid features={OEM_SEGURIDAD.mecanicas.features} columns={3} />
            <div className="mt-10">
              <ProductTable rows={OEM_SEGURIDAD.mecanicas.tabla.rows} />
            </div>
          </Section>

          <Section className="py-12 sm:py-16">
            <SectionHeader
              eyebrow={OEM_SEGURIDAD.logros.eyebrow}
              title={OEM_SEGURIDAD.logros.title}
            />
            <FeatureGrid features={OEM_SEGURIDAD.logros.items} columns={2} />
          </Section>
        </SectionZone>

        {/* 02 — Digital Signage */}
        <SectionZone id="signage" accent="verde-acento">
          <SolutionIntro {...OEM_SIGNAGE.intro} number="02" />

          <Section className="py-12 sm:py-16">
            <SectionHeader
              eyebrow={OEM_SIGNAGE.donde.eyebrow}
              title={OEM_SIGNAGE.donde.title}
            />
            <ProductCards products={OEM_SIGNAGE.donde.products} />
          </Section>

          <Section className="py-12 sm:py-16">
            <SectionHeader
              eyebrow={OEM_SIGNAGE.control.eyebrow}
              title={OEM_SIGNAGE.control.title}
            />
            <FeatureGrid features={OEM_SIGNAGE.control.features} columns={4} />
          </Section>

          <Section className="py-12 sm:py-16">
            <div className="grid overflow-hidden border border-line bg-line gap-px lg:grid-cols-2">
              <Reveal className="relative min-h-[280px] bg-tinta-raised">
                <Image
                  src={OEM_SIGNAGE.pricingApp.image}
                  alt={OEM_SIGNAGE.pricingApp.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </Reveal>
              <Reveal className="flex flex-col justify-center bg-tinta-raised p-8 sm:p-10">
                <p className="eyebrow text-white">
                  {OEM_SIGNAGE.pricingApp.eyebrow}
                </p>
                <h3 className="font-display mt-3 text-2xl leading-tight sm:text-3xl">
                  {OEM_SIGNAGE.pricingApp.title}
                </h3>
                <p className="mt-4 max-w-md font-body text-sm normal-case tracking-normal text-ink-muted">
                  {OEM_SIGNAGE.pricingApp.body}
                </p>
              </Reveal>
            </div>
          </Section>
        </SectionZone>

        {/* 03 — Interacción en punto de venta */}
        <SectionZone id="interaccion" accent="azul-corporativo">
          <SolutionIntro {...OEM_INTERACCION.intro} number="03" />

          <Section className="py-12 sm:py-16">
            <SectionHeader
              eyebrow={OEM_INTERACCION.formas.eyebrow}
              title={OEM_INTERACCION.formas.title}
            />
            <ProductCards products={OEM_INTERACCION.formas.products} />
          </Section>
        </SectionZone>

        {/* 04 — Inteligencia artificial */}
        <SectionZone id="ia" accent="verde-acento">
          <SolutionIntro {...OEM_IA.intro} number="04" fit="contain" />

          <Section className="py-12 sm:py-16">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-white">{OEM_IA.implementa.eyebrow}</p>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl">
                {OEM_IA.implementa.title}
              </h2>
              <p className="mt-4 max-w-xl font-body text-sm normal-case tracking-normal text-ink-muted">
                {OEM_IA.implementa.body}
              </p>
            </Reveal>
          </Section>

          <Section className="py-12 sm:py-16">
            <SectionHeader
              eyebrow={OEM_IA.funciones.eyebrow}
              title={OEM_IA.funciones.title}
            />
            <FeatureGrid features={OEM_IA.funciones.features} columns={3} />
          </Section>

          <Section className="py-12 sm:py-16">
            <SectionHeader
              eyebrow={OEM_IA.aplicaciones.eyebrow}
              title={OEM_IA.aplicaciones.title}
            />
            <FeatureGrid features={OEM_IA.aplicaciones.features} columns={4} />
          </Section>
        </SectionZone>

        {/* 05 — Cerraduras electrónicas */}
        <SectionZone id="cerraduras" accent="azul-primario">
          <SolutionIntro {...OEM_CERRADURAS.intro} number="05" fit="contain" />

          <Section className="py-12 sm:py-16">
            <SectionHeader
              eyebrow={OEM_CERRADURAS.control.eyebrow}
              title={OEM_CERRADURAS.control.title}
            />
            <FeatureGrid features={OEM_CERRADURAS.control.features} columns={3} />
          </Section>
        </SectionZone>

        {/* 06 — Etiquetas ESL */}
        <SectionZone id="esl" accent="azul-corporativo">
          <SolutionIntro {...OEM_ESL.intro} number="06" />

          <Section className="py-12 sm:py-16">
            <SectionHeader
              eyebrow={OEM_ESL.detalle.eyebrow}
              title={OEM_ESL.detalle.title}
            />
            <FeatureGrid features={OEM_ESL.detalle.features} columns={3} />
            <Reveal
              group
              stagger={0.08}
              className="mt-px grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3"
            >
              {OEM_ESL.detalle.specs.map((spec) => (
                <div
                  key={spec.note}
                  data-reveal-item
                  className="bg-tinta-card px-6 py-5 text-center"
                >
                  <p className="font-display text-2xl text-verde-acento">
                    {spec.value}
                  </p>
                  <p className="text-xs text-ink-muted">{spec.note}</p>
                </div>
              ))}
            </Reveal>
          </Section>
        </SectionZone>

        {/* 07 — Antenas EAS y consumibles */}
        <SectionZone id="eas" accent="verde-acento">
          <SolutionIntro {...OEM_EAS.intro} number="07" />

          <Section className="py-12 sm:py-16">
            <SectionHeader
              eyebrow={OEM_EAS.resuelve.eyebrow}
              title={OEM_EAS.resuelve.title}
            />
            <FeatureGrid features={OEM_EAS.resuelve.features} columns={3} />
          </Section>

          <Section className="py-12 sm:py-16">
            <Reveal className="max-w-2xl">
              <p className="eyebrow text-white">{OEM_EAS.consumibles.eyebrow}</p>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl">
                {OEM_EAS.consumibles.title}
              </h2>
              <p className="mt-4 max-w-xl font-body text-sm normal-case tracking-normal text-ink-muted">
                {OEM_EAS.consumibles.body}
              </p>
            </Reveal>
          </Section>
        </SectionZone>

        <Section className="py-12 sm:py-16">
          <SectionHeader
            eyebrow={OEM_PROCESS.eyebrow}
            title={OEM_PROCESS.title}
          />
          <ProcessSteps />
          <p className="mt-8 text-sm text-ink-faint">{OEM_PROCESS.note}</p>
        </Section>

        <Section className="py-12 sm:py-16">
          <SectionHeader eyebrow={OEM_FAQ.eyebrow} title={OEM_FAQ.title} />
          <Faq />
        </Section>
      </div>

      <div id="cierre">
        <CtaBanner title={OEM_CIERRE.title} body={OEM_CIERRE.body} />
      </div>
    </>
  );
}
