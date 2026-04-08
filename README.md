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

5. **Acesse no navegador:**
   Abra [http://localhost:3000](http://localhost:3000) para interagir com a interface.

---

## 🛠 Tecnologias Utilizadas
* **Node.js** & **Express** (Back-end)
* **Tailwind CSS** (Front-end Styling)
* **JavaScript (ES6+)**
* **Mocha & Supertest** (Testes de Integração)
* **GitHub Actions** (CI/CD)

## 👩‍💻 Autora
Desenvolvido por **Vitória Souza**. Conecte-se comigo no [LinkedIn](www.linkedin.com/in/vitória-souza-558723342).
- `.github/workflows/ci.yml` — workflow de CI

