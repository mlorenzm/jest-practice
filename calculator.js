const calculator = {
  add(x, y) {
    return x + y;
  },
  remove(x, y) {
    return x - y;
  },
  divide(x, y) {
    if (y == 0) {
      return "error";
    }
    return x / y;
  },
  multiply(x, y) {
    return x * y;
  },
};

module.exports = calculator;
