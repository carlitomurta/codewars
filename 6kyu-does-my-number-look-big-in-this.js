function narcissistic(value) {
    const string = value.toString();
    const digits = string.length;
    let result = 0;
    for (let i = 0; i < digits; i++) {
        result += string[i] ** digits;
    }
    return string == result
}