const decrease = require("../decrease"); // Assuming recursion.js is in the same directory

describe("decrease", () => {
  it("should decrease the number and print each value until reaching the base case", () => {
    const consoleSpy = jest.spyOn(console, "log");
    const initialValue = 3;
    const result = decrease(initialValue);

    // 3 calls + base case
    expect(consoleSpy).toHaveBeenCalledTimes(initialValue + 1);

    // check if each recursive call has the expected value (i)
    // 1st call has value 3
    // 2nd call has value 2, etc..
    for (let i = initialValue; i >= 0; i--) {
      expect(consoleSpy).toHaveBeenNthCalledWith(initialValue - i + 1, i);
    }

    expect(result).toBe("Done! Base case is reached.");

    // restore the original console.log
    consoleSpy.mockRestore();
  });
});
