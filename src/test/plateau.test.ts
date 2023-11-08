import * as plat from "../plateau";

interface plateau {
  x: number;
  y: number;
}

interface coordinate {
  x: number; // x axis
  y: number; // y axis
  o: string; // orientation N, E, S, W
}

//type orientation = "N" | "E" | "S" | "W";

describe("test setting plateau shape", () => {
  it("should return x and y axis", () => {
    const result: plateau = { x: 5, y: 5 };
    expect(plat.setPlateauShape(5, 5)).toEqual(result);
  });
});

describe("test checkWrapArround", () => {
  it("should return true if at the edge", () => {
    expect(plat.checkWrapAround()).toBe(true);
  });
});
