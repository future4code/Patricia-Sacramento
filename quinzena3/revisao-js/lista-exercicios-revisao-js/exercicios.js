// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInvertido = []
  let i = 1

  while (i <= array.length){
      arrayInvertido.push(array[array.length-i])
      i++
  }
  
  return arrayInvertido
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = (numero, indice, array) => {
    if (numero % 2 === 0){
        return numero
    }
}

let potenciaDois = (numero, indice, array) => {
    numero = Math.pow (numero, 2)
    return numero
}

let numerosPotenciaDois = array
    .filter(numerosPares)
    .map(potenciaDois)


  return numerosPotenciaDois
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = (numero, indice, array) => {
    if (numero % 2 === 0){
        return numero
    }
}

let arrayPares = array
    .filter(numerosPares)

  return arrayPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0

  for (let numero of array){
      if (maiorNumero < numero){
          maiorNumero = numero
      }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  let quantidadeElementos = array.length
  return quantidadeElementos
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 
  
  let booleanos = []
  
  let resultadoUm = booleano1 && booleano2 && !booleano4
  booleanos.push(resultadoUm)
  
  let resultadoDois = (booleano1 && booleano2) || !booleano3
  booleanos.push(resultadoDois)
  
  let resultadoTres = (booleano2 || booleano3) && (booleano4 || booleano1)
  booleanos.push(resultadoTres)
  
  let resultadoQuatro = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  booleanos.push(resultadoQuatro)
  
  let resultadoCinco =!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  booleanos.push(resultadoCinco)
  
  return booleanos
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
