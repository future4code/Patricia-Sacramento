//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/* 1.
a)
10
50

b) nada apareceria no console. Ao chamar a função, você pede que ela seja executada,
mas como não foi solicitado que ela imprima nada no console (o que é feito por meio do console.log),nada será impresso. 

2. 
a) a função coloca a string ('texto') em letra minúscula e confere se a palavra "cenoura" está nessa string. 

b) a saída do console será:
i. true
ii. true (porque a função coloca o texto em letra minúscula, então conseguiria reconhecer a palavra 'cenoura')
iii. true (porque a palavra 'cenoura' está em 'cenouras')
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1. 
// a. 

function bio ()
{ 
    console.log ('Eu sou Patrícia, tenho 27 anos, moro em Fortuna de Minas e sou estudante')
}

console.log (bio ()) 

// b.

let nome = prompt ("Digite seu nome: ")
let idade = Number (prompt ("Digite a sua idade: "))
let cidade = prompt ("Digite o nome da cidade em que você mora: ")
let profissão = prompt ("Digite sua profissão: ")

function bio ()
{ 
    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}`)
}

console.log (bio ()) 


//2.
//a.

function somaNumeros (primeiroNumero, segundoNumero) {
    const soma = primeiroNumero + segundoNumero
    return soma
}

console.log (somaNumeros(2,8))

// b.

function maiorOuIgual (primeiroNumero, segundoNumero) {
    const comparacao = primeiroNumero >= segundoNumero
    return comparacao
}
console.log (maiorOuIgual (2,10))


//c. 

function parOuImpar (primeiroNumero) {
    const par = primeiroNumero % 2 == 0
    return par
}
console.log (parOuImpar (16))


//d. 

function texto (mensagem){
    mensagem = prompt ("digite uma mensagem: ").toUpperCase ()
    console.log (mensagem.length)
    console.log (mensagem)
   }

console.log (texto())


//3. 

let primeiroNumero = Number (prompt ("Digite um número: "))
let segundoNumero = Number (prompt ( "Digite um segundo número: "))

function somarNumeros (primeiroNumero, segundoNumero) {
    let soma = primeiroNumero + segundoNumero
    return soma
}

function subtrairNumeros (primeiroNumero, segundoNumero) {
    let diferenca = primeiroNumero - segundoNumero
    return diferenca
}

function multiplicarNumeros (primeiroNumero, segundoNumero) {
    let multiplicacao = primeiroNumero * segundoNumero
    return multiplicacao
}

function dividirNumeros (primeiroNumero, segundoNumero) {
    let divisao = primeiroNumero / segundoNumero
    return divisao
}

console.log (`Números inseridos: ${primeiroNumero} e ${segundoNumero}`)
console.log (`Soma: ${somarNumeros (primeiroNumero, segundoNumero)}`)
console.log (`Subtração: ${subtrairNumeros (primeiroNumero, segundoNumero)}`)
console.log (`Multiplicação: ${multiplicarNumeros (primeiroNumero, segundoNumero)}`)
console.log (`Divisão: ${dividirNumeros (primeiroNumero, segundoNumero)}`)