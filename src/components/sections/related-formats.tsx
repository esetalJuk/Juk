import Link from "next/link";
import { Section } from "@/components/ui/section";
import { getRetailFormats, type PillarSlug } from "@/lib/content";

export function RelatedFormats({ current }: { current: PillarSlug }) {
  const siblings = getRetailFormats().filter(
    (format) => format.slug !== current,
  );

  return (
    <Section className="py-16 sm:py-20">
      <p className="eyebrow text-ink-faint">Otros formatos de retail</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/retail"
          className="border border-line px-5 py-3 text-sm text-ink-muted transition-colors hover:border-azul-primario hover:text-white"
        >
          Retail (vista general)
        </Link>
        {siblings.map((format) => (
          <Link
            key={format.slug}
            href={`/${format.slug}`}
            className="border border-line px-5 py-3 text-sm text-ink-muted transition-colors hover:border-azul-primario hover:text-white"
          >
            {format.navLabel}
          </Link>
        ))}
      </div>
    </Section>
  );
}
