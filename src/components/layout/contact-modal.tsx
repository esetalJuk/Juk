"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { PRIMARY_CTA_LABEL } from "@/lib/content";
import { ContactForm } from "@/components/forms/contact-form";

type ContactIntent = "showroom" | "asesor";

type ContactModalContextValue = {
  openModal: (intent?: ContactIntent) => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null,
);

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error(
      "useContactModal debe usarse dentro de ContactModalProvider",
    );
  }
  return ctx;
}

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<ContactIntent>("showroom");

  const openModal = useCallback((nextIntent: ContactIntent = "showroom") => {
    setIntent(nextIntent);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeModal]);

  const value = useMemo(() => ({ openModal }), [openModal]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
        >
          <button
            type="button"
            aria-label="Cerrar"
            className="modal-overlay absolute inset-0 bg-tinta/90 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="modal-panel pleca relative max-h-[90vh] w-full max-w-lg overflow-y-auto border border-line-strong bg-tinta-card py-8 pl-8 pr-6 shadow-[0_40px_120px_rgba(0,0,0,0.6)] sm:pl-10 sm:pr-8">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-5 top-5 text-lg text-ink-muted transition hover:text-white"
              aria-label="Cerrar formulario"
            >
              ✕
            </button>

            <p className="eyebrow text-verde-acento">
              {intent === "showroom" ? "Visita al showroom" : "Contacto comercial"}
            </p>
            <h2
              id="contact-modal-title"
              className="font-display mt-3 text-3xl sm:text-4xl"
            >
              {intent === "showroom" ? PRIMARY_CTA_LABEL : "Habla con un asesor"}
            </h2>
            <p className="mt-3 max-w-sm font-body text-sm normal-case tracking-normal text-ink-muted">
              Cuéntanos de tu operación. Un asesor de Dások te contacta para
              coordinar
              {intent === "showroom"
                ? " tu visita al showroom más cercano."
                : " los siguientes pasos."}
            </p>

            <ContactForm intent={intent} className="mt-8" />
          </div>
        </div>
      )}
    </ContactModalContext.Provider>
  );
}
