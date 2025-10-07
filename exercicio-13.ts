// Exercício 13: Escreva um programa que calcula o IMC (Índice de Massa Corporal) de uma pessoa e imprime uma mensagem 
// indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso ou obesa. (peso/(altura x altura))

let peso: number = 85

let altura: number = 1.84

let imc: number = peso / (altura * altura)

if (peso <= 0) {
  console.log("Digite um peso válido ❌")
} 

else if (altura <= 0) {
  console.log("Digite uma altura válida ❌")
} 

else if (imc < 18.5) {
  console.log("Seu IMC é " + imc + ". Você está abaixo do peso.")
} 

else if (imc < 25) {
  console.log("Seu IMC é " + imc + ". Você está com peso normal.")
} 

else if (imc < 30) {
 console.log("Seu IMC é " + imc + ". Você está com sobrepeso.")
} 

else {
 console.log("Seu IMC é " + imc + ". Você está obeso.")
}

//console.log(Seu IMC é " 25.11 ". Você está abaixo do peso.)