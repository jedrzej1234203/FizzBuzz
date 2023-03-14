const fizzBuzz = {
  divide: function (a) {
    if (a % 3 === 0) {
      return "Fizz";
    }
    if (a % 5 === 0) {
      return "Buzz";
    }
  },
};

module.exports = fizzBuzz;
