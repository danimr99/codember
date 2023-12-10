import { colors } from "./data.js";

function getSolution() {
  let maxZebra = 1;
  let currentZebra = 1;
  let lastColor = colors[0];

  for (let index = 0; index < colors.length; index++) {
    if (colors[index] === colors[index + 1]) {
      currentZebra = 1;
    } else if (colors[index + 1] !== colors[index - 1]) {
      currentZebra = 2;
    } else {
      currentZebra++;
    }

    if (currentZebra >= maxZebra) {
      maxZebra = currentZebra;
      lastColor = colors[index - 1];
    }
  }

  return `${maxZebra}@${lastColor}`;
}

console.log(getSolution());
