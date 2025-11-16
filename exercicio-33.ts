// Exercício 33: Usando um laço for, imprima os primeiros 10 números da sequência de Fibonacci.

let anterior: number = 0
let atual: number = 1

console.log(anterior)
console.log(atual)    

for (let i: number = 3; i <= 10; i++) {
    
    
    let proximo = anterior + atual
    
    console.log(proximo)
    
    anterior = atual
    atual = proximo
}

// Saída: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
