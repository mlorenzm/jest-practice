function capitalize(str) {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

function reverseString(str) {
  if (str) {
    return str.split("").reverse().join("");
  }
}

module.exports = capitalize;
