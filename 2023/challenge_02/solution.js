import { data } from "./data";

const OPERATIONS = Object.freeze({
  INCREASE: "#",
  DECREASE: "@",
  MULTIPLY: "*",
  PRINT: "&",
});

function getSolution() {
  let solution = "";
  let numericValue = 0;

  for (const symbol of data) {
    switch (symbol) {
      case OPERATIONS.INCREASE:
        numericValue++;
        break;
      case OPERATIONS.DECREASE:
        numericValue--;
        break;
      case OPERATIONS.MULTIPLY:
        numericValue *= numericValue;
        break;
      case OPERATIONS.PRINT:
        solution += numericValue.toString();
        break;
    }
  }

  return solution;
}

console.log(getSolution());
