import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/icons/icon";
import { SolutionHero } from "@/components/sections/solution-hero";
import { FaqList } from "@/components/sections/faq-list";
import { CtaBanner } from "@/components/sections/cta-banner";
import { getSolutionPage, type SolutionPage } from "@/lib/solutions-content";

export function SolutionTemplate({ page }: { page: SolutionPage }) {
  const related = page.relatedSolutions.map((slug) => getSolutionPage(slug));

  return (
    <>
      <SolutionHero eyebrow={page.eyebrow} h1={page.h1} hook={page.hook} />

      <Section className="pt-14 sm:pt-20 pb-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-verde-acento">El problema</p>
          <h2 className="font-display text-balance mt-4 text-3xl sm:text-4xl">
            {page.problem.title}
          </h2>
          <p className="mt-5 font-body text-base normal-case tracking-normal text-ink-muted">
            {page.problem.body}
          </p>
        </Reveal>
      </Section>

      <Section className="py-10 sm:py-14">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-verde-acento">Cómo funciona</p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl">
            De la instalación a la operación diaria
          </h2>
        </Reveal>
        <Reveal
          group
          stagger={0.08}
          className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {page.howItWorks.map((step, index) => (
            <div key={step.title} className="bg-tinta-raised p-7 sm:p-8">
              <p className="font-mono text-sm text-azul-primario">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-4 text-lg leading-tight">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm normal-case tracking-normal text-ink-muted">
                {step.body}
              </p>
            </div>
          ))}
        </Reveal>
      </Section>

      <Section className="py-10 sm:py-14">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-verde-acento">Beneficios</p>
          <h2 className="font-display mt-4 text-3xl sm:text-4xl">
            Lo que cambia en tu operación
          </h2>
        </Reveal>
        <Reveal
          group
          stagger={0.08}
          className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-2"
        >
          {page.benefits.map((benefit) => (
            <div
              key={benefit}
              data-reveal-item
              className="flex items-start gap-3 bg-[#070d14] p-6"
            >
              <Icon
                name="check"
                className="mt-0.5 h-5 w-5 shrink-0 text-verde-acento"
              />
              <span className="text-sm text-[#fff]/70">{benefit}</span>
            </div>
          ))}
        </Reveal>
      </Section>

      {page.industryLinks.length > 0 && (
        <Section className="py-10 sm:py-14">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-verde-acento">Para qué tipo de tienda</p>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl">
              Aplica en tu vertical
            </h2>
          </Reveal>
          <Reveal
            group
            stagger={0.06}
            className="mt-8 flex flex-wrap gap-3"
          >
            {page.industryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="eyebrow border border-line px-5 py-3 text-ink-muted transition-colors hover:border-azul-primario hover:text-white"
              >
                {link.label} →
              </Link>
            ))}
          </Reveal>
        </Section>
      )}

      <Section className="py-10 sm:py-14">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-verde-acento">Preguntas frecuentes</p>
        </Reveal>
        <div className="mt-8">
          <FaqList items={page.faq} />
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="py-10 sm:py-14">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-verde-acento">Soluciones relacionadas</p>
          </Reveal>
          <Reveal
            group
            stagger={0.08}
            className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2"
          >
            {related.map((solution) => (
              <Link
                key={solution.slug}
                href={`/soluciones/${solution.slug}`}
                className="group bg-tinta-raised p-6 transition-colors hover:bg-tinta-card"
              >
                <h3 className="font-display text-xl leading-tight">
                  {solution.navLabel}
                </h3>
                <p className="mt-2 text-sm text-ink-muted">
                  {solution.cardShort}
                </p>
                <span className="eyebrow mt-4 inline-block text-azul-primario">
                  Conoce más →
                </span>
              </Link>
            ))}
          </Reveal>
        </Section>
      )}

      <CtaBanner />
    </>
  );
}
