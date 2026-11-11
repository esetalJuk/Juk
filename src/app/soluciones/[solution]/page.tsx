import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionTemplate } from "@/components/sections/solution-template";
import {
  SOLUTION_PAGES,
  buildSolutionJsonLd,
  type SolutionSlug,
} from "@/lib/solutions-content";

const siteUrl = "https://dasoksolutions.com";

export function generateStaticParams() {
  return SOLUTION_PAGES.map((page) => ({ solution: page.slug }));
}

function resolvePage(solution: string) {
  return SOLUTION_PAGES.find((page) => page.slug === (solution as SolutionSlug));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ solution: string }>;
}): Promise<Metadata> {
  const { solution } = await params;
  const page = resolvePage(solution);
  if (!page) return {};
  return {
    title: page.seoTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `/soluciones/${page.slug}`,
    },
  };
}

export default async function SolutionPageRoute({
  params,
}: {
  params: Promise<{ solution: string }>;
}) {
  const { solution } = await params;
  const page = resolvePage(solution);
  if (!page) notFound();

  const jsonLd = buildSolutionJsonLd(page, siteUrl);

  return (
    <>
      {jsonLd.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
      <SolutionTemplate page={page} />
    </>
  );
}
