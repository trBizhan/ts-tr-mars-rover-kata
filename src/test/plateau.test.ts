import * as plat from "../plateau";

interface plateau {
  x: number;
  y: number;
}

interface coordinate {
  x: number; // x axis
  y: number; // y axis
  o: orientation; // orientation N, E, S, W
}

type orientation = "N" | "E" | "S" | "W";

describe("test setting plateau shape", () => {
  it("should return x and y axis", () => {
    const result: plateau = { x: 5, y: 5 };
    expect(plat.setPlateauShape(5, 5)).toEqual(result);
  });
});

describe("test wrap around", () => {
  it("should return new coordinate", () => {
    expect(plat.checkWrapAround()).toBe(false);
  });
});
