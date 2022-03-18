function high(x = "") {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const words = [];
  x.split(" ").forEach((word, i) => {
    words.push({
      word,
      value: word
        .split("")
        .map((char) => alphabet.indexOf(char) + 1)
        .reduce((prev, curr) => prev + curr),
    });
  });
  let biggest = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].value > biggest) {
      biggest = words[i].value;
    }
  }
  return words.filter((word) => word.value === biggest)[0].word;
}
