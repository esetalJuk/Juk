import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PillarTemplate } from "@/components/sections/pillar-template";
import { getRetailFormats, type PillarSlug } from "@/lib/content";

export function generateStaticParams() {
  return getRetailFormats().map((pillar) => ({
    format: pillar.slug.split("/")[1],
  }));
}

function resolvePillar(format: string) {
  const slug = `retail/${format}` as PillarSlug;
  return getRetailFormats().find((pillar) => pillar.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ format: string }>;
}): Promise<Metadata> {
  const { format } = await params;
  const pillar = resolvePillar(format);
  if (!pillar) return {};
  return {
    title: pillar.h1,
    description: pillar.metaDescription,
  };
}

export default async function RetailFormatPage({
  params,
}: {
  params: Promise<{ format: string }>;
}) {
  const { format } = await params;
  const pillar = resolvePillar(format);
  if (!pillar) notFound();
  return <PillarTemplate pillar={pillar} />;
}
