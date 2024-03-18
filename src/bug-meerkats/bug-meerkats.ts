export function fixTheMeerkat(arr: string[]) {
  const first = 'head';
  const second = 'body';
  const third = 'tail';
  const result = arr;
  arr.forEach(( el, idx) => {
    if(el === first){
      const elMove = result.splice(idx, 1)[0];
      result.unshift(elMove);
      return result;
    }

    if(el === second){
      const elMove = result.splice(idx, 1)[0];
      //result.unshift(elMove);
      result.splice(1, 0, elMove);
      return result;
    }

    if(el === third){
      const elMove = result.splice(idx, 1)[0];
      result.push(elMove);
      return result;
    }

  });
  arr = result;
  return arr;
}
