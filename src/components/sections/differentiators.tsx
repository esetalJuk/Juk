import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { DASOK_DIFFERENCES, DIFFERENTIATORS } from "@/lib/content";

export function Differentiators() {
  return (
    <Section className="py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">Por qué Dások</p>
        <h2 className="font-display mt-4 text-4xl sm:text-5xl">
          Cinco razones verificables, no atributos de producto
        </h2>
      </Reveal>

      <div className="mt-14 divide-y divide-line border-y border-line">
        {DIFFERENTIATORS.map((item) => (
          <Reveal
            key={item.number}
            className="pleca grid gap-4 py-10 pl-8 sm:grid-cols-[auto_1fr] sm:gap-10 sm:py-12 sm:pl-10"
          >
            <span className="font-mono text-3xl text-azul-primario sm:text-4xl">
              {item.number}
            </span>
            <div>
              <h3 className="font-display text-2xl sm:text-3xl">
                {item.title}
              </h3>
              <p className="eyebrow mt-3 text-ink-faint normal-case tracking-normal">
                {item.kicker}
              </p>
              <p className="mt-4 max-w-2xl font-body text-base normal-case tracking-normal text-ink-muted">
                {item.body}
              </p>
              <p className="font-display mt-4 text-lg text-verde-acento sm:text-xl">
                {item.quote}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <p className="eyebrow text-verde-acento">Lo que nos hace diferentes</p>
        <div
          data-reveal-group
          className="mt-6 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5"
        >
          {DASOK_DIFFERENCES.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-tinta-raised p-5"
            >
              <Icon name="check" className="h-5 w-5 shrink-0 text-verde-acento" />
              <span className="text-sm text-ink-muted">{item}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
