//EMPREGABILIDADE
//DESAFIO 1
 
let a = 10
let b = 20
let c = a

a = b
b = c

console.log (`a = ${a}`)
console.log (`b = ${b}`) 

//DESAFIO 2
 
let numero = Number(prompt('digite um número: '))
let antecessor = numero -1

console.log (`O antecessor de ${numero} é ${antecessor}`) 

//DESAFIO 3
 
let idade = Number(prompt('Quantos anos você tem? '))
let idadeMeses = idade * 12
let idadeDias = idadeMeses * 30

console.log (`Sua idade em dias é de aproximadamente ${idadeDias} dias`) 

//DESAFIO 4
 
let numero = Number(prompt('digite um número: '))

if (numero > 10){
    console.log (`É maior que 10`)
} else if (numero < 10){
    console.log (`Não é maior que 10`)
} 

//DESAFIO 5

let qtdMaca = Number(prompt('Quantas maçãs serão compradas? '))
let precoMaca 
if (qtdMaca < 12){
    precoMaca = 1.3
} else if (qtdMaca >= 12){
    precoMaca = 1
}

let custoTotal = qtdMaca * precoMaca
console.log (`O valor total da compra é R$ ${custoTotal}`)