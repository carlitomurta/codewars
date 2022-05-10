function anagrams(word, words) {
  if (!word || words.length <= 0) {
    return [];
  }
  let results = [];
  const wordValue = wordToCharCode(word);
  for (let i = 0; i < words.length; i++) {
    if (wordToCharCode(words[i]) === wordValue) {
      results.push(words[i]);
    }
  }
  return results;
}

function wordToCharCode(word) {
  return word
    .split("")
    .map((val) => val.charCodeAt(0) - 97)
    .reduce((acc, value) => (acc += value));
}
