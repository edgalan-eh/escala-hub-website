import Image from "next/image";
import Link from "next/link";
import { Calculator, Stethoscope } from "lucide-react";
import { posts } from "@/lib/content";
import { SOON, site } from "@/lib/site";
import { CalButton } from "../CalModal";

export function ContentCards() {
  return (
    <section id="conteudo" className="section reveal" style={{ background: "var(--ink)" }}>
      <div className="container">
        <h2 className="t-h2 max-w-[760px]">Ferramentas e conteúdo para quem opera.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="card card-hover flex flex-col gap-4 p-7">
            <Calculator size={26} style={{ color: "var(--amber)" }} aria-hidden="true" />
            <h3 className="text-[20px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
              Calculadora de margem por marketplace
            </h3>
            <div className="mt-1 flex flex-col gap-3 rounded-lg p-4" style={{ background: "var(--ink)", border: "1px solid var(--border)" }} aria-hidden="true">
              {["Preço", "Custo"].map((l, k) => (
                <div key={l} className="flex items-center gap-3">
                  <span className="t-label-sm w-12" style={{ color: "var(--muted)" }}>
                    {l}
                  </span>
                  <span className="relative h-1 flex-1 rounded-full" style={{ background: "var(--border)" }}>
                    <span className="absolute left-0 top-0 h-1 rounded-full" style={{ width: k === 0 ? "62%" : "38%", background: "var(--navy-light)" }} />
                    <span className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full" style={{ left: k === 0 ? "62%" : "38%", background: "var(--text)" }} />
                  </span>
                  <span className="t-label-sm w-10 text-right" style={{ color: "var(--muted)" }}>
                    R$ —
                  </span>
                </div>
              ))}
              <div className="mt-1 flex items-center justify-between">
                <span className="t-label-sm" style={{ color: "var(--muted)" }}>
                  Margem
                </span>
                <span className="text-[28px] font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--up)" }}>
                  — % ↑
                </span>
              </div>
            </div>
            <Link href={SOON} className="btn btn-primary btn-sm mt-auto self-start">
              Usar grátis
            </Link>
          </div>

          <div className="card flex flex-col gap-4 overflow-hidden p-7" style={{ background: "var(--navy)", borderColor: "rgba(47,85,212,.5)" }}>
            <div className="flex items-start justify-between">
              <Image src="/brand/metrihub/metrihub-logo-primary-dark.svg" alt="Metri Hub" width={110} height={26} style={{ height: 24, width: "auto" }} />
              <span className="badge" style={{ borderColor: "rgba(47,85,212,.6)", color: "var(--navy-text)" }}>
                Em breve
              </span>
            </div>
            <h3 className="text-[20px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
              Metri Hub
            </h3>
            <p className="t-small" style={{ color: "var(--navy-text)" }}>
              Gestão de e-commerce multicanal num painel só. Nascido da nossa operação.
            </p>
            <div className="relative mt-2 h-24 overflow-hidden rounded-lg" style={{ border: "1px solid rgba(47,85,212,.4)" }} aria-hidden="true">
              <div className="absolute inset-0 grid-dots" />
              <svg viewBox="0 0 300 96" className="absolute inset-0 h-full w-full">
                <polyline points="0,80 40,70 80,74 120,52 160,58 200,36 240,40 300,14" fill="none" stroke="var(--amber)" strokeWidth="2" />
              </svg>
            </div>
            <a href={site.metrihub} target="_blank" rel="noopener" className="link-arrow mt-auto">
              Lista de espera →
            </a>
          </div>

          <div className="card card-hover flex flex-col gap-4 p-7">
            <Stethoscope size={26} style={{ color: "var(--amber)" }} aria-hidden="true" />
            <h3 className="text-[20px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
              Diagnóstico gratuito da operação
            </h3>
            <p className="t-small" style={{ color: "var(--muted)" }}>
              Uma conversa inicial para mapear canais, processos e gargalos.
            </p>
            <CalButton className="link-arrow mt-auto self-start">Solicitar →</CalButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BlogSoon() {
  const rot = [-2, 0, 2];
  return (
    <section id="blog" className="section reveal divider-y" style={{ background: "var(--surface)" }}>
      <div className="container">
        <h2 className="t-h2 max-w-[760px]">O que aprendemos operando, escrito para quem opera.</h2>
        <div className="card relative mt-14 grid gap-12 overflow-hidden p-8 md:grid-cols-2 md:p-16" style={{ borderRadius: 16, background: "var(--ink)" }}>
          <div className="absolute inset-0 grid-dots" aria-hidden="true" />
          <div className="relative flex flex-col items-start">
            <span className="badge badge-amber">Primeiros artigos em breve</span>
            <h3 className="mt-5 text-[32px] font-semibold leading-tight" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
              Estamos escrevendo o que a gente faria no seu lugar.
            </h3>
            <p className="t-body mt-4 max-w-[480px]" style={{ color: "var(--muted)" }}>
              Guias, planilhas e checklists sobre margem, anúncios, estoque, caixa e sistema. Sem teoria: o que aplicamos nas nossas operações e nos clientes.
            </p>
            <a href={site.whatsapp} target="_blank" rel="noopener" className="link-arrow mt-7">
              Enquanto isso, fale com a gente no WhatsApp →
            </a>
          </div>
          <div className="relative hidden h-[280px] md:block" aria-hidden="true">
            {posts.map((p, k) => (
              <div
                key={p.title}
                className="card absolute left-1/2 w-[320px] p-5"
                style={{ top: k * 52, transform: `translateX(-50%) rotate(${rot[k]}deg)`, zIndex: k, background: "var(--surface)", boxShadow: "0 12px 32px rgba(0,0,0,.35)" }}
              >
                <span className="badge">{p.category}</span>
                <p className="mt-3 text-[16px] font-semibold leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                  {p.title}
                </p>
                <div className="mt-3 flex flex-col gap-2 overflow-hidden">
                  {[100, 72].map((w) => (
                    <span key={w} className="relative block h-2 overflow-hidden rounded" style={{ width: `${w}%`, background: "var(--surface-2)" }}>
                      <span className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,.06), transparent)", animation: "shimmer 2.4s linear infinite" }} />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
