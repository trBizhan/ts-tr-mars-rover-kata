import { commandHandler } from "../rover";

import { coordinate } from "../coordinate";

describe("test rover", () => {
  it("should return coordinate", () => {
    const result: coordinate = { x: 1, y: 2, o: "N" };
    expect(commandHandler("M")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 1, y: 4, o: "N" };
    expect(commandHandler("MM")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 1, y: 4, o: "S" };
    expect(commandHandler("MM")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 1, y: 2, o: "S" };
    expect(commandHandler("MM")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 1, y: 0, o: "S" };
    expect(commandHandler("MM")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 1, y: 2, o: "N" };
    expect(commandHandler("MM")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 3, y: 2, o: "E" };
    expect(commandHandler("RMM")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 4, y: 2, o: "W" };
    expect(commandHandler("MMM")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 0, y: 2, o: "W" };
    expect(commandHandler("MMMM")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 2, y: 2, o: "E" };
    expect(commandHandler("MM")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 2, y: 0, o: "S" };
    expect(commandHandler("RMM")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 2, y: 2, o: "N" };
    expect(commandHandler("MM")).toEqual(result);
  });

  it("should return coordinate", () => {
    const result: coordinate = { x: 1, y: 3, o: "N" };
    expect(commandHandler("LMRM")).toEqual(result);
  });
});
