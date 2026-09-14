"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { heroNodes } from "@/lib/content";
import { SOON } from "@/lib/site";
import { CalButton } from "../CalModal";
import { Icon } from "../Icon";

const mqQuery = "(prefers-reduced-motion: reduce)";
function subscribe(cb: () => void) {
  const mq = window.matchMedia(mqQuery);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
}
function useReducedMotion() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(mqQuery).matches, () => false);
}

const CX = 320;
const CY = 280;
const VW = 640;
const VH = 560;
const pct = (v: number, total: number) => `${(v / total) * 100}%`;

function Diagram() {
  const [hover, setHover] = useState<number | null>(null);
  const [auto, setAuto] = useState<number | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (hover !== null || reduced) return;
    let i = 0;
    let t2: number;
    const t1 = window.setInterval(() => {
      setAuto(i % heroNodes.length);
      t2 = window.setTimeout(() => setAuto(null), 1200);
      i++;
    }, 2500);
    return () => {
      window.clearInterval(t1);
      window.clearTimeout(t2);
    };
  }, [hover, reduced]);

  const hi = hover ?? (hover === null ? auto : null);
  const dim = hover !== null;

  return (
    <div
      className="relative mx-auto"
      style={{ width: "100%", maxWidth: VW, minWidth: 0, flex: "1 1 auto", aspectRatio: `${VW} / ${VH}` }}
      onMouseLeave={() => setHover(null)}
    >
      <div className="absolute inset-0">
        <svg viewBox="0 0 640 560" className="absolute inset-0 h-full w-full overflow-visible">
          {heroNodes.map((n, i) => {
            const len = Math.round(Math.hypot(n.x - CX, n.y - CY));
            const on = i === hi;
            return (
              <g key={n.label}>
                <line
                  x1={CX}
                  y1={CY}
                  x2={n.x}
                  y2={n.y}
                  stroke={on ? "var(--amber)" : "rgba(47,85,212,.7)"}
                  strokeWidth={on ? 2 : 1}
                  style={{ strokeDasharray: len, strokeDashoffset: len, animation: `draw 1.1s var(--ease) forwards`, animationDelay: `${0.15 + i * 0.12}s`, transition: "stroke .25s, stroke-width .25s" }}
                />
                {on && !reduced && (
                  <circle r="3" fill="var(--amber)">
                    <animateMotion dur="0.6s" repeatCount="indefinite" path={`M${n.x},${n.y} L${CX},${CY}`} />
                  </circle>
                )}
              </g>
            );
          })}
        </svg>
        {heroNodes.map((n, i) => {
          const on = i === hi;
          return (
            <button
              key={n.label}
              type="button"
              onMouseEnter={() => setHover(i)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              onTouchStart={() => {
                setHover(i);
                window.setTimeout(() => setHover(null), 1500);
              }}
              aria-label={n.label}
              className="absolute inline-flex items-center gap-2.5 whitespace-nowrap rounded-md px-3.5 py-2.5"
              style={{
                left: pct(n.x, VW),
                top: pct(n.y, VH),
                font: "500 12px/1.2 var(--font-mono)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transform: `translate(-50%,-50%) scale(${on && !reduced ? 1.15 : 1})`,
                background: on ? "var(--amber)" : "var(--ink)",
                color: on ? "var(--ink)" : "var(--text)",
                border: `1px solid ${on ? "var(--amber)" : "var(--border)"}`,
                boxShadow: on ? "0 0 28px rgba(255,177,27,.35)" : "none",
                opacity: dim && !on ? 0.55 : 1,
                transition: "transform .2s ease-out, background-color .25s, color .25s, border-color .25s, box-shadow .25s, opacity .25s",
              }}
            >
              <Icon name={n.icon} size={16} style={{ color: on ? "var(--ink)" : "var(--muted)" }} />
              {n.label}
            </button>
          );
        })}
      </div>
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          left: pct(CX, VW),
          top: pct(CY, VH),
          width: 148,
          height: 148,
          transform: "translate(-50%,-50%)",
          background: "var(--ink)",
          border: `1px solid ${hi !== null ? "var(--amber)" : "var(--navy-light)"}`,
          boxShadow: hi !== null ? "0 0 64px rgba(255,177,27,.4)" : "0 0 44px rgba(47,85,212,.55)",
          transition: "border-color .25s, box-shadow .3s",
        }}
      >
        <Image src="/brand/escala/symbol-escalahub-dark.svg" alt="" width={70} height={70} style={{ transform: hi !== null ? "scale(1.06)" : "scale(1)", transition: "transform .3s var(--ease)" }} />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" style={{ background: "var(--ink)" }}>
      <div className="pointer-events-none absolute inset-0" style={{ background: "url(/bg/section-crop-ink.svg) right center/cover no-repeat" }} />
      <div className="pointer-events-none absolute inset-0 noise" />
      <div className="pointer-events-none absolute inset-0 grid-dots" style={{ maskImage: "radial-gradient(ellipse at 75% 50%, #000 20%, transparent 70%)" }} />
      <style>{`@media (min-width:1024px){.hero-grid{grid-template-columns:52fr 48fr!important}}`}</style>
      <div className="hero-grid container relative grid items-center gap-12 py-20 lg:min-h-[760px] lg:py-24" style={{ gridTemplateColumns: "minmax(0,1fr)" }}>
        <div className="flex min-w-0 flex-col items-start">
          <p className="eyebrow">Consultoria de e-commerce e marketplaces</p>
          <h1 className="t-h1 mt-6">
            Ajudamos a construir e escalar sua operação de{" "}
            <span className="whitespace-nowrap">
              <span
                aria-hidden="true"
                className="mr-3 inline-flex h-[1em] w-[1em] items-center justify-center rounded-[0.2em] align-[-0.16em]"
                style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
              >
                <Icon name="shopping-cart" size={34} style={{ color: "var(--amber)", width: "0.55em", height: "0.55em" }} />
              </span>
              e-commerce
            </span>
            .
          </h1>
          <p className="t-body mt-6 max-w-[560px]" style={{ color: "var(--muted)", fontSize: 20 }}>
            Estratégia, gestão e tecnologia para marcas, indústrias e sellers crescerem em marketplaces e canais próprios com mais margem, controle e previsibilidade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CalButton>Solicitar diagnóstico</CalButton>
            <Link href={SOON} className="btn btn-secondary">
              Conhecer a Escala Hub
            </Link>
          </div>
        </div>
        <div className="hidden w-full min-w-0 lg:flex lg:justify-center">
          <Diagram />
        </div>
        <div className="w-full min-w-0 lg:hidden">
          <Diagram />
        </div>
      </div>
    </section>
  );
}
