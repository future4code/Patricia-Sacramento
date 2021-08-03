// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
1.a) 
Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"


2.a)
console.log (cachorro)
nome : "Juca", idade: 3, raca: "SRD"

console.log(gato)
nome : "Juba", idade: 3, raca: "SRD"

console.log(tartaruga)
nome : "Jubo", idade: 3, raca: "SRD"

b) os três pontos significam spread, que é uma forma de copiar um objeto para o outro e alterar ou 
acrescentar apenas aquilo que quisermos. 



3.a)
false
undefined

b) a função retorna o que está contido na propriedade do objeto. O primeiro console.log imprimiu 'false', porque, no objeto pessoa, 
a propriedade 'backender' é false. O segundo console.log retorna undefined, porque no objeto 'pessoa' não há a propriedade 'altura'.

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1.a)
 const pessoa ={
    nome:"Patricia",
    apelidos: ["Pati", "Pita", "Patricinha"]
}

function nomeEApelidos (pessoa) {
    console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
}

nomeEApelidos(pessoa)
// b)

const novosApelidos ={
    ...pessoa,
    apelidos: ["Paty", "P.", "Patizinha"]
}

nomeEApelidos(novosApelidos)

//2.

const primeiraPessoa ={
    nome: 'Nelson',
    idade: 60,
    profissao: 'Analista de Sistemas'
}

const segundaPessoa ={
    nome: 'Claudia',
    idade: 58,
    profissao: 'programadora'
}

function arrayInformacoes (primeiraPessoa) {
    const informacoes = [primeiraPessoa.nome, primeiraPessoa.nome.length, primeiraPessoa.idade, primeiraPessoa.profissao, primeiraPessoa.profissao.length]
    console.log (informacoes)
}

arrayInformacoes(primeiraPessoa)
arrayInformacoes(segundaPessoa)

//3.
// a)
let carrinho = []
// b)

const primeiraFruta ={
    nome: 'Morango',
    disponibilidade: true
}

const segundaFruta ={
    nome: 'Maçã',
    disponibilidade: true
}

const terceiraFruta ={
    nome: 'Limão',
    disponibilidade: true
}
//c)
function acrescentarNoCarrinho (primeiraFruta) {
    carrinho.push(primeiraFruta)
}

acrescentarNoCarrinho(primeiraFruta)
acrescentarNoCarrinho(segundaFruta)
acrescentarNoCarrinho(terceiraFruta)
//d
console.log (carrinho) 



//DESAFIO
//1.
 const nome = prompt ("Qual o seu nome?")
const idade = Number (prompt ("Qual a sua idade?"))
const profissao = prompt("Qual a sua profissão?")

const pessoa ={
    nome: nome,
    idade: idade,
    profissao: profissao
}
console.log(`Nome: ${pessoa.nome}, profissão: ${pessoa.profissao}, idade: ${pessoa.idade}`)
console.log (typeof (pessoa)) 

//2.

 const primeiroFilme ={
    nome: "Halloween - A Noite do Terror",
    anoDeLancamento: 1978
}

const segundoFilme ={
    nome: "Halloween II - O Pesadelo Continua",
    anoDeLancamento: 1981
}

const lancadoAntes = primeiroFilme.anoDeLancamento < segundoFilme.anoDeLancamento

const lancadoJunto = primeiroFilme.anoDeLancamento == segundoFilme.anoDeLancamento

console.log("O primeiro filme foi lançado antes do segundo?", lancadoAntes)
console.log("O primeiro filme foi lançado no mesmo ano do segundo?", lancadoJunto) 

//3. 
let carrinho = []

const primeiraFruta ={
    nome: 'Morango',
    disponibilidade: true
}

const segundaFruta ={
    nome: 'Maçã',
    disponibilidade: true
}

const terceiraFruta ={
    nome: 'Limão',
    disponibilidade: true
}

function acrescentarNoCarrinho (primeiraFruta) {
    carrinho.push(primeiraFruta)
}

acrescentarNoCarrinho(primeiraFruta)
acrescentarNoCarrinho(segundaFruta)
acrescentarNoCarrinho(terceiraFruta)

function alteraDisponibilidade (primeiraFruta) {
    primeiraFruta.disponibilidade = false
}

alteraDisponibilidade(primeiraFruta)
alteraDisponibilidade(segundaFruta)
alteraDisponibilidade(terceiraFruta)

