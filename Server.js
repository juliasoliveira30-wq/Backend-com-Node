const express = require('express');
const app = express();

//permitir receber dados em JSON
app.use(express.json());

//simula um "banco de dados" em memória
let produtos =[
    {id: 1, nome:"Mouse"},
    {id: 2, nome:"Teclado"}
];

//get - lista todos os produtos
app.get('/api/produtos',(req,res)=>{
    res.json(produtos);
});

//POST
app.post('/api/produtos',(req,res)=>{
    const novoProduto ={
        id:produtos.length +1,
        nome:req.body.nome
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});
//PUT
app.put('/api/produtos/:id', (req,res)=>{
    const id = parseInt(req,URLSearchParams,id);
    const produto = produto.find(p=> p.id ===id);
    if(!produto){
        return res.status(404).json({mensagem: 'produto não encontrado'});
    }
    produto.nome =req.body.nome;
    res.json(produto);
});
app.get('/', (req, res) =>{
    res.send('Olá, este é o servidor com Express');
});

//DELETE
app.delete('/api/produtos/:id', (req,res) => {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
        return res.status(400).json({mensagem:'O ID fornecido não é um número válido'})
    }
    const tamanhoOriginal = produtos.lenght;
    produtos = produtos.filter(p => p.id !== id);
    if (tamanhoOriginal === produtos.lenght){
        return res.status(404).json({mensagem:'Produto não encontrado para exclusão'})
    }
    res.status(204).send();
})

app.get('/', (req, res) =>{
    res.send('Olá, este é o servidor com Express');
});

//rota sobre
app.get('/sobre',(req,res)=>{
    res.send('Página Sobre');
});

//rota produtos
app.get('/produtos',(req,res)=>{
    res.send('Lista de Produtos');
});

//rota que retorna JSON (simula uma API)
app.get('/api/produtos',(req,res)=>{
    const produtos = [
        {id: 1,nome:'Mouse'},
        {id: 2,nome:'Teclado'}
    ];
    res.json(produtos);
});

//inicia o servidor na porta 3000
app.listen(3000, () =>{
    console.log('Servidor rodando http://localhost:3000');
});