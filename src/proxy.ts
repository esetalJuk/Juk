import { NextResponse } from "next/server";

const GONE_HTML = `<!doctype html>
<html lang="es-MX">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Contenido descontinuado | Dások</title>
<meta name="robots" content="noindex" />
<style>
  body { margin:0; background:#070d14; color:#fff; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif; }
  .wrap { max-width:640px; margin:0 auto; padding:160px 24px 96px; }
  .eyebrow { color:#27d38c; font-size:13px; letter-spacing:2px; text-transform:uppercase; }
  h1 { font-size:2.25rem; line-height:1.2; margin:16px 0; }
  p { color:rgba(255,255,255,0.7); font-size:1rem; line-height:1.6; }
  .links { display:flex; flex-wrap:wrap; gap:12px; margin-top:32px; }
  a { color:#fff; text-decoration:none; border:1px solid rgba(255,255,255,0.3); padding:12px 20px; font-size:14px; }
  a:hover { border-color:#0080df; background:rgba(255,255,255,0.05); }
</style>
</head>
<body>
  <div class="wrap">
    <p class="eyebrow">Contenido eliminado</p>
    <h1>Este contenido ya no está disponible</h1>
    <p>Se eliminó a propósito: el producto o la sección que buscabas ya no forma parte de nuestro catálogo. Elige a dónde quieres ir:</p>
    <div class="links">
      <a href="/">Inicio</a>
      <a href="/retail">Retail</a>
      <a href="/oem-electronica">OEM Electrónica</a>
      <a href="/contacto">Contacto</a>
    </div>
  </div>
</body>
</html>`;

export default function proxy() {
  return new NextResponse(GONE_HTML, {
    status: 410,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export const config = {
  matcher: [
    "/kioscos-interactivos",
    "/kioscos-interactivos/:path*",
    "/soporte-tabletas-de-negocio",
    "/soporte-tabletas-de-negocio/:path*",
    "/soporte-para-tableta-de-pared/:path*",
    "/mercancias-en-estantes",
    "/mercancias-en-estantes/:path*",
    "/hogar-ferreteria",
    "/hogar-ferreteria.php",
    "/aviso-de-privacidad.php",
    "/feed",
    "/(https:.*)",
  ],
};
