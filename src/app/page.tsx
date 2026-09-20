import { HomeHero } from "@/components/sections/home-hero";
import { PillarsGrid } from "@/components/sections/pillars-grid";
import { Differentiators } from "@/components/sections/differentiators";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { InsightBlock } from "@/components/sections/insight-block";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <HomeHero />
      <PillarsGrid />
      <Differentiators />
      <SolutionsGrid />
      <InsightBlock />
      <CtaBanner />
    </>
  );
}
