import * as coord from "./coordinate";
//import { myCoord } from "./coordinate";

export interface plateau {
  x: number;
  y: number;
}

export interface wrap {
  N: string;
  E: string;
  S: string;
  W: string;
}

let wrapArround: wrap = { N: "S", E: "W", S: "N", W: "E" };

const myPlateau = setPlateauShape(5, 5);

export function setPlateauShape(x: number, y: number): plateau {
  // set the shape of plateau
  return { x: x, y: y };
}

export function checkWrapAround(): boolean {
  // check if the Rover has reached the edge

  let result: boolean = false;

  switch (coord.myCoord.o) {
    case "N":
    case "S":
      if (coord.myCoord.y > 0 && coord.myCoord.y < myPlateau.y) result = true;
      break;
    case "E":
    case "W":
      if (coord.myCoord.x > 0 && coord.myCoord.x < myPlateau.x) result = true;
      break;
  }

  return result;
}
