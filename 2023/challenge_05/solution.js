import data from "./data";

const USERS_VISIBILITY = Object.freeze({
  SHOW_VALID: true,
  SHOW_INVALID: false,
});

function getSolution(userVisibility) {
  const users = data.split("\n");
  const validations = users.map((user) => {
    const [id, username, email, age, location] = user.split(",");
    const verification = {
      id: /^[a-zA-Z0-9]+$/.test(id),
      username: /^[a-zA-Z0-9]+$/.test(username),
      email: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/.test(email),
      age: !age || typeof Number(age) === "number",
      location: !location || typeof location === "string",
    };

    return {
      id,
      username,
      email,
      age,
      location,
      isValid: Object.values(verification).every((value) => value),
    };
  });

  return validations.filter((validation) => {
    return userVisibility ? validation.isValid : !validation.isValid;
  });
}

const users = getSolution(USERS_VISIBILITY.SHOW_INVALID);
const hiddenMessage = users.map((user) => user.username.charAt(0)).join("");

console.log(hiddenMessage);
