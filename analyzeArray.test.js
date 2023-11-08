const analyzeArray = require("./analyzeArray");

test("Computes average", () => {
  expect(analyzeArray([55, 55, 55, 55]).average).toBe(55);
});

test("Computes minimum", () => {
  expect(analyzeArray([-2, 25, 3, 5]).min).toBe(-2);
});

test("Computes maximum", () => {
  expect(analyzeArray([-2, 25, 3, 5]).max).toBe(25);
});

test("Computes length", () => {
  expect(analyzeArray([-2, 25, 3, 5]).length).toBe(4);
});
