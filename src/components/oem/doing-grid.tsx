"use client";

import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";
import { OEM_LO_QUE_HACEMOS } from "@/lib/oem-content";

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
          className="group relative flex flex-col justify-between gap-8 bg-[#070d14] p-7 transition-colors duration-300 hover:bg-[#0d1622] sm:p-8"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="eyebrow text-[#fff]/45">{category.label}</span>
              <Icon
                name={category.icon}
                className="h-6 w-6 text-verde-acento transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h3 className="font-display mt-4 text-xl leading-tight text-verde-acento sm:text-2xl">
              {category.title}
            </h3>
            <p className="mt-3 font-body text-sm normal-case tracking-normal text-[#fff]/70">
              {category.body}
            </p>
          </div>
          <span className="eyebrow inline-flex items-center gap-2 normal-case tracking-normal text-verde-acento transition-colors">
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
