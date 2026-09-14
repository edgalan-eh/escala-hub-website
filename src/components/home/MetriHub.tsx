import Image from "next/image";
import { metriAlerts, metriFeatures } from "@/lib/content";
import { site } from "@/lib/site";
import { Icon } from "../Icon";

const blue = "rgba(47,85,212,.5)";
const text2 = "var(--navy-text)";

function Mock() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="overflow-hidden rounded-xl" style={{ border: `1px solid ${blue}`, background: "#0B142A", transform: "rotate(-4deg) translateX(40px)", boxShadow: "0 24px 64px rgba(0,0,0,.5)", width: 720 }}>
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: `1px solid ${blue}` }}>
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#2A2A2E" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#2A2A2E" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "#2A2A2E" }} />
          <span className="t-label-sm ml-3" style={{ color: text2, textTransform: "none", letterSpacing: 0 }}>
            app.metrihub.com.br
          </span>
        </div>
        <div className="grid" style={{ gridTemplateColumns: "150px 1fr", height: 440 }}>
          <div className="flex flex-col gap-1.5 p-3" style={{ borderRight: `1px solid rgba(47,85,212,.3)` }}>
            {["Início", "Alertas", "Margem", "Anúncios", "Estoque", "Tarefas"].map((m, k) => (
              <span key={m} className="t-label-sm rounded-md px-2.5 py-2" style={{ background: k === 0 ? "rgba(47,85,212,.25)" : "transparent", color: k === 0 ? "var(--text)" : text2 }}>
                {m}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 p-5">
            <div className="flex items-center justify-between">
              <span className="text-[18px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                Início
              </span>
              <span className="badge" style={{ borderColor: blue, color: text2 }}>
                Últimos 7 dias
              </span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-3 rounded-[10px] p-5" style={{ background: "var(--navy)", border: `1px solid ${blue}` }}>
                <span className="t-label-sm" style={{ color: text2 }}>
                  Nota da operação
                </span>
                <span className="text-[96px] font-semibold leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
                  B
                </span>
                <div className="grid grid-cols-5 gap-1">
                  {[0, 1, 2, 3, 4].map((k) => (
                    <span key={k} className="h-1.5 rounded-full" style={{ background: k === 1 ? "var(--amber)" : "rgba(47,85,212,.35)" }} />
                  ))}
                </div>
                <div className="t-label-sm grid grid-cols-5 text-center" style={{ color: text2 }}>
                  {["A", "B", "C", "D", "E"].map((l) => (
                    <span key={l} style={{ color: l === "B" ? "var(--text)" : undefined }}>
                      {l}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 rounded-[10px] p-5" style={{ background: "var(--navy)", border: `1px solid ${blue}` }}>
                <span className="t-label-sm" style={{ color: text2 }}>
                  Saúde por eixo
                </span>
                <svg viewBox="0 0 200 200" className="w-full" style={{ maxHeight: 190 }}>
                  {[80, 50, 20].map((r) => (
                    <polygon key={r} points={[0, 45, 90, 135, 180, 225, 270, 315].map((a) => `${100 + (100 - r) * Math.sin((a * Math.PI) / 180)},${100 - (100 - r) * Math.cos((a * Math.PI) / 180)}`).join(" ")} fill="none" stroke="rgba(47,85,212,.45)" strokeWidth="1" />
                  ))}
                  <polygon points="100,36 142,58 164,100 128,128 100,158 60,140 44,100 72,72" fill="rgba(47,85,212,.25)" stroke="var(--navy-light)" strokeWidth="1.5" strokeLinejoin="round" />
                  <circle cx="128" cy="128" r="3.5" fill="var(--amber)" />
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["Alertas abertos", "Tarefas da semana", "Margem por canal"].map((t, k) => (
                <div key={t} className="flex flex-col gap-2 rounded-lg p-3" style={{ border: "1px solid rgba(47,85,212,.35)" }}>
                  <span className="t-label-sm" style={{ color: text2, fontSize: 10 }}>
                    {t}
                  </span>
                  <span className="h-2 rounded" style={{ width: ["70%", "55%", "80%"][k], background: "rgba(47,85,212,.35)" }} />
                  <span className="h-2 rounded" style={{ width: ["40%", "75%", "50%"][k], background: "rgba(47,85,212,.2)" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="card absolute -left-6 top-10 p-3.5" style={{ borderColor: "var(--amber)", boxShadow: "0 12px 32px rgba(0,0,0,.45)", background: "var(--surface)" }}>
        <span className="t-label-sm" style={{ color: "var(--amber)" }}>
          Anúncio pausado há 3 dias
        </span>
        <p className="mt-1 text-[15px] font-semibold" style={{ fontFamily: "var(--font-display)" }}>
          R$ 890/sem
        </p>
      </div>
      <div className="card absolute -left-2 bottom-16 p-3.5" style={{ boxShadow: "0 12px 32px rgba(0,0,0,.45)", background: "var(--surface)" }}>
        <span className="t-label-sm" style={{ color: "var(--muted)" }}>
          Estoque Full acaba em 6 dias
        </span>
      </div>
    </div>
  );
}

export function MetriHub() {
  return (
    <section id="metri" className="section relative overflow-hidden reveal" style={{ background: "var(--navy)", borderTop: "1px solid rgba(47,85,212,.4)", borderBottom: "1px solid rgba(47,85,212,.4)" }}>
      <div className="pointer-events-none absolute inset-0 grid-dots" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 noise" aria-hidden="true" />
      <div className="container relative">
        <Image src="/brand/metrihub/metrihub-logo-primary-dark.svg" alt="Metri Hub" width={130} height={30} style={{ height: 28, width: "auto" }} />
        <div className="mt-10 grid gap-12 lg:grid-cols-[5fr_6fr] lg:items-center">
          <div>
            <p className="eyebrow" style={{ color: "var(--navy-text)" }}>
              Incluso para clientes Escala Hub
            </p>
            <h2 className="t-h2 mt-5">Todo cliente Escala Hub opera com o Metri Hub.</h2>
            <p className="t-body mt-5" style={{ color: "var(--navy-text)" }}>
              Central de inteligência para operações de marketplace. Não mostra só dados: identifica o problema, calcula o impacto em reais e diz o que fazer e quem resolve.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {metriFeatures.map((f) => (
                <div key={f.title} className="flex gap-3">
                  <Icon name={f.icon} size={20} style={{ color: "var(--text)", flex: "0 0 20px", marginTop: 2 }} />
                  <div>
                    <h3 className="text-[18px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                      {f.title}
                    </h3>
                    <p className="t-small mt-1" style={{ color: "var(--navy-text)" }}>
                      {f.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="t-label-sm mt-8" style={{ color: "var(--text)" }}>
              A IA nunca calcula os seus números. O motor calcula; a IA explica.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="badge" style={{ borderColor: blue, color: "var(--navy-text)" }}>
                Integrado ao Mercado Livre e ao seu ERP
              </span>
              <span className="badge" style={{ borderColor: blue, color: "var(--navy-text)" }}>
                Novos canais em expansão
              </span>
            </div>
            <a href={site.metrihub} target="_blank" rel="noopener" className="btn btn-secondary mt-8" style={{ borderColor: "var(--text)" }}>
              Conhecer o Metri Hub →
            </a>
          </div>
          <div className="hidden lg:block">
            <Mock />
          </div>
        </div>
      </div>
      <div className="relative mt-16 overflow-hidden" style={{ borderTop: "1px solid rgba(47,85,212,.3)" }} aria-hidden="true">
        <div className="marquee-track py-3" style={{ animationDuration: "50s" }}>
          {[...metriAlerts, ...metriAlerts].map((a, k) => (
            <span key={k} className="t-label-sm mx-6 flex shrink-0 items-center gap-3" style={{ color: "var(--navy-text)" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: k % 3 === 0 ? "var(--amber)" : "var(--navy-light)" }} />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
