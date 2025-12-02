//Exercício 34: Usando um laço while, imprima os números de 1 a 100, mas para múltiplos de 3 imprima "Fizz" 
//e para múltiplos de 5 imprima "Buzz". Para números que são múltiplos de ambos, imprima "FizzBuzz" (Problema FizzBuzz).

let num: number = 1

while (num <= 100) {

    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz")
    } 
    
    else if (num % 3 === 0) {
        console.log("Fizz")
    } 
    
    else if (num % 5 === 0) {
        console.log("Buzz")
    } 
    
    else {
        console.log(num)
    }

    num++
}

