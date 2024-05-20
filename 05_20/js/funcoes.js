/*Funções são blocos de construção. Nós descrevemos um trecho de código que poderá ser reutilizado.
Para usar uma função, você deve defini-lá em algum lugar e chamar no espoco onde precisar.
*/

// Criando uma funcao que retorna o quadrado de um numero
function quadrado(numero) {
    return numero * numero
}

let num1 = 5
num1 = quadrado(num1)
// console.log(num1)

let num2 = 4
num2 = quadrado(num2)
// console.log(num2)

function minhaFuncao(objeto) {
    objeto.fabrica = "Toyota"
}
// Criando um objeto de tipo carro.
let carro = { fabrica: "Honda", modelo: "Civic", ano: 2019 }
// console.log(carro["fabrica"])
// console.loh(carro.fabrica) Os dois comandos fara com que o nome da fabrica do carro apareca.

let x, y //Criando variaveis
x = carro.fabrica
// console.log(x)

minhaFuncao(carro) //Chamando uma funcao que altera o objeto carro
y = carro.fabrica //recebendo toyota
// console.log(y)

let elevadoQuadrado = function (numero) {
    return numero * numero
}

let fatorial = function fac(numero){
    if(numero < 2) {
        return 1
    }else{
        return numero * fac(numero - 1)
    }
}
// console.log(fatorial(5))

let numeros = [1,2,3,4,5]
console.log(numeros)

// let novosNumeros = numeros.map(num=>num*2)
let novosNumeros = numeros.map(function(num){
    return num * 2
})
console.log(novosNumeros)
