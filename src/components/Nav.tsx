import Link from "next/link";
import { Handshake, Menu } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

const links = [
  { href: "/#recursos", rotulo: "Recursos" },
  { href: "/integracoes", rotulo: "Integrações" },
  { href: "/#planos", rotulo: "Planos" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="wrap flex h-[68px] items-center justify-between gap-4">
        <Link href="/" aria-label="Escala Hub, página inicial" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] font-medium text-muted transition-colors hover:text-text">
              {l.rotulo}
            </Link>
          ))}
          <a href="/consultoria" className="inline-flex items-center gap-2 text-[15px] font-medium text-muted transition-colors hover:text-text">
            <Handshake size={17} strokeWidth={1.75} aria-hidden /> Consultoria
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.app} className="btn btn-ghost btn-sm">
            Entrar
          </a>
          <a href={site.acesso} className="btn btn-primary btn-sm hidden sm:inline-flex">
            Pedir acesso
          </a>

          <details className="relative lg:hidden">
            <summary aria-label="Abrir menu" className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface">
              <Menu size={18} strokeWidth={2} aria-hidden />
            </summary>
            <div className="card absolute right-0 top-12 z-50 w-[min(320px,calc(100vw-40px))] p-2 shadow-[var(--shadow)]">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="block rounded-[10px] px-4 py-3 text-[15px] font-medium hover:bg-surface-2">
                  {l.rotulo}
                </Link>
              ))}
              <a href="/consultoria" className="flex items-center gap-2 rounded-[10px] px-4 py-3 text-[15px] font-medium hover:bg-surface-2">
                <Handshake size={17} strokeWidth={1.75} aria-hidden /> Consultoria
              </a>
              <a href={site.acesso} className="btn btn-primary mt-2 w-full sm:hidden">
                Pedir acesso
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
