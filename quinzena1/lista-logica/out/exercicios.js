// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  
  let alturaRetangulo = Number (prompt ("Digite a altura do retângulo:"))
  let larguraRetangulo = Number (prompt ("Digite a largura do retângulo: "))
  let areaRetangulo = alturaRetangulo * larguraRetangulo

  console.log (areaRetangulo)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui

  let anoAtual = Number (prompt ('Digite o ano atual:'))
  let anoNascimento = Number (prompt ('Digite seu ano de nascimento: '))

  let idade = anoAtual - anoNascimento
  console.log (idade)

}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui

  let peso = Number (prompt ('Digite seu peso em kg: '))
  let altura = Number (prompt ('Digite sua altura em m: '))

  let imc = peso / (altura * altura)
  console.log (imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui

  let nome = prompt ('Qual o seu nome?')
  let idade = prompt ('Qual sua idade? ')
  let email = prompt ('Qual o seu e-mail? ')

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui

  let cor1 = prompt ('Digite sua cor favorita: ')
  let cor2 = prompt ('Digite sua segunda cor favorita: ')
  let cor3 = prompt ('Digite sua terceira cor favorita: ')

  console.log ([cor1, cor2, cor3])
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui

  let mensagem = prompt ('Digite uma mensagem: ')
  console.log (mensagem.toUpperCase ())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui

  let custoEspetaculo = Number (prompt ('Digite o custo do espetáculo: '))
  let valorIngresso = Number (prompt ("Qual o valor do ingresso? "))

  let numeroIngressos = custoEspetaculo / valorIngresso
  console.log (numeroIngressos)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui

  let frase1 = prompt ('Digite uma mensagem: ')
  let frase2 = prompt ('Digite outra mensagem: ')

  console.log (frase1.length === frase2.length)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui

  let frase1 = prompt ('Digite uma mensagem: ').toUpperCase()
  let frase2 = prompt ('Digite outra mensagem: ').toUpperCase()

  console.log (frase1 === frase2)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui

  let anoAtual = Number (prompt ('Digite o ano atual: '))
  let anoNascimento = Number (prompt ('Digite o ano de seu nascimento: '))
  let anoIdentidade = Number (prompt ('Em que ano sua carteira de identidade foi emitida? '))

  let idade = anoAtual - anoNascimento
  let idadeCarteira = anoAtual - anoIdentidade
  
  let renovarCriterio1 = idade <= 20 && idadeCarteira >= 5
  let renovarCriterio2 = idade >= 20 && idade <= 50 && idadeCarteira >= 10
  let renovarCriterio3 = idade > 50 && idadeCarteira >= 15

  console.log (renovarCriterio1 || renovarCriterio2 || renovarCriterio3) 

}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui

  let anoEscolhido = Number (prompt ('Digite um ano: '))

  let primeiraCondicao = (anoEscolhido % 400) === 0

  let multiploQuatro = (anoEscolhido % 4) === 0
  
  let naoMultiploCem = (anoEscolhido % 100) !== 0

  let segundaCondicao = multiploQuatro && naoMultiploCem 
    
  
  console.log (primeiraCondicao || segundaCondicao)    
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui

  let maiorDeIdade = prompt ("Você tem mais de 18 anos? (Sim/Não)").toUpperCase ()
  let ensinoMedio = prompt ("Você possui ensino médio completo? (Sim/Não)").toUpperCase ()
  let disponibilidade = prompt ("Você possui disponibilidade exclusiva durante os horários do curso? (Sim/Não)").toUpperCase ()

  let resposta1 = maiorDeIdade === "SIM"
  let resposta2 = ensinoMedio === "SIM"
  let resposta3 = disponibilidade === "SIM"

  let fazerCurso = resposta1 && resposta2 && resposta3
  console.log (fazerCurso)
}