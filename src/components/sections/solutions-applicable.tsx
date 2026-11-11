import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { getSolution } from "@/lib/content";
import { SOLUTION_HREF } from "@/lib/solutions-content";

type ExtraLink = { label: string; short: string; href: string };

export function SolutionsApplicable({
  slugs,
  extra = [],
}: {
  slugs: string[];
  extra?: ExtraLink[];
}) {
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
        {solutions.map((solution) => {
          const href = SOLUTION_HREF[solution.slug];
          return (
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
              {href && (
                <Link
                  href={href}
                  className="eyebrow mt-4 inline-block text-azul-primario hover:text-white"
                >
                  Conoce más →
                </Link>
              )}
            </div>
          );
        })}
        {extra.map((item) => (
          <div key={item.href} data-reveal-item className="bg-tinta-raised p-6">
            <h3 className="font-display text-xl leading-tight">{item.label}</h3>
            <p className="mt-3 text-sm text-ink-muted">{item.short}</p>
            <Link
              href={item.href}
              className="eyebrow mt-4 inline-block text-azul-primario hover:text-white"
            >
              Conoce más →
            </Link>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
