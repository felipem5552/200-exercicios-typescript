//Exercício 26: Usando um laço do-while, imprima os números ímpares de 1 a 20.

let n: number = 1

do {
    if (n % 2 != 0) {
        console.log(n)
    }
    n++
} while (n != 20)