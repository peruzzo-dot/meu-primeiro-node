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

## 🧪 Comandos Git para subir tudo para o GitHub

Os comandos abaixo assumem que o remote `origin` já esteja configurado para o repositório GitHub (ex.: `https://github.com/peruzzo-dot/meu-primeiro-node.git`). Se o `origin` não existir, substitua `origin` pela URL ou configure-a com `git remote add origin <url>`.

Execute no PowerShell a partir da raiz do projeto:
```powershell
# 1) Verificar branch atual e alterações
git branch --show-current
git status --porcelain

# 2) Adicionar arquivos modificados
git add .

# 3) Criar commit com mensagem descritiva
git commit -m "chore: UI responsiva, acessibilidade, testes e CI"

# 4) Enviar para o GitHub (branch main)
git push origin main
```

Se você usa outra branch (ex.: `master` ou `main` diferente), substitua `main` pelo nome correto.

Se o push falhar por autenticação, use um token pessoal (PAT) ou configure suas credenciais Git/GitHub (GitHub CLI `gh auth login` ajuda neste processo).

## 🔍 O que verificar após o push

- No GitHub: verifique se o repositório recebeu o commit.
- Acesse a aba Actions para ver o workflow de CI disparar e rodar os testes.

## Próximos passos sugeridos

- Executar uma auditoria Lighthouse e aplicar melhorias de performance.
- Adicionar testes de UI (ex.: Playwright) para testar a interface.
- Tornar a CSP mais restrita usando nonces — requisito: injetar nonces no servidor.

---

Se quiser, eu posso rodar os comandos Git para você agora (posso executar `git add/commit/push` se desejar). Diga se devo prosseguir com o push ou se prefere rodar os comandos manualmente.