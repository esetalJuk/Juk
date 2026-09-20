"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "@/components/icons/icon";
import { gsap } from "@/lib/gsap";
import { SectionZone, ACCENT_PANEL_BACKGROUND } from "@/components/oem/section-zone";

type Accent = keyof typeof ACCENT_PANEL_BACKGROUND;

export type ExplorerZone = {
  slug: string;
  number: string;
  label: string;
  icon: string;
  description: string;
  accent: Accent;
  content: ReactNode;
};

const ACCENT_TEXT: Record<Accent, string> = {
  "azul-primario": "text-azul-primario",
  "verde-acento": "text-verde-acento",
  "azul-corporativo": "text-azul-primario",
};

const ACCENT_BORDER: Record<Accent, string> = {
  "azul-primario": "border-azul-primario",
  "verde-acento": "border-verde-acento",
  "azul-corporativo": "border-azul-corporativo",
};

const ACCENT_BG_SOFT: Record<Accent, string> = {
  "azul-primario": "bg-azul-primario/10",
  "verde-acento": "bg-verde-acento/10",
  "azul-corporativo": "bg-azul-corporativo/25",
};

export function SectionExplorer({ zones }: { zones: ExplorerZone[] }) {
  const [active, setActive] = useState(zones[0].slug);
  const panelRef = useRef<HTMLDivElement>(null);
  const activeZone = zones.find((zone) => zone.slug === active) ?? zones[0];

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) {
      gsap.set(el, { x: 0, opacity: 1 });
      return;
    }
    gsap.fromTo(
      el,
      { x: -28, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" },
    );
  }, [active]);

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
      <nav
        aria-label="Líneas de solución"
        className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:sticky lg:top-24 lg:grid-cols-1 lg:w-72 lg:shrink-0 lg:gap-1.5"
      >
        {zones.map((zone) => {
          const isActive = zone.slug === active;
          return (
            <button
              key={zone.slug}
              type="button"
              onClick={() => setActive(zone.slug)}
              aria-current={isActive ? "true" : undefined}
              className={`group flex items-center gap-3 border-l-2 px-4 py-3 text-left transition-colors lg:px-4 ${
                isActive
                  ? `${ACCENT_BORDER[zone.accent]} ${ACCENT_BG_SOFT[zone.accent]}`
                  : "border-line bg-transparent hover:border-line-strong hover:bg-white/[0.03]"
              }`}
            >
              <Icon
                name={zone.icon}
                className={`h-5 w-5 shrink-0 transition-colors ${
                  isActive ? ACCENT_TEXT[zone.accent] : "text-ink-faint group-hover:text-white"
                }`}
              />
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span className={`font-mono text-[11px] ${isActive ? ACCENT_TEXT[zone.accent] : "text-ink-faint"}`}>
                    {zone.number}
                  </span>
                  <span className={`text-sm leading-snug ${isActive ? "text-white" : "text-ink-muted"}`}>
                    {zone.label}
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </nav>

      <div key={active} ref={panelRef} className="min-w-0 flex-1 overflow-hidden">
        <SectionZone accent={activeZone.accent}>{activeZone.content}</SectionZone>
      </div>
    </div>
  );
}
