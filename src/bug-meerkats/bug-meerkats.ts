export function fixTheMeerkat(arr: string[]) {
  const result = arr;
  arr.forEach(( el, idx) => {
    console.log(idx, el);
    if(idx === 2){
      const elMove = result.splice(2, 1)[0];
      result.unshift(elMove);
      return result;
    }
  });
  arr = result;
  return arr;
}
