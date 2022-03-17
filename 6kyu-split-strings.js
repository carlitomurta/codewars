function solution(str = "") {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(str[i] + str[i + 1]);
    i++;
  }
  if (result.length > 0) {
    const item = result.pop().replace("undefined", "_");
    result.push(item);
  }
  return result;
}
