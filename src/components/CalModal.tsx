"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { X } from "lucide-react";
import { site } from "@/lib/site";

type Ctx = { open: () => void; close: () => void };
const CalCtx = createContext<Ctx>({ open: () => {}, close: () => {} });

export function useCal() {
  return useContext(CalCtx);
}

export function CalModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  return (
    <CalCtx.Provider value={{ open, close }}>
      {children}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Agendar diagnóstico gratuito"
          onClick={close}
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          style={{ background: "var(--overlay)", backdropFilter: "blur(6px)", animation: "fade-up 200ms var(--ease)" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="card relative flex w-full max-w-[900px] flex-col overflow-hidden"
            style={{ height: "min(640px, 90vh)", borderRadius: 16 }}
          >
            <div className="flex items-start justify-between gap-4 border-b px-6 py-5" style={{ borderColor: "var(--border)" }}>
              <div>
                <p className="eyebrow">Diagnóstico gratuito · 45 min</p>
                <p className="t-small mt-1" style={{ color: "var(--muted)" }}>
                  Escolha um horário. Sem compromisso.
                </p>
              </div>
              <button
                onClick={close}
                aria-label="Fechar"
                className="flex h-9 w-9 items-center justify-center rounded-lg border"
                style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}
              >
                <X size={16} />
              </button>
            </div>
            <div className="relative flex-1" style={{ background: "var(--ink)" }}>
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="t-label-sm" style={{ color: "var(--dim)" }}>
                    Carregando agenda…
                  </span>
                </div>
              )}
              <iframe
                src={site.calEmbed}
                title="Agenda Cal.com"
                onLoad={() => setLoaded(true)}
                className="h-full w-full"
                style={{ border: 0, opacity: loaded ? 1 : 0, transition: "opacity 300ms" }}
                allow="camera; microphone; fullscreen"
              />
            </div>
            <div className="border-t px-6 py-3" style={{ borderColor: "var(--border)" }}>
              <a href={site.cal} target="_blank" rel="noopener" className="t-label-sm" style={{ color: "var(--muted)" }}>
                Não carregou? Abrir agenda em nova aba →
              </a>
            </div>
          </div>
        </div>
      )}
    </CalCtx.Provider>
  );
}

export function CalButton({ children, className = "btn btn-primary", ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open } = useCal();
  return (
    <button type="button" onClick={open} className={className} {...rest}>
      {children}
    </button>
  );
}
