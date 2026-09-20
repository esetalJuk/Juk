import type { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/forms/contact-form";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda tu visita al showroom o habla con un asesor de Dások All Solutions para diagnosticar la operación de tu retail.",
};

export default function ContactoPage() {
  const whatsappHref = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
    CONTACT_INFO.whatsappMessage,
  )}`;

  return (
    <div className="pb-24 pt-32 sm:pt-40">
      <Section>
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-verde-acento">Contacto</p>
          <h1 className="font-display text-balance mt-4 text-4xl sm:text-6xl">
            Coordina tu visita o habla con un asesor
          </h1>
          <p className="mt-5 font-body text-base normal-case tracking-normal text-ink-muted">
            Un asesor de Dások All Solutions te contacta para entender tu
            operación y coordinar el siguiente paso: visita al showroom o una
            llamada de diagnóstico.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="space-y-8">
            <InfoBlock title="Showrooms">
              <p className="text-sm text-ink-muted">
                {CONTACT_INFO.showroomCdmx} y {CONTACT_INFO.showroomNorte}.
                Agenda tu visita y te compartimos la ubicación exacta y
                horarios disponibles.
              </p>
            </InfoBlock>

            <InfoBlock title="WhatsApp">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-verde-acento hover:text-white"
              >
                Escríbenos por WhatsApp →
              </a>
            </InfoBlock>

            <InfoBlock title="Correo">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-sm text-ink-muted hover:text-white"
              >
                {CONTACT_INFO.email}
              </a>
            </InfoBlock>

            <InfoBlock title="Redes">
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow border border-line px-3 py-2 text-ink-muted transition-colors hover:border-azul-primario hover:text-white"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </InfoBlock>
          </Reveal>

          <Reveal className="pleca border border-line-strong bg-tinta-raised p-8 sm:p-10">
            <ContactForm intent="asesor" />
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-line pb-6">
      <p className="eyebrow text-ink-faint">{title}</p>
      <div className="mt-3">{children}</div>
    </div>
  );
}
