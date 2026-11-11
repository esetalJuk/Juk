"use client";

import { useState } from "react";
import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";
import type { FaqItem } from "@/lib/solutions-content";

export function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const answered = items.filter(
    (item): item is { question: string; answer: string } => item.answer !== null,
  );

  return (
    <div className="divide-y divide-line border-y border-line">
      {answered.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <Reveal key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-white"
            >
              <span className="font-display text-lg leading-tight sm:text-xl">
                {item.question}
              </span>
              <Icon
                name="arrowRight"
                className={`h-4 w-4 shrink-0 text-azul-primario transition-transform duration-300 ${
                  isOpen ? "rotate-90" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 font-body text-sm normal-case tracking-normal text-ink-muted">
                  {item.answer}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
