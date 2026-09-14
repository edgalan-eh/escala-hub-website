"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const KEY = "eh_buildbar_closed";

export function BuildBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = window.setTimeout(() => {
      let closed = false;
      try {
        closed = sessionStorage.getItem(KEY) === "1";
      } catch {}
      setShow(!closed);
    }, 0);
    return () => window.clearTimeout(id);
  }, []);
  if (!show) return null;
  return (
    <div
      className="t-label-sm relative flex h-9 items-center justify-center px-12 text-center"
      style={{ background: "var(--amber)", color: "var(--ink)" }}
    >
      Site em construção · Algumas páginas ainda não estão disponíveis
      <button
        aria-label="Fechar aviso"
        onClick={() => {
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {}
          setShow(false);
        }}
        className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded"
      >
        <X size={14} />
      </button>
    </div>
  );
}
