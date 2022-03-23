const romans = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};
class RomanNumerals {
  static toRoman(number = 0) {
    let roman = "",
      i;
    for (i in romans) {
      while (number >= romans[i]) {
        roman += i;
        number -= romans[i];
      }
    }
    return roman;
  }

  static fromRoman(roman = "") {
    const array = roman.split("");
    let total = 0;
    let current;
    let currentValue;
    let next;
    let nextValue;

    for (let i = 0; i < array.length; i++) {
      current = array[i];
      currentValue = romans[current];
      next = array[i + 1];
      nextValue = romans[next];
      if (currentValue < nextValue) total -= currentValue;
      else total += currentValue;
    }

    return total;
  }
}
