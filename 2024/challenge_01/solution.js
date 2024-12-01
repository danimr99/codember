import { data } from "./data.js";

function getSolution() {
  const [lock, instructions] = data.split(" ");
  const lockDigits = lock.split("");

  let digitPosition = 0;

  const instructionHandler = {
    R: () => {
      digitPosition = (digitPosition + 1) % lockDigits.length;
    },
    L: () => {
      digitPosition =
        (digitPosition - 1 + lockDigits.length) % lockDigits.length;
    },
    U: () => {
      lockDigits[digitPosition] =
        (parseInt(lockDigits[digitPosition]) + 1) % 10;
    },
    D: () => {
      lockDigits[digitPosition] =
        (parseInt(lockDigits[digitPosition]) - 1 + 10) % 10;
    },
  };

  for (const instruction of instructions) {
    instructionHandler[instruction]();
  }

  return lockDigits.join("");
}

console.log(getSolution());
