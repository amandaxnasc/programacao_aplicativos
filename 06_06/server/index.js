const express = require('express');
const server = express();

server.use(express.json())

let usuarios = [
    {id:1,nome:'Amanda'},
    {id:2,nome:'Alice'},
    {id:3,nome:'Thiago'},
    {id:4,nome:'Pedro'}
]

server.get('/',(req,res)=>{
    // res.json("Olá mundo")
    res.send("Axavier");
});

server.get('/usuarios',(req,res)=>{
    res.send(usuarios);
});

server.get('/cadastro',(req,res)=>{
    const nome =req.query.nome;
    const senha = req.query.senha;

    res.send(nome+senha);
})

server.get('/cadastro_pessoa/:nome',(req,res)=>{
    const nome = req.params.nome;
    res.send(nome);
})

server.post('/usuarios',(req,res)=>{
    const id = req.body.id;
    const nome = req.body.nome;

    let usuario = {
        id:id,
        nome: nome
    }

    usuarios.push(usuario)

    res.status(201).json("Usuario Cadastrado");
});


server.listen(5000);
