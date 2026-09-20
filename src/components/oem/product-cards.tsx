"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

type Product = {
  image: string;
  code?: string;
  title: string;
  body: string;
};

export function ProductCards({
  products,
  columns = 3,
}: {
  products: Product[];
  columns?: 2 | 3;
}) {
  return (
    <Reveal
      group
      stagger={0.08}
      className={`grid gap-px overflow-hidden border border-line bg-line ${
        columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
      }`}
    >
      {products.map((product) => (
        <div
          key={product.title}
          data-reveal-item
          className="group flex flex-col bg-tinta-raised transition-colors hover:bg-tinta-card"
        >
          <div className="relative aspect-[4/3] overflow-hidden bg-white">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div className="p-6">
            {product.code && (
              <p className="eyebrow text-azul-primario">{product.code}</p>
            )}
            <h3 className="font-display mt-2 text-xl leading-tight">
              {product.title}
            </h3>
            <p className="mt-3 text-sm text-ink-muted">{product.body}</p>
          </div>
        </div>
      ))}
    </Reveal>
  );
}
