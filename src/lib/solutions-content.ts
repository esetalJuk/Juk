// Contenido de las páginas de solución (/soluciones/*). Sigue la Guía de Tono
// y Voz Dások 2026. No incluye cifras ni casos de uso sin verificar, ni
// menciona productos descontinuados. Beneficios y FAQ con datos específicos
// (tiempos de instalación, compatibilidad, casos reales) se agregan después,
// una vez confirmados.

export type PillarLink = { label: string; href: string };

export type FaqItem = { question: string; answer: string | null };

export type SolutionSlug =
  | "sistemas-eas"
  | "etiquetas-esl"
  | "digital-signage"
  | "display-exhibicion-segura"
  | "cerraduras-electronicas"
  | "inteligencia-artificial-retail"
  | "control-de-acceso";

export type SolutionPage = {
  slug: SolutionSlug;
  navLabel: string;
  cardShort: string; // para la tarjeta del índice /soluciones
  seoTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  hook: string;
  problem: { title: string; body: string };
  howItWorks: { title: string; body: string }[];
  benefits: string[];
  industryLinks: PillarLink[];
  faq: FaqItem[];
  relatedSolutions: SolutionSlug[];
};

export const SOLUTIONS_INDEX = {
  seoTitle: "Soluciones de seguridad y tecnología para retail",
  metaDescription:
    "Conoce las soluciones de seguridad y tecnología para retail de Dások: EAS, ESL, Digital Tools, IA, cerraduras y control de acceso.",
  h1: "Soluciones de seguridad y tecnología para retail",
  intro:
    "Cada solución resuelve un problema específico de tu piso de venta: merma, robo, errores de precio o falta de visibilidad. Se integran entre sí, pero cada una funciona por su cuenta. Elige la tuya para ver cómo funciona, qué resuelve y para qué tipo de tienda aplica.",
};

export const SOLUTION_PAGES: SolutionPage[] = [
  {
    slug: "sistemas-eas",
    navLabel: "Sistemas EAS",
    cardShort: "Detecta el robo en el instante, en cualquier punto de venta.",
    seoTitle: "Sistemas EAS antirrobo para retail físico",
    metaDescription:
      "Sistemas EAS antirrobo que detectan el robo en el instante en anaquel y salida, para retail físico en México.",
    eyebrow: "SISTEMAS EAS",
    h1: "Sistemas EAS: antirrobo para tu punto de venta",
    hook: "Un robo que se detecta tarde ya es una pérdida consumada.",
    problem: {
      title: "El problema: el robo se descubre después, no en el momento",
      body: "En la mayoría de los puntos de venta, un intento de robo se detecta hasta el inventario o el cierre de mes, cuando ya no hay nada que hacer. El producto que más rota en anaquel abierto es también el más expuesto. Sin una alerta en el instante, cada salida sin control se vuelve un punto ciego para la pérdida, y el equipo de piso termina vigilando en lugar de vender.",
    },
    howItWorks: [
      {
        title: "Etiquetado o placa antirrobo",
        body: "Cada artículo o categoría sensible recibe una etiqueta o placa antirrobo compatible con el sistema, según el tipo de producto y el punto de venta.",
      },
      {
        title: "Antenas en accesos y salidas",
        body: "Las antenas se instalan en los puntos de salida y detectan cualquier etiqueta activa que intente cruzar sin haber pasado por caja.",
      },
      {
        title: "Alerta en el instante",
        body: "El sistema genera una alerta sonora y visual en el momento exacto del intento, no en un reporte del día siguiente.",
      },
      {
        title: "Desactivación en caja",
        body: "Al pagar, tu equipo desactiva o retira la etiqueta, y el producto sale sin disparar la alerta.",
      },
      {
        title: "Un mismo entorno de protección",
        body: "Los sistemas EAS se integran con etiquetas ESL, cerraduras electrónicas e inteligencia artificial con datos en tiempo real, en lugar de operar como una pieza aislada.",
      },
    ],
    benefits: [
      "Detección del intento de robo en el instante, no al cierre de mes.",
      "Cobertura de accesos sin agregar personal de vigilancia adicional.",
      "Compatible con producto en exhibición abierta, sin devolverlo a vitrina cerrada.",
    ],
    industryLinks: [
      { label: "Supermercados", href: "/retail/supermercados" },
      { label: "Tiendas departamentales", href: "/retail/departamentales" },
      { label: "Farmacias", href: "/farmacias" },
      { label: "Centros comerciales", href: "/centros-comerciales" },
    ],
    faq: [
      {
        question: "¿Qué pasa si una etiqueta no se desactiva en caja?",
        answer:
          "El sistema genera una alerta en el punto de salida para que tu equipo revise el producto antes de que el cliente continúe, sin necesidad de retenerlo.",
      },
    ],
    relatedSolutions: ["etiquetas-esl", "cerraduras-electronicas"],
  },
  {
    slug: "etiquetas-esl",
    navLabel: "Etiquetas ESL",
    cardShort: "El precio correcto en cada anaquel, sin recorridos manuales.",
    seoTitle: "Etiquetas electrónicas de precio ESL",
    metaDescription:
      "Etiquetas electrónicas de precio ESL para actualizar el precio en todos tus anaqueles sin recorridos manuales.",
    eyebrow: "ETIQUETAS ESL",
    h1: "Etiquetas ESL: el precio correcto en cada anaquel",
    hook: "Un error de precio en caja cuesta tiempo, confianza del cliente y margen.",
    problem: {
      title: "El problema: el anaquel y la caja no siempre coinciden",
      body: "Cambiar precio en papel significa recorrer cada anaquel, en cada tienda, cada vez que hay un ajuste o una promoción. Mientras ese recorrido ocurre, el precio exhibido no coincide con el cobrado, y el cliente lo nota antes que tu equipo. Es tiempo que no suma a la venta y fricción que no debería existir en caja.",
    },
    howItWorks: [
      {
        title: "Etiqueta electrónica en cada anaquel",
        body: "Cada etiqueta ESL reemplaza el papel y muestra el precio vigente en tiempo real, en la posición exacta del producto.",
      },
      {
        title: "Actualización remota y masiva",
        body: "El cambio de precio o promoción se envía desde un solo punto y se refleja en todas las etiquetas conectadas, sin recorrer la tienda.",
      },
      {
        title: "Sincronía con el sistema de precios",
        body: "La etiqueta toma el precio directamente de tu fuente de precios, para que anaquel y caja muestren siempre el mismo número.",
      },
      {
        title: "Visibilidad de estado",
        body: "Tu equipo puede confirmar qué etiquetas están actualizadas y cuáles requieren revisión, sin recorrer anaquel por anaquel.",
      },
    ],
    benefits: [
      "Precio idéntico en anaquel y en caja, sin discrepancias que el cliente note primero.",
      "Cambios de precio y promoción sin recorrido manual, tienda por tienda.",
      "Horas-persona que hoy se van en cambio de precio, disponibles para atender y vender.",
    ],
    industryLinks: [
      { label: "Supermercados", href: "/retail/supermercados" },
      { label: "Autoservicio", href: "/retail/autoservicio" },
      { label: "Farmacias", href: "/farmacias" },
      { label: "Retail físico", href: "/retail" },
    ],
    faq: [
      {
        question: "¿Se puede usar en promociones de corta duración?",
        answer:
          "Sí: al actualizarse de forma remota y masiva, una promoción se activa y se retira en todas las etiquetas conectadas sin recorrido físico.",
      },
    ],
    relatedSolutions: ["sistemas-eas", "digital-signage"],
  },
  {
    slug: "digital-signage",
    navLabel: "Digital Tools",
    cardShort: "La información justa, en el momento en que tu cliente decide.",
    seoTitle: "Digital signage para tiendas",
    metaDescription:
      "Digital signage para comunicar precio, promoción y producto en el momento exacto de decisión de compra.",
    eyebrow: "DIGITAL TOOLS",
    h1: "Digital Tools: digital signage para tu punto de venta",
    hook: "Un cliente que no encuentra la información a tiempo, decide sin ella, o no decide.",
    problem: {
      title: "El problema: la señalética impresa no acompaña la decisión",
      body: "Los precios y las promociones impresos quedan desfasados en cuanto cambia la estrategia comercial, y cada zona o sucursal termina comunicando distinto. El cliente que no encuentra la información completa frente al producto la busca en su teléfono, y ese es un momento de decisión que tu piso de venta ya perdió.",
    },
    howItWorks: [
      {
        title: "Pantallas en los puntos de decisión",
        body: "Las pantallas se colocan en anaquel, vitrina o zona de circulación, en el punto exacto donde el cliente decide.",
      },
      {
        title: "Contenido administrado de forma centralizada",
        body: "Precio, promoción y contenido de producto se programan y actualizan desde un mismo punto, para toda la tienda o toda la cadena.",
      },
      {
        title: "Programación por zona y horario",
        body: "El contenido puede variar por zona, sucursal o franja horaria, según la estrategia comercial de cada punto de venta.",
      },
      {
        title: "Un mismo estándar de comunicación",
        body: "La misma plataforma comunica en todos los puntos de la plaza o cadena, con el mismo estándar de marca.",
      },
    ],
    benefits: [
      "Precio y promoción siempre vigentes, sin depender de impresión ni recorrido físico.",
      "Comunicación consistente entre zonas, sucursales o locatarios de una misma plaza.",
      "Información del producto disponible justo donde el cliente decide, sin que recurra a su teléfono.",
    ],
    industryLinks: [
      { label: "Centros comerciales", href: "/centros-comerciales" },
      { label: "OEM / Electrónica", href: "/oem-electronica" },
      { label: "Tiendas departamentales", href: "/retail/departamentales" },
      { label: "Retail físico", href: "/retail" },
    ],
    faq: [
      {
        question: "¿Qué tipo de contenido se puede mostrar?",
        answer:
          "Precio, promoción vigente e información de producto, programados y actualizados desde un mismo punto para una o varias tiendas.",
      },
      {
        question: "¿Se puede programar contenido distinto por sucursal?",
        answer:
          "Sí: el contenido se puede programar por zona, sucursal o franja horaria, según la estrategia comercial de cada punto.",
      },
    ],
    relatedSolutions: ["inteligencia-artificial-retail", "etiquetas-esl"],
  },
  {
    slug: "display-exhibicion-segura",
    navLabel: "Display",
    cardShort: "Exhibe sin arriesgar el producto.",
    seoTitle: "Exhibidores antirrobo para electrónica",
    metaDescription:
      "Exhibidores antirrobo para electrónica de consumo: interacción libre con el producto, inventario protegido.",
    eyebrow: "DISPLAY",
    h1: "Display: exhibición segura para electrónica de consumo",
    hook: "Un producto de electrónica de consumo se vende mejor cuando el cliente lo toca.",
    problem: {
      title: "El problema: la exhibición abierta que vende es la que más se expone",
      body: "El comprador de electrónica de consumo necesita interactuar con el producto antes de decidir: probarlo, compararlo, sostenerlo. Esa misma exhibición abierta es la que más expone al robo, y la respuesta típica —vitrina cerrada o pedir ayuda para tocar el producto— frena la conversión en el punto de venta.",
    },
    howItWorks: [
      {
        title: "Soportes de exhibición electrónicos o mecánicos",
        body: "El producto se exhibe en un soporte de protección, electrónico o mecánico según la categoría, que permite tocarlo y probarlo con libertad.",
      },
      {
        title: "Resguardo del producto en el soporte",
        body: "El soporte mantiene el producto sujeto y protegido mientras está en exhibición, sin necesidad de vitrina cerrada.",
      },
      {
        title: "Alerta ante manipulación indebida",
        body: "Si el producto se desconecta o se intenta retirar del soporte de forma indebida, el sistema genera una alerta en el punto de venta.",
      },
      {
        title: "Coordinación con el estándar de marca",
        body: "El estándar de exhibición se define junto con fabricante, distribuidor y equipo de prevención de pérdidas, para mantener consistencia en todos los puntos de venta.",
      },
    ],
    benefits: [
      "El cliente prueba el producto con libertad, sin pedir ayuda para tocarlo.",
      "Inventario protegido sin devolver la categoría a vitrina cerrada.",
      "Un mismo estándar de exhibición entre marca, distribuidor y punto de venta.",
    ],
    industryLinks: [
      { label: "OEM / Electrónica", href: "/oem-electronica" },
      { label: "Tiendas departamentales", href: "/retail/departamentales" },
      { label: "Retail físico", href: "/retail" },
    ],
    faq: [
      {
        question: "¿Qué categorías de producto se pueden exhibir así?",
        answer:
          "Principalmente electrónica de consumo de alto valor unitario: celulares, tabletas, computadoras, wearables, audífonos y smartwatch.",
      },
      {
        question: "¿El soporte limita la interacción del cliente con el producto?",
        answer:
          "No: el objetivo es que el cliente lo toque y lo pruebe con libertad; el soporte protege el producto, no la experiencia de compra.",
      },
    ],
    relatedSolutions: ["cerraduras-electronicas", "sistemas-eas"],
  },
  {
    slug: "cerraduras-electronicas",
    navLabel: "Cerraduras electrónicas",
    cardShort: "Resguarda lo más valioso sin esconderlo.",
    seoTitle: "Cerraduras electrónicas para vitrinas",
    metaDescription:
      "Cerraduras electrónicas para vitrinas y exhibidores: protege tu mercancía de alto valor sin dejar de exhibirla.",
    eyebrow: "CERRADURAS ELECTRÓNICAS",
    h1: "Cerraduras electrónicas para vitrinas y exhibidores",
    hook: "El producto de mayor margen es, casi siempre, el más expuesto al robo.",
    problem: {
      title: "El problema: proteger sin devolver el producto a una vitrina cerrada",
      body: "Electrónica, prenda y accesorios de margen alto necesitan exhibirse abiertos para vender, pero esa misma exposición es la que más se roba. Pedir ayuda para abrir una vitrina retrasa la decisión de compra, y sin un registro de quién accede y cuándo, el origen de una pérdida es difícil de rastrear.",
    },
    howItWorks: [
      {
        title: "Cerradura electrónica en vitrina o exhibidor",
        body: "El exhibidor o vitrina se asegura con una cerradura electrónica, en lugar de una cerradura mecánica tradicional.",
      },
      {
        title: "Acceso autorizado por tu equipo",
        body: "Solo el personal autorizado puede abrir la cerradura, con un método de acceso definido para tu operación.",
      },
      {
        title: "Registro de apertura",
        body: "Cada apertura queda registrada, para dar trazabilidad de quién accedió y cuándo.",
      },
      {
        title: "Producto visible, protegido y accesible para vender",
        body: "El producto permanece a la vista del cliente, protegido hasta el momento en que tu equipo autoriza la venta.",
      },
    ],
    benefits: [
      "Producto de alto valor exhibido abierto, sin devolverlo a vitrina cerrada tradicional.",
      "Registro de acceso que da trazabilidad ante una pérdida.",
      "Menos fricción en el momento de la venta frente a una llave física compartida.",
    ],
    industryLinks: [
      { label: "Tiendas departamentales", href: "/retail/departamentales" },
      { label: "OEM / Electrónica", href: "/oem-electronica" },
      { label: "Farmacias", href: "/farmacias" },
    ],
    faq: [
      {
        question: "¿El registro de apertura se puede consultar por tienda?",
        answer:
          "Sí: cada apertura queda registrada, lo que da trazabilidad de quién accedió y cuándo en cada punto de venta.",
      },
    ],
    relatedSolutions: ["sistemas-eas", "inteligencia-artificial-retail"],
  },
  {
    slug: "inteligencia-artificial-retail",
    navLabel: "Inteligencia artificial",
    cardShort: "Ve lo que hoy nadie está viendo.",
    seoTitle: "Analítica de video para retail",
    metaDescription:
      "Analítica de video con inteligencia artificial para retail: tráfico, zonas calientes y comportamiento del cliente.",
    eyebrow: "INTELIGENCIA ARTIFICIAL",
    h1: "Inteligencia artificial con datos en tiempo real para retail",
    hook: "La mayoría de las decisiones de exhibición, operación y seguridad en retail se toman con intuición, no con datos.",
    problem: {
      title: "El problema: lo que pasa en tu tienda no se está midiendo",
      body: "Tráfico, zonas de mayor interés, comportamiento del cliente en piso y alertas de seguridad ocurren todos los días sin que nadie los registre. Sin esos datos, cada decisión sobre exhibición, personal en piso o prevención de pérdidas se toma con intuición, no con evidencia.",
    },
    howItWorks: [
      {
        title: "Cámaras en piso de venta",
        body: "Las cámaras ya instaladas o nuevas capturan el recorrido del cliente en las zonas que definas junto con tu equipo.",
      },
      {
        title: "Procesamiento con inteligencia artificial",
        body: "El sistema procesa el video en tiempo real para identificar tráfico, zonas de mayor interés y eventos relevantes, sin intervención manual.",
      },
      {
        title: "Alertas y reportes accionables",
        body: "La información se entrega como alertas en el momento y reportes que tu equipo puede usar para decidir, no como video sin procesar.",
      },
      {
        title: "Un mismo entorno con el resto de tus sistemas",
        body: "Los datos de tráfico y comportamiento se complementan con sistemas EAS, etiquetas ESL y Digital Tools para una misma visión de la operación.",
      },
    ],
    benefits: [
      "Visibilidad de tráfico y zonas calientes que hoy no se mide en la mayoría de las tiendas.",
      "Alertas en el momento en que ocurre un evento, no en un reporte posterior.",
      "Decisiones de exhibición, operación y seguridad basadas en datos, no en intuición.",
    ],
    industryLinks: [
      { label: "Tiendas departamentales", href: "/retail/departamentales" },
      { label: "Autoservicio", href: "/retail/autoservicio" },
      { label: "Farmacias", href: "/farmacias" },
      { label: "Centros comerciales", href: "/centros-comerciales" },
    ],
    faq: [
      {
        question: "¿Qué tan rápido se generan las alertas?",
        answer:
          "El sistema procesa el video en tiempo real, por lo que las alertas se generan en el momento en que ocurre el evento, no en un reporte posterior.",
      },
    ],
    relatedSolutions: ["sistemas-eas", "digital-signage"],
  },
  {
    slug: "control-de-acceso",
    navLabel: "Control de acceso",
    cardShort: "Un estándar de seguridad en cada punto de entrada.",
    seoTitle: "Control de acceso para tiendas y plazas",
    metaDescription:
      "Control de acceso para tiendas y centros comerciales: un estándar de seguridad en cada punto de entrada.",
    eyebrow: "CONTROL DE ACCESO",
    h1: "Control de acceso para tiendas y centros comerciales",
    hook: "Quien administra una plaza o una tienda de categorías reguladas responde por cada punto de entrada, no solo por el suyo.",
    problem: {
      title: "El problema: múltiples accesos, un solo estándar de seguridad",
      body: "Un centro comercial tiene múltiples puntos de entrada y salida —accesos de visitantes, estacionamiento, carga— que hoy pueden operar con criterios distintos. Una farmacia o una tienda con categorías reguladas necesita trazabilidad de quién accede a esas zonas. En ambos casos, el reto no es un solo punto: es sostener el mismo estándar en todos.",
    },
    howItWorks: [
      {
        title: "Un entorno, no un dispositivo aislado",
        body: "El control de acceso en Dások se construye combinando cerraduras electrónicas, sistemas EAS e inteligencia artificial con datos en tiempo real, según el punto que se necesite proteger.",
      },
      {
        title: "Cerraduras electrónicas en zonas y categorías sensibles",
        body: "Las zonas o vitrinas con producto regulado o de alto valor se controlan con cerraduras electrónicas y registro de apertura.",
      },
      {
        title: "Sistemas EAS en accesos y salidas",
        body: "Los sistemas EAS cubren los puntos de salida para detectar cualquier intento de cruce sin autorización.",
      },
      {
        title: "Visibilidad con inteligencia artificial",
        body: "La inteligencia artificial con datos en tiempo real da visibilidad de tráfico y comportamiento en los accesos comunes de la plaza o tienda.",
      },
    ],
    benefits: [
      "Un mismo estándar de seguridad en todos los puntos de entrada y salida.",
      "Trazabilidad de acceso a categorías reguladas o de alto valor.",
      "Visibilidad de tráfico en accesos comunes, sin depender solo de vigilancia física.",
    ],
    industryLinks: [
      { label: "Centros comerciales", href: "/centros-comerciales" },
      { label: "Farmacias", href: "/farmacias" },
    ],
    faq: [
      {
        question: "¿El control de acceso es un solo dispositivo o varios sistemas?",
        answer:
          "Se construye combinando cerraduras electrónicas, sistemas EAS e inteligencia artificial con datos en tiempo real, según el punto que se necesite proteger — no es un dispositivo único.",
      },
      {
        question: "¿Se puede aplicar solo a una zona de la tienda, no a toda la plaza?",
        answer:
          "Sí: se aplica a las zonas o categorías que tu operación necesite controlar, desde un acceso específico hasta toda la plaza.",
      },
    ],
    relatedSolutions: ["cerraduras-electronicas", "inteligencia-artificial-retail"],
  },
];

export const getSolutionPage = (slug: SolutionSlug) =>
  SOLUTION_PAGES.find((page) => page.slug === slug)!;

export function buildSolutionJsonLd(page: SolutionPage, siteUrl: string) {
  const pageUrl = `${siteUrl}/soluciones/${page.slug}`;
  const faqWithAnswers = page.faq.filter(
    (item): item is { question: string; answer: string } => item.answer !== null,
  );

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    description: page.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Dások All Solutions",
      url: siteUrl,
    },
    areaServed: "México",
    url: pageUrl,
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Soluciones",
        item: `${siteUrl}/soluciones`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.navLabel,
        item: pageUrl,
      },
    ],
  };

  const faqPage =
    faqWithAnswers.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqWithAnswers.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return [service, breadcrumb, faqPage].filter(Boolean);
}

export const SOLUTION_HREF: Record<string, string> = {
  display: "/soluciones/display-exhibicion-segura",
  "digital-signage": "/soluciones/digital-signage",
  "inteligencia-artificial": "/soluciones/inteligencia-artificial-retail",
  "etiquetas-esl": "/soluciones/etiquetas-esl",
  "cerraduras-electronicas": "/soluciones/cerraduras-electronicas",
  "antenas-eas": "/soluciones/sistemas-eas",
};
