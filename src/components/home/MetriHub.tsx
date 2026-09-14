import Image from "next/image";
import { metriAlerts, metriFeatures } from "@/lib/content";
import { site } from "@/lib/site";
import { Icon } from "../Icon";

const line = "rgba(47,85,212,.45)";
const text2 = "var(--navy-text)";

function Card({ title, children, className = "" }: { title: string; children?: React.ReactNode; className?: string }) {
  return (
    <div className={`flex flex-col gap-3 rounded-xl p-4 ${className}`} style={{ background: "rgba(10,18,40,.6)", border: `1px solid ${line}` }}>
      <span style={{ font: "500 10px/1.2 var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: text2 }}>{title}</span>
      {children}
    </div>
  );
}

function Mock() {
  return (
    <div className="relative" aria-hidden="true">
      <div
        className="overflow-hidden rounded-2xl"
        style={{ border: `1px solid rgba(47,85,212,.8)`, background: "#0B142C", boxShadow: "0 0 80px rgba(47,85,212,.35), 0 24px 64px rgba(0,0,0,.55)" }}
      >
        <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: `1px solid ${line}` }}>
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(143,163,232,.35)" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(143,163,232,.35)" }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: "rgba(143,163,232,.35)" }} />
          <span className="ml-3 truncate" style={{ font: "500 12px/1 var(--font-mono)", color: text2 }}>
            app.metrihub.com.br
          </span>
        </div>

        <div className="grid" style={{ gridTemplateColumns: "150px minmax(0,1fr)" }}>
          <div className="flex flex-col gap-1 py-5 pl-4 pr-3">
            {["Início", "Anúncios", "Estoque", "Tarefas"].map((m, k) => (
              <span
                key={m}
                className="rounded-md px-3 py-2"
                style={{
                  font: "500 11px/1 var(--font-mono)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: k === 0 ? "rgba(47,85,212,.22)" : "transparent",
                  border: `1px solid ${k === 0 ? line : "transparent"}`,
                  color: k === 0 ? "var(--text)" : text2,
                }}
              >
                {m}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-4 p-5 pl-2">
            <div className="flex items-center justify-between">
              <span className="text-[20px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}>
                Início
              </span>
              <span className="rounded px-2.5 py-1.5" style={{ border: `1px solid ${line}`, font: "500 10px/1 var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: text2 }}>
                Últimos 7 dias
              </span>
            </div>

            <div className="grid gap-4" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <Card title="Nota da operação">
                <span className="text-[72px] font-semibold leading-none" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.04em" }}>
                  B
                </span>
                <div className="mt-1 grid grid-cols-5 gap-2">
                  {[0, 1, 2, 3, 4].map((k) => (
                    <span key={k} className="h-1 rounded-full" style={{ background: k === 1 ? "var(--amber)" : "rgba(47,85,212,.5)" }} />
                  ))}
                </div>
                <div className="grid grid-cols-5 text-center" style={{ font: "500 10px/1 var(--font-mono)", letterSpacing: "0.1em", color: text2 }}>
                  {["A", "B", "C", "D", "E"].map((l) => (
                    <span key={l} style={{ color: l === "B" ? "var(--text)" : undefined }}>
                      {l}
                    </span>
                  ))}
                </div>
              </Card>

              <Card title="Saúde por eixo">
                <svg viewBox="0 0 200 200" className="mx-auto w-full" style={{ maxHeight: 150 }}>
                  {[86, 62, 38].map((r) => (
                    <polygon
                      key={r}
                      points={[0, 45, 90, 135, 180, 225, 270, 315]
                        .map((a) => `${100 + r * Math.sin((a * Math.PI) / 180)},${100 - r * Math.cos((a * Math.PI) / 180)}`)
                        .join(" ")}
                      fill="none"
                      stroke="rgba(47,85,212,.4)"
                      strokeWidth="1"
                    />
                  ))}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
                    <line key={a} x1="100" y1="100" x2={100 + 86 * Math.sin((a * Math.PI) / 180)} y2={100 - 86 * Math.cos((a * Math.PI) / 180)} stroke="rgba(47,85,212,.3)" strokeWidth="1" />
                  ))}
                  <polygon points="100,28 148,54 168,100 132,132 100,166 58,138 40,100 70,66" fill="rgba(47,85,212,.35)" stroke="var(--navy-light)" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="132" cy="132" r="4" fill="var(--amber)" />
                </svg>
              </Card>
            </div>

            <div className="grid gap-3" style={{ gridTemplateColumns: "repeat(3, minmax(0,1fr))" }}>
              {[
                { t: "Alertas abertos", w: "70%", amber: false },
                { t: "Tarefas da semana", w: "52%", amber: false },
                { t: "Margem por canal", w: "84%", amber: true },
              ].map((c) => (
                <Card key={c.t} title={c.t}>
                  <span className="h-1.5 rounded-full" style={{ width: c.w, background: c.amber ? "var(--amber)" : "rgba(47,85,212,.55)" }} />
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute -top-5 right-6 flex items-center gap-2.5 rounded-xl px-4 py-3"
        style={{ background: "#0B142C", border: `1px solid ${line}`, boxShadow: "0 12px 32px rgba(0,0,0,.5)" }}
      >
        <Icon name="trending-up" size={16} style={{ color: text2 }} />
        <span className="text-[14px]">Tarifa subiu em 12 anúncios</span>
      </div>

      <div
        className="absolute left-[-40px] top-[86px] flex items-start gap-2.5 rounded-xl px-4 py-3"
        style={{ background: "#0B142C", border: "1px solid var(--amber)", boxShadow: "0 12px 32px rgba(0,0,0,.5)" }}
      >
        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--amber)" }} />
        <span className="flex flex-col">
          <span className="text-[14px]">Anúncio pausado há 3 dias</span>
          <span style={{ font: "500 13px/1.4 var(--font-mono)", color: "var(--amber)" }}>R$ 890/sem</span>
        </span>
      </div>
    </div>
  );
}

export function MetriHub() {
  // duas metades idênticas, cada uma com cópias suficientes para cobrir telas largas
  const half = [...metriAlerts, ...metriAlerts];
  return (
    <section
      id="metri"
      className="section reveal relative overflow-hidden"
      style={{ background: "var(--navy)", borderTop: "1px solid rgba(47,85,212,.4)", borderBottom: "1px solid rgba(47,85,212,.4)" }}
    >
      <div className="pointer-events-none absolute inset-0 grid-dots" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 noise" aria-hidden="true" />
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[900px] w-[900px] -translate-y-1/2 translate-x-1/3 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(47,85,212,.28), transparent)" }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] lg:gap-16">
          <div>
            <Image src="/brand/metrihub/metrihub-logo-primary-dark.svg" alt="Metri Hub" width={130} height={30} style={{ height: 30, width: "auto" }} />
            <p className="eyebrow mt-10" style={{ color: text2 }}>
              Incluso para clientes Escala Hub
            </p>
            <h2 className="t-h2 mt-5">Todo cliente Escala Hub opera com o Metri Hub.</h2>
            <p className="t-body mt-5" style={{ color: text2 }}>
              Central de inteligência para operações de marketplace. Não mostra só dados: identifica o problema, calcula o impacto em reais e diz o que fazer e quem resolve.
            </p>

            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {metriFeatures.map((f) => (
                <div key={f.title}>
                  <div className="flex items-center gap-2.5">
                    <Icon name={f.icon} size={18} style={{ color: "var(--text)", flex: "0 0 18px" }} />
                    <h3 className="text-[17px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                      {f.title}
                    </h3>
                  </div>
                  <p className="t-small mt-2" style={{ color: text2 }}>
                    {f.text}
                  </p>
                </div>
              ))}
            </div>

            <a href={site.metrihub} target="_blank" rel="noopener" className="btn btn-secondary mt-10" style={{ borderColor: "rgba(244,242,238,.35)" }}>
              Conhecer o Metri Hub →
            </a>
          </div>

          <div className="hidden lg:block">
            <Mock />
          </div>
        </div>
      </div>

      <div className="relative mt-20 overflow-hidden" style={{ borderTop: `1px solid ${line}` }} aria-hidden="true">
        <div className="marquee-track py-4" style={{ animationDuration: "60s" }}>
          {[...half, ...half].map((a, k) => (
            <span key={k} className="mx-7 flex shrink-0 items-center gap-3" style={{ font: "500 11px/1 var(--font-mono)", letterSpacing: "0.1em", textTransform: "uppercase", color: text2 }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: k % 3 === 0 ? "var(--amber)" : "var(--navy-light)" }} />
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
