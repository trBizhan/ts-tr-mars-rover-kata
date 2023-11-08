export interface coordinate {
  x: number; // x axis
  y: number; // y axis
  o: orientation; // orientation N, E, S, W
}

export type orientation = "N" | "E" | "S" | "W";

export interface instruction {
  c: command;
}

export type command = "L" | "R" | "M";

let myCoord = setCoordinate();

export function setCoordinate(
  x: number = 0,
  y: number = 0,
  o: orientation = "N"
): coordinate {
  // rover starting coordinate
  return { x: x, y: y, o: o };
}

export function getCoordinate(s: string): coordinate {
  // get rover's coordinate

  let coord: coordinate = myCoord;
  return coord;
}
