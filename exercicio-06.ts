// Exercício 6: Declare duas variáveis e atribua valores booleanos a elas. 
// Use os operadores lógicos AND, OR e NOT para realizar operações lógicas entre as variáveis. 
// Imprima os resultados.

let a: boolean = true
let b: boolean = false

//Aplicar operadores lógicos
let resultadoAND: boolean = a && b
let resultadoOR: boolean = a || b
let resultadoNOTA: boolean = !a
let resultadoNOTB: boolean = !b

console.log(`Resultados das operações lógicas:
a AND b: ${resultadoAND}
a OR b: ${resultadoOR}
NOT a: ${resultadoNOTA}
NOT b: ${resultadoNOTB}`)