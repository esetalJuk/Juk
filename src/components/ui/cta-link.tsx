"use client";

import Link, { type LinkProps } from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_CLASS: Record<Variant, string> = {
  // azul-corporativo (no azul-primario): texto blanco sobre azul-primario
  // no alcanza el contraste mínimo AA (4.08:1 vs. 4.5:1 requerido).
  primary: "bg-azul-corporativo text-white hover:bg-azul-boton",
  secondary:
    "border border-line-strong text-white hover:border-azul-primario hover:bg-white/5",
  ghost: "text-verde-acento hover:text-white",
};

type CtaLinkProps = LinkProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof LinkProps> & {
    variant?: Variant;
  };

export function CtaLink({
  variant = "secondary",
  className,
  children,
  ...rest
}: CtaLinkProps) {
  return (
    <Link
      className={`eyebrow inline-flex items-center justify-center gap-2 px-7 py-4 transition-colors ${VARIANT_CLASS[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
