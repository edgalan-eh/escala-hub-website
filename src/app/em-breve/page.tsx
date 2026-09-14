import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CalButton } from "@/components/CalModal";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Em breve", robots: { index: false, follow: true } };

export default function EmBreve() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden" style={{ background: "var(--ink)" }}>
      <div className="pointer-events-none absolute inset-0 grid-dots" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 noise" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(47,85,212,.2), transparent)" }} aria-hidden="true" />
      <div className="container relative flex flex-col items-center py-24 text-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-full" style={{ border: "1px solid var(--amber)", animation: "pulse-amber 3s var(--ease) infinite" }}>
          <Image src="/brand/escala/symbol-escalahub-dark.svg" alt="" width={64} height={64} />
        </div>
        <p className="eyebrow mt-10">Em construção</p>
        <h1 className="t-h2 mt-4" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
          Esta página chega em breve.
        </h1>
        <p className="t-body mt-5 max-w-[520px]" style={{ color: "var(--muted)" }}>
          Estamos construindo o novo site da Escala Hub. Enquanto isso, a conversa já pode começar.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CalButton>Solicitar diagnóstico</CalButton>
          <a href={site.whatsapp} target="_blank" rel="noopener" className="btn btn-secondary">
            Falar no WhatsApp
          </a>
        </div>
        <p className="t-label-sm mt-8" style={{ color: "var(--muted)", textTransform: "none", letterSpacing: "0.02em" }}>
          {site.email} · {site.phoneDisplay}
        </p>
        <Link href="/" className="t-small mt-10 hover:text-[var(--amber)]" style={{ color: "var(--muted)" }}>
          ← Voltar para a Home
        </Link>
      </div>
    </section>
  );
}
