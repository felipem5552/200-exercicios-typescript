//Exercício 32: Usando um laço do-while, crie um jogo de "Pedra, papel e tesoura" contra o computador.

import * as readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let opjogador: number
let opcomputador: number

console.log("Seja bem-vindo ao: Pedra / Papel / Tesoura vs Computador")

function jogar() {
  rl.question(`Digite o número referente a opção escolhida:
1. Pedra
2. Papel
3. Tesoura
4. Sair do Jogo
Sua escolha: `, (resposta: string) => {

    opjogador = Number(resposta.trim())

    if (opjogador === 4) {
      console.log("Saindo do jogo. Até mais!")
      rl.close()
      return
    }

    opcomputador = Math.floor(Math.random() * 3) + 1

    if (opjogador === opcomputador) {
      console.log(`Empate! O computador também escolheu ${opcomputador}`)
    } else if (
      (opjogador === 1 && opcomputador === 3) ||
      (opjogador === 2 && opcomputador === 1) ||
      (opjogador === 3 && opcomputador === 2)
    ) {
      console.log(`Parabéns, você venceu! O computador escolheu ${opcomputador}`)
    } else {
      console.log(`Você perdeu! O computador escolheu ${opcomputador}`)
    }

    rl.question("Quer jogar novamente? (s/n): ", (resposta2: string) => {
      if (resposta2 === 's') {
        jogar()
      } else {
        console.log("Obrigado por jogar! Até mais.")
        rl.close()
      }
    })
  })
}

jogar()
