import Link from "next/link";
import { Section } from "@/components/ui/section";

const LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/retail", label: "Retail" },
  { href: "/oem-electronica", label: "OEM Electrónica" },
  { href: "/contacto", label: "Contacto" },
];

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center pb-24 pt-32 sm:pt-40">
      <Section>
        <div className="max-w-xl">
          <p className="eyebrow text-verde-acento">Error 404</p>
          <h1 className="font-display text-balance mt-4 text-4xl sm:text-5xl">
            No encontramos esta página
          </h1>
          <p className="mt-5 font-body text-base normal-case tracking-normal text-ink-muted">
            El enlace que seguiste puede estar roto o la página se movió.
            Elige a dónde quieres ir:
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-line-strong px-5 py-3 text-sm text-white transition-colors hover:border-azul-primario hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
