const MIN = 11098;
const MAX = 98123;
const PASSWORD_LENGTH = 5;
const REPEATABLE_NUMBER = 5;
const REPEATABLE_MIN_OCCURRENCES = 2;

function getSolution() {
  let passwords = [];

  for (let number = MIN; number < MAX; number++) {
    const password = String(number);
    const occurrences = password.split(REPEATABLE_NUMBER.toString()).length - 1;
    const isValid = [...password].every(
      (digit, index, array) => index === 0 || digit >= array[index - 1]
    );

    if (occurrences >= REPEATABLE_MIN_OCCURRENCES && isValid) {
      passwords.push(password);
    }
  }

  return `${passwords.length}-${passwords[55]}`;
}

console.log(getSolution());
