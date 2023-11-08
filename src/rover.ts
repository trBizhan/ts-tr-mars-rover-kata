import * as coord from "./coordinate";

export function commandHandler(myCommand: string): coord.coordinate {
  let inst: Array<string> = myCommand.split("");
  inst.forEach((i) => coord.parseCommand(i));

  // get coordinate
  return coord.getCoordinate();
}
