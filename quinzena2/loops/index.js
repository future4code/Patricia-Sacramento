// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
1. O código altera o valor da variável "valor". A cada loop, a variável "i" é incrementada e seu valor
é somado ao da variável "valor", que passa a ter um novo valor. O loop acontecerá até que "i" seja igual a 4.
O "valor" impresso no console é o resultado final, que é 10

2. 
a) O console imprimirá os valores da lista que são maiores que 18:
19 
21
23
25
27.

b) Não sei se entendi a pergunta, mas é possível acessar o índice usando o for...of. 
Eu pedi para que a cada 'número' da 'lista', fosse impresso a sua posição na array (IndexOf). 
Fiz da seguinte forma: 

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
	console.log(`O número ${numero} ocupa a posição ${lista.indexOf(numero)} na lista`)
	
}

3.
O resultado impresso no console seria: 
*
**
***
****

*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 1.
 function pets () {
	let pets = Number (prompt ("Quantos pets você tem?"))
	let nomesDosPets = []

	if (pets === 0){
		console.log ("Que pena! Você pode adotar um pet!")
	} else {
		for (let i = 1; i <= pets; i++) {
			let nome = (prompt("Digite o nome de um dos seus pets: "))
			nomesDosPets.push (nome)			
		}
	}
	console.log (nomesDosPets)
}
pets () 

// EXERCÍCIO 2.

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayPares = []
let arrayStrings = []

//2.a)
 for (let numeroArray of arrayOriginal) {
	console.log (numeroArray)
} 

//2.b)
 for (let numeroArray of arrayOriginal) {
	console.log (numeroArray/10)
} 

//2.c)
for (let i = 0; i <= arrayOriginal.length; i++) {
	
	let numero = arrayOriginal[i]
	if (numero % 2 === 0){
		arrayPares.push (numero)
	}
}
console.log (arrayPares)

// 2.d)
for (let numero of arrayOriginal) {
	numero = numero.toString()
	arrayStrings.push(numero)
	console.log (`O elemento do índex ${arrayStrings.indexOf(numero)} é: ${numero}`)
}
console.log(arrayStrings)

//2. e)
let maiorValor = 0

function retornaMaiorValor (){
	for (let numero of arrayOriginal){
		if (numero > maiorValor){
			maiorValor = numero
		}
	}
	return maiorValor
} 

retornaMaiorValor()

let menorValor = maiorValor

function retornaMenorValor (){
	for (let numero of arrayOriginal){
		if (numero < menorValor){
			menorValor = numero
		}
	}
	return menorValor
} 

retornaMenorValor()

console.log (`O maior valor é ${maiorValor} e o menor valor é ${menorValor}`) 

// DESAFIO
//DESAFIO 1.

let numeroEscolhido = Number (prompt("Primeiro jogador -> escolha um número: "))
console.log("Vamos jogar!")
let numeroChutado
let tentativas = 0

while (numeroChutado !== numeroEscolhido){
	numeroChutado = Number (prompt("Segundo jogador -> Chute um número: "))
	console.log (`O número chutado foi: ${numeroChutado}`)
	tentativas++
		
	if (numeroChutado < numeroEscolhido) {
		console.log ("Errou!!! O número escolhido é maior")
	} else if (numeroChutado > numeroEscolhido) {
		console.log ("Errou!!! O número escolhido é menor")
	} else if (numeroChutado === numeroEscolhido) {
		console.log ("Acertou!!!")
		console.log (`O número de tentativas foi ${tentativas}`)
	}
	
}

//DESAFIO 2.
console.log("Vamos jogar!")
 
let numeroEscolhido = Math.floor(Math.random() * 100 + 1)

let numeroChutado
let tentativas = 0 

 while (numeroChutado !== numeroEscolhido){
	numeroChutado = Number (prompt("Chute um número de 0 a 100: "))
	console.log (`O número chutado foi: ${numeroChutado}`)
	tentativas++
		
	if (numeroChutado < numeroEscolhido) {
		console.log ("Errou!!! O número escolhido é maior")
	} else if (numeroChutado > numeroEscolhido) {
		console.log ("Errou!!! O número escolhido é menor")
	} else if (numeroChutado === numeroEscolhido) {
		console.log ("Acertou!!!")
		console.log (`O número de tentativas foi ${tentativas}`)
	}
	
}



