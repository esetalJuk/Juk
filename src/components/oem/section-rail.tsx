"use client";

import { useEffect, useState } from "react";
import { OEM_SOLUTION_LINES } from "@/lib/oem-content";

export function SectionRail() {
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
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function goTo(slug: string) {
    document.getElementById(slug)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <nav
      aria-label="Navegación de secciones"
      className="sticky top-24 hidden h-fit w-56 shrink-0 self-start pb-16 lg:block"
    >
      <p className="eyebrow mb-4 text-ink-faint">El entorno</p>
      <ol>
        {OEM_SOLUTION_LINES.map((line) => {
          const isActive = active === line.slug;
          return (
            <li key={line.slug}>
              <button
                type="button"
                onClick={() => goTo(line.slug)}
                aria-current={isActive ? "true" : undefined}
                className={`group flex w-full items-start gap-3 border-l-2 py-2.5 pl-4 text-left transition-colors ${
                  isActive
                    ? "border-verde-acento text-white"
                    : "border-line text-ink-muted hover:border-line-strong hover:text-white"
                }`}
              >
                <span
                  className={`font-mono text-xs transition-colors ${
                    isActive ? "text-verde-acento" : "text-ink-faint group-hover:text-azul-primario"
                  }`}
                >
                  {line.number}
                </span>
                <span className="text-sm leading-snug">{line.label}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
