import type { ReactNode } from "react";

export const ACCENT_PANEL_BACKGROUND: Record<string, string> = {
  "azul-primario": "#0b1c2f",
  "verde-acento": "#07231b",
  "azul-corporativo": "#0c1730",
};

export const ACCENT_TEXT_CLASS: Record<string, string> = {
  "azul-primario": "text-azul-primario",
  "verde-acento": "text-verde-acento",
  "azul-corporativo": "text-azul-primario",
};

/** Full-bleed, solid accent-tinted chapter wrapper for one solution line. */
export function SectionZone({
  id,
  accent,
  children,
}: {
  id: string;
  accent: keyof typeof ACCENT_PANEL_BACKGROUND;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className="scroll-mt-20"
      style={{ backgroundColor: ACCENT_PANEL_BACKGROUND[accent] }}
    >
      {children}
    </div>
  );
}
