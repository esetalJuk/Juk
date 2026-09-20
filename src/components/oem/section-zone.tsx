import type { ReactNode } from "react";

const ACCENT_BACKGROUND: Record<string, string> = {
  "azul-primario":
    "radial-gradient(ellipse 900px 500px at 10% 0%, rgba(0,128,223,0.12), transparent 60%)",
  "verde-acento":
    "radial-gradient(ellipse 900px 500px at 90% 0%, rgba(39,211,140,0.1), transparent 60%)",
  "azul-corporativo":
    "radial-gradient(ellipse 900px 500px at 10% 100%, rgba(0,75,142,0.18), transparent 60%)",
};

export function SectionZone({
  id,
  accent,
  children,
}: {
  id: string;
  accent: keyof typeof ACCENT_BACKGROUND;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className="scroll-mt-24 relative border-b border-line"
      style={{ backgroundImage: ACCENT_BACKGROUND[accent] }}
    >
      <div data-zone-content>{children}</div>
    </div>
  );
}
