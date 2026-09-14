import Image from "next/image";
import { logos } from "@/lib/content";

function Row() {
  return (
    <>
      {logos.map((l, i) => (
        <span key={`${l.alt}-${i}`} className="mx-10 flex shrink-0 items-center gap-2.5" style={{ height: 48, opacity: 0.75 }} title={l.alt}>
          <Image
            src={l.src}
            alt={l.alt}
            width={120}
            height={l.h}
            style={{ height: l.h, width: "auto", filter: l.mono ? "grayscale(1) brightness(1.9)" : undefined }}
            unoptimized={l.src.endsWith(".svg")}
          />
          {"label" in l && l.label && (
            <span className="text-[19px] font-semibold" style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}>
              {l.label}
            </span>
          )}
        </span>
      ))}
    </>
  );
}

export function LogoMarquee() {
  return (
    <section aria-label="Plataformas em que operamos" className="divider-y relative overflow-hidden" style={{ background: "var(--surface)" }}>
      <div className="container flex items-center gap-8 py-8">
        <p className="t-label-sm shrink-0" style={{ color: "var(--muted)", maxWidth: 160, lineHeight: 1.5 }}>
          Operamos e estruturamos em
        </p>
        <div className="marquee relative min-w-0 flex-1 overflow-hidden" style={{ maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)" }}>
          <div className="marquee-track items-center">
            <Row />
            <Row />
            <Row />
            <Row />
          </div>
        </div>
      </div>
    </section>
  );
}
