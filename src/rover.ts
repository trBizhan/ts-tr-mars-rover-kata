import * as coord from "./coordinate";
//import * as plat from "./plateau";
import { myCoord } from "./coordinate";

export function commandHandler(myCommand: string): coord.coordinate {
  let inst: Array<string> = myCommand.split("");
  for (let i = 0; i < inst.length; i++) {
    coord.parseCommand(inst[i]);
  }

  // get coordinate
  let result: coord.coordinate = coord.getCoordinate();
  return result;
}
