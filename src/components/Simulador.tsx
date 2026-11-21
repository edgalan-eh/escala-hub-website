"use client";

import { useState } from "react";

const real = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const pct = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/* Números de exemplo. No sistema, tarifa e frete vêm do canal, pedido a pedido. */
const TARIFA = 0.165;
const IMPOSTO = 0.06;
const FRETE = 22.45;

/**
 * Simulação de margem de um pedido: a pessoa mexe no preço e no custo
 * e vê para onde vai cada real. É uma amostra real do cálculo, não uma imagem.
 */
export function Simulador() {
  const [preco, setPreco] = useState(189.9);
  const [custo, setCusto] = useState(78.4);

  const tarifa = preco * TARIFA;
  const imposto = preco * IMPOSTO;
  const sobra = preco - tarifa - imposto - FRETE - custo;
  const margem = (sobra / preco) * 100;
  const positiva = sobra >= 0;

  const partes = [
    { rotulo: "Tarifa do canal", valor: tarifa, cor: "#7f93c9" },
    { rotulo: "Frete pago por você", valor: FRETE, cor: "#5f74ad" },
    { rotulo: "Imposto", valor: imposto, cor: "#465a90" },
    { rotulo: "Custo do produto", valor: custo, cor: "#33456f" },
  ];

  return (
    <div className="rounded-[16px] bg-tile p-6 text-tile-text shadow-[var(--shadow)] sm:p-7">
      <p className="text-[14px] font-medium text-tile-muted">Simulação de um pedido</p>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="flex items-baseline justify-between text-[14px]">
            <span className="text-tile-muted">Preço de venda</span>
            <span className="num font-semibold">{real.format(preco)}</span>
          </span>
          <input
            className="faixa mt-1"
            type="range"
            min={60}
            max={400}
            step={0.1}
            value={preco}
            onChange={(e) => setPreco(Number(e.target.value))}
            aria-label="Preço de venda"
          />
        </label>
        <label className="block">
          <span className="flex items-baseline justify-between text-[14px]">
            <span className="text-tile-muted">Custo do produto</span>
            <span className="num font-semibold">{real.format(custo)}</span>
          </span>
          <input
            className="faixa mt-1"
            type="range"
            min={10}
            max={250}
            step={0.1}
            value={custo}
            onChange={(e) => setCusto(Number(e.target.value))}
            aria-label="Custo do produto"
          />
        </label>
      </div>

      <div className="mt-5 flex h-3 w-full gap-[3px] overflow-hidden rounded-full" aria-hidden>
        {partes.map((p) => (
          <span key={p.rotulo} style={{ flex: Math.max(p.valor, 0), background: p.cor }} />
        ))}
        {positiva && <span style={{ flex: sobra, background: "#5fd39b" }} />}
      </div>

      <dl className="mt-5 space-y-2 text-[15px]">
        {partes.map((p) => (
          <div key={p.rotulo} className="flex items-center justify-between gap-4">
            <dt className="flex items-center gap-2 text-tile-muted">
              <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: p.cor }} aria-hidden />
              {p.rotulo}
            </dt>
            <dd className="num">{real.format(p.valor)}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-5 flex items-end justify-between gap-4 border-t border-tile-line pt-5" aria-live="polite">
        <div>
          <p className="text-[14px] text-tile-muted">Sobra para você</p>
          <p className="num mt-1 font-display text-[32px] font-bold leading-none tracking-tight" style={{ color: positiva ? "#5fd39b" : "#ff8a8d" }}>
            {real.format(sobra)}
          </p>
        </div>
        <p className="num text-right text-[15px] font-semibold" style={{ color: positiva ? "#5fd39b" : "#ff8a8d" }}>
          {pct.format(margem)}% de margem
        </p>
      </div>

      <p className="mt-4 text-[13px] leading-snug text-tile-muted">
        Números de exemplo. No sistema, a tarifa e o frete vêm direto do canal, pedido por pedido.
      </p>
    </div>
  );
}
