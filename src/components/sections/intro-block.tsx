import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";

const FUNCTIONS = [
  {
    number: "01",
    label: "Exhibir",
    body: "El cliente toca, prueba y compara con libertad.",
  },
  {
    number: "02",
    label: "Vender",
    body: "La información correcta llega justo en el momento en que decide.",
  },
  {
    number: "03",
    label: "Proteger",
    body: "El inventario y los artículos de mayor valor permanecen resguardados.",
  },
];

export function IntroBlock() {
  return (
    <Section className="py-20 sm:py-28">
      <Reveal>
        <p className="eyebrow text-verde-acento">Introducción</p>
        <p className="font-display text-balance mt-4 max-w-3xl text-3xl sm:text-4xl">
          Una tienda rentable no elige entre mostrar su producto y cuidarlo.
          Cuando el espacio está bien pensado, cada metro de piso de venta
          cumple tres funciones a la vez:
        </p>
      </Reveal>

      <Reveal
        group
        stagger={0.1}
        className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-3"
      >
        {FUNCTIONS.map((item) => (
          <div
            key={item.number}
            data-reveal-item
            className="bg-tinta-raised p-6"
          >
            <span className="font-mono text-xs text-ink-faint">
              {item.number}
            </span>
            <h3 className="font-display mt-4 text-2xl text-verde-acento">
              {item.label}
            </h3>
            <p className="mt-2 text-sm text-ink-muted">{item.body}</p>
          </div>
        ))}
      </Reveal>

      <Reveal>
        <p className="mt-10 max-w-2xl font-body text-base normal-case tracking-normal text-ink-muted">
          Eso es lo que construimos contigo, como socio estratégico, y
          puedes verlo operando en nuestros showrooms antes de tomar
          cualquier decisión.
        </p>
      </Reveal>
    </Section>
  );
}
