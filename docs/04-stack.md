# 04 — Stack técnica

Atualizado em 2026-09-10 com decisão de CMS.

| Camada | Escolha | Por quê |
|---|---|---|
| Framework | Next.js (App Router) + TypeScript | SEO, SSG/ISR para LPs e blog, padrão na Vercel |
| UI | Tailwind CSS + shadcn/ui | Rápido, consistente com o protótipo |
| Hospedagem | Vercel | Deploy por PR, analytics, domínio |
| **CMS** | **Payload CMS 3** embutido no Next.js | Ver comparação abaixo |
| Banco de dados | **Postgres no Supabase** (via Vercel Marketplace), acessado pelo Payload (Drizzle) | Um banco só para CMS, leads e calculadora; Supabase dá auth e storage para área de membros/cursos depois |
| Mídia | Supabase Storage (ou Vercel Blob) | Uploads do CMS |
| Agendamento | Cal.com | Já em uso |
| Formulários/e-mail | Server Actions + Resend | Notificação de lead e confirmação |
| Analytics | Vercel Analytics + GA4 | Meta Pixel quando houver tráfego pago |
| Conversão secundária | Botão WhatsApp flutuante | Seller vive no WhatsApp |

## Por que Payload e não Directus ou Supabase puro

| Opção | Prós | Contras |
|---|---|---|
| **Payload 3** | Roda dentro do próprio Next.js (um deploy só na Vercel), admin pronto, tipos TypeScript gerados, campos de blocos para páginas de case e post, open source sem custo | Curva inicial de configuração de coleções (eu faço) |
| Directus | Admin excelente, muito flexível, também open source | Precisa de hospedagem separada (Directus Cloud pago ou VPS); segundo sistema para manter |
| Supabase puro | Já é o banco | Não é CMS: sem editor de texto rico, sem admin editorial; teríamos que construir |
| Sanity | Melhor editor do mercado | Conteúdo fora do nosso banco, limite do plano gratuito, mais um fornecedor |

Recomendação: **Payload sobre Postgres do Supabase.** Se você já tem Directus rodando em algum lugar e gosta, é uma alternativa válida; só não quero adicionar infra para um site.

## Coleções do CMS (Payload)

- `posts` (blog): título, slug, resumo, capa, conteúdo em blocos, categoria, autor, SEO.
- `cases` (resultados): cliente, segmento, canal, número principal, prazo, o que foi feito, depoimento, flag `isFake` (bloqueia publicação em produção).
- `tools` (ferramentas): nome, descrição, rota, status.
- `courses`: nome, status (em breve/ativo), link.
- `team`: nome, cargo, foto.
- `leads`: nome, e-mail, WhatsApp, canal principal, faixa de faturamento, origem, página.
- `calculatorRuns`: inputs, resultado, lead (opcional).
- `newsletterSubscribers`.
- Globais: `siteSettings` (WhatsApp, e-mail, redes, CNPJ), `homepage` (números da faixa de prova).

## Ainda não decidido
- Domínio já está na Vercel? (pergunta 14)
