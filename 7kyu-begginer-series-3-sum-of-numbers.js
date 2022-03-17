function getSum(a, b) {
  const bigger = a > b ? a : b;
  const lowest = a < b ? a : b;
  let sum = lowest;
  for (let i = lowest; i < bigger; i++) {
    sum += i + 1;
  }
  return sum;
}
