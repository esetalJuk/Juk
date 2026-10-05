import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";

const PARAGRAPHS = [
  "En Dások convertimos espacios comerciales en entornos inteligentes, seguros y rentables. Imagina el recorrido completo de un cliente en tu tienda: desde que se acerca al anaquel, el Display protege el producto sin que pierda accesibilidad, y las Digital Tools lo acompañan con la información justa en el momento en que está decidiendo qué comprar. Es una experiencia que puedes ver funcionando en nuestro showroom antes de decidir.",
  "Mientras tanto, la inteligencia artificial con datos en tiempo real observa ese recorrido y revela patrones que hoy son invisibles para tu equipo. Detrás de escena, las etiquetas ESL mantienen el precio correcto en cada anaquel de forma remota, sin que nadie tenga que corregirlo a mano, y las cerraduras electrónicas resguardan los artículos de mayor valor sin esconderlos del cliente. Ambas las puedes probar en persona durante una visita.",
  "Y los sistemas EAS detectan cualquier intento de robo en el instante en que ocurre, no en el reporte del día siguiente. Todo esto no como piezas sueltas de distintos proveedores, sino como un solo socio estratégico que piensa el espacio comercial de principio a fin.",
];

export function HowItWorks() {
  return (
    <Section className="py-20 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-verde-acento">Cómo lo hacemos</p>
      </Reveal>

      <Reveal
        group
        stagger={0.1}
        className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-8"
      >
        {PARAGRAPHS.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            data-reveal-item
            className="font-body text-base normal-case tracking-normal text-ink-muted"
          >
            {paragraph}
          </p>
        ))}
      </Reveal>
    </Section>
  );
}
