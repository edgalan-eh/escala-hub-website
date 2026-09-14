import Link from "next/link";
import { partnerSteps } from "@/lib/content";
import { SOON } from "@/lib/site";
import { CalButton } from "../CalModal";

export function Partners() {
  return (
    <section id="parceiros" className="section reveal" style={{ background: "var(--ink)" }}>
      <div className="container grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <p className="eyebrow">Programa de parceiros</p>
          <h2 className="t-h2 mt-5">Indique sellers. Ganhe recorrência.</h2>
          <p className="t-body mt-6" style={{ color: "var(--muted)" }}>
            Para agências, contadores, ERPs e consultores que já atendem quem vende online. Você indica, a gente executa a consultoria e você recebe todo mês enquanto o contrato durar.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <p className="t-stat">20%</p>
              <p className="t-label-sm mt-2" style={{ color: "var(--muted)" }}>
                Comissão recorrente
              </p>
            </div>
            <div>
              <p className="t-stat">48h</p>
              <p className="t-label-sm mt-2" style={{ color: "var(--muted)" }}>
                Retorno da indicação
              </p>
            </div>
          </div>
          <Link href={SOON} className="link-arrow mt-8">
            Quero ser parceiro →
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {partnerSteps.map((s) => (
            <div key={s.n} className="card flex gap-5 p-6">
              <span className="text-[20px] font-medium" style={{ fontFamily: "var(--font-mono)", color: "var(--amber)" }}>
                {s.n}
              </span>
              <div>
                <h3 className="text-[20px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                  {s.title}
                </h3>
                <p className="t-small mt-1.5" style={{ color: "var(--muted)" }}>
                  {s.text}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-2 flex flex-wrap gap-2">
            {["Agências", "Contadores", "ERPs e softwares", "Consultores"].map((t) => (
              <span key={t} className="badge">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="diagnostico" className="section relative overflow-hidden reveal" style={{ background: "var(--ink) url(/bg/section-outline-ink.svg) right center/cover no-repeat", borderTop: "1px solid var(--border)" }}>
      <div className="pointer-events-none absolute inset-0 grid-dots" style={{ maskImage: "radial-gradient(ellipse at 50% 50%, #000 10%, transparent 65%)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(47,85,212,.18), transparent)" }} aria-hidden="true" />
      <div className="container relative mx-auto max-w-[760px] text-center">
        <h2 className="t-h2" style={{ fontSize: "clamp(32px, 4vw, 48px)" }}>
          Qual é o próximo gargalo da sua operação?
        </h2>
        <p className="t-body mt-6" style={{ color: "var(--muted)" }}>
          Conte o momento do seu e-commerce. Em uma conversa inicial, identificamos onde a Escala Hub pode gerar mais impacto.
        </p>
        <div className="mt-8 flex justify-center">
          <CalButton>Solicitar diagnóstico</CalButton>
        </div>
        <p className="t-label-sm mt-6" style={{ color: "var(--muted)" }}>
          Resposta em até 1 dia útil · Sem compromisso
        </p>
      </div>
    </section>
  );
}
