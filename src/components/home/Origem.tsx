import Image from "next/image";
import { origemTiles } from "@/lib/content";
import { Icon } from "../Icon";

export function Origem() {
  return (
    <section id="origem" className="section reveal" style={{ background: "var(--ink)" }}>
      <div className="container grid gap-12 lg:grid-cols-[minmax(0,440px)_minmax(0,1fr)] lg:gap-20">
        <div>
          <h2 className="t-h2">Experiência construída dentro de uma operação real.</h2>
          <p className="t-body mt-6" style={{ color: "var(--muted)" }}>
            Antes de orientar outras empresas, construímos e operamos nossos próprios negócios de e-commerce. Foi enfrentando problemas reais de margem, estoque, logística, marketplaces e gestão que desenvolvemos o método da Escala Hub. É por isso que falamos a língua de quem opera.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="badge">Capital próprio</span>
            <span className="badge">Operação ativa</span>
            <span className="badge">Multicanal</span>
          </div>
        </div>
        <div>
          <p className="t-label-sm mb-4" style={{ color: "var(--muted)" }}>
            O que operamos na prática
          </p>
          <div className="flex flex-col gap-3">
            {origemTiles.map((t) => (
              <div key={t.title} className="card card-hover flex gap-4 p-6">
                <span className="icon-box" style={{ background: "transparent" }}>
                  <Icon name={t.icon} size={26} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[22px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                    {t.title}
                  </h3>
                  <p className="t-small mt-1.5" style={{ color: "var(--muted)" }}>
                    {t.text}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.chips.map((c) => (
                      <span key={c.label} className="chip" title={c.label}>
                        <Image src={c.src} alt="" width={22} height={14} style={{ filter: c.mono ? "grayscale(1) brightness(1.9)" : undefined }} unoptimized={c.src.endsWith(".svg")} />
                        {c.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
