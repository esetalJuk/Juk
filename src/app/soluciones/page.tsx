import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { SOLUTION_PAGES, SOLUTIONS_INDEX } from "@/lib/solutions-content";

export const metadata: Metadata = {
  title: SOLUTIONS_INDEX.seoTitle,
  description: SOLUTIONS_INDEX.metaDescription,
  alternates: {
    canonical: "/soluciones",
  },
};

export default function SolucionesIndexPage() {
  return (
    <>
      <div className="relative overflow-hidden border-b border-line pb-16 pt-32 sm:pb-20 sm:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 0%, rgba(0,128,223,0.18), transparent 55%)",
          }}
        />
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8">
          <p className="eyebrow text-verde-acento">SOLUCIONES</p>
          <h1 className="font-display text-balance mt-6 max-w-3xl text-4xl sm:text-6xl lg:text-7xl">
            {SOLUTIONS_INDEX.h1}
          </h1>
          <p className="mt-6 max-w-2xl font-body text-lg normal-case tracking-normal text-ink-muted">
            {SOLUTIONS_INDEX.intro}
          </p>
        </div>
      </div>

      <Section className="py-14 sm:py-20">
        <Reveal
          group
          stagger={0.08}
          className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTION_PAGES.map((page, index) => (
            <Link
              key={page.slug}
              href={`/soluciones/${page.slug}`}
              data-reveal-item
              className="group flex flex-col justify-between bg-tinta-raised p-6 transition-colors hover:bg-tinta-card"
            >
              <span className="font-mono text-xs text-ink-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mt-6">
                <h2 className="font-display text-xl leading-tight">
                  {page.navLabel}
                </h2>
                <p className="mt-3 text-sm text-ink-muted">{page.cardShort}</p>
                <span className="eyebrow mt-4 inline-block text-azul-primario">
                  Conoce más →
                </span>
              </div>
            </Link>
          ))}
        </Reveal>
      </Section>

      <CtaBanner />
    </>
  );
}
