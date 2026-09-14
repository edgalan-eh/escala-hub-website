# 15 — Auditoria do protótipo exportado

Data: 2026-09-14. Fonte: `docs/prototipo/export/` (Home, Em breve, Privacidade, Termos). Render em `docs/prototipo/home-export-full.png`.

## Veredito
Aprovado para portar. Layout, copy e tokens batem com os docs. Itens abaixo são correções que faço no código, salvo os marcados **[decisão do Eduardo]**.

## Achados

### Estrutura / técnico
1. Export usa runtime próprio do Claude Design (`<x-dc>`, `<sc-for>`, `_ds_bundle.js`, `support.js`, 230 KB de JS). Não é HTML publicável. **Porto para componentes React**; o HTML é referência de layout, copy e tokens. Tokens CSS (`_ds/tokens/*.css`) reaproveitados como estão.
2. Fontes via `@import` do Google Fonts → no código, `next/font` (sem request bloqueante, sem CLS).
3. Ícones: `Icon` do DS (nomes lucide: store, shopping-bag, tag, boxes, truck, database, wallet, bar-chart-3, message-square, layout-dashboard, pen-tool, calculator). → `lucide-react`.
4. Imagens de terceiros referenciadas em `assets/marketplaces/` não vieram no zip; uso `brand/third-party/`.
5. Sem artboard mobile. → Responsivo desenhado por mim seguindo o DS (H1 40, seções 72px, nav hambúrguer, chips quebram linha, hero diagrama vira 320px abaixo do texto).
6. Nav "Contato" aponta para `#diagnostico` (âncora do CTA final), não para "Em breve". Mantenho.

### Conteúdo
7. **Seção nova "Programa de parceiros"** (Indique sellers. Ganhe recorrência.) com números **20% de comissão** e **48h de retorno**. Não estava nos docs. **[decisão do Eduardo]**: números reais e aprovados? Senão, publico sem os números.
8. Card "Metri Hub" na seção Conteúdo tem link "Lista de espera →" → cai em "Em breve". Ok na fase 0.
9. Footer: sem coluna Ferramentas (Metri Hub e GLN foram para Empresa; Calculadora sumiu). Aceito; adiciono "Calculadora de Preços" em Empresa → Em breve.
10. GLN Studio linka para `https://glnstudio.com.br` (domínio não confirmado). → Sem link até ter URL. **[decisão do Eduardo]** se quiser manter o domínio.
11. Em breve, Privacidade e Termos ainda têm o **footer antigo** (Soluções: Marketplaces, E-commerce próprio...; Empresa: Cases...). → No código, footer único (v2) em todas as páginas.
12. Privacidade e Termos do protótipo são versões curtas (~1.900 caracteres). → Uso os drafts completos de `docs/legal/` (LGPD: bases legais, direitos, cookies, marcas de terceiros). **[decisão do Eduardo]** se preferir as curtas.
13. H1 tem um ícone de carrinho embutido no texto ("operação de 🛒 e-commerce" desenhado como caixa com ícone). Mantenho como no protótipo; `aria-hidden`.
14. Blog: 6 posts placeholder no estado; só 3 aparecem como skeleton. Ok.
15. Cookie pop-up presente; no código, consentimento guarda em localStorage 12 meses e libera Vercel Analytics só com "Aceitar".

### Performance / acessibilidade (a garantir no código)
16. Marquee, diagrama, slider e reveals com `prefers-reduced-motion`.
17. Iframe do Cal.com só monta ao abrir o modal (lazy).
18. Botão WhatsApp e modal com foco gerenciado, ESC fecha.
19. Contraste: muted `#9C9A94` sobre ink passa AA para 18px; para 12px mono uso `#B0AEA8` onde for texto informativo.

## Mapa de componentes (porte)
Nav (mega menu) · HeroDiagram · LogoMarquee · OrigemTiles · PainSlider · Pillars · Method · ContentCards · BlogSoon · MetriHubSection (mock + marquee de alertas) · Partners · FinalCTA · Footer · CookieConsent · CalModal · WhatsAppFab · BuildBar.
