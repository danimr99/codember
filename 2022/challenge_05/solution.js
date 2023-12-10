import { data as players } from "./data.js";

const getSolution = () => {
  const playerIndex = parseInt(
    players.length.toString(2).substring(1) + "0",
    2
  );

  return [players[playerIndex], playerIndex];
};

console.log(getSolution());
