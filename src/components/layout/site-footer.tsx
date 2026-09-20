import Link from "next/link";
import Image from "next/image";
import { PILLARS, SOCIAL_LINKS, CONTACT_INFO } from "@/lib/content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const topLevelPillars = PILLARS.filter((pillar) => !pillar.parent);

  return (
    <footer className="border-t border-line bg-tinta-raised">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="relative h-9 w-[150px]">
              <Image
                src="/brand/dasok-logo.png"
                alt="Dások All Solutions"
                fill
                className="object-contain object-left"
                sizes="150px"
              />
            </div>
            <p className="mt-5 max-w-xs text-sm text-ink-muted">
              Convertimos espacios comerciales en entornos inteligentes, más
              seguros y rentables. 25+ años de experiencia en retail físico en
              México.
            </p>
            <div className="mt-6 flex gap-4">
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
          </div>

          <FooterColumn title="Pilares de negocio">
            {topLevelPillars.map((pillar) => (
              <Link
                key={pillar.slug}
                href={`/${pillar.slug}`}
                className="block py-1.5 text-sm text-ink-muted transition-colors hover:text-white"
              >
                {pillar.navLabel}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Retail por formato">
            {PILLARS.filter((pillar) => pillar.parent === "retail").map(
              (format) => (
                <Link
                  key={format.slug}
                  href={`/${format.slug}`}
                  className="block py-1.5 text-sm text-ink-muted transition-colors hover:text-white"
                >
                  {format.navLabel}
                </Link>
              ),
            )}
          </FooterColumn>

          <FooterColumn title="Contacto">
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="block py-1.5 text-sm text-ink-muted transition-colors hover:text-white"
            >
              {CONTACT_INFO.email}
            </a>
            <p className="py-1.5 text-sm text-ink-muted">
              {CONTACT_INFO.showroomCdmx}
            </p>
            <p className="py-1.5 text-sm text-ink-muted">
              {CONTACT_INFO.showroomNorte}
            </p>
            <Link
              href="/contacto"
              className="mt-2 inline-block border border-line px-4 py-2 text-sm text-white transition-colors hover:border-azul-primario"
            >
              Ir a contacto
            </Link>
          </FooterColumn>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Dások All Solutions. Todos los derechos reservados.</p>
          <p>Entornos comerciales inteligentes, seguros y rentables.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="eyebrow text-ink-faint">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
}
