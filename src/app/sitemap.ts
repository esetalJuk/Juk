import type { MetadataRoute } from "next";
import { PILLARS } from "@/lib/content";

const BASE_URL = "https://www.dasoksolutions.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/contacto"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.6,
  }));

  const pillarRoutes = PILLARS.map((pillar) => ({
    url: `${BASE_URL}/${pillar.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: pillar.parent ? 0.7 : 0.9,
  }));

  return [...staticRoutes, ...pillarRoutes];
}
