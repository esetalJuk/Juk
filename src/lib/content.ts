// Copy centralizada del sitio. Toda la redacción sigue la Guía de Tono y Voz
// Dások 2026: lenguaje ejecutivo, hook -> desarrollo -> CTA único, sin
// tecnicismos sin explicar, sin "ecosistema" / "proveedor único", sin cifras
// no verificadas. "Socio estratégico" siempre acompañado de una acción concreta.

export type Solution = {
  slug: string;
  label: string;
  short: string;
  description: string;
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "antenas-eas",
    label: "Antenas EAS",
    short: "Detección en el punto de salida",
    description:
      "Antenas de vigilancia electrónica que detectan la salida no autorizada de producto en tiempo real, en el perímetro de piso de venta.",
  },
  {
    slug: "etiquetas-esl",
    label: "Etiquetas ESL",
    short: "Precio y control de anaquel",
    description:
      "Etiquetas electrónicas de anaquel que actualizan precio y promociones en toda la tienda a la vez, sin recorridos manuales.",
  },
  {
    slug: "digital-signage",
    label: "Digital Signage",
    short: "Contenido en punto de venta",
    description:
      "Contenido digital en piso de venta que comunica promociones y experiencia de marca en el momento de decisión de compra.",
  },
  {
    slug: "inteligencia-artificial",
    label: "Inteligencia artificial con datos en tiempo real",
    short: "Visibilidad de tráfico y zonas",
    description:
      "Convierte cámaras existentes en una fuente de datos de tráfico, zonas calientes y alertas operativas, sin instalar hardware adicional.",
  },
  {
    slug: "cerraduras-electronicas",
    label: "Cerraduras electrónicas y mecánicas",
    short: "Control de acceso a categorías sensibles",
    description:
      "Cerraduras para vitrinas y anaqueles de producto de alto valor o categorías reguladas, con control de acceso trazable.",
  },
];

export type Differentiator = {
  number: string;
  title: string;
  kicker: string;
  body: string;
  quote: string;
  cta?: string;
};

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: "01",
    title: "Ver para decidir",
    kicker: "Dos showrooms interactivos en operación real — CDMX y norte del país",
    body: "El retailer experimenta antenas EAS, etiquetas ESL, Digital Signage, inteligencia artificial con datos en tiempo real y cerraduras electrónicas en un entorno real, no en maqueta, antes de comprometer presupuesto, sin importar en qué región del país esté su cadena.",
    quote: "Elimina el riesgo de adopción y acorta el ciclo de decisión.",
    cta: "Agenda tu visita al showroom más cercano",
  },
  {
    number: "02",
    title: "Acompañamiento integral, siempre disponible",
    kicker: "Un socio estratégico y un call center dedicado",
    body: "Dások acompaña cada etapa —diagnóstico, instalación, capacitación, operación e incidencias— sin que tu equipo de TI intervenga en cada falla.",
    quote: "La tecnología funciona. Y si no, la atendemos nosotros.",
  },
  {
    number: "03",
    title: "25 años leyendo el retail mexicano",
    kicker: "Inteligencia de mercado con evidencia local",
    body: "Conocimiento específico de cómo opera una farmacia en Guadalajara, una departamental en CDMX o una tienda en Monterrey — contexto que no se compra en dos años.",
    quote: "No hablamos de tendencias. Las hemos vivido y resuelto.",
  },
  {
    number: "04",
    title: "Tecnología global, criterio local",
    kicker: "Respaldo internacional con implementación mexicana",
    body: "Dások selecciona e implementa tecnología de primer nivel con conocimiento del mercado mexicano, sin el riesgo de soporte extranjero.",
    quote: "Lo mejor del mundo, implementado por quien conoce tu mercado.",
  },
  {
    number: "05",
    title: "Un entorno integrado, un socio estratégico",
    kicker: "Integración real bajo un solo acompañamiento",
    body: "Antenas EAS, etiquetas ESL, Digital Signage, inteligencia artificial con datos en tiempo real y cerraduras electrónicas bajo un solo punto de contacto y un solo equipo de soporte.",
    quote: "Un entorno integrado. Un socio que te acompaña en cada etapa.",
  },
];

export type PainPoint = {
  label: string;
  description: string;
};

export type PillarSlug =
  | "retail"
  | "retail/supermercados"
  | "retail/departamentales"
  | "retail/autoservicio"
  | "retail/otros-formatos"
  | "oem-electronica"
  | "farmacias"
  | "centros-comerciales";

export type Pillar = {
  slug: PillarSlug;
  parent?: PillarSlug;
  navLabel: string;
  eyebrow: string;
  h1: string;
  hook: string;
  intro: string;
  painPoints: PainPoint[];
  solutions: string[]; // SOLUTIONS slugs
  metaDescription: string;
};

export const PILLARS: Pillar[] = [
  {
    slug: "retail",
    navLabel: "Retail",
    eyebrow: "PILAR · RETAIL",
    h1: "Tecnología que protege tu piso de venta y da visibilidad a la operación",
    hook: "La merma en retail rara vez llega como un solo incidente. Es una fuga constante entre anaquel, caja y almacén.",
    intro:
      "Cada formato de retail pierde margen de manera distinta: merma en perecederos, robo en producto de alto valor, ineficiencia operativa con poco personal en piso. Dások integra antenas EAS, etiquetas ESL, Digital Signage, inteligencia artificial con datos en tiempo real y cerraduras electrónicas en un entorno pensado para el formato específico de tu cadena.",
    painPoints: [
      { label: "Merma", description: "Pérdida de inventario que no siempre llega como robo: exhibición descontrolada, etiquetado manual, puntos ciegos en piso." },
      { label: "Robo", description: "Sustracción en anaquel abierto y en producto de alto valor unitario, en horarios y zonas predecibles." },
      { label: "Falta de visibilidad", description: "Decisiones de compra, tráfico y zonas calientes que hoy no se miden en la mayoría de las tiendas." },
      { label: "Ineficiencia operativa", description: "Horas-persona en tareas manuales — cambio de precio, recorridos de anaquel — que restan tiempo a la venta." },
    ],
    solutions: ["antenas-eas", "etiquetas-esl", "digital-signage", "inteligencia-artificial", "cerraduras-electronicas"],
    metaDescription:
      "Antenas EAS, etiquetas ESL, Digital Signage, inteligencia artificial con datos en tiempo real y cerraduras electrónicas para reducir merma y robo en retail físico en México.",
  },
  {
    slug: "retail/supermercados",
    parent: "retail",
    navLabel: "Supermercados",
    eyebrow: "RETAIL · SUPERMERCADOS",
    h1: "Menos merma en perecederos, sin frenar la alta rotación",
    hook: "En un supermercado, la merma no espera: perecederos con vida de anaquel corta y una rotación que no da tiempo a un conteo manual.",
    intro:
      "El reto de un supermercado es distinto al de una departamental: volumen alto, márgenes ajustados por categoría y personal enfocado en reposición, no en control. Dások ordena la exhibición segura de categorías sensibles y da visibilidad de tráfico y zonas calientes sin agregar carga operativa al piso.",
    painPoints: [
      { label: "Merma en perecederos", description: "Producto de alta rotación y vida corta, donde cada hora de mal manejo es margen perdido." },
      { label: "Alta rotación de anaquel", description: "Actualización de precio y promoción constante, con un equipo de piso ya saturado." },
      { label: "Robo hormiga en categorías de alto margen", description: "Sustracción en licores, cuidado personal y otras categorías de alto valor unitario." },
    ],
    solutions: ["etiquetas-esl", "antenas-eas", "inteligencia-artificial"],
    metaDescription:
      "Reduce merma en perecederos y controla el robo hormiga en supermercados con antenas EAS, etiquetas ESL e inteligencia artificial con datos en tiempo real.",
  },
  {
    slug: "retail/departamentales",
    parent: "retail",
    navLabel: "Tiendas departamentales",
    eyebrow: "RETAIL · TIENDAS DEPARTAMENTALES",
    h1: "Protección para prenda y producto de alto valor, sin frenar la experiencia de compra",
    hook: "En una tienda departamental, el mismo pasillo que exhibe tu producto de mayor margen es el que más se expone al robo.",
    intro:
      "El comprador de una departamental toca, prueba y compara antes de decidir. La seguridad tiene que convivir con esa experiencia, no restarle. Dások protege prenda y producto de alto valor con antenas EAS y cerraduras electrónicas, y da visibilidad de zonas y comportamiento en piso con inteligencia artificial con datos en tiempo real.",
    painPoints: [
      { label: "Robo en prenda y calzado", description: "Categorías de alto valor unitario y fácil sustracción, concentradas en pasillos específicos." },
      { label: "Producto de alto valor expuesto", description: "Electrónica, perfumería y accesorios que requieren exhibición abierta para vender, con riesgo de merma." },
      { label: "Presión sobre el equipo de piso", description: "Personal de venta que también debe vigilar, sin herramientas para hacerlo sin fricción." },
    ],
    solutions: ["antenas-eas", "cerraduras-electronicas", "inteligencia-artificial", "digital-signage"],
    metaDescription:
      "Antenas EAS y cerraduras electrónicas para proteger prenda y producto de alto valor en tiendas departamentales, sin afectar la experiencia de compra.",
  },
  {
    slug: "retail/autoservicio",
    parent: "retail",
    navLabel: "Autoservicio",
    eyebrow: "RETAIL · AUTOSERVICIO",
    h1: "Operación eficiente con el mínimo de personal en piso",
    hook: "Un formato de autoservicio opera con menos personal por diseño. El riesgo aparece cuando esa eficiencia deja puntos sin control.",
    intro:
      "Con poco personal en piso, cada tarea manual compite directamente con la atención al cliente. Dások automatiza el control de precio y la vigilancia del perímetro, para que la operación eficiente no se convierta en un punto ciego.",
    painPoints: [
      { label: "Ineficiencia operativa", description: "Tareas manuales de precio y reposición que absorben al poco personal disponible." },
      { label: "Vigilancia con equipo reducido", description: "Perímetro y caja sin cobertura constante durante horas de menor afluencia de personal." },
      { label: "Actualización de precio y promoción", description: "Cambios que hoy requieren recorrido físico por anaquel, tienda por tienda." },
    ],
    solutions: ["etiquetas-esl", "antenas-eas", "inteligencia-artificial"],
    metaDescription:
      "Etiquetas ESL y antenas EAS para operar de forma eficiente con equipo reducido en tiendas de autoservicio en México.",
  },
  {
    slug: "retail/otros-formatos",
    parent: "retail",
    navLabel: "Otros formatos",
    eyebrow: "RETAIL · OTROS FORMATOS",
    h1: "Un entorno adaptado al formato particular de tu operación",
    hook: "No todo formato de retail encaja en una sola categoría. Tiendas de conveniencia, especializadas o de membresía tienen su propia combinación de dolores.",
    intro:
      "Cuando el formato no encaja en supermercado, departamental o autoservicio, el diagnóstico empieza por tu operación real, no por un catálogo genérico. Dások adapta la combinación de antenas EAS, etiquetas ESL, Digital Signage, inteligencia artificial con datos en tiempo real y cerraduras electrónicas al riesgo específico de tu formato.",
    painPoints: [
      { label: "Dolor específico del formato", description: "Merma, robo o ineficiencia con un patrón propio, que no responde a una solución estándar." },
      { label: "Escalabilidad entre unidades", description: "Necesidad de un mismo estándar de control conforme la cadena crece o se diversifica." },
    ],
    solutions: ["antenas-eas", "etiquetas-esl", "digital-signage", "inteligencia-artificial", "cerraduras-electronicas"],
    metaDescription:
      "Soluciones de seguridad y control operativo adaptadas a formatos de retail que no encajan en una categoría estándar.",
  },
  {
    slug: "oem-electronica",
    navLabel: "OEM / Electrónica",
    eyebrow: "PILAR · OEM Y ELECTRÓNICA DE CONSUMO",
    h1: "Exhibición segura para producto de alto valor unitario",
    hook: "Un producto de electrónica de consumo se vende mejor cuando el cliente lo toca. Esa misma exhibición abierta es la que más expone a la marca al robo.",
    intro:
      "Dások trabaja con fabricantes y distribuidores de electrónica de consumo para que el producto se exhiba abierto, se pueda probar en piso y quede protegido con cerraduras electrónicas y antenas EAS, sin frenar la conversión en punto de venta.",
    painPoints: [
      { label: "Producto de alto valor unitario", description: "Cada unidad sustraída representa un margen significativamente mayor que en otras categorías de retail." },
      { label: "Exhibición abierta como requisito de venta", description: "El comprador necesita interactuar con el producto antes de decidir, lo que exige protección sin vitrina cerrada." },
      { label: "Coordinación con fabricante y distribuidor", description: "Estándares de exhibición que deben integrarse entre marca, punto de venta y equipo de prevención de pérdidas." },
    ],
    solutions: ["cerraduras-electronicas", "antenas-eas", "digital-signage"],
    metaDescription:
      "Soluciones de exhibición segura y antenas EAS para proteger producto OEM y electrónica de consumo de alto valor unitario en punto de venta.",
  },
  {
    slug: "farmacias",
    navLabel: "Farmacias",
    eyebrow: "PILAR · FARMACIAS",
    h1: "Control de anaquel abierto sin frenar la rapidez de atención en caja",
    hook: "El robo hormiga en farmacia no siempre se nota en el momento. Se nota al cierre de mes, en el anaquel de mayor margen.",
    intro:
      "Una farmacia opera bajo presión doble: categorías sensibles que requieren control de acceso y un cliente que espera atención rápida en caja. Dások da control de anaquel abierto y acceso trazable a categorías reguladas, sin agregar fricción al punto de venta.",
    painPoints: [
      { label: "Robo hormiga y merma invisible", description: "Sustracción de bajo volumen y alta frecuencia, difícil de detectar sin datos en tiempo real." },
      { label: "Control de anaquel abierto", description: "Categorías de venta libre expuestas, sin un mecanismo de vigilancia constante." },
      { label: "Acceso a categorías sensibles", description: "Producto regulado que requiere trazabilidad de quién accede y cuándo." },
      { label: "Rapidez de atención en caja", description: "Cualquier control adicional no puede añadir tiempo de espera al cliente." },
    ],
    solutions: ["antenas-eas", "cerraduras-electronicas", "inteligencia-artificial", "etiquetas-esl"],
    metaDescription:
      "Antenas EAS y cerraduras electrónicas para controlar el robo hormiga y el acceso a categorías sensibles en farmacias, sin afectar la rapidez en caja.",
  },
  {
    slug: "centros-comerciales",
    navLabel: "Centros comerciales",
    eyebrow: "PILAR · CENTROS COMERCIALES",
    h1: "Seguridad perimetral y experiencia digital para la administración de plaza",
    hook: "Quien administra una plaza comercial responde por la seguridad de todos los locatarios, no solo por la propia operación.",
    intro:
      "La administración de un centro comercial necesita control de accesos y seguridad perimetral a nivel plaza, además de una experiencia digital consistente para el visitante. Dások integra Digital Signage e inteligencia artificial con datos en tiempo real con el mismo estándar en cada acceso.",
    painPoints: [
      { label: "Control de accesos", description: "Múltiples puntos de entrada y salida que requieren un estándar único de seguridad." },
      { label: "Seguridad perimetral", description: "Vigilancia de áreas comunes, estacionamiento y accesos de carga, fuera del control directo de cada locatario." },
      { label: "Experiencia digital del visitante", description: "Comunicación y señalética digital consistente en toda la plaza, no solo en algunos puntos." },
    ],
    solutions: ["digital-signage", "inteligencia-artificial", "antenas-eas"],
    metaDescription:
      "Control de accesos, seguridad perimetral y Digital Signage para la administración de centros comerciales en México.",
  },
];

export const getPillar = (slug: PillarSlug) =>
  PILLARS.find((pillar) => pillar.slug === slug)!;

export const getRetailFormats = () =>
  PILLARS.filter((pillar) => pillar.parent === "retail");

export const getSolution = (slug: string) =>
  SOLUTIONS.find((solution) => solution.slug === slug)!;

export const CONTACT_INFO = {
  whatsappNumber: "525500000000",
  whatsappMessage:
    "Hola, quiero información sobre soluciones Dások para mi operación de retail.",
  email: "contacto@dasoksolutions.com",
  showroomCdmx: "Showroom CDMX",
  showroomNorte: "Showroom Zona Norte",
};

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/dasok" },
  { label: "Instagram", href: "https://www.instagram.com/dasoksolutions" },
];

export const PRIMARY_CTA_LABEL = "Agenda tu visita al showroom";
export const SECONDARY_CTA_LABEL = "Habla con un asesor";
