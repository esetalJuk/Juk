"use client";

import { useEffect, useState } from "react";
import { OEM_SOLUTION_LINES } from "@/lib/oem-content";

/**
 * Persistent left sidebar with every section always visible — no hover required.
 * Green is reserved for this "you are here" indicator only; it never appears as
 * decorative text elsewhere on the page.
 */
export function SideProgressNav() {
  const [active, setActive] = useState<string>(OEM_SOLUTION_LINES[0].slug);
  const [visible, setVisible] = useState(false);

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

  // Stays hidden through the hero; appears once scroll has carried "El
  // reto" up near the header — the first section that shares the
  // content column with this nav — and hides again as soon as the
  // "Cierre" section itself is reached (its own top crossing that
  // same header line) — the nav is gone before "Ver para decidir" ever
  // comes into view. Tracked on scroll rather than IntersectionObserver
  // since we need the exact pixel position, not just a visibility ratio.
  useEffect(() => {
    const reto = document.getElementById("reto");
    const cierre = document.getElementById("cierre");
    if (!reto || !cierre) return;

    const HEADER_OFFSET = 80;
    let ticking = false;

    const check = () => {
      const pastReto = reto.getBoundingClientRect().top <= HEADER_OFFSET;
      const pastCierreStart = cierre.getBoundingClientRect().top <= HEADER_OFFSET;
      setVisible(pastReto && !pastCierreStart);
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    check();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Navegación de secciones"
      className={`fixed left-6 top-1/2 z-30 hidden w-52 -translate-y-1/2 transition-all duration-500 xl:block ${
        visible
          ? "opacity-100"
          : "pointer-events-none -translate-x-4 opacity-0"
      }`}
    >
      <p className="eyebrow mb-4 pl-4 text-ink-faint">Secciones</p>
      <div className="flex flex-col gap-3">
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
              className={`flex items-start gap-2.5 border-l-2 py-2 pl-[13px] pr-2 transition-colors duration-300 ${
                isActive
                  ? "border-verde-acento text-verde-acento"
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
