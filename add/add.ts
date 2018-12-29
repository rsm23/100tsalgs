function add(param1: number, param2: number): number {
  return param1 + param2;
}

function addAny(...param: number[]): number {
  let sum = 0;
  param.forEach(num => {
    sum += num;
  });
  return sum;
}

console.log(add(1, 2));
console.log(addAny(1, 2, 3, 4, 5, 6));
