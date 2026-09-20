import { PillarHero } from "@/components/sections/pillar-hero";
import { PainPoints } from "@/components/sections/pain-points";
import { SolutionsApplicable } from "@/components/sections/solutions-applicable";
import { FormatBreakdown } from "@/components/sections/format-breakdown";
import { RelatedFormats } from "@/components/sections/related-formats";
import { CtaBanner } from "@/components/sections/cta-banner";
import type { Pillar } from "@/lib/content";

export function PillarTemplate({ pillar }: { pillar: Pillar }) {
  return (
    <>
      <PillarHero pillar={pillar} />
      <PainPoints points={pillar.painPoints} />
      <SolutionsApplicable slugs={pillar.solutions} />
      {pillar.slug === "retail" && <FormatBreakdown />}
      {pillar.parent === "retail" && <RelatedFormats current={pillar.slug} />}
      <CtaBanner />
    </>
  );
}
