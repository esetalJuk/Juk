import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SOLUTIONS } from "@/lib/content";
import { SOLUTION_HREF } from "@/lib/solutions-content";

export function SolutionsGrid() {
  return (
    <Section className="py-14 sm:py-20">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">Nuestras soluciones</p>
        <h2 className="font-display mt-4 text-4xl sm:text-5xl">
          Un entorno integral que conecta cada punto de control
        </h2>
        <p className="mt-5 max-w-xl font-body text-base normal-case tracking-normal text-ink-muted">
          Display, Digital Tools, inteligencia artificial con datos en
          tiempo real, etiquetas ESL, cerraduras electrónicas y sistemas
          EAS, con Dások como tu socio estratégico en cada etapa.
        </p>
      </Reveal>

      <Reveal
        group
        stagger={0.08}
        className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
      >
        {SOLUTIONS.map((solution, index) => (
          <Link
            key={solution.slug}
            href={SOLUTION_HREF[solution.slug] ?? "/soluciones"}
            data-reveal-item
            className="group flex flex-col justify-between bg-tinta-raised p-6 transition-colors hover:bg-tinta-card"
          >
            <span className="font-mono text-xs text-ink-faint">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="mt-6">
              <h3 className="font-display text-xl leading-tight">
                {solution.label}
              </h3>
              <p className="eyebrow mt-2 text-verde-acento normal-case tracking-normal">
                {solution.short}
              </p>
              <p className="mt-3 text-sm text-ink-muted">
                {solution.description}
              </p>
              <span className="eyebrow mt-4 inline-block text-azul-primario">
                Conoce más →
              </span>
            </div>
          </Link>
        ))}
      </Reveal>
    </Section>
  );
}
