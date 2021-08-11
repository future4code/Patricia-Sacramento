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

const precoDosProdutos = produtos.map ((produto, indice, array) => {
    return produto.preco
})
console.log (precoDosProdutos) 

let novosPrecos = []

for (i=0; i < precoDosProdutos.length; i++){
    let novoPreco = Number((precoDosProdutos[i]*0.95).toFixed(2))
    novosPrecos.push (novoPreco)
}


let produtosPrecoComDesconto = []

for (i=0; i < nomeDosProdutos.length; i++){
    novoArray = {
        nome: nomeDosProdutos[i],
         preco: novosPrecos[i]
    }
   
    produtosPrecoComDesconto.push(novoArray)

}

console.log (produtosPrecoComDesconto) 

//2.c)

 const produtosBebidas = produtos.filter((produto, index, novoArray) => {
    return produto.categoria === 'Bebidas'
})

console.log (produtosBebidas) 

//2.d)

 const produtosYpe = produtos.filter((produto, index, novoArray)=>{
    if (produto.nome.includes("Ypê")){
        return produto.nome
    }
})

console.log(produtosYpe) 

//2.e)

let mensagemYpe = []

for (let i=0; i < produtosYpe.length; i++){
    mensagemYpe.push(`Compre ${produtosYpe[i].nome} por R$${produtosYpe[i].preco}`)
}
console.log(mensagemYpe)