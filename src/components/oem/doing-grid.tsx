"use client";

import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";
import { OEM_LO_QUE_HACEMOS } from "@/lib/oem-content";
import { ACCENT_TEXT_CLASS } from "@/components/oem/section-zone";

/** Four value-proposition categories, each jumping to its first ficha. */
export function DoingGrid() {
  return (
    <Reveal
      group
      stagger={0.06}
      className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2"
    >
      {OEM_LO_QUE_HACEMOS.map((category) => (
        <a
          key={category.key}
          href={`#${category.targetSlug}`}
          onClick={(event) => {
            event.preventDefault();
            document
              .getElementById(category.targetSlug)
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          data-reveal-item
          className="group relative flex flex-col justify-between gap-8 bg-tinta-raised p-7 transition-colors duration-300 hover:bg-tinta-card sm:p-8"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="eyebrow text-ink-faint">{category.label}</span>
              <Icon
                name={category.icon}
                className={`h-6 w-6 transition-transform duration-300 group-hover:scale-110 ${ACCENT_TEXT_CLASS[category.accent]}`}
              />
            </div>
            <h3 className="font-display mt-4 text-xl leading-tight sm:text-2xl">
              {category.title}
            </h3>
            <p className="mt-3 font-body text-sm normal-case tracking-normal text-ink-muted">
              {category.body}
            </p>
          </div>
          <span
            className={`eyebrow inline-flex items-center gap-2 normal-case tracking-normal transition-colors ${ACCENT_TEXT_CLASS[category.accent]}`}
          >
            {category.linkLabel}
            <Icon
              name="arrowRight"
              className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </a>
      ))}
    </Reveal>
  );
}
