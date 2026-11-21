const email = "eduardo@escalahub.com.br";

export const site = {
  name: "Escala Hub",
  legalName: "Escala Hub Consultoria e Negócios Ltda.",
  cnpj: "54.988.708/0001-21",
  address: "Av. Paulista, 1636, Sala 1504/749, Bela Vista, São Paulo/SP, CEP 01310-200",
  email,
  app: "https://app.escalahub.com.br",
  url: "https://escalahub.com.br",
  acesso: `mailto:${email}?subject=${encodeURIComponent("Quero conhecer o Escala Hub")}`,
  title: "Escala Hub | Sistema para quem vende em marketplaces",
  description:
    "Margem real por pedido, custos, precificação, anúncios, pós-venda, promoções e compras em um só sistema. Para quem vende no Mercado Livre, Shopee e Amazon.",
} as const;

export type StatusCanal = "disponivel" | "liberacao" | "em-breve";

export const rotuloStatus: Record<StatusCanal, string> = {
  disponivel: "Disponível",
  liberacao: "Em liberação",
  "em-breve": "Em breve",
};

export const canais: { id: string; nome: string; marca: string; status: StatusCanal; resumo: string }[] = [
  {
    id: "mercado-livre",
    nome: "Mercado Livre",
    marca: "/canais/mercado-livre-mark.svg",
    status: "disponivel",
    resumo: "Anúncios, pedidos, tarifas, frete pago, Mercado Ads, reclamações, perguntas e promoções.",
  },
  {
    id: "shopee",
    nome: "Shopee",
    marca: "/canais/shopee-mark.svg",
    status: "disponivel",
    resumo: "Anúncios, pedidos e taxas de cada venda, para calcular a margem real.",
  },
  {
    id: "amazon",
    nome: "Amazon",
    marca: "/canais/amazon-mark.svg",
    status: "liberacao",
    resumo: "Anúncios, estoque no FBA, pedidos e taxas de cada venda na Amazon.com.br.",
  },
  {
    id: "tiktok",
    nome: "TikTok Shop",
    marca: "/canais/tiktok-mark.svg",
    status: "em-breve",
    resumo: "Pedidos e taxas da loja no TikTok.",
  },
  {
    id: "shopify",
    nome: "Shopify",
    marca: "/canais/shopify-mark.svg",
    status: "em-breve",
    resumo: "Pedidos da sua loja própria junto com os marketplaces.",
  },
];
