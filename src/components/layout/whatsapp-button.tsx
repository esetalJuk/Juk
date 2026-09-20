"use client";

import { CONTACT_INFO } from "@/lib/content";
import { useMagnetic } from "@/hooks/use-magnetic";

export function WhatsAppButton() {
  const ref = useMagnetic<HTMLAnchorElement>(0.25);
  const href = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage,
  )}`;

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="animate-pulse-soft fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-verde-acento text-tinta shadow-[0_12px_32px_rgba(39,211,140,0.35)] transition-transform hover:scale-105 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.02c-.24.68-1.4 1.32-1.93 1.4-.52.08-1.06.11-3.39-.75-2.84-1.03-4.68-3.85-4.82-4.03-.14-.18-1.15-1.53-1.15-2.92s.72-2.06.98-2.35c.26-.28.56-.35.75-.35h.54c.17 0 .4-.06.62.48.24.58.8 1.99.87 2.14.07.14.12.31.02.5-.1.18-.15.3-.29.46-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.77 1.27 1.65 2.06 1.13 1.01 2.09 1.33 2.38 1.48.29.15.46.13.63-.06.17-.19.71-.82.9-1.11.19-.29.38-.24.63-.14.26.1 1.65.78 1.93.92.29.14.48.21.55.33.07.13.07.71-.17 1.39Z" />
    </svg>
  );
}
