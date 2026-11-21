import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como o Escala Hub trata os dados de quem visita o site, de quem usa o sistema e os dados vindos dos marketplaces conectados.",
};

export default function Page() {
  const mail = <a href={`mailto:${site.email}`}>{site.email}</a>;
  return (
    <LegalPage title="Política de Privacidade" updated="21 de novembro de 2026">
      <h2>1. Quem somos</h2>
      <p>
        {site.legalName} (&quot;Escala Hub&quot;), CNPJ {site.cnpj}, com sede na {site.address}. Esta política vale para o site escalahub.com.br e
        para o sistema Escala Hub, disponível em app.escalahub.com.br.
      </p>
      <p>Contato do encarregado pelo tratamento de dados pessoais: {mail}.</p>

      <h2>2. Nosso papel no tratamento dos dados</h2>
      <ul>
        <li>
          <strong>Controladora</strong> dos dados de quem visita o site e dos dados de cadastro dos usuários do sistema (nome, e-mail e empresa).
        </li>
        <li>
          <strong>Operadora</strong> dos dados que cada cliente traz para o sistema ao conectar as suas lojas e o seu ERP. Esses dados pertencem ao
          cliente, e nós os tratamos apenas para prestar o serviço contratado.
        </li>
      </ul>

      <h2>3. Quais dados tratamos</h2>
      <h3>No site</h3>
      <ul>
        <li>Dados que você envia ao entrar em contato por e-mail: nome, e-mail e o conteúdo da mensagem.</li>
        <li>
          Na página de consultoria, dados que você informa ao agendar uma conversa (pela plataforma Cal.com) ou ao falar pelo WhatsApp: nome,
          e-mail, telefone, empresa e canal de venda. Essa página pede o seu consentimento antes de usar cookies que não sejam essenciais.
        </li>
        <li>
          Estatísticas de acesso sem identificação pessoal (páginas vistas, país, tipo de aparelho), coletadas pelo Vercel Analytics. O site não usa
          cookies de publicidade.
        </li>
      </ul>
      <h3>No sistema</h3>
      <ul>
        <li>
          <strong>Dados de conta:</strong> nome, e-mail, senha (guardada de forma irreversível), empresa, papel de cada usuário e registros de
          acesso.
        </li>
        <li>
          <strong>Dados do seu negócio:</strong> produtos, custos, fornecedores, preços, orçamentos, tarefas e arquivos que você cadastra ou
          importa.
        </li>
        <li>
          <strong>Dados dos canais de venda conectados:</strong> anúncios, estoque, pedidos, itens, valores, tarifas, frete, promoções, reclamações
          e mensagens de pós-venda, conforme o canal.
        </li>
        <li>
          <strong>Chaves de acesso dos canais e do ERP:</strong> as credenciais que cada plataforma entrega quando você autoriza a conexão.
        </li>
        <li>
          <strong>Conversas com a inteligência artificial:</strong> as perguntas que você faz, os arquivos que anexa e as respostas geradas.
        </li>
      </ul>

      <h2>4. Dados vindos dos marketplaces</h2>
      <p>
        O sistema acessa cada canal pela interface oficial para desenvolvedores, somente depois que o titular da loja autoriza, e somente para
        mostrar a operação daquela loja ao próprio vendedor e à equipe dele.
      </p>
      <h3>Amazon</h3>
      <ul>
        <li>
          Usamos a Selling Partner API para ler anúncios, fotos do catálogo, estoque no FBA, pedidos (número, data, situação, itens e valores) e as
          taxas de cada pedido.
        </li>
        <li>
          <strong>Não guardamos nome, endereço, telefone nem e-mail de compradores da Amazon.</strong> O sistema não solicita essas informações.
        </li>
        <li>A conexão é de leitura. O sistema não altera anúncios, preços nem estoque na Amazon.</li>
        <li>
          Os dados da Amazon não são vendidos, não são usados para publicidade e não são compartilhados com outros vendedores nem combinados com
          dados de outras contas.
        </li>
      </ul>
      <h3>Mercado Livre</h3>
      <ul>
        <li>
          Lemos anúncios, pedidos, tarifas, frete, gasto com Mercado Ads, promoções, reclamações, mensagens e perguntas. Com a sua confirmação a
          cada ação, o sistema também pode responder clientes, aplicar promoções e publicar anúncios em seu nome.
        </li>
        <li>
          Os pedidos do Mercado Livre trazem o nome e o apelido do comprador. Esses dados são usados apenas para você identificar o pedido e atender
          o pós-venda dentro do sistema.
        </li>
      </ul>
      <h3>Shopee</h3>
      <ul>
        <li>
          Lemos anúncios, pedidos e as taxas de cada venda. Os pedidos trazem o nome de usuário do comprador na Shopee, usado apenas para
          identificar o pedido.
        </li>
      </ul>
      <h3>Olist (ERP)</h3>
      <ul>
        <li>Lemos catálogo, custos, composição de kits, fornecedores e estoque da empresa conectada.</li>
      </ul>

      <h2>5. Para que usamos</h2>
      <ul>
        <li>Prestar o serviço: calcular margem, mostrar painéis, gerar avisos e executar as ações que você pedir.</li>
        <li>Dar suporte e responder aos seus contatos.</li>
        <li>Manter a segurança do sistema, prevenir fraude e investigar falhas.</li>
        <li>Cumprir obrigações legais.</li>
      </ul>
      <p>
        Bases legais (Lei 13.709/2018, LGPD): execução de contrato e de procedimentos preliminares (art. 7º, V), cumprimento de obrigação legal (art.
        7º, II) e legítimo interesse (art. 7º, IX), este último para segurança e melhoria do serviço.
      </p>
      <p>Não usamos os dados da sua operação para treinar modelos de inteligência artificial e não vendemos dados pessoais.</p>

      <h2>6. Como protegemos</h2>
      <ul>
        <li>
          <strong>Chaves de acesso cifradas:</strong> as credenciais das lojas e do ERP ficam guardadas com criptografia AES-256-GCM.
        </li>
        <li>
          <strong>Dados separados por conta:</strong> cada empresa tem os seus dados isolados no banco. Uma conta não acessa os dados de outra.
        </li>
        <li>
          <strong>Tráfego só por HTTPS:</strong> toda comunicação entre o seu navegador, o sistema e as plataformas é criptografada em trânsito.
        </li>
        <li>
          <strong>Acesso restrito:</strong> dentro da sua conta, cada usuário tem um papel. Na Escala Hub, só a equipe técnica necessária acessa a
          infraestrutura.
        </li>
        <li>
          <strong>Cópias de segurança:</strong> o banco de dados tem cópia diária.
        </li>
      </ul>
      <p>
        Se ocorrer um incidente de segurança com risco relevante aos titulares, avisaremos os clientes afetados e a Autoridade Nacional de Proteção
        de Dados, como manda a lei.
      </p>

      <h2>7. Com quem compartilhamos</h2>
      <p>Apenas com fornecedores que operam partes do serviço, na medida do necessário:</p>
      <ul>
        <li>Hospedagem do sistema e do banco de dados, em servidor localizado no Brasil (Hostinger).</li>
        <li>Hospedagem do site e estatísticas de acesso (Vercel).</li>
        <li>Rede, proteção e armazenamento de arquivos e cópias de segurança (Cloudflare).</li>
        <li>
          Inteligência artificial (Anthropic): quando você usa um recurso de IA, o conteúdo necessário para responder ao seu pedido é enviado ao
          fornecedor, que não o utiliza para treinar modelos.
        </li>
        <li>E-mail (Google Workspace), agenda (Cal.com) e WhatsApp (Meta), usados no atendimento da consultoria.</li>
      </ul>
      <p>
        Também podemos compartilhar dados por ordem judicial ou de autoridade competente. Alguns fornecedores processam dados fora do Brasil, com as
        garantias contratuais previstas na LGPD.
      </p>

      <h2>8. Por quanto tempo guardamos</h2>
      <ul>
        <li>Dados da conta e da operação: enquanto a conta estiver ativa.</li>
        <li>
          Ao desconectar uma loja, o sistema para de buscar dados daquele canal na hora e a chave de acesso é apagada. Os dados daquela loja são
          excluídos em até 30 dias, se você pedir.
        </li>
        <li>Ao encerrar a conta, os dados são excluídos em até 30 dias, salvo o que a lei exigir manter.</li>
        <li>Contatos recebidos pelo site: até 24 meses após a última conversa.</li>
      </ul>

      <h2>9. Seus direitos</h2>
      <p>
        Você pode pedir confirmação do tratamento, acesso, correção, anonimização, portabilidade, eliminação, informação sobre compartilhamento e
        revogação de consentimento (art. 18 da LGPD). Escreva para {mail}. Respondemos em até 15 dias.
      </p>
      <p>
        Se você é comprador de uma loja que usa o Escala Hub, o responsável pelos seus dados é a própria loja. Podemos encaminhar o seu pedido a
        ela.
      </p>

      <h2>10. Alterações</h2>
      <p>Esta política pode ser atualizada. A data no topo indica a versão em vigor. Mudanças relevantes serão avisadas aos usuários do sistema.</p>
    </LegalPage>
  );
}
