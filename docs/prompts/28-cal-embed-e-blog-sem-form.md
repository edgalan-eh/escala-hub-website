# Modal Cal.com real + esconder formulário do blog

- Data: 2026-09-14
- Status: pendente
- Rodar como: edição da Home e do Em breve

```
Dois ajustes.

1. MODAL "SOLICITAR DIAGNÓSTICO": substitua o calendário desenhado por um iframe real do Cal.com.
- src: https://cal.com/eduardo-galan/consultoria-gratuita?embed=true&theme=dark&layout=month_view
- Atributos: width 100%, height 100% (o card do modal tem 900x640; o iframe ocupa a área abaixo do cabeçalho), frameborder 0, allow="camera; microphone; fullscreen", loading="lazy".
- Mantenha o cabeçalho do modal (eyebrow "DIAGNÓSTICO GRATUITO · 45 MIN" e a linha "Escolha um horário. Sem compromisso.") e o botão ×.
- Enquanto o iframe carrega, mostre um skeleton do calendário (o desenho atual, com opacidade 40% e shimmer) que some quando o iframe dispara load.
- Abaixo do iframe, dentro do modal, uma linha mono 11px muted: "Não carregou? Abrir agenda em nova aba →" com link para https://cal.com/eduardo-galan/consultoria-gratuita (target _blank).
- Fechar com ×, ESC ou clique no overlay.

2. SEÇÃO BLOG ("O que aprendemos operando, escrito para quem opera."): remova o campo de e-mail e o botão "Avisar quando sair" e a linha "Sem spam...". No lugar, deixe apenas uma linha mono muted: "PRIMEIROS ARTIGOS EM BREVE" (badge âmbar que já existe) e, abaixo do texto, um link secundário "Enquanto isso, fale com a gente no WhatsApp →" para https://wa.me/5511997957457. Os 3 cards de esqueleto à direita permanecem.

Não deve restar nenhum campo de e-mail na Home nem no Em breve.
```
