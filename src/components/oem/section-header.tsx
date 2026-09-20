"use client";

import { Reveal } from "@/components/motion/reveal";
import { useSectionAccent } from "@/components/oem/section-accent-context";
import { ACCENT_BAR_CLASS } from "@/components/oem/section-zone";

export function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  const accent = useSectionAccent();

  return (
    <Reveal className="mb-10 max-w-2xl sm:mb-12">
      <span className={`block h-[3px] w-9 ${ACCENT_BAR_CLASS[accent]}`} />
      <p className="eyebrow mt-4 text-white">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl sm:text-4xl">{title}</h2>
      {intro && (
        <p className="mt-4 max-w-xl font-body text-sm normal-case tracking-normal text-ink-muted">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
