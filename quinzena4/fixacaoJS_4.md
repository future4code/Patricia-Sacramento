TREINO DE JS - 4
(Patrícia Rangel)

```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
    let vezesQueAparece = 0
    let mensagemFinal

    for (let numero of arrayDeNumeros){
        if (numero === numeroEscolhido){
            vezesQueAparece += 1
        } else if (arrayDeNumeros.indexOf(numeroEscolhido) === -1){
            vezesQueAparece = 0
        }
    }

    if (vezesQueAparece === 0) {
        mensagemFinal = "Número não encontrado"
    } else {
        mensagemFinal = `O número ${numeroEscolhido} aparece ${vezesQueAparece}x`
    }

    return mensagemFinal 
}

``` 