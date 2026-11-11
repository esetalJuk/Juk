import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Reglas específicas de /soluciones-de-software/* — deben ir antes de
      // la regla general con :path* más abajo, porque Next.js usa la primera
      // que haga match.
      {
        source: "/soluciones-de-software/18-Cerraduras-Electronicas",
        destination: "/soluciones/cerraduras-electronicas",
        permanent: true,
      },
      {
        source: "/soluciones-de-software/16-BricTECH",
        destination: "/soluciones",
        permanent: true,
      },

      { source: "/conocenos", destination: "/", permanent: true },
      { source: "/conocenos.php", destination: "/", permanent: true },
      { source: "/digital-signage-solutions", destination: "/soluciones/digital-signage", permanent: true },
      { source: "/etiqueta-esl", destination: "/soluciones/etiquetas-esl", permanent: true },
      { source: "/cerraduras-electronicas/:path*", destination: "/soluciones/cerraduras-electronicas", permanent: true },
      { source: "/soluciones-de-software", destination: "/soluciones", permanent: true },
      { source: "/soluciones-de-software/:path*", destination: "/soluciones", permanent: true },
      { source: "/proteccion-de-mercancias-en-estantes", destination: "/soluciones/display-exhibicion-segura", permanent: true },
      { source: "/proteccion-de-mercancias-en-estantes/:path*", destination: "/soluciones/display-exhibicion-segura", permanent: true },
      { source: "/electronicos-de-consumo", destination: "/oem-electronica", permanent: true },
      { source: "/electronicos-de-consumo/:path*", destination: "/oem-electronica", permanent: true },
      { source: "/tiendas-minoristas-de-electronica", destination: "/oem-electronica", permanent: true },
      { source: "/tiendas-minoristas-de-electronica.php", destination: "/oem-electronica", permanent: true },
      { source: "/soportes-para-tabletas-de-negocio", destination: "/soluciones/display-exhibicion-segura", permanent: true },
      { source: "/soportes-para-tabletas-de-negocio/:path*", destination: "/soluciones/display-exhibicion-segura", permanent: true },
      { source: "/soporte-para-tabletas-en-mostrador/:path*", destination: "/soluciones/display-exhibicion-segura", permanent: true },
      { source: "/soporte-para-mesa-integrada/:path*", destination: "/soluciones/display-exhibicion-segura", permanent: true },
      { source: "/soporte-para-tableta-de-piso/:path*", destination: "/soluciones/display-exhibicion-segura", permanent: true },
      { source: "/inteligencia-artificial", destination: "/retail", permanent: true },
      { source: "/vizitech", destination: "/soluciones", permanent: true },
      { source: "/index", destination: "/", permanent: true },

      // Segunda ronda de limpieza (inventario Wayback/Search Console).
      { source: "/tiendas-departamentales", destination: "/retail/departamentales", permanent: true },
      { source: "/tiendas-departamentales.php", destination: "/retail/departamentales", permanent: true },
      { source: "/tiendas_autoservicio-y-farmacias", destination: "/retail/autoservicio", permanent: true },
      { source: "/tiendas_autoservicio-y-farmacias.php", destination: "/retail/autoservicio", permanent: true },
      { source: "/contacto.php", destination: "/contacto", permanent: true },
    ];
  },
};

export default nextConfig;
