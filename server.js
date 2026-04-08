import express from 'express';
const app = express();
const porta = 3000;

// Simulação de um Banco de Dados de Projetos
const meusProjetos = [
    { id: 1, nome: "Calculadora JS", tecnologia: "JavaScript", status: "Concluído" },
    { id: 2, nome: "Netflix Clone", tecnologia: "HTML/CSS", status: "Em andamento" },
    { id: 3, nome: "Sistema de Horto", tecnologia: "Node.js/MySQL", status: "Planejamento" }
];

// Rota Principal (Visual)
app.get('/', (req, res) => {
    res.send(`
        <body style="font-family: sans-serif; text-align: center; background-color: #f4f4f9; padding: 50px;">
            <h1 style="color: #333;">🚀 API de Projetos da Vitória</h1>
            <p>Servidor Node.js rodando com sucesso!</p>
            <div style="background: white; padding: 20px; border-radius: 10px; display: inline-block; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
                <a href="/projetos" style="text-decoration: none; color: blue; font-weight: bold;">📦 Ver todos os projetos (JSON)</a>
            </div>
        </body>
    `);
});

// Rota que retorna JSON (O que recrutadores amam ver)
app.get('/projetos', (req, res) => {
    res.json(meusProjetos);
});

// Rota com Filtro (Lógica Avançada)
app.get('/projetos/:id', (req, res) => {
    const idProcurado = parseInt(req.params.id);
    const projeto = meusProjetos.find(p => p.id === idProcurado);

    if (projeto) {
        res.json(projeto);
    } else {
        res.status(404).send({ erro: "Projeto não encontrado" });
    }
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});