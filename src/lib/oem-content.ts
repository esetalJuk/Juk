// Contenido de la página OEM / Electrónica de consumo.
// Fuente: "Presentación OEMs" (material comercial Dások). Redactado siguiendo
// la Guía de Tono y Voz 2026: sin "ecosistema" / "un solo proveedor", vocabulario
// reemplazado por "entorno" / "socio estratégico" con acción concreta.

export const OEM_HERO = {
  eyebrow: "PILAR · OEM Y ELECTRÓNICA DE CONSUMO",
  h1: "Convertimos la exhibición en tu mejor vendedor",
  hook: "El dispositivo que no se puede tocar, no se vende. El que se puede robar, tampoco.",
  intro:
    "Acompañamos tu operación de principio a fin: mejor experiencia de compra, menor pérdida y datos reales para decidir con confianza.",
};

export const OEM_ENTORNO_INTRO = {
  eyebrow: "QUÉ COMPONE EL ENTORNO",
  title: "Cada solución resuelve una dolencia del piso de venta",
  body: "Dások cierra esa brecha: protege tu producto exhibido sin interferir con la experiencia del cliente, controla el mensaje que lo acompaña, mantiene el precio consistente en toda tu red y convierte cada exhibición en datos que comparas y accionas en tiempo real. Eso es un entorno inteligente.",
};

export const OEM_SOLUTION_LINES = [
  {
    number: "01",
    slug: "seguridad",
    label: "Seguridad para display",
    icon: "shield",
    kicker: "Electrónicas · Mecánicas",
    description: "Protege celulares, laptops y audio en exhibición sin bloquear la prueba del producto.",
    accent: "azul-primario",
  },
  {
    number: "02",
    slug: "signage",
    label: "Digital Signage",
    icon: "device",
    kicker: "Producto · Anaquel · Precio · Experiencias",
    description: "Convierte cada pantalla del punto de venta en un canal de marca controlado.",
    accent: "verde-acento",
  },
  {
    number: "03",
    slug: "interaccion",
    label: "Interacción en el punto de venta",
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
    description: "Las cámaras que ya operan en tienda, convertidas en datos accionables de piso de venta.",
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
    label: "Antenas EAS",
    kicker: "Antenas · Consumibles",
    description: "Detección en el acceso y monitoreo remoto de toda la red de tiendas.",
    accent: "verde-acento",
  },
] as const;

export const OEM_SEGURIDAD = {
  intro: {
    eyebrow: "SEGURIDAD PARA DISPLAY",
    title: "Tocar, probar, decidir",
    tags: ["Electrónicas", "Mecánicas"],
    body: "Durante años, exhibir un dispositivo de alto valor implicó elegir entre dejarlo libre para que el cliente lo pruebe o asegurarlo tanto que nadie pudiera interactuar con él. La exhibición correcta resuelve esa tensión: el cliente toma el producto, lo prueba y explora todas sus funciones con total libertad — protegido en la exhibición, sin que se note.",
    image: "/oem/seguridad-hero.jpg",
    imageCredit: "Getty Images / SimpleImages",
  },
  celulares: {
    eyebrow: "ELECTRÓNICAS",
    title: "Celulares y tabletas",
    intro: "Nuestros sistemas para celulares son igualmente compatibles con tabletas: solo cambia la dimensión de los brackets, no la lógica de protección.",
    products: [
      {
        image: "/oem/celulares-power-cord-reel.jpg",
        code: "POWER CORD REEL",
        title: "Plataforma modular",
        body: "Para exhibiciones individuales, mesas con múltiples dispositivos o espacios de marca completos. Unidad central de energía multivoltaje, cables de distintos largos y conectores compatibles con múltiples marcas, con sensores configurables según el formato.",
      },
      {
        image: "/oem/celulares-des50.jpg",
        code: "DES50",
        title: "Exhibición segura para celulares",
        body: "Alarma superior a 100 dB. Diseño modular con sistema retráctil para una exhibición limpia en mostrador. Puede utilizarse con 2 o 4 brackets para mayor seguridad.",
      },
      {
        image: "/oem/celulares-ms001.jpg",
        code: "MS001 VERTICAL",
        title: "Exhibición vertical individual",
        body: "Solución Stand Alone ajustable a prácticamente cualquier modelo actual, con seguridad escalable según la categoría o el riesgo de cada tienda. Sensores de perfil ultradelgado y baja tensión para una manipulación cómoda.",
      },
    ],
  },
  autonomia: {
    eyebrow: "ELECTRÓNICAS",
    title: "Autonomía y exhibición sin cables",
    intro: "Cuando la exhibición opera sin corriente constante, o cuando no debe verse un solo cable sobre la mesa, cambia la unidad de energía, no el sistema.",
    products: [
      {
        image: "/oem/autonomia-ms004.jpg",
        code: "MS004",
        title: "Energía y autonomía extendida",
        body: "Integra un sistema AP que entrega energía y alarma de 110 dB, en configuración de 2 o 4 brackets. Su batería de respaldo ofrece hasta 48 horas de autonomía, ideal para exhibiciones sin corriente constante o activaciones temporales.",
      },
      {
        image: "/oem/autonomia-rs001.jpg",
        code: "RS001",
        title: "Libre de cables sobre la mesa",
        body: "Exhibición individual y de cross-merchandising, con brackets intercambiables en configuración de 2 o 4 según el nivel de riesgo. El cliente interactúa sin ningún cable visible sobre la mesa.",
      },
    ],
  },
  laptops: {
    eyebrow: "ELECTRÓNICAS",
    title: "Laptops",
    intro: "Una sola plataforma de protección para todo el portafolio de equipos de cómputo en exhibición, sin una solución distinta para cada modelo.",
    image: "/oem/laptops.jpg",
    features: [
      { icon: "shield", title: "Seguridad que no compite con el diseño", body: "Perfil compacto y refinado que se integra a la identidad visual de la tienda, protegiendo el equipo sin restarle protagonismo al producto." },
      { icon: "grid", title: "Seguridad universal", body: "Una sola plataforma se adapta a distintos tipos e intensidades de alarma, largos de cable y conectores compatibles con múltiples marcas de laptops." },
      { icon: "bell", title: "Protección sin concesiones", body: "Alarma de 100 dB combinada con un sistema de bloqueo por cable, que disuade el robo de forma inmediata y decisiva." },
      { icon: "refresh", title: "Escalable más allá de laptops", body: "La misma plataforma de protección se extiende a otros dispositivos de alto valor del portafolio, no solo a laptops." },
    ],
  },
  audio: {
    eyebrow: "ELECTRÓNICAS",
    title: "Audio y producto pequeño",
    intro: "Producto de alto valor y alta manipulación: cada formato exige un tipo de protección distinto, sin bloquear la prueba del producto.",
    products: [
      {
        image: "/oem/audio-cubik.jpg",
        code: "CUBIK",
        title: "Audífonos in-ear",
        body: "Solución mecánica pensada específicamente para audífonos in-ear, con un diseño estético que combina seguridad y funcionalidad para una experiencia de venta óptima.",
      },
      {
        image: "/oem/audio-mebox.jpg",
        code: "MEBOX",
        title: "Producto suelto y de tamaño reducido",
        body: "Cubierta protectora transparente con detección de alarma integrada, indicada para EarPods, relojes, lentes y perfumes. Exhibe el producto sin ocultarlo: visible y protegido al mismo tiempo.",
      },
      {
        image: "/oem/audio-headphone.jpg",
        code: "HEADPHONE",
        title: "Audífonos over-ear",
        body: "Soporte funcional y elegante con carga integrada por cable Micro USB o Tipo C. El cliente ve el audífono siempre cargado y listo para probarse — no solo colgado en un gancho.",
      },
    ],
  },
  wearables: {
    eyebrow: "ELECTRÓNICAS",
    title: "Wearables y exhibición multi-dispositivo",
    intro: "Del reloj individual a la mesa de uso mixto, con sensores y membranas específicos para cada formato.",
    products: [
      {
        image: "/oem/wearables-smartwatch.jpg",
        code: "STAND ALONE",
        title: "Smartwatch",
        body: "Sistema ajustable a prácticamente todos los modelos actuales, que protege la carátula mediante una membrana conectada al sensor en las correas. Sensores de baja tracción para interactuar con libertad.",
      },
      {
        image: "/oem/wearables-miniport.jpg",
        code: "MINI PORT",
        title: "Exhibición multi-dispositivo",
        body: "Estación autónoma de alarma con 2 o 4 puertos, para aplicaciones individuales, mesas de uso mixto o espacios de marca completos, con liberación rápida para remercadeo o resguardo nocturno.",
      },
    ],
  },
  mecanicas: {
    eyebrow: "MECÁNICAS",
    title: "Robusta, adaptable y libre de mantenimiento",
    intro: "Protección de alta seguridad para celulares, tabletas y laptops. Se ancla a la mesa o se fija con adhesivo de máxima seguridad, y no requiere consumibles ni mantenimiento.",
    products: [
      {
        image: "/oem/mecanicas-alta-seguridad.jpg",
        code: "SUJECIÓN METÁLICA",
        title: "Alta seguridad",
        body: "Sujeción metálica reforzada al mobiliario: el cliente manipula el equipo con total libertad y el dispositivo no sale de la mesa.",
      },
      {
        image: "/oem/mecanicas-sin-consumibles.jpg",
        code: "CERO MANTENIMIENTO",
        title: "Sin consumibles ni mantenimiento",
        body: "No usa baterías, cables ni sensores: nada que reponer, nada que recargar y nada a lo que dar servicio a lo largo de su vida útil.",
      },
      {
        image: "/oem/mecanicas-anclada.jpg",
        code: "FIJACIÓN",
        title: "Anclada o adherida",
        body: "Se instala anclada a la mesa o fijada con adhesivo de máxima seguridad, según lo permita el mobiliario de cada tienda.",
      },
    ],
    closing: "Todos los modelos son universales: cualquier celular, tableta, smartwatch o laptop, sin importar marca ni tamaño.",
  },
  implementa: {
    eyebrow: "SEGURIDAD PARA DISPLAY",
    title: "Lo que deja implementar esta solución",
    items: [
      { number: "01", title: "Un estándar consistente", body: "El mismo nivel de protección y experiencia en cada tienda, sin importar quién la opere ni qué mueble use." },
      { number: "02", title: "Menor costo de reposición", body: "Menos pérdida por robo en piso, incluyendo las categorías de mayor rotación." },
      { number: "03", title: "El momento de verdad, protegido", body: "El cliente prueba el producto sin fricción, sin que eso implique un riesgo mayor." },
      { number: "04", title: "Implementación sin fricción", body: "Instalación en minutos, fácil de replicar en cientos de puntos de venta." },
      { number: "05", title: "Venta cruzada desde la misma base", body: "Cada base segura puede integrarse con Digital Signage para promover accesorios, planes o garantías, sin ocupar piso adicional." },
    ],
  },
};

export const OEM_SIGNAGE = {
  intro: {
    eyebrow: "DIGITAL SIGNAGE",
    title: "Una pantalla, un canal de marca",
    tags: ["Pantalla del producto", "Anaquel", "Precio digital", "Experiencias"],
    body: "Convertimos cada pantalla del punto de venta en un canal de marca controlado desde un solo lugar: lo que se muestra, cuándo se muestra y dónde. El recorrido de esta línea va de dónde vive el contenido, a cómo se controla, a qué muestra frente al shopper y a qué datos devuelve.",
    image: "/oem/signage-hero.jpg",
    imageCredit: "Getty Images / Vladimir Fedorov",
  },
  donde: {
    eyebrow: "DIGITAL SIGNAGE",
    title: "Dónde vive el contenido",
    intro: "Tres superficies distintas, un mismo sistema de contenido y control.",
    products: [
      {
        image: "/oem/signage-pantalla-producto.jpg",
        title: "Pantalla del producto",
        body: "El mismo celular, tableta o laptop en exhibición muestra promociones, características y precio en su propia pantalla, con acceso a la configuración bloqueado.",
      },
      {
        image: "/oem/signage-pantalla-secundaria.jpg",
        title: "Pantalla secundaria",
        body: "Televisores, tótems y kioscos dentro de la exhibición se integran al mismo sistema, bajo la misma lógica de contenido.",
      },
      {
        image: "/oem/signage-pantalla-anaquel.jpg",
        title: "Pantalla de anaquel",
        body: "Mini pantallas Vivitag instaladas junto al producto: un espacio de marca propio sin ocupar piso adicional.",
      },
    ],
  },
  control: {
    eyebrow: "DIGITAL SIGNAGE",
    title: "Cómo se controla",
    intro: "Una sola plataforma decide qué aparece en cada pantalla de la red, sin intervención manual en cada tienda.",
    features: [
      { icon: "wifi", title: "Control remoto y centralizado", body: "Se actualiza el contenido de todas las pantallas de la red desde un solo punto, sin que nadie tenga que intervenir tienda por tienda." },
      { icon: "clock", title: "Campañas por hora, día, tienda o región", body: "Una promoción de mañana y otra de tarde; una campaña para el norte del país y otra para el centro — sin reprogramar cada pantalla a mano." },
      { icon: "play", title: "Compatible con demo mode", body: "Se integra con el modo de demostración que los fabricantes ya incluyen en los equipos exhibidos, sin sustituirlo ni interferir con él." },
      { icon: "grid", title: "Mapas de calor por clic", body: "Cada clic sobre la pantalla queda registrado y se traduce en mapas de calor: qué contenido se toca, en qué zona y a qué hora." },
    ],
  },
  pricingApp: {
    eyebrow: "DIGITAL SIGNAGE",
    title: "Digital Pricing App: el precio, siempre correcto",
    intro: "Convierte el mismo celular o tableta en exhibición en una etiqueta de precio digital interactiva, eliminando por completo la tarjeta de precio impresa.",
    image: "/oem/pricing-app.jpg",
    features: [
      { icon: "refresh", title: "Instalación sin fricción", body: "Detecta automáticamente el modelo y la memoria de cada equipo, sin configuración manual.", highlight: false },
      { icon: "tag", title: "Precio siempre correcto", body: "Se actualiza de forma remota por tienda en segundos: el precio en exhibición coincide siempre con el de caja.", highlight: true },
      { icon: "lock", title: "Seguridad reforzada", body: "Acceso oculto a la app, bloqueo por PIN o huella, y borrado automático de datos personales.", highlight: false },
      { icon: "device", title: "Sin hardware adicional", body: "Aprovecha el equipo que ya está en exhibición: la misma pantalla que protege, ahora también vende.", highlight: false },
    ],
    footnote: "Acceso inmediato a la información del equipo y del plan, para resolver dudas sin tiempos de espera.",
  },
  vivitag: {
    eyebrow: "DIGITAL SIGNAGE",
    title: "Pantalla Vivitag",
    intro: "Mini pantallas táctiles instaladas directamente en el anaquel, junto al producto — más allá del precio, un espacio de marca propio.",
    features: [
      { icon: "eye", title: "Información al alcance del toque", body: "Precio, características, tallas, colores, fotos y video directamente en el anaquel, sin depender de que un vendedor esté disponible." },
      { icon: "wifi", title: "Activación por proximidad", body: "Un sensor detecta al cliente a un metro de distancia y activa el contenido relevante en el momento exacto en que se acerca al producto." },
      { icon: "grid", title: "Apoyo al personal de tienda", body: "Un gesto específico revela la guía de acomodo (planograma) en la pantalla, ayudando a reponer el anaquel de forma correcta." },
      { icon: "device", title: "Un tamaño para cada categoría", body: "Disponible en múltiples formatos, para adaptarse al espacio y al tipo de producto de cada anaquel." },
    ],
  },
};

export const OEM_INTERACCION = {
  intro: {
    eyebrow: "INTERACCIÓN EN EL PUNTO DE VENTA",
    title: "El efecto en el punto de venta",
    features: [
      { icon: "store", title: "Más conversión", body: "Mejora la calidad de la experiencia en el punto de venta y eleva la atención del cliente, invitándolo a interactuar con el producto." },
      { icon: "tap", title: "Simple de operar, poderosa", body: "Informa a clientes y a personal de un solo vistazo, con contenido elegante y atractivo, y resuelve de forma fácil y automática muchos problemas operativos." },
      { icon: "device", title: "En cualquier superficie", body: "Tableta, teléfono inteligente, pantalla o nuestro preciador independiente: precio, datos pertinentes y promociones de temporada." },
      { icon: "chart", title: "Datos reales, no estimados", body: "Cada toque y cada segundo de interacción queda registrado. Con mapas de calor por zona y por producto se decide el acomodo con evidencia." },
    ],
    closing: "El shopper decide con más información. La marca decide con más datos.",
  },
  productoResponde: {
    eyebrow: "INTERACCIÓN EN EL PUNTO DE VENTA",
    title: "El producto responde cuando el cliente lo toca",
    tags: ["Táctil", "Lift & Learn", "Audio"],
    body: "Quien toca el producto está mucho más cerca de comprarlo. Estas tres experiencias convierten la mesa de exhibición en una demostración que ocurre sola: el cliente toca, levanta o escucha, y el contenido correcto aparece en ese momento — sin depender de que haya un vendedor disponible.",
    image: "/oem/interaccion-hero.jpg",
  },
  formas: {
    eyebrow: "INTERACCIÓN",
    title: "Tres formas de que el producto se demuestre solo",
    products: [
      {
        image: "/oem/interaccion-tactil.jpg",
        code: "TÁCTIL",
        title: "El equipo es la demostración",
        body: "El cliente navega características, compara modelos y descubre promociones tocando la pantalla del propio equipo exhibido. La demostración corre sola y siempre muestra el mensaje de marca aprobado.",
      },
      {
        image: "/oem/interaccion-lift-learn.jpg",
        code: "LIFT & LEARN",
        title: "Levantar para descubrir",
        body: "Al levantar el celular, la tableta o el laptop, un sensor dispara el contenido correspondiente en la pantalla contigua. El gesto natural de tomar el producto se vuelve el inicio de la historia de marca.",
      },
      {
        image: "/oem/interaccion-audio.jpg",
        code: "AUDIO",
        title: "Escuchar antes de decidir",
        body: "Audífonos y bocinas se prueban sin intervención del personal: al tomar el producto se reproduce la pista de demostración y en pantalla aparecen sus características y su precio.",
      },
    ],
    closing: "Interactuar es el paso previo a comprar: entre más fácil sea probar el producto, más alta la conversión y el ticket promedio.",
  },
};

export const OEM_IA = {
  intro: {
    eyebrow: "INTELIGENCIA ARTIFICIAL",
    title: "Las cámaras que ya operan, convertidas en datos",
    tags: ["Tráfico", "Comportamiento", "Operación"],
    body: "Convertimos las cámaras que ya operan en el piso de venta en datos accionables sobre cómo se comporta la marca ahí: quién entra, qué zona genera más interés y qué necesita atención inmediata — en celulares, tabletas, laptops, wearables y audífonos.",
    image: "/oem/ia-hero.png",
    darkIllustration: true,
  },
  implementa: {
    eyebrow: "INTELIGENCIA ARTIFICIAL",
    title: "Cómo se implementa y cómo escala",
    intro: "Sin cámaras nuevas, sin infraestructura local y sin inversión extra en hardware.",
    columns: [
      {
        heading: "Cómo se implementa",
        items: [
          { icon: "camera", title: "Se integra al sistema de cámaras existente", body: "Se conecta al circuito de video que la tienda ya opera." },
          { icon: "cloud", title: "100% en la nube", body: "Sin almacenamiento local, sin integración adicional y sin inversión extra en hardware." },
          { icon: "grid", title: "Compatible con cualquier cámara IP", body: "Funciona sin importar el fabricante del sistema instalado." },
        ],
      },
      {
        heading: "Escalabilidad y control",
        items: [
          { icon: "store", title: "Solución escalable", body: "Funciona igual para una tienda que para cientos: la misma plataforma crece con la red." },
          { icon: "chart", title: "Dashboards comparables entre tiendas", body: "Compara el desempeño de sucursales en una sola vista, para identificar qué funciona y por qué." },
          { icon: "device", title: "App móvil", body: "Consulta el estado de la operación y de la exhibición desde cualquier lugar." },
        ],
      },
    ],
  },
  funciones: {
    eyebrow: "INTELIGENCIA ARTIFICIAL",
    title: "Funciones principales",
    intro: "Lo que la plataforma observa y reporta del piso de venta, con el detalle necesario para decidir con evidencia.",
    features: [
      { icon: "user", title: "Análisis de clientes", body: "Ingresos, género, rango de edad y visitantes frecuentes, excluyendo empleados y proveedores del conteo." },
      { icon: "grid", title: "Mapas de calor", body: "Zonas de mayor y menor tráfico, permanencia, visitantes por área y puntos de interés — flujo y recorrido del shopper.", highlight: true },
      { icon: "device", title: "Detección de anaqueles vacíos", body: "Identifica cuando un exhibidor se quedó sin producto, para reponerlo antes de perder la venta." },
      { icon: "eye", title: "Listas negras y seguridad", body: "Reconoce visitantes previamente identificados como sospechosos y detecta intrusión en áreas restringidas." },
      { icon: "tool", title: "Asignación y verificación de tareas", body: "Monitorea el cumplimiento de tareas operativas en piso: reposición, limpieza y atención al cliente." },
    ],
    stat: { label: "EJEMPLO DE REPORTE POR ZONA", items: [
      { value: "256", note: "visitantes" },
      { value: "4.2 min", note: "permanencia" },
      { value: "65%", note: "tasa de permanencia" },
    ]},
  },
  aplicaciones: {
    eyebrow: "INTELIGENCIA ARTIFICIAL",
    title: "Aplicaciones para el negocio",
    intro: "Cuatro decisiones que dejan de tomarse por intuición cuando el dato del piso de venta está disponible.",
    features: [
      { icon: "grid", title: "Layout", body: "Redistribuye categorías y zonas de impulso con base en tráfico y permanencia real." },
      { icon: "tag", title: "Trade marketing", body: "Mide si los displays o promociones realmente detienen al shopper." },
      { icon: "tool", title: "Operación", body: "Detecta áreas con bajo aprovechamiento para corregir la ejecución en piso." },
      { icon: "store", title: "Remodelaciones", body: "Rediseña espacios de exhibición con evidencia de comportamiento real, no supuestos." },
    ],
  },
};

export const OEM_CERRADURAS = {
  intro: {
    eyebrow: "CERRADURAS ELECTRÓNICAS",
    title: "De llave física a acceso autorizado",
    tags: ["RFID", "Bluetooth", "Trazabilidad"],
    body: "Transformamos vitrinas, cajones y áreas restringidas en puntos de acceso controlados. Se instalan de forma oculta dentro del mobiliario, sin modificar su estructura, con operación por RFID y Bluetooth, historial de uso y administración digital.",
    image: "/oem/cerraduras-hero.png",
    darkIllustration: true,
  },
  control: {
    eyebrow: "CERRADURAS ELECTRÓNICAS",
    title: "El control de acceso, con trazabilidad",
    intro: "De un esquema manual y poco auditable a un modelo con usuarios autorizados, historial y menor exposición a merma — sin modificar el mueble existente.",
    features: [
      { icon: "shield", title: "Menos exposición a merma", body: "Restringir el acceso a los dispositivos de mayor valor reduce robo, manipulación no autorizada y aperturas fuera de protocolo." },
      { icon: "clock", title: "Más control operativo", body: "Cada apertura puede vincularse a un usuario, una hora y un tiempo de uso, con mayor disciplina operativa.", highlight: true },
      { icon: "key", title: "Menos dependencia de llaves físicas", body: "El acceso por RFID o Bluetooth elimina la gestión manual de llaves y agiliza la atención frente al cliente." },
      { icon: "eye", title: "Protección discreta y profesional", body: "Al ser una solución oculta, protege el mobiliario sin afectar la imagen de marca ni saturar la vitrina." },
      { icon: "bell", title: "Durabilidad y alertas en tiempo real", body: "Diseñada para el uso rudo del punto de venta, con alertas inmediatas cuando una puerta permanece abierta." },
    ],
  },
};

export const OEM_ESL = {
  intro: {
    eyebrow: "ETIQUETAS ESL",
    title: "El fin de la tarjeta de precio impresa",
    tags: ["Precio remoto", "Ventana horaria", "Anaquel"],
    body: "Cada modelo, color y capacidad requiere su propio precio visible junto al equipo. Las etiquetas electrónicas reemplazan esas tarjetas por pantallas digitales que se actualizan de forma remota, sin recorrer mueble por mueble ni tienda por tienda.",
    image: "/oem/esl-hero.jpg",
  },
  detalle: {
    eyebrow: "ETIQUETAS ESL",
    title: "Precio correcto en cada anaquel",
    intro: "Un mismo cambio de precio se ejecuta en toda la red, sin recorrer mueble por mueble.",
    features: [
      { icon: "tag", title: "Precisión", body: "Elimina las discrepancias entre el precio junto al dispositivo exhibido y el que se cobra en caja." },
      { icon: "wifi", title: "Actualización instantánea en toda la red", body: "Cambia precios y lanza promociones de nuevos modelos en todas las tiendas al mismo tiempo.", highlight: true },
      { icon: "eye", title: "Más información al decidir", body: "Muestra características, plan o promoción junto al dispositivo, sin depender de un vendedor." },
      { icon: "tool", title: "Menos carga operativa", body: "Elimina imprimir y colocar tarjetas cada vez que cambia un modelo, un color o una promoción." },
      { icon: "refresh", title: "Menos residuos", body: "Elimina por completo el papel impreso, con una batería de larga duración en cada etiqueta." },
      { icon: "clock", title: "Promociones por ventana horaria", body: "Activa y desactiva precios de lanzamiento en horarios específicos, algo que la tarjeta impresa no puede ejecutar." },
    ],
    specs: [
      { value: "10 años", note: "de batería" },
      { value: "7 colores", note: "en pantalla" },
      { value: "8 páginas", note: "por etiqueta" },
    ],
  },
};

export const OEM_EAS = {
  intro: {
    eyebrow: "ANTENAS EAS",
    title: "Protección en el momento más vulnerable: la salida",
    tags: ["Antenas", "Consumibles"],
    body: "Instalamos antenas en los accesos que detectan las etiquetas de seguridad activas al salir: si un producto no fue desactivado en caja, se genera una alarma inmediata. Sumamos reconocimiento facial contra una base de reincidentes y un panel de control remoto con monitoreo en tiempo real.",
    image: "/oem/eas-hero.jpg",
  },
  resuelve: {
    eyebrow: "ANTENAS EAS",
    title: "Lo que resuelve el sistema en la salida",
    intro: "Detección en el acceso, reconocimiento de reincidentes y monitoreo remoto de toda la red.",
    image: "/oem/eas-resuelve.jpg",
    features: [
      { icon: "shield", title: "Protege las categorías de mayor riesgo", body: "Celulares, tabletas y laptops en exhibición, los equipos más atractivos para el robo en cualquier tienda." },
      { icon: "wifi", title: "Supervisión centralizada de la red", body: "Consulta el estado de cada tienda y detecta incidencias antes de que se conviertan en un problema mayor." },
      { icon: "clock", title: "Menor tiempo de atención y costo operativo", body: "El acceso remoto evita desplazamientos físicos innecesarios a cada punto de venta." },
      { icon: "chart", title: "Seguridad convertida en información de negocio", body: "Identifica patrones y horarios de riesgo por tienda o región, para reforzar protocolos donde se necesita." },
    ],
  },
  consumibles: {
    eyebrow: "CONSUMIBLES EAS",
    title: "El accesorio también es objetivo de robo",
    intro: "Etiquetas duras reutilizables (más de 40 formatos), etiquetas suaves adhesivas de un solo uso y sistemas de cable y spider wrap para empaques irregulares o de mayor tamaño.",
    products: [
      {
        image: "/oem/eas-consumibles-accesorios.jpg",
        title: "Cierra el círculo de protección",
        body: "Extiende la protección más allá del dispositivo principal: audífonos, cargadores, fundas y accesorios empacados.",
      },
      {
        image: "/oem/eas-consumibles-cosmeticos.jpg",
        title: "Un consumible para cada categoría",
        body: "Se adapta el formato correcto según el tamaño, la forma y el perfil de riesgo de cada producto.",
      },
      {
        image: "/oem/eas-consumibles-spiderwrap.jpg",
        title: "Complementa la protección electrónica",
        body: "Cable y spider wrap trabajan junto con las antenas EAS sin afectar la experiencia de exhibición.",
      },
    ],
  },
};

export const OEM_CLOSING = {
  eyebrow: "CIERRE",
  title: "Una exhibición que vende, protege y decide con datos",
  items: [
    { number: "01", icon: "store", title: "Mejor experiencia de exhibición", body: "El cliente toca, prueba y decide sin fricción." },
    { number: "02", icon: "shield", title: "Menor exposición a merma", body: "En cada categoría de dispositivo, en cada punto de venta." },
    { number: "03", icon: "chart", title: "Mayor ticket e ingresos adicionales", body: "Venta cruzada y campañas dirigidas por tienda, hora o región." },
    { number: "04", icon: "grid", title: "Datos en tiempo real", body: "Para decidir con evidencia, no con intuición." },
  ],
  closing: "Un entorno integrado. Un socio que te acompaña en cada etapa.",
};
