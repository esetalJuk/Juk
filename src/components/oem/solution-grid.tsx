"use client";

import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";
import { OEM_SOLUTION_LINES } from "@/lib/oem-content";
import { ACCENT_TEXT_CLASS } from "@/components/oem/section-zone";

/** Premium card grid: one card per solution line, linking to its full ficha below. */
export function SolutionGrid() {
  return (
    <Reveal
      group
      stagger={0.06}
      className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
    >
      {OEM_SOLUTION_LINES.map((line) => (
        <a
          key={line.slug}
          href={`#${line.slug}`}
          onClick={(event) => {
            event.preventDefault();
            document
              .getElementById(line.slug)
              ?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          data-reveal-item
          className="group relative flex flex-col justify-between gap-8 bg-tinta-raised p-7 transition-colors duration-300 hover:bg-tinta-card sm:p-8"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-ink-faint">{line.number}</span>
              <Icon
                name={line.icon}
                className={`h-6 w-6 transition-transform duration-300 group-hover:scale-110 ${ACCENT_TEXT_CLASS[line.accent]}`}
              />
            </div>
            <p className="eyebrow mt-6 text-ink-faint">{line.kicker}</p>
            <h3 className="font-display mt-2 text-xl leading-tight sm:text-2xl">
              {line.label}
            </h3>
            <p className="mt-3 font-body text-sm normal-case tracking-normal text-ink-muted">
              {line.description}
            </p>
          </div>
          <span
            className={`eyebrow inline-flex items-center gap-2 normal-case tracking-normal transition-colors ${ACCENT_TEXT_CLASS[line.accent]}`}
          >
            Ver ficha
            <Icon
              name="arrowRight"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </a>
      ))}
    </Reveal>
  );
}
