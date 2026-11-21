"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Liga a entrada suave dos blocos `.reveal` quando entram na tela. */
export function RevealObserver() {
  const caminho = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    const reserva = window.setTimeout(() => els.forEach((el) => el.classList.add("is-in")), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(reserva);
    };
  }, [caminho]);

  return null;
}
