"use client";

import Link, { type LinkProps } from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "bg-azul-primario text-white hover:bg-azul-corporativo",
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
