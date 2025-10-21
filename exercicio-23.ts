//Exercício 23: Escreva um programa que verifica as cores de um semáforo.

let cor: string = "vermelho"

switch (cor) {
    case "vermelho":
        alert("Pare!🛑")
        break
    case "amarelo":
        alert("Atenção!⚠️")
        break
    case "verde":
        alert("Siga!🟢")
        break
    default:
        alert("Cor inválida!")
}