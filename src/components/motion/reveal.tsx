"use client";

import { type ComponentPropsWithoutRef } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

type RevealProps = ComponentPropsWithoutRef<"div"> & {
  /** Stagger every direct [data-reveal-item] child instead of the wrapper. */
  group?: boolean;
  y?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

export function Reveal({
  group,
  y,
  duration,
  delay,
  stagger,
  once,
  className,
  children,
  ...rest
}: RevealProps) {
  const ref = useScrollReveal<HTMLDivElement>({
    y,
    duration,
    delay,
    stagger,
    once,
  });

  return (
    <div
      ref={ref}
      data-reveal-group={group ? "" : undefined}
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
}
