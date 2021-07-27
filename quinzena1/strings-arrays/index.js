// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
1. 
a. undefined
b. null
c. 11
d. 3
e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
f. 9

2.
"SUBI NUM ÔNIBUS EM MIRROCOS, 27"
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1. 

let nomeDoUsuario = prompt ("Qual o seu nome?")
let emailDoUsuario = prompt ('Qual o seu e-mail?')

console.log (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${emailDoUsuario}!`)


// 2.
let comidasFavoritas = ["batata frita", "hambúrguer", "strogonoff", "macarrão", "bife a milanesa"]
console.log (comidasFavoritas [0], comidasFavoritas [1], comidasFavoritas [2], comidasFavoritas [3], comidasFavoritas [4])
console.log (`Essas são minhas comidas preferidas: 
    ${comidasFavoritas [0]}
    ${comidasFavoritas [1]} 
    ${comidasFavoritas [2]}
    ${comidasFavoritas [3]}
    ${comidasFavoritas [4]}`)

let comidaFavoritaUsuario = prompt ("Qual sua comida favorita? ")

comidasFavoritas[1] = comidaFavoritaUsuario
console.log (comidasFavoritas [0], comidasFavoritas [1], comidasFavoritas [2], comidasFavoritas [3], comidasFavoritas [4])



// 3.

let listaDeTarefas = []
let tarefa1 = prompt ('Digite uma tarefa que você precise realizar hoje: ')
let tarefa2 = prompt ('Digite outra tarefa que você precise realizar hoje: ')
let tarefa3 = prompt ('Digite mais uma tarefa que você precise realizar hoje: ')

listaDeTarefas.push (tarefa1, tarefa2, tarefa3)

console.log (listaDeTarefas [0], listaDeTarefas [1], listaDeTarefas [2])

let tarefaRealizada = (Number (prompt ('Digite o número da tarefa já realizada: 1, 2 ou 3')) -1)
listaDeTarefas.splice (tarefaRealizada,1)
console.log (listaDeTarefas [0], listaDeTarefas [1])