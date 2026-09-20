"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function SolutionIntro({
  id,
  eyebrow,
  title,
  tags,
  body,
  image,
  imageCredit,
  fit = "cover",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  tags?: string[];
  body: string;
  image: string;
  imageCredit?: string;
  fit?: "cover" | "contain";
}) {
  const ref = useScrollReveal<HTMLDivElement>({ y: 24, once: true });

  return (
    <div
      id={id}
      ref={ref}
      className="scroll-mt-24 grid border-y border-line lg:grid-cols-2"
    >
      <div className="flex flex-col justify-center px-6 py-16 sm:px-10 lg:py-24">
        <p className="eyebrow text-verde-acento">{eyebrow}</p>
        <h2 className="font-display text-balance mt-5 text-4xl sm:text-5xl">
          {title}
        </h2>
        {tags && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="eyebrow cursor-default border border-line-strong px-3 py-1.5 text-xs normal-case tracking-normal text-ink-muted transition-colors hover:border-azul-primario hover:text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="mt-6 max-w-md font-body text-base normal-case tracking-normal text-ink-muted">
          {body}
        </p>
      </div>
      <div
        className={`relative min-h-[280px] lg:min-h-0 ${fit === "contain" ? "bg-tinta-raised" : ""}`}
      >
        <Image
          src={image}
          alt={title}
          fill
          className={fit === "contain" ? "object-contain p-8" : "object-cover"}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        {imageCredit && (
          <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-1 text-[10px] text-white/70">
            {imageCredit}
          </span>
        )}
      </div>
    </div>
  );
}
