# Dások All Solutions — Sitio web

Sitio corporativo de Dások All Solutions: catálogo de soluciones de seguridad
y control operativo para retail físico en México, organizado por pilar de
negocio (Retail, OEM/Electrónica, Farmacias, Centros comerciales) siguiendo
el racional de arquitectura de información y la guía de tono y voz 2026.

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4** — tokens de marca (`src/app/globals.css`, bloque `@theme`)
- **GSAP + ScrollTrigger** — microinteracciones y revelados al hacer scroll
- **Locomotive Scroll** (sobre Lenis) — scroll suave, sincronizado con GSAP
- **Three.js** — visual de red de nodos en el hero (decorativo, con fallback
  estático para `prefers-reduced-motion` y carga diferida vía `next/dynamic`)

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de producción
npm run lint      # ESLint
```

## Estructura de contenido

Toda la copy vive centralizada en `src/lib/content.ts` (pilares, dolores de
negocio, soluciones, diferenciadores) para mantener consistencia con la guía
de tono y voz: lenguaje ejecutivo, hook → desarrollo → CTA único, sin
"ecosistema" / "proveedor único", sin cifras no verificadas.

Rutas principales:

- `/` — Home
- `/retail` — Pilar Retail (vista general) + `/retail/[format]` para
  Supermercados, Tiendas departamentales, Autoservicio y Otros formatos
- `/oem-electronica`, `/farmacias`, `/centros-comerciales` — resto de pilares
- `/contacto` — formulario de contacto (además del modal global, disponible
  desde cualquier página vía el CTA "Agenda tu visita al showroom")

## Formulario de contacto

`src/app/api/contact/route.ts` envía cada solicitud (showroom / asesor) por
correo a `LEAD_NOTIFICATION_EMAIL` (`src/lib/content.ts`) usando
[Resend](https://resend.com). Requiere la variable de entorno
`RESEND_API_KEY` — ver `.env.example` para el detalle completo. Sin esa
variable configurada, la solicitud se valida y queda registrada en el log del
servidor, pero no se envía ningún correo.

Pasos para dar de alta el envío real:

1. Crear cuenta en [resend.com](https://resend.com) (tiene plan gratuito).
2. **API Keys → Create API Key** y copiar el valor.
3. Dar de alta `RESEND_API_KEY` en el hosting (en Vercel: Project Settings →
   Environment Variables) con ese valor.
4. Opcional pero recomendado: **Domains → Add Domain**, agregar
   `dasoksolutions.com` y los registros DNS que indique Resend. Una vez
   verificado, dar de alta también `RESEND_FROM_EMAIL` para que los correos
   salgan desde el dominio propio en vez del remitente de pruebas de Resend.

## Pendiente antes de producción

- **Dominio**: confirmar el hosting donde se va a publicar el sitio y
  apuntar `dasoksolutions.com` hacia él (ver instrucciones de despliegue).
- **Número de WhatsApp**: `CONTACT_INFO.whatsappNumber` en
  `src/lib/content.ts` usa un número de prueba — confirmar el número
  comercial definitivo antes de lanzar.
- **Analítica**: el sitio no tiene Google Analytics / GTM configurado.
- **Imagen Open Graph**: no hay una imagen de vista previa para cuando se
  comparta el link en redes/WhatsApp.
