import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Regras de uso do site e do sistema Escala Hub.",
};

export default function Page() {
  return (
    <LegalPage title="Termos de Uso" updated="21 de novembro de 2026">
      <h2>1. Aceitação</h2>
      <p>
        Estes Termos valem para o site escalahub.com.br e para o sistema Escala Hub (app.escalahub.com.br), operados por {site.legalName}, CNPJ{" "}
        {site.cnpj}, {site.address}. Ao usar o site ou o sistema, você concorda com estes Termos e com a{" "}
        <Link href="/privacidade">Política de Privacidade</Link>.
      </p>

      <h2>2. O que é o Escala Hub</h2>
      <p>
        Um sistema de gestão para quem vende em marketplaces. Ele se conecta às lojas e ao ERP do cliente, calcula a margem das vendas e reúne
        custos, precificação, anúncios, pós-venda, promoções, compras e produção em um painel.
      </p>

      <h2>3. Conta e acesso</h2>
      <ul>
        <li>Nesta fase, o acesso ao sistema é por convite.</li>
        <li>Você é responsável por manter a sua senha em sigilo e por tudo o que for feito com o seu usuário.</li>
        <li>O dono da conta decide quem da equipe entra e com qual papel.</li>
        <li>As informações de cadastro devem ser verdadeiras e mantidas atualizadas.</li>
      </ul>

      <h2>4. Conexão com marketplaces e ERP</h2>
      <ul>
        <li>Ao conectar uma loja, você declara que é o titular dela ou que tem autorização do titular.</li>
        <li>
          Você autoriza o Escala Hub a acessar os dados daquela loja pela interface oficial da plataforma, para prestar o serviço descrito nestes
          Termos.
        </li>
        <li>Você pode desconectar uma loja a qualquer momento, no sistema ou no painel da própria plataforma.</li>
        <li>
          Você continua responsável por cumprir as regras de cada plataforma em que vende. O uso do Escala Hub não muda a sua relação com elas.
        </li>
        <li>
          As plataformas podem mudar ou interromper as suas interfaces. Se isso acontecer, algum recurso pode ficar limitado ou indisponível até a
          adaptação.
        </li>
      </ul>

      <h2>5. Seus dados</h2>
      <p>
        Os dados que você cadastra ou traz das suas lojas são seus. Nós os tratamos apenas para prestar o serviço, conforme a Política de
        Privacidade. Você pode pedir a exclusão quando quiser.
      </p>

      <h2>6. Uso correto</h2>
      <p>Não é permitido:</p>
      <ul>
        <li>usar o sistema para fins ilícitos ou para violar regras das plataformas conectadas;</li>
        <li>tentar acessar dados de outra conta ou áreas restritas;</li>
        <li>copiar, revender ou fazer engenharia reversa do sistema;</li>
        <li>sobrecarregar o serviço com acessos automatizados não combinados.</li>
      </ul>

      <h2>7. Inteligência artificial</h2>
      <p>
        O sistema tem recursos de inteligência artificial que explicam números, sugerem melhorias e preparam textos e ações. As sugestões são um
        apoio e podem conter erros. A decisão é sempre sua: ações fora do sistema, como responder um cliente, aplicar uma promoção ou publicar um
        anúncio, só acontecem depois da sua confirmação.
      </p>

      <h2>8. Cálculos e informações</h2>
      <p>
        Margem, custos e demais números dependem dos dados informados por você e dos dados entregues pelas plataformas. Tarifas e regras das
        plataformas mudam sem aviso. Confira as informações antes de tomar decisões importantes. O Escala Hub não substitui orientação contábil,
        fiscal ou jurídica.
      </p>

      <h2>9. Planos e pagamento</h2>
      <p>
        Os planos e valores serão apresentados antes de qualquer cobrança. Nada é cobrado sem que você tenha escolhido um plano e aceitado as
        condições comerciais.
      </p>

      <h2>10. Disponibilidade</h2>
      <p>
        Trabalhamos para manter o sistema no ar, mas podem ocorrer paradas para manutenção ou por falhas de terceiros. Sempre que possível, avisamos
        com antecedência.
      </p>

      <h2>11. Propriedade intelectual</h2>
      <p>
        O sistema, a marca, os textos e o código pertencem à Escala Hub. Mercado Livre, Shopee, Amazon, TikTok Shop, Shopify e Olist são marcas dos
        seus titulares, citadas apenas para indicar as plataformas com que o sistema se conecta. Não há vínculo societário, patrocínio ou endosso.
      </p>

      <h2>12. Responsabilidade</h2>
      <p>
        Na extensão permitida pela lei, a Escala Hub não responde por danos indiretos, por perda de lucro ou por decisões de preço, compra ou
        promoção tomadas com base no sistema, nem por falhas ou mudanças das plataformas conectadas.
      </p>

      <h2>13. Encerramento</h2>
      <p>
        Você pode encerrar a sua conta quando quiser, escrevendo para <a href={`mailto:${site.email}`}>{site.email}</a>. Podemos suspender contas
        que descumpram estes Termos. Depois do encerramento, os dados são excluídos conforme a Política de Privacidade.
      </p>

      <h2>14. Alterações</h2>
      <p>Podemos atualizar estes Termos. A versão em vigor é a publicada nesta página, com a data no topo. Mudanças relevantes serão avisadas.</p>

      <h2>15. Lei e foro</h2>
      <p>Aplica-se a lei brasileira. Fica eleito o foro da comarca de São Paulo/SP, salvo disposição legal em contrário.</p>
    </LegalPage>
  );
}
