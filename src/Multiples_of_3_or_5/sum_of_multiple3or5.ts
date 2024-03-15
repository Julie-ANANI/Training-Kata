//Si l'on dresse la liste de tous les nombres naturels inférieurs à 10 qui sont des multiples de 3 ou de 5, on obtient 3, 5, 6 et 9.
// La somme de ces multiples est 23.
//Terminez la solution de manière à ce qu'elle renvoie la somme de tous les multiples de 3 ou 5 inférieurs au nombre transmis.
//De plus, si le nombre est négatif, la solution renvoie 0.
//Remarque : si le nombre est un multiple de 3 et de 5, ne le comptez qu'une seule fois.

export function sumOfMultiple3or5 (number) {
   let result = 0;
   const isMultipleOf3 =  3
   const isMultipleOf5 = 5

   //increment tableau of number
   //const compareValue = new Array(numbers).fill().map((x, i) => i +1);

   //compareValue.map(number => {
      if ((number % isMultipleOf5) === 0 || (number % isMultipleOf3) === 0 || ((number % isMultipleOf3) === 0) && (number % isMultipleOf5) === 0) {
         (!result)? result = number : result = result + number;
      } else if (number <= 0) {
         return result;
      }
   //});
   return result;
}
