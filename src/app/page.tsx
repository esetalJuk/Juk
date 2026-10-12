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
      <HowItWorks />
      <SolutionsGrid />
      <PillarsGrid />
      <Differentiators />
      <Showrooms />
      <CtaBanner
        title="Tu piso de venta puede proteger, optimizar y vender más de lo que hoy hace. ¿Cuánto te está costando que no lo haga?"
        body="Agenda tu visita a nuestro showroom en CDMX o en el norte del país y compruébalo tú mismo."
        lightTitle
      />
    </>
  );
}
