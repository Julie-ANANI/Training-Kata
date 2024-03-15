//Si l'on dresse la liste de tous les nombres naturels inférieurs à 10 qui sont des multiples de 3 ou de 5, on obtient 3, 5, 6 et 9.
// La somme de ces multiples est 23.

//Terminez la solution de manière à ce qu'elle renvoie la somme de tous les multiples de 3 ou 5 inférieurs au nombre transmis.

//De plus, si le nombre est négatif, la solution renvoie 0.

//Remarque : si le nombre est un multiple de 3 et de 5, ne le comptez qu'une seule fois.

export function multiples_of_3_or_5 (numbers:Array<number>) {

   let result = 0;
   numbers.map(number => {
      if ((number % 5) === 0 || (number % 3) === 0 || ((number % 3) === 0) && (number % 5) === 0) {
        // result = ++number
         if(!result){
            result = number;
         }else{
            result = result + number;
         }
      } else if (number <= 0) {
         result = result + 0;
         return result;
      }
   })

   return result
}
