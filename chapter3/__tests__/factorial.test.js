const factorial = require("../factorial");

describe("factorial", () => {
  it("should calculate factorial correctly for positive numbers", () => {
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
    expect(factorial(4)).toBe(24);
    expect(factorial(5)).toBe(120);
  });
});
