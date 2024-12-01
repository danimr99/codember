import fs from "fs/promises";

async function readFile() {
  try {
    return await fs.readFile("./nodes.txt", "utf8");
  } catch (err) {
    console.error(err);
  }
}

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function sumOfDigits(n) {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

function getSolution(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);

  const validNumbers = [];

  for (const number of sortedNumbers) {
    if (isPrime(number) && isPrime(sumOfDigits(number))) {
      validNumbers.push(number);
    }
  }

  const total = validNumbers.length;
  const third = validNumbers[2];

  return `${total}-${third}`;
}

const file = await readFile();
const nodes = JSON.parse(file);

console.log(getSolution(nodes));
