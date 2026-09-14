import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Política de Privacidade" };

export default function Page() {
  return (
    <LegalPage title="Política de Privacidade" updated="14 de setembro de 2026">
      <>
        <h2 className="t-h3 mt-10">1. Quem somos</h2>
        <p className="mt-4">Escala Hub Consultoria e Negócios Ltda. (&quot;Escala Hub&quot;), CNPJ 54.988.708/0001-21, com sede na Av. Paulista, 1636, Sala 1504/749, Bela Vista, São Paulo/SP, CEP 01310-200, é a controladora dos dados pessoais tratados neste site (escalahub.com.br). Contato do encarregado (DPO): contato@escalahub.com.br.</p>
        <h2 className="t-h3 mt-10">2. Quais dados coletamos</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
        <li><strong>Dados que você informa:</strong> nome, e-mail, telefone/WhatsApp, empresa, canal de venda e faturamento aproximado, ao agendar um diagnóstico, usar a calculadora, assinar a newsletter ou entrar em contato.</li>
        <li><strong>Dados de navegação:</strong> endereço IP, páginas visitadas, origem do acesso, dispositivo e navegador, por meio de cookies e ferramentas de analytics.</li>
        <li><strong>Agendamento:</strong> o agendamento é processado pela plataforma Cal.com, sujeita à política de privacidade própria.</li>
        </ul>
        <h2 className="t-h3 mt-10">3. Para que usamos</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>Responder ao seu contato e realizar o diagnóstico solicitado.</li>
        <li>Enviar conteúdo, materiais e ofertas da Escala Hub, quando você autorizar.</li>
        <li>Medir e melhorar o site.</li>
        <li>Cumprir obrigações legais.</li>
        </ul>
        <p className="mt-4">Bases legais: execução de contrato ou procedimentos preliminares (art. 7º, V), consentimento (art. 7º, I) e legítimo interesse (art. 7º, IX) da Lei 13.709/2018.</p>
        <h2 className="t-h3 mt-10">4. Com quem compartilhamos</h2>
        <p className="mt-4">Fornecedores que operam o site e o atendimento: hospedagem (Vercel), agenda (Cal.com), e-mail transacional, analytics (Google Analytics, Vercel Analytics), WhatsApp (Meta). Não vendemos dados pessoais.</p>
        <h2 className="t-h3 mt-10">5. Cookies</h2>
        <p className="mt-4">Usamos cookies essenciais (funcionamento) e, com seu consentimento, cookies de analytics e marketing. Você pode alterar sua escolha a qualquer momento no rodapé do site ou nas configurações do navegador.</p>
        <h2 className="t-h3 mt-10">6. Por quanto tempo guardamos</h2>
        <p className="mt-4">Leads e contatos: até 24 meses após a última interação, salvo relação contratual. Dados de navegação: até 13 meses. Obrigações legais: pelo prazo exigido.</p>
        <h2 className="t-h3 mt-10">7. Seus direitos</h2>
        <p className="mt-4">Confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação, informação sobre compartilhamento e revogação do consentimento (art. 18 da LGPD). Pedidos: contato@escalahub.com.br. Respondemos em até 15 dias.</p>
        <h2 className="t-h3 mt-10">8. Segurança</h2>
        <p className="mt-4">Adotamos medidas técnicas e administrativas para proteger os dados. Transmissão criptografada (HTTPS) e acesso restrito.</p>
        <h2 className="t-h3 mt-10">9. Transferência internacional</h2>
        <p className="mt-4">Alguns fornecedores armazenam dados fora do Brasil (EUA), com garantias contratuais adequadas.</p>
        <h2 className="t-h3 mt-10">10. Alterações</h2>
        <p className="mt-4">Esta política pode ser atualizada. A data no topo indica a versão vigente.</p>
      </>
    </LegalPage>
  );
}
