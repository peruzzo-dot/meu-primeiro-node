import express from 'express';
const app = express();
const porta = process.env.PORT || 3000;

// Servir arquivos estáticos (CSS, JS, imagens)
app.use(express.static('public'));

// Pequeno middleware de segurança: headers recomendados para ajudar usabilidade/segurança
app.use((req, res, next) => {
    // Evita que navegadores interpretem tipos de conteúdo errados
    res.setHeader('X-Content-Type-Options', 'nosniff');
    // Previne o site ser carregado em iframes de terceiros
    res.setHeader('X-Frame-Options', 'DENY');
    // Política de referências
    res.setHeader('Referrer-Policy', 'no-referrer-when-downgrade');
    // CSP mínimo permitindo recursos próprios e Google Fonts
    res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src https://fonts.gstatic.com; img-src 'self' data:;");
    next();
});

// Logging simples legível para desenvolvimento
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

// Simulação de um Banco de Dados de Projetos
const meusProjetos = [
    { id: 1, nome: "Calculadora JS", tecnologia: "JavaScript", status: "Concluído" },
    { id: 2, nome: "Netflix Clone", tecnologia: "HTML/CSS", status: "Em andamento" },
    { id: 3, nome: "Sistema de Horto", tecnologia: "Node.js/MySQL", status: "Planejamento" }
];

// Rota Principal - Carrega o Front-end moderno
app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/index.html');
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

// Export app para permitir testes e reutilização
export default app;

// Apenas iniciar o servidor quando não estivermos em ambiente de teste
if (process.env.NODE_ENV !== 'test') {
    app.listen(porta, () => {
        console.log(`Servidor rodando em http://localhost:${porta}`);
    });
}