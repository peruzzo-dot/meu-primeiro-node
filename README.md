# 🚀 meu-primeiro-node

Projeto demonstrativo: uma API simples em Node.js/Express com uma página inicial responsiva e acessível.

Este repositório foi ampliado para incluir melhorias de usabilidade, acessibilidade, responsividade, testes e CI.

## ✅ O que foi adicionado / melhorado

- Front-end responsivo e acessível: `public/index.html`, `public/styles.css`, `public/script.js`
  - Skip link, marcação semântica, foco visível, suporte a teclado (Escape fecha menu), prefer-reduced-motion
- Segurança básica e headers HTTP: adição de `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` e CSP mínima em `server.js`
- Estrutura de testes: `test/server.test.js` (Mocha + Supertest) e script `npm test`
- CI: workflow GitHub Actions em `.github/workflows/ci.yml` que roda os testes em push/PR
- Configuração: `server.js` exporta o app para permitir testes sem abrir a porta automaticamente

## 📁 Arquivos principais

- `server.js` — servidor Express com rotas:
  - `GET /` — página principal
  - `GET /projetos` — retorna JSON com projetos
  - `GET /projetos/:id` — retorna projeto por id
- `public/` — front-end estático (HTML, CSS, JS)
- `test/` — testes de integração (Mocha + Supertest)
- `.github/workflows/ci.yml` — workflow de CI

## ▶️ Como rodar localmente (Windows PowerShell)

1) Instale dependências:
```powershell
npm install
```

2) Rodar em desenvolvimento (com reload automático):
```powershell
npm run dev
```

3) Rodar normalmente:
```powershell
npm start
```

4) Rodar os testes (Mocha):
```powershell
npm test
```

5) Abrir no navegador:

- http://localhost:3000


Se quiser, eu posso rodar os comandos Git para você agora (posso executar `git add/commit/push` se desejar). Diga se devo prosseguir com o push ou se prefere rodar os comandos manualmente.
