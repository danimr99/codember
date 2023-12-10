import { data } from "./data.js";

const VALID_PROPS = Object.freeze(["usr", "eme", "psw", "age", "loc", "fll"]);

function separateUsers(text) {
  return text.split("\n\n").map((user) => user.trim());
}

function checkUser(user) {
  const props = user.split(" ");

  return (
    props.length >= VALID_PROPS.length &&
    props.some((prop) => prop.match(/usr:.*/)) &&
    props.some((prop) => prop.match(/eme:.*/)) &&
    props.some((prop) => prop.match(/psw:.*/)) &&
    props.some((prop) => prop.match(/age:.*/)) &&
    props.some((prop) => prop.match(/loc:.*/)) &&
    props.some((prop) => prop.match(/fll:.*/))
  );
}

function getSolution() {
  const users = separateUsers(data);
  const numberOfValidUsers = users.filter(checkUser).length;
  const lastValidUser = users.findLast(checkUser);
  const userName = lastValidUser?.match(/usr:([^\s]+)/)?.[1];

  return `${numberOfValidUsers}${userName}`;
}

console.log(getSolution());
