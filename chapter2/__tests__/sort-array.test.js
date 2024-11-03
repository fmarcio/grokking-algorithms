const sortArray = require("../sort-array");

describe("Sort Array", () => {
  test("Sort array from lowest to highest", () => {
    const array = [10, 123, 489, 3];
    const sortedArray = [3, 10, 123, 489];

    const result = sortArray(array);

    expect(result).toStrictEqual(sortedArray);
  });
});
