import * as coord from "./coordinate";

const validCommand = /[^LRM]/i; // only combination of L|R|M valid

export function commandHandler(myCommand: string): coord.coordinate {
  if (validCommand.test(myCommand)) new Error("Invalid command");

  let inst: Array<string> = myCommand.split("");
  inst.forEach((i) => coord.parseCommand(i));
  return coord.getCoordinate();
}
