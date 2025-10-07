//Exercício 14: Escreva um programa que verifica se um ano é bissexto.

let ano: number = 2028

if (ano % 400 === 0) {
   console.log(ano + " é um ano bissexto!")
} 
else if (ano % 100 === 0) {
    console.log(ano + " não é um ano bissexto!")
} 
else if (ano % 4 === 0) {
    console.log(ano + " é um ano bissexto!")
} 
else {
    console.log(ano + " não é um ano bissexto!")
}

//console.log(2028 é um ano bissexto!)
