import type { ReactNode } from "react";

export const ACCENT_PANEL_BACKGROUND: Record<string, string> = {
  "azul-primario": "#0b1c2f",
  "verde-acento": "#07231b",
  "azul-corporativo": "#0c1730",
};

/** Solid, accent-tinted panel background for the active line in the explorer. */
export function SectionZone({
  accent,
  children,
}: {
  accent: keyof typeof ACCENT_PANEL_BACKGROUND;
  children: ReactNode;
}) {
  return (
    <div style={{ backgroundColor: ACCENT_PANEL_BACKGROUND[accent] }}>
      {children}
    </div>
  );
}
