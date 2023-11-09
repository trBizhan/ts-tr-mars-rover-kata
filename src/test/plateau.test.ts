import * as plat from "../plateau";

describe("test setting plateau shape", () => {
  it("should return x and y axis", () => {
    const result: plat.plateau = { x: 5, y: 5 };
    expect(plat.setPlateauShape(5, 5)).toEqual(result);
  });
});

describe("test checkWrapArround", () => {
  it("should return true if at the edge", () => {
    expect(plat.checkWrapAround()).toBe(true);
  });
});
