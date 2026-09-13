# Home · Hero — interação do diagrama de ecossistema

- Data: 2026-09-13
- Status: pendente
- Rodar como: edição do artboard Home (só a hero)

```
Edite só o diagrama de ecossistema da hero da Home. Mantenha layout, nós e copy. Adicione interação:

1. ROTAÇÃO AUTOMÁTICA: o anel de 8 nós gira lentamente em sentido horário (1 volta a cada 60s, linear, infinito). Os nós contra-rotacionam para o texto ficar sempre na horizontal. O símbolo central não gira. Pausa a rotação quando o mouse está sobre o diagrama; retoma suave ao sair.

2. HOVER NO NÓ: ao passar o mouse sobre uma etiqueta:
- a etiqueta ganha fundo âmbar #FFB11B, texto ink #0A0A0B, ícone ink, e cresce para 1.15x (transform scale, 200ms ease-out, transform-origin no centro);
- a linha que liga esse nó ao centro muda de navy-light para âmbar, engrossa de 1px para 2px e ganha um "pulso" viajando do nó até o centro (pequeno ponto âmbar percorrendo a linha em 600ms, loop enquanto o hover durar);
- o círculo central reage: borda passa a âmbar, brilho (box-shadow) cresce de 24px para 48px, símbolo faz um scale 1.06 e volta (300ms);
- os outros 7 nós reduzem a opacidade para 55%;
- cursor: pointer.
Ao sair, tudo volta em 250ms.

3. CICLO AUTOMÁTICO (quando não há hover): a cada 2,5s um nó diferente recebe o mesmo estado de destaque por 1,2s (âmbar + scale + linha âmbar + pulso), em sequência horária. Serve de convite para interagir.

4. TOQUE (mobile): tap no nó aplica o destaque por 1,5s.

5. Respeitar prefers-reduced-motion: sem rotação nem pulso; hover só troca cor.

Implemente em CSS/JS no próprio artboard. Sem anotação em texto.
```
