//Exercício 10: Escreva um programa que recebe duas notas de um aluno, calcula a média e 
// imprime se o aluno foi aprovado ou reprovado (considerando que a média para aprovação é 7).

let n1: number = 8

let n2: number = 9

let media: number = (n1 + n2) / 2

if (media >= 7) {
    console.log(`Parabéns, você foi aprovado com ${media}`)
}
else
    console.log(`Infelizmente você foi reprovado, sua média foi ${media}`)