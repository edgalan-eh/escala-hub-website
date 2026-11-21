import type { StatusCanal } from "./site";

type Icone = "pedido" | "caixas" | "camadas" | "anuncio" | "atendimento" | "promocao";

export type PaginaCanal = {
  id: string;
  nome: string;
  marca: string;
  status: StatusCanal;
  titulo: string;
  descricao: string;
  intro: string;
  aviso?: string;
  servicos: { icone: Icone; titulo: string; texto: string }[];
  dados: { nome: string; uso: string }[];
  limites: string[];
  passos: { t: string; d: string }[];
  desconectar: string;
  chamada: string;
};

export const paginasCanal: PaginaCanal[] = [
  {
    id: "mercado-livre",
    nome: "Mercado Livre",
    marca: "/canais/mercado-livre-mark.svg",
    status: "disponivel",
    titulo: "Para quem vende no Mercado Livre.",
    descricao:
      "O Escala Hub conecta as suas lojas do Mercado Livre e mostra a margem real de cada pedido, a saúde dos anúncios, o pós-venda e as promoções em um painel só.",
    intro:
      "O Escala Hub é um sistema de gestão para vendedores. Ele se conecta às suas lojas do Mercado Livre, mostra quanto cada venda deixou e ajuda a cuidar de anúncios, pós-venda e promoções.",
    servicos: [
      {
        icone: "pedido",
        titulo: "Margem real de cada pedido",
        texto:
          "Tarifa, frete pago por você, imposto, custo do produto e gasto com Mercado Ads descontados em cada venda. Vale para Full, Flex e envio normal.",
      },
      {
        icone: "anuncio",
        titulo: "Anúncios com diagnóstico",
        texto:
          "Visitas, saúde, preço e histórico de cada anúncio. O diagnóstico com IA olha fotos e números e aponta o que melhorar primeiro.",
      },
      {
        icone: "atendimento",
        titulo: "Pós-venda em uma fila só",
        texto:
          "Reclamações, mensagens e devoluções com o prazo de resposta à vista. A IA prepara o rascunho, você revisa e envia pelo sistema.",
      },
      {
        icone: "promocao",
        titulo: "Promoções com margem protegida",
        texto:
          "Veja as promoções que o Mercado Livre oferece, simule a margem de cada uma e aplique em lote sem passar da margem mínima que você definiu.",
      },
    ],
    dados: [
      { nome: "Anúncios", uso: "Título, fotos, variações, preço, estoque e situação, para montar o catálogo e medir a saúde." },
      { nome: "Pedidos", uso: "Itens, valores, tarifas e frete pago pelo vendedor, para calcular a margem." },
      { nome: "Mercado Ads", uso: "Gasto por anúncio e por dia, para mostrar o lucro depois da publicidade." },
      { nome: "Reclamações e mensagens", uso: "Motivo, prazo e conversa, para organizar a fila de pós-venda." },
      { nome: "Promoções", uso: "Campanhas disponíveis para cada anúncio, para simular e aplicar." },
      { nome: "Comprador", uso: "Nome e apelido que vêm no pedido, só para você identificar a venda e atender o cliente." },
    ],
    limites: [
      "Não responde clientes, não aplica promoção nem publica anúncio sem a sua confirmação.",
      "Não pede nem armazena a senha da sua conta do Mercado Livre.",
      "Não usa os dados dos compradores para outra finalidade além do seu atendimento.",
      "Não vende nem compartilha seus dados com outros vendedores.",
    ],
    passos: [
      { t: "Abra Integrações no sistema", d: "Dentro do Escala Hub, escolha Mercado Livre e clique em conectar. Você é levado para a página oficial do Mercado Livre." },
      { t: "Autorize no Mercado Livre", d: "Você entra com o login da loja e confirma o acesso. Dá para conectar mais de uma loja na mesma conta." },
      { t: "Aguarde a primeira leitura", d: "O sistema traz anúncios e pedidos dos últimos 60 dias. Depois disso, pedidos novos chegam a cada poucos minutos." },
    ],
    desconectar: "Para desconectar, desligue a loja em Integrações ou remova a permissão do aplicativo na sua conta do Mercado Livre. O acesso para na hora.",
    chamada: "Vende no Mercado Livre e quer ver sua margem real?",
  },
  {
    id: "shopee",
    nome: "Shopee",
    marca: "/canais/shopee-mark.svg",
    status: "disponivel",
    titulo: "Para quem vende na Shopee.",
    descricao:
      "O Escala Hub conecta a sua loja da Shopee e mostra a margem real de cada pedido, com as taxas da plataforma, junto com os seus outros canais.",
    intro:
      "O Escala Hub é um sistema de gestão para vendedores. Ele se conecta à sua loja da Shopee e mostra quanto cada venda realmente deixou, depois das taxas.",
    servicos: [
      {
        icone: "pedido",
        titulo: "Margem real de cada pedido",
        texto:
          "O sistema busca os pedidos e o repasse de cada venda, com comissão, taxas e frete, e desconta o custo do produto e o imposto.",
      },
      {
        icone: "caixas",
        titulo: "Anúncios e variações",
        texto: "Seus anúncios aparecem com foto, preço, estoque e situação, variação por variação.",
      },
      {
        icone: "camadas",
        titulo: "O mesmo produto em todos os canais",
        texto:
          "Cada anúncio da Shopee é ligado ao produto do seu cadastro pelo SKU. A venda da Shopee soma com Mercado Livre e Amazon no mesmo painel.",
      },
    ],
    dados: [
      { nome: "Anúncios", uso: "Produtos e variações com preço, estoque e situação, para montar o catálogo." },
      { nome: "Pedidos", uso: "Número, data, situação, itens e valores dos últimos 60 dias e dos pedidos novos." },
      { nome: "Repasse", uso: "Comissão, taxas e frete de cada pedido, para calcular a margem." },
      { nome: "Comprador", uso: "Nome de usuário que vem no pedido, só para identificar a venda." },
    ],
    limites: [
      "Não altera seus anúncios, preços nem estoque na Shopee. A conexão é só de leitura.",
      "Não guarda endereço, telefone nem e-mail de quem comprou.",
      "Não pede nem armazena a senha da sua conta de vendedor.",
      "Não vende nem compartilha seus dados com outros vendedores.",
    ],
    passos: [
      { t: "Abra Integrações no sistema", d: "Dentro do Escala Hub, escolha Shopee e clique em conectar. Você é levado para a página oficial da Shopee." },
      { t: "Autorize na Shopee", d: "Você entra com o login de vendedor e confirma o acesso. A Shopee pede para renovar essa autorização de tempos em tempos." },
      { t: "Aguarde a primeira leitura", d: "O sistema traz anúncios, pedidos e taxas dos últimos 60 dias. Depois disso, atualiza sozinho." },
    ],
    desconectar: "Para desconectar, desligue a loja em Integrações ou cancele a autorização na Central do Vendedor da Shopee. O acesso para na hora.",
    chamada: "Vende na Shopee e quer ver sua margem real?",
  },
  {
    id: "amazon",
    nome: "Amazon",
    marca: "/canais/amazon-mark.svg",
    status: "liberacao",
    titulo: "Para quem vende na Amazon.",
    descricao:
      "O Escala Hub conecta a sua conta de vendedor da Amazon.com.br e mostra a margem real de cada pedido, o estoque no FBA e os seus anúncios junto com os outros canais.",
    intro:
      "O Escala Hub é um sistema de gestão para vendedores. Ele se conecta à sua conta de vendedor da Amazon.com.br e mostra quanto cada venda realmente deixou.",
    aviso:
      "A integração com a Amazon está em fase de liberação. Ela usa a API oficial para parceiros de venda (Selling Partner API) e será aberta para as contas assim que a Amazon concluir a aprovação.",
    servicos: [
      {
        icone: "pedido",
        titulo: "Margem real de cada pedido",
        texto:
          "O sistema busca os pedidos e as taxas que a Amazon cobrou em cada venda e desconta o custo do produto e o imposto. Você vê quanto sobrou, pedido por pedido.",
      },
      {
        icone: "caixas",
        titulo: "Anúncios e estoque no FBA",
        texto: "Seus anúncios aparecem com foto, preço e situação. O estoque que está no FBA fica ao lado do estoque que está com você.",
      },
      {
        icone: "camadas",
        titulo: "O mesmo produto em todos os canais",
        texto:
          "Cada anúncio da Amazon é ligado ao produto do seu cadastro pelo SKU. Assim a venda da Amazon soma com Mercado Livre e Shopee no mesmo painel.",
      },
    ],
    dados: [
      { nome: "Anúncios", uso: "Lista de ofertas por SKU, com preço e situação, para montar o seu catálogo no sistema." },
      { nome: "Catálogo", uso: "Fotos dos produtos anunciados, para identificar cada item nas telas." },
      { nome: "Estoque no FBA", uso: "Quantidade disponível nos centros da Amazon, para acompanhar a reposição." },
      { nome: "Pedidos", uso: "Número, data, situação, itens e valores dos últimos 60 dias e dos pedidos novos." },
      { nome: "Financeiro", uso: "Taxas e comissões cobradas em cada pedido, para calcular a margem." },
    ],
    limites: [
      "Não guarda nome, endereço, telefone nem e-mail de quem comprou na Amazon.",
      "Não altera seus anúncios, preços nem estoque na Amazon. A conexão é só de leitura.",
      "Não pede nem armazena a senha da sua conta de vendedor.",
      "Não vende nem compartilha seus dados com outros vendedores.",
    ],
    passos: [
      { t: "Abra Integrações no sistema", d: "Dentro do Escala Hub, escolha Amazon e clique em conectar. Você é levado para a página oficial da Amazon." },
      { t: "Autorize na Amazon", d: "Você entra com o seu login de vendedor no Seller Central e confirma quais informações o Escala Hub pode ler." },
      { t: "Aguarde a primeira leitura", d: "O sistema traz anúncios, estoque, pedidos e taxas dos últimos 60 dias. Depois disso, atualiza sozinho." },
    ],
    desconectar:
      "Para desconectar, desligue a loja em Integrações ou cancele a autorização no Seller Central, em Gerenciar aplicativos. O acesso para na hora.",
    chamada: "Vende na Amazon e quer participar?",
  },
];
