import { site } from "@/lib/site";
import { Logo } from "./Logo";

const grupos = [
  {
    titulo: "Produto",
    itens: [
      { href: "/#recursos", rotulo: "Recursos" },
      { href: "/integracoes", rotulo: "Integrações" },
      { href: "/#planos", rotulo: "Planos" },
      { href: "/consultoria", rotulo: "Consultoria" },
    ],
  },
  {
    titulo: "Para quem vende",
    itens: [
      { href: "/integracoes/mercado-livre", rotulo: "No Mercado Livre" },
      { href: "/integracoes/shopee", rotulo: "Na Shopee" },
      { href: "/integracoes/amazon", rotulo: "Na Amazon" },
    ],
  },
  {
    titulo: "Legal",
    itens: [
      { href: "/privacidade", rotulo: "Política de Privacidade" },
      { href: "/termos", rotulo: "Termos de Uso" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-2">
      <div className="wrap grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="small mt-4 max-w-[34ch] text-muted">Sistema de gestão para quem vende em marketplaces.</p>
        </div>

        {grupos.map((g) => (
          <nav key={g.titulo} aria-label={g.titulo}>
            <p className="text-[14px] font-semibold">{g.titulo}</p>
            <ul className="mt-3 space-y-2">
              {g.itens.map((i) => (
                <li key={i.href}>
                  <a href={i.href} className="small text-muted transition-colors hover:text-text">
                    {i.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <p className="text-[14px] font-semibold">Contato</p>
          <ul className="mt-3 space-y-2">
            <li>
              <a href={`mailto:${site.email}`} className="small break-all text-muted transition-colors hover:text-text">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.app} className="small text-muted transition-colors hover:text-text">
                Entrar no sistema
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap py-6">
          <p className="text-[13px] leading-relaxed text-muted">
            {site.legalName} CNPJ {site.cnpj}. {site.address}.
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-muted">
            Mercado Livre, Shopee, Amazon, TikTok Shop, Shopify e Olist são marcas dos seus titulares, citadas apenas para indicar as plataformas com
            que o sistema se conecta. Não há vínculo societário, patrocínio ou endosso.
          </p>
        </div>
      </div>
    </footer>
  );
}
