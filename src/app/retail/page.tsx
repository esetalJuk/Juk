import type { Metadata } from "next";
import { PillarTemplate } from "@/components/sections/pillar-template";
import { getPillar } from "@/lib/content";

const pillar = getPillar("retail");

export const metadata: Metadata = {
  title: pillar.h1,
  description: pillar.metaDescription,
};

export default function RetailPage() {
  return <PillarTemplate pillar={pillar} />;
}
