TREINO DE JAVASCRIPT 03
(Patrícia Rangel) 

```
function calculaNota(ex, p1, p2) {

  let media = (ex + (p1 * 2) + (p2 * 3)) / 6
  
  let conceito
  
  if (media >= 9) {
      conceito = "A" 
      return conceito
  } else if (media < 9 && media >= 7.5){
      conceito = "B" 
      return conceito
  } else if (media < 7.5 && media >= 6){
      conceito = "C" 
      return conceito
  } else if (media < 6) {
      conceito = "D" 
      return conceito
  }
}

``` 