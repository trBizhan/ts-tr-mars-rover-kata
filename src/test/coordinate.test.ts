import * as coord from "../coordinate";
import { getCoordinate } from "../coordinate";

interface coordinate {
  x: number; // x axis
  y: number; // y axis
  o: orientation; // orientation N, E, S, W
}

type orientation = "N" | "E" | "S" | "W";

describe("test get coordinate", () => {
  it("should return coordinate", () => {
    const result: coordinate = { x: 0, y: 0, o: "N" };
    expect(coord.getCoordinate()).toEqual(result);
  });
});

describe("test set coordinate", () => {
  it("returns void ", () => {
    const result: coordinate = { x: 1, y: 1, o: "S" };
    expect(coord.setCoordinate(1, 1, "S")).toEqual(result);
  });
});
