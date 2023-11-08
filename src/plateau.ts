import { coordinate } from "./coordinate";

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

export function checkWrapAround(coord: coordinate): coordinate {
  // check if the Rover has reached the edge
  // if so, wrap around and provide new coordinat

  let newCoord: coordinate;

  // permissible move
  if (coord.x === plateauShape.x) return newCoord;
  return newCoord;
}
