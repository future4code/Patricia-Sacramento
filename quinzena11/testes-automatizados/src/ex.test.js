import { pegaAntecessor, idadeEmDias, verificaMaiorQueDez, valorMacas, podeVotar, verificaTriangulo, podeAposentar }  from "./ex";

// Teste 1
test('Verifica se pegaAntecessor retorna o número antecessor', () => {
    expect(pegaAntecessor(1)).toBe(0)
    expect(pegaAntecessor(2)).toBe(1)
    expect(pegaAntecessor(0)).toBe(-1)
    expect(pegaAntecessor(100)).toBe(99)
    expect(pegaAntecessor(-100)).toBe(-101)
    expect(pegaAntecessor(5)).toBe(4)
}) 

// Teste 2
test ('Verifica se idadeEmDias converte a idade corretamente', () => {
    expect(idadeEmDias(10, 0, 0)).toBe(3650)
    expect(idadeEmDias(0, 10, 0)).toBe(300)
    expect(idadeEmDias(0, 0, 20)).toBe(20)
    expect(idadeEmDias(1, 10, 0)).toBe(665)
    expect(idadeEmDias(1, 0, 1)).toBe(366)
    expect(idadeEmDias(0, 2, 1)).toBe(61)

}) 

// Teste 3

test ("Verifica se verificaMaiorQueDez confere número corretamente", () => {
    expect(verificaMaiorQueDez(-10)).toBe(false)
    expect(verificaMaiorQueDez(0)).toBe(false)
    expect(verificaMaiorQueDez(1)).toBe(false)
    expect(verificaMaiorQueDez(10)).toBe(false)
    expect(verificaMaiorQueDez(11)).toBe(true)
    expect(verificaMaiorQueDez(100)).toBe(true)
})

// Teste 4

test ("Verifica se valorMacas dá preço da compra correto", () => {
    expect(valorMacas(1)).toBe(1.3)
    expect(valorMacas(5)).toBe(6.5)
    expect(valorMacas(12)).toBe(12)
    expect(valorMacas(15)).toBe(15)
    expect(valorMacas(100)).toBe(100)
}) 

// Teste 5

test ("Verifica se podeVotar confere se pessoa tem idade para votar corretamente", () => {
    expect(podeVotar(2021, 1994)).toBe(true)
    expect(podeVotar(2021, 2020)).toBe(false)
    expect(podeVotar(2021, 1964)).toBe(true)
    expect(podeVotar(2021, 1900)).toBe(true)
    expect(podeVotar(2021, 2006)).toBe(false)
    expect(podeVotar(2021, 2010)).toBe(false)
    
}) 

// Teste 6 

test ("Verifica se verificaTriangulo confere corretamente se os valores podem ser de um triângulo", () => {
    expect(verificaTriangulo(1, 1, 1)).toBe(true)
    expect(verificaTriangulo(6, 15, 20)).toBe(true)
    expect(verificaTriangulo(10, 20, 20)).toBe(true)
    expect(verificaTriangulo(100, 2, 3)).toBe(false)
    expect(verificaTriangulo(1, 20, 3)).toBe(false)
    expect(verificaTriangulo(1, 2, 30)).toBe(false)
}) 

// Teste 7

test("Verifica se podeAposentar confere corretamente se trabalhador pode aposentar", () => {
    expect(podeAposentar(1994, 2020)).toBe(false)
    expect(podeAposentar(2000, 2010)).toBe(false)
    expect(podeAposentar(1960, 2015)).toBe(false)
    expect(podeAposentar(1960, 1990)).toBe(true)
    expect(podeAposentar(1980, 1995)).toBe(false)
    expect(podeAposentar(1955, 2010)).toBe(true)
})