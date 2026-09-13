# 08 — Design system (proposta para aprovação)

Direção do Eduardo: preto + laranja (Shopee) / amarelo (ML), sóbrio, moderno, tech, premium. Navy em cenários específicos.

## Conceito

**"Painel de operação."** O site parece o cockpit de quem vende: fundo preto profundo, números grandes, labels em monoespaçada, um único acento âmbar que lembra ML e Shopee sem copiar nenhum dos dois. Nada de gradientes roxos de SaaS nem foto de banco de gente apertando mão.

## Cores

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#0A0A0B` | Fundo principal |
| `surface` | `#141416` | Cards, seções alternadas |
| `surface-2` | `#1C1C1F` | Cards em hover, inputs |
| `border` | `#2A2A2E` | Bordas 1px |
| `text` | `#F4F2EE` | Texto principal (off-white quente) |
| `muted` | `#9C9A94` | Texto secundário |
| `amber` | `#FFB11B` | Acento primário: CTA, eyebrow, números-chave. Entre o amarelo ML e o laranja Shopee |
| `amber-deep` | `#F27A1A` | Hover do CTA, fim de gradiente âmbar |
| `navy` | `#0F1B33` | Segunda cor da marca: corpo do símbolo em fundo claro; card do Metri Hub, seção "software", fundos de diagrama |
| `navy-light` | `#2F55D4` | Corpo do símbolo em fundo escuro; linhas e ícones tech dentro do navy |
| `paper` | `#F4F2EE` | Uma seção clara por página (Quem somos / Método) para respirar |
| `up` | `#3DDC97` | Setas e deltas positivos nos cases |

Regras: um acento por tela. Âmbar nunca em grandes áreas e nunca no logo: só CTA, eyebrow, número-chave, linha, ícone. Navy é a segunda cor da marca: corpo do símbolo e "modo software". Assim o único elemento âmbar da nav é o botão, e ele vira o ponto focal.

## Tipografia

| Papel | Fonte | Peso | Observação |
|---|---|---|---|
| Display / H1–H2 | **Sora** | 600–700 | Geométrica, moderna, tracking -2% |
| Corpo / UI | **Inter** | 400–500 | Legibilidade |
| Labels / números / eyebrows | **JetBrains Mono** | 500 | Uppercase, tracking +8%, tamanho 12px. É o que dá o "tech" |

Escala (desktop): H1 64/1.05 · H2 44/1.1 · H3 28/1.2 · body 18/1.6 · small 15 · label 12.

## Componentes-chave

- **Eyebrow numerada** (`01 — DORES`) em mono âmbar antes de cada H2, como no benchmark.
- **Stat tile**: número em Sora 56px, label em mono, seta `up` quando delta.
- **Case card**: número grande + segmento + canal (chip com cor do marketplace: ML amarelo, Shopee laranja, Amazon azul, TikTok preto/branco) + prazo + tag `[FAKE]` visível no protótipo.
- **Botão primário**: fundo âmbar, texto ink, raio 8px, seta →. Hover: amber-deep.
- **Botão secundário**: borda `border`, texto `text`. Usado para WhatsApp.
- **Chip de marketplace**: 4 chips com cor oficial de cada canal, usados na hero e nas LPs.
- **Card do hub**: 4 cards com ícone linear, título, 1 linha, link. Metri Hub em navy com selo "em breve".
- **Nav**: logo à esquerda; Consultoria · Resultados · Materiais · Sobre; CTA âmbar à direita. Sticky, fundo ink 90% com blur.

## Imagens

Ver 10. Fotografia escura e com contraste: galpão/estoque, tela de ML aberta, embalagens, pessoas reais de operação. Mockups de dashboard em navy. Sem ilustração 3D genérica.

## Logo

Logo v4 em `../brand/`: símbolo original com barras mais finas (82/366) e raio 16. **Sem âmbar.** Fundo escuro: corpo navy-light `#2F55D4`, bloco superior e quadradinho off-white, wordmark off-white. Fundo claro: corpo navy `#0F1B33`, peças navy-light, wordmark navy. Wordmark "Escala Hub" em Sora 600, cor única; W2 (Hub em 400 muted) para submarcas. O âmbar fica exclusivo de CTA, eyebrow, números-chave e ícones. Regras e lockup em `../brand/README.md`.
