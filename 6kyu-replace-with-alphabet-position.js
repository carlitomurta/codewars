function alphabetPosition(text) {
  return [...text].map((a) => parseInt(a, 36) - 10).filter((a) => a >= 0);
}
