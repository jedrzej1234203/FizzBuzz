const fizzBuzz = require("./FizzBuzz");

describe("fizzBuzz", () => {
  it("Should Return Fizz if number can be divided by 3", () => {
    expect(fizzBuzz.divide(9)).toBe("Fizz");
  });
  it("Should return Buzz when number can be divided by 5", () => {
    expect(fizzBuzz.divide(10)).toBe("Buzz");
  });
  it("Should return FizzBuzz if number can be divided by 3 and 5", () => {
    expect(fizzBuzz.divide(15)).toBe("FizzBuzz");
  });
  it("should return given number (7) if cannot be divided by 3 or 5 or both", () => {
    expect(fizzBuzz.divide(7)).toBe(7);
  });
});
