import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { OEM_DATA_VALOR } from "@/lib/oem-content";

export function OemDataValor() {
  const { headline, categories } = OEM_DATA_VALOR;

  return (
    <Section id="data-de-valor" className="scroll-mt-24 py-16 sm:py-20">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">{OEM_DATA_VALOR.eyebrow}</p>
        <h2 className="font-display mt-4 text-3xl sm:text-4xl">
          {OEM_DATA_VALOR.title}
        </h2>
        <p className="mt-4 max-w-xl font-body text-base normal-case tracking-normal text-ink-muted">
          {OEM_DATA_VALOR.intro}
        </p>
      </Reveal>

      <Reveal className="mt-10 grid overflow-hidden border border-line-strong bg-azul-primario lg:grid-cols-[1fr_1.1fr]">
        <div className="p-8 sm:p-10">
          <p className="eyebrow text-white/80">{headline.label}</p>
          <p className="font-display mt-3 text-7xl sm:text-8xl">{headline.stat}</p>
          <p className="font-display mt-2 max-w-xs text-xl leading-tight sm:text-2xl">
            {headline.statBody}
          </p>
          <p className="mt-4 max-w-xs text-sm text-white/80">{headline.note}</p>
        </div>
        <div className="divide-y divide-white/15 border-t border-white/15 lg:border-l lg:border-t-0">
          {headline.facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-center justify-between gap-4 px-8 py-5 sm:px-10"
            >
              <div>
                <p className="font-display text-lg">{fact.label}</p>
                <p className="eyebrow text-white/70 normal-case tracking-normal">
                  {fact.meta}
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-2xl sm:text-3xl">{fact.value}</p>
                <p className="text-xs text-white/70">{fact.valueNote}</p>
              </div>
            </div>
          ))}
          <p className="px-8 py-5 text-xs text-white/70 sm:px-10">
            {headline.footnote}
          </p>
        </div>
      </Reveal>

      <Reveal
        group
        stagger={0.08}
        className="mt-px grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
      >
        {categories.map((category) => (
          <div
            key={category.label}
            data-reveal-item
            className="bg-tinta-raised p-6 transition-colors hover:bg-tinta-card"
          >
            <p className="eyebrow text-ink-faint">{category.label}</p>
            <p className="font-display mt-3 text-3xl text-azul-primario">
              {category.stat1}
            </p>
            <p className="mt-1 text-xs text-ink-muted">{category.stat1Note}</p>
            <p className="font-display mt-4 text-2xl text-verde-acento">
              {category.stat2}
            </p>
            <p className="mt-1 text-xs text-ink-muted">{category.stat2Note}</p>
          </div>
        ))}
      </Reveal>
      <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">
        {OEM_DATA_VALOR.sources}
      </p>
    </Section>
  );
}
