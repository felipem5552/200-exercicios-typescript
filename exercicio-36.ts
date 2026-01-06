for (let numero: number = 1; numero <= 100; numero++) {
    let soma: number = 0

    for (let divisor: number = 1; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            soma = soma + divisor
        }
    }

    if (soma === numero) {
        console.log(numero)
    }
}
