# 12 — Logo: grill do atual e redesenho

## Grill do logo enviado (`Logo novo/logo-escalahub.svg`)

1. **As cores eram default do Tailwind.** `#a855f7` é purple-500, `#22d3ee` é cyan-400, `#111827` é gray-900. O logo foi montado com a paleta padrão de um framework, não com uma decisão de marca. Por isso parecia "startup de IA de 2023".
2. **O símbolo não diz "escala" nem "hub".** Blocos arredondados encaixados lembram peça de Tetris ou app infantil. Tem uma escada escondida na forma (os degraus subindo para a esquerda), mas os cantos muito arredondados a transformam em bolhas.
3. **O quadradinho solto** embaixo à esquerda não pertence a nada. Parece um pixel esquecido.
4. **Símbolo e wordmark não têm o mesmo DNA.** O símbolo é geometria de 90° com raio pesado; a fonte do wordmark é uma techno arredondada, larga, quarta tipografia do sistema (além de Sora, Inter e JetBrains Mono).
5. **"Escala" + "Hub" em duas cores** é a convenção mais batida de nome de tech. Hierarquia por cor é o caminho fácil.
6. **Não reduz.** A 16px o símbolo vira uma mancha. Favicon, avatar de WhatsApp e ícone de app são os usos mais frequentes de uma marca de serviço.
7. **Recolorido em âmbar ficou pior:** dois laranjas em blocos arredondados lê como marca de suco ou clone da Shopee. O problema não era a cor, era a forma.

## Direções exploradas (`brand/explorations/sheet1.png`)

| Código | Ideia | Avaliação |
|---|---|---|
| **A1 Degraus** | Escada de 3 degraus sólidos, cantos retos, degrau do topo em âmbar | Diz "escala" em 1 segundo. Sobrevive a 16px. Sério e tech. **Recomendada.** |
| A2 Próximo degrau | Mesma escada, degrau âmbar solto acima | Metáfora boa ("onde você vai chegar"), mas o bloco solto repete o defeito do pixel do logo antigo. |
| C Escalar | Quadrado pequeno âmbar → quadrado grande off-white | Elegante e abstrato, mas genérico: parece handle de redimensionar. Não diz marketplace nem crescimento sem legenda. |
| D Hub em L | Dois L encaixados | Herda o encaixe do logo antigo. Fraco: parece ícone de "expandir". |

## Wordmark

- **W1:** "Escala Hub" em Sora 600, tracking -3%, cor única. Só o símbolo carrega o âmbar. Um acento por tela, coerente com o design system. **Recomendada para o site.**
- **W2:** "Escala" 600 + "Hub" 400 em muted. Hierarquia por peso, não por cor. Vira sistema para as marcas-filhas: "Metri Hub", "GLN Studio" com o mesmo par de pesos.

## Proposta

Símbolo A1 + wordmark W1 como assinatura principal. W2 como padrão das submarcas. Sobre paper: símbolo preto + degrau âmbar-escuro.

## Decisão (2026-09-10)

Eduardo manteve o símbolo original e pediu: cantos retos, paleta e wordmark em Sora. Resultado em `brand/` (`logo-escalahub-dark.svg` como principal, `preview.png` como prancha).

O que a versão 2 resolve dos 7 pontos do grill: 1 (cores decididas, não default), 2 e 4 (cantos retos deixam a escada visível e alinham o símbolo à geometria de Sora), 5 (wordmark em cor única, hierarquia por peso), 6 (reduz bem a 16px, ver prancha), 7 (só um bloco e o quadradinho em âmbar). O ponto 3 (quadradinho solto) foi mantido por decisão do Eduardo; existe a alternativa com ele em off-white para comparação.

## v3 (2026-09-11)

Feedback do Eduardo sobre a v2: "cara de construtora". Causa: cantos a 90° + barras de 1/4 do símbolo = blocos de concreto. Ajustes:

- Barras de 92 para 82 unidades (símbolo de 366). Os vãos entre as peças aumentam e o símbolo respira.
- Raio de canto 16 (original 44, v2 0). Suaviza sem virar pílula. Testados 0/12/18/26 em `brand/explorations/matrix.png`.
- Quadradinho a 65% da espessura, raio menor.
- **Navy entra como cor do corpo do símbolo:** `#0F1B33` em fundo claro, `#2F55D4` em fundo escuro (o navy puro some sobre preto). Âmbar fica no bloco superior e no quadradinho. Wordmark segue o corpo: off-white no escuro, navy no claro.
- Resultado em `brand/preview.png`. O logo agora tem três cores de marca (navy, âmbar, off-white/preto) e a mesma família do site.

## v4 (2026-09-11)

Eduardo: manter a v3, mas tirar o âmbar do símbolo; âmbar é só de botões e acentos. Testadas 8 combinações navy/off-white em `brand/explorations/no-amber.png`. Escolha: regra "corpo no tom de base, peças menores no tom claro".

- Escuro: corpo `#2F55D4`, bloco superior e quadradinho `#F4F2EE`, wordmark `#F4F2EE`.
- Claro: corpo `#0F1B33`, peças `#2F55D4`, wordmark `#0F1B33`.

Ganho de sistema: na nav, o botão âmbar passa a ser o único elemento âmbar da tela e vira o ponto focal (ver topo de `brand/preview.png`).
