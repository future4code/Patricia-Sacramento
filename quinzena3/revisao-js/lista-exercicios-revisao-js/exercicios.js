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
  let par = 0

  let numerosPares = []
  
  for (let i = 0; i < n; i++) {
  
      numerosPares.push(par)
      par +=2
      
  }
  return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'  
  if (a === b && a === c) {
    return 'Equilátero'
  } else if (a === b || a === c || b === c){
    return 'Isósceles'
  } else if (a !== b && a !== c && b !== c){
    return 'Escaleno'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let comparaNumeros = {
    maiorNumero: 0,
    maiorDivisivelPorMenor: true,
    diferenca: 0
  }

  if (num1 > num2){
    comparaNumeros.maiorNumero = num1
    if (num1 % num2 === 0){
        comparaNumeros.maiorDivisivelPorMenor = true
    } else{
        comparaNumeros.maiorDivisivelPorMenor = false
    }
    comparaNumeros.diferenca = num1 - num2
  } else {
    comparaNumeros.maiorNumero = num2
    if (num2 % num1 === 0){
      comparaNumeros.maiorDivisivelPorMenor = true
    } else{
      comparaNumeros.maiorDivisivelPorMenor = false
    }
    comparaNumeros.diferenca = num2 - num1
  }
  return comparaNumeros
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let maiorNumero = -Infinity

  let menorNumero = Infinity
  
  for (let numero of array){
      if (maiorNumero < numero){
           maiorNumero = numero
      }
  }
      
  
  for (let numero of array){
      if (menorNumero > numero){
          menorNumero = numero
      }
  }
  
  
  let indexMaior = array.indexOf(maiorNumero)
  array.splice(indexMaior, 1)
  
  
  let indexMenor = array.indexOf(menorNumero)
  array.splice(indexMenor, 1)
  
  
  let segundoMaior = menorNumero
  let segundoMenor = maiorNumero
  
  for (let numero of array){
      if (segundoMaior < numero){
          segundoMaior = numero
      }    
  }
  
  
  for (let numero of array){
      if (segundoMenor > numero){
          segundoMenor = numero
      }
  }
  
  let arraySegundosNumeros = [segundoMaior, segundoMenor]
      
  
  return arraySegundosNumeros
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let copiaArray = [...array]
  let ordemCrescente = []
  
  const tamanhoArrayOriginal = array.length
  let i = 0
  
  while (i < tamanhoArrayOriginal){
      let menorNumero = Infinity
      for (let numero of copiaArray){
          if (menorNumero > numero){
              menorNumero = numero 
          }  
      
      }
      ordemCrescente.splice(i, 1, menorNumero)
      copiaArray.splice(copiaArray.indexOf(menorNumero), 1)
      i++
  }
  
  return ordemCrescente
}

// EXERCÍCIO 12
function filmeFavorito() {
  let filmeFavoritoAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filmeFavoritoAstrodev
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  let filmeFavoritoAstrodev = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  }
  let chamada = `Venha assistir ao filme ${filmeFavoritoAstrodev.nome}, de ${filmeFavoritoAstrodev.ano}, dirigido por ${filmeFavoritoAstrodev.diretor} e estrelado por ${filmeFavoritoAstrodev.atores}.`
  return chamada
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
