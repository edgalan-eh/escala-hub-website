import Link from "next/link";
import { method, pillars } from "@/lib/content";
import { SOON } from "@/lib/site";
import { Icon } from "../Icon";

export function Pillars() {
  return (
    <section id="solucoes" className="section reveal" style={{ background: "var(--ink)" }}>
      <div className="container">
        <h2 className="t-h2 max-w-[640px]">Três pilares. Uma operação integrada.</h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <Link key={p.n} href={SOON} className="card card-hover flex flex-col gap-4 p-7">
              <div className="flex items-start justify-between">
                <Icon name={p.icon} size={28} style={{ color: "var(--amber)" }} />
                <span className="t-label-sm" style={{ color: "var(--dim)" }}>
                  {p.n}
                </span>
              </div>
              <h3 className="text-[24px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                {p.title}
              </h3>
              <p className="t-small" style={{ color: "var(--muted)" }}>
                {p.text}
              </p>
              <span className="link-arrow mt-auto pt-2">Ver detalhes →</span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href={SOON} className="btn btn-secondary">
            Conhecer nossas soluções
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Method() {
  return (
    <section className="section reveal divider-y" style={{ background: "var(--surface)" }}>
      <div className="container">
        <h2 className="t-h2 max-w-[640px]">Diagnóstico, prioridade e execução.</h2>
        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-[7px] hidden h-px md:block" style={{ background: "var(--border)" }}>
            <div className="h-px" style={{ width: "36%", background: "var(--amber)" }} />
          </div>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {method.map((m) => (
              <div key={m.n} className="relative flex flex-col gap-4 md:pt-8">
                <span className="absolute left-0 top-0 hidden h-[15px] w-[15px] rounded-full border-2 md:block" style={{ borderColor: "var(--amber)", background: "var(--surface)" }} />
                <span className="text-[24px] font-medium" style={{ fontFamily: "var(--font-mono)", color: "var(--amber)" }}>
                  {m.n}
                </span>
                <h3 className="text-[24px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                  {m.title}
                </h3>
                <p className="t-small" style={{ color: "var(--muted)" }}>
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-wrap gap-2">
          <span className="badge">Consultor dedicado</span>
          <span className="badge">Acompanhamento recorrente</span>
          <span className="badge">Fee definido, sem % sobre faturamento</span>
        </div>
      </div>
    </section>
  );
}
