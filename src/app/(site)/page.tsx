import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Check,
  Handshake,
  ChevronDown,
  Headset,
  KeyRound,
  Lock,
  Percent,
  Ruler,
  ShieldCheck,
  Sparkles,
  Truck,
  Users,
} from "lucide-react";
import { canais, site } from "@/lib/site";
import { paginasCanal } from "@/lib/paginas-canal";
import { MarcaCanal, SeloStatus } from "@/components/Canal";
import { Simulador } from "@/components/Simulador";

const passos = [
  {
    titulo: "Conecte suas lojas",
    texto: "Você autoriza cada loja na página oficial do canal. O sistema traz anúncios, pedidos e taxas dos últimos 60 dias.",
  },
  {
    titulo: "Informe seus custos",
    texto: "Custo de compra, embalagem, kits e imposto. Dá para importar do Olist ou preencher direto no sistema.",
  },
  {
    titulo: "Acompanhe e aja",
    texto: "Veja a margem de cada pedido e produto, receba avisos do que precisa de atenção e resolva sem sair do sistema.",
  },
];

const seguranca = [
  {
    icone: KeyRound,
    titulo: "Sem senha da sua loja",
    texto: "A conexão é feita pela autorização oficial de cada canal. Você pode cancelar quando quiser, direto no canal.",
  },
  {
    icone: Lock,
    titulo: "Chaves de acesso cifradas",
    texto: "As chaves que os canais nos entregam ficam guardadas com criptografia AES-256-GCM.",
  },
  {
    icone: Users,
    titulo: "Cada conta vê só o que é seu",
    texto: "Os dados de cada empresa ficam separados por conta dentro do banco de dados.",
  },
  {
    icone: ShieldCheck,
    titulo: "Conexão sempre protegida",
    texto: "Todo o tráfego entre você, o sistema e os canais passa por HTTPS.",
  },
];

const perguntas = [
  {
    p: "Com quais canais o sistema funciona?",
    r: "Mercado Livre e Shopee já estão disponíveis. A Amazon está em fase de liberação. TikTok Shop e Shopify vêm em seguida. Para custos e estoque, o sistema também se conecta ao ERP Olist.",
  },
  {
    p: "Preciso passar a senha da minha loja?",
    r: "Não. Você autoriza o acesso na página oficial do canal, com o seu próprio login. O Escala Hub recebe só uma chave de acesso, que fica cifrada e pode ser cancelada por você a qualquer momento.",
  },
  {
    p: "O Escala Hub substitui o meu ERP?",
    r: "Não. Nota fiscal continua no seu ERP. O sistema conversa com o Olist para trazer custos e estoque. Quem não usa ERP pode controlar o estoque pelas compras lançadas no próprio sistema.",
  },
  {
    p: "A inteligência artificial pode inventar números?",
    r: "Os números de venda, taxa e margem vêm do cálculo do sistema, com os dados dos canais. A IA lê esses números e as fotos do anúncio para explicar e sugerir. Qualquer ação fora do sistema, como responder um cliente ou aplicar uma promoção, pede a sua confirmação.",
  },
  {
    p: "Como eu começo a usar?",
    r: "Nesta fase o acesso é por convite. Escreva para a gente contando onde você vende e retornamos com os próximos passos.",
  },
  {
    p: "Quanto custa?",
    r: "Os valores ainda não foram publicados. O modelo já está definido: você paga pelo tamanho da sua operação, e não por recurso liberado.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pb-16 pt-12 lg:pb-24 lg:pt-20">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <h1 className="h1">Saiba quanto sobra em cada pedido.</h1>
            <p className="lead mt-6">
              O Escala Hub junta suas lojas do Mercado Livre, Shopee e Amazon e mostra a margem real de cada venda.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.acesso} className="btn btn-primary">
                Pedir acesso <ArrowRight size={17} strokeWidth={2} aria-hidden />
              </a>
              <a href={site.app} className="btn btn-ghost">
                Entrar
              </a>
            </div>
          </div>
          <div className="reveal">
            <Simulador />
          </div>
        </div>
      </section>

      {/* Canais */}
      <section className="border-y border-line bg-surface py-10" aria-label="Canais conectados">
        <div className="wrap">
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5 lg:justify-between">
            {[...canais, { id: "olist", nome: "Olist", marca: "/canais/olist-mark.svg" }].map((c) => (
              <li key={c.id} className="flex items-center gap-3">
                <MarcaCanal src={c.marca} nome={c.nome} />
                <span className="text-[16px] font-semibold">{c.nome}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Recursos */}
      <section id="recursos" className="sec">
        <div className="wrap">
          <h2 className="h2 max-w-[22ch]">A operação inteira em um lugar só.</h2>
          <p className="lead mt-4">Do custo do produto ao atendimento depois da venda, sem planilha no meio do caminho.</p>

          <div className="mt-12 grid gap-4 lg:grid-cols-12">
            {/* Margem */}
            <article className="reveal rounded-[16px] bg-tile p-7 text-tile-text lg:col-span-7 lg:p-9">
              <h3 className="h3">Margem real por pedido</h3>
              <p className="mt-3 max-w-[52ch] text-tile-muted">
                Cada venda aparece com tarifa, frete pago por você, imposto, custo do produto e anúncio pago já descontados. Você enxerga o que vende
                bem e o que só parece vender bem.
              </p>
              <dl className="mt-8 grid gap-x-8 gap-y-4 border-t border-tile-line pt-6 sm:grid-cols-3">
                <div>
                  <dt className="text-[14px] text-tile-muted">Por pedido</dt>
                  <dd className="mt-1 font-medium">Cada taxa separada, linha a linha</dd>
                </div>
                <div>
                  <dt className="text-[14px] text-tile-muted">Por produto</dt>
                  <dd className="mt-1 font-medium">Vendas, lucro e margem lado a lado</dd>
                </div>
                <div>
                  <dt className="text-[14px] text-tile-muted">Por loja e canal</dt>
                  <dd className="mt-1 font-medium">Várias lojas no mesmo painel</dd>
                </div>
              </dl>
            </article>

            {/* Custos */}
            <article className="card reveal p-7 lg:col-span-5 lg:p-9" style={{ ["--i" as string]: 1 }}>
              <Calculator size={24} strokeWidth={1.75} className="text-accent" aria-hidden />
              <h3 className="h3 mt-5">Custos e precificação</h3>
              <p className="mt-3 text-muted">
                Custo de compra com impostos, embalagem, frete de entrada e kits montados a partir das peças. A calculadora de preço usa a tarifa e o
                frete reais do Mercado Livre.
              </p>
              <p className="small mt-5 text-muted">Mudou o custo de uma peça, todo kit que usa essa peça muda junto.</p>
            </article>

            {/* Anúncios */}
            <article className="reveal rounded-[16px] border border-line bg-ia-soft p-7 lg:col-span-5 lg:p-9">
              <span className="selo selo-ia gap-1.5 border border-current/20">
                <Sparkles size={13} strokeWidth={2} aria-hidden /> Com IA
              </span>
              <h3 className="h3 mt-5">Anúncios e diagnóstico</h3>
              <p className="mt-3 text-muted">
                Visitas, saúde, preço e histórico de cada anúncio. O diagnóstico com IA olha as fotos e os números e diz o que melhorar primeiro.
              </p>
              <p className="small mt-5 text-muted">Criar um anúncio novo também passa por aqui, do cadastro à publicação no Mercado Livre.</p>
            </article>

            {/* Pós-venda */}
            <article className="card reveal p-7 lg:col-span-7 lg:p-9" style={{ ["--i" as string]: 1 }}>
              <Headset size={24} strokeWidth={1.75} className="text-accent" aria-hidden />
              <h3 className="h3 mt-5">Pós-venda</h3>
              <p className="mt-3 max-w-[56ch] text-muted">
                Uma fila do dia com reclamações, mensagens e devoluções, cada uma com o prazo de resposta. A IA prepara um rascunho, você revisa e
                envia pelo próprio sistema.
              </p>
              <ul className="small mt-6 grid gap-2 text-muted sm:grid-cols-2">
                {["Reclamações com prazo à vista", "Devoluções conferidas no recebimento", "Custo de cada caso registrado", "Produtos que mais dão problema"].map(
                  (t) => (
                    <li key={t} className="flex items-start gap-2">
                      <Check size={17} strokeWidth={2} className="mt-[3px] shrink-0 text-ok" aria-hidden />
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </article>

            {/* Promoções */}
            <article className="card reveal p-7 lg:col-span-5 lg:p-9">
              <Percent size={24} strokeWidth={1.75} className="text-accent" aria-hidden />
              <h3 className="h3 mt-5">Promoções</h3>
              <p className="mt-3 text-muted">
                Veja as promoções que o Mercado Livre oferece, simule a margem de cada uma e aplique em lote, respeitando a margem mínima que você
                definiu.
              </p>
            </article>

            {/* Compras */}
            <article className="card reveal p-7 lg:col-span-7 lg:p-9" style={{ ["--i" as string]: 1 }}>
              <Truck size={24} strokeWidth={1.75} className="text-accent" aria-hidden />
              <h3 className="h3 mt-5">Compras</h3>
              <p className="mt-3 max-w-[56ch] text-muted">
                Fornecedores, pedidos de compra e lotes recebidos em um lugar só. O sistema avisa quando o estoque de um produto está curto para o
                ritmo de venda.
              </p>
            </article>

            {/* Produção */}
            <article className="quadriculado reveal overflow-hidden rounded-[16px] border border-line lg:col-span-12">
              <div className="grid gap-6 bg-gradient-to-r from-surface via-surface/95 to-surface/40 p-7 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:p-9">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Ruler size={24} strokeWidth={1.75} className="text-accent" aria-hidden />
                    <span className="selo selo-em-breve">Módulo opcional</span>
                  </div>
                  <h3 className="h3 mt-5">Produção e sob medida</h3>
                  <p className="mt-3 max-w-[58ch] text-muted">
                    Para quem fabrica: matérias-primas com histórico de preço, ficha de produção de cada produto e comparação entre fabricar e
                    comprar pronto.
                  </p>
                </div>
                <p className="max-w-[46ch] text-muted">
                  No sob medida, o orçamento já sai com desenho cotado e PDF para o cliente. Aprovou, vira ordem de produção pronta para imprimir.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="sec border-t border-line bg-surface">
        <div className="wrap">
          <h2 className="h2">Como funciona</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {passos.map((p, i) => (
              <li key={p.titulo} className="reveal border-t-2 border-text pt-6" style={{ ["--i" as string]: i }}>
                <h3 className="h3">{p.titulo}</h3>
                <p className="mt-3 text-muted">{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* IA */}
      <section className="sec">
        <div className="wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="selo selo-ia gap-1.5">
              <Sparkles size={13} strokeWidth={2} aria-hidden /> Inteligência artificial
            </span>
            <h2 className="h2 mt-5">Um assistente que conhece a sua operação.</h2>
            <p className="lead mt-4">
              Em qualquer tela, você abre uma conversa e pede o que precisa. O assistente encontra a informação, leva você até ela e prepara a ação.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Os números vêm do cálculo do sistema. A IA explica, não chuta.",
                "Antes de qualquer ação fora do sistema, ela pede a sua confirmação.",
                "Você ensina as regras da sua empresa e ela passa a seguir.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <Check size={19} strokeWidth={2} className="mt-[3px] shrink-0 text-ia" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card reveal p-6 shadow-[var(--shadow)] sm:p-8" aria-label="Exemplo de conversa com o assistente">
            <p className="small text-muted">Exemplo de conversa</p>
            <p className="mt-5 ml-auto w-fit max-w-[85%] rounded-[16px] rounded-br-[4px] bg-accent px-4 py-3 text-on-accent">
              Quais produtos venderam bem este mês mas deram pouca margem?
            </p>
            <div className="mt-4 max-w-[92%] rounded-[16px] rounded-bl-[4px] bg-ia-soft px-4 py-4">
              <p>Encontrei três produtos com muita venda e margem abaixo da sua faixa mínima. Nos três, o frete pago por você subiu.</p>
              <p className="mt-3">Quer que eu abra a lista em Produtos, já ordenada pela margem?</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="btn btn-primary btn-sm">Abrir a lista</span>
              <span className="btn btn-ghost btn-sm">Agora não</span>
            </div>
          </div>
        </div>
      </section>

      {/* Integrações */}
      <section className="sec border-t border-line bg-surface">
        <div className="wrap">
          <h2 className="h2 max-w-[24ch]">Integrações com os canais e com o seu ERP.</h2>
          <p className="lead mt-4">Cada loja é conectada pela autorização oficial do canal. Várias lojas do mesmo canal podem ficar na mesma conta.</p>

          <ul className="mt-10 grid gap-x-10 md:grid-cols-2">
            {canais.map((c) => (
              <li key={c.id} className="flex items-start gap-4 border-t border-line py-5">
                <MarcaCanal src={c.marca} nome={c.nome} />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-semibold">{c.nome}</p>
                    <SeloStatus status={c.status} />
                  </div>
                  <p className="small mt-1 text-muted">{c.resumo}</p>
                </div>
              </li>
            ))}
            <li className="flex items-start gap-4 border-t border-line py-5">
              <MarcaCanal src="/canais/olist-mark.svg" nome="Olist" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="font-semibold">Olist (ERP)</p>
                  <SeloStatus status="disponivel" />
                </div>
                <p className="small mt-1 text-muted">Catálogo, custos, composição de kits e estoque de cada empresa.</p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/integracoes" className="link inline-flex items-center gap-1.5">
              Ver todas as integrações <ArrowRight size={16} strokeWidth={2} aria-hidden />
            </Link>
            {paginasCanal.map((c) => (
              <Link key={c.id} href={`/integracoes/${c.id}`} className="link inline-flex items-center gap-1.5">
                Para quem vende {c.id === "mercado-livre" ? "no" : "na"} {c.nome} <ArrowRight size={16} strokeWidth={2} aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Segurança */}
      <section className="sec">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <h2 className="h2">Seus dados continuam seus.</h2>
            <p className="lead mt-4">Custo, margem e preço de compra são segredo do seu negócio. O sistema foi construído partindo disso.</p>
            <Link href="/privacidade" className="link mt-6 inline-flex items-center gap-1.5">
              Ler a Política de Privacidade <ArrowRight size={16} strokeWidth={2} aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {seguranca.map((s) => (
              <li key={s.titulo}>
                <s.icone size={22} strokeWidth={1.75} className="text-accent" aria-hidden />
                <p className="mt-3 font-semibold">{s.titulo}</p>
                <p className="small mt-1 text-muted">{s.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Planos */}
      <section id="planos" className="sec border-t border-line bg-surface">
        <div className="wrap">
          <div className="mx-auto max-w-[760px] text-center">
            <h2 className="h2">Você paga pelo tamanho da sua operação.</h2>
            <p className="lead mx-auto mt-4">
              O plano acompanha o número de lojas conectadas, de anúncios acompanhados e o uso de inteligência artificial. Os valores serão divulgados
              na abertura do sistema para novas contas.
            </p>
            <p className="mx-auto mt-6 max-w-[58ch] text-muted">
              Painéis, avisos, tabelas, tarefas e cálculos funcionam sempre. Só os recursos de IA consomem créditos.
            </p>
            <a href={site.acesso} className="btn btn-primary mt-8">
              Pedir acesso <ArrowRight size={17} strokeWidth={2} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Perguntas */}
      <section className="sec">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          <h2 className="h2">Perguntas frequentes</h2>
          <div>
            {perguntas.map((q) => (
              <details key={q.p} className="group border-t border-line last:border-b">
                <summary className="flex items-center justify-between gap-6 py-5 text-[17px] font-semibold">
                  {q.p}
                  <ChevronDown size={20} strokeWidth={2} className="shrink-0 text-muted transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <p className="max-w-[68ch] pb-6 text-muted">{q.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Consultoria */}
      <section id="consultoria" className="sec border-t border-line bg-surface">
        <div className="wrap grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Handshake size={26} strokeWidth={1.75} className="text-accent" aria-hidden />
            <h2 className="h2 mt-5 max-w-[22ch]">Precisa de alguém ao lado da sua operação?</h2>
            <p className="lead mt-4">
              A Escala Hub também faz consultoria: mentoria para marketplaces, criação e gestão de e-commerce e construção de marca, com o mesmo
              time que construiu o sistema.
            </p>
          </div>
          <div className="lg:justify-self-end">
            <a href="/consultoria" className="btn btn-ghost">
              Conhecer a consultoria <ArrowRight size={17} strokeWidth={2} aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section className="py-16 lg:py-24">
        <div className="wrap">
          <div className="rounded-[16px] bg-tile px-7 py-12 text-tile-text sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:py-14">
            <div>
              <h2 className="h2">Quer ver a margem real da sua loja?</h2>
              <p className="mt-3 max-w-[54ch] text-tile-muted">Conte onde você vende e a gente retorna com os próximos passos.</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 lg:mt-0 lg:shrink-0">
              <a href={site.acesso} className="btn bg-[#fdfdfe] text-[#0f1b33] hover:bg-[#e6ebfb]">
                Pedir acesso <ArrowRight size={17} strokeWidth={2} aria-hidden />
              </a>
              <a href={site.app} className="btn border border-tile-line text-tile-text hover:border-tile-muted">
                Entrar
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
