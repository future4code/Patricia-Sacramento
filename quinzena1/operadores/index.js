// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* EXERCÍCIO 1: 
a. resultado = false 
b. resultado = false
c. resultado = true
d. resultado = boolean

EXERCÍCIO 2:
O problema é que prompt sempre retorna spring, então para obter o resultado deveria-se transformar a string em number.
O que será impresso no console é os dois números digitados pelo usuário um ao lado do outro. 

EXERCÍCIO 3:
Minha sugestão para a resolução do problema é converter string para number. 
let primeiroNumero = Number (prompt("Digite um numero!"))
let segundoNumero = Number (prompt("Digite outro numero!"))

*/

// EXERCÍCIO DE ESCRITA DE CÓDIGO
// 1.

const idade = Number (prompt ("Qual a sua idade?"))
const idadeAmigo = Number (prompt ("Qual a idade do seu melhor amigo ou melhor amiga?"))

let comparaçaoIdades = idade > idadeAmigo

console.log ("Sua idade é maior do que a do seu melhor amigo?", comparaçaoIdades)

let diferençaIdades = idade - idadeAmigo
console.log (diferençaIdades)


//2.

const numeroPar = Number (prompt ("Digite um número par:"))

const restoDivisao = numeroPar % 2
console.log (restoDivisao) // o módulo da divisão sempre será 0
// se o usuário digitar um número ímpar, o módulo da divisão será 1 


// 3.

let idadeAnos = Number (prompt ("Quantos anos você tem?"))

let idadeMeses = idadeAnos * 12
console.log ("Você tem", idadeMeses, "meses de idade")

let anosBissextos = idadeAnos / 4
let idadeDias = (idadeAnos * 365) + anosBissextos
console.log ("Você tem", idadeDias, "dias de idade")

let idadeHoras = idadeDias * 24
console.log ("Você tem", idadeHoras, "horas de idade")


// 4.

const primeiroNumero = Number (prompt ("Digite um número:"))
const segundoNumero = Number (prompt ("Digite um segundo número:"))

const primeiroMaior = primeiroNumero > segundoNumero
console.log ("O primeiro numero é maior que segundo?", primeiroMaior)

const igualdadeNumeros = primeiroNumero === segundoNumero
console.log ("O primeiro numero é igual ao segundo?", igualdadeNumeros)

const divisao1 = primeiroNumero % segundoNumero
const primeiroDivisivel = divisao1 === 0
console.log ("O primeiro numero é divisível pelo segundo?", primeiroDivisivel)

const divisao2 = segundoNumero % primeiroNumero
const segundoDivisivel = divisao2 === 0
console.log ("O segundo numero é divisível pelo primeiro?", segundoDivisivel)