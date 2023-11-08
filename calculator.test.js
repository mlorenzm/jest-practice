const calculator = require("./calculator");

test("Adds single digits", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Adds multiple digits", () => {
  expect(calculator.add(22, 33)).toBe(55);
});

test("Remove single digits", () => {
  expect(calculator.remove(2, 3)).toBe(-1);
});

test("Divide", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("Divide by 0", () => {
  expect(calculator.divide(1, 0)).toBe("error");
});

test("Divide by irrational", () => {
  expect(calculator.divide(1, 3)).toBe(0.333333333333333333);
});

test("Multiply single digits", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});
