// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
// EXERCÍCIO 1
a) O código pede um número ao usuário e testa se o módulo da divisão do número por 2 é igual a 0.
Caso seja true, imprime no console "passou no teste". Caso o resultado seja false, imprime "não passou no teste".

b) Quando o número é par (módulo da divisão do número por 2 é 0),"Passou no teste"
será impresso no console.

c) A mensagem "Não passou no teste" aparece quando o número é ímpar, ou seja, 
seu módulo da divisão é diferente de 0. 

// EXERCÍCIO 2
a) O código serve para dar o preço da fruta escolhida pelo usuário. 

b) Se o valor de fruta for "Maçã", será impresso no console: "O preço da fruta Maçã é R$ 2.25"

c) Ao tirar o break, o console imprimiria "O preço da fruta Pêra é R$ 5", porque o break for tirado o código
continuará sendo executado. O preço receberá o valor do último 'preço', que é 5.

// EXERCÍCIO 3
a) A primeira linha pede ao usuário para digitar um número e transforma a string recebida pelo prompt em número.

b) Se o usuário digitar 10, a mensagem impressa será "Esse número passou no teste". 
Se ele digitar -10, nada será impresso no console.

c) Há um erro no console. Da forma que o código está escrito, a variável "mensagem" está declarada no escopo local,
ou seja, dentro do bloco de código do 'if'. Como o console.log (mensagem) está fora do 'if', portanto fora do escopo
local, a variável "mensagem" não é acessível. Se o console.log (mensagem) estivesse dentro do 'if', o valor da
variável "mensagem" seria impresso no console. 
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 1. 
function verificaSePodeDirigir () {
    let maioridade = Number (prompt ('Qual a sua idade? '))

    if (maioridade >= 18){
        console.log ("Você pode dirigir.")
    } else {
        console.log ("Você não pode dirigir.")
    }
}

verificaSePodeDirigir()

// EXERCÍCIO 2.

let turnoDeEstudo = prompt ("Em que turno você estuda? Digite 'M' para matutino, 'V' para vespertino e 'N' para noturno: ").toLowerCase()

if (turnoDeEstudo === "m") {
    console.log("Bom dia!")
} else if (turnoDeEstudo === "v"){
    console.log("Boa tarde!")
} else {
    console.log("Boa noite!")
}


// EXERCÍCIO 3.
let turnoDeEstudo = prompt ("Em que turno você estuda? Digite 'M' para matutino, 'V' para vespertino e 'N' para noturno: ").toLowerCase()
switch (turnoDeEstudo){
    case 'm':
        console.log ("Bom dia!")
        break
    case 'v':
        console.log ("Boa tarde!")
        break
    case 'n':
        console.log ("Boa noite!")
        break
}

// EXERCÍCIO 4
function verFilme (){
    let genero = prompt ("Qual o gênero do filme escolhido? ").toLowerCase()
    let precoIngresso = Number (prompt ("Qual o preço do ingresso? "))

    if (genero === 'fantasia' && precoIngresso < 15) {
        console.log ("Bom filme!")
    } else {
        console.log ("Escolha outro filme :(")
    }
}

verFilme()

// DESAFIOS
// DESAFIO 1.
function verFilme (){
    let genero = prompt ("Qual o gênero do filme escolhido? ").toLowerCase()
    let precoIngresso = Number (prompt ("Qual o preço do ingresso? "))
    let lanchinho = prompt ("Qual lanchinho você vai comprar? ")

    if (genero === 'fantasia' && precoIngresso < 15) {
        console.log (`Bom filme! E aproveite o seu ${lanchinho}`)
    } else {
        console.log ("Escolha outro filme :(")
    }
}

verFilme()

// DESAFIO 2.

function ingresso () {

    let nomeCompleto = prompt ("Digite seu nome completo: ")
    let tipoDeJogo = prompt ("Qual o tipo do jogo? Digite 'IN' para jogo Internacional e 'DO' para doméstico: ").toUpperCase()
    let etapaDoJogo = prompt ("Qual a etapa do jogo? Digite 'SF' para semi-final, 'DT' para decisão de terceiro lugar, 'FI' para final: ").toUpperCase()
    let categoriaJogo = Number(prompt("Qual a categoria do jogo? 1, 2, 3 ou 4: "))
    let quantidadeDeIngressos = Number(prompt("Quantos ingressos você deseja? "))
    let valorDoIngresso = Number()
    let etapaDoJogoIngresso

    const jogoDomestico = [
    {etapa: 'SemiFinal', valor: [1320, 880, 550, 220]},
    {etapa: 'Decisão do 3° Lugar', valor: [660, 440, 330, 170]},
    {etapa: 'Final', valor: [1980, 1320, 880, 330]}
    ]

    if (etapaDoJogo === 'SF') {
        valorDoIngresso = jogoDomestico[0].valor[categoriaJogo-1]
        etapaDoJogoIngresso = 'SemiFinal'
    } else if (etapaDoJogo === 'DT') {
        valorDoIngresso = jogoDomestico[1].valor[categoriaJogo-1]
        etapaDoJogoIngresso = 'Decisão do 3° Lugar'
    } else if (etapaDoJogo === 'FI') {
        valorDoIngresso = jogoDomestico[2].valor[categoriaJogo-1]
        etapaDoJogoIngresso = 'Final'
    }


    if (tipoDeJogo === 'DO') {
        console.log ("--- Dados da Compra ---")
        console.log (`Nome do cliente: ${nomeCompleto}`)
        console.log (`Tipo de jogo: Nacional`)
        console.log (`Etapa do jogo: ${etapaDoJogoIngresso}`)
        console.log (`Categoria do jogo: ${categoriaJogo}`)
        console.log (`Quantidade de ingressos: ${quantidadeDeIngressos}`)
        console.log (`---Valores---`)
        console.log (`Valor do Ingresso: R$ ${valorDoIngresso}`)
        console.log (`Valor Total: R$ ${(valorDoIngresso*quantidadeDeIngressos)}`)

    } else if (tipoDeJogo === 'IN') {
        let valorDoIngressoIn = valorDoIngresso/4.1

        console.log ("--- Dados da Compra ---")
        console.log (`Nome do cliente: ${nomeCompleto}`)
        console.log (`Tipo de jogo: Internacional`)
        console.log (`Etapa do jogo: ${etapaDoJogoIngresso}`)
        console.log (`Categoria do jogo: ${categoriaJogo}`)
        console.log (`Quantidade de ingressos: ${quantidadeDeIngressos}`)
        console.log (`---Valores---`)
        console.log (`Valor do Ingresso: U$ ${valorDoIngressoIn}`)
        console.log (`Valor Total: U$ ${valorDoIngressoIn*quantidadeDeIngressos}`)
    }

}

ingresso()



