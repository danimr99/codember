import { data } from "./data.js";

function getSolution() {
  const frequencies = {};

  data.split(" ").forEach((word) => {
    const lowerWord = word.toLowerCase();
    frequencies[lowerWord] = (frequencies[lowerWord] || 0) + 1;
  });

  return Object.entries(frequencies)
    .map(([word, frequency]) => word + frequency)
    .join("");
}

console.log(getSolution());
