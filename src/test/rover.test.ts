import { commandHandler } from "../rover";

interface coordinate {
  x: number; // x axis
  y: number; // y axis
  o: orientation; // orientation N, E, S, W
}

type orientation = "N" | "E" | "S" | "W";

describe("test rover", () => {
  it("should return coordinate", () => {
    const result: coordinate = { x: 1, y: 1, o: "N" };
    expect(commandHandler("M")).toEqual(result);
  });
});
