import { SOON, site } from "./site";

export type MenuLink = {
  title: string;
  sub: string;
  href: string;
  icon?: string;
  img?: string;
  badge?: string;
  featured?: boolean;
  external?: boolean;
};

export const menus: Record<"sol" | "can" | "fer", { heading: string; links: MenuLink[] }> = {
  sol: {
    heading: "Soluções",
    links: [
      {
        icon: "message-square",
        title: "Mentoria para Marketplaces",
        sub: "Acompanhamento individual para vender mais e organizar a operação. A gente orienta, você executa.",
        href: SOON,
      },
      {
        icon: "shopping-bag",
        title: "Criação de E-commerce",
        sub: "Loja própria em Shopify, WooCommerce, NuvemShop ou Tray, integrada ao seu ERP.",
        href: SOON,
      },
      {
        icon: "layout-dashboard",
        title: "Gestão de E-commerce",
        badge: "360",
        sub: "Marketing, ads, operação e processos da sua loja própria, com acompanhamento contínuo. Sob medida com a sua necessidade.",
        href: SOON,
      },
      {
        icon: "pen-tool",
        title: "Construção de Marca",
        sub: "Branding, identidade visual, logo e registro no INPI.",
        href: SOON,
      },
    ],
  },
  can: {
    heading: "Canais",
    links: [
      {
        img: "/brand/partners/mercado-livre-mark-mono-dark.svg",
        title: "Mercado Livre",
        sub: "Catálogo, reputação, Full e Ads.",
        href: SOON,
      },
      { img: "/brand/partners/shopee-mark.svg", title: "Shopee", sub: "Taxas, frete e estrutura de anúncios.", href: SOON },
      { img: "/brand/partners/amazon-mark.svg", title: "Amazon", sub: "FBA, Buy Box e catálogo.", href: SOON },
      { img: "/brand/partners/tiktok-mono.svg", title: "TikTok Shop", sub: "Conteúdo, lives e afiliados.", href: SOON },
      { icon: "store", title: "Loja própria", sub: "Tráfego, conversão e integração com marketplaces.", href: SOON },
    ],
  },
  fer: {
    heading: "Ferramentas",
    links: [
      {
        featured: true,
        title: "Metri Hub",
        sub: "Ferramenta de gestão e diagnóstico de e-commerce",
        href: site.metrihub,
        external: true,
      },
      {
        icon: "calculator",
        title: "Calculadora de Preços",
        sub: "Margem real por marketplace. Grátis, sem cadastro.",
        href: SOON,
      },
    ],
  },
};

export const nav: { key?: "sol" | "can" | "fer"; label: string; href: string }[] = [
  { key: "sol", label: "Soluções", href: SOON },
  { key: "can", label: "Canais", href: SOON },
  { key: "fer", label: "Ferramentas", href: SOON },
  { label: "Blog", href: SOON },
  { label: "Contato", href: "#diagnostico" },
];

export const heroNodes = [
  { label: "Marketplaces", icon: "store", x: 320, y: 70 },
  { label: "Loja própria", icon: "shopping-bag", x: 497, y: 132 },
  { label: "Precificação", icon: "tag", x: 570, y: 280 },
  { label: "Estoque", icon: "boxes", x: 497, y: 428 },
  { label: "Logística", icon: "truck", x: 320, y: 490 },
  { label: "ERP", icon: "database", x: 143, y: 428 },
  { label: "Financeiro", icon: "wallet", x: 70, y: 280 },
  { label: "Dados", icon: "bar-chart-3", x: 143, y: 132 },
];

export const logos = [
  { src: "/brand/partners/mercado-livre-mono-dark.svg", alt: "Mercado Livre", h: 42 },
  { src: "/brand/partners/amazon-logo-horizontal.svg", alt: "Amazon", h: 34, mono: true },
  { src: "/brand/partners/shopee-logo-horizontal.svg", alt: "Shopee", h: 36, mono: true },
  { src: "/brand/partners/tiktok-mono.svg", alt: "TikTok Shop", h: 30, label: "TikTok Shop" },
  { src: "/brand/partners/shopify-white.svg", alt: "Shopify", h: 34 },
  { src: "/brand/partners/woocommerce-white.svg", alt: "WooCommerce", h: 34 },
  { src: "/brand/partners/nuvemshop.png", alt: "Nuvemshop", h: 34, mono: true },
  { src: "/brand/partners/tray.svg", alt: "Tray", h: 30, mono: true },
  { src: "/brand/partners/bling.svg", alt: "Bling", h: 30, mono: true },
  { src: "/brand/partners/olist-white.svg", alt: "Olist", h: 30 },
];

export const origemTiles = [
  {
    icon: "store",
    title: "Marketplaces",
    text: "Catálogo, ads e reputação no dia a dia.",
    chips: [
      { src: "/brand/partners/mercado-livre-mark-mono-dark.svg", label: "Mercado Livre" },
      { src: "/brand/partners/amazon-mark.svg", label: "Amazon", mono: true },
      { src: "/brand/partners/shopee-mark.svg", label: "Shopee", mono: true },
      { src: "/brand/partners/tiktok-mono.svg", label: "TikTok Shop" },
    ],
  },
  {
    icon: "monitor",
    title: "Loja própria",
    text: "Canal próprio integrado ao ERP e aos marketplaces, do tema ao checkout: catálogo, conversão e tráfego rodando junto com a operação.",
    chips: [
      { src: "/brand/partners/shopify-mark.svg", label: "Shopify", mono: true },
      { src: "/brand/partners/woocommerce-white.svg", label: "WooCommerce" },
      { src: "/brand/partners/nuvemshop-mark.png", label: "Nuvemshop", mono: true },
      { src: "/brand/partners/tray-mark.svg", label: "Tray", mono: true },
    ],
  },
  {
    icon: "workflow",
    title: "Operação no dia a dia",
    text: "Pedidos, estoque, expedição e conciliação rodando no ERP e no painel, com reposição por curva ABC, custo por pedido e fluxo de caixa semanal.",
    chips: [
      { src: "/brand/metrihub/metrihub-mark.svg", label: "Metri Hub", mono: true },
      { src: "/brand/partners/olist-white.svg", label: "Olist" },
      { src: "/brand/partners/bling.svg", label: "Bling", mono: true },
    ],
  },
];

export const slides: [string, string, string][] = [
  ["Margem", "O faturamento sobe e o lucro não aparece.", "Precificação por SKU com taxa, frete, imposto e ads dentro da conta. Margem real, por canal, toda semana."],
  ["Anúncios", "Foto ruim, ficha incompleta, anúncio que ninguém vê.", "Mídia de produto, ficha técnica e catálogo produzidos por SKU, no padrão de cada canal, com meta de posição."],
  ["Ads", "Verba que some sem retorno claro.", "Campanha por objetivo, ACOS meta e revisão semanal."],
  ["Canais", "Dependência de um marketplace só.", "Expansão planejada para Amazon, Shopee, TikTok Shop e loja própria, com estoque e preço integrados."],
  ["Estoque", "Capital parado num canto e ruptura no outro.", "Curva ABC, reposição com previsão de venda e giro acompanhado."],
  ["Caixa", "Vende muito e não sabe se sobra.", "Fluxo de caixa semanal e DRE por canal."],
  ["Sistema", "Planilha, ERP e marketplace que não conversam.", "ERP integrado, automações e um painel só."],
  ["Burocracia", "Empresa, imposto e marca travando a operação.", "Abertura, regime tributário e registro no INPI conduzidos com contador e advogados parceiros."],
];

export const pillars = [
  { n: "01", icon: "trending-up", title: "Crescimento comercial", text: "Marketplaces, loja própria, catálogo, mídia, pricing, conversão e expansão de canais." },
  { n: "02", icon: "boxes", title: "Estrutura operacional", text: "Estoque, logística, processos, indicadores, rotinas financeiras e organização da operação." },
  { n: "03", icon: "database", title: "Tecnologia e dados", text: "ERP, integrações, automações, dashboards e sistemas criados para reduzir trabalho manual e melhorar decisões." },
];

export const method = [
  { n: "01", title: "Diagnóstico da operação", text: "Analisamos canais, números, processos e gargalos para entender onde o crescimento está travando." },
  { n: "02", title: "Plano de 90 dias", text: "Transformamos o diagnóstico em prioridades, responsáveis, indicadores e um plano executável." },
  { n: "03", title: "Acompanhamento", text: "Trabalhamos ao lado do seu time, acompanhando os números e ajustando a operação conforme ela evolui." },
];

export const posts = [
  { category: "Margem", title: "Como saber quanto realmente sobra por venda no Mercado Livre" },
  { category: "Anúncios", title: "Por que um anúncio bom não aparece, e o que revisar toda semana" },
  { category: "Sistema", title: "Migrar de sistema sem parar a operação: o checklist que usamos" },
];

export const metriFeatures = [
  { icon: "sparkles", title: "Diagnóstico com IA", text: "Nota de A a E da sua operação, com o que puxa a nota para baixo." },
  { icon: "bell-ring", title: "Alertas em reais", text: "Cada problema vem com impacto estimado em R$ e prazo para agir." },
  { icon: "percent", title: "Margem real por SKU", text: "Preço, tarifa, frete, imposto e ads dentro da conta." },
  { icon: "list-checks", title: "Tarefas com dono", text: "Do alerta à ação: responsável, prazo e resultado acompanhados pelo seu consultor." },
];

export const metriAlerts = [
  "Anúncio pausado há 3 dias · R$ 890/sem",
  "Estoque Full acaba em 6 dias",
  "Tarifa subiu em 12 anúncios",
  "Margem negativa em 4 SKUs",
  "Reputação: 2 reclamações sem resposta",
  "Campanha acima do ACOS meta",
];

export const partnerSteps = [
  { n: "01", title: "Você indica o seller", text: "Um formulário curto com canal, faturamento e o problema principal. Sem planilha, sem burocracia." },
  { n: "02", title: "A gente faz o diagnóstico", text: "Nosso time conduz a reunião e apresenta o plano de 90 dias. Você entra na conversa se quiser." },
  { n: "03", title: "Você recebe todo mês", text: "Comissão paga enquanto o cliente segue com a gente, com relatório do que está sendo executado." },
];

export const footerColumns = [
  {
    heading: "Soluções",
    links: [
      { label: "Mentoria para Marketplaces", href: SOON },
      { label: "Criação de E-commerce", href: SOON },
      { label: "Gestão de E-commerce", href: SOON },
      { label: "Construção de Marca", href: SOON },
    ],
  },
  {
    heading: "Canais",
    links: [
      { label: "Mercado Livre", href: SOON },
      { label: "Shopee", href: SOON },
      { label: "Amazon", href: SOON },
      { label: "TikTok Shop", href: SOON },
      { label: "Loja própria", href: SOON },
    ],
  },
  {
    heading: "Empresa",
    links: [
      { label: "Sobre", href: SOON },
      { label: "Blog", href: SOON },
      { label: "Contato", href: "#diagnostico" },
      { label: "Metri Hub", href: site.metrihub, external: true },
      { label: "GLN Studio", href: "#", external: true, disabled: true },
    ],
  },
];
