const capitalize = require("./capitalize");

test("Single word is capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Multiple word are capitalized", () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test("Zero length word", () => {
  expect(capitalize()).toBe();
});
