import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Boxes, Check, Headset, Layers, Percent, Receipt, Tags, X } from "lucide-react";
import { site } from "@/lib/site";
import { paginasCanal } from "@/lib/paginas-canal";
import { MarcaCanal, SeloStatus } from "@/components/Canal";

const icones = { pedido: Receipt, caixas: Boxes, camadas: Layers, anuncio: Tags, atendimento: Headset, promocao: Percent };

export const dynamicParams = false;

export function generateStaticParams() {
  return paginasCanal.map((c) => ({ canal: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ canal: string }> }): Promise<Metadata> {
  const { canal } = await params;
  const c = paginasCanal.find((x) => x.id === canal);
  if (!c) return {};
  return { title: c.titulo.replace(/\.$/, ""), description: c.descricao };
}

export default async function Page({ params }: { params: Promise<{ canal: string }> }) {
  const { canal } = await params;
  const c = paginasCanal.find((x) => x.id === canal);
  if (!c) notFound();
  const quatro = c.servicos.length === 4;

  return (
    <>
      <section className="pb-14 pt-14 lg:pb-20 lg:pt-20">
        <div className="wrap">
          <div className="flex flex-wrap items-center gap-4">
            <MarcaCanal src={c.marca} nome={c.nome} />
            <SeloStatus status={c.status} />
          </div>
          <h1 className="h1 mt-6 max-w-[20ch]">{c.titulo}</h1>
          <p className="lead mt-5">{c.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={site.acesso} className="btn btn-primary">
              Pedir acesso <ArrowRight size={17} strokeWidth={2} aria-hidden />
            </a>
            <a href={site.app} className="btn btn-ghost">
              Entrar
            </a>
          </div>
          {c.aviso && <p className="small mt-6 max-w-[64ch] text-muted">{c.aviso}</p>}
        </div>
      </section>

      {/* O serviço */}
      <section className="sec border-t border-line bg-surface">
        <div className="wrap">
          <h2 className="h2 max-w-[24ch]">O que o sistema faz por quem vende {c.id === "mercado-livre" ? "no" : "na"} {c.nome}</h2>
          <div className={`mt-12 grid gap-10 md:gap-8 ${quatro ? "md:grid-cols-2 lg:gap-x-16 lg:gap-y-12" : "md:grid-cols-3"}`}>
            {c.servicos.map((s, i) => {
              const Icone = icones[s.icone];
              return (
                <div key={s.titulo} className="reveal" style={{ ["--i" as string]: i }}>
                  <Icone size={26} strokeWidth={1.75} className="text-accent" aria-hidden />
                  <h3 className="h3 mt-5">{s.titulo}</h3>
                  <p className="mt-3 max-w-[52ch] text-muted">{s.texto}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dados */}
      <section className="sec">
        <div className="wrap grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <div>
            <h2 className="h2">Quais dados {c.id === "mercado-livre" ? "do" : "da"} {c.nome} o sistema usa</h2>
            <p className="lead mt-4">Só o necessário para prestar o serviço. Cada dado tem um uso definido.</p>
            <dl className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {c.dados.map((d) => (
                <div key={d.nome}>
                  <dt className="font-semibold">{d.nome}</dt>
                  <dd className="small mt-1 text-muted">{d.uso}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside className="reveal self-start rounded-[16px] bg-tile p-7 text-tile-text lg:p-9">
            <h3 className="h3">O que o sistema não faz</h3>
            <ul className="mt-6 space-y-4 text-tile-muted">
              {c.limites.map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <X size={18} strokeWidth={2} className="mt-[4px] shrink-0" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Conexão */}
      <section className="sec border-t border-line bg-surface">
        <div className="wrap">
          <h2 className="h2">Como conectar a sua conta</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {c.passos.map((p, i) => (
              <li key={p.t} className="reveal border-t-2 border-text pt-6" style={{ ["--i" as string]: i }}>
                <h3 className="h3">{p.t}</h3>
                <p className="mt-3 text-muted">{p.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 max-w-[70ch] text-muted">{c.desconectar}</p>
        </div>
      </section>

      {/* Segurança */}
      <section className="sec">
        <div className="wrap grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <h2 className="h2">Como os dados são protegidos</h2>
            <Link href="/privacidade" className="link mt-6 inline-flex items-center gap-1.5">
              Ler a Política de Privacidade <ArrowRight size={16} strokeWidth={2} aria-hidden />
            </Link>
          </div>
          <ul className="space-y-5">
            {[
              ["Chave de acesso cifrada", `A chave que ${c.id === "mercado-livre" ? "o" : "a"} ${c.nome} entrega ao sistema fica guardada com criptografia AES-256-GCM.`],
              ["Dados separados por conta", "Os dados de cada empresa ficam isolados. Uma conta nunca enxerga os dados de outra."],
              ["Tráfego só por HTTPS", "Toda comunicação entre você, o sistema e a plataforma é criptografada em trânsito."],
              ["Uso restrito ao serviço", "Os dados são usados apenas para mostrar a sua própria operação a você e à sua equipe."],
            ].map(([t, d]) => (
              <li key={t} className="flex items-start gap-3">
                <Check size={20} strokeWidth={2} className="mt-[3px] shrink-0 text-ok" aria-hidden />
                <p>
                  <span className="font-semibold">{t}.</span> <span className="text-muted">{d}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
        <div className="wrap">
          <div className="rounded-[16px] bg-tile px-7 py-12 text-tile-text sm:px-12 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <h2 className="h2">{c.chamada}</h2>
              <p className="mt-3 max-w-[56ch] text-tile-muted">Escreva para {site.email} contando onde você vende. Retornamos com os próximos passos.</p>
            </div>
            <a href={site.acesso} className="btn mt-8 bg-[#fdfdfe] text-[#0f1b33] hover:bg-[#e6ebfb] lg:mt-0 lg:shrink-0">
              Pedir acesso <ArrowRight size={17} strokeWidth={2} aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
