# Captura de e-mail — validação e feedback na UI

- Data: 2026-09-14
- Status: rodado
- Rodar como: edição de todos os formulários de e-mail (Blog "Avisar quando sair", Cursos, lista de espera do Metri Hub) na Home e no Em breve

```
Todos os formulários de e-mail do site (seção Blog "Avisar quando sair", Cursos "em breve", lista de espera do Metri Hub) passam a ter comportamento e estados:

1. VALIDAÇÃO ao enviar (e no blur do campo): formato de e-mail (regex simples com @ e domínio com ponto). Vazio ou inválido → campo ganha borda vermelha #E5484D, abaixo uma linha mono 11px vermelha "Digite um e-mail válido." O botão não envia.

2. ENVIANDO: botão fica desabilitado com opacidade 70% e um spinner de 14px no lugar da seta, por ~600ms (simulação).

3. SUCESSO: o formulário inteiro dá lugar, com fade de 200ms, a um bloco de confirmação na mesma altura: ícone linear âmbar de check num círculo, texto Sora 16px off-white "Pronto. Você vai ser avisado." e linha mono muted "Sem spam. Só quando tiver novidade." Em seguida, um link discreto "Cadastrar outro e-mail" que volta ao formulário vazio.

4. DUPLICADO: se o e-mail já foi cadastrado nesta sessão, mostrar "Esse e-mail já está na lista." em mono muted, sem erro vermelho.

5. ARMAZENAMENTO no protótipo: salvar em localStorage na chave "escalahub_leads" como lista de objetos {email, origem, data}, onde origem é "blog", "cursos" ou "metrihub". É placeholder; no código real vai para banco.

6. ENTER no campo envia. Foco visível: borda navy-light. Acessibilidade: aria-live="polite" na mensagem de sucesso/erro.
```
