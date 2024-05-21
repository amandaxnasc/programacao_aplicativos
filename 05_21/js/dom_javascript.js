// Quando uma página web é carregada o navegador cria um Document Object Model (DOM)
// O DOM possui uma árvore de objetos

document.getElementById("saudacao").innerHTML = "Boa tarde, hoje é Terça Feira"
// Adicionando uma saudação a uma div com id saudação

let h1 = document.getElementsByTagName("h1") //Pegando um array com todos os elementos h1

h1[0].innerText = "Introducao"
h1[1].innerText = "SENAI Porto"

let descricao = document.getElementsByClassName("descricao") //Pegando um array com cada elemento da tag decricao

for (let i = 0; i < descricao.length;i++){
    descricao[i].innerHTML = "Div: "+i
}

function alterandoClasse(){
    let conteudo = document.getElementById("conteudo")
    conteudo.className = "alterada"
    alert("Teste")
}

function adicionandoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.add("vermelho")
}

function removendoClasse(){
    let texto = document.getElementById("texto")
    texto.classList.remove("vermelho")
}