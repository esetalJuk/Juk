import { type ComponentPropsWithoutRef } from "react";

export function Section({
  className,
  children,
  ...rest
}: ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className={`mx-auto w-full max-w-[1440px] px-5 sm:px-8 ${className ?? ""}`}
      {...rest}
    >
      {children}
    </section>
  );
}
