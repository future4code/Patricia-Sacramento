// EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
/*
1.a) o console vai imprimir o item (object, sendo que o object é cada objeto dentro da array original), 
a posição na array e o array original.

{ nome: "Amanda Rangel", apelido: "Mandi" } 0   { nome: "Amanda Rangel", apelido: "Mandi" },
                                                { nome: "Laís Petra", apelido: "Laura" },
                                                { nome: "Letícia Chijo", apelido: "Chijo" }

{ nome: "Laís Petra", apelido: "Laura" } 1   { nome: "Amanda Rangel", apelido: "Mandi" },
                                                { nome: "Laís Petra", apelido: "Laura" },
                                                { nome: "Letícia Chijo", apelido: "Chijo" }

{ nome: "Letícia Chijo", apelido: "Chijo" } 2   { nome: "Amanda Rangel", apelido: "Mandi" },
                                                { nome: "Laís Petra", apelido: "Laura" },
                                                { nome: "Letícia Chijo", apelido: "Chijo" }
                
*/

/*
2.a) o console imprimirá uma nova array apenas com os nomes. 
novoArrayB = ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

*/

/*
3.a) O console vai imprimir um array com os objetos do array original que tem apelidos diferentes de "Chijo"
novoArrayC = [{ nome: "Amanda Rangel", apelido: "Mandi" }, { nome: "Laís Petra", apelido: "Laura" }]

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
//1. 
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

//1.a)

const nomesDosPets = pets.map((nomePet, index, novoArray) => {
    return nomePet.nome
})

console.log(nomesDosPets) 
 
// 1.b)

const petsSalsicha = pets.filter((salsicha, index, novoArray) => {
    return salsicha.raca === 'Salsicha'
})

console.log(petsSalsicha)

//1.c) 
const poodles = (pets) => {
    return pets.raca === "Poodle"
} 

function nomePet(pets) {
    return pets.nome
} 

const poodlesNomes = pets
   .filter(poodles)
   .map(nomePet)



let mensagensDesconto = []

for (let poodle of poodlesNomes){
    mensagensDesconto.push(`Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle}!`)
}

console.log (mensagensDesconto) 

//EXERCÍCIO 2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//2.a) 
 const nomeDosProdutos = produtos.map ((produto, indice, array) => {
    return produto.nome
})

console.log (nomeDosProdutos) 
// 2.b)



