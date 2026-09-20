import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Icon } from "@/components/icons/icon";

import { OemHero } from "@/components/oem/oem-hero";
import { SectionExplorer, type ExplorerZone } from "@/components/oem/section-explorer";
import { SolutionIntro } from "@/components/oem/solution-intro";
import { SectionHeader } from "@/components/oem/section-header";
import { ProductCards } from "@/components/oem/product-cards";
import { FeatureGrid } from "@/components/oem/feature-grid";
import { ImageFeatureSplit } from "@/components/oem/image-feature-split";
import { NumberedList } from "@/components/oem/numbered-list";
import { OemClosing } from "@/components/oem/closing";

import {
  OEM_HERO,
  OEM_ENTORNO_INTRO,
  OEM_SOLUTION_LINES,
  OEM_SEGURIDAD,
  OEM_SIGNAGE,
  OEM_INTERACCION,
  OEM_IA,
  OEM_CERRADURAS,
  OEM_ESL,
  OEM_EAS,
} from "@/lib/oem-content";

export const metadata: Metadata = {
  title: OEM_HERO.h1,
  description:
    "Seguridad para display, Digital Signage, interacción en punto de venta, inteligencia artificial, cerraduras electrónicas, etiquetas ESL y antenas EAS para exhibición de electrónica de consumo en México.",
};

const ZONE_CONTENT: Record<string, ExplorerZone["content"]> = {
  seguridad: (
    <>
      <SolutionIntro {...OEM_SEGURIDAD.intro} />

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_SEGURIDAD.celulares.eyebrow}
          title={OEM_SEGURIDAD.celulares.title}
          intro={OEM_SEGURIDAD.celulares.intro}
        />
        <ProductCards products={OEM_SEGURIDAD.celulares.products} />
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_SEGURIDAD.autonomia.eyebrow}
          title={OEM_SEGURIDAD.autonomia.title}
          intro={OEM_SEGURIDAD.autonomia.intro}
        />
        <ProductCards products={OEM_SEGURIDAD.autonomia.products} columns={2} />
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_SEGURIDAD.laptops.eyebrow}
          title={OEM_SEGURIDAD.laptops.title}
          intro={OEM_SEGURIDAD.laptops.intro}
        />
        <ImageFeatureSplit
          image={OEM_SEGURIDAD.laptops.image}
          alt={OEM_SEGURIDAD.laptops.title}
          features={OEM_SEGURIDAD.laptops.features}
        />
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_SEGURIDAD.audio.eyebrow}
          title={OEM_SEGURIDAD.audio.title}
          intro={OEM_SEGURIDAD.audio.intro}
        />
        <ProductCards products={OEM_SEGURIDAD.audio.products} />
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_SEGURIDAD.wearables.eyebrow}
          title={OEM_SEGURIDAD.wearables.title}
          intro={OEM_SEGURIDAD.wearables.intro}
        />
        <ProductCards products={OEM_SEGURIDAD.wearables.products} columns={2} />
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_SEGURIDAD.mecanicas.eyebrow}
          title={OEM_SEGURIDAD.mecanicas.title}
          intro={OEM_SEGURIDAD.mecanicas.intro}
        />
        <ProductCards products={OEM_SEGURIDAD.mecanicas.products} />
        <Reveal className="mt-6">
          <p className="font-display text-xl text-verde-acento sm:text-2xl">
            {OEM_SEGURIDAD.mecanicas.closing}
          </p>
        </Reveal>
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_SEGURIDAD.implementa.eyebrow}
          title={OEM_SEGURIDAD.implementa.title}
        />
        <NumberedList items={OEM_SEGURIDAD.implementa.items} />
      </div>
    </>
  ),

  signage: (
    <>
      <SolutionIntro {...OEM_SIGNAGE.intro} />

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_SIGNAGE.donde.eyebrow}
          title={OEM_SIGNAGE.donde.title}
          intro={OEM_SIGNAGE.donde.intro}
        />
        <ProductCards products={OEM_SIGNAGE.donde.products} />
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_SIGNAGE.control.eyebrow}
          title={OEM_SIGNAGE.control.title}
          intro={OEM_SIGNAGE.control.intro}
        />
        <FeatureGrid features={OEM_SIGNAGE.control.features} columns={4} />
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_SIGNAGE.pricingApp.eyebrow}
          title={OEM_SIGNAGE.pricingApp.title}
          intro={OEM_SIGNAGE.pricingApp.intro}
        />
        <ImageFeatureSplit
          image={OEM_SIGNAGE.pricingApp.image}
          alt={OEM_SIGNAGE.pricingApp.title}
          features={OEM_SIGNAGE.pricingApp.features}
          footnote={OEM_SIGNAGE.pricingApp.footnote}
        />
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_SIGNAGE.vivitag.eyebrow}
          title={OEM_SIGNAGE.vivitag.title}
          intro={OEM_SIGNAGE.vivitag.intro}
        />
        <FeatureGrid features={OEM_SIGNAGE.vivitag.features} columns={4} />
      </div>
    </>
  ),

  interaccion: (
    <>
      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_INTERACCION.intro.eyebrow}
          title={OEM_INTERACCION.intro.title}
        />
        <FeatureGrid features={OEM_INTERACCION.intro.features} columns={2} />
        <Reveal className="mt-6">
          <p className="font-display text-xl text-verde-acento sm:text-2xl">
            {OEM_INTERACCION.intro.closing}
          </p>
        </Reveal>
      </div>

      <SolutionIntro {...OEM_INTERACCION.productoResponde} />

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_INTERACCION.formas.eyebrow}
          title={OEM_INTERACCION.formas.title}
        />
        <ProductCards products={OEM_INTERACCION.formas.products} />
        <Reveal className="mt-6">
          <p className="max-w-2xl font-display text-xl leading-snug sm:text-2xl">
            {OEM_INTERACCION.formas.closing}
          </p>
        </Reveal>
      </div>
    </>
  ),

  ia: (
    <>
      <SolutionIntro {...OEM_IA.intro} fit="contain" />

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_IA.implementa.eyebrow}
          title={OEM_IA.implementa.title}
          intro={OEM_IA.implementa.intro}
        />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {OEM_IA.implementa.columns.map((column) => (
            <div key={column.heading}>
              <p className="eyebrow border-b border-line pb-3 text-ink-faint">
                {column.heading}
              </p>
              <div className="divide-y divide-line">
                {column.items.map((item) => (
                  <Reveal
                    key={item.title}
                    className="group flex gap-4 py-5 transition-colors hover:bg-white/[0.03]"
                  >
                    <Icon
                      name={item.icon}
                      className="mt-1 h-5 w-5 shrink-0 text-verde-acento transition-transform duration-300 group-hover:scale-110"
                    />
                    <div>
                      <h3 className="font-display text-base">{item.title}</h3>
                      <p className="mt-1 text-sm text-ink-muted">{item.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_IA.funciones.eyebrow}
          title={OEM_IA.funciones.title}
          intro={OEM_IA.funciones.intro}
        />
        <Reveal
          group
          stagger={0.06}
          className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {OEM_IA.funciones.features.map((feature) => (
            <div
              key={feature.title}
              data-reveal-item
              className={`group p-6 transition-colors ${
                feature.highlight
                  ? "bg-azul-corporativo hover:bg-azul-primario"
                  : "bg-tinta-raised hover:bg-tinta-card"
              }`}
            >
              <Icon
                name={feature.icon}
                className={`h-6 w-6 transition-transform duration-300 group-hover:scale-110 ${feature.highlight ? "text-white" : "text-verde-acento"}`}
              />
              <h3 className="font-display mt-4 text-lg leading-tight">
                {feature.title}
              </h3>
              <p className={`mt-2 text-sm ${feature.highlight ? "text-white/85" : "text-ink-muted"}`}>
                {feature.body}
              </p>
            </div>
          ))}
          <div
            data-reveal-item
            className="flex flex-col justify-center bg-tinta-card p-6"
          >
            <p className="eyebrow text-ink-faint">{OEM_IA.funciones.stat.label}</p>
            <div className="mt-4 flex gap-6">
              {OEM_IA.funciones.stat.items.map((item) => (
                <div key={item.note}>
                  <p className="font-display text-2xl text-azul-primario">
                    {item.value}
                  </p>
                  <p className="text-xs text-ink-muted">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_IA.aplicaciones.eyebrow}
          title={OEM_IA.aplicaciones.title}
          intro={OEM_IA.aplicaciones.intro}
        />
        <FeatureGrid features={OEM_IA.aplicaciones.features} columns={4} />
      </div>
    </>
  ),

  cerraduras: (
    <>
      <SolutionIntro {...OEM_CERRADURAS.intro} fit="contain" />

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_CERRADURAS.control.eyebrow}
          title={OEM_CERRADURAS.control.title}
          intro={OEM_CERRADURAS.control.intro}
        />
        <FeatureGrid features={OEM_CERRADURAS.control.features} columns={3} />
      </div>
    </>
  ),

  esl: (
    <>
      <SolutionIntro {...OEM_ESL.intro} />

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_ESL.detalle.eyebrow}
          title={OEM_ESL.detalle.title}
          intro={OEM_ESL.detalle.intro}
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
      </div>
    </>
  ),

  eas: (
    <>
      <SolutionIntro {...OEM_EAS.intro} />

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_EAS.resuelve.eyebrow}
          title={OEM_EAS.resuelve.title}
          intro={OEM_EAS.resuelve.intro}
        />
        <ImageFeatureSplit
          image={OEM_EAS.resuelve.image}
          alt={OEM_EAS.resuelve.title}
          features={OEM_EAS.resuelve.features}
        />
      </div>

      <div className="px-5 py-16 sm:px-8 sm:py-20">
        <SectionHeader
          eyebrow={OEM_EAS.consumibles.eyebrow}
          title={OEM_EAS.consumibles.title}
          intro={OEM_EAS.consumibles.intro}
        />
        <ProductCards products={OEM_EAS.consumibles.products} />
      </div>
    </>
  ),
};

const ZONES: ExplorerZone[] = OEM_SOLUTION_LINES.map((line) => ({
  slug: line.slug,
  number: line.number,
  label: line.label,
  icon: line.icon,
  description: line.description,
  accent: line.accent,
  content: ZONE_CONTENT[line.slug],
}));

export default function OemElectronicaPage() {
  return (
    <>
      <OemHero />

      <Section className="py-16 sm:py-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-verde-acento">{OEM_ENTORNO_INTRO.eyebrow}</p>
          <h2 className="font-display text-balance mt-4 text-3xl sm:text-4xl">
            {OEM_ENTORNO_INTRO.title}
          </h2>
          <p className="mt-5 max-w-xl font-body text-base normal-case tracking-normal text-ink-muted">
            {OEM_ENTORNO_INTRO.body}
          </p>
        </Reveal>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <SectionExplorer zones={ZONES} />
      </Section>

      <OemClosing />
      <CtaBanner
        title="Ver para decidir, antes de comprometer presupuesto"
        body="Prueba la exhibición segura, el Digital Signage y las etiquetas ESL en un entorno real. Agenda tu visita al showroom CDMX o Culiacán."
      />
    </>
  );
}
