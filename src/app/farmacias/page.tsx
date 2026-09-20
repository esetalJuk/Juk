import type { Metadata } from "next";
import { PillarTemplate } from "@/components/sections/pillar-template";
import { getPillar } from "@/lib/content";

const pillar = getPillar("farmacias");

export const metadata: Metadata = {
  title: pillar.h1,
  description: pillar.metaDescription,
};

export default function FarmaciasPage() {
  return <PillarTemplate pillar={pillar} />;
}
