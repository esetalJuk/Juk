import { Icon } from "@/components/icons/icon";
import { Section } from "@/components/ui/section";
import { OEM_SOLUTION_LINES } from "@/lib/oem-content";

/** "Siguiente: NN · Label →" jump link, or back-to-index on the last section. */
export function SectionNextLink({ afterSlug }: { afterSlug: string }) {
  const index = OEM_SOLUTION_LINES.findIndex((line) => line.slug === afterSlug);
  const next = OEM_SOLUTION_LINES[index + 1];

  return (
    <Section className="border-t border-white/10 py-10">
      <a
        href={next ? `#${next.slug}` : "#entorno"}
        className="group inline-flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-white"
      >
        <span className="eyebrow normal-case tracking-normal">
          {next ? `Siguiente: ${next.number} · ${next.label}` : "Volver al índice"}
        </span>
        <Icon
          name="arrowRight"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>
    </Section>
  );
}
