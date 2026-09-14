# Escala Hub — Design System

**Escala Hub** é um hub de crescimento para quem vende online. Três frentes:

1. **Consultoria** mensal para sellers de Mercado Livre, Shopee, Amazon e TikTok Shop (produto principal; um CTA por página: "Agendar diagnóstico gratuito").
2. **Metri Hub** — software de gestão para e-commerce (em breve; "modo software" em navy).
3. **GLN Studio** — studio de design/dev.

Superfície coberta por este sistema: **site institucional em PT-BR** — home, landing pages por marketplace, página de resultados (cases), catálogo de materiais (blog, calculadora, cursos) e agendamento de diagnóstico.

## Fontes recebidas

- `uploads/logo-escalahub-*.svg`, `symbol-escalahub-*.svg`, `appicon-escalahub-*.svg` — kit de logo oficial (copiado para `assets/logo/`).
- `uploads/screencapture-escalahub-br-2026-09-11-10_29_01.png` — captura do site atual (escalahub.br), identidade anterior em azul/branco. Serve como referência de estrutura (hero → segmentos → prova → serviços → agenda → CTA final), **não** de estilo.
- `uploads/asset1.png` — mockup mobile do Metri Hub (métricas). `asset2.png`, `asset3.png` — peças da identidade anterior (círculos de marketplaces, card "Torne-se um Parceiro"); guardadas em `assets/img/legacy-*` apenas como histórico.
- Brief textual do usuário com direção "painel de operação", tokens de cor, tipografia, componentes e tom de voz — é a fonte de verdade deste sistema.
- Não recebidos: `screencapture-ecommercepuro-br-*.png` e `asset5.psd` (listados no brief, ausentes no upload). Nenhum Figma, nenhum repositório.

## Direção: "painel de operação"

O site parece o cockpit de quem vende em marketplace. Premium, sóbrio, moderno, tech. Fundo preto profundo, números grandes, labels monoespaçadas, **um único acento âmbar**. Sem gradiente roxo de SaaS, sem ilustração 3D genérica, sem foto de banco com aperto de mão.

---

## CONTENT FUNDAMENTALS

**Tom:** operador falando com operador. Direto, com número, sem jargão de agência. Frases curtas. Cada afirmação carrega um dado quando possível.

- Pessoa: **você** (informal, singular) falando com o seller; a Escala Hub fala em **nós/a gente** com moderação. Nunca "o cliente".
- Casing: sentence case em títulos e botões ("Agendar diagnóstico gratuito", não "Agendar Diagnóstico Gratuito"). Eyebrows e labels em UPPERCASE mono.
- Números: sempre formato BR — `R$ 185.190`, `R$ 1,2M`, `+38%`, `90 dias`. Números-chave em Sora grande; unidades e contexto em mono muted.
- Um CTA por página: **"Agendar diagnóstico gratuito"**. Secundário (borda) reservado para WhatsApp: "Falar no WhatsApp".
- Emoji: **nunca**. Ícones lineares ou caracteres tipográficos (→ ↑ — · //).
- Eyebrow numerada antes de cada H2: `01 — DORES`, `02 — MÉTODO`, `03 — RESULTADOS`.
- Cases fictícios levam a tag `[FAKE]` visível até serem substituídos por dados reais.
- Idioma: português do Brasil; termos de mercado mantidos em inglês quando é o uso corrente (GMV, ads, full, SKU, ROAS).

Exemplos:
- H1: "Venda mais nos marketplaces. Com método, não com sorte."
- Sub: "Consultoria mensal para quem já vende no Mercado Livre, Shopee, Amazon e TikTok Shop e quer margem, não só faturamento."
- Stat: `+38%` / `VENDAS EM 90 DIAS ↑`
- Errado: "Soluções 360º para alavancar sua jornada digital 🚀"

## VISUAL FOUNDATIONS

**Cor.** Preto profundo `ink #0A0A0B` como fundo principal; cards e seções alternadas em `surface #141416`; hover/inputs `surface-2 #1C1C1F`; bordas 1px `#2A2A2E`. Texto `#F4F2EE` (off-white quente), secundário `#9C9A94`. Acento **âmbar `#FFB11B`** (hover `#F27A1A`) — entre o amarelo do ML e o laranja da Shopee sem copiar nenhum. Regra: **um acento por tela**; âmbar só em botão, eyebrow, número-chave, linha, ícone. Nunca em áreas grandes, nunca no logo. Na nav, o único âmbar é o CTA. Segunda cor da marca: `navy #0F1B33` + `navy-light #2F55D4` — logo e "modo software" (card e mockups do Metri Hub, fundos de diagrama). `paper #F4F2EE`: **uma única seção clara por página**, para respirar. `up #3DDC97` só para deltas positivos.

**Tipografia** (Google Fonts, carregadas em `tokens/fonts.css`): Sora 600–700 para display/H1–H2 (tracking -2%); Inter 400–500 para corpo/UI; JetBrains Mono 500 para labels, eyebrows e números (uppercase, tracking +8%, 12px). Escala desktop H1 64/1.05 · H2 44/1.1 · H3 28/1.2 · stat 56/1 · body 18/1.6 · small 15 · label 12. Mobile: H1 40 · H2 32 · H3 22 · body 16.

**Espaçamento.** Escala 4/8/12/16/24/32/48/64/96/120. Seções com **120px** de respiro vertical no desktop (72 mobile). Container 1200, gutter e grid-gap 24. Grid 12 colunas; cards em 3 ou 4.

**Cantos e bordas.** 8px (botões, inputs, chips), 12px (cards), 16px (mockups/blocos grandes). Bordas sempre 1px `border`. Sem bordas coloridas laterais.

**Sombras.** Quase nulas. Cards não têm sombra — profundidade vem de camadas de cor (ink → surface → surface-2) e da borda 1px. Única exceção: popovers/dialogs (`--shadow-pop` 0 12px 32px rgba(0,0,0,.45)).

**Fundos.** Planos, sem textura, sem padrão repetido, sem gradiente decorativo. Único gradiente permitido: âmbar → amber-deep dentro de um botão em hover ou uma linha fina. Seção paper é o único contraste claro. Fotos, quando usadas, são full-bleed dentro do card com protection gradient ink 72% na base.

**Transparência e blur.** Só na nav sticky: `rgba(10,10,11,.9)` + `backdrop-filter: blur(12px)`. Overlays de dialog: ink 72% sem blur.

**Animação.** Mínima e funcional. Transições 120–200ms, `cubic-bezier(.2,.8,.2,1)`. Fade + 8px de translate na entrada de seções (opcional). Nada de bounce, nada de parallax. Números-chave podem contar de 0 ao valor em 600ms uma vez.

**Hover.** Botão primário: âmbar → amber-deep. Botão secundário: borda → border-strong, fundo surface-2. Cards clicáveis: borda → border-strong, fundo surface-2, seta do link desliza 4px. Links: texto → âmbar. Sem mudança de opacidade, sem escala.

**Press.** Botões escurecem 6% (sem shrink). Foco: anel 2px âmbar com offset 2px.

**Cards.** `surface` + borda 1px `border` + raio 12 + padding 24–32. Sem sombra. Card do Metri Hub é a exceção: fundo `navy`, borda `navy-soft`, selo "em breve".

**Imagens.** Fotografia realista, escura, contraste alto, um ponto de luz âmbar. Galpão, estoque, embalagens, tela de marketplace aberta, pessoas de operação sem rosto. Mockups de dashboard em navy. Sem ilustração 3D, sem stock de reunião.

**Layout fixo.** Nav sticky 64px. Nada mais fixo. Botão de WhatsApp flutuante **não** faz parte do sistema (um CTA por página).

## ICONOGRAPHY

- **Logo:** kit oficial em `assets/logo/`. `logo-escalahub-dark.svg` (para fundos escuros: símbolo navy-light + texto off-white), `logo-escalahub-light.svg` (fundos claros: navy + navy-light), `logo-escalahub-on-navy.svg`, versões `mono-*` (black/white/navy/blue), `symbol-*` (marca isolada, 5 cores) e `appicon-*` (navy/ink/blue, quadrado 494). Altura mínima 24px no site. O logo **nunca** recebe âmbar.
- **Ícones de UI:** a marca não tem set próprio. Usamos **Lucide** (stroke 1.5, linear, cantos arredondados) via CDN `https://unpkg.com/lucide@latest` — substituição flagada; se a marca adotar outro set, trocar em `components/core/Icon.jsx`. Tamanhos 16/20/24. Cor: `text` por padrão, `amber` apenas quando o ícone é o acento da tela.
- **Caracteres tipográficos como ícones:** `→` no CTA, `↑` em delta positivo, `—` em eyebrow, `·` como separador, `//` em comentários mono. Nunca emoji.
- **Logos de marketplaces:** não incluídos (marca registrada de terceiros). Chips usam nome + cor da marca (`--mp-*`). Quando os SVGs oficiais forem fornecidos, colocar em `assets/marketplaces/`.
- **Imagens:** `assets/img/metrihub-mobile-mockup.png` (mockup do app, identidade anterior — usar apenas como placeholder até novo mockup em navy). `legacy-*` são histórico da marca anterior, não usar em novas peças.

## Intentional additions

- `Icon` — wrapper para Lucide (a marca não define set de ícones).
- `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `Tabs`, `Dialog`, `Toast`, `Tooltip`, `Badge` — não estavam no brief, mas o formulário de agendamento, a calculadora e os filtros de materiais precisam deles. Todos seguem as regras: fundo `surface-2`, borda 1px, raio 8, foco âmbar.

## Índice

- `styles.css` — entrada global (só `@import`s) → `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/base.css`.
- `guidelines/` — cards de fundação (Colors, Type, Spacing, Brand).
- `assets/logo/`, `assets/img/`.
- `components/core/` — Button, Eyebrow, StatTile, MarketplaceChip, Badge, Tag, Icon.
- `components/cards/` — CaseCard, HubCard, MaterialCard.
- `components/navigation/` — Nav, Footer, Tabs.
- `components/forms/` — Input, Select, Checkbox, Radio, Switch.
- `components/feedback/` — Dialog, Toast, Tooltip.
- `ui_kits/website/` — Home, LP Mercado Livre, Resultados, Materiais, Agendar (index.html interativo).
- `thumbnail.html`, `SKILL.md`, `readme.md`.
