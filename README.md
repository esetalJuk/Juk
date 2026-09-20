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

## Pendiente antes de producción

- **Datos de contacto reales**: `CONTACT_INFO` en `src/lib/content.ts` usa un
  número de WhatsApp y correo de marcador de posición — reemplazar con los
  datos verificados del equipo comercial.
- **Integración del formulario**: `src/app/api/contact/route.ts` valida y
  registra la solicitud, pero no está conectado a un CRM o servicio de
  correo. Conectar antes de lanzar.
- **Dominio**: `siteUrl` en `src/app/layout.tsx`, `src/app/sitemap.ts` y
  `src/app/robots.ts` usa `https://www.dasoksolutions.com` como placeholder.
