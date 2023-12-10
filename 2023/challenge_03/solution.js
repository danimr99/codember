import { data } from "./data";

const PASSWORDS_VISIBILITY = Object.freeze({
  SHOW_VALID: true,
  SHOW_INVALID: false,
});

const PASSWORD_POSITION = 42;

function getSolution(passwordVisibility) {
  const validations = data.split("\n").map((line) => {
    const [policy, password] = line.split(": ");
    const [range, letter] = policy.split(" ");
    const [min, max] = range.split("-");
    const count = password.split(letter).length - 1;

    return {
      password,
      isValid: count >= min && count <= max,
    };
  });

  return validations.filter((validation) => {
    return passwordVisibility ? validation.isValid : !validation.isValid;
  });
}

console.log(
  getSolution(PASSWORDS_VISIBILITY.SHOW_INVALID)[PASSWORD_POSITION - 1].password
);
