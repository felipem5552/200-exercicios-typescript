//Exercício 11: Escreva um programa que verifica se uma pessoa pode votar com base na idade.

let voto_idade: number = parseInt(prompt("Bem Vindo! Antes de começarmos as votações, precisamos saber qual é a sua idade:"))!

if (voto_idade >= 16) {
    console.log("Muito obrigado, prossiga com a votação...")
}

else if (voto_idade <= 15)
    console.log("Infelizmente não podemos prosseguir com a votação, retornando a página inicial...")

else {
    console.log("Por favor, digite uma idade válida.")
}
