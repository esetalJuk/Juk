// Medición del sitio: Google Analytics 4 y etiqueta de LinkedIn (Insight Tag).
// Los IDs son públicos por diseño (viajan en el HTML de cada página).

export const GA_MEASUREMENT_ID = "G-BSXH7T1EKX";

// ID de socio de LinkedIn (Campaign Manager → Insight Tag).
// Mientras esté vacío, la etiqueta de LinkedIn no se carga.
export const LINKEDIN_PARTNER_ID = "";

const ATTRIBUTION_KEY = "dasok_atribucion";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export type Attribution = Partial<Record<(typeof UTM_KEYS)[number], string>> & {
  pagina_entrada?: string;
  referencia?: string;
};

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Envía un evento a Google Analytics si la etiqueta ya cargó. */
export function trackEvent(name: string, params: GtagParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}

function readStored(): Attribution | null {
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

/**
 * Guarda el origen de la visita (UTM, página de entrada y sitio de referencia)
 * la primera vez que llega en la sesión. Si la visita trae UTM nuevas, estas
 * reemplazan a las anteriores: el último clic en una campaña es el que cuenta.
 */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const utm: Attribution = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) utm[key] = value.slice(0, 120);
  }
  const hasUtm = Object.keys(utm).length > 0;
  const stored = readStored();
  if (stored && !hasUtm) return;

  const attribution: Attribution = {
    ...utm,
    pagina_entrada: window.location.pathname.slice(0, 200),
  };
  if (document.referrer) {
    try {
      const ref = new URL(document.referrer);
      if (ref.hostname !== window.location.hostname) {
        attribution.referencia = ref.hostname.slice(0, 120);
      }
    } catch {
      // Referencia ilegible: se omite.
    }
  }
  try {
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
  } catch {
    // Almacenamiento bloqueado: el formulario se envía sin origen.
  }
}

/** Devuelve el origen guardado de la visita, para adjuntarlo a un lead. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  return readStored() ?? {};
}
