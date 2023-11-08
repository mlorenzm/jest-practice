function reverseString(str) {
  if (str) {
    return str.split("").reduce((acc, char) => char + acc, "");
  }
}

module.exports = reverseString;
