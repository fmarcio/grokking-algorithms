const quicksort = require("../quicksort");

describe("quicksort", () => {
  it("should sort an array with two elements", () => {
    expect(quicksort([5, 2])).toEqual([2, 5]);
  });

  it("should sort an array with multiple elements", () => {
    expect(quicksort([5, 2, 4, 3, 0, 29])).toEqual([0, 2, 3, 4, 5, 29]);
  });

  it("should sort an array with duplicate elements", () => {
    expect(quicksort([5, 2, 4, 3, 0, 29, 2])).toEqual([0, 2, 2, 3, 4, 5, 29]);
  });

  it("should sort a reverse sorted array", () => {
    expect(quicksort([29, 5, 4, 3, 2, 0])).toEqual([0, 2, 3, 4, 5, 29]);
  });

  it("should sort an array with negative numbers", () => {
    expect(quicksort([-5, 2, -4, 3, 0, -29])).toEqual([-29, -5, -4, 0, 2, 3]);
  });

  it("should sort an array with positive and negative numbers", () => {
    expect(quicksort([-5, 2, -4, 0, 3, -29, 10])).toEqual([
      -29, -5, -4, 0, 2, 3, 10,
    ]);
  });
});
