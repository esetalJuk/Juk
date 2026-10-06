import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";

const STEPS = [
  {
    number: "01",
    title: "En el piso de venta",
    body: "En Dások convertimos espacios comerciales en entornos inteligentes, seguros y rentables. Imagina el recorrido completo de un cliente en tu tienda: desde que se acerca al anaquel, el Display protege el producto sin que pierda accesibilidad, y las Digital Tools lo acompañan con la información justa en el momento en que está decidiendo qué comprar. Es una experiencia que puedes ver funcionando en nuestro showroom antes de decidir.",
  },
  {
    number: "02",
    title: "Detrás de escena",
    body: "Mientras tanto, la inteligencia artificial con datos en tiempo real observa ese recorrido y revela patrones que hoy son invisibles para tu equipo. Las etiquetas ESL mantienen el precio correcto en cada anaquel de forma remota, sin que nadie tenga que corregirlo a mano, y las cerraduras electrónicas resguardan los artículos de mayor valor sin esconderlos del cliente. Ambas las puedes probar en persona durante una visita.",
  },
  {
    number: "03",
    title: "Un solo socio estratégico",
    body: "Los sistemas EAS detectan cualquier intento de robo en el instante en que ocurre, no en el reporte del día siguiente. Todo esto no como piezas sueltas de distintos proveedores, sino como un solo socio estratégico que piensa el espacio comercial de principio a fin.",
  },
];

export function HowItWorks() {
  return (
    <Section className="py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">Cómo lo hacemos</p>
        <h2 className="font-display text-balance mt-4 text-4xl sm:text-5xl">
          Un mismo recorrido, un solo entorno
        </h2>
      </Reveal>

      <Reveal
        group
        stagger={0.1}
        className="mt-12 grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-3"
      >
        {STEPS.map((step) => (
          <div
            key={step.number}
            data-reveal-item
            className="flex flex-col bg-[#070d14] p-7 sm:p-8"
          >
            <span className="font-mono text-sm text-azul-primario">
              {step.number}
            </span>
            <h3 className="font-display mt-4 text-xl leading-tight text-[#fff]">
              {step.title}
            </h3>
            <p className="mt-3 font-body text-sm normal-case tracking-normal text-[#fff]/70">
              {step.body}
            </p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
