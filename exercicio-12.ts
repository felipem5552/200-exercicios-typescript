// Exercício 12: Verifique a situação de um estudante de acordo com sua média final.

let media: number = 8

if (media >= 7) {
  console.log("Parabéns aluno! Você foi aprovado ✅")
} 
else if (media >= 5) {
  console.log("Sua média não foi suficiente para ser aprovado, porém elegível para recuperação ⚠️")
} 
else if (media >= 0) {
  console.log("Infelizmente você foi reprovado ❌")
} 
else {
  console.log("Digite uma nota válida ❌")
}