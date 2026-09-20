"use client";

import { useEffect, useState } from "react";
import { OEM_SOLUTION_LINES } from "@/lib/oem-content";
import { ACCENT_TEXT_CLASS } from "@/components/oem/section-zone";

const BORDER_ACTIVE_CLASS: Record<string, string> = {
  "azul-primario": "border-azul-primario",
  "verde-acento": "border-verde-acento",
  "azul-corporativo": "border-azul-primario",
};

/** Persistent left sidebar with every section always visible — no hover required. */
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
      className="fixed left-6 top-1/2 z-30 hidden w-52 -translate-y-1/2 xl:block"
    >
      <p className="eyebrow mb-3 pl-4 text-ink-faint">Secciones</p>
      <div className="flex flex-col gap-0.5">
        {OEM_SOLUTION_LINES.map((line) => {
          const isActive = active === line.slug;
          return (
            <a
              key={line.slug}
              href={`#${line.slug}`}
              onClick={(event) => {
                event.preventDefault();
                document
                  .getElementById(line.slug)
                  ?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              aria-current={isActive ? "true" : undefined}
              className={`flex items-start gap-2.5 border-l-2 py-1.5 pl-[13px] pr-2 transition-colors duration-300 ${
                isActive
                  ? `${BORDER_ACTIVE_CLASS[line.accent]} ${ACCENT_TEXT_CLASS[line.accent]}`
                  : "border-white/10 text-ink-muted hover:border-white/30 hover:text-white"
              }`}
            >
              <span className="font-mono text-[10px] leading-[1.4] opacity-70">
                {line.number}
              </span>
              <span className="eyebrow text-[11px] normal-case leading-[1.4] tracking-normal">
                {line.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
