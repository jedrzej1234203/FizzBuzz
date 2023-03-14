const fizzBuzz = require("./FizzBuzz");

describe("fizzBuzz", () => {
  it("Schould Return Fizz if number can be divided by 3", () => {
    expect(fizzBuzz.divide(9)).toBe("Fizz");
  });
  it("Schould return Buzz when number can be divided by 5", () => {
    expect(fizzBuzz.divide(10)).toBe("Buzz");
  });
});
