"use client";

import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";

type Feature = {
  icon: string;
  title: string;
  body: string;
  highlight?: boolean;
};

const COLUMN_CLASS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function FeatureGrid({
  features,
  columns = 2,
  variant,
}: {
  features: Feature[];
  columns?: 2 | 3 | 4;
  /** "blue": every card in the grid gets a blue background with green icon/title — overrides per-item highlight. */
  variant?: "blue";
}) {
  return (
    <Reveal
      group
      stagger={0.06}
      className={`grid gap-px overflow-hidden border border-line bg-line ${COLUMN_CLASS[columns]}`}
    >
      {features.map((feature) => (
        <div
          key={feature.title}
          data-reveal-item
          className={`group p-6 transition-colors ${
            variant === "blue"
              ? "bg-azul-corporativo hover:bg-azul-primario"
              : feature.highlight
                ? "bg-azul-corporativo hover:bg-azul-primario"
                : "bg-tinta-raised hover:bg-tinta-card"
          }`}
        >
          <Icon
            name={feature.icon}
            className={`h-6 w-6 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-0.5 ${
              variant === "blue"
                ? "text-verde-acento"
                : feature.highlight
                  ? "text-[#fff]"
                  : "text-azul-primario"
            }`}
          />
          <h3
            className={`font-display mt-4 text-lg leading-tight ${
              variant === "blue" ? "text-verde-acento" : feature.highlight ? "text-[#fff]" : ""
            }`}
          >
            {feature.title}
          </h3>
          <p
            className={`mt-2 text-sm ${
              variant === "blue" ? "text-[#fff]/85" : feature.highlight ? "text-[#fff]/85" : "text-ink-muted"
            }`}
          >
            {feature.body}
          </p>
        </div>
      ))}
    </Reveal>
  );
}
