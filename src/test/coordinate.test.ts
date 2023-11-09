import * as coord from "../coordinate";

describe("test get coordinate", () => {
  it("should return coordinate", () => {
    const result: coord.coordinate = { x: 1, y: 1, o: "N" };
    expect(coord.getCoordinate()).toEqual(result);
  });
});

describe("test set coordinate", () => {
  it("returns void ", () => {
    const result: coord.coordinate = { x: 1, y: 1, o: "S" };
    expect(coord.setCoordinate(1, 1, "S")).toEqual(result);
  });
});
