"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PRIMARY_CTA_LABEL, getRetailFormats } from "@/lib/content";
import { useContactModal } from "@/components/layout/contact-modal";

const NAV_LINKS = [
  { href: "/retail", label: "Retail", withFormats: true },
  { href: "/oem-electronica", label: "OEM / Electrónica" },
  { href: "/farmacias", label: "Farmacias" },
  { href: "/centros-comerciales", label: "Centros comerciales" },
];

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function SiteHeader() {
  const scrolled = useScrolled();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useContactModal();
  const retailFormats = getRetailFormats();

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-tinta/90 backdrop-blur-md"
          : "border-b border-transparent bg-gradient-to-b from-tinta/80 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="relative z-10 block h-8 w-[132px] sm:h-9 sm:w-[148px]">
          <Image
            src="/brand/dasok-logo.png"
            alt="Dások All Solutions"
            fill
            priority
            className="object-contain object-left"
            sizes="150px"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavItem
              key={link.href}
              href={link.href}
              label={link.label}
              active={pathname.startsWith(link.href)}
              formats={link.withFormats ? retailFormats : undefined}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={() => openModal("showroom")}
            className="eyebrow border border-azul-primario bg-azul-primario/10 px-5 py-3 text-white transition-colors hover:bg-azul-primario"
          >
            {PRIMARY_CTA_LABEL}
          </button>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`h-[2px] w-6 bg-white transition-transform duration-300 ${mobileOpen ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-opacity duration-300 ${mobileOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-transform duration-300 ${mobileOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <MobileNav
        open={mobileOpen}
        pathname={pathname}
        retailFormats={retailFormats}
        onNavigate={() => setMobileOpen(false)}
        onCta={() => {
          setMobileOpen(false);
          openModal("showroom");
        }}
      />
    </header>
  );
}

function NavItem({
  href,
  label,
  active,
  formats,
}: {
  href: string;
  label: string;
  active: boolean;
  formats?: ReturnType<typeof getRetailFormats>;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={formats ? show : undefined}
      onMouseLeave={formats ? hide : undefined}
    >
      <Link
        href={href}
        className={`eyebrow flex items-center gap-1.5 px-4 py-3 transition-colors ${
          active ? "text-verde-acento" : "text-ink-muted hover:text-white"
        }`}
      >
        {label}
        {formats && (
          <svg
            viewBox="0 0 10 6"
            className={`h-1.5 w-2.5 fill-current transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path d="M0 0l5 6 5-6z" />
          </svg>
        )}
      </Link>

      {formats && (
        <div
          className={`absolute left-0 top-full w-64 border border-line bg-tinta-raised pt-1 shadow-[0_24px_60px_rgba(0,0,0,0.5)] transition-all duration-200 ${
            open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <Link
            href={href}
            className="block border-b border-line px-5 py-3 text-sm text-white hover:bg-white/5"
          >
            Ver todo Retail
          </Link>
          {formats.map((format) => (
            <Link
              key={format.slug}
              href={`/${format.slug}`}
              className="block px-5 py-3 text-sm text-ink-muted hover:bg-white/5 hover:text-white"
            >
              {format.navLabel}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNav({
  open,
  pathname,
  retailFormats,
  onNavigate,
  onCta,
}: {
  open: boolean;
  pathname: string;
  retailFormats: ReturnType<typeof getRetailFormats>;
  onNavigate: () => void;
  onCta: () => void;
}) {
  return (
    <div
      className={`fixed inset-0 top-0 z-0 flex flex-col bg-tinta pt-24 transition-opacity duration-300 lg:hidden ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <nav className="flex flex-1 flex-col overflow-y-auto px-6 pb-10">
        {NAV_LINKS.map((link) => (
          <div key={link.href} className="border-b border-line py-4">
            <Link
              href={link.href}
              onClick={onNavigate}
              className={`font-display text-2xl ${pathname.startsWith(link.href) ? "text-verde-acento" : "text-white"}`}
            >
              {link.label}
            </Link>
            {link.withFormats && (
              <div className="mt-3 flex flex-col gap-2 pl-3">
                {retailFormats.map((format) => (
                  <Link
                    key={format.slug}
                    href={`/${format.slug}`}
                    onClick={onNavigate}
                    className="text-sm text-ink-muted"
                  >
                    {format.navLabel}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={onCta}
          className="eyebrow mt-8 border border-azul-primario bg-azul-primario px-6 py-4 text-center text-white"
        >
          {PRIMARY_CTA_LABEL}
        </button>
      </nav>
    </div>
  );
}
