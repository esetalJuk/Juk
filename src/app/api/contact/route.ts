import { NextResponse } from "next/server";
import { Resend } from "resend";
import { LEAD_NOTIFICATION_EMAIL } from "@/lib/content";

type ContactPayload = {
  nombre?: string;
  empresa?: string;
  puesto?: string;
  formato?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
  intent?: "showroom" | "asesor";
};

const INTENT_LABEL: Record<NonNullable<ContactPayload["intent"]>, string> = {
  showroom: "Agenda tu visita al showroom",
  asesor: "Habla con un asesor",
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildEmailHtml(body: ContactPayload) {
  const rows: [string, string | undefined][] = [
    ["Motivo", body.intent ? INTENT_LABEL[body.intent] : undefined],
    ["Nombre", body.nombre],
    ["Empresa", body.empresa],
    ["Puesto", body.puesto],
    ["Cadena / formato", body.formato],
    ["Correo", body.email],
    ["Teléfono", body.telefono],
    ["Mensaje", body.mensaje],
  ];

  const rowsHtml = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#64748b;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 0;">${escapeHtml(
          value!,
        )}</td></tr>`,
    )
    .join("");

  return `<table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;">${rowsHtml}</table>`;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body || !body.nombre || !body.empresa || !body.email) {
    return NextResponse.json(
      { ok: false, error: "invalid_payload" },
      { status: 400 },
    );
  }

  console.log("Nueva solicitud de contacto Dások:", body);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Sin RESEND_API_KEY configurada, la solicitud queda solo en el log del
    // servidor. Ver README para dar de alta la integración antes de lanzar.
    console.warn(
      "RESEND_API_KEY no está configurada: la solicitud no se envió por correo.",
    );
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const resend = new Resend(apiKey);
    const fromAddress =
      process.env.RESEND_FROM_EMAIL ?? "Dások All Solutions <onboarding@resend.dev>";

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: LEAD_NOTIFICATION_EMAIL,
      replyTo: body.email,
      subject: `Nueva solicitud — ${body.empresa} (${
        body.intent ? INTENT_LABEL[body.intent] : "contacto"
      })`,
      html: buildEmailHtml(body),
    });

    if (error) {
      console.error("Error enviando correo de contacto vía Resend:", error);
      return NextResponse.json({ ok: true, delivered: false });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (error) {
    console.error("Error enviando correo de contacto vía Resend:", error);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
