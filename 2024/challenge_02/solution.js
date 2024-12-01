import fs from "fs/promises";

async function readFile() {
  try {
    return await fs.readFile("log.txt", "utf8");
  } catch (err) {
    console.error(err);
  }
}

function isDigit(char) {
  return /^[0-9]$/.test(char);
}

function isLowercaseLetter(char) {
  return /^[a-z]$/.test(char);
}

function validateString(input) {
  let seenLetter = false;
  let previousLetter = "";
  let previousDigit = -1;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (isDigit(char)) {
      const currentDigit = parseInt(char);

      if (seenLetter || currentDigit < previousDigit) {
        return false;
      }

      previousDigit = currentDigit;
    } else if (isLowercaseLetter(char)) {
      if (seenLetter && char < previousLetter) {
        return false;
      }

      previousLetter = char;
      seenLetter = true;
    } else {
      return false;
    }
  }

  return true;
}

async function getSolution() {
  const log = await readFile();
  const formattedLogs = log.split("\n");

  let validAttempts = 0;
  let invalidAttempts = 0;

  for (const attempt of formattedLogs) {
    if (validateString(attempt)) {
      validAttempts++;
    } else {
      invalidAttempts++;
    }
  }

  return `${validAttempts}true${invalidAttempts}false`;
}

const solution = await getSolution();
console.log(solution);
