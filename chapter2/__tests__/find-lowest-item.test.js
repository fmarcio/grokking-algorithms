const findLowestItem = require("../find-lowest-item");

describe("Array lowest item", () => {
  test("Find lowest item in array", () => {
    const array = [10, 234, 1, 44, 12837];

    const result = findLowestItem(array);

    expect(result).toBe(1);
  });
});
