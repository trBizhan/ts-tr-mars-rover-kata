import { commandHandler } from "./rover";
import * as coord from "./coordinate";
import { myPlateau } from "./plateau";
import * as readline from "readline";
//import * as promptSync from "prompt-sync";  // for console input

console.log(`Plateau's dimension: x = ${myPlateau.x} y = ${myPlateau.y}`);
const c = coord.getCoordinate();
console.log(
  `The rover starting coordinate: x = ${c.x} y = ${c.y} orientation = ${c.o}`
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entr a command for Rover or q for quit : ", (inst) => {
  if (inst !== "q") {
    let coord = commandHandler(inst);
    console.log(
      `new coordinate x : ${coord.x} y : ${coord.y} orientation : ${coord.o}`
    );
    rl.close();
  }
});
