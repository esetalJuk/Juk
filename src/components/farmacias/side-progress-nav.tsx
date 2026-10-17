"use client";

import { useEffect, useState } from "react";
import {
  FARMACIAS_ZONAS,
  FARMACIAS_GRUPOS,
  type FarmaciasGroupKey,
} from "@/lib/farmacias-content";

const GROUP_ORDER: FarmaciasGroupKey[] = ["exhibicion", "seguridad"];

/**
 * Persistent left sidebar with every solution always visible, grouped under
 * Exhibición / Seguridad — no hover required. Mirrors the OEM/Electrónica
 * side nav pattern for visual consistency.
 */
export function SideProgressNav() {
  const [active, setActive] = useState<string>(FARMACIAS_ZONAS[0].slug);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const elements = FARMACIAS_ZONAS.map((zone) =>
      document.getElementById(zone.slug),
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

  useEffect(() => {
    const start = document.getElementById(FARMACIAS_GRUPOS.exhibicion.slug);
    const cierre = document.getElementById("cierre");
    if (!start || !cierre) return;

    const HEADER_OFFSET = 80;
    const CIERRE_HIDE_RATIO = 0.55;
    let ticking = false;

    const check = () => {
      const pastStart = start.getBoundingClientRect().top <= HEADER_OFFSET;
      const pastCierreStart =
        cierre.getBoundingClientRect().top <= window.innerHeight * CIERRE_HIDE_RATIO;
      setVisible(pastStart && !pastCierreStart);
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
      aria-label="Navegación de soluciones"
      className={`fixed left-6 top-1/2 z-30 hidden max-h-[85vh] w-56 -translate-y-1/2 overflow-y-auto transition-all duration-500 xl:block ${
        visible
          ? "opacity-100"
          : "pointer-events-none -translate-x-4 opacity-0"
      }`}
    >
      {GROUP_ORDER.map((groupKey) => (
        <div key={groupKey} className="mb-6 last:mb-0">
          <p className="eyebrow mb-3 pl-4 text-ink-faint">
            {FARMACIAS_GRUPOS[groupKey].label}
          </p>
          <div className="flex flex-col gap-2.5">
            {FARMACIAS_ZONAS.filter((zone) => zone.group === groupKey).map(
              (zone) => {
                const isActive = active === zone.slug;
                return (
                  <a
                    key={zone.slug}
                    href={`#${zone.slug}`}
                    onClick={(event) => {
                      event.preventDefault();
                      document
                        .getElementById(zone.slug)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex items-start gap-2.5 border-l-2 py-1.5 pl-[13px] pr-2 transition-colors duration-300 ${
                      isActive
                        ? "border-verde-acento text-verde-acento"
                        : "border-white/10 text-ink-muted hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span className="font-mono text-[10px] leading-[1.4] opacity-70">
                      {zone.number}
                    </span>
                    <span className="eyebrow text-[11px] normal-case leading-[1.4] tracking-normal">
                      {zone.navLabel}
                    </span>
                  </a>
                );
              },
            )}
          </div>
        </div>
      ))}
    </nav>
  );
}
