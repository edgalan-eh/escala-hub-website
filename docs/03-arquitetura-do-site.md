# 03 — Arquitetura do site

Atualizado em 2026-09-10. Metri Hub e GLN Studio saem do sitemap (sites próprios). Franquias/Parceiros cortados.

## Fase 0 — lançamento mínimo (2026-09-13)
Home + `/em-breve` (todos os links internos) + `/privacidade` + `/termos`. Barra "Site em construção". Metri Hub externo.

## Nav (v4, 2026-09-13) e sitemap

Nav: Soluções ▾ · Canais ▾ · Ferramentas ▾ · Blog · Contato · **[Solicitar diagnóstico]**. Mega menu com card "Comece por aqui". Sobre e Cases saem da nav (footer + botão "Conhecer a Escala Hub" na hero → /sobre).

```
/                           Home
/solucoes/mentoria-marketplaces
/solucoes/criacao-de-ecommerce
/solucoes/gestao-de-ecommerce
/solucoes/construcao-de-marca
/canais/mercado-livre · /canais/shopee · /canais/amazon · /canais/tiktok-shop · /canais/loja-propria
Metri Hub → link externo https://metrihub.com.br (nova aba)
/ferramentas/calculadora-de-precos
/blog, /blog/[slug]
/contato (= diagnóstico)
/sobre, /cases, /privacidade, /termos
```

## Sitemap — v3 (superado)

Nav: Soluções ▾ · Cases · Sobre · Conteúdo · Produtos · **[Solicitar diagnóstico]**

```
/                              Home institucional (7 blocos)
/solucoes                      Visão dos 3 pilares
/solucoes/marketplaces         ML, Amazon, Shopee, TikTok Shop (detalhe, FAQ)
/solucoes/mercado-livre        LP SEO "consultoria mercado livre"
/solucoes/amazon               LP SEO
/solucoes/e-commerce-proprio   Shopify, WooCommerce, NuvemShop, Tray
/solucoes/operacao-e-gestao    Estoque, logística, financeiro, burocracia
/solucoes/tecnologia           ERP (Bling, Olist), integrações, dashboards
/cases, /cases/pratelar
/sobre
/conteudo, /conteudo/[slug], /ferramentas/calculadora-de-margem
/produtos                      Metri Hub (teaser + lista de espera), GLN Studio
/diagnostico, /privacidade, /termos
```

## Sitemap — v2 (superado)

```
/                          Home — parceiro de e-commerce, 5 frentes
/marketplaces              Mentoria para sellers (ML, Amazon, Shopee, TikTok Shop)
/marketplaces/mercado-livre   LP do canal principal
/loja-propria              Implementação Shopify / WooCommerce / NuvemShop / Tray
/erp                       Implementação e migração Bling / Olist
/burocracia                Abertura de empresa, tributário, INPI
/resultados, /materiais, /sobre, /diagnostico, /privacidade, /termos
```

## Sitemap — versão anterior (2026-09-10)

```
/                                   Home — o hub
/consultoria                        Consultoria para marketplaces e e-commerce (visão geral)
/consultoria/mercado-livre          LP do canal principal
/resultados                         Cases (fictícios no protótipo, marcados [FAKE])
/resultados/[slug]                  Case individual (CMS)
/materiais                          Catálogo: ferramentas, blog, cursos
/ferramentas/calculadora-de-taxas   Primeira ferramenta real (lead magnet)
/blog, /blog/[slug]                 CMS
/sobre                              História, venture builder, equipe, Pratelar
/diagnostico                        Agenda Cal.com + WhatsApp
/privacidade, /termos
```

## Fase 2

```
/consultoria/shopee
/consultoria/amazon
/consultoria/tiktok-shop
/consultoria/e-commerce             Loja própria
/cursos                             Quando houver curso; até lá, bloco "em breve" com captura de e-mail em /materiais
```

Links externos no ecossistema: Metri Hub (site próprio, "em breve"), GLN Studio (site próprio).

## Estrutura por página

### Home
1. Hero: headline por canal, sub, CTA "Agendar diagnóstico gratuito" + "Falar no WhatsApp", visual de dashboard (Metri Hub, nomeado como "em breve").
2. Faixa de prova: 4 números `[FAKE]` + "operamos a Pratelar".
3. Dores (6 cards): margem, ranking, estoque, reputação, ads, caixa.
4. O hub (4 cards): Consultoria, Metri Hub, GLN Studio, Materiais.
5. Como funciona (3 passos): diagnóstico → plano de 90 dias → acompanhamento mensal.
6. Resultados (4 cases `[FAKE]` + Pratelar).
7. Quem somos (foto da equipe/Eduardo + 3 linhas + link Sobre).
8. Materiais em destaque (calculadora + 2 posts).
9. CTA final + footer completo.

### /consultoria/mercado-livre (LP)
Hero específico → para quem é / não é → 8 frentes do que fazemos no ML → método mensal → resultados no ML → equipe → FAQ → CTA. Um CTA só. Navegação reduzida.

### /consultoria
Visão geral dos canais com cards para as LPs (ML ativo; outros "em breve" apontando para o diagnóstico).

### /resultados
Grid de cases: número grande + segmento + canal + prazo + "o que foi feito".

### /materiais
Três blocos; exibir só o que tem ao menos 1 item real.

### /sobre
Narrativa: nascemos vendendo (Pratelar) → viramos hub (consultoria, Metri Hub, GLN) → equipe → princípios.

Copy detalhada em `07-copy/`.
