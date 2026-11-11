import type { MetadataRoute } from "next";
import { PILLARS } from "@/lib/content";

const BASE_URL = "https://dasoksolutions.com";

// Fecha real de la última modificación de contenido de cada página, tomada
// del historial de git de los archivos que la componen (page.tsx + los
// datos/componentes que consume). Actualiza la fecha de una ruta cuando
// vuelvas a tocar su contenido — no uses `new Date()` aquí: eso pone la
// fecha del build, igual para todas las páginas, que es el bug que esto
// corrige.
const LAST_MODIFIED: Record<string, string> = {
  "": "2026-11-11",
  "/contacto": "2026-11-11",
  "/retail": "2026-11-11",
  "/retail/supermercados": "2026-11-11",
  "/retail/departamentales": "2026-11-11",
  "/retail/autoservicio": "2026-11-11",
  "/retail/otros-formatos": "2026-11-11",
  "/oem-electronica": "2026-11-11",
  "/farmacias": "2026-11-11",
  "/centros-comerciales": "2026-11-11",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/contacto"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_MODIFIED[path],
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.6,
  }));

  const pillarRoutes = PILLARS.map((pillar) => ({
    url: `${BASE_URL}/${pillar.slug}`,
    lastModified: LAST_MODIFIED[`/${pillar.slug}`],
    changeFrequency: "monthly" as const,
    priority: pillar.parent ? 0.7 : 0.9,
  }));

  return [...staticRoutes, ...pillarRoutes];
}
