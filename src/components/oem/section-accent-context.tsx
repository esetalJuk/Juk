"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { SectionAccentKey } from "@/components/oem/section-zone";

const SectionAccentContext = createContext<SectionAccentKey>("azul-primario");

export function SectionAccentProvider({
  accent,
  children,
}: {
  accent: SectionAccentKey;
  children: ReactNode;
}) {
  return (
    <SectionAccentContext.Provider value={accent}>
      {children}
    </SectionAccentContext.Provider>
  );
}

export function useSectionAccent() {
  return useContext(SectionAccentContext);
}
