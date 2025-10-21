//Exercício 30: Usando um laço for, imprima todos os números primos de 1 a 100.

for (let n: number = 2; n <= 100; n++) { 
   
   let primo: boolean = true

   for (let divisor: number = 2; divisor < n; divisor++) { 
      
      if (n % divisor === 0) {
         primo = false
         break
      }
   }
   
   if (primo) { 
      console.log(n); 
   }
}