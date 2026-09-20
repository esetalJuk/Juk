"use client";

import { useState, type FormEvent } from "react";

type ContactIntent = "showroom" | "asesor";
type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm({
  intent,
  className,
}: {
  intent: ContactIntent;
  className?: string;
}) {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, intent }),
      });
      if (!response.ok) throw new Error("request_failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={`border border-verde-acento/40 bg-verde-acento/10 p-6 ${className ?? ""}`}>
        <p className="font-display text-xl text-verde-acento">
          Solicitud recibida
        </p>
        <p className="mt-2 text-sm text-ink-muted">
          Un asesor de Dások All Solutions te contactará en las próximas
          horas hábiles.
        </p>
      </div>
    );
  }

  return (
    <form className={`space-y-4 ${className ?? ""}`} onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" name="nombre" required />
        <Field label="Empresa" name="empresa" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Puesto" name="puesto" />
        <Field label="Cadena / formato" name="formato" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Correo" name="email" type="email" required />
        <Field label="Teléfono" name="telefono" type="tel" />
      </div>
      <Field label="Mensaje" name="mensaje" as="textarea" />

      {status === "error" && (
        <p className="text-sm text-red-400">
          No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por
          WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="eyebrow mt-2 w-full bg-azul-primario px-6 py-4 text-center text-white transition-colors hover:bg-azul-corporativo disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando…" : "Enviar solicitud"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  as = "input",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea";
}) {
  const baseClass =
    "mt-2 w-full border border-line bg-tinta px-4 py-3 text-sm text-white placeholder:text-ink-faint focus:border-azul-primario focus:outline-none";
  return (
    <label className="block">
      <span className="eyebrow text-ink-muted">
        {label}
        {required ? " *" : ""}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={3} className={baseClass} />
      ) : (
        <input name={name} type={type} required={required} className={baseClass} />
      )}
    </label>
  );
}
