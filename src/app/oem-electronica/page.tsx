import type { Metadata } from "next";
import { PillarTemplate } from "@/components/sections/pillar-template";
import { getPillar } from "@/lib/content";

const pillar = getPillar("oem-electronica");

export const metadata: Metadata = {
  title: pillar.h1,
  description: pillar.metaDescription,
};

export default function OemElectronicaPage() {
  return <PillarTemplate pillar={pillar} />;
}
