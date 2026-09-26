"use client";

import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";

/** Marks one of the two governing categories (Electrónicas / Mecánicas) inside a solution chapter. */
export function CategoryHeader({
  icon,
  label,
  title,
  body,
}: {
  icon: string;
  label: string;
  title: string;
  body: string;
}) {
  return (
    <Reveal className="mb-10 max-w-2xl sm:mb-12">
      <div className="flex items-center gap-2">
        <Icon name={icon} className="h-5 w-5 text-verde-acento" />
        <span className="eyebrow text-verde-acento">{label}</span>
      </div>
      <h3 className="font-display mt-3 text-2xl leading-tight sm:text-3xl">
        {title}
      </h3>
      <p className="mt-3 max-w-xl font-body text-sm normal-case tracking-normal text-ink-muted">
        {body}
      </p>
    </Reveal>
  );
}
