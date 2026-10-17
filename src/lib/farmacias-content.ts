// Contenido de la página Farmacias.
// Fuente: "Landing_Farmacias_Pilares.docx" (Dások All Solutions, octubre 2026).

export const FARMACIAS_HERO = {
  eyebrow: "FARMACIAS",
  h1: "Farmacia: la categoría que más necesitas exhibir es la misma que más te roban.",
  hook: "Dermocuidado, cosméticos, suplementos, fragancias y medicamentos de alto valor son los productos que más atraen al cliente de farmacia. También son los que más desaparecen del anaquel.",
  intro:
    "Encerrarlos en vitrina reduce el robo, pero también reduce la venta: el cliente no puede comparar, leer ingredientes ni elegir con libertad. Dások te da las herramientas para exhibir sin miedo y proteger sin fricción, sin tener que elegir entre una cosa y la otra.",
};

export type FarmaciasGroupKey = "exhibicion" | "seguridad";

export const FARMACIAS_GRUPOS: Record<
  FarmaciasGroupKey,
  { slug: string; label: string; title: string; body: string }
> = {
  exhibicion: {
    slug: "exhibicion-intro",
    label: "Exhibición",
    title: "Cada producto que escondes es una venta que pierdes.",
    body: "El cliente de farmacia quiere tocar el empaque, leer la fórmula, comparar presentaciones. Si el producto está detrás de un acrílico, si tiene que esperar a que alguien le abra la vitrina, si la experiencia se siente incómoda, se va sin comprar. En categorías como dermocuidado y cosméticos, la exhibición abierta no es un lujo: es la condición mínima para competir.",
  },
  seguridad: {
    slug: "seguridad-intro",
    label: "Seguridad",
    title: "Si no puedes medir lo que pasa en tu piso de venta, no puedes controlarlo.",
    body: "La seguridad en farmacia no se resuelve solo con cámaras y guardias. Se resuelve con tecnología que detecte, alerte y registre en tiempo real. Desde las antenas en la puerta hasta la cerradura de la trastienda, cada punto de la sucursal necesita inteligencia.",
  },
};

export type FarmaciasZone = {
  group: FarmaciasGroupKey;
  number: string;
  slug: string;
  accent: "azul-primario" | "verde-acento" | "azul-corporativo" | "tinta";
  zoneLabel: string;
  /** Nombre corto de la solución, usado en el menú lateral. */
  navLabel: string;
  title: string;
  icon: string;
  problema: string;
  solucion: string[];
  subItems?: { icon: string; title: string; body: string }[];
  highlights: string[];
};

export const FARMACIAS_ZONAS: FarmaciasZone[] = [
  // ───────────────── Exhibición ─────────────────
  {
    group: "exhibicion",
    number: "1.1",
    slug: "bases-seguridad",
    accent: "azul-primario",
    zoneLabel: "Exhibición · 1.1",
    navLabel: "Bases de seguridad",
    title: "Bases de seguridad para exhibición (Safers)",
    icon: "shield",
    problema:
      "Cremas de dermocuidado, sueros faciales, fragancias premium y dispositivos como medidores de glucosa o tensiómetros son productos de alto valor que el cliente necesita ver y comparar. Muchas farmacias los encierran en vitrina, pero eso elimina la experiencia de autoservicio que el comprador espera.",
    solucion: [
      "Bases y cajas de seguridad que mantienen el producto visible y accesible en el anaquel. El cliente puede tomarlo, leer la etiqueta, comparar presentaciones y decidir sin esperar a nadie. Si alguien intenta retirar el dispositivo de seguridad sin desactivación, la alarma suena de inmediato.",
    ],
    highlights: [
      "Formato ajustable que se adapta a distintos tamaños: desde un sérum hasta un dispositivo médico portátil",
      "Alarma inmediata ante manipulación",
      "El producto siempre está visible y accesible para autoservicio",
      "Reduce la dependencia de personal para mostrar producto en categorías premium",
    ],
  },
  {
    group: "exhibicion",
    number: "1.2",
    slug: "ganchos-inteligentes",
    accent: "tinta",
    zoneLabel: "Exhibición · 1.2",
    navLabel: "Ganchos inteligentes",
    title: "Ganchos inteligentes",
    icon: "bell",
    problema:
      "Accesorios de cuidado personal, cepillos eléctricos, bandas de test, baterías y productos en blíster cuelgan en ganchos estándar. Son piezas pequeñas, fáciles de ocultar y difíciles de monitorear. La pérdida se acumula sin que nadie la note hasta el conteo de inventario.",
    solucion: [
      "Ganchos con sensor integrado que registran cada retiro de producto. Cuando alguien toma varios productos en segundos, el sistema genera una alerta discreta y notifica al personal. El gancho sigue abierto para el comprador legítimo, pero se vuelve vigilante contra el robo hormiga.",
    ],
    highlights: [
      "Cada retiro de producto queda registrado",
      "Alerta automática ante patrones de sustracción (varios retiros en pocos segundos)",
      "No interrumpe la experiencia del comprador legítimo",
      "Datos de retiro por SKU y por horario para decisiones de reposición",
    ],
  },
  {
    group: "exhibicion",
    number: "1.3",
    slug: "dispensadores",
    accent: "azul-corporativo",
    zoneLabel: "Exhibición · 1.3",
    navLabel: "Dispensadores",
    title: "Dispensadores",
    icon: "refresh",
    problema:
      "Productos de alto valor en empaque pequeño (suplementos premium, vitaminas importadas, cremas especializadas, cartuchos de rasuradoras) se acomodan en anaquel abierto. El robo no es de una pieza: es de varias al mismo tiempo. Un solo barrido de anaquel puede representar miles de pesos en pérdida.",
    solucion: [
      "Dispensadores que solo permiten sacar un producto a la vez, lo que impide el barrido. El personal puede reabastecer de frente, sin herramientas y sin interrumpir la operación. Los productos siempre quedan al frente del anaquel, listos para el siguiente cliente.",
    ],
    highlights: [
      "Impide que alguien se lleve varios productos a la vez",
      "Dispensado uno a uno, sin fricción para el comprador",
      "Recarga frontal sin herramientas",
      "Producto siempre al frente, siempre visible",
    ],
  },
  {
    group: "exhibicion",
    number: "1.4",
    slug: "etiquetas-suaves",
    accent: "verde-acento",
    zoneLabel: "Exhibición · 1.4",
    navLabel: "Etiquetas suaves",
    title: "Etiquetas suaves (Soft Tags)",
    icon: "tag",
    problema:
      "Medicamentos OTC de alto costo, pruebas de embarazo, suplementos y productos en caja sellada no pueden llevar una base de seguridad. Son pequeños, fáciles de guardar en una bolsa y salen de la farmacia sin que nadie se entere.",
    solucion: [
      "Etiquetas adhesivas delgadas que se colocan directamente sobre el empaque sin dañarlo. Si alguien pasa por las antenas de seguridad en la salida sin haber desactivado la etiqueta, la alarma se activa. Son discretas, no afectan la presentación del producto y se desactivan en caja de forma rápida.",
    ],
    highlights: [
      "Protección para productos que no aceptan dispositivos rígidos",
      "No altera la presentación visual del empaque",
      "Desactivación rápida en punto de venta",
      "Compatible con todos los sistemas EAS",
    ],
  },
  {
    group: "exhibicion",
    number: "1.5",
    slug: "etiquetas-rigidas",
    accent: "tinta",
    zoneLabel: "Exhibición · 1.5",
    navLabel: "Etiquetas rígidas",
    title: "Etiquetas rígidas (Hard Tags)",
    icon: "lock",
    problema:
      "Fragancias, sets de regalo, kits de dermocuidado y productos de mayor tamaño necesitan una protección más robusta que una etiqueta adhesiva. El robo organizado arranca etiquetas suaves con facilidad, sobre todo en categorías de alto valor por pieza.",
    solucion: [
      "Etiquetas rígidas con sistema de cierre mecánico que solo se puede retirar con el desactivador autorizado. Si alguien intenta forzarla, la etiqueta emite alarma. Son reutilizables, lo que reduce el costo por uso a lo largo del tiempo.",
    ],
    highlights: [
      "Protección robusta contra robo organizado",
      "Alarma ante intento de remoción forzada",
      "Reutilizables: menor costo por ciclo de uso",
      "Compatibles con antenas EAS en salidas",
    ],
  },
  {
    group: "exhibicion",
    number: "1.6",
    slug: "sensores-cosmeticos",
    accent: "azul-primario",
    zoneLabel: "Exhibición · 1.6",
    navLabel: "Sensores con cable",
    title: "Sensores para cosméticos y productos especiales",
    icon: "wifi",
    problema:
      "Productos con formas irregulares (paletas de maquillaje, sets de brochas, perfumes de diseñador, dispositivos de cuidado facial eléctrico) no encajan en las soluciones estándar de seguridad. Quedan desprotegidos o se retiran de la exhibición.",
    solucion: [
      "Sensores con cable retráctil que se adhieren directamente al producto, sin importar su forma. El cliente puede tomarlo, girarlo y leer la información, pero si alguien corta el cable o lo jala fuera del rango permitido, la alarma se activa. Son ideales para cualquier producto donde la forma impide usar una base o una etiqueta convencional.",
    ],
    highlights: [
      "Se adaptan a cualquier forma de producto",
      "Exhibición libre: el cliente puede manipular el producto",
      "Alarma ante corte de cable o exceso de rango",
      "Solución para productos que antes no podían protegerse en exhibición abierta",
    ],
  },
  {
    group: "exhibicion",
    number: "1.7",
    slug: "etiquetas-precio-esl",
    accent: "verde-acento",
    zoneLabel: "Exhibición · 1.7",
    navLabel: "Etiquetas de precio (ESL)",
    title: "Etiquetas electrónicas de precio (ESL)",
    icon: "grid",
    problema:
      "Una farmacia maneja miles de SKU con cambios de precio frecuentes: promociones semanales, ajustes por temporada, precios regulados. Cambiar etiquetas a mano es lento, propenso a errores y genera diferencias entre el anaquel y la caja. El cliente ve un precio en el estante y otro en la terminal. Eso genera desconfianza y quejas.",
    solucion: [
      "Etiquetas electrónicas que se actualizan de forma remota y centralizada. Un cambio de precio se refleja en todos los anaqueles de todas las sucursales en minutos, sin recorridos manuales. Tu equipo recupera horas de trabajo para atender y vender, en vez de recorrer pasillos con impresora de etiquetas.",
    ],
    highlights: [
      "Actualización remota de precios en todas las sucursales",
      "Cero diferencias entre anaquel y caja",
      "Tu equipo deja de cambiar precios a mano y se enfoca en atender al cliente",
      "Ideal para farmacias con alta rotación de promociones y miles de SKU",
    ],
  },
  // ───────────────── Seguridad ─────────────────
  {
    group: "seguridad",
    number: "2.1",
    slug: "sistemas-eas",
    accent: "azul-corporativo",
    zoneLabel: "Seguridad · 2.1",
    navLabel: "Sistemas EAS",
    title: "Sistemas EAS (Electronic Article Surveillance)",
    icon: "shield",
    problema:
      "El robo en farmacia tiene dos caras: el hormiga (productos pequeños de alto valor que desaparecen uno a uno) y el organizado (grupos que vacían categorías completas). Sin un sistema de detección en las salidas, el producto simplemente desaparece sin dejar rastro.",
    solucion: [
      "Antenas de detección en los accesos de la sucursal que identifican productos con etiqueta activa (suave o rígida). Si alguien intenta salir sin pasar por caja, la alarma se activa y el personal puede intervenir. Los sistemas se conectan a internet para monitoreo remoto: cuántas alarmas se activan, a qué hora, en qué sucursal.",
    ],
    highlights: [
      "Detección en tiempo real en cada acceso",
      "Monitoreo remoto del estado del equipo (encendido, apagado, alarmas activadas)",
      "Datos de incidencias por sucursal y por horario",
      "Desactivación rápida en caja, sin agregar tiempo a la transacción",
      "Servicio técnico remoto: diagnóstico sin necesidad de enviar técnico a sucursal",
    ],
  },
  {
    group: "seguridad",
    number: "2.2",
    slug: "deteccion-ia",
    accent: "tinta",
    zoneLabel: "Seguridad · 2.2",
    navLabel: "IA de video",
    title: "Detección de movimiento sospechoso (Inteligencia Artificial)",
    icon: "camera",
    problema:
      "Las cámaras graban, pero nadie revisa cientos de horas de video. El robo ya ocurrió cuando alguien lo ve. En farmacias con alto tráfico, es imposible que el personal identifique comportamientos sospechosos mientras atiende clientes.",
    solucion: [
      "Inteligencia artificial aplicada al análisis de video en tiempo real. El sistema observa el comportamiento dentro de la sucursal y detecta patrones sospechosos: permanencia prolongada frente al anaquel de dermocuidado, movimientos repetitivos en la zona de fragancias, recorridos inusuales. Genera alertas en el momento, no después del hecho.",
    ],
    highlights: [
      "Detección de comportamiento sospechoso en tiempo real",
      "Alertas inmediatas al personal de seguridad",
      "No requiere que alguien esté viendo un monitor todo el día",
      "Aprendizaje continuo: el sistema mejora su detección con el tiempo",
    ],
  },
  {
    group: "seguridad",
    number: "2.3",
    slug: "data-tiempo-real",
    accent: "azul-primario",
    zoneLabel: "Seguridad · 2.3",
    navLabel: "Data en tiempo real",
    title: "Data en tiempo real: mapas de calor, tráfico y lista negra",
    icon: "chart",
    problema:
      "¿Dónde se detiene más la gente? ¿Qué zonas de la farmacia no visita nadie? ¿A qué hora hay más tráfico? ¿Los clientes recurrentes que roban regresan? Sin datos, todas esas preguntas se responden con suposiciones.",
    solucion: [
      "Plataforma de analítica que procesa los datos de cámaras y sensores para entregar información accionable:",
    ],
    subItems: [
      {
        icon: "chart",
        title: "Mapas de calor",
        body: "Visualización de las zonas más visitadas y las zonas muertas de tu sucursal. Te ayuda a decidir dónde exhibir los productos de mayor valor, dónde colocar promociones y dónde necesitas reforzar presencia de personal.",
      },
      {
        icon: "user",
        title: "Conteo de tráfico y gentrificación",
        body: "Medición del flujo de personas por zona, por hora y por día. Identifica patrones de visita, tasas de conversión por área y rendimiento de cada metro cuadrado.",
      },
      {
        icon: "eye",
        title: "Lista negra",
        body: "Reconocimiento de personas que han sido identificadas previamente en incidentes de robo. Cuando regresan a la sucursal, el sistema envía una alerta al equipo de seguridad antes de que ocurra un nuevo incidente.",
      },
    ],
    highlights: [
      "Decisiones de layout, personal y seguridad basadas en datos reales",
      "Identificación de zonas rentables y zonas muertas",
      "Alertas proactivas ante personas identificadas en incidentes previos",
      "Información en tiempo real, no reportes del mes pasado",
    ],
  },
  {
    group: "seguridad",
    number: "2.4",
    slug: "cerraduras-electronicas",
    accent: "verde-acento",
    zoneLabel: "Seguridad · 2.4",
    navLabel: "Cerraduras electrónicas",
    title: "Cerraduras electrónicas",
    icon: "key",
    problema:
      "La trastienda, el almacén de medicamentos controlados y los exhibidores cerrados guardan el producto de mayor valor. Una llave física no deja registro, se puede copiar y no te dice quién accedió, cuándo ni durante cuánto tiempo.",
    solucion: [
      "Cerraduras electrónicas que reemplazan la llave física. Cada apertura queda registrada: quién abrió, a qué hora y durante cuánto tiempo. El acceso queda reservado al personal autorizado. Sin llave que copiar, sin accesos fuera de control.",
    ],
    highlights: [
      "Registro completo de cada apertura: quién, cuándo, cuánto tiempo",
      "Sin llaves físicas que duplicar",
      "Acceso solo a personal autorizado con credencial o código",
      "Control de acceso a vitrinas, exhibidores y almacén desde un solo sistema",
    ],
  },
];

export const FARMACIAS_CIERRE = {
  eyebrow: "POR QUÉ DÁSOK",
  title: "Todo conectado, con un solo socio comercial.",
  body: "Etiquetas, antenas, ganchos, bases, cerraduras, inteligencia artificial y precios electrónicos: no necesitas un contacto diferente para cada solución. Dások integra todo el entorno de seguridad y exhibición de tu farmacia, con acompañamiento de principio a fin.",
  highlights: [
    "Más de 25 años en retail mexicano",
    "Showrooms en operación real en CDMX y en el norte del país",
    "Cobertura nacional con call center dedicado",
    "Diagnóstico, instalación, capacitación y soporte en una sola relación comercial",
  ],
};

export const FARMACIAS_CTA = {
  title: "¿Cuánto producto estás perdiendo cada mes en tu farmacia?",
  body: "Agenda tu visita a nuestro showroom. Comprueba en persona cómo se ve una farmacia que exhibe con libertad y protege con inteligencia.",
};
