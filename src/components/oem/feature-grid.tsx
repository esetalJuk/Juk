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
  /** "verde": every card in the grid gets the #070D14 background with green icon/title — overrides per-item highlight. */
  variant?: "verde";
}) {
  return (
    <Reveal
      group
      stagger={0.06}
      className={`grid gap-px overflow-hidden border border-line bg-line ${COLUMN_CLASS[columns]}`}
    >
      {features.map((feature) => (
        <div key={feature.title} data-reveal-item className="bg-tinta p-6">
          <Icon
            name={feature.icon}
            className={`h-6 w-6 ${
              variant === "verde" ? "text-verde-acento" : feature.highlight ? "text-[#fff]" : "text-azul-primario"
            }`}
          />
          <h3
            className={`font-display mt-4 text-lg leading-tight ${variant === "verde" ? "text-verde-acento" : ""}`}
          >
            {feature.title}
          </h3>
          <p className="mt-2 text-sm text-ink-muted">{feature.body}</p>
        </div>
      ))}
    </Reveal>
  );
}
