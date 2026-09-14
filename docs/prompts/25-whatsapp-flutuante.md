# Home + Em breve — botão flutuante de WhatsApp

- Data: 2026-09-14
- Status: rodado
- Rodar como: edição da Home e do artboard Em breve

```
Adicione um botão flutuante de WhatsApp em todas as páginas.

Posição: fixo, canto inferior direito, 24px da borda direita e 24px do rodapé da viewport. z-index acima de tudo, exceto do modal do Cal.com e do pop-up de cookies (quando o pop-up estiver aberto, o botão sobe 12px acima dele ou fica à direita, sem sobrepor).

Forma: círculo de 56px, fundo verde oficial do WhatsApp #25D366, ícone do WhatsApp (glifo oficial, telefone dentro do balão) em branco, 28px, centralizado. Sombra suave (0 8px 24px rgba(0,0,0,.4)). Anel de pulso: uma borda de 2px do mesmo verde a 40% de opacidade que expande de 56 para 76px e some, a cada 3s, por 3 ciclos, depois para.

Interação: hover expande para uma pílula à esquerda do ícone com o texto "Falar no WhatsApp" em Inter 14px 500 branco, transição 200ms; cursor pointer. Clique abre https://wa.me/5511997957457?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Escala%20Hub%20e%20quero%20falar%20sobre%20minha%20opera%C3%A7%C3%A3o. em nova aba. aria-label "Falar no WhatsApp".

Mobile: 52px, 16px das bordas, sem pílula de hover (tap direto).

Regra do DS: este é o único elemento verde do site; a cor pertence à marca WhatsApp e não deve ser reaproveitada.
```
