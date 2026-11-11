import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/conocenos", destination: "/", permanent: true },
      { source: "/digital-signage-solutions", destination: "/centros-comerciales", permanent: true },
      { source: "/etiqueta-esl", destination: "/retail/supermercados", permanent: true },
      { source: "/cerraduras-electronicas/:path*", destination: "/retail", permanent: true },
      { source: "/soluciones-de-software", destination: "/retail", permanent: true },
      { source: "/soluciones-de-software/:path*", destination: "/retail", permanent: true },
      { source: "/proteccion-de-mercancias-en-estantes", destination: "/retail", permanent: true },
      { source: "/proteccion-de-mercancias-en-estantes/:path*", destination: "/retail", permanent: true },
      { source: "/electronicos-de-consumo", destination: "/oem-electronica", permanent: true },
      { source: "/tiendas-minoristas-de-electronica", destination: "/oem-electronica", permanent: true },
      { source: "/soportes-para-tabletas-de-negocio", destination: "/oem-electronica", permanent: true },
      { source: "/soporte-para-tabletas-en-mostrador/:path*", destination: "/oem-electronica", permanent: true },
      { source: "/soporte-para-mesa-integrada/:path*", destination: "/oem-electronica", permanent: true },
      { source: "/soporte-para-tableta-de-piso/:path*", destination: "/oem-electronica", permanent: true },
      { source: "/vizitech", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
