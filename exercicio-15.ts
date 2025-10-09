//Exercício 15: Escreva um programa que verifica se uma palavra é um palíndromo.
//OBS: Um palíndromo é uma palavra, frase, número ou sequência que se lê da mesma forma de trás para a frente

let palavra: string = "ovo"

let sepalindromo: boolean = true

for (let i = 0; i < palavra.length / 2; i++) {
    let letracomeco: string = palavra[i]
    let letrafim: string = palavra[palavra.length - 1 - i]
  
 
  if (letracomeco !== letrafim) {
    sepalindromo = false
    break
  }
}


if (sepalindromo) {
  console.log("A palavra '" + palavra + "' É um palíndromo")
} else 
  console.log("A palavra '" + palavra + "' Não é um palíndromo")