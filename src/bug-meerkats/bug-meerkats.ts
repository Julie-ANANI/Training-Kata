export function fixTheMeerkat(arr: string[]) {
    if(arr.length > 2) {
      const elMove = arr.splice(2, 1)[0];
      arr.unshift(elMove);
      return arr;
    }
}
