import * as coord from "./coordinate";
import { myPlateau } from "./plateau";

console.log(`Plateau's dimension: x = ${myPlateau.x} y = ${myPlateau.y}`);
const c = coord.getCoordinate();
console.log(
  `The rover starting coordinate: x = ${c.x} y = ${c.y} orientation = ${c.o}`
);
