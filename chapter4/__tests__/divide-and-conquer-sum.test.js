const sumArrayElements = require("../divide-and-conquer-sum");

describe("sumArrayElements", () => {
  it("should return 0 for an empty array", () => {
    expect(sumArrayElements([])).toBe(0);
  });

  it("should return the correct sum for arrays with numbers", () => {
    expect(sumArrayElements([1])).toBe(1);
    expect(sumArrayElements([1, 2, 3])).toBe(6);
    expect(sumArrayElements([2, 4, 6, 8, 10])).toBe(30);
  });

  it("should handle arrays with negative numbers", () => {
    expect(sumArrayElements([-1, -2, -3])).toBe(-6);
    expect(sumArrayElements([1, -2, 3, -4])).toBe(-2);
  });

  it("should handle arrays with mixed positive and negative numbers and zero", () => {
    expect(sumArrayElements([0])).toBe(0);
    expect(sumArrayElements([1, 0, -1])).toBe(0);
  });
});
