import { ImageResponse } from "next/og.js";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Dások All Solutions — Entornos comerciales inteligentes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(
  join(process.cwd(), "public/brand/dasok-logo.png"),
  "base64",
);
const logoSrc = `data:image/png;base64,${logoData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#070d14",
          backgroundImage:
            "radial-gradient(ellipse at 50% 0%, rgba(0,128,223,0.35), transparent 60%)",
          padding: "80px",
        }}
      >
        <img
          src={logoSrc}
          width={420}
          height={128}
          alt=""
          style={{ objectFit: "contain" }}
        />
        <p
          style={{
            marginTop: 56,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 2,
            color: "#27d38c",
          }}
        >
          dasoksolutions.com
        </p>
        <p
          style={{
            marginTop: 20,
            maxWidth: 820,
            textAlign: "center",
            fontSize: 42,
            lineHeight: 1.3,
            fontWeight: 600,
            color: "#ffffff",
          }}
        >
          Convertimos espacios comerciales en entornos inteligentes, seguros y rentables.
        </p>
      </div>
    ),
    { ...size },
  );
}
