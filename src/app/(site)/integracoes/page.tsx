import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { canais, site } from "@/lib/site";
import { MarcaCanal, SeloStatus } from "@/components/Canal";

export const metadata: Metadata = {
  title: "Integrações",
  description:
    "Como o Escala Hub se conecta ao Mercado Livre, Shopee, Amazon e ao ERP Olist: o que o sistema lê de cada canal e o que entrega para o vendedor.",
};

const detalhes: Record<string, { le: string[]; entrega: string[] }> = {
  "mercado-livre": {
    le: ["Anúncios, variações, fotos, preço e estoque", "Pedidos, tarifas e frete pago pelo vendedor", "Gasto com Mercado Ads por anúncio", "Reclamações, mensagens e perguntas", "Promoções disponíveis"],
    entrega: ["Margem real por pedido e por produto", "Diagnóstico de anúncios com IA", "Fila de pós-venda com resposta pelo sistema", "Promoções aplicadas com margem mínima protegida", "Publicação de anúncios novos"],
  },
  shopee: {
    le: ["Anúncios e variações", "Pedidos dos últimos 60 dias e novos pedidos", "Taxas e repasse de cada venda"],
    entrega: ["Margem real por pedido e por produto", "Produtos da Shopee ligados ao mesmo cadastro dos outros canais", "Visão somada com as demais lojas"],
  },
  amazon: {
    le: ["Anúncios (ofertas por SKU) e fotos do catálogo", "Estoque no FBA", "Pedidos dos últimos 60 dias e novos pedidos", "Taxas cobradas em cada venda"],
    entrega: ["Margem real por pedido e por produto", "Estoque do FBA ao lado do estoque próprio", "Visão somada com Mercado Livre e Shopee"],
  },
};

export default function Page() {
  return (
    <>
      <section className="pb-6 pt-14 lg:pt-20">
        <div className="wrap">
          <h1 className="h1 max-w-[18ch]">Integrações</h1>
          <p className="lead mt-5">
            O Escala Hub se conecta às suas lojas e ao seu ERP, lê os dados de venda e devolve a margem real, os avisos e as ações em um painel só.
          </p>
        </div>
      </section>

      <section className="pb-10">
        <div className="wrap space-y-4">
          {canais
            .filter((c) => detalhes[c.id])
            .map((c) => (
              <article key={c.id} id={c.id} className="card reveal scroll-mt-24 p-7 lg:p-9">
                <div className="flex flex-wrap items-center gap-4">
                  <MarcaCanal src={c.marca} nome={c.nome} />
                  <h2 className="h3 text-[24px]">{c.nome}</h2>
                  <SeloStatus status={c.status} />
                </div>

                <div className="mt-7 grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="text-[15px] font-semibold">O que o sistema lê</p>
                    <ul className="mt-3 space-y-2 text-muted">
                      {detalhes[c.id].le.map((t) => (
                        <li key={t} className="flex items-start gap-2.5">
                          <Check size={17} strokeWidth={2} className="mt-[5px] shrink-0 text-muted" aria-hidden />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold">O que você recebe</p>
                    <ul className="mt-3 space-y-2 text-muted">
                      {detalhes[c.id].entrega.map((t) => (
                        <li key={t} className="flex items-start gap-2.5">
                          <Check size={17} strokeWidth={2} className="mt-[5px] shrink-0 text-ok" aria-hidden />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link href={`/integracoes/${c.id}`} className="link mt-7 inline-flex items-center gap-1.5">
                  Ver a página completa para quem vende {c.id === "mercado-livre" ? "no" : "na"} {c.nome} <ArrowRight size={16} strokeWidth={2} aria-hidden />
                </Link>
              </article>
            ))}
        </div>
      </section>

      <section className="pb-10">
        <div className="wrap grid gap-4 md:grid-cols-[1.4fr_1fr]">
          <article id="olist" className="card reveal scroll-mt-24 p-7 lg:p-9">
            <div className="flex flex-wrap items-center gap-4">
              <MarcaCanal src="/canais/olist-mark.svg" nome="Olist" />
              <h2 className="h3 text-[24px]">Olist (ERP)</h2>
              <SeloStatus status="disponivel" />
            </div>
            <p className="mt-5 max-w-[60ch] text-muted">
              Cada empresa (CNPJ) conecta a própria conta do Olist. O sistema importa o catálogo, os custos, a composição dos kits e o estoque. A
              emissão de nota fiscal continua no ERP.
            </p>
          </article>

          <article className="reveal rounded-[16px] bg-surface-2 p-7 lg:p-9" style={{ ["--i" as string]: 1 }}>
            <h2 className="h3">Em breve</h2>
            <ul className="mt-5 space-y-4">
              {canais
                .filter((c) => c.status === "em-breve")
                .map((c) => (
                  <li key={c.id} className="flex items-center gap-3">
                    <MarcaCanal src={c.marca} nome={c.nome} />
                    <div>
                      <p className="font-semibold">{c.nome}</p>
                      <p className="small text-muted">{c.resumo}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="wrap">
          <div className="border-t border-line pt-10">
            <h2 className="h2 max-w-[24ch]">Como a conexão é feita</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <div>
                <p className="font-semibold">Autorização oficial</p>
                <p className="small mt-2 text-muted">
                  Você faz login na página do próprio canal e autoriza o acesso. O Escala Hub nunca vê a sua senha.
                </p>
              </div>
              <div>
                <p className="font-semibold">Chave guardada com criptografia</p>
                <p className="small mt-2 text-muted">
                  A chave de acesso que o canal entrega fica cifrada com AES-256-GCM e só é usada para buscar os dados da sua loja.
                </p>
              </div>
              <div>
                <p className="font-semibold">Você desconecta quando quiser</p>
                <p className="small mt-2 text-muted">
                  Dá para desligar a loja no sistema ou cancelar a autorização no painel do canal. O acesso para na hora.
                </p>
              </div>
            </div>
            <a href={site.acesso} className="btn btn-primary mt-10">
              Pedir acesso <ArrowRight size={17} strokeWidth={2} aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
