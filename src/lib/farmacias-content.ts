// Contenido de la página Farmacias.
// Fuente: "Landing_Farmacias_Contenido.docx" (Dások All Solutions, octubre 2026).

export const FARMACIAS_HERO = {
  eyebrow: "PILAR · FARMACIAS",
  h1: "Cada zona de tu farmacia tiene un punto ciego. Nosotros lo cerramos.",
  hook: "Dermocosmética, fórmula infantil, rastrillos: las categorías que más te roban son las mismas que tus clientes necesitan ver, tocar y comparar para comprar. Si las escondes, pierdes venta. Si las dejas expuestas, pierdes producto.",
  intro:
    "Dások integra protección, exhibición e inteligencia en cada zona de tu farmacia: desde el anaquel hasta la trastienda, con un solo socio comercial que te acompaña de principio a fin.",
};

export const FARMACIAS_DOLOR = {
  eyebrow: "DOLOR DE NEGOCIO",
  title: "Lo que hoy le cuesta dinero a tu farmacia",
  features: [
    {
      icon: "shield",
      title: "Se roban lo que más vendes",
      body: "Cremas, protectores solares, fórmula infantil y rastrillos son productos pequeños, caros y fáciles de revender. Son los que más desaparecen del anaquel. La pérdida no se nota en el momento: se nota cuando cierras el mes y el número no cuadra.",
    },
    {
      icon: "lock",
      title: "Escondes el producto para protegerlo y eso frena la venta",
      body: "Poner el producto detrás del mostrador o dentro de una vitrina cerrada reduce el robo, pero también reduce la venta. El cliente que no puede tomar el producto, no compara. Y si no compara, no compra.",
    },
    {
      icon: "tag",
      title: "Los precios en el anaquel no siempre están actualizados",
      body: "Cambiar precios a mano lleva horas, genera errores y crea diferencias entre lo que dice el anaquel y lo que cobra la caja. Eso frustra al cliente y le cuesta tiempo a tu equipo.",
    },
    {
      icon: "chart",
      title: "No sabes qué pasa en tu piso de venta",
      body: "Sin datos de tráfico, zonas calientes y patrones de compra, las decisiones de exhibición, personal y seguridad se toman por costumbre, no por información.",
    },
  ],
};

export const FARMACIAS_ZONAS_INTRO = {
  eyebrow: "ZONA POR ZONA",
  title: "Soluciones que trabajan juntas, zona por zona",
  body: "Cada área de tu farmacia tiene un reto diferente. Dások lo resuelve con tecnología que se conecta en un solo entorno, no con piezas sueltas.",
};

export type FarmaciasZone = {
  number: string;
  slug: string;
  accent: "azul-primario" | "verde-acento" | "azul-corporativo" | "tinta";
  zoneLabel: string;
  title: string;
  icon: string;
  problema: string;
  solucion: string[];
  subItems?: { icon: string; title: string; body: string }[];
  highlights: string[];
};

export const FARMACIAS_ZONAS: FarmaciasZone[] = [
  {
    number: "01",
    slug: "dermocosmetica",
    accent: "azul-primario",
    zoneLabel: "Zona 1 · Anaquel de dermocosmética y cuidado personal",
    title: "Protege lo que más te roban sin esconderlo del cliente",
    icon: "bell",
    problema:
      "Cremas, sérum, protectores solares, maquillaje. Son productos caros, pequeños y fáciles de revender. Por eso son los más robados en farmacias. Si los encierras en vitrina, el cliente no los toca, no los compara y no los compra.",
    solucion: [
      "Cajas de seguridad que protegen el producto sin ocultarlo. El cliente puede verlo y tocarlo con libertad. Si alguien intenta retirar el dispositivo de seguridad, la alarma suena al instante. Un solo formato se adapta a distintos tamaños de producto, lo que simplifica la operación.",
      "Como complemento, ganchos inteligentes en el anaquel detectan cuando alguien retira varios productos al mismo tiempo y envían una alerta al personal en tiempo real.",
    ],
    highlights: [
      "Exhibición abierta, protección activa",
      "Alarma inmediata ante manipulación",
      "Un formato para múltiples categorías",
      "Alerta al personal en tiempo real",
    ],
  },
  {
    number: "02",
    slug: "formula-infantil",
    accent: "verde-acento",
    zoneLabel: "Zona 2 · Fórmula infantil y pañales",
    title: "La fórmula no puede estar bajo llave. Tampoco puede desaparecer del anaquel.",
    icon: "refresh",
    problema:
      "La fórmula infantil es cara y fácil de revender. El robo no es de una lata: es de varias al mismo tiempo. A eso se le llama barrido de anaquel. Pero encerrarla bajo llave genera fricción con el padre o la madre que necesita acceso rápido.",
    solucion: [
      "Dispensadores diseñados para fórmula infantil. Solo permiten sacar un producto a la vez, lo que impide el barrido. El personal puede reabastecer de frente, sin herramientas y sin interrumpir la operación. Los productos siempre quedan al frente del anaquel, listos para el siguiente cliente.",
    ],
    highlights: [
      "Impide que se lleven varios productos a la vez",
      "Dispensado uno a uno",
      "Recarga frontal sin herramientas",
      "Producto siempre al frente del anaquel",
    ],
  },
  {
    number: "03",
    slug: "mostrador",
    accent: "tinta",
    zoneLabel: "Zona 3 · Productos de mostrador y alto valor en anaquel abierto",
    title: "Anaquel abierto con vigilancia inteligente: el cliente compra con libertad, tú operas con control",
    icon: "grid",
    problema:
      "Antigripales, vitaminas, suplementos, preservativos, protectores solares y rastrillos son productos que viven en anaquel abierto. Son pequeños y se mueven rápido. La pérdida se acumula sin que nadie la note hasta el conteo de inventario.",
    solucion: [
      "Ganchos y organizadores inteligentes que registran cada retiro de producto. Cuando alguien toma varios productos en segundos, el sistema genera una alerta discreta y notifica al personal. El anaquel sigue abierto para el cliente, pero se vuelve vigilante contra el robo hormiga.",
      "Como complemento, etiquetas de seguridad con alarma integrada que se activan si alguien intenta retirarlas sin desactivación. Son compatibles con las antenas en las salidas de la farmacia.",
    ],
    highlights: [
      "Cada retiro de producto queda registrado",
      "Alerta ante patrones de sustracción",
      "El anaquel sigue abierto para el comprador",
      "Compatible con antenas de seguridad en salidas",
    ],
  },
  {
    number: "04",
    slug: "linea-cajas",
    accent: "azul-corporativo",
    zoneLabel: "Zona 4 · Línea de cajas",
    title: "Detecta el problema en el instante, no en el reporte del día siguiente",
    icon: "wifi",
    problema:
      "Muchas pérdidas ocurren justo en la caja: productos que pasan sin escanear, descuentos no autorizados, anulaciones fuera de lugar. Además, si la desactivación de etiquetas de seguridad es lenta, la fila crece y el cliente se desespera.",
    solucion: [
      "Sistemas de seguridad inteligentes conectados a internet que permiten monitorear cada equipo de forma remota: saber cuándo se encienden, cuándo se apagan, cuántas alarmas se activan y cuántas etiquetas se desactivan. Los desactivadores de alto rendimiento procesan las etiquetas rápido, sin agregar tiempo a la transacción. Todo se centraliza en una plataforma que permite comparar el desempeño entre sucursales.",
    ],
    highlights: [
      "Monitoreo remoto del estado de cada equipo",
      "Datos de alarmas y desactivaciones por sucursal",
      "Desactivación rápida sin hacer fila",
      "Servicio técnico remoto, sin enviar técnico a tienda",
    ],
  },
  {
    number: "05",
    slug: "bodega",
    accent: "verde-acento",
    zoneLabel: "Zona 5 · Bodega, trastienda y accesos restringidos",
    title: "Controla quién entra, cuándo y a qué",
    icon: "key",
    problema:
      "La trastienda y la bodega guardan lo más valioso: medicamento controlado, producto de alta especialidad y mercancía de reposición. Una llave física no deja registro, se puede copiar fácilmente y no te dice quién entró ni cuándo.",
    solucion: [
      "Cerraduras electrónicas que reemplazan la llave física. Cada apertura queda registrada: quién abrió, a qué hora y durante cuánto tiempo. El acceso al inventario de respaldo queda reservado al personal autorizado. Sin llave que copiar, sin accesos fuera de control.",
    ],
    highlights: [
      "Registro de cada apertura: quién, cuándo, cuánto",
      "Sin llaves físicas que duplicar",
      "Acceso solo a personal autorizado",
      "Exhibición visible, inventario resguardado",
    ],
  },
  {
    number: "06",
    slug: "piso-venta",
    accent: "tinta",
    zoneLabel: "Zona 6 · Piso de venta completo",
    title: "Datos en tiempo real, precios correctos y comunicación visual en cada pasillo",
    icon: "chart",
    problema:
      "Sin datos, el acomodo de la farmacia se define por costumbre, no por comportamiento del cliente. Los precios se cambian a mano, lo que consume horas y genera errores. La comunicación en piso depende de material impreso que llega tarde y se pone donde cabe, no donde funciona.",
    solucion: ["Tres capas de inteligencia que trabajan juntas en todo el piso de venta:"],
    subItems: [
      {
        icon: "camera",
        title: "Inteligencia artificial",
        body: "Observa el recorrido del cliente y revela tráfico, zonas de mayor interés y tiempos de permanencia. Te ayuda a decidir dónde exhibir, dónde reforzar personal y dónde enfocar la seguridad, con datos, no con intuición.",
      },
      {
        icon: "tag",
        title: "Etiquetas electrónicas de precio",
        body: "Actualizan el precio en todos los anaqueles de forma remota, sin recorridos manuales, sin errores y sin diferencias en caja. Tu equipo recupera horas de trabajo para atender y vender.",
      },
      {
        icon: "device",
        title: "Pantallas y señalización digital",
        body: "Comunican promociones, lanzamientos e información de producto en el lugar y en el momento correctos. La farmacia le habla al cliente mientras recorre el pasillo.",
      },
    ],
    highlights: [
      "Mapas de calor y conteo de personas",
      "Precios actualizados de forma remota",
      "Comunicación digital en el punto de decisión",
      "Decisiones basadas en datos, no en intuición",
    ],
  },
];

export const FARMACIAS_POR_QUE = {
  eyebrow: "POR QUÉ DÁSOK",
  title: "Un solo socio comercial para todo el entorno de tu farmacia",
  intro:
    "No necesitas contratar a alguien para las antenas, a otro para las cerraduras, a otro para las etiquetas y a otro para la analítica. Necesitas un socio que piense tu farmacia como un entorno completo y te acompañe en cada etapa.",
  features: [
    {
      icon: "eye",
      title: "Ver para decidir",
      body: "Showrooms interactivos en operación real en CDMX y en el norte del país. Experimenta las soluciones en un entorno real, no en catálogo, antes de comprometer presupuesto.",
    },
    {
      icon: "headset",
      title: "Acompañamiento y call center dedicado",
      body: "Te acompañamos en cada etapa: diagnóstico, instalación, capacitación, operación e incidencias. Nuestro call center dedicado es el respaldo detrás de la tecnología.",
    },
    {
      icon: "clock",
      title: "25 años en retail mexicano",
      body: "25 años de trayectoria respaldan cada recomendación. Ese historial reduce el riesgo de tu inversión desde el primer día.",
    },
    {
      icon: "pin",
      title: "Cobertura nacional",
      body: "Instalación, servicio y soporte en todo el país. Una sola relación comercial que escala con tu operación.",
    },
    {
      icon: "device",
      title: "Tecnología de primer nivel, criterio local",
      body: "Trabajamos con tecnología de primer nivel implementada con criterio local. Tienes garantía de largo plazo, no solo precio de entrada.",
    },
  ],
};

export const FARMACIAS_CIERRE = {
  title: "¿Cuánto producto estás perdiendo cada mes?",
  body: "Agenda tu visita a nuestro showroom en CDMX o en el norte del país. Comprueba en persona cómo opera un entorno farmacéutico inteligente antes de tomar cualquier decisión.",
};
