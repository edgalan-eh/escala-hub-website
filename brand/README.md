# Marca — logo Escala Hub (v4: navy + off-white, sem âmbar)

Gerado em 2026-09-11 por `gen_logo.py`. **O âmbar não entra no logo**: é reservado a botões, eyebrows e acentos da UI. Símbolo derivado da geometria original com três ajustes: espessura das barras de 92 para 82 unidades (símbolo de 366), raio de canto 16 (original 44, v2 0), quadradinho a 65% da espessura. Wordmark "Escala Hub" em Sora 600 convertido em curvas, tracking -3%.

## Cores do logo

Regra: corpo do símbolo no tom de base; bloco superior e quadradinho no tom mais claro.

| Fundo | Corpo | Bloco superior + quadradinho | Wordmark |
|---|---|---|---|
| Escuro (ink, surface, navy) | navy-light `#2F55D4` | off-white `#F4F2EE` | off-white |
| Claro (paper, branco) | navy `#0F1B33` | navy-light `#2F55D4` | navy |

## Arquivos

| Arquivo | Uso |
|---|---|
| `logo-escalahub-dark.svg` | **Principal em fundo escuro.** Nav, footer, redes. |
| `logo-escalahub-light.svg` | **Principal em fundo claro.** Documentos, propostas, seção paper. |
| `logo-escalahub-on-navy.svg` | Sobre fundo navy (Metri Hub, diagramas). |
| `logo-escalahub-w2-dark.svg` / `-w2-light.svg` | "Escala" 600 + "Hub" 400 muted. Padrão das submarcas (Metri Hub, GLN Studio). |
| `logo-escalahub-mono-white/black/navy/blue.svg` | Monocromáticos. |
| `symbol-escalahub-dark.svg` / `-light.svg` | Símbolo isolado para fundo escuro / claro. Avatar, favicon. |
| `symbol-escalahub-white/black/navy.svg` | Símbolo mono. |
| `appicon-escalahub-ink/navy/blue.svg` | Ícone com fundo e raio 22%. |
| `png/` | PNGs transparentes de tudo (~2000px), `appicon-*-512.png`, `favicon-64.png`, `favicon-32.png`. |
| `gen_logo.py` | Gerador. `T` = espessura, `R` = raio. Regerar tudo: `python3 -c "..."` conforme histórico, ou pedir ao Claude. |
| `fonts/` | Sora 400/600 (Google Fonts, OFL). |
| `explorations/` | Alternativas descartadas (`sheet1.png` símbolos novos, `matrix.png` espessura × raio, `no-amber.png` combinações navy/off-white). |
| `preview.html` / `preview.png` | Prancha completa. |

## Regras

- Respiro mínimo em volta do logo: a altura do quadradinho.
- Corpo do símbolo em navy (fundo claro) ou navy-light (fundo escuro); bloco superior e quadradinho no tom mais claro. Nunca inverter.
- Âmbar nunca no logo. Único caso: logo mono preto sobre fundo âmbar (adesivo, etiqueta).
- Wordmark em cor única. Hierarquia de submarca é por peso (W2), nunca por cor.
- Não usar sobre foto sem overlay escuro; nesse caso, a versão "neutral".
- Não recolorir o símbolo com outras cores da UI.
