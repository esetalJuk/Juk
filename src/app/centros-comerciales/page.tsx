import type { Metadata } from "next";
import { PillarTemplate } from "@/components/sections/pillar-template";
import { getPillar } from "@/lib/content";
import { getSolutionPage } from "@/lib/solutions-content";

const pillar = getPillar("centros-comerciales");
const controlDeAcceso = getSolutionPage("control-de-acceso");

export const metadata: Metadata = {
  title: pillar.seoTitle,
  description: pillar.metaDescription,
  alternates: {
    canonical: "/centros-comerciales",
  },
};

export default function CentrosComercialesPage() {
  return (
    <PillarTemplate
      pillar={pillar}
      extraSolutionLinks={[
        {
          label: controlDeAcceso.navLabel,
          short: controlDeAcceso.cardShort,
          href: `/soluciones/${controlDeAcceso.slug}`,
        },
      ]}
    />
  );
}
