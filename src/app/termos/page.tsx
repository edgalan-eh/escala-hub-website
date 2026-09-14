import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Termos de Uso" };

export default function Page() {
  return (
    <LegalPage title="Termos de Uso" updated="14 de setembro de 2026">
      <>
        <h2 className="t-h3 mt-10">1. Aceitação</h2>
        <p className="mt-4">Ao acessar escalahub.com.br você concorda com estes Termos e com a Política de Privacidade. O site é operado pela Escala Hub Consultoria e Negócios Ltda. (&quot;Escala Hub&quot;), CNPJ 54.988.708/0001-21, Av. Paulista, 1636, Sala 1504/749, Bela Vista, São Paulo/SP, CEP 01310-200.</p>
        <h2 className="t-h3 mt-10">2. O que o site oferece</h2>
        <p className="mt-4">Informações sobre os serviços de consultoria, criação e gestão de e-commerce, construção de marca e ferramentas da Escala Hub; agendamento de diagnóstico; conteúdo e calculadoras de uso gratuito.</p>
        <h2 className="t-h3 mt-10">3. Diagnóstico gratuito</h2>
        <p className="mt-4">O diagnóstico é uma conversa inicial sem custo e sem compromisso. Não constitui proposta comercial, garantia de resultado ou prestação de serviço. Propostas, escopo, preços e condições são formalizados em contrato próprio.</p>
        <h2 className="t-h3 mt-10">4. Ferramentas e conteúdo</h2>
        <p className="mt-4">Calculadoras, artigos e materiais são fornecidos &quot;como estão&quot;, para fins informativos. Resultados de calculadoras dependem dos dados informados e das regras vigentes de cada marketplace, que mudam sem aviso. A Escala Hub não se responsabiliza por decisões tomadas com base nesses materiais.</p>
        <h2 className="t-h3 mt-10">5. Propriedade intelectual</h2>
        <p className="mt-4">Marca, logo, textos, imagens, código e materiais do site pertencem à Escala Hub ou a seus licenciadores. Uso permitido apenas para fins pessoais e não comerciais. Marcas de terceiros citadas (Mercado Livre, Amazon, Shopee, TikTok Shop, Shopify, WooCommerce, NuvemShop, Tray, Bling, Olist) pertencem aos seus titulares e são mencionadas apenas para identificar plataformas com as quais trabalhamos; não há vínculo, patrocínio ou endosso.</p>
        <h2 className="t-h3 mt-10">6. Conduta do usuário</h2>
        <p className="mt-4">É vedado usar o site para fins ilícitos, tentar acessar áreas restritas, extrair dados automaticamente ou prejudicar seu funcionamento.</p>
        <h2 className="t-h3 mt-10">7. Links externos</h2>
        <p className="mt-4">O site contém links para terceiros (Cal.com, WhatsApp, metrihub.com.br, redes sociais). Não nos responsabilizamos por conteúdo ou políticas desses sites.</p>
        <h2 className="t-h3 mt-10">8. Limitação de responsabilidade</h2>
        <p className="mt-4">O site pode ficar indisponível ou conter imprecisões. Na extensão permitida pela lei, a Escala Hub não responde por danos indiretos decorrentes do uso do site.</p>
        <h2 className="t-h3 mt-10">9. Alterações</h2>
        <p className="mt-4">Podemos alterar estes Termos a qualquer momento. A versão vigente é a publicada nesta página.</p>
        <h2 className="t-h3 mt-10">10. Lei e foro</h2>
        <p className="mt-4">Lei brasileira. Foro da comarca de São Paulo/SP, salvo disposição legal em contrário.</p>
      </>
    </LegalPage>
  );
}
