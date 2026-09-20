"use client";

import { useEffect, useState } from "react";
import { OEM_SOLUTION_LINES } from "@/lib/oem-content";
import { ACCENT_TEXT_CLASS } from "@/components/oem/section-zone";

const DOT_COLOR_CLASS: Record<string, string> = {
  "azul-primario": "bg-azul-primario",
  "verde-acento": "bg-verde-acento",
  "azul-corporativo": "bg-azul-primario",
};

export function SideProgressNav() {
  const [active, setActive] = useState<string>(OEM_SOLUTION_LINES[0].slug);

  useEffect(() => {
    const elements = OEM_SOLUTION_LINES.map((line) =>
      document.getElementById(line.slug),
    ).filter((el): el is HTMLElement => Boolean(el));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Navegación de secciones"
      className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 xl:flex xl:flex-col xl:gap-5"
    >
      <div className="absolute left-[3px] top-1 bottom-1 w-px bg-white/10" aria-hidden="true" />
      {OEM_SOLUTION_LINES.map((line) => {
        const isActive = active === line.slug;
        return (
          <button
            key={line.slug}
            type="button"
            onClick={() =>
              document
                .getElementById(line.slug)
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            aria-current={isActive ? "true" : undefined}
            aria-label={line.label}
            className="group relative flex items-center gap-3 py-0.5"
          >
            <span
              className={`relative z-10 block h-[7px] w-[7px] rounded-full transition-all duration-300 ${
                isActive
                  ? `scale-[1.7] ${DOT_COLOR_CLASS[line.accent]}`
                  : "bg-white/25 group-hover:bg-white/60"
              }`}
            />
            <span
              className={`eyebrow whitespace-nowrap rounded-sm bg-tinta/90 px-2 py-1 normal-case tracking-normal opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 ${
                isActive ? ACCENT_TEXT_CLASS[line.accent] : "-translate-x-1 text-ink-muted"
              }`}
            >
              {line.number} · {line.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
