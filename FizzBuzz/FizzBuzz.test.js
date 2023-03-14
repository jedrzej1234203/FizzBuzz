const fizzBuzz = require("./FizzBuzz");

describe("fizzBuzz", () => {
    it("Schould Return Fizz if number can be divided by 3",()=>{
        expect(fizzBuzz.fizz(9)).toBe("Fizz");
    })
});
