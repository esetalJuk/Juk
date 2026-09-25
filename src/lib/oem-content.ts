// Contenido de la página OEM / Electrónica de consumo.
// Fuente: propuesta de contenido "nuevo_sitio.docx" (Dások All Solutions).
// Redactado siguiendo la Guía de Tono y Voz 2026: sin "ecosistema" / "un solo
// proveedor", vocabulario reemplazado por "entorno" / "socio estratégico" con
// acción concreta.

export const OEM_HERO = {
  eyebrow: "PILAR · OEM Y ELECTRÓNICA DE CONSUMO",
  h1: "Convertimos la exhibición en tu mejor vendedor",
  hook: "El dispositivo que no se puede tocar, no se vende. El que se puede robar, tampoco.",
  intro:
    "Te ayudamos a exhibir tecnología para que tus clientes la prueben con libertad, sin arriesgar tu inventario.",
};

export const OEM_RETO = {
  eyebrow: "EL RETO",
  title: "El reto de exhibir tecnología",
  features: [
    {
      icon: "shield",
      title: "Tu producto necesita tocarse, pero es el más robado",
      body: "Si lo proteges de más, nadie lo prueba. Si lo dejas libre, se pierde.",
    },
    {
      icon: "tag",
      title: "Precios y promociones cambian cada semana",
      body: "Cada cambio es trabajo manual, y un error frente a caja cuesta ventas y confianza.",
    },
    {
      icon: "chart",
      title: "Decides tu exhibición sin saber qué pasa frente a ella",
      body: "Cuánta gente se detiene y qué producto toca hoy se resuelve por intuición.",
    },
  ],
};

export const OEM_ENTORNO_INTRO = {
  eyebrow: "LO QUE HACEMOS",
  title: "Cada categoría resuelve una dolencia del piso de venta",
  body: "Cuatro frentes de trabajo, sobre la misma infraestructura y el mismo contrato. Da clic en una categoría para ver sus soluciones.",
};

export const OEM_LO_QUE_HACEMOS = [
  {
    key: "proteger",
    icon: "shield",
    label: "PROTEGER",
    title: "Que lo prueben todo, que nada salga sin pagar",
    body: "Tus equipos quedan protegidos en la mesa y en la salida, sin frenar la prueba del producto.",
    linkLabel: "Seguridad para exhibición · Antenas EAS y consumibles",
    targetSlug: "seguridad",
    accent: "azul-primario",
  },
  {
    key: "vender",
    icon: "device",
    label: "VENDER",
    title: "El producto se explica solo",
    body: "Precio, características y promociones aparecen en el momento en que el cliente toca, levanta o escucha el producto.",
    linkLabel: "Digital Signage · Interacción en punto de venta",
    targetSlug: "signage",
    accent: "verde-acento",
  },
  {
    key: "operar",
    icon: "key",
    label: "OPERAR",
    title: "Menos tareas manuales, más tiempo para atender",
    body: "Precios que se actualizan en toda tu red a la vez y vitrinas que se abren sin llaves, con registro de cada apertura.",
    linkLabel: "Etiquetas ESL · Cerraduras electrónicas",
    targetSlug: "esl",
    accent: "azul-corporativo",
  },
  {
    key: "conocer",
    icon: "camera",
    label: "CONOCER",
    title: "Data en tiempo real de tu comprador",
    body: "Las cámaras que ya tienes te dicen quién te visita, cómo recorre tu tienda y qué necesita atención inmediata.",
    linkLabel: "Inteligencia artificial",
    targetSlug: "ia",
    accent: "verde-acento",
  },
] as const;

export const OEM_PARA_QUIEN = {
  eyebrow: "PARA QUIÉN ES",
  title: "Para quién es",
  features: [
    {
      icon: "store",
      title: "Si tienes una tienda",
      body: "Protege tus equipos de mayor valor, deja que tus clientes los prueben y reduce pérdidas desde el primer día.",
    },
    {
      icon: "grid",
      title: "Si operas una cadena",
      body: "El mismo estándar de exhibición, precio y seguridad en cada sucursal, con supervisión remota de toda la red.",
    },
    {
      icon: "eye",
      title: "Si eres una marca",
      body: "Tu producto se exhibe y se comunica como lo diseñaste, en cualquier punto de venta, y sabes cómo responde el comprador frente a él.",
    },
  ],
};

export const OEM_SOLUTION_LINES = [
  {
    number: "01",
    slug: "seguridad",
    label: "Seguridad para exhibición",
    icon: "shield",
    kicker: "Electrónica · Mecánica",
    description: "Protege celulares, laptops y audio en exhibición sin bloquear la prueba del producto.",
    accent: "azul-primario",
  },
  {
    number: "02",
    slug: "signage",
    label: "Digital Signage",
    icon: "device",
    kicker: "Producto · Anaquel · Precio digital",
    description: "Convierte cada pantalla del punto de venta en un canal de venta controlado.",
    accent: "verde-acento",
  },
  {
    number: "03",
    slug: "interaccion",
    label: "Interacción en punto de venta",
    icon: "tap",
    kicker: "Táctil · Lift & Learn · Audio",
    description: "El producto se demuestra solo cuando el cliente lo toca, lo levanta o lo escucha.",
    accent: "azul-corporativo",
  },
  {
    number: "04",
    slug: "ia",
    label: "Inteligencia artificial",
    icon: "camera",
    kicker: "Tráfico · Comportamiento · Operación",
    description: "Las cámaras que ya tienes, convertidas en datos en tiempo real de tu comprador.",
    accent: "verde-acento",
  },
  {
    number: "05",
    slug: "cerraduras",
    label: "Cerraduras electrónicas",
    icon: "lock",
    kicker: "RFID · Bluetooth · Trazabilidad",
    description: "De llave física a acceso autorizado, con historial de uso en vitrinas y cajones.",
    accent: "azul-primario",
  },
  {
    number: "06",
    slug: "esl",
    label: "Etiquetas ESL",
    icon: "tag",
    kicker: "Precio digital en anaquel",
    description: "El precio en exhibición coincide siempre con el de caja, en toda la red a la vez.",
    accent: "azul-corporativo",
  },
  {
    number: "07",
    slug: "eas",
    icon: "wifi",
    label: "Antenas EAS y consumibles",
    kicker: "Antenas · Consumibles",
    description: "Detección en el acceso y monitoreo remoto de toda la red de tiendas.",
    accent: "verde-acento",
  },
] as const;

export const OEM_SEGURIDAD = {
  intro: {
    title: "Soluciones para exhibición",
    tagline: "Tocar, probar, decidir",
    body: "La forma de exhibir tecnología para que se venda: el cliente toca, prueba y compara con total libertad, mientras tu inventario permanece protegido. Dejas de elegir entre experiencia y seguridad: exhibes más producto abierto a prueba, reduces pérdidas y cuidas la imagen de tu exhibición.",
    image: "/oem/seguridad-hero.jpg",
    imageCredit: "Getty Images / SimpleImages",
  },
  categorias: {
    eyebrow: "SOLUCIONES PARA EXHIBICIÓN",
    title: "Dos formas de proteger tu exhibición",
    body: "Electrónica, con alerta inmediata, y mecánica, con sujeción física. Son escalables —el nivel de protección crece con el riesgo de cada tienda o categoría, sin cambiar de sistema— y universales: funcionan con cualquier marca y tamaño de equipo.",
  },
  electronicas: {
    icon: "bell",
    label: "ELECTRÓNICAS",
    title: "Protección que se escucha, experiencia que no se interrumpe",
    body: "Para exhibiciones donde la experiencia lo es todo: el equipo siempre cargado y listo para probarse, con una alerta inmediata ante cualquier intento de retiro.",
    features: [
      { icon: "bell", title: "Alarma de más de 100 dB", body: "Se activa al instante." },
      { icon: "eye", title: "Sensores de perfil ultradelgado", body: "No estorban la prueba del producto." },
      { icon: "refresh", title: "Cable retráctil de hasta 1 metro", body: "Regresa el equipo a su lugar." },
      { icon: "device", title: "Carga integrada", body: "Para que el equipo exhibido siempre tenga batería." },
      { icon: "grid", title: "Exhibición sin cables visibles", body: "Nada sobre la mesa que reste protagonismo al producto." },
      { icon: "clock", title: "Hasta 48 horas de autonomía", body: "Por batería, en espacios sin corriente constante o activaciones temporales." },
      { icon: "tool", title: "Configuración de 2 o 4 brazos", body: "Según el nivel de riesgo." },
    ],
    tabla: {
      rows: [
        { producto: "Celulares y tabletas", proteccion: "Soporte con alarma, carga y cable retráctil; mismo sistema para ambos, solo cambia el tamaño del soporte." },
        { producto: "Laptops", proteccion: "Alarma combinada con bloqueo por cable, compatible con múltiples marcas." },
        { producto: "Smartwatches", proteccion: "Membrana que protege la carátula, conectada a un sensor en las correas." },
        { producto: "Audífonos over-ear", proteccion: "Soporte con carga integrada, siempre listos para probarse." },
        { producto: "Producto pequeño (relojes, lentes, perfumes)", proteccion: "Cubierta transparente con alarma: visible y protegido." },
        { producto: "Mesas con varios dispositivos", proteccion: "Estación de alarma de 2 o 4 puertos, con liberación rápida para cambiar la exhibición o resguardar en la noche." },
      ],
    },
  },
  mecanicas: {
    icon: "tool",
    label: "MECÁNICAS",
    title: "Alta seguridad, operación simple",
    body: "Para quien necesita alta seguridad con la operación más sencilla: se instala una vez y protege durante toda su vida útil.",
    features: [
      { icon: "lock", title: "Sujeción metálica reforzada", body: "El cliente manipula el equipo con libertad y el dispositivo no sale de la mesa." },
      { icon: "tool", title: "Instalación anclada o adherida", body: "Se fija a la mesa o con adhesivo de máxima seguridad, según lo permita el mobiliario." },
      { icon: "shield", title: "Libres de consumibles y mantenimiento", body: "Sin baterías, cables ni sensores: nada que reponer, recargar ni dar servicio, con o sin toma de corriente." },
    ],
    tabla: {
      rows: [
        { producto: "Celulares, tabletas y laptops", proteccion: "Sujeción metálica anclada o adherida a la mesa." },
        { producto: "Audífonos in-ear", proteccion: "Soporte mecánico diseñado para su formato." },
      ],
    },
  },
  logros: {
    eyebrow: "SOLUCIONES PARA EXHIBICIÓN",
    title: "Lo que logras con esta solución",
    items: [
      { icon: "check", title: "Un estándar en cada tienda", body: "El mismo nivel de protección y experiencia, sin importar quién la opere ni qué mueble use." },
      { icon: "check", title: "Menor costo de reposición", body: "Menos robo en piso, incluso en las categorías de mayor rotación." },
      { icon: "check", title: "Implementación replicable", body: "Fácil de instalar en uno o en cientos de puntos de venta." },
      { icon: "check", title: "Venta cruzada desde la misma base", body: "Cada soporte electrónico puede integrarse con pantallas para promover accesorios, planes o garantías, sin ocupar espacio adicional." },
    ],
  },
};

export const OEM_EAS = {
  intro: {
    title: "Soluciones de antenas EAS y consumibles",
    tagline: "Protección en el momento más vulnerable: la salida",
    tags: ["Antenas", "Consumibles"],
    body: "Las antenas en los accesos detectan cualquier producto que no fue desactivado en caja y generan una alarma inmediata.",
    image: "/oem/eas-hero.jpg",
  },
  resuelve: {
    eyebrow: "SOLUCIONES DE ANTENAS EAS Y CONSUMIBLES",
    title: "Supervisión de toda tu red desde un solo lugar",
    features: [
      { icon: "wifi", title: "Supervisión remota del estado de cada tienda", body: "Para detectar incidencias a tiempo." },
      { icon: "clock", title: "Menos visitas técnicas", body: "Gracias al acceso remoto." },
      { icon: "chart", title: "Patrones y horarios de riesgo", body: "Identificados por tienda o región." },
    ],
  },
  consumibles: {
    eyebrow: "SOLUCIONES DE ANTENAS EAS Y CONSUMIBLES",
    title: "El accesorio también es objetivo de robo",
    body: "Protegen audífonos, cargadores, fundas y accesorios empacados con etiquetas duras reutilizables en más de 40 formatos, etiquetas adhesivas de un solo uso y sistemas de cable y spider wrap para empaques irregulares. El formato se elige según el tamaño, la forma y el riesgo de cada producto.",
  },
};

export const OEM_SIGNAGE = {
  intro: {
    title: "Soluciones de Digital Signage",
    tagline: "Cada pantalla, un canal de venta",
    tags: ["Pantalla del producto", "Anaquel", "Precio digital"],
    body: "Controla desde una plataforma qué se muestra en cada pantalla de tu red, cuándo y dónde.",
    image: "/oem/signage-hero.jpg",
    imageCredit: "Getty Images / Vladimir Fedorov",
  },
  donde: {
    eyebrow: "SOLUCIONES DE DIGITAL SIGNAGE",
    title: "Dónde aparece el contenido",
    products: [
      {
        image: "/oem/signage-pantalla-producto.jpg",
        title: "En el propio equipo exhibido",
        body: "Con la configuración bloqueada.",
      },
      {
        image: "/oem/signage-pantalla-secundaria.jpg",
        title: "En televisores, tótems y kioscos",
        body: "De la tienda, bajo la misma lógica de contenido.",
      },
      {
        image: "/oem/signage-pantalla-anaquel.jpg",
        title: "En mini pantallas táctiles de anaquel",
        body: "Se activan cuando el cliente está a un metro del producto y muestran al personal la guía de acomodo del anaquel.",
      },
    ],
  },
  control: {
    eyebrow: "SOLUCIONES DE DIGITAL SIGNAGE",
    title: "Cómo se controla",
    features: [
      { icon: "wifi", title: "Actualización remota de toda la red", body: "Sin intervenir tienda por tienda." },
      { icon: "clock", title: "Campañas por hora, día, tienda o región", body: "Un mensaje distinto para cada momento y cada plaza." },
      { icon: "play", title: "Compatible con el modo demostración", body: "Que ya traen los equipos." },
      { icon: "grid", title: "Registro de cada toque", body: "En mapas de calor por zona y producto." },
    ],
  },
  pricingApp: {
    eyebrow: "SOLUCIONES DE DIGITAL SIGNAGE",
    title: "Precio digital en el equipo exhibido",
    body: "El celular o la tableta en exhibición muestra su propio precio: detecta modelo y memoria automáticamente, se protege con PIN o huella, borra datos personales de forma automática y no requiere hardware adicional.",
    image: "/oem/pricing-app.jpg",
  },
};

export const OEM_INTERACCION = {
  intro: {
    title: "Soluciones de interacción en punto de venta",
    tagline: "El producto se demuestra solo",
    tags: ["Táctil", "Lift & Learn", "Audio"],
    body: "Quien toca el producto está más cerca de comprarlo. Estas experiencias hacen que la demostración ocurra sin depender de un vendedor.",
    image: "/oem/interaccion-hero.jpg",
  },
  formas: {
    eyebrow: "SOLUCIONES DE INTERACCIÓN EN PUNTO DE VENTA",
    title: "Tres formas de que el producto se demuestre solo",
    products: [
      {
        image: "/oem/interaccion-tactil.jpg",
        code: "TÁCTIL",
        title: "El cliente navega en la pantalla",
        body: "Navega características, compara modelos y descubre promociones en la pantalla del equipo exhibido.",
      },
      {
        image: "/oem/interaccion-lift-learn.jpg",
        code: "LIFT & LEARN",
        title: "Levantar para descubrir",
        body: "Al tomar el celular, la tableta o la laptop, la pantalla contigua muestra su contenido.",
      },
      {
        image: "/oem/interaccion-audio.jpg",
        code: "AUDIO",
        title: "Escuchar antes de decidir",
        body: "Al tomar audífonos o bocinas se reproduce la demostración, junto con características y precio en pantalla.",
      },
    ],
  },
};

export const OEM_ESL = {
  intro: {
    title: "Soluciones de etiquetas ESL",
    tagline: "El fin de la tarjeta de precio impresa",
    tags: ["Precio remoto", "Ventana horaria", "Anaquel"],
    body: "Pantallas digitales en el anaquel que se actualizan de forma remota.",
    image: "/oem/esl-hero.jpg",
  },
  detalle: {
    eyebrow: "SOLUCIONES DE ETIQUETAS ESL",
    title: "Precio correcto en cada anaquel",
    features: [
      { icon: "tag", title: "Precio exacto", body: "Coincide siempre con el que se cobra en caja." },
      { icon: "wifi", title: "Cambios en toda la red al mismo tiempo", body: "Incluidos los lanzamientos de nuevos modelos.", highlight: true },
      { icon: "clock", title: "Promociones por horario", body: "Que se activan y desactivan solas." },
      { icon: "eye", title: "Más información junto al producto", body: "Características, plan o promoción." },
      { icon: "refresh", title: "Cero papel y menos carga operativa", body: "Nada que imprimir ni colocar en cada cambio." },
    ],
    specs: [
      { value: "10 años", note: "de batería" },
      { value: "7 colores", note: "en pantalla" },
      { value: "8 páginas", note: "por etiqueta" },
    ],
  },
};

export const OEM_CERRADURAS = {
  intro: {
    title: "Soluciones de cerraduras electrónicas",
    tagline: "De llave física a acceso autorizado",
    tags: ["RFID", "Bluetooth", "Trazabilidad"],
    body: "Se instalan ocultas dentro de vitrinas y cajones, sin modificar el mueble.",
    image: "/oem/cerraduras-hero.png",
    darkIllustration: true,
  },
  control: {
    eyebrow: "SOLUCIONES DE CERRADURAS ELECTRÓNICAS",
    title: "El control de acceso, con trazabilidad",
    features: [
      { icon: "key", title: "Apertura por tarjeta RFID o Bluetooth", body: "Sin gestión de llaves." },
      { icon: "clock", title: "Historial de cada apertura", body: "Usuario, hora y tiempo de uso.", highlight: true },
      { icon: "bell", title: "Alerta en tiempo real", body: "Cuando una puerta queda abierta." },
      { icon: "shield", title: "Acceso solo para personal autorizado", body: "A los equipos de mayor valor." },
      { icon: "tool", title: "Diseñadas para uso rudo", body: "En el punto de venta." },
    ],
  },
};

export const OEM_IA = {
  intro: {
    title: "Soluciones de inteligencia artificial",
    tagline: "Data en tiempo real de tu comprador en tienda",
    tags: ["Tráfico", "Comportamiento", "Operación"],
    body: "Convertimos las cámaras que ya operan en tienda en datos accionables sobre tu comprador y tu piso de venta.",
    image: "/oem/ia-hero.png",
    darkIllustration: true,
  },
  implementa: {
    eyebrow: "SOLUCIONES DE INTELIGENCIA ARTIFICIAL",
    title: "Cómo se implementa",
    body: "Con cualquier cámara IP existente, 100% en la nube, escalable de una a cientos de tiendas, con tableros comparables entre sucursales y app móvil.",
  },
  funciones: {
    eyebrow: "SOLUCIONES DE INTELIGENCIA ARTIFICIAL",
    title: "Qué te muestra",
    features: [
      { icon: "user", title: "Perfil de tu comprador", body: "Rango de edad, género y visitantes nuevos y recurrentes, sin contar a empleados ni proveedores." },
      { icon: "grid", title: "Recorrido en tienda", body: "Zonas de mayor y menor tráfico, permanencia y puntos de interés.", highlight: true },
      { icon: "bell", title: "Alertas de seguridad", body: "Visitantes previamente identificados en incidentes y accesos a áreas restringidas." },
      { icon: "device", title: "Anaqueles vacíos", body: "Detectados antes de perder la venta." },
      { icon: "tool", title: "Cumplimiento operativo", body: "Reposición, limpieza y atención en piso." },
    ],
  },
  aplicaciones: {
    eyebrow: "SOLUCIONES DE INTELIGENCIA ARTIFICIAL",
    title: "Decisiones con evidencia",
    features: [
      { icon: "grid", title: "Layout", body: "Acomodo según tráfico real." },
      { icon: "tag", title: "Trade marketing", body: "Saber si un display detiene al comprador." },
      { icon: "tool", title: "Operación", body: "Detectar zonas con bajo aprovechamiento." },
      { icon: "store", title: "Remodelaciones", body: "Rediseñar con base en comportamiento real." },
    ],
  },
};

export const OEM_PROCESS = {
  eyebrow: "CÓMO TRABAJAMOS CONTIGO",
  title: "Cómo trabajamos contigo",
  steps: [
    {
      number: "01",
      title: "Diagnóstico en piso",
      body: "Revisamos tu mobiliario, accesos y categorías.",
    },
    {
      number: "02",
      title: "Piloto medible",
      body: "Probamos en un grupo de tiendas, con métricas de antes y después.",
    },
    {
      number: "03",
      title: "Implementación nacional",
      body: "Instalación replicable en cualquier plaza de la República.",
    },
    {
      number: "04",
      title: "Acompañamiento continuo",
      body: "Soporte técnico con call center propio y monitoreo remoto.",
    },
  ],
  note: "Más de 25 años acompañando al retail físico en México.",
};

export const OEM_FAQ = {
  eyebrow: "PREGUNTAS FRECUENTES",
  title: "Preguntas frecuentes",
  items: [
    {
      question: "¿Funciona con cualquier marca de celular, laptop o smartwatch?",
      answer: "Sí. Las soluciones de exhibición se adaptan a cualquier marca y tamaño; solo cambian los soportes según el equipo.",
    },
    {
      question: "¿Tengo que cambiar mis cámaras para usar inteligencia artificial?",
      answer: "No. Funciona con cualquier cámara IP que ya tengas instalada y opera en la nube, sin equipo adicional en tienda.",
    },
    {
      question: "Tengo una sola tienda, ¿esto es para mí?",
      answer: "Sí. Todas las soluciones funcionan igual en una tienda que en cientos, y puedes empezar por la categoría que más te preocupa.",
    },
    {
      question: "¿Hay opciones que no requieran mantenimiento?",
      answer: "Sí. La seguridad mecánica no usa baterías, cables ni sensores: no hay nada que recargar ni reponer.",
    },
    {
      question: "¿Dan servicio fuera de la Ciudad de México?",
      answer: "Sí. Tenemos cobertura nacional y soporte técnico a través de nuestro call center.",
    },
    {
      question: "¿Puedo ver las soluciones antes de decidir?",
      answer: "Sí. Puedes probarlas en nuestros showrooms de Polanco, CDMX, y Culiacán, Sinaloa, o hacer un piloto medible en tus tiendas.",
    },
  ],
};

export const OEM_CIERRE = {
  title: "Ve cómo funciona antes de invertir",
  body: "Prueba la exhibición segura, las pantallas y el precio digital en un entorno real. Visita nuestros showrooms en Polanco, CDMX, y en Culiacán, Sinaloa.",
};
