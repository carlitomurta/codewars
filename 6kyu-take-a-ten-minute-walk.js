function isValidWalk(walk) {
  if (!walk instanceof Array) {
    return false;
  }
  if (walk.length === 10) {
    const directions = ["n", "s", "w", "e"];
    const counts = { n: 0, s: 0, w: 0, e: 0 };
    walk.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    console.log(counts);
    if (counts.n !== counts.s) {
      return false;
    }
    if (counts.w !== counts.e) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}
