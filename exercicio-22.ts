// Exercício 22: Escreva um programa que determina o número de dias em um mês.

import * as readline from 'readline'

// Configura a interface de leitura/escrita.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const menu = `Escolha um mês para verificar o número de dias que ele possui:
1. Janeiro
2. Fevereiro
3. Março
4. Abril
5. Maio
6. Junho
7. Julho
8. Agosto
9. Setembro
10. Outubro
11. Novembro 
12. Dezembro

Digite o número referente à opção escolhida: `

// Faz a pergunta e processa a resposta.
rl.question(menu, (mes: string) => {

    let dias: string

    switch (mes) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":2
        case "12":
            dias = "O mês selecionado possui 31 dias."
            break

        case "4":
        case "6":
        case "9":
        case "11":
            dias = "O mês selecionado possui 30 dias."
            break

        case "2":   
            dias = "O mês selecionado possui 28 dias, ou 29 dias em anos bissextos."
            break

        default:
            dias = "Opção não identificada. Certifique-se de digitar um número de 1 a 12."
    }

    // Exibe o resultado e fecha a interface.
    console.log(dias)
    rl.close()
})
