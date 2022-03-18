function add(a = "", b = "") {
  const mLength = Math.max(a.length, b.length);
  let carry = 0,
    sum = "";
  for (let i = 1; i <= mLength; i++) {
    let _a = +a.charAt(a.length - i);
    let _b = +b.charAt(b.length - i);
    let t = carry + _a + _b;
    carry = (t / 10) | 0;
    t %= 10;
    sum = i === mLength && carry ? carry * 10 + t + sum : t + sum;
  }

  return sum;
}
