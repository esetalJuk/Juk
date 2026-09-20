import { Reveal } from "@/components/motion/reveal";

export function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-xl">
        <p className="eyebrow text-verde-acento">{eyebrow}</p>
        <h2 className="font-display mt-3 text-3xl sm:text-4xl">{title}</h2>
      </div>
      {intro && (
        <p className="max-w-sm font-body text-sm normal-case tracking-normal text-ink-muted">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
