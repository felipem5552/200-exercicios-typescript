//Exercício 31: Usando um laço while, crie um programa que adivinha um número que o usuário pensou, através do método de busca binária.

import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let min: number = 1
let max: number = 100

function adivinharNumero() {
  let palpite: number = Math.floor((min + max) / 2)

  rl.question(`O número é ${palpite}?
(Digite maior, menor ou correto): `, (resposta: string) => {
    resposta = resposta.trim().toLowerCase()

    if (resposta === 'maior') {
      min = palpite + 1
      adivinharNumero()
    } else if (resposta === 'menor') {
      max = palpite - 1
      adivinharNumero()
    } else if (resposta === 'correto') {
      console.log('Acertei!')
      rl.close()
    } else {
      console.log('Resposta inválida. Por favor, digite "maior", "menor" ou "correto".')
      adivinharNumero()
    }
  })
}

adivinharNumero()
