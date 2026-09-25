"use client";

import { Icon } from "@/components/icons/icon";
import { Reveal } from "@/components/motion/reveal";
import { useContactModal } from "@/components/layout/contact-modal";
import { OEM_RECURSOS } from "@/lib/oem-content";

/** Lead-gen teaser cards: each opens the contact form to request the guide. */
export function ResourceGrid() {
  const { openModal } = useContactModal();

  return (
    <Reveal
      group
      stagger={0.06}
      className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
    >
      {OEM_RECURSOS.items.map((item) => (
        <button
          key={item.title}
          type="button"
          onClick={() => openModal("asesor")}
          data-reveal-item
          className="group flex flex-col justify-between gap-8 bg-tinta-raised p-7 text-left transition-colors duration-300 hover:bg-tinta-card sm:p-8"
        >
          <div>
            <Icon
              name="tag"
              className="h-6 w-6 text-azul-primario transition-transform duration-300 group-hover:scale-110"
            />
            <h3 className="font-display mt-4 text-lg leading-tight">
              {item.title}
            </h3>
          </div>
          <span className="eyebrow inline-flex items-center gap-2 normal-case tracking-normal text-azul-primario">
            Solicitar guía
            <Icon
              name="arrowRight"
              className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </button>
      ))}
    </Reveal>
  );
}
