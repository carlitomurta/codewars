function productFib(prod) {
  var f = 0,
    f1 = 0,
    f2 = 1,
    check = false;
  while (!check) {
    f = f2 + f1;
    if (f1 * f2 === prod) {
      check = true;
      break;
    }
    if (f1 * f2 > prod) {
      break;
    }
    f1 = f2;
    f2 = f;
  }
  return [f1, f2, check];
}
