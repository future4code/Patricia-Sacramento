/* Exercícios de interpretação

1. O que será impresso no programa: 105

2. O que será impresso no programa: 101010

3. Um nome melhor para p seria "horasTrabalhadas" e para t seria "salarioDia"
*/ 


// Exercícios de escrita de código
//1.

let nome
let idade

console.log (typeof nome) // as variáveis 'nome' e 'idade' aparecem como undefined. Elas aparecem dessa forma porque não tiveram seu valor definido.
console.log (typeof idade)

nome = prompt ("Qual é o seu nome?")
idade = prompt ("Qual sua idade?")

console.log (typeof nome) //as variáveis aparecem como string, porque prompt sempre retorna string.
console.log (typeof idade)

console.log ("Olá,", nome, ".Você tem", idade, "anos")


//2.

let frio = prompt ("Você está com frio hoje?")
let casaco = prompt ("Você está vestindo um casaco?")
let meia = prompt ("Você está vestindo meia?")

console.log ("Você está com frio hoje?", frio)
console.log ("Você está vestindo um casaco?", casaco)
console.log ("Você está vestindo meia?", meia)



//3. 
let a = 10
let b = 25

let novoA = b
let novoB = a

a = novoA
b = novoB


console.log ("O novo valor de a é", a)
console.log ("O novo valor de b é", b)