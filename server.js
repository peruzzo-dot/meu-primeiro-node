import express from 'express';
const app = express();
const porta = 3000;

// Rota Principal
app.get('/', (req, res) => {
  res.send('<h1>Página Inicial</h1><p>Tente digitar <strong>/saudar/SeuNome</strong> na barra de endereços!</p>');
});

// Rota Dinâmica (ela aceita um nome variável)
app.get('/saudar/:nome', (req, res) => {
  const nomeUsuario = req.params.nome;
  res.send(`
    <body style="font-family: sans-serif; text-align: center; background-color: #f0f0f0;">
      <h1 style="color: blue;">Olá, ${nomeUsuario}!</h1>
      <p>Este é um servidor dinâmico reconhecendo você.</p>
      <a href="/">Voltar para o início</a>
    </body>
  `);
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});