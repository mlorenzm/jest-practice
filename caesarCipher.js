function isUpperCase(str) {
  return str === str.toUpperCase();
}

function caesarCipher(str, key) {
  let decipher = ""; // our response
  let symbols = ["!", ",", ".", " "]; // our symbols to ignore
  if (key < 0) {
    // wraps backwards if key is negative
    key = 26 + (key % 26);
  }
  //decipher each letter
  for (let i = 0; i < str.length; i++) {
    // symbols
    if (symbols.includes(str[i])) {
      decipher += str[i];
    } else if (key > 0) {
      // uppercase
      if (isUpperCase(str[i])) {
        // wraps forwards
        decipher += String.fromCharCode(
          ((str.charCodeAt(i) + key - 65) % 26) + 65
        );
      } else {
        //lowercase
        decipher += String.fromCharCode(
          ((str.charCodeAt(i) + key - 97) % 26) + 97
        );
      }
    }
  }

  return decipher;
}

module.exports = caesarCipher;
