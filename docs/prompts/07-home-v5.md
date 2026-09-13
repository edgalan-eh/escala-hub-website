# Home v5 — sem nomes de empresas, ecossistema na hero, dor/virada, animações reais

- Data: 2026-09-13
- Status: pendente
- Rodar como: edição do artboard Home (após v4)
- Revisão: 2026-09-13 — item E (seção Metri Hub) adicionado; slider consolidado em 8 dores

```
Edite o artboard Home da Escala Hub. Cinco mudanças. Copy exata onde indicada.

A) NUNCA nomear empresas próprias. Remova "Pratelar" e "Villa Venera" de toda a página. Falar sempre em "nossas próprias operações de e-commerce".

B) IMPLEMENTE as animações de verdade (o artboard é HTML): remova todos os textos azuis de anotação e faça funcionar: marquee infinito de logos (40s, pausa no hover), reveal por seção (fade + translateY 16px via IntersectionObserver), linhas do diagrama desenhando ao entrar na tela (stroke-dashoffset), ponto âmbar pulsando, linha de progresso do Método avançando com o scroll, etiquetas da hero com parallax leve no mouse, hover dos cards com borda navy-light e brilho.

C) Placeholders de imagem: nada de caixa cinza vazia. Onde não houver foto, usar fundo estilizado: gradiente ink→navy 30%, grão fino, grid de pontos 6% e uma etiqueta mono descrevendo a foto futura no canto (ex.: "FOTO · EXPEDIÇÃO"). Cantos 12px, borda 1px.

D) Seções que mudam:

HERO, visual à direita: substitua o vídeo por um DIAGRAMA DE ECOSSISTEMA animado (referência: hero do ecommercepuro.com.br). Centro: símbolo da Escala Hub (symbol-escalahub-dark, 56px) num círculo com borda navy-light e brilho. Ao redor, 8 nós em etiqueta mono com ícone linear, ligados ao centro por linhas finas navy-light que desenham na entrada: MARKETPLACES · LOJA PRÓPRIA · PRECIFICAÇÃO · ESTOQUE · LOGÍSTICA · ERP · FINANCEIRO · DADOS. Um nó por vez ganha borda âmbar em ciclo de 2s. Fundo com grid de pontos e grão. Sem vídeo, sem foto.

2. ORIGEM (ink). Manter H2 "Experiência construída dentro de uma operação real."
Texto novo: Antes de orientar outras empresas, construímos e operamos nossos próprios negócios de e-commerce. Foi enfrentando problemas reais de margem, estoque, logística, marketplaces e gestão que desenvolvemos o método da Escala Hub. É por isso que falamos a língua de quem opera.
À direita, no lugar dos 2 cards de empresas: 3 tiles empilhados "O QUE OPERAMOS NA PRÁTICA" (label mono), cada um com ícone linear âmbar, título Sora 20px e uma linha muted, sem nomes e sem números:
- Marketplaces — Mercado Livre, Amazon, Shopee e TikTok Shop, com catálogo, ads e reputação no dia a dia.
- Loja própria e ERP — Canal próprio integrado ao sistema, do pedido à nota fiscal.
- Estoque, logística e caixa — Reposição, expedição, custo por pedido e fluxo de caixa semanal.
Badges abaixo do texto: CAPITAL PRÓPRIO · OPERAÇÃO ATIVA · MULTICANAL.

3. O DESAFIO (surface). Manter H2 e texto. SUBSTITUIR o diagrama de 6 nós (agora está na hero) por um SLIDER "A DOR / A VIRADA" (referência: seção 01 do ecommercepuro.com.br). Abas mono no topo: MARGEM · ANÚNCIOS · ADS · CANAIS · ESTOQUE · CAIXA · SISTEMA · BUROCRACIA, com contador "01 / 08". Cada slide: à esquerda label "A DOR" + frase; à direita label "A VIRADA" + frase; sem números. Setas de navegação, autoplay 5s, troca com fade. Conteúdo:
01 MARGEM — A dor: O faturamento sobe e o lucro não aparece. → A virada: Precificação por SKU com taxa, frete, imposto e ads dentro da conta. Margem real, por canal, toda semana.
02 ANÚNCIOS — A dor: Foto ruim, ficha incompleta, anúncio que ninguém vê. → A virada: Mídia de produto, ficha técnica e catálogo produzidos por SKU, no padrão de cada canal, com meta de posição.
03 ADS — A dor: Verba que some sem retorno claro. → A virada: Campanha por objetivo, ACOS meta e revisão semanal.
04 CANAIS — A dor: Dependência de um marketplace só. → A virada: Expansão planejada para Amazon, Shopee, TikTok Shop e loja própria, com estoque e preço integrados.
05 ESTOQUE — A dor: Capital parado num canto e ruptura no outro. → A virada: Curva ABC, reposição com previsão de venda e giro acompanhado.
06 CAIXA — A dor: Vende muito e não sabe se sobra. → A virada: Fluxo de caixa semanal e DRE por canal.
07 SISTEMA — A dor: Planilha, ERP e marketplace que não conversam. → A virada: ERP integrado, automações e um painel só.
08 BUROCRACIA — A dor: Empresa, imposto e marca travando a operação. → A virada: Abertura, regime tributário e registro no INPI conduzidos com contador e advogados parceiros.

6. CASE (paper). Renomear eyebrow para "05 — DENTRO DE CASA".
H2: Testado na nossa própria operação antes de chegar ao seu negócio.
Texto: Cada processo que aplicamos em clientes foi construído primeiro nas nossas operações de e-commerce: marketplace, precificação, estoque, logística, conteúdo, indicadores e gestão. A Escala Hub nasceu dessa experiência acumulada.
Etiqueta sobre a imagem: "OPERAÇÃO PRÓPRIA". Link: Conhecer a Escala Hub →

E) METRI HUB vira SEÇÃO COMPLETA (substitui a faixa de 1 linha). Fica entre Conteúdo e CTA final. Fundo navy #0F1B33, única seção navy da página, grid de pontos navy-light 6%, grão. Anexe e use o logo metrihub-logo-primary-dark (fornecido) no topo esquerdo da seção, 28px de altura; não recolorir.
Eyebrow em navy-light #2F55D4: INCLUSO PARA CLIENTES ESCALA HUB
H2 off-white (44px): Todo cliente Escala Hub opera com o Metri Hub.
Sub (muted claro): Central de inteligência para operações de marketplace. Não mostra só dados: identifica o problema, calcula o impacto em reais e diz o que fazer e quem resolve.
Layout 2 colunas. Esquerda: texto + 4 itens com ícone linear off-white e título Sora 18px:
- Diagnóstico com IA — Nota de A a E da sua operação, com o que puxa a nota para baixo.
- Alertas em reais — Cada problema vem com impacto estimado em R$ e prazo para agir.
- Margem real por SKU — Preço, tarifa, frete, imposto e ads dentro da conta.
- Tarefas com dono — Do alerta à ação: responsável, prazo e resultado acompanhados pelo seu consultor.
Frase em mono abaixo dos itens: A IA NUNCA CALCULA OS SEUS NÚMEROS. O MOTOR CALCULA; A IA EXPLICA.
Badge mono: INTEGRADO AO MERCADO LIVRE E AO SEU ERP · NOVOS CANAIS EM EXPANSÃO
Botão secundário (borda off-white): Conhecer o Metri Hub →
Direita: MOCK DO APP construído em HTML (não imagem), janela de navegador escura inclinada 4°, cortada pela borda direita, com: cabeçalho "Início", tile grande com letra "B" em Sora 96px e régua A–E, mini radar de 8 eixos em SVG (linhas navy-light), 3 cards de alerta flutuando por cima com leve parallax: "Anúncio pausado há 3 dias · R$ 890/sem", "Estoque Full acaba em 6 dias", "Tarifa subiu em 12 anúncios"; um deles com borda âmbar. Abaixo da janela, faixa marquee de alertas em loop (mono, 12px) com 6 alertas curtos.

Todo o resto (nav, faixa de logos, pilares, método, conteúdo, CTA final, footer) permanece.
```
