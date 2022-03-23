function validParentheses(parens = "") {
  const stack = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      stack.push(parens[i]);
    } else if (stack[stack.length - 1] === "(" && parens[i] === ")") {
      stack.pop();
    } else return false;
  }
  return stack.length ? false : true;
}
