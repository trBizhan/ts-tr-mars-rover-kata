import * as coord from "./coordinate";
//import * as plat from "./plateau";

function parseCommand(s: string): void {
  let myCoord = coord.getCoordinate(s);
}

export function commandHandler(myCommand: string): coord.coordinate {
  let inst: Array<string> = myCommand.split("");
  for (let i = 0; i < inst.length; i++) {
    parseCommand(inst[i]);
  }

  // move
  let result: coord.coordinate = { x: 1, y: 1, o: "N" };
  return result;
}
