# 14 — Plano da fase de código (fase 0)

Criado em 2026-09-14. Entrada: HTML exportado do Claude Design (Home + Em breve).

## Ordem
1. **Auditoria do export** — checar copy vs `07-copy/home.md`, tokens vs `08-design-system.md`, links, acessibilidade, peso das animações. Relatório em `docs/15-auditoria-prototipo.md`.
2. **Scaffold** — `create-next-app` (App Router, TS, Tailwind) em `apps/web` ou raiz; shadcn/ui; fontes Sora/Inter/JetBrains Mono via `next/font`.
3. **Portar a Home** — componentes por seção; animações com `motion`; logos em `public/brand`.
4. **Em breve, Privacidade, Termos** — rotas; todos os links internos → `/em-breve`.
5. **Formulários** — nenhum na fase 0.
6. **Cal.com** — modal com embed oficial (`@calcom/embed-react`).
7. **SEO** — title/description da 01, OG image, sitemap.xml, robots, canonical.
8. **Vercel Hobby** — projeto ligado ao repo `edgalan-eh/escala-hub-website`, preview por PR, Vercel Analytics.
9. Payload, Supabase/Neon, Resend: fase 2.

## Dependências do Eduardo
- Export HTML do protótipo.
- Quando for lançar: trocar DNS no registro.br (eu passo os registros).

## Fora da fase 0
Páginas internas, calculadora, blog real, Resend, pixels, Payload.

## Status (2026-09-14)
Itens 1–8 feitos. Produção no ar na URL da Vercel. Faltam: domínio (DNS), Search Console, revisão do Eduardo.

## Domínio — FEITO em 2026-09-14
DNS fica no **Cloudflare** (não no registro.br). Registros em produção:
`A @ 76.76.21.21` (DNS only) · `CNAME www cname.vercel-dns.com` (DNS only) · 5 MX do Google Workspace · 1 TXT google-site-verification.
Certificado emitido pela Vercel. Root e www respondem 200 em HTTPS.

## Falta
- Search Console: enviar `https://escalahub.com.br/sitemap.xml` e pedir reindexação da Home (a verificação por TXT já existe).
