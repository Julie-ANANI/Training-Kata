export function fixTheMeerkat(arr: string[]) {
  const result = arr;
  const tabCompare = [
    {value : ['head', 'heads', 'top' , 'sky', 'upper legs'], idx : 1},
    {value : ['body', 'middle', 'rainbow', 'torso'], idx : 2},
    {value : ['tail', 'tails', 'bottom', 'ground', 'lower legs'], idx : 3},
  ];
  const getIndexForValue = (value: string) => {
    const item = tabCompare.find(item => item.value.includes(value));
    return item ? item.idx : -1;
  };

  result.sort((a, b) => {
    return getIndexForValue(a) - getIndexForValue(b);
  });
  return result;
}
