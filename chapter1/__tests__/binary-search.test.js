const binarySearch = require("../binary-search");

describe("Binary search", () => {
  test("Check if target item is present in the array", () => {
    const array = [10, 23, 112, 448, 12837];

    const result = binarySearch(array, 112);

    expect(result).toBe("Target item is in the index 2 of the array");
  });

  test("Check if target item is NOT present in the array", () => {
    const array = [10, 23, 112, 448, 12837];

    const result = binarySearch(array, 11);

    expect(result).toBe("Index is -1. Target item is not present in the array");
  });
});
