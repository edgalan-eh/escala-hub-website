/* eslint-disable @next/next/no-img-element */
import { rotuloStatus, type StatusCanal } from "@/lib/site";

export function MarcaCanal({ src, nome }: { src: string; nome: string }) {
  return (
    <span className="marca-canal">
      <img src={src} alt={`Logo ${nome}`} width={26} height={26} />
    </span>
  );
}

export function SeloStatus({ status }: { status: StatusCanal }) {
  return <span className={`selo selo-${status}`}>{rotuloStatus[status]}</span>;
}
