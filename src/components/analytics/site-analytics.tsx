"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  GA_MEASUREMENT_ID,
  LINKEDIN_PARTNER_ID,
  captureAttribution,
  trackEvent,
} from "@/lib/analytics";

/**
 * Carga Google Analytics 4 (y la etiqueta de LinkedIn cuando exista su ID)
 * en todas las páginas, guarda el origen de la visita y mide los clics en
 * WhatsApp, correo y teléfono sin tocar cada botón.
 */
export function SiteAnalytics() {
  useEffect(() => {
    captureAttribution();

    const onClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const page = window.location.pathname;
      if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(href)) {
        trackEvent("clic_whatsapp", { pagina: page });
      } else if (href.startsWith("mailto:")) {
        trackEvent("clic_correo", { pagina: page });
      } else if (href.startsWith("tel:")) {
        trackEvent("clic_telefono", { pagina: page });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
      {LINKEDIN_PARTNER_ID && (
        <Script id="linkedin-insight" strategy="lazyOnload">
          {`window._linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
(function(l) {
  if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
  window.lintrk.q=[]}
  var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);
})(window.lintrk);`}
        </Script>
      )}
    </>
  );
}
