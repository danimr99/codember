import { encrypted } from "./data.js";

const A_LOWERCASE_ASCII_CODE = 97;
const Z_LOWERCASE_ASCII_CODE = 122;

function getSolution() {
  let message = "";

  const words = encrypted.split(" ");
  words.forEach((word) => {
    let letter = "";

    for (let i = 0; i < word.length; i++) {
      letter += word[i];

      const ascii = parseInt(letter);

      if (ascii >= A_LOWERCASE_ASCII_CODE && ascii <= Z_LOWERCASE_ASCII_CODE) {
        message += String.fromCharCode(ascii);
        letter = "";
      }
    }

    message += " ";
  });

  return message;
}

console.log(getSolution());
