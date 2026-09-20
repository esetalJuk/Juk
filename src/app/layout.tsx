import type { Metadata } from "next";
import { Barlow, Barlow_Condensed, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/smooth-scroll-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ContactModalProvider } from "@/components/layout/contact-modal";
import { SOCIAL_LINKS } from "@/lib/content";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://www.dasoksolutions.com";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dások All Solutions",
  url: siteUrl,
  logo: `${siteUrl}/brand/dasok-logo.png`,
  description:
    "Convertimos espacios comerciales en entornos inteligentes, más seguros y rentables, con antenas EAS, etiquetas ESL, Digital Signage, inteligencia artificial con datos en tiempo real y cerraduras electrónicas.",
  sameAs: SOCIAL_LINKS.map((social) => social.href),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dások All Solutions | Entornos comerciales inteligentes",
    template: "%s | Dások All Solutions",
  },
  description:
    "Convertimos espacios comerciales en entornos inteligentes, más seguros y rentables. Antenas EAS, etiquetas ESL, Digital Signage, inteligencia artificial con datos en tiempo real y cerraduras electrónicas para retail en México.",
  keywords: [
    "reducir merma en retail",
    "antenas EAS",
    "etiquetas ESL",
    "seguridad electrónica retail México",
    "prevención de pérdidas",
    "Dások All Solutions",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Dások All Solutions",
    title: "Dások All Solutions | Entornos comerciales inteligentes",
    description:
      "Convertimos espacios comerciales en entornos inteligentes, más seguros y rentables.",
    url: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-MX"
      className={`${barlowCondensed.variable} ${barlow.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-tinta text-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ContactModalProvider>
          <SmoothScrollProvider>
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </SmoothScrollProvider>
          <WhatsAppButton />
        </ContactModalProvider>
      </body>
    </html>
  );
}
