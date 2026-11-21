"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ShieldCheck } from "lucide-react";

const KEY = "eh_cookie_consent";
const YEAR = 365 * 24 * 60 * 60 * 1000;

export function CookieConsent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => {
      let needs = true;
      try {
        const raw = localStorage.getItem(KEY);
        const data = raw ? (JSON.parse(raw) as { t: number }) : null;
        needs = !data || Date.now() - data.t > YEAR;
      } catch {}
      if (needs) setShow(true);
    }, 1000);
    return () => window.clearTimeout(id);
  }, []);

  const choose = (value: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ v: value, t: Date.now() }));
    } catch {}
    setShow(false);
  };

  if (!show) return null;
  return (
    <div
      role="region"
      aria-label="Consentimento de cookies"
      className="card fixed left-4 bottom-4 z-[85] w-[min(360px,calc(100vw-32px))] p-5"
      style={{ boxShadow: "0 12px 32px rgba(0,0,0,.45)", animation: "fade-up 300ms var(--ease)" }}
    >
      <div className="flex gap-3">
        <ShieldCheck size={22} style={{ color: "var(--amber)", flex: "0 0 22px" }} aria-hidden="true" />
        <div className="flex flex-col gap-1.5">
          <h3 className="text-base font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
            Sua privacidade
          </h3>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Usamos cookies para melhorar sua experiência e medir o site. Você escolhe.
          </p>
        </div>
      </div>
      <div className="t-label-sm mt-4 flex gap-3" style={{ color: "var(--muted)" }}>
        <Link href="/privacidade" className="hover:text-[var(--text)]">
          Política de Privacidade
        </Link>
        <span>·</span>
        <Link href="/termos" className="hover:text-[var(--text)]">
          Termos de Uso
        </Link>
      </div>
      <div className="mt-4 flex gap-2">
        <button onClick={() => choose("all")} className="btn btn-primary btn-sm">
          Aceitar
        </button>
        <button onClick={() => choose("essential")} className="btn btn-secondary btn-sm">
          Só essenciais
        </button>
      </div>
    </div>
  );
}
