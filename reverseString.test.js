const reverseString = require("./reverseString");

test("Single word is reversed", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Multiple word are reversed", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("Hollow string not error", () => {
  expect(reverseString()).toBe();
});
