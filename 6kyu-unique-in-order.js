function uniqueInOrder(iterable = "") {
  let last;
  let arr = iterable;
  if (typeof iterable === "string") arr = iterable.split("");
  return arr.filter((element) => {
    if (last !== element) {
      last = element;
      return element;
    }
  });
}

// Other clever solution
// function uniqueInOrder(iterable) {
//   return [...iterable].filter((a, i) => a !== iterable[i - 1]);
// }
