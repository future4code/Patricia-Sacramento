TREINO JS

```
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]

 // Escreva seu código aqui
  let nomes = (animal, indice, novoArray) => {
      return animal.nome
  }
  
  let nomeAnimais = animais.map (nomes)
  
  return nomeAnimais
}
```