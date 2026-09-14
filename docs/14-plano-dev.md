# 14 — Plano da fase de código (fase 0)

Criado em 2026-09-14. Entrada: HTML exportado do Claude Design (Home + Em breve).

## Ordem
1. **Auditoria do export** — checar copy vs `07-copy/home.md`, tokens vs `08-design-system.md`, links, acessibilidade, peso das animações. Relatório em `docs/15-auditoria-prototipo.md`.
2. **Scaffold** — `create-next-app` (App Router, TS, Tailwind) em `apps/web` ou raiz; shadcn/ui; fontes Sora/Inter/JetBrains Mono via `next/font`.
3. **Portar a Home** — componentes por seção; animações com `motion`; logos em `public/brand`.
4. **Em breve, Privacidade, Termos** — rotas; todos os links internos → `/em-breve`.
5. **Formulários** — Server Action `subscribe` → Postgres (Supabase via Vercel Marketplace) tabela `newsletter_subscribers`. Sem e-mail ainda.
6. **Cal.com** — modal com embed oficial (`@calcom/embed-react`).
7. **SEO** — title/description da 01, OG image, sitemap.xml, robots, canonical.
8. **Vercel** — projeto ligado ao repo `edgalan-eh/escala-hub-website`, preview por PR, Vercel Analytics.
9. **Payload CMS** — pode ficar para a fase 2 (blog); na fase 0 não há conteúdo editável.

## Dependências do Eduardo
- Export HTML do protótipo.
- OK para criar Supabase pelo Marketplace (na conta Vercel dele).
- Quando for lançar: trocar DNS no registro.br (eu passo os registros).

## Fora da fase 0
Páginas internas, calculadora, blog real, Resend, pixels, Payload.
