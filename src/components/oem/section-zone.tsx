import type { ReactNode } from "react";
import { SectionAccentProvider } from "@/components/oem/section-accent-context";

export const ACCENT_PANEL_BACKGROUND = {
  "azul-primario": "#0b1c2f",
  "verde-acento": "#07231b",
  "azul-corporativo": "#0c1730",
} as const;

export type SectionAccentKey = keyof typeof ACCENT_PANEL_BACKGROUND;

export const ACCENT_TEXT_CLASS: Record<string, string> = {
  "azul-primario": "text-azul-primario",
  "verde-acento": "text-verde-acento",
  "azul-corporativo": "text-azul-primario",
};

export const ACCENT_BAR_CLASS: Record<string, string> = {
  "azul-primario": "bg-azul-primario",
  "verde-acento": "bg-verde-acento",
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
      className="scroll-mt-20"
      style={{ backgroundColor: ACCENT_PANEL_BACKGROUND[accent] }}
    >
      <SectionAccentProvider accent={accent}>{children}</SectionAccentProvider>
    </div>
  );
}
