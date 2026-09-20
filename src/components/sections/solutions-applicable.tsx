import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { getSolution } from "@/lib/content";

export function SolutionsApplicable({ slugs }: { slugs: string[] }) {
  const solutions = slugs.map((slug) => getSolution(slug));

  return (
    <Section className="py-16 sm:py-20">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">Solución</p>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl">
          Lo que integra este entorno
        </h2>
      </Reveal>

      <Reveal
        group
        stagger={0.08}
        className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
      >
        {solutions.map((solution) => (
          <div
            key={solution.slug}
            data-reveal-item
            className="bg-tinta-raised p-6"
          >
            <h3 className="font-display text-xl leading-tight">
              {solution.label}
            </h3>
            <p className="eyebrow mt-2 text-verde-acento normal-case tracking-normal">
              {solution.short}
            </p>
            <p className="mt-3 text-sm text-ink-muted">
              {solution.description}
            </p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
