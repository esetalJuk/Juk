import { HomeHero } from "@/components/sections/home-hero";
import { IntroBlock } from "@/components/sections/intro-block";
import { SolutionsGrid } from "@/components/sections/solutions-grid";
import { PillarsGrid } from "@/components/sections/pillars-grid";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Differentiators } from "@/components/sections/differentiators";
import { Showrooms } from "@/components/sections/showrooms";
import { CtaBanner } from "@/components/sections/cta-banner";

export default function Home() {
  return (
    <>
      <HomeHero />
      <IntroBlock />
      <SolutionsGrid />
      <PillarsGrid />
      <HowItWorks />
      <Differentiators />
      <Showrooms />
      <CtaBanner
        title="Cada día que estas seis soluciones no están en tu piso de venta es un día más de merma, robo y decisiones sin datos."
        body="Agenda tu visita a nuestro showroom en CDMX o en el norte del país esta semana y compruébalo tú mismo."
      />
    </>
  );
}
