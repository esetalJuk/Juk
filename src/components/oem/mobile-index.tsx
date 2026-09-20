"use client";

import { Icon } from "@/components/icons/icon";
import { OEM_SOLUTION_LINES } from "@/lib/oem-content";

export function MobileIndex() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-4 xl:hidden">
      {OEM_SOLUTION_LINES.map((line) => (
        <button
          key={line.slug}
          type="button"
          onClick={() =>
            document
              .getElementById(line.slug)
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="flex flex-col items-start gap-2 bg-tinta-raised p-4 text-left transition-colors hover:bg-tinta-card"
        >
          <Icon name={line.icon} className="h-5 w-5 text-verde-acento" />
          <span className="font-mono text-[10px] text-ink-faint">{line.number}</span>
          <span className="text-sm leading-tight text-white">{line.label}</span>
        </button>
      ))}
    </div>
  );
}
