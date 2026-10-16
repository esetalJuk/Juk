"use client";

import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_CLASS: Record<Variant, string> = {
  // azul-corporativo (no azul-primario): texto blanco sobre azul-primario
  // no alcanza el contraste mínimo AA (4.08:1 vs. 4.5:1 requerido).
  primary: "bg-azul-corporativo text-white hover:bg-azul-boton",
  secondary:
    "border border-line-strong text-white hover:border-azul-primario hover:bg-white/5",
  ghost: "text-verde-acento hover:text-white",
};

type CtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function CtaButton({
  variant = "primary",
  className,
  children,
  ...rest
}: CtaButtonProps) {
  return (
    <button
      type="button"
      className={`eyebrow inline-flex items-center justify-center gap-2 px-7 py-4 transition-colors ${VARIANT_CLASS[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
