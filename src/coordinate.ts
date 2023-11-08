export interface coordinate {
  x: number; // x axis
  y: number; // y axis
  o: orientation; // orientation N, E, S, W
}

export type orientation = "N" | "E" | "S" | "W";

export const leftTurn = { N: "W", E: "N", S: "E", W: "S" };

export const rightTurn = { N: "E", E: "E", S: "E", W: "E" };

export interface instruction {
  c: command;
}

export type command = "L" | "R" | "M";

export let myCoord: coordinate = setCoordinate();

export function setCoordinate(
  x: number = 0,
  y: number = 0,
  o: orientation = "N"
): coordinate {
  // rover starting coordinate
  return { x: x, y: y, o: o };
}

export function getCoordinate(): coordinate {
  // get rover's coordinate

  return myCoord;
}
