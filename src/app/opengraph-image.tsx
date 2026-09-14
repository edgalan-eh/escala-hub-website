import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Escala Hub — Consultoria de E-commerce e Marketplaces";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0A0A0B",
          color: "#F4F2EE",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="54" viewBox="0 0 366 353.35">
            <path fill="#2F55D4" d="M0 0h82v153h131.6v118.3H366v82H131.6V235H0z" />
            <path fill="#F4F2EE" d="M152.6 0H366v205.7h-82V82H152.6z" />
            <rect fill="#F4F2EE" x="0" y="300" width="53" height="53" rx="8" />
          </svg>
          <span style={{ fontSize: 40, fontWeight: 700, letterSpacing: -1 }}>Escala Hub</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span style={{ fontSize: 22, color: "#FFB11B", letterSpacing: 4, textTransform: "uppercase" }}>Consultoria de e-commerce e marketplaces</span>
          <span style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>Ajudamos a construir e escalar sua operação de e-commerce.</span>
          <span style={{ fontSize: 26, color: "#9C9A94", maxWidth: 900 }}>Estratégia, gestão e tecnologia para marketplaces e canais próprios, com margem e previsibilidade.</span>
        </div>
      </div>
    ),
    size,
  );
}
