"use client";

import dynamic from "next/dynamic";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const NetworkScene = dynamic(
  () => import("./network-scene").then((mod) => mod.NetworkScene),
  { ssr: false },
);

export function HeroScene() {
  const prefersReduced = usePrefersReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 28% 20%, rgba(0,128,223,0.24), transparent 55%), radial-gradient(ellipse at 78% 72%, rgba(39,211,140,0.14), transparent 50%)",
        }}
      />
      {!prefersReduced && <NetworkScene />}
    </div>
  );
}
