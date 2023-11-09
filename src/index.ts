import { commandHandler } from "./rover";
import * as coord from "./coordinate";
import { myPlateau } from "./plateau";
//import * as promptSync from "prompt-sync";  // for console input

console.log(`Plateau's dimension: x = ${myPlateau.x} y = ${myPlateau.y}`);
const c = coord.getCoordinate();
console.log(
  `The rover starting coordinate: x = ${c.x} y = ${c.y} orientation = ${c.o}`
);

/* to be incorporated for console command entry
let command = prompt("Enter command ( any combination of L|R|M):  ");
let newCoord = commandHandler(command);
console.log(
  `The now rover coordinate is: x = ${newCoord.x} y = ${newCoord.y} orientation  = ${newCoord.o}`
);
*/
