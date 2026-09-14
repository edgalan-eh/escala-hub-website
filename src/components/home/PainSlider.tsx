"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { slides } from "@/lib/content";

const pad = (n: number) => String(n).padStart(2, "0");

export function PainSlider() {
  const [i, setI] = useState(0);
  const [fade, setFade] = useState(false);
  const [paused, setPaused] = useState(false);

  const go = (n: number) => {
    setFade(true);
    window.setTimeout(() => {
      setI(((n % slides.length) + slides.length) % slides.length);
      setFade(false);
    }, 180);
  };

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => go(i + 1), 5000);
    return () => window.clearInterval(t);
  }, [i, paused]);

  const [label, pain, turn] = slides[i];

  return (
    <section className="section reveal divider-y" style={{ background: "var(--surface)" }}>
      <div className="container">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="t-h2">O desafio não é apenas vender. É sustentar o crescimento.</h2>
          <p className="t-body mt-6" style={{ color: "var(--muted)" }}>
            Quando preço, mídia, estoque, logística, ERP e financeiro não conversam, aumentar o faturamento pode aumentar também o desperdício e a falta de controle. A Escala conecta essas frentes e transforma dados em prioridades claras para a operação.
          </p>
        </div>

        <div className="card mx-auto mt-14 max-w-[1000px] overflow-hidden" style={{ background: "var(--ink)" }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="flex items-center justify-between gap-4 overflow-x-auto px-6" style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="flex gap-1" role="tablist" aria-label="Dores">
              {slides.map((s, k) => (
                <button
                  key={s[0]}
                  role="tab"
                  aria-selected={k === i}
                  onClick={() => go(k)}
                  className="t-label-sm relative shrink-0 px-3 py-4"
                  style={{ color: k === i ? "var(--text)" : "var(--muted)" }}
                >
                  {s[0]}
                  <span className="absolute inset-x-3 bottom-0 h-0.5" style={{ background: k === i ? "var(--amber)" : "transparent" }} />
                </button>
              ))}
            </div>
            <span className="t-label-sm shrink-0" style={{ color: "var(--muted)" }}>
              {pad(i + 1)} / {pad(slides.length)}
            </span>
          </div>

          <div className="grid gap-8 p-8 md:grid-cols-2 md:gap-12 md:p-10" style={{ opacity: fade ? 0 : 1, transition: "opacity 180ms" }}>
            <div>
              <p className="t-label-sm" style={{ color: "var(--muted)" }}>
                A dor
              </p>
              <p className="mt-3 text-[24px] font-semibold leading-snug" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
                {pain}
              </p>
            </div>
            <div>
              <p className="t-label-sm" style={{ color: "var(--amber)" }}>
                A virada
              </p>
              <p className="t-body mt-3">{turn}</p>
            </div>
          </div>

          <div className="flex items-center justify-between px-6 py-4" style={{ borderTop: "1px solid var(--border)" }}>
            <div className="flex gap-1.5" aria-hidden="true">
              {slides.map((s, k) => (
                <span key={s[0]} className="h-1.5 rounded-full" style={{ width: k === i ? 24 : 8, background: k === i ? "var(--amber)" : "var(--border)", transition: "width 200ms, background 200ms" }} />
              ))}
            </div>
            <div className="flex gap-2">
              <button aria-label={`Anterior: ${slides[(i + slides.length - 1) % slides.length][0]}`} onClick={() => go(i - 1)} className="flex h-9 w-9 items-center justify-center rounded-lg border hover:border-[var(--text)]" style={{ borderColor: "var(--border)" }}>
                <ArrowLeft size={16} />
              </button>
              <button aria-label={`Próximo: ${slides[(i + 1) % slides.length][0]}`} onClick={() => go(i + 1)} className="flex h-9 w-9 items-center justify-center rounded-lg border hover:border-[var(--text)]" style={{ borderColor: "var(--border)" }}>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        <p className="sr-only">Dor atual: {label}</p>
      </div>
    </section>
  );
}
