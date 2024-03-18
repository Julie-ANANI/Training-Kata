export function fixTheMeerkat(arr: string[]) {
  const result = arr;
  arr.forEach(( el, idx) => {
    if(el === 'head'){
      const elMove = result.splice(idx, 1)[0];
      result.unshift(elMove);
      return result;
    }
  });
  arr = result;
  return arr;
}
