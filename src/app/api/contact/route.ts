import { NextResponse } from "next/server";

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

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!body || !body.nombre || !body.empresa || !body.email) {
    return NextResponse.json(
      { ok: false, error: "invalid_payload" },
      { status: 400 },
    );
  }

  // Integración pendiente con CRM / correo comercial del equipo de Dások.
  console.log("Nueva solicitud de contacto Dások:", body);

  return NextResponse.json({ ok: true });
}
