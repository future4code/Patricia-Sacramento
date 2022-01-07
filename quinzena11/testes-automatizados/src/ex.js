// Exercício 1
export const pegaAntecessor = (num) => {
    return num - 1
}

// Exercício 2

export const idadeEmDias = (anos, meses, dias) => {

    return (365 * anos) + (30 * meses) + dias
}

// Exercício 3

export const verificaMaiorQueDez = (num) => {
    if (num > 10) {
        return true
    } else {
        return false
    }
}

// Exercício 4

export const valorMacas = (num) => {
    if (num >= 12){
        return num 
    } else {
        return num * 1.3
    }
}

// Exercício 5

export const podeVotar = (anoAtual, anoNascimento) => {
    const idade = anoAtual - anoNascimento

    if (idade >= 16){
        return true
    } else {
        return false
    }
}

// Exercício 6

export const verificaTriangulo = (a, b, c) => {
    if (a < b + c && b < a + c && c < a + b) {
        return true
    } else {
        return false
    }
}

// Exercício 7

export const podeAposentar = (anoNascimento, ingressoEmpresa) => {
    const idade = 2022 - anoNascimento
    const anosNaEmpresa = 2022 - ingressoEmpresa

    if (idade >= 65 || anosNaEmpresa >= 30 || (idade >= 60 && anosNaEmpresa >= 25)) {
        return true
    } else {
        return false
    }
}