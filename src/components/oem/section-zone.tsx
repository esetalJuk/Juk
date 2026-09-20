import type { ReactNode } from "react";
import { SectionAccentProvider } from "@/components/oem/section-accent-context";

/**
 * The "verde-acento" key is the third chapter variant used for visual
 * variety across zones. Green is reserved for the side-nav's "you are
 * here" indicator only, so this variant renders as a white/light panel
 * with a blue accent rather than a green-tinted dark panel.
 */
export const ACCENT_PANEL_BACKGROUND = {
  "azul-primario": "#0b1c2f",
  "verde-acento": "#ffffff",
  "azul-corporativo": "#0c1730",
} as const;

export type SectionAccentKey = keyof typeof ACCENT_PANEL_BACKGROUND;

const LIGHT_ACCENT: SectionAccentKey = "verde-acento";

export const ACCENT_TEXT_CLASS: Record<string, string> = {
  "azul-primario": "text-azul-primario",
  "verde-acento": "text-azul-primario",
  "azul-corporativo": "text-azul-primario",
};

export const ACCENT_BAR_CLASS: Record<string, string> = {
  "azul-primario": "bg-azul-primario",
  "verde-acento": "bg-azul-primario",
  "azul-corporativo": "bg-azul-primario",
};

/** Full-bleed, solid accent-tinted chapter wrapper for one solution line. */
export function SectionZone({
  id,
  accent,
  children,
}: {
  id: string;
  accent: SectionAccentKey;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className={`scroll-mt-20 ${accent === LIGHT_ACCENT ? "zone-light" : ""}`}
      style={{ backgroundColor: ACCENT_PANEL_BACKGROUND[accent] }}
    >
      <SectionAccentProvider accent={accent}>{children}</SectionAccentProvider>
    </div>
  );
}
