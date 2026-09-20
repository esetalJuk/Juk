"use client";

import Image from "next/image";
import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";

type Feature = {
  icon: string;
  title: string;
  body: string;
  highlight?: boolean;
};

export function ImageFeatureSplit({
  image,
  alt,
  features,
  footnote,
}: {
  image: string;
  alt: string;
  features: Feature[];
  footnote?: string;
}) {
  return (
    <div>
      <div className="grid overflow-hidden border border-line bg-line gap-px lg:grid-cols-[0.9fr_1.6fr]">
        <Reveal className="relative min-h-[320px] bg-tinta-raised">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 35vw, 100vw"
          />
        </Reveal>
        <div className="grid gap-px bg-line sm:grid-cols-2">
          {features.map((feature) => (
            <Reveal
              key={feature.title}
              className={`group p-6 transition-colors ${
                feature.highlight
                  ? "bg-azul-corporativo hover:bg-azul-primario"
                  : "bg-tinta-raised hover:bg-tinta-card"
              }`}
            >
              <Icon
                name={feature.icon}
                className={`h-6 w-6 transition-transform duration-300 group-hover:scale-110 ${
                  feature.highlight ? "text-white" : "text-verde-acento"
                }`}
              />
              <h3 className="font-display mt-4 text-lg leading-tight">
                {feature.title}
              </h3>
              <p
                className={`mt-2 text-sm ${feature.highlight ? "text-white/85" : "text-ink-muted"}`}
              >
                {feature.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
      {footnote && (
        <p className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
          <Icon name="clock" className="h-4 w-4 text-azul-primario" />
          {footnote}
        </p>
      )}
    </div>
  );
}
