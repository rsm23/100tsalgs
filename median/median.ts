function Median(a: number[]): number {
  const isEvent = a.length % 2 === 0;

  return isEvent ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(Median([2, 4, 7]));
console.log(Median([2, 4, 7, 6]));
console.log(Median([2, 4, 7, 6, 6]));
console.log(Median([2, 4, 7, 6, 6, 8]));
