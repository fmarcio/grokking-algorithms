const showItemsCount = require("../divide-and-conquer-show-count");

describe("showItemsCount", () => {
  it("should return 0 for an empty array", () => {
    expect(showItemsCount([])).toBe(0);
  });

  it("should return the correct count for an array with elements", () => {
    expect(showItemsCount([1])).toBe(1);
    expect(showItemsCount([1, 2, 3])).toBe(3);
    expect(showItemsCount(["a", "b", "c", "d"])).toBe(4);
    expect(showItemsCount([2, 4, 6, 8, 10])).toBe(5);
  });
});
