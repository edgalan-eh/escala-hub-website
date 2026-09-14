"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { menus, nav, type MenuLink } from "@/lib/content";
import { CalButton, useCal } from "./CalModal";
import { Icon } from "./Icon";

function MenuItem({ l }: { l: MenuLink }) {
  const inner = (
    <>
      {l.featured ? (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ background: "var(--navy)", border: "1px solid var(--navy-light)" }}>
          <Image src="/brand/metrihub/metrihub-mark.svg" alt="" width={18} height={18} />
        </div>
      ) : l.img ? (
        <span className="icon-box">
          <Image src={l.img} alt="" width={20} height={20} style={{ height: 20, width: "auto", opacity: 0.9, filter: l.img.includes("mono") ? undefined : "grayscale(1) brightness(1.8)" }} />
        </span>
      ) : (
        <span className="icon-box">
          <Icon name={l.icon ?? "store"} size={20} />
        </span>
      )}
      <span className="flex flex-col gap-1">
        <span className="flex items-center gap-2 text-[16px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
          {l.title}
          {l.badge && <span className="badge">{l.badge}</span>}
          {l.featured && <span className="badge badge-amber">Incluso para clientes</span>}
        </span>
        <span className="text-sm" style={{ color: "var(--muted)" }}>
          {l.sub}
        </span>
      </span>
    </>
  );
  const cls =
    "flex items-start gap-4 rounded-xl border border-transparent p-3 transition hover:border-[var(--navy-light)] hover:bg-[var(--surface-2)]" +
    (l.featured ? " bg-[var(--navy)]/40" : "");
  return l.external ? (
    <a href={l.href} target="_blank" rel="noopener" className={cls}>
      {inner}
    </a>
  ) : (
    <Link href={l.href} className={cls}>
      {inner}
    </Link>
  );
}

function StartHere({ compact = false }: { compact?: boolean }) {
  const { open } = useCal();
  return (
    <div className="flex flex-col rounded-xl border p-6" style={{ background: "var(--ink)", borderColor: "var(--border)", width: compact ? "100%" : 300 }}>
      <p className="eyebrow">Comece por aqui</p>
      <p className="mt-3 text-[18px] font-semibold leading-snug" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
        Não sabe qual frente faz sentido agora?
      </p>
      <p className="mt-3 text-sm" style={{ color: "var(--muted)" }}>
        Em 45 minutos mapeamos o gargalo da sua operação e indicamos o caminho.
      </p>
      <button onClick={open} className="link-arrow mt-auto pt-6" style={{ color: "var(--amber)" }}>
        Solicitar diagnóstico →
      </button>
    </div>
  );
}

export function Nav() {
  const [openKey, setOpenKey] = useState<"sol" | "can" | "fer" | null>(null);
  const [mobile, setMobile] = useState(false);
  const [mobileKey, setMobileKey] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  const enter = (k: "sol" | "can" | "fer") => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenKey(k);
  };
  const leave = () => {
    closeTimer.current = window.setTimeout(() => setOpenKey(null), 120);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenKey(null);
        setMobile(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobile]);

  return (
    <header className="sticky top-0 z-[70]" style={{ background: "var(--nav-bg)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}>
      <div className="container flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Escala Hub, início" className="shrink-0">
          <Image src="/brand/escala/logo-escalahub-dark.svg" alt="Escala Hub" width={150} height={27} priority style={{ height: 26, width: "auto" }} />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex" onMouseLeave={leave}>
          {nav.map((item) =>
            item.key ? (
              <div key={item.label} className="relative" onMouseEnter={() => enter(item.key!)}>
                <Link
                  href={item.href}
                  aria-expanded={openKey === item.key}
                  className="flex h-10 items-center gap-1 rounded-lg px-3 text-[15px] font-medium transition"
                  style={{ background: openKey === item.key ? "var(--surface-2)" : "transparent" }}
                >
                  {item.label}
                  <ChevronDown size={14} style={{ transition: "transform 180ms", transform: openKey === item.key ? "rotate(180deg)" : "none", color: "var(--muted)" }} />
                </Link>
              </div>
            ) : item.href.startsWith("#") ? (
              <a key={item.label} href={item.href} className="flex h-10 items-center rounded-lg px-3 text-[15px] font-medium hover:bg-[var(--surface-2)]">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="flex h-10 items-center rounded-lg px-3 text-[15px] font-medium hover:bg-[var(--surface-2)]">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:block">
            <CalButton className="btn btn-primary" style={{ height: 42, padding: "0 18px", fontSize: 14 }}>
              Solicitar diagnóstico
            </CalButton>
          </span>
          <button aria-label="Abrir menu" onClick={() => setMobile(true)} className="flex h-10 w-10 items-center justify-center rounded-lg border lg:hidden" style={{ borderColor: "var(--border)" }}>
            <Menu size={20} />
          </button>
        </div>
      </div>

      {openKey && (
        <div className="absolute left-0 right-0 top-full hidden lg:block" onMouseEnter={() => enter(openKey)} onMouseLeave={leave}>
          <div className="container pt-2">
            <div className="card grid gap-8 p-8" style={{ gridTemplateColumns: "minmax(0,1fr) 300px", borderRadius: 16, boxShadow: "0 12px 32px rgba(0,0,0,.45)", animation: "fade-up 180ms var(--ease)" }}>
              <div>
                <p className="t-label-sm mb-3" style={{ color: "var(--muted)" }}>
                  {menus[openKey].heading}
                </p>
                <div className="grid gap-1" style={{ gridTemplateColumns: menus[openKey].links.length > 3 ? "1fr 1fr" : "1fr" }}>
                  {menus[openKey].links.map((l) => (
                    <MenuItem key={l.title} l={l} />
                  ))}
                </div>
              </div>
              <StartHere />
            </div>
          </div>
        </div>
      )}

      {mobile && (
        <div className="fixed inset-0 z-[75] flex flex-col lg:hidden" style={{ background: "var(--ink)" }}>
          <div className="container flex h-[72px] items-center justify-between" style={{ borderBottom: "1px solid var(--border)" }}>
            <Image src="/brand/escala/logo-escalahub-dark.svg" alt="Escala Hub" width={150} height={27} style={{ height: 26, width: "auto" }} />
            <button aria-label="Fechar menu" onClick={() => setMobile(false)} className="flex h-10 w-10 items-center justify-center rounded-lg border" style={{ borderColor: "var(--border)" }}>
              <X size={20} />
            </button>
          </div>
          <div className="container flex-1 overflow-y-auto py-4">
            {nav.map((item) => (
              <div key={item.label} style={{ borderBottom: "1px solid var(--border)" }}>
                {item.key ? (
                  <>
                    <button onClick={() => setMobileKey(mobileKey === item.key ? null : item.key!)} className="flex w-full items-center justify-between py-4 text-[17px] font-medium" aria-expanded={mobileKey === item.key}>
                      {item.label}
                      <ChevronDown size={18} style={{ transform: mobileKey === item.key ? "rotate(180deg)" : "none", transition: "transform 180ms", color: "var(--muted)" }} />
                    </button>
                    {mobileKey === item.key && (
                      <div className="flex flex-col gap-1 pb-4">
                        {menus[item.key].links.map((l) => (
                          <MenuItem key={l.title} l={l} />
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={item.href} onClick={() => setMobile(false)} className="block py-4 text-[17px] font-medium">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6">
              <StartHere compact />
            </div>
          </div>
          <div className="container py-4" style={{ borderTop: "1px solid var(--border)" }}>
            <CalButton className="btn btn-primary w-full">Solicitar diagnóstico</CalButton>
          </div>
        </div>
      )}
    </header>
  );
}
