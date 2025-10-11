// Exercício 21: Escreva um programa que determina a estação do ano com base no mês.
// Este código usa o input (string) diretamente no switch-case.

import * as readline from 'readline'

// 1. Configura a interface de leitura/escrita.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const menu = `Escolha um mês para verificar sua estação do ano:
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

Digite o número referente a opção escolhida:`


// 2. Faz a pergunta e processa a resposta.
rl.question(menu, (mes: string) => {
    
    let estacao: string
    
    switch(mes){
        case "12":
        case "1":
        case "2":
            estacao = "Verão"
            break
            
        case "3":
        case "4":
        case "5":
            estacao = "Outono"
            break
            
        case "6":
        case "7":
        case "8":
            estacao = "Inverno"
            break;
            
        case "9":
        case "10":
        case "11":
            estacao = "Primavera"
            break
            
        default:
            estacao = "Esse número não representa um mês válido"
    }

    // 4. Exibe o resultado e fecha a interface.
    console.log(estacao)
    rl.close()
})