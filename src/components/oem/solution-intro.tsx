"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useSectionAccent } from "@/components/oem/section-accent-context";
import { ACCENT_BAR_CLASS, ACCENT_TEXT_CLASS } from "@/components/oem/section-zone";

const TOTAL_SOLUTIONS = 7;

export function SolutionIntro({
  number,
  title,
  tagline,
  tags,
  body,
  image,
  imageCredit,
  fit = "cover",
  centered = false,
}: {
  number?: string;
  title: string;
  tagline?: string;
  tags?: string[];
  body: string;
  image?: string;
  imageCredit?: string;
  fit?: "cover" | "contain";
  /** Centers the text and gives the title more visual weight — only meaningful without an image. */
  centered?: boolean;
}) {
  const ref = useScrollReveal<HTMLDivElement>({ y: 24, once: true });
  const accent = useSectionAccent();

  return (
    <div ref={ref} className={`grid border-b border-line/60 ${image ? "lg:grid-cols-2" : ""}`}>
      <div
        className={`relative flex flex-col justify-center overflow-hidden px-6 py-16 sm:px-10 lg:py-24 ${centered ? "items-center text-center" : ""}`}
      >
        {number && (
          <span
            aria-hidden="true"
            className={`font-display pointer-events-none absolute -left-2 -top-6 select-none text-[9rem] leading-none opacity-[0.07] sm:-top-10 sm:text-[13rem] ${ACCENT_TEXT_CLASS[accent]}`}
          >
            {number}
          </span>
        )}
        <span
          className={`relative block h-[3px] w-12 ${centered ? "mx-auto" : ""} ${ACCENT_BAR_CLASS[accent]}`}
        />
        {number && (
          <p className="eyebrow relative mt-5 text-white">
            Solución {number} de {String(TOTAL_SOLUTIONS).padStart(2, "0")}
          </p>
        )}
        <h2
          className={`font-display text-balance relative mt-5 ${centered ? "text-4xl sm:text-5xl md:text-6xl" : "text-4xl sm:text-5xl"}`}
        >
          {title}
        </h2>
        {tagline && (
          <p
            className={`font-display relative mt-2 text-lg sm:text-xl ${ACCENT_TEXT_CLASS[accent]}`}
          >
            {tagline}
          </p>
        )}
        {tags && (
          <div className="relative mt-5 flex flex-wrap gap-2">
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
        <p
          className={`relative mt-6 font-body text-base normal-case tracking-normal text-ink-muted ${centered ? "mx-auto max-w-2xl" : image ? "max-w-md" : "max-w-xl"}`}
        >
          {body}
        </p>
      </div>
      {image && (
        <div
          className={`relative min-h-[280px] lg:min-h-0 ${fit === "contain" ? "bg-tinta-raised" : ""}`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className={fit === "contain" ? "object-contain p-8" : "object-cover"}
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
          {imageCredit && (
            <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-1 text-[10px] text-[#fff]/70">
              {imageCredit}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
