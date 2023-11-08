import { checkWrapAround } from "./plateau";

export interface coordinate {
  x: number; // x axis
  y: number; // y axis
  o: string; // orientation N, E, S, W
}

export let myCoord: coordinate = setCoordinate();

export function setCoordinate(
  x: number = 1,
  y: number = 1,
  o: string = "N"
): coordinate {
  // rover starting coordinate
  return { x: x, y: y, o: o };
}

export const getCoordinate = (): coordinate => {
  // return rover's coordinate
  return myCoord;
};

export const parseCommand = (s: string): void => {
  let myCoord = getCoordinate();
  switch (s) {
    case "L":
      switch (myCoord.o) {
        case "N":
          myCoord.o = "W";
          break;
        case "S":
          myCoord.o = "E";
          break;
        case "E":
          myCoord.o = "N";
          break;
        case "W":
          myCoord.o = "S";
          break;
      }
      break;

    case "R":
      switch (myCoord.o) {
        case "N":
          myCoord.o = "E";
          break;
        case "S":
          myCoord.o = "W";
          break;
        case "E":
          myCoord.o = "S";
          break;
        case "W":
          myCoord.o = "N";
          break;
      }
      break;
    case "M":
      if (checkWrapAround()) moveRover();
      else {
        wrapAround();
        moveRover();
      }
      break;
    default:
      break;
  }
};

const wrapAround = (): void => {
  switch (myCoord.o) {
    case "N":
      myCoord.o = "S";
      break;
    case "S":
      myCoord.o = "N";
      break;
    case "E":
      myCoord.o = "W";
      break;
    case "W":
      myCoord.o = "E";
      break;
  }
};

const moveRover = (): void => {
  switch (myCoord.o) {
    case "N":
      myCoord.y += 1;
      break;
    case "S":
      myCoord.y -= 1;
      break;
    case "E":
      myCoord.x += 1;
      break;
    case "W":
      myCoord.x -= 1;
      break;
  }
};
