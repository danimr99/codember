import fs from "fs/promises";

async function readFile() {
  try {
    return await fs.readFile("trace.txt", "utf8");
  } catch (err) {
    console.error(err);
  }
}

function processLine(string) {
  const values = string.split(" ").map(Number);

  let steps = 0;
  let position = 0;

  while (position >= 0 && position < values.length) {
    steps++;

    const jump = values[position];

    values[position] += 1; // Increment the current instruction
    position += jump; // Move to the next position based on the jump
  }

  return steps; // Return the number of steps it took to escape
}

async function getSolution() {
  const data = await readFile();
  const formattedData = data.split("\n");

  let totalSum = 0;
  let lastLineSteps = 0;

  for (let i = 0; i < formattedData.length; i++) {
    const steps = processLine(formattedData[i]);

    totalSum += steps;

    if (i === formattedData.length - 1) {
      lastLineSteps = steps;
    }
  }

  return `${totalSum}-${lastLineSteps}`;
}

const solution = await getSolution();
console.log(solution);
